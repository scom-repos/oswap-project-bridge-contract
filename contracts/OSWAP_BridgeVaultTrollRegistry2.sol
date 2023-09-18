// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.6;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "./interfaces/IOSWAP_BridgeVault2.sol";
import "./interfaces/IOSWAP_BridgeVaultTrollRegistry2.sol";
import "./interfaces/IOSWAP_ConfigStore.sol";
import "./OSWAP_SideChainTrollRegistry.sol";
import "./interfaces/IOSWAP_SideChainProjectRegistry.sol";

contract OSWAP_BridgeVaultTrollRegistry2 is IOSWAP_BridgeVaultTrollRegistry2, ReentrancyGuard {
    using SafeERC20 for IERC20;
    using ECDSA for bytes32;


    modifier whenNotPaused() {
        require(!trollRegistry.paused(), "PAUSED!");
        _;
    }

    // event Stake(address indexed backer, uint256 indexed trollProfileIndex, uint256 amount, uint256 shares, uint256 backerBalance, uint256 trollBalance, uint256 totalShares);
    // event UnstakeRequest(address indexed backer, uint256 indexed trollProfileIndex, uint256 shares, uint256 backerBalance);
    // event Unstake(address indexed backer, uint256 indexed trollProfileIndex, uint256 amount, uint256 shares, uint256 approvalDecrement, uint256 trollBalance, uint256 totalShares);
    // event UnstakeApproval(address indexed backer, address indexed msgSender, uint256[] signers, uint256 shares);
    // event UpdateConfigStore(OSWAP_ConfigStore newConfigStore);
    // event UpdateTrollRegistry(OSWAP_SideChainTrollRegistry newTrollRegistry);
    // event Penalty(uint256 indexed trollProfileIndex, uint256 amount);

    // struct Stakes{
    //     uint256 trollProfileIndex;
    //     uint256 shares;
    //     uint256 pendingWithdrawal;
    //     uint256 approvedWithdrawal;
    // }
    // // struct StakedBy{
    // //     address backer;
    // //     uint256 index;
    // // }


    uint256 public override projectId;
    IERC20 public override bondToken;
    IOSWAP_BridgeVault2 public override bridgeVault;
    IOSWAP_SideChainTrollRegistry public override trollRegistry;
    IOSWAP_SideChainProjectRegistry public override projectRegistry;
    IOSWAP_ConfigStore public override configStore;

    mapping(address => Stakes) public override backerStakes; // backerStakes[bakcer] = Stakes;
    mapping(uint256 => address[]) public override stakedBy; // stakedBy[trollProfileIndex][idx] = backer;
    mapping(uint256 => mapping(address => uint256)) public override stakedByInv; // stakedByInv[trollProfileIndex][backer] = stakedBy_idx;

    mapping(uint256 => uint256) public override trollStakesBalances; // trollStakesBalances[trollProfileIndex] = balance
    mapping(uint256 => uint256) public override trollStakesTotalShares; // trollStakesTotalShares[trollProfileIndex] = shares

    mapping(bytes32 => bool) public override usedNonce;

    address creator;
    constructor(){
        creator = msg.sender;
    }
    function init(IOSWAP_SideChainProjectRegistry _projectRegistry, uint256 _projectId, IERC20 _bondToken, IOSWAP_BridgeVault2 _bridgeVault) external override {
        require(creator == msg.sender);
        creator = address(0);
        projectId = _projectId;
        bondToken = _bondToken;
        projectRegistry = _projectRegistry;
        bridgeVault = _bridgeVault;
        IOSWAP_SideChainTrollRegistry _trollRegistry = _projectRegistry.trollRegistry();
        trollRegistry = _trollRegistry;
        configStore = IOSWAP_ConfigStore(address(_trollRegistry.configStore())); // FIXME
    }
    function updateConfigStore() external override {
        IOSWAP_ConfigStore _configStore = IOSWAP_ConfigStore(address(configStore.newConfigStore())); // FIXME
        require(address(_configStore) != address(0), "Invalid config store");
        configStore = _configStore;
        emit UpdateConfigStore(configStore);
    }
    function updateTrollRegistry() external override {
        IOSWAP_SideChainTrollRegistry _trollRegistry = IOSWAP_SideChainTrollRegistry(trollRegistry.newTrollRegistry());
        require(address(_trollRegistry) != address(0), "Invalid config store");
        trollRegistry = _trollRegistry;
        emit UpdateTrollRegistry(trollRegistry);
    }

    function stakedByLength(uint256 trollProfileIndex) external view override returns (uint256 length) {
        length = stakedBy[trollProfileIndex].length;
    }
    function getBackers(uint256 trollProfileIndex) external view override returns (address[] memory backers) {
        return stakedBy[trollProfileIndex];
    }

    function removeStakedBy(uint256 _index) internal {
        uint idx = stakedByInv[_index][msg.sender];
        uint256 lastIdx = stakedBy[_index].length - 1;
        if (idx != lastIdx){
            stakedBy[_index][idx] = stakedBy[_index][lastIdx];
            stakedByInv[_index][ stakedBy[_index][idx] ] = idx;
        }
        stakedBy[_index].pop();
        delete stakedByInv[_index][msg.sender];
    }

    function stake(uint256 trollProfileIndex, uint256 amount) external override nonReentrant whenNotPaused returns (uint256 shares){
        require(projectRegistry.isProjectTroll(projectId, trollProfileIndex), "not a project troll");

        if (amount > 0) {
            uint256 balance = bondToken.balanceOf(address(this));
            bondToken.safeTransferFrom(msg.sender, address(this), amount);
            amount = bondToken.balanceOf(address(this)) - balance;
        }

        Stakes storage staking = backerStakes[msg.sender];
        if (staking.shares > 0) {
            if (staking.trollProfileIndex != trollProfileIndex) {
                require(staking.pendingWithdrawal == 0 && staking.approvedWithdrawal == 0, "you have pending withdrawal");
                // existing staking found, remvoe stakes from old troll and found the latest stakes amount after penalties
                uint256 _index = staking.trollProfileIndex;
                uint256 stakedAmount = staking.shares * trollStakesBalances[_index] / trollStakesTotalShares[_index];
                trollStakesBalances[_index] -= stakedAmount;
                trollStakesTotalShares[_index] -= staking.shares;
                amount += stakedAmount;

                removeStakedBy(_index);

                emit UnstakeRequest(msg.sender, _index, staking.shares, 0);
                emit Unstake(msg.sender, _index, stakedAmount, staking.shares, 0, trollStakesBalances[_index], trollStakesTotalShares[_index]);

                stakedByInv[trollProfileIndex][msg.sender] = stakedBy[trollProfileIndex].length;
                stakedBy[trollProfileIndex].push(msg.sender);

                staking.trollProfileIndex = trollProfileIndex;
                staking.shares = 0;
            }
        } else {
            // new staking
            staking.trollProfileIndex = trollProfileIndex;
            stakedByInv[trollProfileIndex][msg.sender] = stakedBy[trollProfileIndex].length;
            stakedBy[trollProfileIndex].push(msg.sender);
        }

        uint256 trollActualBalance = trollStakesBalances[trollProfileIndex];
        shares = trollActualBalance == 0 ? amount : (amount * trollStakesTotalShares[trollProfileIndex] / trollActualBalance);
        require(shares > 0, "amount too small");
        trollStakesTotalShares[trollProfileIndex] += shares;
        trollStakesBalances[trollProfileIndex] += amount;
        staking.shares += shares;

        emit Stake(msg.sender, trollProfileIndex, amount, shares, staking.shares, trollStakesBalances[trollProfileIndex], trollStakesTotalShares[trollProfileIndex]);

    }
    function maxWithdrawal(address backer) external view override returns (uint256 amount) {
        Stakes storage staking = backerStakes[backer];
        uint256 trollProfileIndex = staking.trollProfileIndex;
        amount = staking.shares * (trollStakesBalances[trollProfileIndex]) / trollStakesTotalShares[trollProfileIndex];
    }

    function hashUnstakeRequest(address backer, uint256 trollProfileIndex, uint256 shares, uint256 _nonce) public view override returns (bytes32 hash) {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        return keccak256(abi.encodePacked(
            chainId,
            address(this),
            backer,
            trollProfileIndex,
            shares,
            _nonce
        ));
    }
    function unstakeRequest(uint256 shares) external override whenNotPaused {
        Stakes storage staking = backerStakes[msg.sender];
        uint256 trollProfileIndex = staking.trollProfileIndex;
        require(trollProfileIndex != 0, "not a backer");
        staking.shares -= shares;
        staking.pendingWithdrawal += shares;

        if (staking.shares == 0){
            removeStakedBy(trollProfileIndex);
        }

        emit UnstakeRequest(msg.sender, trollProfileIndex, shares, staking.shares);
    }
    function unstakeApprove(bytes[] calldata signatures, address backer, uint256 trollProfileIndex, uint256 shares, uint256 _nonce) external override {
        Stakes storage staking = backerStakes[backer];
        require(trollProfileIndex == staking.trollProfileIndex, "invalid trollProfileIndex");
        require(shares <= staking.pendingWithdrawal, "Invalid shares amount");
        (,, uint256[] memory signers) = _verifyStakedValue(msg.sender, signatures, hashUnstakeRequest(backer, trollProfileIndex, shares, _nonce));
        staking.approvedWithdrawal += shares;
        emit UnstakeApproval(backer, msg.sender, signers, shares);
    }
    function unstake(address backer, uint256 shares) external override nonReentrant whenNotPaused {
        Stakes storage staking = backerStakes[backer];
        require(shares <= staking.approvedWithdrawal, "amount exceeded approval");
        uint256 trollProfileIndex = staking.trollProfileIndex;

        staking.approvedWithdrawal -= shares;
        staking.pendingWithdrawal -= shares;

        uint256 amount = shares * trollStakesBalances[trollProfileIndex] / trollStakesTotalShares[trollProfileIndex];

        trollStakesTotalShares[trollProfileIndex] -= shares;
        trollStakesBalances[trollProfileIndex] -= amount;

        bondToken.safeTransfer(backer, amount);

        emit Unstake(backer, trollProfileIndex, amount, shares, shares, trollStakesBalances[trollProfileIndex], trollStakesTotalShares[trollProfileIndex]);
    }

    function verifyStakedValue(address msgSender, bytes[] calldata signatures, bytes32 paramsHash) external override returns (uint256 superTrollCount, uint totalStake, uint256[] memory signers) {
        require(msg.sender == address(bridgeVault), "not authorized");
        return _verifyStakedValue(msgSender, signatures, paramsHash);
    }
    function _verifyStakedValue(address /*msgSender*/, bytes[] calldata signatures, bytes32 paramsHash) internal returns (uint256 superTrollCount, uint totalStake, uint256[] memory signers) {
        require(!usedNonce[paramsHash], "nonce used");
        usedNonce[paramsHash] = true;

        uint256 generalTrollCount;
        {
        uint256 length = signatures.length;
        signers = new uint256[](length);
        address lastSigningTroll;
        for (uint256 i = 0; i < length; ++i) {
            address troll = paramsHash.toEthSignedMessageHash().recover(signatures[i]);
            require(troll != address(0), "Invalid signer");
            uint256 trollProfileIndex = trollRegistry.trollProfileInv(troll);
            if (trollProfileIndex > 0 && troll > lastSigningTroll) {
                signers[i] = trollProfileIndex;
                if (trollRegistry.isSuperTroll(troll, true)) {
                    superTrollCount++;
                } else if (trollRegistry.isGeneralTroll(troll, true)) {
                    generalTrollCount++;
                }
                totalStake += trollStakesBalances[trollProfileIndex];
                lastSigningTroll = troll;
            }
        }
        }

        (uint256 generalTrollMinCount, uint256 superTrollMinCount, /*uint256 transactionsGap*/) = configStore.getSignatureVerificationParams();
        require(generalTrollCount >= generalTrollMinCount, "OSWAP_BridgeVault: Mininum general troll count not met");
        require(superTrollCount >= superTrollMinCount, "OSWAP_BridgeVault: Mininum super troll count not met");
    }

    function penalizeTroll(uint256 trollProfileIndex, uint256 amount) external override {
        require(msg.sender == address(trollRegistry), "not from registry");
        require(amount <= trollStakesBalances[trollProfileIndex], "penalty exceeds troll balance");
        trollStakesBalances[trollProfileIndex] -= amount;
        // if penalty == balance, forfeit all backers' bonds
        if (trollStakesBalances[trollProfileIndex] == 0) {
            delete trollStakesBalances[trollProfileIndex];
            delete trollStakesTotalShares[trollProfileIndex];
            address[] storage backers = stakedBy[trollProfileIndex];
            uint256 length = backers.length;
            for (uint256 i = 0 ; i < length ; i++) {
                address backer = backers[i];
                delete backerStakes[backer];
                delete stakedByInv[trollProfileIndex][backer];
            }
            delete stakedBy[trollProfileIndex];
        }
        emit Penalty(trollProfileIndex, amount);
    }
}