"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_BridgeVaultTrollRegistry2Creator = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_BridgeVaultTrollRegistry2Creator_json_1 = __importDefault(require("./OSWAP_BridgeVaultTrollRegistry2Creator.json"));
class OSWAP_BridgeVaultTrollRegistry2Creator extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_BridgeVaultTrollRegistry2Creator_json_1.default.abi, OSWAP_BridgeVaultTrollRegistry2Creator_json_1.default.bytecode);
        this.assign();
    }
    deploy(projectRegistry, options) {
        return this.__deploy([projectRegistry], options);
    }
    assign() {
        let bytecodeHash_call = async (options) => {
            let result = await this.call('bytecodeHash', [], options);
            return result;
        };
        this.bytecodeHash = bytecodeHash_call;
        let getAddress_call = async (projectId, options) => {
            let result = await this.call('getAddress', [this.wallet.utils.toString(projectId)], options);
            return result;
        };
        this.getAddress = getAddress_call;
        let projectRegistry_call = async (options) => {
            let result = await this.call('projectRegistry', [], options);
            return result;
        };
        this.projectRegistry = projectRegistry_call;
        let newVaultRegistryParams = (params) => [this.wallet.utils.toString(params.projectId), params.asset, params.bridgeVault];
        let newVaultRegistry_send = async (params, options) => {
            let result = await this.send('newVaultRegistry', newVaultRegistryParams(params), options);
            return result;
        };
        let newVaultRegistry_call = async (params, options) => {
            let result = await this.call('newVaultRegistry', newVaultRegistryParams(params), options);
            return result;
        };
        this.newVaultRegistry = Object.assign(newVaultRegistry_send, {
            call: newVaultRegistry_call
        });
    }
}
OSWAP_BridgeVaultTrollRegistry2Creator._abi = OSWAP_BridgeVaultTrollRegistry2Creator_json_1.default.abi;
exports.OSWAP_BridgeVaultTrollRegistry2Creator = OSWAP_BridgeVaultTrollRegistry2Creator;
