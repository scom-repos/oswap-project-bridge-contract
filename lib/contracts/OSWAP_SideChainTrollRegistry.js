"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_SideChainTrollRegistry = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_SideChainTrollRegistry_json_1 = __importDefault(require("./OSWAP_SideChainTrollRegistry.json"));
class OSWAP_SideChainTrollRegistry extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_SideChainTrollRegistry_json_1.default.abi, OSWAP_SideChainTrollRegistry_json_1.default.bytecode);
        this.assign();
    }
    deploy(configStore, options) {
        return this.__deploy([configStore], options);
    }
    parseAddTrollEvent(receipt) {
        return this.parseEvents(receipt, "AddTroll").map(e => this.decodeAddTrollEvent(e));
    }
    decodeAddTrollEvent(event) {
        let result = event.data;
        return {
            troll: result.troll,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            isSuperTroll: result.isSuperTroll,
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
    parseDelistTrollEvent(receipt) {
        return this.parseEvents(receipt, "DelistTroll").map(e => this.decodeDelistTrollEvent(e));
    }
    decodeDelistTrollEvent(event) {
        let result = event.data;
        return {
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            _event: event
        };
    }
    parseLockGeneralTrollEvent(receipt) {
        return this.parseEvents(receipt, "LockGeneralTroll").map(e => this.decodeLockGeneralTrollEvent(e));
    }
    decodeLockGeneralTrollEvent(event) {
        let result = event.data;
        return {
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            lockedBy: result.lockedBy,
            _event: event
        };
    }
    parseLockSuperTrollEvent(receipt) {
        return this.parseEvents(receipt, "LockSuperTroll").map(e => this.decodeLockSuperTrollEvent(e));
    }
    decodeLockSuperTrollEvent(event) {
        let result = event.data;
        return {
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            lockedBy: result.lockedBy,
            _event: event
        };
    }
    parseNewVaultEvent(receipt) {
        return this.parseEvents(receipt, "NewVault").map(e => this.decodeNewVaultEvent(e));
    }
    decodeNewVaultEvent(event) {
        let result = event.data;
        return {
            token: result.token,
            vault: result.vault,
            _event: event
        };
    }
    parseRemoveTrollEvent(receipt) {
        return this.parseEvents(receipt, "RemoveTroll").map(e => this.decodeRemoveTrollEvent(e));
    }
    decodeRemoveTrollEvent(event) {
        let result = event.data;
        return {
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
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
    parseSetVotingExecutorEvent(receipt) {
        return this.parseEvents(receipt, "SetVotingExecutor").map(e => this.decodeSetVotingExecutorEvent(e));
    }
    decodeSetVotingExecutorEvent(event) {
        let result = event.data;
        return {
            newVotingExecutor: result.newVotingExecutor,
            isActive: result.isActive,
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
    parseUnlockGeneralTrollEvent(receipt) {
        return this.parseEvents(receipt, "UnlockGeneralTroll").map(e => this.decodeUnlockGeneralTrollEvent(e));
    }
    decodeUnlockGeneralTrollEvent(event) {
        let result = event.data;
        return {
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            _event: event
        };
    }
    parseUnlockSuperTrollEvent(receipt) {
        return this.parseEvents(receipt, "UnlockSuperTroll").map(e => this.decodeUnlockSuperTrollEvent(e));
    }
    decodeUnlockSuperTrollEvent(event) {
        let result = event.data;
        return {
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            unlock: result.unlock,
            bridgeVault: result.bridgeVault,
            penalty: new eth_contract_1.BigNumber(result.penalty),
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
    parseUpgradeEvent(receipt) {
        return this.parseEvents(receipt, "Upgrade").map(e => this.decodeUpgradeEvent(e));
    }
    decodeUpgradeEvent(event) {
        let result = event.data;
        return {
            newTrollRegistry: result.newTrollRegistry,
            _event: event
        };
    }
    assign() {
        let allVaultToken_call = async (options) => {
            let result = await this.call('allVaultToken', [], options);
            return result;
        };
        this.allVaultToken = allVaultToken_call;
        let configStore_call = async (options) => {
            let result = await this.call('configStore', [], options);
            return result;
        };
        this.configStore = configStore_call;
        let generalTrollCount_call = async (options) => {
            let result = await this.call('generalTrollCount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.generalTrollCount = generalTrollCount_call;
        let govToken_call = async (options) => {
            let result = await this.call('govToken', [], options);
            return result;
        };
        this.govToken = govToken_call;
        let hashAddTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.troll, params.isSuperTroll, this.wallet.utils.toString(params.nonce)];
        let hashAddTroll_call = async (params, options) => {
            let result = await this.call('hashAddTroll', hashAddTrollParams(params), options);
            return result;
        };
        this.hashAddTroll = hashAddTroll_call;
        let hashRegisterVaultParams = (params) => [params.token, params.vault, this.wallet.utils.toString(params.nonce)];
        let hashRegisterVault_call = async (params, options) => {
            let result = await this.call('hashRegisterVault', hashRegisterVaultParams(params), options);
            return result;
        };
        this.hashRegisterVault = hashRegisterVault_call;
        let hashRemoveTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.nonce)];
        let hashRemoveTroll_call = async (params, options) => {
            let result = await this.call('hashRemoveTroll', hashRemoveTrollParams(params), options);
            return result;
        };
        this.hashRemoveTroll = hashRemoveTroll_call;
        let hashUnlockTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.unlock, params.vaultRegistry, this.wallet.utils.toString(params.penalty), this.wallet.utils.toString(params.nonce)];
        let hashUnlockTroll_call = async (params, options) => {
            let result = await this.call('hashUnlockTroll', hashUnlockTrollParams(params), options);
            return result;
        };
        this.hashUnlockTroll = hashUnlockTroll_call;
        let hashUpdateTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.newTroll, this.wallet.utils.toString(params.nonce)];
        let hashUpdateTroll_call = async (params, options) => {
            let result = await this.call('hashUpdateTroll', hashUpdateTrollParams(params), options);
            return result;
        };
        this.hashUpdateTroll = hashUpdateTroll_call;
        let isGeneralTrollParams = (params) => [params.troll, params.returnFalseIfBlocked];
        let isGeneralTroll_call = async (params, options) => {
            let result = await this.call('isGeneralTroll', isGeneralTrollParams(params), options);
            return result;
        };
        this.isGeneralTroll = isGeneralTroll_call;
        let isGeneralTrollByIndexParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.returnFalseIfBlocked];
        let isGeneralTrollByIndex_call = async (params, options) => {
            let result = await this.call('isGeneralTrollByIndex', isGeneralTrollByIndexParams(params), options);
            return result;
        };
        this.isGeneralTrollByIndex = isGeneralTrollByIndex_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let isSuperTrollParams = (params) => [params.troll, params.returnFalseIfBlocked];
        let isSuperTroll_call = async (params, options) => {
            let result = await this.call('isSuperTroll', isSuperTrollParams(params), options);
            return result;
        };
        this.isSuperTroll = isSuperTroll_call;
        let isSuperTrollByIndexParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.returnFalseIfBlocked];
        let isSuperTrollByIndex_call = async (params, options) => {
            let result = await this.call('isSuperTrollByIndex', isSuperTrollByIndexParams(params), options);
            return result;
        };
        this.isSuperTrollByIndex = isSuperTrollByIndex_call;
        let isVotingExecutor_call = async (param1, options) => {
            let result = await this.call('isVotingExecutor', [param1], options);
            return result;
        };
        this.isVotingExecutor = isVotingExecutor_call;
        let lastTrollTxCount_call = async (param1, options) => {
            let result = await this.call('lastTrollTxCount', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.lastTrollTxCount = lastTrollTxCount_call;
        let newOwner_call = async (options) => {
            let result = await this.call('newOwner', [], options);
            return result;
        };
        this.newOwner = newOwner_call;
        let newTrollRegistry_call = async (options) => {
            let result = await this.call('newTrollRegistry', [], options);
            return result;
        };
        this.newTrollRegistry = newTrollRegistry_call;
        let newVotingExecutorManager_call = async (options) => {
            let result = await this.call('newVotingExecutorManager', [], options);
            return result;
        };
        this.newVotingExecutorManager = newVotingExecutorManager_call;
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
        let superTrollCount_call = async (options) => {
            let result = await this.call('superTrollCount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.superTrollCount = superTrollCount_call;
        let transactionsCount_call = async (options) => {
            let result = await this.call('transactionsCount', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.transactionsCount = transactionsCount_call;
        let trollProfileInv_call = async (param1, options) => {
            let result = await this.call('trollProfileInv', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.trollProfileInv = trollProfileInv_call;
        let trollProfiles_call = async (param1, options) => {
            let result = await this.call('trollProfiles', [this.wallet.utils.toString(param1)], options);
            return {
                troll: result.troll,
                trollType: new eth_contract_1.BigNumber(result.trollType)
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
        let vaultToken_call = async (param1, options) => {
            let result = await this.call('vaultToken', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.vaultToken = vaultToken_call;
        let vaultTokenLength_call = async (options) => {
            let result = await this.call('vaultTokenLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.vaultTokenLength = vaultTokenLength_call;
        let vaults_call = async (param1, options) => {
            let result = await this.call('vaults', [param1], options);
            return result;
        };
        this.vaults = vaults_call;
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
        let addTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), params.troll, params.isSuperTroll, this.wallet.utils.toString(params.nonce)];
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
        let initAddressParams = (params) => [params.votingExecutor, params.tokens, params.vaults];
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
        let lockGeneralTroll_send = async (trollProfileIndex, options) => {
            let result = await this.send('lockGeneralTroll', [this.wallet.utils.toString(trollProfileIndex)], options);
            return result;
        };
        let lockGeneralTroll_call = async (trollProfileIndex, options) => {
            let result = await this.call('lockGeneralTroll', [this.wallet.utils.toString(trollProfileIndex)], options);
            return;
        };
        this.lockGeneralTroll = Object.assign(lockGeneralTroll_send, {
            call: lockGeneralTroll_call
        });
        let lockSuperTroll_send = async (trollProfileIndex, options) => {
            let result = await this.send('lockSuperTroll', [this.wallet.utils.toString(trollProfileIndex)], options);
            return result;
        };
        let lockSuperTroll_call = async (trollProfileIndex, options) => {
            let result = await this.call('lockSuperTroll', [this.wallet.utils.toString(trollProfileIndex)], options);
            return;
        };
        this.lockSuperTroll = Object.assign(lockSuperTroll_send, {
            call: lockSuperTroll_call
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
        let registerVaultParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), params.token, params.vault, this.wallet.utils.toString(params.nonce)];
        let registerVault_send = async (params, options) => {
            let result = await this.send('registerVault', registerVaultParams(params), options);
            return result;
        };
        let registerVault_call = async (params, options) => {
            let result = await this.call('registerVault', registerVaultParams(params), options);
            return;
        };
        this.registerVault = Object.assign(registerVault_send, {
            call: registerVault_call
        });
        let removeTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.nonce)];
        let removeTroll_send = async (params, options) => {
            let result = await this.send('removeTroll', removeTrollParams(params), options);
            return result;
        };
        let removeTroll_call = async (params, options) => {
            let result = await this.call('removeTroll', removeTrollParams(params), options);
            return;
        };
        this.removeTroll = Object.assign(removeTroll_send, {
            call: removeTroll_call
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
        let shutdownByVoting_send = async (options) => {
            let result = await this.send('shutdownByVoting', [], options);
            return result;
        };
        let shutdownByVoting_call = async (options) => {
            let result = await this.call('shutdownByVoting', [], options);
            return;
        };
        this.shutdownByVoting = Object.assign(shutdownByVoting_send, {
            call: shutdownByVoting_call
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
        let unlockGeneralTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.nonce)];
        let unlockGeneralTroll_send = async (params, options) => {
            let result = await this.send('unlockGeneralTroll', unlockGeneralTrollParams(params), options);
            return result;
        };
        let unlockGeneralTroll_call = async (params, options) => {
            let result = await this.call('unlockGeneralTroll', unlockGeneralTrollParams(params), options);
            return;
        };
        this.unlockGeneralTroll = Object.assign(unlockGeneralTroll_send, {
            call: unlockGeneralTroll_call
        });
        let unlockSuperTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), params.unlock, params.vaultRegistry, this.wallet.utils.toString(params.penalty), this.wallet.utils.toString(params.nonce)];
        let unlockSuperTroll_send = async (params, options) => {
            let result = await this.send('unlockSuperTroll', unlockSuperTrollParams(params), options);
            return result;
        };
        let unlockSuperTroll_call = async (params, options) => {
            let result = await this.call('unlockSuperTroll', unlockSuperTrollParams(params), options);
            return;
        };
        this.unlockSuperTroll = Object.assign(unlockSuperTroll_send, {
            call: unlockSuperTroll_call
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
        let updateTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), params.newTroll, this.wallet.utils.toString(params.nonce)];
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
        let upgrade_send = async (trollRegistry, options) => {
            let result = await this.send('upgrade', [trollRegistry], options);
            return result;
        };
        let upgrade_call = async (trollRegistry, options) => {
            let result = await this.call('upgrade', [trollRegistry], options);
            return;
        };
        this.upgrade = Object.assign(upgrade_send, {
            call: upgrade_call
        });
        let upgradeByAdmin_send = async (trollRegistry, options) => {
            let result = await this.send('upgradeByAdmin', [trollRegistry], options);
            return result;
        };
        let upgradeByAdmin_call = async (trollRegistry, options) => {
            let result = await this.call('upgradeByAdmin', [trollRegistry], options);
            return;
        };
        this.upgradeByAdmin = Object.assign(upgradeByAdmin_send, {
            call: upgradeByAdmin_call
        });
        let verifySignaturesParams = (params) => [params.msgSender, this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.stringToBytes32(params.paramsHash), this.wallet.utils.toString(params.nonce)];
        let verifySignatures_send = async (params, options) => {
            let result = await this.send('verifySignatures', verifySignaturesParams(params), options);
            return result;
        };
        let verifySignatures_call = async (params, options) => {
            let result = await this.call('verifySignatures', verifySignaturesParams(params), options);
            return;
        };
        this.verifySignatures = Object.assign(verifySignatures_send, {
            call: verifySignatures_call
        });
    }
}
OSWAP_SideChainTrollRegistry._abi = OSWAP_SideChainTrollRegistry_json_1.default.abi;
exports.OSWAP_SideChainTrollRegistry = OSWAP_SideChainTrollRegistry;
