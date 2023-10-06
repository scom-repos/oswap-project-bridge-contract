// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IOSWAP_BridgeVault2.sol";
import "./interfaces/IOSWAP_BridgeVaultTrollRegistry2.sol";
import "./OSWAP_BridgeVaultTrollRegistry2.sol";
import "./interfaces/IOSWAP_BridgeVault2Creator.sol";
import "./interfaces/IOSWAP_BridgeVaultTrollRegistry2Creator.sol";
import "./interfaces/IOSWAP_SideChainTrollRegistry.sol";
import "./interfaces/IOSWAP_SideChainProjectRegistry.sol";

contract OSWAP_SideChainProjectRegistry is IOSWAP_SideChainProjectRegistry, Authorization {
    using ECDSA for bytes32;
/*
    struct Project {
        IERC20 asset;
        address owner;
        IOSWAP_BridgeVaultTrollRegistry2 vaultRegistry;
        IOSWAP_BridgeVault2 bridgeVault;
        uint256[] projectTrolls; // trollProfileIndex
    }
    struct TrollProfile {
        address owner;
        address troll;
    }
*/

    IOSWAP_SideChainTrollRegistry public override trollRegistry;
    IOSWAP_BridgeVaultTrollRegistry2Creator public override vaultRegistryCreator;
    IOSWAP_BridgeVault2Creator public override bridgeVaultCreator;
    
    mapping(uint256 => TrollProfile) public override trollProfiles; // trollProfiles[trollProfileIndex] = {owner,troll}
    mapping(address => uint256) public override trollProfileInv; // trollProfileInv[troll] = trollProfileIndex

    mapping(uint256 => Project) internal projects; // projects[projectId] = Project
    mapping(uint256 => mapping(uint256 => uint256)) public override projectTrollsInv; // projectTrollsInv[projectId][projectTroll] = projects.projectTrolls.idx
    mapping(uint256 => bool) public override usedNonce;
    mapping(uint256 => mapping(uint256 => bool)) public override usedProjectNonce;
    mapping(address => mapping(uint256 => bool)) public override usedOwnerNonce;
 
    // event NewProjectVault(IERC20 indexed asset, IOSWAP_BridgeVaultTrollRegistry2 indexed vaultRegistry, IOSWAP_BridgeVault2 indexed vault);

    constructor(IOSWAP_SideChainTrollRegistry _trollRegistry) {
        trollRegistry = _trollRegistry;
        isPermitted[msg.sender] = true;
    }

    function initAddress(IOSWAP_BridgeVaultTrollRegistry2Creator _vaultRegistryCreator, IOSWAP_BridgeVault2Creator _bridgeVaultCreator) external onlyOwner {
        require(address(vaultRegistryCreator) == address(0) && address(bridgeVaultCreator) == address(0), "addresses already set");
        require(address(_vaultRegistryCreator) != address(0) && address(_bridgeVaultCreator) != address(0), "zero addresses");
        vaultRegistryCreator = _vaultRegistryCreator;
        bridgeVaultCreator = _bridgeVaultCreator;
    }

    function getProject(uint256 projectId) external view override returns (Project memory project) {
        project = projects[projectId];
    }
    function getProjects(uint256[] calldata projectIds) external view override returns (Project[] memory _projects) {
        uint256 length = projectIds.length;
        _projects = new Project[](length);
        uint256 i = 0;
        while (i < length) {
            _projects[i] = projects[projectIds[i]];
            unchecked { i++; }
        }
    }
    function projectTrollsLength(uint256 projectId) external view override returns (uint256 length) {
        length = projects[projectId].projectTrolls.length;
    }
    function isProjectTroll(uint256 projectId, uint256 trollProfileIndex) public view override returns (bool _isProjectTroll) {
        uint256[] storage projectTrolls = projects[projectId].projectTrolls;
        _isProjectTroll = projectTrolls.length > 0 && 
                          projectTrolls[ projectTrollsInv[projectId][trollProfileIndex] ] == trollProfileIndex;
    }
    function isProjectTrollByAddress(uint256 projectId, address troll) external view override returns (bool _isProjectTroll) {
        uint256 trollProfileIndex = trollProfileInv[troll];
        _isProjectTroll = isProjectTroll(projectId, trollProfileIndex);
    }

    function hashTroll(uint256 trollProfileIndex, address troll, uint256 _nonce) public view override returns (bytes32) {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        return keccak256(abi.encodePacked(
            chainId,
            address(this),
            trollProfileIndex,
            troll,
            _nonce
        ));
    }
    function hashAddTrollFromOwner(address newTroll, uint256 _nonce) public pure override returns (bytes32) {
        return keccak256(abi.encodePacked(
            newTroll,
            _nonce
        ));
    }
    function hashUpdateTrollFromOwner(uint256 trollProfileIndex, address newTroll, uint256 _nonce) public pure override returns (bytes32) {
        return keccak256(abi.encodePacked(
            trollProfileIndex,
            newTroll,
            _nonce
        ));
    }
    function hashNewVaultFormOwner(IERC20 asset, uint256[] calldata projectTrolls, uint256 _nonce) public pure override returns (bytes32) {
        return keccak256(abi.encodePacked(
            asset,
            projectTrolls,
            _nonce
        ));
    }
    function hashNewVault(uint256 projectId, IERC20 asset, address owner, uint256[] calldata projectTrolls, uint256 _nonce) public view override returns (bytes32) {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        return keccak256(abi.encodePacked(
            chainId,
            address(this),
            projectId,
            asset,
            owner,
            projectTrolls,
            _nonce
        ));
    }
    function hashUpdateProjectFromOwner(uint256 projectId, address newOwner, uint256[] calldata trollsToRemove, uint256[] calldata trollsToAdd, uint256 _nonce) public pure override returns (bytes32) {
        return keccak256(abi.encodePacked(
            projectId,
            newOwner,
            trollsToRemove,
            trollsToAdd,
            _nonce
        ));
    }
    function hashUpdateProject(uint256 projectId, address newOwner, uint256[] calldata trollsToRemove, uint256[] calldata trollsToAdd, uint256 _nonce) public view override returns (bytes32) {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        return keccak256(abi.encodePacked(
            chainId,
            address(this),
            projectId,
            newOwner,
            trollsToRemove,
            trollsToAdd,
            _nonce
        ));
    }

    function _verifySignatures(bytes[] calldata signatures, bytes32 paramsHash, uint256 _nonce) internal {
        require(!usedNonce[_nonce], "nonce used");
        usedNonce[_nonce] = true;
        uint256 _superTrollCount;
        bool adminSigned;
        address lastSigningTroll;
        for (uint i = 0; i < signatures.length; ++i) {
            address troll = paramsHash.toEthSignedMessageHash().recover(signatures[i]);
            require(troll != address(0), "Invalid signer");
            if (trollRegistry.isSuperTroll(troll, false)) {
                if (troll > lastSigningTroll) {
                    _superTrollCount++;
                    lastSigningTroll = troll;
                }
            } else if (isPermitted[troll]) {
                adminSigned = true;
            }
        }

        uint256 superTrollCount = trollRegistry.superTrollCount();
        require(
            (superTrollCount > 0 && _superTrollCount == superTrollCount) || 
            ((_superTrollCount > (superTrollCount+1)/2 && adminSigned) || 
            (superTrollCount == 0 && adminSigned))
        , "OSWAP_TrollRegistry: SuperTroll count not met");
    }
    function addTroll(bytes[] calldata signatures, bytes calldata ownerSignature, uint256 trollProfileIndex, address owner, address troll, uint256 nonceForOwnerSignature, uint256 _nonce) external override {
        require(troll != address(0), "Invalid troll");
        require(trollProfileIndex != 0, "trollProfileIndex cannot be zero");
        require(trollProfiles[trollProfileIndex].troll == address(0), "already added");
        require(trollProfileInv[troll] == 0, "already added");
        require(msg.sender == troll, "not from troll");
        bytes32 hash = hashTroll(trollProfileIndex, troll, _nonce);
        _verifySignatures(signatures, hash, _nonce);
        require(usedOwnerNonce[owner][nonceForOwnerSignature] == false, "invalid nonce");
        usedOwnerNonce[owner][nonceForOwnerSignature] = true;
        require(hashAddTrollFromOwner(troll, nonceForOwnerSignature).toEthSignedMessageHash().recover(ownerSignature) == owner, "invalid owner signature");
        trollProfiles[trollProfileIndex] = TrollProfile({owner:owner, troll: troll});
        trollProfileInv[troll] = trollProfileIndex;
        emit AddTroll(troll, trollProfileIndex);
    }
    function updateTroll(bytes[] calldata signatures, bytes calldata ownerSignature, uint256 trollProfileIndex, address newTroll, uint256 nonceForOwnerSignature, uint256 _nonce) external override {
        require(newTroll != address(0), "Invalid troll");
        require(trollProfileInv[newTroll] == 0, "newTroll already exists");
        address troll = trollProfiles[trollProfileIndex].troll;
        require(msg.sender == troll || msg.sender == newTroll, "not from troll");
        bytes32 hash = hashTroll(trollProfileIndex, newTroll, _nonce);
        _verifySignatures(signatures, hash, _nonce);
        address owner = trollProfiles[trollProfileIndex].owner;
        require(usedOwnerNonce[owner][nonceForOwnerSignature] == false, "invalid nonce");
        usedOwnerNonce[owner][nonceForOwnerSignature] = true;
        require(hashUpdateTrollFromOwner(trollProfileIndex, newTroll, nonceForOwnerSignature).toEthSignedMessageHash().recover(ownerSignature) == owner, "invalid owner signature");
        delete trollProfileInv[troll];
        trollProfiles[trollProfileIndex].troll = newTroll;
        trollProfileInv[newTroll] = trollProfileIndex;
        emit UpdateTroll(trollProfileIndex, newTroll);
    }
    function newVault(bytes[] calldata trollsSignatures, bytes calldata ownerSignature, uint256 projectId, IERC20 asset, address owner, uint256[] calldata projectTrolls, uint256 nonceForOwnerSignature, uint256 _nonce) external override {
        require(address(projects[projectId].asset) == address(0), "project already exists");
        require(address(asset) != address(0), "asset cannot be null address");

        // msg.sender is projectTroll
        bytes32 hash = hashNewVault(projectId, asset, owner, projectTrolls, _nonce);
        _verifySignatures(trollsSignatures, hash, _nonce);
        require(usedProjectNonce[projectId][nonceForOwnerSignature] == false, "invalid nonce");
        usedProjectNonce[projectId][nonceForOwnerSignature] = true;
        require(hashNewVaultFormOwner(asset, projectTrolls, nonceForOwnerSignature).toEthSignedMessageHash().recover(ownerSignature) == owner, "invalid owner signature");

        {
        bool msgSenderIsProjectTroll;
        uint256 msgSenderTrollProfileIndex = trollProfileInv[msg.sender];
        uint256 i = 0;
        uint256 length = projectTrolls.length;
        while (i < length) {
            require(projectTrollsInv[projectId][projectTrolls[i]] == 0, "troll already added");
            if (msgSenderTrollProfileIndex == projectTrolls[i]) {
                msgSenderIsProjectTroll = true;
            }
            projectTrollsInv[projectId][projectTrolls[i]] = i;
            unchecked { i++; }
        }
        require(msgSenderIsProjectTroll, "not from project troll");
        }
        // newVaultRegistry(uint256,address,address)
        (bool success, bytes memory data) = address(vaultRegistryCreator).delegatecall(abi.encodeWithSelector(0xbf8f56c3, projectId, address(asset), bridgeVaultCreator.getAddress(projectId)));
        require(success, "failed to create vault registry");
        IOSWAP_BridgeVaultTrollRegistry2 vaultRegistry = IOSWAP_BridgeVaultTrollRegistry2(abi.decode(data, (address)));

        // newVault(address)
        (success, data) = address(bridgeVaultCreator).delegatecall(abi.encodeWithSelector(0x0a036a0a, address(vaultRegistry)));
        require(success, "failed to create vault");
        IOSWAP_BridgeVault2 bridgeVault = IOSWAP_BridgeVault2(abi.decode(data, (address)));

        projects[projectId] = Project({
            asset: asset,
            owner: owner, 
            projectTrolls: projectTrolls,
            vaultRegistry: vaultRegistry,
            bridgeVault: bridgeVault
        });
        emit NewProjectVault(projectId, asset, owner, vaultRegistry, bridgeVault, projectTrolls);
    }
    function updateProject(bytes[] calldata trollsSignatures, bytes calldata ownerSignature, uint256 projectId, address newOwner, uint256[] calldata trollsToRemove, uint256[] calldata trollsToAdd, uint256 nonceForOwnerSignature, uint256 _nonce) external override {
        require(projects[projectId].owner != address(0), "invalid projectId");
        {
        // check sender
        uint256 msgSenderTrollProfileIndex = trollProfileInv[msg.sender];
        require(projects[projectId].projectTrolls[projectTrollsInv[projectId][msgSenderTrollProfileIndex]] == msgSenderTrollProfileIndex, "not from project troll");
        }
        {
        // check signatures
        bytes32 hash = hashUpdateProject(projectId, newOwner, trollsToRemove, trollsToAdd, _nonce);
        _verifySignatures(trollsSignatures, hash, _nonce);
        require(usedProjectNonce[projectId][nonceForOwnerSignature] == false, "invalid nonce");
        usedProjectNonce[projectId][nonceForOwnerSignature] = true;
        require(hashUpdateProjectFromOwner(projectId, newOwner, trollsToRemove, trollsToAdd, nonceForOwnerSignature).toEthSignedMessageHash().recover(ownerSignature) == projects[projectId].owner, "invalid owner signature");
        }

        if (newOwner != address(0) && projects[projectId].owner != newOwner) {
            projects[projectId].owner = newOwner;
        }
        uint256 length = trollsToRemove.length;
        if (length > 0) {
            uint256 i = 0;
            while (i < length) {
                uint256 index = projectTrollsInv[projectId][trollsToRemove[i]];
                require(projects[projectId].projectTrolls[index] == trollsToRemove[i], "troll not exists");
                uint256 lastIndex = projects[projectId].projectTrolls.length - 1;
                if (index < lastIndex) {
                    uint256 troll2 = projects[projectId].projectTrolls[lastIndex];
                    projects[projectId].projectTrolls[index] = troll2;
                    projectTrollsInv[projectId][troll2] = index;
                }
                projects[projectId].projectTrolls.pop();
                delete projectTrollsInv[projectId][trollsToRemove[i]];
                unchecked { i++; }
            }
        }
        length = trollsToAdd.length;
        if (length > 0) {
            uint256 i = 0;
            uint256 index = projects[projectId].projectTrolls.length;
            while (i < length) {
                uint256 troll = trollsToAdd[i];
                require(projectTrollsInv[projectId][troll] == 0, "troll already exists");
                projects[projectId].projectTrolls.push(troll);
                projectTrollsInv[projectId][troll] = index;
                index++;
                unchecked { i++; }
            }
        }
        
        emit UpdateProject(projectId, newOwner, trollsToRemove, trollsToAdd);
    }
}