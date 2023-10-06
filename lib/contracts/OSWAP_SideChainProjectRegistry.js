"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_SideChainProjectRegistry = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_SideChainProjectRegistry_json_1 = __importDefault(require("./OSWAP_SideChainProjectRegistry.json"));
class OSWAP_SideChainProjectRegistry extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_SideChainProjectRegistry_json_1.default.abi, OSWAP_SideChainProjectRegistry_json_1.default.bytecode);
        this.assign();
    }
    deploy(trollRegistry, options) {
        return this.__deploy([trollRegistry], options);
    }
    parseAddTrollEvent(receipt) {
        return this.parseEvents(receipt, "AddTroll").map(e => this.decodeAddTrollEvent(e));
    }
    decodeAddTrollEvent(event) {
        let result = event.data;
        return {
            troll: result.troll,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
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
    parseNewProjectVaultEvent(receipt) {
        return this.parseEvents(receipt, "NewProjectVault").map(e => this.decodeNewProjectVaultEvent(e));
    }
    decodeNewProjectVaultEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_contract_1.BigNumber(result.projectId),
            asset: result.asset,
            owner: result.owner,
            vaultRegistry: result.vaultRegistry,
            bridgeVault: result.bridgeVault,
            projectTrolls: result.projectTrolls.map(e => new eth_contract_1.BigNumber(e)),
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
    parseUpdateProjectEvent(receipt) {
        return this.parseEvents(receipt, "UpdateProject").map(e => this.decodeUpdateProjectEvent(e));
    }
    decodeUpdateProjectEvent(event) {
        let result = event.data;
        return {
            projectId: new eth_contract_1.BigNumber(result.projectId),
            owner: result.owner,
            trollsToRemove: result.trollsToRemove.map(e => new eth_contract_1.BigNumber(e)),
            trollsToAdd: result.trollsToAdd.map(e => new eth_contract_1.BigNumber(e)),
            _event: event
        };
    }
    parseUpdateTrollEvent(receipt) {
        return this.parseEvents(receipt, "UpdateTroll").map(e => this.decodeUpdateTrollEvent(e));
    }
    decodeUpdateTrollEvent(event) {
        let result = event.data;
        return {
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            troll: result.troll,
            _event: event
        };
    }
    assign() {
        let bridgeVaultCreator_call = async (options) => {
            let result = await this.call('bridgeVaultCreator', [], options);
            return result;
        };
        this.bridgeVaultCreator = bridgeVaultCreator_call;
        let getProject_call = async (projectId, options) => {
            let result = await this.call('getProject', [this.wallet.utils.toString(projectId)], options);
            return ({
                asset: result.asset,
                owner: result.owner,
                vaultRegistry: result.vaultRegistry,
                bridgeVault: result.bridgeVault,
                projectTrolls: result.projectTrolls.map(e => new eth_contract_1.BigNumber(e))
            });
        };
        this.getProject = getProject_call;
        let getProjects_call = async (projectIds, options) => {
            let result = await this.call('getProjects', [this.wallet.utils.toString(projectIds)], options);
            return (result.map(e => ({
                asset: e.asset,
                owner: e.owner,
                vaultRegistry: e.vaultRegistry,
                bridgeVault: e.bridgeVault,
                projectTrolls: e.projectTrolls.map(e => new eth_contract_1.BigNumber(e))
            })));
        };
        this.getProjects = getProjects_call;
        let hashAddTrollFromOwnerParams = (params) => [params.newTroll, this.wallet.utils.toString(params.nonce)];
        let hashAddTrollFromOwner_call = async (params, options) => {
            let result = await this.call('hashAddTrollFromOwner', hashAddTrollFromOwnerParams(params), options);
            return result;
        };
        this.hashAddTrollFromOwner = hashAddTrollFromOwner_call;
        let hashNewVaultParams = (params) => [this.wallet.utils.toString(params.projectId), params.asset, params.owner, this.wallet.utils.toString(params.projectTrolls), this.wallet.utils.toString(params.nonce)];
        let hashNewVault_call = async (params, options) => {
            let result = await this.call('hashNewVault', hashNewVaultParams(params), options);
            return result;
        };
        this.hashNewVault = hashNewVault_call;
        let hashNewVaultFormOwnerParams = (params) => [params.asset, this.wallet.utils.toString(params.projectTrolls), this.wallet.utils.toString(params.nonce)];
        let hashNewVaultFormOwner_call = async (params, options) => {
            let result = await this.call('hashNewVaultFormOwner', hashNewVaultFormOwnerParams(params), options);
            return result;
        };
        this.hashNewVaultFormOwner = hashNewVaultFormOwner_call;
        let hashTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.troll, this.wallet.utils.toString(params.nonce)];
        let hashTroll_call = async (params, options) => {
            let result = await this.call('hashTroll', hashTrollParams(params), options);
            return result;
        };
        this.hashTroll = hashTroll_call;
        let hashUpdateProjectParams = (params) => [this.wallet.utils.toString(params.projectId), params.newOwner, this.wallet.utils.toString(params.trollsToRemove), this.wallet.utils.toString(params.trollsToAdd), this.wallet.utils.toString(params.nonce)];
        let hashUpdateProject_call = async (params, options) => {
            let result = await this.call('hashUpdateProject', hashUpdateProjectParams(params), options);
            return result;
        };
        this.hashUpdateProject = hashUpdateProject_call;
        let hashUpdateProjectFromOwnerParams = (params) => [this.wallet.utils.toString(params.projectId), params.newOwner, this.wallet.utils.toString(params.trollsToRemove), this.wallet.utils.toString(params.trollsToAdd), this.wallet.utils.toString(params.nonce)];
        let hashUpdateProjectFromOwner_call = async (params, options) => {
            let result = await this.call('hashUpdateProjectFromOwner', hashUpdateProjectFromOwnerParams(params), options);
            return result;
        };
        this.hashUpdateProjectFromOwner = hashUpdateProjectFromOwner_call;
        let hashUpdateTrollFromOwnerParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.newTroll, this.wallet.utils.toString(params.nonce)];
        let hashUpdateTrollFromOwner_call = async (params, options) => {
            let result = await this.call('hashUpdateTrollFromOwner', hashUpdateTrollFromOwnerParams(params), options);
            return result;
        };
        this.hashUpdateTrollFromOwner = hashUpdateTrollFromOwner_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let isProjectTrollParams = (params) => [this.wallet.utils.toString(params.projectId), this.wallet.utils.toString(params.trollProfileIndex)];
        let isProjectTroll_call = async (params, options) => {
            let result = await this.call('isProjectTroll', isProjectTrollParams(params), options);
            return result;
        };
        this.isProjectTroll = isProjectTroll_call;
        let isProjectTrollByAddressParams = (params) => [this.wallet.utils.toString(params.projectId), params.troll];
        let isProjectTrollByAddress_call = async (params, options) => {
            let result = await this.call('isProjectTrollByAddress', isProjectTrollByAddressParams(params), options);
            return result;
        };
        this.isProjectTrollByAddress = isProjectTrollByAddress_call;
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
        let projectTrollsInvParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
        let projectTrollsInv_call = async (params, options) => {
            let result = await this.call('projectTrollsInv', projectTrollsInvParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.projectTrollsInv = projectTrollsInv_call;
        let projectTrollsLength_call = async (projectId, options) => {
            let result = await this.call('projectTrollsLength', [this.wallet.utils.toString(projectId)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.projectTrollsLength = projectTrollsLength_call;
        let trollProfileInv_call = async (param1, options) => {
            let result = await this.call('trollProfileInv', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.trollProfileInv = trollProfileInv_call;
        let trollProfiles_call = async (param1, options) => {
            let result = await this.call('trollProfiles', [this.wallet.utils.toString(param1)], options);
            return {
                owner: result.owner,
                troll: result.troll
            };
        };
        this.trollProfiles = trollProfiles_call;
        let trollRegistry_call = async (options) => {
            let result = await this.call('trollRegistry', [], options);
            return result;
        };
        this.trollRegistry = trollRegistry_call;
        let usedNonce_call = async (param1, options) => {
            let result = await this.call('usedNonce', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.usedNonce = usedNonce_call;
        let usedOwnerNonceParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
        let usedOwnerNonce_call = async (params, options) => {
            let result = await this.call('usedOwnerNonce', usedOwnerNonceParams(params), options);
            return result;
        };
        this.usedOwnerNonce = usedOwnerNonce_call;
        let usedProjectNonceParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
        let usedProjectNonce_call = async (params, options) => {
            let result = await this.call('usedProjectNonce', usedProjectNonceParams(params), options);
            return result;
        };
        this.usedProjectNonce = usedProjectNonce_call;
        let vaultRegistryCreator_call = async (options) => {
            let result = await this.call('vaultRegistryCreator', [], options);
            return result;
        };
        this.vaultRegistryCreator = vaultRegistryCreator_call;
        let addTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.stringToBytes(params.ownerSignature), this.wallet.utils.toString(params.trollProfileIndex), params.owner, params.troll, this.wallet.utils.toString(params.nonceForOwnerSignature), this.wallet.utils.toString(params.nonce)];
        let addTroll_send = async (params, options) => {
            let result = await this.send('addTroll', addTrollParams(params), options);
            return result;
        };
        let addTroll_call = async (params, options) => {
            let result = await this.call('addTroll', addTrollParams(params), options);
            return;
        };
        this.addTroll = Object.assign(addTroll_send, {
            call: addTroll_call
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
        let initAddressParams = (params) => [params.vaultRegistryCreator, params.bridgeVaultCreator];
        let initAddress_send = async (params, options) => {
            let result = await this.send('initAddress', initAddressParams(params), options);
            return result;
        };
        let initAddress_call = async (params, options) => {
            let result = await this.call('initAddress', initAddressParams(params), options);
            return;
        };
        this.initAddress = Object.assign(initAddress_send, {
            call: initAddress_call
        });
        let newVaultParams = (params) => [this.wallet.utils.stringToBytes(params.trollsSignatures), this.wallet.utils.stringToBytes(params.ownerSignature), this.wallet.utils.toString(params.projectId), params.asset, params.owner, this.wallet.utils.toString(params.projectTrolls), this.wallet.utils.toString(params.nonceForOwnerSignature), this.wallet.utils.toString(params.nonce)];
        let newVault_send = async (params, options) => {
            let result = await this.send('newVault', newVaultParams(params), options);
            return result;
        };
        let newVault_call = async (params, options) => {
            let result = await this.call('newVault', newVaultParams(params), options);
            return;
        };
        this.newVault = Object.assign(newVault_send, {
            call: newVault_call
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
        let updateProjectParams = (params) => [this.wallet.utils.stringToBytes(params.trollsSignatures), this.wallet.utils.stringToBytes(params.ownerSignature), this.wallet.utils.toString(params.projectId), params.newOwner, this.wallet.utils.toString(params.trollsToRemove), this.wallet.utils.toString(params.trollsToAdd), this.wallet.utils.toString(params.nonceForOwnerSignature), this.wallet.utils.toString(params.nonce)];
        let updateProject_send = async (params, options) => {
            let result = await this.send('updateProject', updateProjectParams(params), options);
            return result;
        };
        let updateProject_call = async (params, options) => {
            let result = await this.call('updateProject', updateProjectParams(params), options);
            return;
        };
        this.updateProject = Object.assign(updateProject_send, {
            call: updateProject_call
        });
        let updateTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.stringToBytes(params.ownerSignature), this.wallet.utils.toString(params.trollProfileIndex), params.newTroll, this.wallet.utils.toString(params.nonceForOwnerSignature), this.wallet.utils.toString(params.nonce)];
        let updateTroll_send = async (params, options) => {
            let result = await this.send('updateTroll', updateTrollParams(params), options);
            return result;
        };
        let updateTroll_call = async (params, options) => {
            let result = await this.call('updateTroll', updateTrollParams(params), options);
            return;
        };
        this.updateTroll = Object.assign(updateTroll_send, {
            call: updateTroll_call
        });
    }
}
OSWAP_SideChainProjectRegistry._abi = OSWAP_SideChainProjectRegistry_json_1.default.abi;
exports.OSWAP_SideChainProjectRegistry = OSWAP_SideChainProjectRegistry;
