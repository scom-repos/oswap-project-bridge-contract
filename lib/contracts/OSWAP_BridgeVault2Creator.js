"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_BridgeVault2Creator = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_BridgeVault2Creator_json_1 = __importDefault(require("./OSWAP_BridgeVault2Creator.json"));
class OSWAP_BridgeVault2Creator extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_BridgeVault2Creator_json_1.default.abi, OSWAP_BridgeVault2Creator_json_1.default.bytecode);
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
        let newVault_send = async (vaultRegistry, options) => {
            let result = await this.send('newVault', [vaultRegistry], options);
            return result;
        };
        let newVault_call = async (vaultRegistry, options) => {
            let result = await this.call('newVault', [vaultRegistry], options);
            return result;
        };
        this.newVault = Object.assign(newVault_send, {
            call: newVault_call
        });
    }
}
OSWAP_BridgeVault2Creator._abi = OSWAP_BridgeVault2Creator_json_1.default.abi;
exports.OSWAP_BridgeVault2Creator = OSWAP_BridgeVault2Creator;
