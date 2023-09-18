// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.6;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IOSWAP_BridgeVault2.sol";
import "./IOSWAP_BridgeVaultTrollRegistry2.sol";
import "./IOSWAP_BridgeVault2Creator.sol";
import "./IOSWAP_BridgeVaultTrollRegistry2Creator.sol";
import "./IOSWAP_SideChainTrollRegistry.sol";

interface IOSWAP_SideChainProjectRegistry {
    struct Project {
        IERC20 asset;
        address owner;
        IOSWAP_BridgeVaultTrollRegistry2 vaultRegistry;
        IOSWAP_BridgeVault2 bridgeVault;
        uint256[] projectTrolls; // trollProfileIndex
    }
    function trollRegistry() external view returns (IOSWAP_SideChainTrollRegistry trollRegistry);
    function vaultRegistryCreator() external view returns (IOSWAP_BridgeVaultTrollRegistry2Creator vaultRegistryCreator);
    function bridgeVaultCreator() external view returns (IOSWAP_BridgeVault2Creator bridgeVaultCreator);

    function trollProfiles(uint256 trollProfileIndex) external view returns (address troll);
    function trollProfileInv(address troll) external view returns (uint256 trollProfileIndex);
    function projectTrollsInv(uint256 projectId, uint256 projectTroll) external view returns (uint256 index);
    function usedNonce(uint256 nonce) external view returns (bool used);
    function usedProjectNonce(uint256 projectId, uint256 nonce) external view returns (bool used);

    event AddTroll(address indexed troll, uint256 indexed trollProfileIndex);
    event UpdateTroll(uint256 indexed trollProfileIndex, address indexed troll);
    event NewProjectVault(uint256 indexed projectId, IERC20 indexed asset, address indexed owner, IOSWAP_BridgeVaultTrollRegistry2 vaultRegistry, IOSWAP_BridgeVault2 bridgeVault, uint256[] projectTrolls);
    event UpdateProject(uint256 indexed projectId, address indexed owner, uint256[] trollsToRemove, uint256[] trollsToAdd);

    function getProject(uint256 projectId) external view returns (Project memory project);
    function getProjects(uint256[] calldata projectIds) external view returns (Project[] memory projects);
    function projectTrollsLength(uint256 projectId) external view returns (uint256 length);
    function isProjectTroll(uint256 projectId, uint256 trollProfileIndex) external view returns (bool isProjectTroll);
    function isProjectTrollByAddress(uint256 projectId, address troll) external view returns (bool _isProjectTroll);
    function hashAddTroll(uint256 trollProfileIndex, address troll, uint256 _nonce) external view returns (bytes32);
    function hashUpdateTrollFromTroll(uint256 trollProfileIndex, address newTroll, uint256 _nonce) external view returns (bytes32);
    function hashUpdateTroll(uint256 trollProfileIndex, address newTroll, uint256 _nonce) external view returns (bytes32);
    function hashNewVaultFormOwner(IERC20 asset, uint256[] calldata projectTrolls, uint256 _nonce) external view returns (bytes32);
    function hashNewVault(uint256 projectId, IERC20 asset, address owner, uint256[] calldata projectTrolls, uint256 _nonce) external view returns (bytes32);
    function hashUpdateProjectFromOwner(uint256 projectId, address newOwner, uint256[] calldata trollsToRemove, uint256[] calldata trollsToAdd, uint256 _nonce) external view returns (bytes32);
    function hashUpdateProject(uint256 projectId, address newOwner, uint256[] calldata trollsToRemove, uint256[] calldata trollsToAdd, uint256 _nonce) external view returns (bytes32);
    function addTroll(bytes[] calldata signatures, uint256 trollProfileIndex, address troll, uint256 _nonce) external;
    function updateTroll(bytes[] calldata signatures, bytes calldata trollSignature, uint256 trollProfileIndex, address newTroll, uint256 nonceForTrollSignature, uint256 _nonce) external;
    function newVault(bytes[] calldata trollsSignatures, bytes calldata ownerSignature, uint256 projectId, IERC20 asset, address owner, uint256[] calldata projectTrolls, uint256 nonceForOwnerSignature, uint256 _nonce) external;
    function updateProject(bytes[] calldata trollsSignatures, bytes calldata ownerSignature, uint256 projectId, address newOwner, uint256[] calldata trollsToRemove, uint256[] calldata trollsToAdd, uint256 nonceForOwnerSignature, uint256 _nonce) external;
}