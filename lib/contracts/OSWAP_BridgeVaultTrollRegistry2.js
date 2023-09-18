"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_BridgeVaultTrollRegistry2 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_BridgeVaultTrollRegistry2_json_1 = __importDefault(require("./OSWAP_BridgeVaultTrollRegistry2.json"));
class OSWAP_BridgeVaultTrollRegistry2 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_BridgeVaultTrollRegistry2_json_1.default.abi, OSWAP_BridgeVaultTrollRegistry2_json_1.default.bytecode);
        this.assign();
    }
    deploy(options) {
        return this.__deploy([], options);
    }
    parsePenaltyEvent(receipt) {
        return this.parseEvents(receipt, "Penalty").map(e => this.decodePenaltyEvent(e));
    }
    decodePenaltyEvent(event) {
        let result = event.data;
        return {
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            amount: new eth_contract_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseStakeEvent(receipt) {
        return this.parseEvents(receipt, "Stake").map(e => this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event) {
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            amount: new eth_contract_1.BigNumber(result.amount),
            shares: new eth_contract_1.BigNumber(result.shares),
            backerBalance: new eth_contract_1.BigNumber(result.backerBalance),
            trollBalance: new eth_contract_1.BigNumber(result.trollBalance),
            totalShares: new eth_contract_1.BigNumber(result.totalShares),
            _event: event
        };
    }
    parseUnstakeEvent(receipt) {
        return this.parseEvents(receipt, "Unstake").map(e => this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event) {
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            amount: new eth_contract_1.BigNumber(result.amount),
            shares: new eth_contract_1.BigNumber(result.shares),
            approvalDecrement: new eth_contract_1.BigNumber(result.approvalDecrement),
            trollBalance: new eth_contract_1.BigNumber(result.trollBalance),
            totalShares: new eth_contract_1.BigNumber(result.totalShares),
            _event: event
        };
    }
    parseUnstakeApprovalEvent(receipt) {
        return this.parseEvents(receipt, "UnstakeApproval").map(e => this.decodeUnstakeApprovalEvent(e));
    }
    decodeUnstakeApprovalEvent(event) {
        let result = event.data;
        return {
            backer: result.backer,
            msgSender: result.msgSender,
            signers: result.signers.map(e => new eth_contract_1.BigNumber(e)),
            shares: new eth_contract_1.BigNumber(result.shares),
            _event: event
        };
    }
    parseUnstakeRequestEvent(receipt) {
        return this.parseEvents(receipt, "UnstakeRequest").map(e => this.decodeUnstakeRequestEvent(e));
    }
    decodeUnstakeRequestEvent(event) {
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            shares: new eth_contract_1.BigNumber(result.shares),
            backerBalance: new eth_contract_1.BigNumber(result.backerBalance),
            _event: event
        };
    }
    parseUpdateConfigStoreEvent(receipt) {
        return this.parseEvents(receipt, "UpdateConfigStore").map(e => this.decodeUpdateConfigStoreEvent(e));
    }
    decodeUpdateConfigStoreEvent(event) {
        let result = event.data;
        return {
            newConfigStore: result.newConfigStore,
            _event: event
        };
    }
    parseUpdateTrollRegistryEvent(receipt) {
        return this.parseEvents(receipt, "UpdateTrollRegistry").map(e => this.decodeUpdateTrollRegistryEvent(e));
    }
    decodeUpdateTrollRegistryEvent(event) {
        let result = event.data;
        return {
            newTrollRegistry: result.newTrollRegistry,
            _event: event
        };
    }
    assign() {
        let backerStakes_call = async (param1, options) => {
            let result = await this.call('backerStakes', [param1], options);
            return {
                trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
                shares: new eth_contract_1.BigNumber(result.shares),
                pendingWithdrawal: new eth_contract_1.BigNumber(result.pendingWithdrawal),
                approvedWithdrawal: new eth_contract_1.BigNumber(result.approvedWithdrawal)
            };
        };
        this.backerStakes = backerStakes_call;
        let bondToken_call = async (options) => {
            let result = await this.call('bondToken', [], options);
            return result;
        };
        this.bondToken = bondToken_call;
        let bridgeVault_call = async (options) => {
            let result = await this.call('bridgeVault', [], options);
            return result;
        };
        this.bridgeVault = bridgeVault_call;
        let configStore_call = async (options) => {
            let result = await this.call('configStore', [], options);
            return result;
        };
        this.configStore = configStore_call;
        let getBackers_call = async (trollProfileIndex, options) => {
            let result = await this.call('getBackers', [this.wallet.utils.toString(trollProfileIndex)], options);
            return result;
        };
        this.getBackers = getBackers_call;
        let hashUnstakeRequestParams = (params) => [params.backer, this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.shares), this.wallet.utils.toString(params.nonce)];
        let hashUnstakeRequest_call = async (params, options) => {
            let result = await this.call('hashUnstakeRequest', hashUnstakeRequestParams(params), options);
            return result;
        };
        this.hashUnstakeRequest = hashUnstakeRequest_call;
        let maxWithdrawal_call = async (backer, options) => {
            let result = await this.call('maxWithdrawal', [backer], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.maxWithdrawal = maxWithdrawal_call;
        let projectId_call = async (options) => {
            let result = await this.call('projectId', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.projectId = projectId_call;
        let projectRegistry_call = async (options) => {
            let result = await this.call('projectRegistry', [], options);
            return result;
        };
        this.projectRegistry = projectRegistry_call;
        let stakedByParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
        let stakedBy_call = async (params, options) => {
            let result = await this.call('stakedBy', stakedByParams(params), options);
            return result;
        };
        this.stakedBy = stakedBy_call;
        let stakedByInvParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
        let stakedByInv_call = async (params, options) => {
            let result = await this.call('stakedByInv', stakedByInvParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.stakedByInv = stakedByInv_call;
        let stakedByLength_call = async (trollProfileIndex, options) => {
            let result = await this.call('stakedByLength', [this.wallet.utils.toString(trollProfileIndex)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.stakedByLength = stakedByLength_call;
        let trollRegistry_call = async (options) => {
            let result = await this.call('trollRegistry', [], options);
            return result;
        };
        this.trollRegistry = trollRegistry_call;
        let trollStakesBalances_call = async (param1, options) => {
            let result = await this.call('trollStakesBalances', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.trollStakesBalances = trollStakesBalances_call;
        let trollStakesTotalShares_call = async (param1, options) => {
            let result = await this.call('trollStakesTotalShares', [this.wallet.utils.toString(param1)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.trollStakesTotalShares = trollStakesTotalShares_call;
        let usedNonce_call = async (param1, options) => {
            let result = await this.call('usedNonce', [this.wallet.utils.stringToBytes32(param1)], options);
            return result;
        };
        this.usedNonce = usedNonce_call;
        let initParams = (params) => [params.projectRegistry, this.wallet.utils.toString(params.projectId), params.bondToken, params.bridgeVault];
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
        let penalizeTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.amount)];
        let penalizeTroll_send = async (params, options) => {
            let result = await this.send('penalizeTroll', penalizeTrollParams(params), options);
            return result;
        };
        let penalizeTroll_call = async (params, options) => {
            let result = await this.call('penalizeTroll', penalizeTrollParams(params), options);
            return;
        };
        this.penalizeTroll = Object.assign(penalizeTroll_send, {
            call: penalizeTroll_call
        });
        let stakeParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.amount)];
        let stake_send = async (params, options) => {
            let result = await this.send('stake', stakeParams(params), options);
            return result;
        };
        let stake_call = async (params, options) => {
            let result = await this.call('stake', stakeParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.stake = Object.assign(stake_send, {
            call: stake_call
        });
        let unstakeParams = (params) => [params.backer, this.wallet.utils.toString(params.shares)];
        let unstake_send = async (params, options) => {
            let result = await this.send('unstake', unstakeParams(params), options);
            return result;
        };
        let unstake_call = async (params, options) => {
            let result = await this.call('unstake', unstakeParams(params), options);
            return;
        };
        this.unstake = Object.assign(unstake_send, {
            call: unstake_call
        });
        let unstakeApproveParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), params.backer, this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.shares), this.wallet.utils.toString(params.nonce)];
        let unstakeApprove_send = async (params, options) => {
            let result = await this.send('unstakeApprove', unstakeApproveParams(params), options);
            return result;
        };
        let unstakeApprove_call = async (params, options) => {
            let result = await this.call('unstakeApprove', unstakeApproveParams(params), options);
            return;
        };
        this.unstakeApprove = Object.assign(unstakeApprove_send, {
            call: unstakeApprove_call
        });
        let unstakeRequest_send = async (shares, options) => {
            let result = await this.send('unstakeRequest', [this.wallet.utils.toString(shares)], options);
            return result;
        };
        let unstakeRequest_call = async (shares, options) => {
            let result = await this.call('unstakeRequest', [this.wallet.utils.toString(shares)], options);
            return;
        };
        this.unstakeRequest = Object.assign(unstakeRequest_send, {
            call: unstakeRequest_call
        });
        let updateConfigStore_send = async (options) => {
            let result = await this.send('updateConfigStore', [], options);
            return result;
        };
        let updateConfigStore_call = async (options) => {
            let result = await this.call('updateConfigStore', [], options);
            return;
        };
        this.updateConfigStore = Object.assign(updateConfigStore_send, {
            call: updateConfigStore_call
        });
        let updateTrollRegistry_send = async (options) => {
            let result = await this.send('updateTrollRegistry', [], options);
            return result;
        };
        let updateTrollRegistry_call = async (options) => {
            let result = await this.call('updateTrollRegistry', [], options);
            return;
        };
        this.updateTrollRegistry = Object.assign(updateTrollRegistry_send, {
            call: updateTrollRegistry_call
        });
        let verifyStakedValueParams = (params) => [params.msgSender, this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.stringToBytes32(params.paramsHash)];
        let verifyStakedValue_send = async (params, options) => {
            let result = await this.send('verifyStakedValue', verifyStakedValueParams(params), options);
            return result;
        };
        let verifyStakedValue_call = async (params, options) => {
            let result = await this.call('verifyStakedValue', verifyStakedValueParams(params), options);
            return {
                superTrollCount: new eth_contract_1.BigNumber(result.superTrollCount),
                totalStake: new eth_contract_1.BigNumber(result.totalStake),
                signers: result.signers.map(e => new eth_contract_1.BigNumber(e))
            };
        };
        this.verifyStakedValue = Object.assign(verifyStakedValue_send, {
            call: verifyStakedValue_call
        });
    }
}
OSWAP_BridgeVaultTrollRegistry2._abi = OSWAP_BridgeVaultTrollRegistry2_json_1.default.abi;
exports.OSWAP_BridgeVaultTrollRegistry2 = OSWAP_BridgeVaultTrollRegistry2;
