// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.6;

import "./IOSWAP_SideChainProjectRegistry.sol";
import "./IOSWAP_SideChainTrollRegistry.sol";
import "./IOSWAP_BridgeVaultTrollRegistry2.sol";
import "./IOSWAP_BridgeVault2.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IOSWAP_BridgeVaultTrollRegistry2Creator {
    function projectRegistry() external view returns (IOSWAP_SideChainProjectRegistry projectRegistry);
    function bytecodeHash() external view returns (bytes32 bytecodeHash);
    function newVaultRegistry(uint256 projectId, IERC20 asset, IOSWAP_BridgeVault2 bridgeVault) external returns (IOSWAP_BridgeVaultTrollRegistry2 vaultRegistry);
    function getAddress(uint256 projectId) external view returns (address vaultRegistry);
}