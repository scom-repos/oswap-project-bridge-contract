"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_VotingManager = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_VotingManager_json_1 = __importDefault(require("./OSWAP_VotingManager.json"));
class OSWAP_VotingManager extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_VotingManager_json_1.default.abi, OSWAP_VotingManager_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.trollRegistry, this.wallet.utils.stringToBytes32(params.names), this.wallet.utils.toString(params.minExeDelay), this.wallet.utils.toString(params.minVoteDuration), this.wallet.utils.toString(params.maxVoteDuration), this.wallet.utils.toString(params.minGovTokenToCreateVote), this.wallet.utils.toString(params.minQuorum)], options);
    }
    parseAddVotingConfigEvent(receipt) {
        return this.parseEvents(receipt, "AddVotingConfig").map(e => this.decodeAddVotingConfigEvent(e));
    }
    decodeAddVotingConfigEvent(event) {
        let result = event.data;
        return {
            name: result.name,
            minExeDelay: new eth_contract_1.BigNumber(result.minExeDelay),
            minVoteDuration: new eth_contract_1.BigNumber(result.minVoteDuration),
            maxVoteDuration: new eth_contract_1.BigNumber(result.maxVoteDuration),
            minGovTokenToCreateVote: new eth_contract_1.BigNumber(result.minGovTokenToCreateVote),
            minQuorum: new eth_contract_1.BigNumber(result.minQuorum),
            _event: event
        };
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
    parseExecutedEvent(receipt) {
        return this.parseEvents(receipt, "Executed").map(e => this.decodeExecutedEvent(e));
    }
    decodeExecutedEvent(event) {
        let result = event.data;
        return {
            vote: result.vote,
            _event: event
        };
    }
    parseNewPollEvent(receipt) {
        return this.parseEvents(receipt, "NewPoll").map(e => this.decodeNewPollEvent(e));
    }
    decodeNewPollEvent(event) {
        let result = event.data;
        return {
            poll: result.poll,
            _event: event
        };
    }
    parseNewVoteEvent(receipt) {
        return this.parseEvents(receipt, "NewVote").map(e => this.decodeNewVoteEvent(e));
    }
    decodeNewVoteEvent(event) {
        let result = event.data;
        return {
            vote: result.vote,
            _event: event
        };
    }
    parseParamSetEvent(receipt) {
        return this.parseEvents(receipt, "ParamSet").map(e => this.decodeParamSetEvent(e));
    }
    decodeParamSetEvent(event) {
        let result = event.data;
        return {
            name: result.name,
            value: result.value,
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
    parsePollEvent(receipt) {
        return this.parseEvents(receipt, "Poll").map(e => this.decodePollEvent(e));
    }
    decodePollEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            poll: result.poll,
            option: new eth_contract_1.BigNumber(result.option),
            _event: event
        };
    }
    parseSetVotingConfigEvent(receipt) {
        return this.parseEvents(receipt, "SetVotingConfig").map(e => this.decodeSetVotingConfigEvent(e));
    }
    decodeSetVotingConfigEvent(event) {
        let result = event.data;
        return {
            configName: result.configName,
            paramName: result.paramName,
            minExeDelay: new eth_contract_1.BigNumber(result.minExeDelay),
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
    parseUpgradeEvent(receipt) {
        return this.parseEvents(receipt, "Upgrade").map(e => this.decodeUpgradeEvent(e));
    }
    decodeUpgradeEvent(event) {
        let result = event.data;
        return {
            newVotingManager: result.newVotingManager,
            _event: event
        };
    }
    parseVetoEvent(receipt) {
        return this.parseEvents(receipt, "Veto").map(e => this.decodeVetoEvent(e));
    }
    decodeVetoEvent(event) {
        let result = event.data;
        return {
            vote: result.vote,
            _event: event
        };
    }
    parseVoteEvent(receipt) {
        return this.parseEvents(receipt, "Vote").map(e => this.decodeVoteEvent(e));
    }
    decodeVoteEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            vote: result.vote,
            option: new eth_contract_1.BigNumber(result.option),
            _event: event
        };
    }
    assign() {
        let admin_call = async (options) => {
            let result = await this.call('admin', [], options);
            return result;
        };
        this.admin = admin_call;
        let allVotings_call = async (options) => {
            let result = await this.call('allVotings', [], options);
            return result;
        };
        this.allVotings = allVotings_call;
        let getVotingConfigProfilesParams = (params) => [this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
        let getVotingConfigProfiles_call = async (params, options) => {
            let result = await this.call('getVotingConfigProfiles', getVotingConfigProfilesParams(params), options);
            return result;
        };
        this.getVotingConfigProfiles = getVotingConfigProfiles_call;
        let getVotingCount_call = async (options) => {
            let result = await this.call('getVotingCount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getVotingCount = getVotingCount_call;
        let getVotingParams_call = async (name, options) => {
            let result = await this.call('getVotingParams', [this.wallet.utils.stringToBytes32(name)], options);
            return {
                minExeDelay: new eth_contract_1.BigNumber(result._minExeDelay),
                minVoteDuration: new eth_contract_1.BigNumber(result._minVoteDuration),
                maxVoteDuration: new eth_contract_1.BigNumber(result._maxVoteDuration),
                minGovTokenToCreateVote: new eth_contract_1.BigNumber(result._minGovTokenToCreateVote),
                minQuorum: new eth_contract_1.BigNumber(result._minQuorum)
            };
        };
        this.getVotingParams = getVotingParams_call;
        let getVotingsParams = (params) => [this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.count)];
        let getVotings_call = async (params, options) => {
            let result = await this.call('getVotings', getVotingsParams(params), options);
            return result;
        };
        this.getVotings = getVotings_call;
        let govToken_call = async (options) => {
            let result = await this.call('govToken', [], options);
            return result;
        };
        this.govToken = govToken_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let isVotingContract_call = async (votingContract, options) => {
            let result = await this.call('isVotingContract', [votingContract], options);
            return result;
        };
        this.isVotingContract = isVotingContract_call;
        let isVotingExecutor_call = async (param1, options) => {
            let result = await this.call('isVotingExecutor', [param1], options);
            return result;
        };
        this.isVotingExecutor = isVotingExecutor_call;
        let newOwner_call = async (options) => {
            let result = await this.call('newOwner', [], options);
            return result;
        };
        this.newOwner = newOwner_call;
        let newVotingExecutorManager_call = async (options) => {
            let result = await this.call('newVotingExecutorManager', [], options);
            return result;
        };
        this.newVotingExecutorManager = newVotingExecutorManager_call;
        let newVotingManager_call = async (options) => {
            let result = await this.call('newVotingManager', [], options);
            return result;
        };
        this.newVotingManager = newVotingManager_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let trollRegistry_call = async (options) => {
            let result = await this.call('trollRegistry', [], options);
            return result;
        };
        this.trollRegistry = trollRegistry_call;
        let voteCount_call = async (options) => {
            let result = await this.call('voteCount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.voteCount = voteCount_call;
        let votingConfigProfiles_call = async (param1, options) => {
            let result = await this.call('votingConfigProfiles', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.votingConfigProfiles = votingConfigProfiles_call;
        let votingConfigProfilesLength_call = async (options) => {
            let result = await this.call('votingConfigProfilesLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.votingConfigProfilesLength = votingConfigProfilesLength_call;
        let votingConfigs_call = async (param1, options) => {
            let result = await this.call('votingConfigs', [this.wallet.utils.stringToBytes32(param1)], options);
            return {
                minExeDelay: new eth_contract_1.BigNumber(result.minExeDelay),
                minVoteDuration: new eth_contract_1.BigNumber(result.minVoteDuration),
                maxVoteDuration: new eth_contract_1.BigNumber(result.maxVoteDuration),
                minGovTokenToCreateVote: new eth_contract_1.BigNumber(result.minGovTokenToCreateVote),
                minQuorum: new eth_contract_1.BigNumber(result.minQuorum)
            };
        };
        this.votingConfigs = votingConfigs_call;
        let votingExecutor_call = async (param1, options) => {
            let result = await this.call('votingExecutor', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.votingExecutor = votingExecutor_call;
        let votingExecutorInv_call = async (param1, options) => {
            let result = await this.call('votingExecutorInv', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.votingExecutorInv = votingExecutorInv_call;
        let votingExecutorLength_call = async (options) => {
            let result = await this.call('votingExecutorLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.votingExecutorLength = votingExecutorLength_call;
        let votingIdx_call = async (param1, options) => {
            let result = await this.call('votingIdx', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.votingIdx = votingIdx_call;
        let votingRegister_call = async (options) => {
            let result = await this.call('votingRegister', [], options);
            return result;
        };
        this.votingRegister = votingRegister_call;
        let votings_call = async (param1, options) => {
            let result = await this.call('votings', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.votings = votings_call;
        let addVotingConfigParams = (params) => [this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.toString(params.minExeDelay), this.wallet.utils.toString(params.minVoteDuration), this.wallet.utils.toString(params.maxVoteDuration), this.wallet.utils.toString(params.minGovTokenToCreateVote), this.wallet.utils.toString(params.minQuorum)];
        let addVotingConfig_send = async (params, options) => {
            let result = await this.send('addVotingConfig', addVotingConfigParams(params), options);
            return result;
        };
        let addVotingConfig_call = async (params, options) => {
            let result = await this.call('addVotingConfig', addVotingConfigParams(params), options);
            return;
        };
        this.addVotingConfig = Object.assign(addVotingConfig_send, {
            call: addVotingConfig_call
        });
        let closeVote_send = async (vote, options) => {
            let result = await this.send('closeVote', [vote], options);
            return result;
        };
        let closeVote_call = async (vote, options) => {
            let result = await this.call('closeVote', [vote], options);
            return;
        };
        this.closeVote = Object.assign(closeVote_send, {
            call: closeVote_call
        });
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
        let executed_send = async (options) => {
            let result = await this.send('executed', [], options);
            return result;
        };
        let executed_call = async (options) => {
            let result = await this.call('executed', [], options);
            return;
        };
        this.executed = Object.assign(executed_send, {
            call: executed_call
        });
        let getNewVoteId_send = async (options) => {
            let result = await this.send('getNewVoteId', [], options);
            return result;
        };
        let getNewVoteId_call = async (options) => {
            let result = await this.call('getNewVoteId', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getNewVoteId = Object.assign(getNewVoteId_send, {
            call: getNewVoteId_call
        });
        let initAdmin_send = async (admin, options) => {
            let result = await this.send('initAdmin', [admin], options);
            return result;
        };
        let initAdmin_call = async (admin, options) => {
            let result = await this.call('initAdmin', [admin], options);
            return;
        };
        this.initAdmin = Object.assign(initAdmin_send, {
            call: initAdmin_call
        });
        let initVotingExecutor_send = async (votingExecutor, options) => {
            let result = await this.send('initVotingExecutor', [votingExecutor], options);
            return result;
        };
        let initVotingExecutor_call = async (votingExecutor, options) => {
            let result = await this.call('initVotingExecutor', [votingExecutor], options);
            return;
        };
        this.initVotingExecutor = Object.assign(initVotingExecutor_send, {
            call: initVotingExecutor_call
        });
        let newVoteParams = (params) => [params.vote, params.isExecutiveVote];
        let newVote_send = async (params, options) => {
            let result = await this.send('newVote', newVoteParams(params), options);
            return result;
        };
        let newVote_call = async (params, options) => {
            let result = await this.call('newVote', newVoteParams(params), options);
            return;
        };
        this.newVote = Object.assign(newVote_send, {
            call: newVote_call
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
        let setAdmin_send = async (admin, options) => {
            let result = await this.send('setAdmin', [admin], options);
            return result;
        };
        let setAdmin_call = async (admin, options) => {
            let result = await this.call('setAdmin', [admin], options);
            return;
        };
        this.setAdmin = Object.assign(setAdmin_send, {
            call: setAdmin_call
        });
        let setVotingConfigParams = (params) => [this.wallet.utils.stringToBytes32(params.configName), this.wallet.utils.stringToBytes32(params.paramName), this.wallet.utils.toString(params.paramValue)];
        let setVotingConfig_send = async (params, options) => {
            let result = await this.send('setVotingConfig', setVotingConfigParams(params), options);
            return result;
        };
        let setVotingConfig_call = async (params, options) => {
            let result = await this.call('setVotingConfig', setVotingConfigParams(params), options);
            return;
        };
        this.setVotingConfig = Object.assign(setVotingConfig_send, {
            call: setVotingConfig_call
        });
        let setVotingExecutorParams = (params) => [params.votingExecutor, params.bool];
        let setVotingExecutor_send = async (params, options) => {
            let result = await this.send('setVotingExecutor', setVotingExecutorParams(params), options);
            return result;
        };
        let setVotingExecutor_call = async (params, options) => {
            let result = await this.call('setVotingExecutor', setVotingExecutorParams(params), options);
            return;
        };
        this.setVotingExecutor = Object.assign(setVotingExecutor_send, {
            call: setVotingExecutor_call
        });
        let setVotingRegister_send = async (votingRegister, options) => {
            let result = await this.send('setVotingRegister', [votingRegister], options);
            return result;
        };
        let setVotingRegister_call = async (votingRegister, options) => {
            let result = await this.call('setVotingRegister', [votingRegister], options);
            return;
        };
        this.setVotingRegister = Object.assign(setVotingRegister_send, {
            call: setVotingRegister_call
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
        let updateWeight_send = async (account, options) => {
            let result = await this.send('updateWeight', [account], options);
            return result;
        };
        let updateWeight_call = async (account, options) => {
            let result = await this.call('updateWeight', [account], options);
            return;
        };
        this.updateWeight = Object.assign(updateWeight_send, {
            call: updateWeight_call
        });
        let upgrade_send = async (votingManager, options) => {
            let result = await this.send('upgrade', [votingManager], options);
            return result;
        };
        let upgrade_call = async (votingManager, options) => {
            let result = await this.call('upgrade', [votingManager], options);
            return;
        };
        this.upgrade = Object.assign(upgrade_send, {
            call: upgrade_call
        });
        let upgradeByAdmin_send = async (votingManager, options) => {
            let result = await this.send('upgradeByAdmin', [votingManager], options);
            return result;
        };
        let upgradeByAdmin_call = async (votingManager, options) => {
            let result = await this.call('upgradeByAdmin', [votingManager], options);
            return;
        };
        this.upgradeByAdmin = Object.assign(upgradeByAdmin_send, {
            call: upgradeByAdmin_call
        });
        let veto_send = async (voting, options) => {
            let result = await this.send('veto', [voting], options);
            return result;
        };
        let veto_call = async (voting, options) => {
            let result = await this.call('veto', [voting], options);
            return;
        };
        this.veto = Object.assign(veto_send, {
            call: veto_call
        });
        let votedParams = (params) => [params.poll, params.account, this.wallet.utils.toString(params.option)];
        let voted_send = async (params, options) => {
            let result = await this.send('voted', votedParams(params), options);
            return result;
        };
        let voted_call = async (params, options) => {
            let result = await this.call('voted', votedParams(params), options);
            return;
        };
        this.voted = Object.assign(voted_send, {
            call: voted_call
        });
    }
}
OSWAP_VotingManager._abi = OSWAP_VotingManager_json_1.default.abi;
exports.OSWAP_VotingManager = OSWAP_VotingManager;
