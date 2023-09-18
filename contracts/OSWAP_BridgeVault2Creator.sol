// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.6;

import "./OSWAP_BridgeVault2.sol";
import "./OSWAP_SideChainProjectRegistry.sol";
import "./interfaces/IOSWAP_BridgeVaultTrollRegistry2.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IOSWAP_BridgeVault2Creator.sol";

contract OSWAP_BridgeVault2Creator is IOSWAP_BridgeVault2Creator {
    IOSWAP_SideChainProjectRegistry public immutable override projectRegistry;
    bytes32 public override bytecodeHash;

    constructor(IOSWAP_SideChainProjectRegistry _projectRegistry) {
        projectRegistry = _projectRegistry;
        bytes memory bytecode = type(OSWAP_BridgeVault2).creationCode;
        bytecodeHash = keccak256(abi.encodePacked(bytecode));
    }
    function newVault(IOSWAP_BridgeVaultTrollRegistry2 vaultRegistry) external override returns (IOSWAP_BridgeVault2 vault) {
        bytes memory bytecode = type(OSWAP_BridgeVault2).creationCode;
        uint256 projectId = vaultRegistry.projectId();
        address _vault;
        assembly {
            _vault := create2(0, add(bytecode, 0x20), mload(bytecode), projectId)
        }
        require(_vault != address(0), "Create2: Failed on deploy");
        vault = IOSWAP_BridgeVault2(_vault);
        vault.init(vaultRegistry);
    }
    function getAddress(uint256 projectId) public view override returns (address vault) {
        vault = address(uint160(uint256(keccak256(abi.encodePacked(bytes1(0xff), address(projectRegistry), bytes32(projectId), bytecodeHash)))));
    }
}