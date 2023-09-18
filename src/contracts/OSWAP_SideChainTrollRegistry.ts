import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_SideChainTrollRegistry.json";
export interface IAddTrollParams {signatures:string[];trollProfileIndex:number|BigNumber;troll:string;isSuperTroll:boolean;nonce:number|BigNumber}
export interface IHashAddTrollParams {trollProfileIndex:number|BigNumber;troll:string;isSuperTroll:boolean;nonce:number|BigNumber}
export interface IHashRegisterVaultParams {token:string;vault:string;nonce:number|BigNumber}
export interface IHashRemoveTrollParams {trollProfileIndex:number|BigNumber;nonce:number|BigNumber}
export interface IHashUnlockTrollParams {trollProfileIndex:number|BigNumber;unlock:boolean;vaultRegistry:string[];penalty:(number|BigNumber)[];nonce:number|BigNumber}
export interface IHashUpdateTrollParams {trollProfileIndex:number|BigNumber;newTroll:string;nonce:number|BigNumber}
export interface IInitAddressParams {votingExecutor:string;tokens:string[];vaults:string[]}
export interface IIsGeneralTrollParams {troll:string;returnFalseIfBlocked:boolean}
export interface IIsGeneralTrollByIndexParams {trollProfileIndex:number|BigNumber;returnFalseIfBlocked:boolean}
export interface IIsSuperTrollParams {troll:string;returnFalseIfBlocked:boolean}
export interface IIsSuperTrollByIndexParams {trollProfileIndex:number|BigNumber;returnFalseIfBlocked:boolean}
export interface IRegisterVaultParams {signatures:string[];token:string;vault:string;nonce:number|BigNumber}
export interface IRemoveTrollParams {signatures:string[];trollProfileIndex:number|BigNumber;nonce:number|BigNumber}
export interface ISetVotingExecutorParams {votingExecutor:string;bool:boolean}
export interface IUnlockGeneralTrollParams {signatures:string[];trollProfileIndex:number|BigNumber;nonce:number|BigNumber}
export interface IUnlockSuperTrollParams {signatures:string[];trollProfileIndex:number|BigNumber;unlock:boolean;vaultRegistry:string[];penalty:(number|BigNumber)[];nonce:number|BigNumber}
export interface IUpdateTrollParams {signatures:string[];trollProfileIndex:number|BigNumber;newTroll:string;nonce:number|BigNumber}
export interface IVerifySignaturesParams {msgSender:string;signatures:string[];paramsHash:string;nonce:number|BigNumber}
export class OSWAP_SideChainTrollRegistry extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(configStore:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([configStore], options);
    }
    parseAddTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.AddTrollEvent[]{
        return this.parseEvents(receipt, "AddTroll").map(e=>this.decodeAddTrollEvent(e));
    }
    decodeAddTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.AddTrollEvent{
        let result = event.data;
        return {
            troll: result.troll,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            isSuperTroll: result.isSuperTroll,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): OSWAP_SideChainTrollRegistry.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): OSWAP_SideChainTrollRegistry.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDelistTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.DelistTrollEvent[]{
        return this.parseEvents(receipt, "DelistTroll").map(e=>this.decodeDelistTrollEvent(e));
    }
    decodeDelistTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.DelistTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            _event: event
        };
    }
    parseLockGeneralTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.LockGeneralTrollEvent[]{
        return this.parseEvents(receipt, "LockGeneralTroll").map(e=>this.decodeLockGeneralTrollEvent(e));
    }
    decodeLockGeneralTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.LockGeneralTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            lockedBy: result.lockedBy,
            _event: event
        };
    }
    parseLockSuperTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.LockSuperTrollEvent[]{
        return this.parseEvents(receipt, "LockSuperTroll").map(e=>this.decodeLockSuperTrollEvent(e));
    }
    decodeLockSuperTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.LockSuperTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            lockedBy: result.lockedBy,
            _event: event
        };
    }
    parseNewVaultEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.NewVaultEvent[]{
        return this.parseEvents(receipt, "NewVault").map(e=>this.decodeNewVaultEvent(e));
    }
    decodeNewVaultEvent(event: Event): OSWAP_SideChainTrollRegistry.NewVaultEvent{
        let result = event.data;
        return {
            token: result.token,
            vault: result.vault,
            _event: event
        };
    }
    parseRemoveTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.RemoveTrollEvent[]{
        return this.parseEvents(receipt, "RemoveTroll").map(e=>this.decodeRemoveTrollEvent(e));
    }
    decodeRemoveTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.RemoveTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            _event: event
        };
    }
    parseResumeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.ResumeEvent[]{
        return this.parseEvents(receipt, "Resume").map(e=>this.decodeResumeEvent(e));
    }
    decodeResumeEvent(event: Event): OSWAP_SideChainTrollRegistry.ResumeEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseSetVotingExecutorEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.SetVotingExecutorEvent[]{
        return this.parseEvents(receipt, "SetVotingExecutor").map(e=>this.decodeSetVotingExecutorEvent(e));
    }
    decodeSetVotingExecutorEvent(event: Event): OSWAP_SideChainTrollRegistry.SetVotingExecutorEvent{
        let result = event.data;
        return {
            newVotingExecutor: result.newVotingExecutor,
            isActive: result.isActive,
            _event: event
        };
    }
    parseShutdownEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.ShutdownEvent[]{
        return this.parseEvents(receipt, "Shutdown").map(e=>this.decodeShutdownEvent(e));
    }
    decodeShutdownEvent(event: Event): OSWAP_SideChainTrollRegistry.ShutdownEvent{
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_SideChainTrollRegistry.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): OSWAP_SideChainTrollRegistry.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnlockGeneralTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UnlockGeneralTrollEvent[]{
        return this.parseEvents(receipt, "UnlockGeneralTroll").map(e=>this.decodeUnlockGeneralTrollEvent(e));
    }
    decodeUnlockGeneralTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.UnlockGeneralTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            _event: event
        };
    }
    parseUnlockSuperTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UnlockSuperTrollEvent[]{
        return this.parseEvents(receipt, "UnlockSuperTroll").map(e=>this.decodeUnlockSuperTrollEvent(e));
    }
    decodeUnlockSuperTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.UnlockSuperTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            unlock: result.unlock,
            bridgeVault: result.bridgeVault,
            penalty: new BigNumber(result.penalty),
            _event: event
        };
    }
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UpdateConfigStoreEvent[]{
        return this.parseEvents(receipt, "UpdateConfigStore").map(e=>this.decodeUpdateConfigStoreEvent(e));
    }
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_SideChainTrollRegistry.UpdateConfigStoreEvent{
        let result = event.data;
        return {
            newConfigStore: result.newConfigStore,
            _event: event
        };
    }
    parseUpdateTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UpdateTrollEvent[]{
        return this.parseEvents(receipt, "UpdateTroll").map(e=>this.decodeUpdateTrollEvent(e));
    }
    decodeUpdateTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.UpdateTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            troll: result.troll,
            _event: event
        };
    }
    parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UpgradeEvent[]{
        return this.parseEvents(receipt, "Upgrade").map(e=>this.decodeUpgradeEvent(e));
    }
    decodeUpgradeEvent(event: Event): OSWAP_SideChainTrollRegistry.UpgradeEvent{
        let result = event.data;
        return {
            newTrollRegistry: result.newTrollRegistry,
            _event: event
        };
    }
    addTroll: {
        (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    allVaultToken: {
        (options?: TransactionOptions): Promise<string[]>;
    }
    configStore: {
        (options?: TransactionOptions): Promise<string>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    generalTrollCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    govToken: {
        (options?: TransactionOptions): Promise<string>;
    }
    hashAddTroll: {
        (params: IHashAddTrollParams, options?: TransactionOptions): Promise<string>;
    }
    hashRegisterVault: {
        (params: IHashRegisterVaultParams, options?: TransactionOptions): Promise<string>;
    }
    hashRemoveTroll: {
        (params: IHashRemoveTrollParams, options?: TransactionOptions): Promise<string>;
    }
    hashUnlockTroll: {
        (params: IHashUnlockTrollParams, options?: TransactionOptions): Promise<string>;
    }
    hashUpdateTroll: {
        (params: IHashUpdateTrollParams, options?: TransactionOptions): Promise<string>;
    }
    initAddress: {
        (params: IInitAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IInitAddressParams, options?: TransactionOptions) => Promise<void>;
    }
    isGeneralTroll: {
        (params: IIsGeneralTrollParams, options?: TransactionOptions): Promise<boolean>;
    }
    isGeneralTrollByIndex: {
        (params: IIsGeneralTrollByIndexParams, options?: TransactionOptions): Promise<boolean>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    isSuperTroll: {
        (params: IIsSuperTrollParams, options?: TransactionOptions): Promise<boolean>;
    }
    isSuperTrollByIndex: {
        (params: IIsSuperTrollByIndexParams, options?: TransactionOptions): Promise<boolean>;
    }
    isVotingExecutor: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    lastTrollTxCount: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    lockGeneralTroll: {
        (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollProfileIndex:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    lockSuperTroll: {
        (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollProfileIndex:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    newTrollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    newVotingExecutorManager: {
        (options?: TransactionOptions): Promise<string>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    paused: {
        (options?: TransactionOptions): Promise<boolean>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    registerVault: {
        (params: IRegisterVaultParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterVaultParams, options?: TransactionOptions) => Promise<void>;
    }
    removeTroll: {
        (params: IRemoveTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    resume: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    setVotingExecutor: {
        (params: ISetVotingExecutorParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetVotingExecutorParams, options?: TransactionOptions) => Promise<void>;
    }
    shutdownByAdmin: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    shutdownByVoting: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    superTrollCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    transactionsCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    trollProfileInv: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    trollProfiles: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{troll:string,trollType:BigNumber}>;
    }
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    unlockGeneralTroll: {
        (params: IUnlockGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnlockGeneralTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    unlockSuperTroll: {
        (params: IUnlockSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnlockSuperTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    updateConfigStore: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    updateTroll: {
        (params: IUpdateTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    upgrade: {
        (trollRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollRegistry:string, options?: TransactionOptions) => Promise<void>;
    }
    upgradeByAdmin: {
        (trollRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollRegistry:string, options?: TransactionOptions) => Promise<void>;
    }
    usedNonce: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<boolean>;
    }
    vaultToken: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    vaultTokenLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    vaults: {
        (param1:string, options?: TransactionOptions): Promise<string>;
    }
    verifySignatures: {
        (params: IVerifySignaturesParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IVerifySignaturesParams, options?: TransactionOptions) => Promise<void>;
    }
    votingExecutor: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    votingExecutorInv: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    votingExecutorLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    private assign(){
        let allVaultToken_call = async (options?: TransactionOptions): Promise<string[]> => {
            let result = await this.call('allVaultToken',[],options);
            return result;
        }
        this.allVaultToken = allVaultToken_call
        let configStore_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('configStore',[],options);
            return result;
        }
        this.configStore = configStore_call
        let generalTrollCount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('generalTrollCount',[],options);
            return new BigNumber(result);
        }
        this.generalTrollCount = generalTrollCount_call
        let govToken_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('govToken',[],options);
            return result;
        }
        this.govToken = govToken_call
        let hashAddTrollParams = (params: IHashAddTrollParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.troll,params.isSuperTroll,this.wallet.utils.toString(params.nonce)];
        let hashAddTroll_call = async (params: IHashAddTrollParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashAddTroll',hashAddTrollParams(params),options);
            return result;
        }
        this.hashAddTroll = hashAddTroll_call
        let hashRegisterVaultParams = (params: IHashRegisterVaultParams) => [params.token,params.vault,this.wallet.utils.toString(params.nonce)];
        let hashRegisterVault_call = async (params: IHashRegisterVaultParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashRegisterVault',hashRegisterVaultParams(params),options);
            return result;
        }
        this.hashRegisterVault = hashRegisterVault_call
        let hashRemoveTrollParams = (params: IHashRemoveTrollParams) => [this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.nonce)];
        let hashRemoveTroll_call = async (params: IHashRemoveTrollParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashRemoveTroll',hashRemoveTrollParams(params),options);
            return result;
        }
        this.hashRemoveTroll = hashRemoveTroll_call
        let hashUnlockTrollParams = (params: IHashUnlockTrollParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.unlock,params.vaultRegistry,this.wallet.utils.toString(params.penalty),this.wallet.utils.toString(params.nonce)];
        let hashUnlockTroll_call = async (params: IHashUnlockTrollParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashUnlockTroll',hashUnlockTrollParams(params),options);
            return result;
        }
        this.hashUnlockTroll = hashUnlockTroll_call
        let hashUpdateTrollParams = (params: IHashUpdateTrollParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.newTroll,this.wallet.utils.toString(params.nonce)];
        let hashUpdateTroll_call = async (params: IHashUpdateTrollParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashUpdateTroll',hashUpdateTrollParams(params),options);
            return result;
        }
        this.hashUpdateTroll = hashUpdateTroll_call
        let isGeneralTrollParams = (params: IIsGeneralTrollParams) => [params.troll,params.returnFalseIfBlocked];
        let isGeneralTroll_call = async (params: IIsGeneralTrollParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isGeneralTroll',isGeneralTrollParams(params),options);
            return result;
        }
        this.isGeneralTroll = isGeneralTroll_call
        let isGeneralTrollByIndexParams = (params: IIsGeneralTrollByIndexParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.returnFalseIfBlocked];
        let isGeneralTrollByIndex_call = async (params: IIsGeneralTrollByIndexParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isGeneralTrollByIndex',isGeneralTrollByIndexParams(params),options);
            return result;
        }
        this.isGeneralTrollByIndex = isGeneralTrollByIndex_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1],options);
            return result;
        }
        this.isPermitted = isPermitted_call
        let isSuperTrollParams = (params: IIsSuperTrollParams) => [params.troll,params.returnFalseIfBlocked];
        let isSuperTroll_call = async (params: IIsSuperTrollParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isSuperTroll',isSuperTrollParams(params),options);
            return result;
        }
        this.isSuperTroll = isSuperTroll_call
        let isSuperTrollByIndexParams = (params: IIsSuperTrollByIndexParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.returnFalseIfBlocked];
        let isSuperTrollByIndex_call = async (params: IIsSuperTrollByIndexParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isSuperTrollByIndex',isSuperTrollByIndexParams(params),options);
            return result;
        }
        this.isSuperTrollByIndex = isSuperTrollByIndex_call
        let isVotingExecutor_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isVotingExecutor',[param1],options);
            return result;
        }
        this.isVotingExecutor = isVotingExecutor_call
        let lastTrollTxCount_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('lastTrollTxCount',[param1],options);
            return new BigNumber(result);
        }
        this.lastTrollTxCount = lastTrollTxCount_call
        let newOwner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newOwner',[],options);
            return result;
        }
        this.newOwner = newOwner_call
        let newTrollRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newTrollRegistry',[],options);
            return result;
        }
        this.newTrollRegistry = newTrollRegistry_call
        let newVotingExecutorManager_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newVotingExecutorManager',[],options);
            return result;
        }
        this.newVotingExecutorManager = newVotingExecutorManager_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let paused_call = async (options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('paused',[],options);
            return result;
        }
        this.paused = paused_call
        let superTrollCount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('superTrollCount',[],options);
            return new BigNumber(result);
        }
        this.superTrollCount = superTrollCount_call
        let transactionsCount_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('transactionsCount',[],options);
            return new BigNumber(result);
        }
        this.transactionsCount = transactionsCount_call
        let trollProfileInv_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('trollProfileInv',[param1],options);
            return new BigNumber(result);
        }
        this.trollProfileInv = trollProfileInv_call
        let trollProfiles_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{troll:string,trollType:BigNumber}> => {
            let result = await this.call('trollProfiles',[this.wallet.utils.toString(param1)],options);
            return {
                troll: result.troll,
                trollType: new BigNumber(result.trollType)
            };
        }
        this.trollProfiles = trollProfiles_call
        let trollRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('trollRegistry',[],options);
            return result;
        }
        this.trollRegistry = trollRegistry_call
        let usedNonce_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('usedNonce',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.usedNonce = usedNonce_call
        let vaultToken_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('vaultToken',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.vaultToken = vaultToken_call
        let vaultTokenLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('vaultTokenLength',[],options);
            return new BigNumber(result);
        }
        this.vaultTokenLength = vaultTokenLength_call
        let vaults_call = async (param1:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('vaults',[param1],options);
            return result;
        }
        this.vaults = vaults_call
        let votingExecutor_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('votingExecutor',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.votingExecutor = votingExecutor_call
        let votingExecutorInv_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('votingExecutorInv',[param1],options);
            return new BigNumber(result);
        }
        this.votingExecutorInv = votingExecutorInv_call
        let votingExecutorLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('votingExecutorLength',[],options);
            return new BigNumber(result);
        }
        this.votingExecutorLength = votingExecutorLength_call
        let addTrollParams = (params: IAddTrollParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.trollProfileIndex),params.troll,params.isSuperTroll,this.wallet.utils.toString(params.nonce)];
        let addTroll_send = async (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addTroll',addTrollParams(params),options);
            return result;
        }
        let addTroll_call = async (params: IAddTrollParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addTroll',addTrollParams(params),options);
            return;
        }
        this.addTroll = Object.assign(addTroll_send, {
            call:addTroll_call
        });
        let deny_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[user],options);
            return result;
        }
        let deny_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deny',[user],options);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let initAddressParams = (params: IInitAddressParams) => [params.votingExecutor,params.tokens,params.vaults];
        let initAddress_send = async (params: IInitAddressParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('initAddress',initAddressParams(params),options);
            return result;
        }
        let initAddress_call = async (params: IInitAddressParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('initAddress',initAddressParams(params),options);
            return;
        }
        this.initAddress = Object.assign(initAddress_send, {
            call:initAddress_call
        });
        let lockGeneralTroll_send = async (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('lockGeneralTroll',[this.wallet.utils.toString(trollProfileIndex)],options);
            return result;
        }
        let lockGeneralTroll_call = async (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('lockGeneralTroll',[this.wallet.utils.toString(trollProfileIndex)],options);
            return;
        }
        this.lockGeneralTroll = Object.assign(lockGeneralTroll_send, {
            call:lockGeneralTroll_call
        });
        let lockSuperTroll_send = async (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('lockSuperTroll',[this.wallet.utils.toString(trollProfileIndex)],options);
            return result;
        }
        let lockSuperTroll_call = async (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('lockSuperTroll',[this.wallet.utils.toString(trollProfileIndex)],options);
            return;
        }
        this.lockSuperTroll = Object.assign(lockSuperTroll_send, {
            call:lockSuperTroll_call
        });
        let permit_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('permit',[user],options);
            return result;
        }
        let permit_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('permit',[user],options);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let registerVaultParams = (params: IRegisterVaultParams) => [this.wallet.utils.stringToBytes(params.signatures),params.token,params.vault,this.wallet.utils.toString(params.nonce)];
        let registerVault_send = async (params: IRegisterVaultParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('registerVault',registerVaultParams(params),options);
            return result;
        }
        let registerVault_call = async (params: IRegisterVaultParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('registerVault',registerVaultParams(params),options);
            return;
        }
        this.registerVault = Object.assign(registerVault_send, {
            call:registerVault_call
        });
        let removeTrollParams = (params: IRemoveTrollParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.nonce)];
        let removeTroll_send = async (params: IRemoveTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeTroll',removeTrollParams(params),options);
            return result;
        }
        let removeTroll_call = async (params: IRemoveTrollParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('removeTroll',removeTrollParams(params),options);
            return;
        }
        this.removeTroll = Object.assign(removeTroll_send, {
            call:removeTroll_call
        });
        let resume_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('resume',[],options);
            return result;
        }
        let resume_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('resume',[],options);
            return;
        }
        this.resume = Object.assign(resume_send, {
            call:resume_call
        });
        let setVotingExecutorParams = (params: ISetVotingExecutorParams) => [params.votingExecutor,params.bool];
        let setVotingExecutor_send = async (params: ISetVotingExecutorParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setVotingExecutor',setVotingExecutorParams(params),options);
            return result;
        }
        let setVotingExecutor_call = async (params: ISetVotingExecutorParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setVotingExecutor',setVotingExecutorParams(params),options);
            return;
        }
        this.setVotingExecutor = Object.assign(setVotingExecutor_send, {
            call:setVotingExecutor_call
        });
        let shutdownByAdmin_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('shutdownByAdmin',[],options);
            return result;
        }
        let shutdownByAdmin_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('shutdownByAdmin',[],options);
            return;
        }
        this.shutdownByAdmin = Object.assign(shutdownByAdmin_send, {
            call:shutdownByAdmin_call
        });
        let shutdownByVoting_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('shutdownByVoting',[],options);
            return result;
        }
        let shutdownByVoting_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('shutdownByVoting',[],options);
            return;
        }
        this.shutdownByVoting = Object.assign(shutdownByVoting_send, {
            call:shutdownByVoting_call
        });
        let takeOwnership_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('takeOwnership',[],options);
            return result;
        }
        let takeOwnership_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('takeOwnership',[],options);
            return;
        }
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call:takeOwnership_call
        });
        let transferOwnership_send = async (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner],options);
            return result;
        }
        let transferOwnership_call = async (newOwner:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner],options);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let unlockGeneralTrollParams = (params: IUnlockGeneralTrollParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.nonce)];
        let unlockGeneralTroll_send = async (params: IUnlockGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unlockGeneralTroll',unlockGeneralTrollParams(params),options);
            return result;
        }
        let unlockGeneralTroll_call = async (params: IUnlockGeneralTrollParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('unlockGeneralTroll',unlockGeneralTrollParams(params),options);
            return;
        }
        this.unlockGeneralTroll = Object.assign(unlockGeneralTroll_send, {
            call:unlockGeneralTroll_call
        });
        let unlockSuperTrollParams = (params: IUnlockSuperTrollParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.trollProfileIndex),params.unlock,params.vaultRegistry,this.wallet.utils.toString(params.penalty),this.wallet.utils.toString(params.nonce)];
        let unlockSuperTroll_send = async (params: IUnlockSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unlockSuperTroll',unlockSuperTrollParams(params),options);
            return result;
        }
        let unlockSuperTroll_call = async (params: IUnlockSuperTrollParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('unlockSuperTroll',unlockSuperTrollParams(params),options);
            return;
        }
        this.unlockSuperTroll = Object.assign(unlockSuperTroll_send, {
            call:unlockSuperTroll_call
        });
        let updateConfigStore_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateConfigStore',[],options);
            return result;
        }
        let updateConfigStore_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateConfigStore',[],options);
            return;
        }
        this.updateConfigStore = Object.assign(updateConfigStore_send, {
            call:updateConfigStore_call
        });
        let updateTrollParams = (params: IUpdateTrollParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.trollProfileIndex),params.newTroll,this.wallet.utils.toString(params.nonce)];
        let updateTroll_send = async (params: IUpdateTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateTroll',updateTrollParams(params),options);
            return result;
        }
        let updateTroll_call = async (params: IUpdateTrollParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateTroll',updateTrollParams(params),options);
            return;
        }
        this.updateTroll = Object.assign(updateTroll_send, {
            call:updateTroll_call
        });
        let upgrade_send = async (trollRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('upgrade',[trollRegistry],options);
            return result;
        }
        let upgrade_call = async (trollRegistry:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('upgrade',[trollRegistry],options);
            return;
        }
        this.upgrade = Object.assign(upgrade_send, {
            call:upgrade_call
        });
        let upgradeByAdmin_send = async (trollRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('upgradeByAdmin',[trollRegistry],options);
            return result;
        }
        let upgradeByAdmin_call = async (trollRegistry:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('upgradeByAdmin',[trollRegistry],options);
            return;
        }
        this.upgradeByAdmin = Object.assign(upgradeByAdmin_send, {
            call:upgradeByAdmin_call
        });
        let verifySignaturesParams = (params: IVerifySignaturesParams) => [params.msgSender,this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.stringToBytes32(params.paramsHash),this.wallet.utils.toString(params.nonce)];
        let verifySignatures_send = async (params: IVerifySignaturesParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('verifySignatures',verifySignaturesParams(params),options);
            return result;
        }
        let verifySignatures_call = async (params: IVerifySignaturesParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('verifySignatures',verifySignaturesParams(params),options);
            return;
        }
        this.verifySignatures = Object.assign(verifySignatures_send, {
            call:verifySignatures_call
        });
    }
}
export module OSWAP_SideChainTrollRegistry{
    export interface AddTrollEvent {troll:string,trollProfileIndex:BigNumber,isSuperTroll:boolean,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface DelistTrollEvent {trollProfileIndex:BigNumber,_event:Event}
    export interface LockGeneralTrollEvent {trollProfileIndex:BigNumber,lockedBy:string,_event:Event}
    export interface LockSuperTrollEvent {trollProfileIndex:BigNumber,lockedBy:string,_event:Event}
    export interface NewVaultEvent {token:string,vault:string,_event:Event}
    export interface RemoveTrollEvent {trollProfileIndex:BigNumber,_event:Event}
    export interface ResumeEvent {_event:Event}
    export interface SetVotingExecutorEvent {newVotingExecutor:string,isActive:boolean,_event:Event}
    export interface ShutdownEvent {account:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UnlockGeneralTrollEvent {trollProfileIndex:BigNumber,_event:Event}
    export interface UnlockSuperTrollEvent {trollProfileIndex:BigNumber,unlock:boolean,bridgeVault:string,penalty:BigNumber,_event:Event}
    export interface UpdateConfigStoreEvent {newConfigStore:string,_event:Event}
    export interface UpdateTrollEvent {trollProfileIndex:BigNumber,troll:string,_event:Event}
    export interface UpgradeEvent {newTrollRegistry:string,_event:Event}
}