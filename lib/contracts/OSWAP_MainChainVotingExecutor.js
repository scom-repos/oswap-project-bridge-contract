"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_MainChainVotingExecutor = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_MainChainVotingExecutor_json_1 = __importDefault(require("./OSWAP_MainChainVotingExecutor.json"));
class OSWAP_MainChainVotingExecutor extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_MainChainVotingExecutor_json_1.default.abi, OSWAP_MainChainVotingExecutor_json_1.default.bytecode);
        this.assign();
    }
    deploy(votingManager, options) {
        return this.__deploy([votingManager], options);
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
        let chainRegistry_call = async (options) => {
            let result = await this.call('chainRegistry', [], options);
            return result;
        };
        this.chainRegistry = chainRegistry_call;
        let trollRegistry_call = async (options) => {
            let result = await this.call('trollRegistry', [], options);
            return result;
        };
        this.trollRegistry = trollRegistry_call;
        let votingManager_call = async (options) => {
            let result = await this.call('votingManager', [], options);
            return result;
        };
        this.votingManager = votingManager_call;
        let execute_send = async (params, options) => {
            let result = await this.send('execute', [this.wallet.utils.stringToBytes32(params)], options);
            return result;
        };
        let execute_call = async (params, options) => {
            let result = await this.call('execute', [this.wallet.utils.stringToBytes32(params)], options);
            return;
        };
        this.execute = Object.assign(execute_send, {
            call: execute_call
        });
        let initAddress_send = async (chainRegistry, options) => {
            let result = await this.send('initAddress', [chainRegistry], options);
            return result;
        };
        let initAddress_call = async (chainRegistry, options) => {
            let result = await this.call('initAddress', [chainRegistry], options);
            return;
        };
        this.initAddress = Object.assign(initAddress_send, {
            call: initAddress_call
        });
    }
}
OSWAP_MainChainVotingExecutor._abi = OSWAP_MainChainVotingExecutor_json_1.default.abi;
exports.OSWAP_MainChainVotingExecutor = OSWAP_MainChainVotingExecutor;
