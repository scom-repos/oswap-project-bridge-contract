// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.6;

import "./interfaces/IOSWAP_BridgeVaultTrollRegistry2.sol";
import "./interfaces/IOSWAP_SideChainProjectRegistry.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IOSWAP_BridgeVaultTrollRegistry2Creator.sol";
import "./OSWAP_BridgeVaultTrollRegistry2.sol";
import "./interfaces/IOSWAP_BridgeVault2.sol";

contract OSWAP_BridgeVaultTrollRegistry2Creator is IOSWAP_BridgeVaultTrollRegistry2Creator {
    IOSWAP_SideChainProjectRegistry public immutable override projectRegistry;
    bytes32 public immutable override bytecodeHash;

    constructor(IOSWAP_SideChainProjectRegistry _projectRegistry) {
        projectRegistry = _projectRegistry;
        bytes memory bytecode = type(OSWAP_BridgeVaultTrollRegistry2).creationCode;
        bytecodeHash = keccak256(abi.encodePacked(bytecode));
    }
    function newVaultRegistry(uint256 projectId, IERC20 asset, IOSWAP_BridgeVault2 bridgeVault) external override returns (IOSWAP_BridgeVaultTrollRegistry2 vaultRegistry) {
        bytes memory bytecode = type(OSWAP_BridgeVaultTrollRegistry2).creationCode;
        assembly {
            vaultRegistry := create2(0, add(bytecode, 0x20), mload(bytecode), projectId)
        }
        require(address(vaultRegistry) != address(0), "Create2: Failed on deploy");
        IOSWAP_BridgeVaultTrollRegistry2(vaultRegistry).init(projectRegistry, projectId, asset, bridgeVault);
    }
    function getAddress(uint256 projectId) public override view returns (address vaultRegistry) {
        vaultRegistry = address(uint160(uint256(keccak256(abi.encodePacked(bytes1(0xff), address(projectRegistry), bytes32(projectId), bytecodeHash)))));
    }
}