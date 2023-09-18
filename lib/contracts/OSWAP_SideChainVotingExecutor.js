"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_SideChainVotingExecutor = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_SideChainVotingExecutor_json_1 = __importDefault(require("./OSWAP_SideChainVotingExecutor.json"));
class OSWAP_SideChainVotingExecutor extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_SideChainVotingExecutor_json_1.default.abi, OSWAP_SideChainVotingExecutor_json_1.default.bytecode);
        this.assign();
    }
    deploy(trollRegistry, options) {
        return this.__deploy([trollRegistry], options);
    }
    parseExecuteEvent(receipt) {
        return this.parseEvents(receipt, "Execute").map(e => this.decodeExecuteEvent(e));
    }
    decodeExecuteEvent(event) {
        let result = event.data;
        return {
            params: result.params,
            _event: event
        };
    }
    assign() {
        let configStore_call = async (options) => {
            let result = await this.call('configStore', [], options);
            return result;
        };
        this.configStore = configStore_call;
        let executeHashParams = (params) => [this.wallet.utils.stringToBytes32(params.params), this.wallet.utils.toString(params.nonce)];
        let executeHash_call = async (params, options) => {
            let result = await this.call('executeHash', executeHashParams(params), options);
            return result;
        };
        this.executeHash = executeHash_call;
        let govToken_call = async (options) => {
            let result = await this.call('govToken', [], options);
            return result;
        };
        this.govToken = govToken_call;
        let trollRegistry_call = async (options) => {
            let result = await this.call('trollRegistry', [], options);
            return result;
        };
        this.trollRegistry = trollRegistry_call;
        let executeParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.stringToBytes32(params.params), this.wallet.utils.toString(params.nonce)];
        let execute_send = async (params, options) => {
            let result = await this.send('execute', executeParams(params), options);
            return result;
        };
        let execute_call = async (params, options) => {
            let result = await this.call('execute', executeParams(params), options);
            return;
        };
        this.execute = Object.assign(execute_send, {
            call: execute_call
        });
    }
}
OSWAP_SideChainVotingExecutor._abi = OSWAP_SideChainVotingExecutor_json_1.default.abi;
exports.OSWAP_SideChainVotingExecutor = OSWAP_SideChainVotingExecutor;
