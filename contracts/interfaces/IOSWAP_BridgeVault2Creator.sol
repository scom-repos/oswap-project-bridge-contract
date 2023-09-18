// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.6;

import "./IOSWAP_SideChainProjectRegistry.sol";
import "./IOSWAP_BridgeVaultTrollRegistry2.sol";
import "./IOSWAP_BridgeVault2.sol";

interface IOSWAP_BridgeVault2Creator {
    function projectRegistry() external view returns (IOSWAP_SideChainProjectRegistry projectRegistry);
    function bytecodeHash() external view returns (bytes32 bytecodeHash);
    function newVault(IOSWAP_BridgeVaultTrollRegistry2 vaultRegistry) external returns (IOSWAP_BridgeVault2 vault);
    function getAddress(uint256 projectId) external view returns (address vault);
}