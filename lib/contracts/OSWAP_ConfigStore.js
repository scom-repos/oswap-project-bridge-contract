"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ConfigStore = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_ConfigStore_json_1 = __importDefault(require("./OSWAP_ConfigStore.json"));
class OSWAP_ConfigStore extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_ConfigStore_json_1.default.abi, OSWAP_ConfigStore_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([[params.govToken, params.swapPolicy, this.wallet.utils.toString(params.lpWithdrawlDelay), this.wallet.utils.toString(params.transactionsGap), this.wallet.utils.toString(params.superTrollMinCount), this.wallet.utils.toString(params.generalTrollMinCount), this.wallet.utils.toString(params.transactionFee), params.router, params.rebalancer, params.feeTo, params.wrapper, params.asset, this.wallet.utils.toString(params.baseFee)]], options);
    }
    parseAuthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseParamSet1Event(receipt) {
        return this.parseEvents(receipt, "ParamSet1").map(e => this.decodeParamSet1Event(e));
    }
    decodeParamSet1Event(event) {
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            _event: event
        };
    }
    parseParamSet2Event(receipt) {
        return this.parseEvents(receipt, "ParamSet2").map(e => this.decodeParamSet2Event(e));
    }
    decodeParamSet2Event(event) {
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            value2: result.value2,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUpdateVotingExecutorManagerEvent(receipt) {
        return this.parseEvents(receipt, "UpdateVotingExecutorManager").map(e => this.decodeUpdateVotingExecutorManagerEvent(e));
    }
    decodeUpdateVotingExecutorManagerEvent(event) {
        let result = event.data;
        return {
            newVotingExecutorManager: result.newVotingExecutorManager,
            _event: event
        };
    }
    parseUpgradeEvent(receipt) {
        return this.parseEvents(receipt, "Upgrade").map(e => this.decodeUpgradeEvent(e));
    }
    decodeUpgradeEvent(event) {
        let result = event.data;
        return {
            newConfigStore: result.newConfigStore,
            _event: event
        };
    }
    assign() {
        let baseFee_call = async (param1, options) => {
            let result = await this.call('baseFee', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.baseFee = baseFee_call;
        let feeTo_call = async (options) => {
            let result = await this.call('feeTo', [], options);
            return result;
        };
        this.feeTo = feeTo_call;
        let generalTrollMinCount_call = async (options) => {
            let result = await this.call('generalTrollMinCount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.generalTrollMinCount = generalTrollMinCount_call;
        let getBridgeParams_call = async (asset, options) => {
            let result = await this.call('getBridgeParams', [asset], options);
            return {
                param1: result[0],
                param2: result[1],
                param3: result[2],
                param4: result[3],
                param5: new eth_contract_1.BigNumber(result[4]),
                param6: new eth_contract_1.BigNumber(result[5])
            };
        };
        this.getBridgeParams = getBridgeParams_call;
        let getRebalanceParams_call = async (asset, options) => {
            let result = await this.call('getRebalanceParams', [asset], options);
            return {
                param1: result[0],
                param2: result[1],
                param3: result[2]
            };
        };
        this.getRebalanceParams = getRebalanceParams_call;
        let getSignatureVerificationParams_call = async (options) => {
            let result = await this.call('getSignatureVerificationParams', [], options);
            return {
                param1: new eth_contract_1.BigNumber(result[0]),
                param2: new eth_contract_1.BigNumber(result[1]),
                param3: new eth_contract_1.BigNumber(result[2])
            };
        };
        this.getSignatureVerificationParams = getSignatureVerificationParams_call;
        let govToken_call = async (options) => {
            let result = await this.call('govToken', [], options);
            return result;
        };
        this.govToken = govToken_call;
        let isApprovedProxy_call = async (param1, options) => {
            let result = await this.call('isApprovedProxy', [param1], options);
            return result;
        };
        this.isApprovedProxy = isApprovedProxy_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let lpWithdrawlDelay_call = async (options) => {
            let result = await this.call('lpWithdrawlDelay', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lpWithdrawlDelay = lpWithdrawlDelay_call;
        let newConfigStore_call = async (options) => {
            let result = await this.call('newConfigStore', [], options);
            return result;
        };
        this.newConfigStore = newConfigStore_call;
        let newOwner_call = async (options) => {
            let result = await this.call('newOwner', [], options);
            return result;
        };
        this.newOwner = newOwner_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let priceOracle_call = async (param1, options) => {
            let result = await this.call('priceOracle', [param1], options);
            return result;
        };
        this.priceOracle = priceOracle_call;
        let rebalancer_call = async (options) => {
            let result = await this.call('rebalancer', [], options);
            return result;
        };
        this.rebalancer = rebalancer_call;
        let router_call = async (options) => {
            let result = await this.call('router', [], options);
            return result;
        };
        this.router = router_call;
        let superTrollMinCount_call = async (options) => {
            let result = await this.call('superTrollMinCount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.superTrollMinCount = superTrollMinCount_call;
        let swapPolicy_call = async (options) => {
            let result = await this.call('swapPolicy', [], options);
            return result;
        };
        this.swapPolicy = swapPolicy_call;
        let transactionFee_call = async (options) => {
            let result = await this.call('transactionFee', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.transactionFee = transactionFee_call;
        let transactionsGap_call = async (options) => {
            let result = await this.call('transactionsGap', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.transactionsGap = transactionsGap_call;
        let votingExecutorManager_call = async (options) => {
            let result = await this.call('votingExecutorManager', [], options);
            return result;
        };
        this.votingExecutorManager = votingExecutorManager_call;
        let deny_send = async (user, options) => {
            let result = await this.send('deny', [user], options);
            return result;
        };
        let deny_call = async (user, options) => {
            let result = await this.call('deny', [user], options);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let initAddress_send = async (votingExecutorManager, options) => {
            let result = await this.send('initAddress', [votingExecutorManager], options);
            return result;
        };
        let initAddress_call = async (votingExecutorManager, options) => {
            let result = await this.call('initAddress', [votingExecutorManager], options);
            return;
        };
        this.initAddress = Object.assign(initAddress_send, {
            call: initAddress_call
        });
        let permit_send = async (user, options) => {
            let result = await this.send('permit', [user], options);
            return result;
        };
        let permit_call = async (user, options) => {
            let result = await this.call('permit', [user], options);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let setConfigParams = (params) => [this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.value)];
        let setConfig_send = async (params, options) => {
            let result = await this.send('setConfig', setConfigParams(params), options);
            return result;
        };
        let setConfig_call = async (params, options) => {
            let result = await this.call('setConfig', setConfigParams(params), options);
            return;
        };
        this.setConfig = Object.assign(setConfig_send, {
            call: setConfig_call
        });
        let setConfig2Params = (params) => [this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.value1), this.wallet.utils.stringToBytes32(params.value2)];
        let setConfig2_send = async (params, options) => {
            let result = await this.send('setConfig2', setConfig2Params(params), options);
            return result;
        };
        let setConfig2_call = async (params, options) => {
            let result = await this.call('setConfig2', setConfig2Params(params), options);
            return;
        };
        this.setConfig2 = Object.assign(setConfig2_send, {
            call: setConfig2_call
        });
        let setConfigAddressParams = (params) => [this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.value)];
        let setConfigAddress_send = async (params, options) => {
            let result = await this.send('setConfigAddress', setConfigAddressParams(params), options);
            return result;
        };
        let setConfigAddress_call = async (params, options) => {
            let result = await this.call('setConfigAddress', setConfigAddressParams(params), options);
            return;
        };
        this.setConfigAddress = Object.assign(setConfigAddress_send, {
            call: setConfigAddress_call
        });
        let setOracleParams = (params) => [params.asset, params.oracle];
        let setOracle_send = async (params, options) => {
            let result = await this.send('setOracle', setOracleParams(params), options);
            return result;
        };
        let setOracle_call = async (params, options) => {
            let result = await this.call('setOracle', setOracleParams(params), options);
            return;
        };
        this.setOracle = Object.assign(setOracle_send, {
            call: setOracle_call
        });
        let setSwapPolicy_send = async (swapPolicy, options) => {
            let result = await this.send('setSwapPolicy', [swapPolicy], options);
            return result;
        };
        let setSwapPolicy_call = async (swapPolicy, options) => {
            let result = await this.call('setSwapPolicy', [swapPolicy], options);
            return;
        };
        this.setSwapPolicy = Object.assign(setSwapPolicy_send, {
            call: setSwapPolicy_call
        });
        let takeOwnership_send = async (options) => {
            let result = await this.send('takeOwnership', [], options);
            return result;
        };
        let takeOwnership_call = async (options) => {
            let result = await this.call('takeOwnership', [], options);
            return;
        };
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call: takeOwnership_call
        });
        let transferOwnership_send = async (newOwner, options) => {
            let result = await this.send('transferOwnership', [newOwner], options);
            return result;
        };
        let transferOwnership_call = async (newOwner, options) => {
            let result = await this.call('transferOwnership', [newOwner], options);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let updateVotingExecutorManager_send = async (options) => {
            let result = await this.send('updateVotingExecutorManager', [], options);
            return result;
        };
        let updateVotingExecutorManager_call = async (options) => {
            let result = await this.call('updateVotingExecutorManager', [], options);
            return;
        };
        this.updateVotingExecutorManager = Object.assign(updateVotingExecutorManager_send, {
            call: updateVotingExecutorManager_call
        });
        let upgrade_send = async (configStore, options) => {
            let result = await this.send('upgrade', [configStore], options);
            return result;
        };
        let upgrade_call = async (configStore, options) => {
            let result = await this.call('upgrade', [configStore], options);
            return;
        };
        this.upgrade = Object.assign(upgrade_send, {
            call: upgrade_call
        });
    }
}
OSWAP_ConfigStore._abi = OSWAP_ConfigStore_json_1.default.abi;
exports.OSWAP_ConfigStore = OSWAP_ConfigStore;
