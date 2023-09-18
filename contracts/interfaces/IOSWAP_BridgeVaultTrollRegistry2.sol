// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.6;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "./IOSWAP_BridgeVault2.sol";
import "./IOSWAP_ConfigStore.sol";
import "./IOSWAP_SideChainTrollRegistry.sol";
import "./IOSWAP_SideChainProjectRegistry.sol";

interface IOSWAP_BridgeVaultTrollRegistry2 {

    // modifier onlyOwner {
    //     require(msg.sender == owner);
    //     _;
    // }
    // modifier whenNotPaused() {
    //     require(!trollRegistry.paused(), "PAUSED!");
    //     _;
    // }

    event Stake(address indexed backer, uint256 indexed trollProfileIndex, uint256 amount, uint256 shares, uint256 backerBalance, uint256 trollBalance, uint256 totalShares);
    event UnstakeRequest(address indexed backer, uint256 indexed trollProfileIndex, uint256 shares, uint256 backerBalance);
    event Unstake(address indexed backer, uint256 indexed trollProfileIndex, uint256 amount, uint256 shares, uint256 approvalDecrement, uint256 trollBalance, uint256 totalShares);
    event UnstakeApproval(address indexed backer, address indexed msgSender, uint256[] signers, uint256 shares);
    event UpdateConfigStore(IOSWAP_ConfigStore newConfigStore);
    event UpdateTrollRegistry(IOSWAP_SideChainTrollRegistry newTrollRegistry);
    event Penalty(uint256 indexed trollProfileIndex, uint256 amount);

    struct Stakes{
        uint256 trollProfileIndex;
        uint256 shares;
        uint256 pendingWithdrawal;
        uint256 approvedWithdrawal;
    }
    // struct StakedBy{
    //     address backer;
    //     uint256 index;
    // }

    function projectId() external view returns (uint256 projectId);
    function bondToken() external view returns (IERC20 bondToken);
    function bridgeVault() external view returns (IOSWAP_BridgeVault2 bridgeVault);
    function trollRegistry() external view returns (IOSWAP_SideChainTrollRegistry trollRegistry);
    function projectRegistry() external view returns (IOSWAP_SideChainProjectRegistry projectRegistry);
    function configStore() external view returns (IOSWAP_ConfigStore configStore);

    function backerStakes(address) external view returns (uint256 trollProfileIndex, uint256 shares, uint256 pendingWithdrawal, uint256 approvedWithdrawal); // backerStakes[bakcer] = Stakes;
    function stakedBy(uint256, uint256 index) external view returns (address stakedBy); // stakedBy[trollProfileIndex][idx] = backer;
    function stakedByInv(uint256, address) external view returns (uint256 stakedByInv); // stakedByInv[trollProfileIndex][backer] = stakedBy_idx;
    function trollStakesBalances(uint256) external view returns (uint256 trollStakesBalances); // trollStakesBalances[trollProfileIndex] = balance
    function trollStakesTotalShares(uint256) external view returns (uint256 trollStakesTotalShares); // trollStakesTotalShares[trollProfileIndex] = shares
    function usedNonce(bytes32) external view returns (bool usedNonce);

    function init(IOSWAP_SideChainProjectRegistry _projectRegistry, uint256 _projectId, IERC20 _bondToken, IOSWAP_BridgeVault2 _bridgeVault) external;
    function updateConfigStore() external;
    function updateTrollRegistry() external;

    function stakedByLength(uint256 trollProfileIndex) external view returns (uint256 length);
    function getBackers(uint256 trollProfileIndex) external view returns (address[] memory backers);

    function stake(uint256 trollProfileIndex, uint256 amount) external returns (uint256 shares);
    function maxWithdrawal(address backer) external view returns (uint256 amount);

    function hashUnstakeRequest(address backer, uint256 trollProfileIndex, uint256 shares, uint256 _nonce) external view returns (bytes32 hash);
    function unstakeRequest(uint256 shares) external;
    function unstakeApprove(bytes[] calldata signatures, address backer, uint256 trollProfileIndex, uint256 shares, uint256 _nonce) external;
    function unstake(address backer, uint256 shares) external;

    function verifyStakedValue(address msgSender, bytes[] calldata signatures, bytes32 paramsHash) external returns (uint256 superTrollCount, uint totalStake, uint256[] memory signers);

    function penalizeTroll(uint256 trollProfileIndex, uint256 amount) external;
}