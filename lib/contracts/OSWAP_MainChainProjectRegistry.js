"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_MainChainProjectRegistry = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_MainChainProjectRegistry_json_1 = __importDefault(require("./OSWAP_MainChainProjectRegistry.json"));
class OSWAP_MainChainProjectRegistry extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_MainChainProjectRegistry_json_1.default.abi, OSWAP_MainChainProjectRegistry_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.trollRegistry, this.wallet.utils.toString(params.trollType)], options);
    }
    parseAddTrollsEvent(receipt) {
        return this.parseEvents(receipt, "AddTrolls").map(e => this.decodeAddTrollsEvent(e));
    }
    decodeAddTrollsEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_contract_1.BigNumber(result.projectId),
            trollProfileIndex: result.trollProfileIndex.map(e => new eth_contract_1.BigNumber(e)),
            nonce: new eth_contract_1.BigNumber(result.nonce),
            signature: result.signature,
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
    parseNewProjectEvent(receipt) {
        return this.parseEvents(receipt, "NewProject").map(e => this.decodeNewProjectEvent(e));
    }
    decodeNewProjectEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_contract_1.BigNumber(result.projectId),
            owner: result.owner,
            projectTrolls: result.projectTrolls.map(e => new eth_contract_1.BigNumber(e)),
            _event: event
        };
    }
    parseNewProjectTokenEvent(receipt) {
        return this.parseEvents(receipt, "NewProjectToken").map(e => this.decodeNewProjectTokenEvent(e));
    }
    decodeNewProjectTokenEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_contract_1.BigNumber(result.projectId),
            chainId: new eth_contract_1.BigNumber(result.chainId),
            token: result.token,
            nonce: new eth_contract_1.BigNumber(result.nonce),
            signature: result.signature,
            _event: event
        };
    }
    parseRemoveTrollsEvent(receipt) {
        return this.parseEvents(receipt, "RemoveTrolls").map(e => this.decodeRemoveTrollsEvent(e));
    }
    decodeRemoveTrollsEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_contract_1.BigNumber(result.projectId),
            trollProfileIndex: result.trollProfileIndex.map(e => new eth_contract_1.BigNumber(e)),
            nonce: new eth_contract_1.BigNumber(result.nonce),
            signature: result.signature,
            _event: event
        };
    }
    parseResumeEvent(receipt) {
        return this.parseEvents(receipt, "Resume").map(e => this.decodeResumeEvent(e));
    }
    decodeResumeEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownEvent(receipt) {
        return this.parseEvents(receipt, "Shutdown").map(e => this.decodeShutdownEvent(e));
    }
    decodeShutdownEvent(event) {
        let result = event.data;
        return {
            account: result.account,
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
    parseStartProjectOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartProjectOwnershipTransfer").map(e => this.decodeStartProjectOwnershipTransferEvent(e));
    }
    decodeStartProjectOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_contract_1.BigNumber(result.projectId),
            newOwner: result.newOwner,
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
    parseTransferProjectOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferProjectOwnership").map(e => this.decodeTransferProjectOwnershipEvent(e));
    }
    decodeTransferProjectOwnershipEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_contract_1.BigNumber(result.projectId),
            newOwner: result.newOwner,
            nonce: new eth_contract_1.BigNumber(result.nonce),
            signature: result.signature,
            _event: event
        };
    }
    assign() {
        let getProject_call = async (projectId, options) => {
            let result = await this.call('getProject', [this.wallet.utils.toString(projectId)], options);
            return {
                owner: result.owner,
                newOwner: result.newOwner,
                projectTrolls: result.projectTrolls.map(e => new eth_contract_1.BigNumber(e)),
                chainIds: result.chainIds.map(e => new eth_contract_1.BigNumber(e)),
                tokens: result.tokens
            };
        };
        this.getProject = getProject_call;
        let getProjectsParams = (params) => [this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
        let getProjects_call = async (params, options) => {
            let result = await this.call('getProjects', getProjectsParams(params), options);
            return {
                owner: result.owner,
                projectTrolls: result.projectTrolls.map(a0 => a0.map(e => new eth_contract_1.BigNumber(e))),
                chainIds: result.chainIds.map(a0 => a0.map(e => new eth_contract_1.BigNumber(e))),
                tokens: result.tokens
            };
        };
        this.getProjects = getProjects_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return result;
        };
        this.isPermitted = isPermitted_call;
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
        let paused_call = async (options) => {
            let result = await this.call('paused', [], options);
            return result;
        };
        this.paused = paused_call;
        let projectLength_call = async (options) => {
            let result = await this.call('projectLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.projectLength = projectLength_call;
        let projectTrollsInvParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
        let projectTrollsInv_call = async (params, options) => {
            let result = await this.call('projectTrollsInv', projectTrollsInvParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.projectTrollsInv = projectTrollsInv_call;
        let projects_call = async (param1, options) => {
            let result = await this.call('projects', [this.wallet.utils.toString(param1)], options);
            return {
                owner: result.owner,
                newOwner: result.newOwner
            };
        };
        this.projects = projects_call;
        let projectsTrollsAndChainsLength_call = async (projectId, options) => {
            let result = await this.call('projectsTrollsAndChainsLength', [this.wallet.utils.toString(projectId)], options);
            return {
                trolls: new eth_contract_1.BigNumber(result.trolls),
                chains: new eth_contract_1.BigNumber(result.chains)
            };
        };
        this.projectsTrollsAndChainsLength = projectsTrollsAndChainsLength_call;
        let trollRegistry_call = async (options) => {
            let result = await this.call('trollRegistry', [], options);
            return result;
        };
        this.trollRegistry = trollRegistry_call;
        let trollType_call = async (options) => {
            let result = await this.call('trollType', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.trollType = trollType_call;
        let addProjectTokenParams = (params) => [this.wallet.utils.toString(params.projectId), params.tokens.map(e => ([this.wallet.utils.toString(e.chainId), e.token])), this.wallet.utils.toString(params.nonce), this.wallet.utils.stringToBytes(params.signatures)];
        let addProjectToken_send = async (params, options) => {
            let result = await this.send('addProjectToken', addProjectTokenParams(params), options);
            return result;
        };
        let addProjectToken_call = async (params, options) => {
            let result = await this.call('addProjectToken', addProjectTokenParams(params), options);
            return;
        };
        this.addProjectToken = Object.assign(addProjectToken_send, {
            call: addProjectToken_call
        });
        let addTrollsParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.nonce), this.wallet.utils.stringToBytes(params.signature)];
        let addTrolls_send = async (params, options) => {
            let result = await this.send('addTrolls', addTrollsParams(params), options);
            return result;
        };
        let addTrolls_call = async (params, options) => {
            let result = await this.call('addTrolls', addTrollsParams(params), options);
            return;
        };
        this.addTrolls = Object.assign(addTrolls_send, {
            call: addTrolls_call
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
        let newProjectParams = (params) => [params.tokens.map(e => ([this.wallet.utils.toString(e.chainId), e.token])), this.wallet.utils.toString(params.projectTrolls), this.wallet.utils.toString(params.nonce), this.wallet.utils.stringToBytes(params.signatures)];
        let newProject_send = async (params, options) => {
            let result = await this.send('newProject', newProjectParams(params), options);
            return result;
        };
        let newProject_call = async (params, options) => {
            let result = await this.call('newProject', newProjectParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.newProject = Object.assign(newProject_send, {
            call: newProject_call
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
        let removeTrollsParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.nonce), this.wallet.utils.stringToBytes(params.signature)];
        let removeTrolls_send = async (params, options) => {
            let result = await this.send('removeTrolls', removeTrollsParams(params), options);
            return result;
        };
        let removeTrolls_call = async (params, options) => {
            let result = await this.call('removeTrolls', removeTrollsParams(params), options);
            return;
        };
        this.removeTrolls = Object.assign(removeTrolls_send, {
            call: removeTrolls_call
        });
        let resume_send = async (options) => {
            let result = await this.send('resume', [], options);
            return result;
        };
        let resume_call = async (options) => {
            let result = await this.call('resume', [], options);
            return;
        };
        this.resume = Object.assign(resume_send, {
            call: resume_call
        });
        let shutdownByAdmin_send = async (options) => {
            let result = await this.send('shutdownByAdmin', [], options);
            return result;
        };
        let shutdownByAdmin_call = async (options) => {
            let result = await this.call('shutdownByAdmin', [], options);
            return;
        };
        this.shutdownByAdmin = Object.assign(shutdownByAdmin_send, {
            call: shutdownByAdmin_call
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
        let takeProjectOwnershipParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.nonce), this.wallet.utils.stringToBytes(params.signature)];
        let takeProjectOwnership_send = async (params, options) => {
            let result = await this.send('takeProjectOwnership', takeProjectOwnershipParams(params), options);
            return result;
        };
        let takeProjectOwnership_call = async (params, options) => {
            let result = await this.call('takeProjectOwnership', takeProjectOwnershipParams(params), options);
            return;
        };
        this.takeProjectOwnership = Object.assign(takeProjectOwnership_send, {
            call: takeProjectOwnership_call
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
        let transferProjectOwnershipParams = (params) => [this.wallet.utils.toString(params.projectId), params.newOwner];
        let transferProjectOwnership_send = async (params, options) => {
            let result = await this.send('transferProjectOwnership', transferProjectOwnershipParams(params), options);
            return result;
        };
        let transferProjectOwnership_call = async (params, options) => {
            let result = await this.call('transferProjectOwnership', transferProjectOwnershipParams(params), options);
            return;
        };
        this.transferProjectOwnership = Object.assign(transferProjectOwnership_send, {
            call: transferProjectOwnership_call
        });
    }
}
OSWAP_MainChainProjectRegistry._abi = OSWAP_MainChainProjectRegistry_json_1.default.abi;
exports.OSWAP_MainChainProjectRegistry = OSWAP_MainChainProjectRegistry;
