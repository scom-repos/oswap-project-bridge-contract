"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ChainRegistry = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_ChainRegistry_json_1 = __importDefault(require("./OSWAP_ChainRegistry.json"));
class OSWAP_ChainRegistry extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_ChainRegistry_json_1.default.abi, OSWAP_ChainRegistry_json_1.default.bytecode);
        this.assign();
    }
    deploy(votingExecutorManager, options) {
        return this.__deploy([votingExecutorManager], options);
    }
    parseNewChainEvent(receipt) {
        return this.parseEvents(receipt, "NewChain").map(e => this.decodeNewChainEvent(e));
    }
    decodeNewChainEvent(event) {
        let result = event.data;
        return {
            chainId: new eth_contract_1.BigNumber(result.chainId),
            status: new eth_contract_1.BigNumber(result.status),
            govToken: result.govToken,
            _event: event
        };
    }
    parseUpdateAddressEvent(receipt) {
        return this.parseEvents(receipt, "UpdateAddress").map(e => this.decodeUpdateAddressEvent(e));
    }
    decodeUpdateAddressEvent(event) {
        let result = event.data;
        return {
            chainId: new eth_contract_1.BigNumber(result.chainId),
            contractName: result.contractName,
            address: result._address,
            _event: event
        };
    }
    parseUpdateConfigStoreEvent(receipt) {
        return this.parseEvents(receipt, "UpdateConfigStore").map(e => this.decodeUpdateConfigStoreEvent(e));
    }
    decodeUpdateConfigStoreEvent(event) {
        let result = event.data;
        return {
            chainId: new eth_contract_1.BigNumber(result.chainId),
            address: result._address,
            _event: event
        };
    }
    parseUpdateMainChainAddressEvent(receipt) {
        return this.parseEvents(receipt, "UpdateMainChainAddress").map(e => this.decodeUpdateMainChainAddressEvent(e));
    }
    decodeUpdateMainChainAddressEvent(event) {
        let result = event.data;
        return {
            contractName: result.contractName,
            address: result._address,
            _event: event
        };
    }
    parseUpdateStatusEvent(receipt) {
        return this.parseEvents(receipt, "UpdateStatus").map(e => this.decodeUpdateStatusEvent(e));
    }
    decodeUpdateStatusEvent(event) {
        let result = event.data;
        return {
            chainId: new eth_contract_1.BigNumber(result.chainId),
            status: new eth_contract_1.BigNumber(result.status),
            _event: event
        };
    }
    parseUpdateVaultEvent(receipt) {
        return this.parseEvents(receipt, "UpdateVault").map(e => this.decodeUpdateVaultEvent(e));
    }
    decodeUpdateVaultEvent(event) {
        let result = event.data;
        return {
            index: new eth_contract_1.BigNumber(result.index),
            chainId: new eth_contract_1.BigNumber(result.chainId),
            vault: {
                token: result.vault.token,
                vaultRegistry: result.vault.vaultRegistry,
                bridgeVault: result.vault.bridgeVault
            },
            _event: event
        };
    }
    assign() {
        let allChains_call = async (options) => {
            let result = await this.call('allChains', [], options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.allChains = allChains_call;
        let chains_call = async (param1, options) => {
            let result = await this.call('chains', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.chains = chains_call;
        let chainsLength_call = async (options) => {
            let result = await this.call('chainsLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.chainsLength = chainsLength_call;
        let configStore_call = async (param1, options) => {
            let result = await this.call('configStore', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.configStore = configStore_call;
        let getChainParams = (params) => [this.wallet.utils.toString(params.chainId), this.wallet.utils.stringToBytes32(params.contractnames)];
        let getChain_call = async (params, options) => {
            let result = await this.call('getChain', getChainParams(params), options);
            return {
                status: new eth_contract_1.BigNumber(result._status),
                govToken: result._govToken,
                configStore: result._configStore,
                contracts: result._contracts,
                vaults: result._vaults.map(e => ({
                    token: e.token,
                    vaultRegistry: e.vaultRegistry,
                    bridgeVault: e.bridgeVault
                }))
            };
        };
        this.getChain = getChain_call;
        let govToken_call = async (param1, options) => {
            let result = await this.call('govToken', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.govToken = govToken_call;
        let mainChainContractAddress_call = async (param1, options) => {
            let result = await this.call('mainChainContractAddress', [this.wallet.utils.stringToBytes32(param1)], options);
            return result;
        };
        this.mainChainContractAddress = mainChainContractAddress_call;
        let sideChainContractAddressParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.stringToBytes32(params.param2)];
        let sideChainContractAddress_call = async (params, options) => {
            let result = await this.call('sideChainContractAddress', sideChainContractAddressParams(params), options);
            return result;
        };
        this.sideChainContractAddress = sideChainContractAddress_call;
        let status_call = async (param1, options) => {
            let result = await this.call('status', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.status = status_call;
        let tokenNames_call = async (param1, options) => {
            let result = await this.call('tokenNames', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.tokenNames = tokenNames_call;
        let tokenNamesLength_call = async (options) => {
            let result = await this.call('tokenNamesLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.tokenNamesLength = tokenNamesLength_call;
        let vaultsParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
        let vaults_call = async (params, options) => {
            let result = await this.call('vaults', vaultsParams(params), options);
            return {
                token: result.token,
                vaultRegistry: result.vaultRegistry,
                bridgeVault: result.bridgeVault
            };
        };
        this.vaults = vaults_call;
        let vaultsLength_call = async (options) => {
            let result = await this.call('vaultsLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.vaultsLength = vaultsLength_call;
        let votingExecutorManager_call = async (options) => {
            let result = await this.call('votingExecutorManager', [], options);
            return result;
        };
        this.votingExecutorManager = votingExecutorManager_call;
        let addChainParams = (params) => [this.wallet.utils.toString(params.chainId), this.wallet.utils.toString(params.status), params.govToken, params.configStore, this.wallet.utils.stringToBytes32(params.contractNames), params.address];
        let addChain_send = async (params, options) => {
            let result = await this.send('addChain', addChainParams(params), options);
            return result;
        };
        let addChain_call = async (params, options) => {
            let result = await this.call('addChain', addChainParams(params), options);
            return;
        };
        this.addChain = Object.assign(addChain_send, {
            call: addChain_call
        });
        let initParams = (params) => [this.wallet.utils.toString(params.chainId), this.wallet.utils.toString(params.status), params.govToken, params.configStore, this.wallet.utils.stringToBytes32(params.mainChainContractNames), params.mainChainContractAddress, this.wallet.utils.stringToBytes32(params.contractNames), params.address, this.wallet.utils.stringToBytes32(params.tokenNames), params.vault.map(a0 => a0.map(e => ([e.token, e.vaultRegistry, e.bridgeVault])))];
        let init_send = async (params, options) => {
            let result = await this.send('init', initParams(params), options);
            return result;
        };
        let init_call = async (params, options) => {
            let result = await this.call('init', initParams(params), options);
            return;
        };
        this.init = Object.assign(init_send, {
            call: init_call
        });
        let newVaultParams = (params) => [this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.toString(params.chainId), params.vault.map(e => ([e.token, e.vaultRegistry, e.bridgeVault]))];
        let newVault_send = async (params, options) => {
            let result = await this.send('newVault', newVaultParams(params), options);
            return result;
        };
        let newVault_call = async (params, options) => {
            let result = await this.call('newVault', newVaultParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.newVault = Object.assign(newVault_send, {
            call: newVault_call
        });
        let updateAddressParams = (params) => [this.wallet.utils.toString(params.chainId), this.wallet.utils.stringToBytes32(params.contractName), params.address];
        let updateAddress_send = async (params, options) => {
            let result = await this.send('updateAddress', updateAddressParams(params), options);
            return result;
        };
        let updateAddress_call = async (params, options) => {
            let result = await this.call('updateAddress', updateAddressParams(params), options);
            return;
        };
        this.updateAddress = Object.assign(updateAddress_send, {
            call: updateAddress_call
        });
        let updateAddressesParams = (params) => [this.wallet.utils.toString(params.chainId), this.wallet.utils.stringToBytes32(params.contractNames), params.addresses];
        let updateAddresses_send = async (params, options) => {
            let result = await this.send('updateAddresses', updateAddressesParams(params), options);
            return result;
        };
        let updateAddresses_call = async (params, options) => {
            let result = await this.call('updateAddresses', updateAddressesParams(params), options);
            return;
        };
        this.updateAddresses = Object.assign(updateAddresses_send, {
            call: updateAddresses_call
        });
        let updateConfigStoreParams = (params) => [this.wallet.utils.toString(params.chainId), params.address];
        let updateConfigStore_send = async (params, options) => {
            let result = await this.send('updateConfigStore', updateConfigStoreParams(params), options);
            return result;
        };
        let updateConfigStore_call = async (params, options) => {
            let result = await this.call('updateConfigStore', updateConfigStoreParams(params), options);
            return;
        };
        this.updateConfigStore = Object.assign(updateConfigStore_send, {
            call: updateConfigStore_call
        });
        let updateMainChainAddressParams = (params) => [this.wallet.utils.stringToBytes32(params.contractName), params.address];
        let updateMainChainAddress_send = async (params, options) => {
            let result = await this.send('updateMainChainAddress', updateMainChainAddressParams(params), options);
            return result;
        };
        let updateMainChainAddress_call = async (params, options) => {
            let result = await this.call('updateMainChainAddress', updateMainChainAddressParams(params), options);
            return;
        };
        this.updateMainChainAddress = Object.assign(updateMainChainAddress_send, {
            call: updateMainChainAddress_call
        });
        let updateStatusParams = (params) => [this.wallet.utils.toString(params.chainId), this.wallet.utils.toString(params.status)];
        let updateStatus_send = async (params, options) => {
            let result = await this.send('updateStatus', updateStatusParams(params), options);
            return result;
        };
        let updateStatus_call = async (params, options) => {
            let result = await this.call('updateStatus', updateStatusParams(params), options);
            return;
        };
        this.updateStatus = Object.assign(updateStatus_send, {
            call: updateStatus_call
        });
        let updateVaultParams = (params) => [this.wallet.utils.toString(params.index), this.wallet.utils.toString(params.chainId), [params.vault.token, params.vault.vaultRegistry, params.vault.bridgeVault]];
        let updateVault_send = async (params, options) => {
            let result = await this.send('updateVault', updateVaultParams(params), options);
            return result;
        };
        let updateVault_call = async (params, options) => {
            let result = await this.call('updateVault', updateVaultParams(params), options);
            return;
        };
        this.updateVault = Object.assign(updateVault_send, {
            call: updateVault_call
        });
    }
}
OSWAP_ChainRegistry._abi = OSWAP_ChainRegistry_json_1.default.abi;
exports.OSWAP_ChainRegistry = OSWAP_ChainRegistry;
