import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_BridgeVaultTrollRegistry2.json";
export interface IHashUnstakeRequestParams {backer:string;trollProfileIndex:number|BigNumber;shares:number|BigNumber;nonce:number|BigNumber}
export interface IInitParams {projectRegistry:string;projectId:number|BigNumber;bondToken:string;bridgeVault:string}
export interface IPenalizeTrollParams {trollProfileIndex:number|BigNumber;amount:number|BigNumber}
export interface IStakeParams {trollProfileIndex:number|BigNumber;amount:number|BigNumber}
export interface IStakedByParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IStakedByInvParams {param1:number|BigNumber;param2:string}
export interface IUnstakeParams {backer:string;shares:number|BigNumber}
export interface IUnstakeApproveParams {signatures:string[];backer:string;trollProfileIndex:number|BigNumber;shares:number|BigNumber;nonce:number|BigNumber}
export interface IVerifyStakedValueParams {msgSender:string;signatures:string[];paramsHash:string}
export class OSWAP_BridgeVaultTrollRegistry2 extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    parsePenaltyEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.PenaltyEvent[]{
        return this.parseEvents(receipt, "Penalty").map(e=>this.decodePenaltyEvent(e));
    }
    decodePenaltyEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.PenaltyEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseStakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.StakeEvent[]{
        return this.parseEvents(receipt, "Stake").map(e=>this.decodeStakeEvent(e));
    }
    decodeStakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.StakeEvent{
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            amount: new BigNumber(result.amount),
            shares: new BigNumber(result.shares),
            backerBalance: new BigNumber(result.backerBalance),
            trollBalance: new BigNumber(result.trollBalance),
            totalShares: new BigNumber(result.totalShares),
            _event: event
        };
    }
    parseUnstakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UnstakeEvent[]{
        return this.parseEvents(receipt, "Unstake").map(e=>this.decodeUnstakeEvent(e));
    }
    decodeUnstakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UnstakeEvent{
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            amount: new BigNumber(result.amount),
            shares: new BigNumber(result.shares),
            approvalDecrement: new BigNumber(result.approvalDecrement),
            trollBalance: new BigNumber(result.trollBalance),
            totalShares: new BigNumber(result.totalShares),
            _event: event
        };
    }
    parseUnstakeApprovalEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UnstakeApprovalEvent[]{
        return this.parseEvents(receipt, "UnstakeApproval").map(e=>this.decodeUnstakeApprovalEvent(e));
    }
    decodeUnstakeApprovalEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UnstakeApprovalEvent{
        let result = event.data;
        return {
            backer: result.backer,
            msgSender: result.msgSender,
            signers: result.signers.map(e=>new BigNumber(e)),
            shares: new BigNumber(result.shares),
            _event: event
        };
    }
    parseUnstakeRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UnstakeRequestEvent[]{
        return this.parseEvents(receipt, "UnstakeRequest").map(e=>this.decodeUnstakeRequestEvent(e));
    }
    decodeUnstakeRequestEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UnstakeRequestEvent{
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            shares: new BigNumber(result.shares),
            backerBalance: new BigNumber(result.backerBalance),
            _event: event
        };
    }
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UpdateConfigStoreEvent[]{
        return this.parseEvents(receipt, "UpdateConfigStore").map(e=>this.decodeUpdateConfigStoreEvent(e));
    }
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UpdateConfigStoreEvent{
        let result = event.data;
        return {
            newConfigStore: result.newConfigStore,
            _event: event
        };
    }
    parseUpdateTrollRegistryEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UpdateTrollRegistryEvent[]{
        return this.parseEvents(receipt, "UpdateTrollRegistry").map(e=>this.decodeUpdateTrollRegistryEvent(e));
    }
    decodeUpdateTrollRegistryEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UpdateTrollRegistryEvent{
        let result = event.data;
        return {
            newTrollRegistry: result.newTrollRegistry,
            _event: event
        };
    }
    backerStakes: {
        (param1:string, options?: TransactionOptions): Promise<{trollProfileIndex:BigNumber,shares:BigNumber,pendingWithdrawal:BigNumber,approvedWithdrawal:BigNumber}>;
    }
    bondToken: {
        (options?: TransactionOptions): Promise<string>;
    }
    bridgeVault: {
        (options?: TransactionOptions): Promise<string>;
    }
    configStore: {
        (options?: TransactionOptions): Promise<string>;
    }
    getBackers: {
        (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<string[]>;
    }
    hashUnstakeRequest: {
        (params: IHashUnstakeRequestParams, options?: TransactionOptions): Promise<string>;
    }
    init: {
        (params: IInitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IInitParams, options?: TransactionOptions) => Promise<void>;
    }
    maxWithdrawal: {
        (backer:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    penalizeTroll: {
        (params: IPenalizeTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPenalizeTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    projectId: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    projectRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    stake: {
        (params: IStakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IStakeParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    stakedBy: {
        (params: IStakedByParams, options?: TransactionOptions): Promise<string>;
    }
    stakedByInv: {
        (params: IStakedByInvParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    stakedByLength: {
        (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    trollStakesBalances: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    trollStakesTotalShares: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    unstake: {
        (params: IUnstakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnstakeParams, options?: TransactionOptions) => Promise<void>;
    }
    unstakeApprove: {
        (params: IUnstakeApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnstakeApproveParams, options?: TransactionOptions) => Promise<void>;
    }
    unstakeRequest: {
        (shares:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (shares:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    updateConfigStore: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    updateTrollRegistry: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    usedNonce: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    verifyStakedValue: {
        (params: IVerifyStakedValueParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IVerifyStakedValueParams, options?: TransactionOptions) => Promise<{superTrollCount:BigNumber,totalStake:BigNumber,signers:BigNumber[]}>;
    }
    private assign(){
        let backerStakes_call = async (param1:string, options?: TransactionOptions): Promise<{trollProfileIndex:BigNumber,shares:BigNumber,pendingWithdrawal:BigNumber,approvedWithdrawal:BigNumber}> => {
            let result = await this.call('backerStakes',[param1],options);
            return {
                trollProfileIndex: new BigNumber(result.trollProfileIndex),
                shares: new BigNumber(result.shares),
                pendingWithdrawal: new BigNumber(result.pendingWithdrawal),
                approvedWithdrawal: new BigNumber(result.approvedWithdrawal)
            };
        }
        this.backerStakes = backerStakes_call
        let bondToken_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('bondToken',[],options);
            return result;
        }
        this.bondToken = bondToken_call
        let bridgeVault_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('bridgeVault',[],options);
            return result;
        }
        this.bridgeVault = bridgeVault_call
        let configStore_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('configStore',[],options);
            return result;
        }
        this.configStore = configStore_call
        let getBackers_call = async (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<string[]> => {
            let result = await this.call('getBackers',[this.wallet.utils.toString(trollProfileIndex)],options);
            return result;
        }
        this.getBackers = getBackers_call
        let hashUnstakeRequestParams = (params: IHashUnstakeRequestParams) => [params.backer,this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.shares),this.wallet.utils.toString(params.nonce)];
        let hashUnstakeRequest_call = async (params: IHashUnstakeRequestParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashUnstakeRequest',hashUnstakeRequestParams(params),options);
            return result;
        }
        this.hashUnstakeRequest = hashUnstakeRequest_call
        let maxWithdrawal_call = async (backer:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('maxWithdrawal',[backer],options);
            return new BigNumber(result);
        }
        this.maxWithdrawal = maxWithdrawal_call
        let projectId_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectId',[],options);
            return new BigNumber(result);
        }
        this.projectId = projectId_call
        let projectRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('projectRegistry',[],options);
            return result;
        }
        this.projectRegistry = projectRegistry_call
        let stakedByParams = (params: IStakedByParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let stakedBy_call = async (params: IStakedByParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('stakedBy',stakedByParams(params),options);
            return result;
        }
        this.stakedBy = stakedBy_call
        let stakedByInvParams = (params: IStakedByInvParams) => [this.wallet.utils.toString(params.param1),params.param2];
        let stakedByInv_call = async (params: IStakedByInvParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('stakedByInv',stakedByInvParams(params),options);
            return new BigNumber(result);
        }
        this.stakedByInv = stakedByInv_call
        let stakedByLength_call = async (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('stakedByLength',[this.wallet.utils.toString(trollProfileIndex)],options);
            return new BigNumber(result);
        }
        this.stakedByLength = stakedByLength_call
        let trollRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('trollRegistry',[],options);
            return result;
        }
        this.trollRegistry = trollRegistry_call
        let trollStakesBalances_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('trollStakesBalances',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.trollStakesBalances = trollStakesBalances_call
        let trollStakesTotalShares_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('trollStakesTotalShares',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.trollStakesTotalShares = trollStakesTotalShares_call
        let usedNonce_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('usedNonce',[this.wallet.utils.stringToBytes32(param1)],options);
            return result;
        }
        this.usedNonce = usedNonce_call
        let initParams = (params: IInitParams) => [params.projectRegistry,this.wallet.utils.toString(params.projectId),params.bondToken,params.bridgeVault];
        let init_send = async (params: IInitParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('init',initParams(params),options);
            return result;
        }
        let init_call = async (params: IInitParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('init',initParams(params),options);
            return;
        }
        this.init = Object.assign(init_send, {
            call:init_call
        });
        let penalizeTrollParams = (params: IPenalizeTrollParams) => [this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.amount)];
        let penalizeTroll_send = async (params: IPenalizeTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('penalizeTroll',penalizeTrollParams(params),options);
            return result;
        }
        let penalizeTroll_call = async (params: IPenalizeTrollParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('penalizeTroll',penalizeTrollParams(params),options);
            return;
        }
        this.penalizeTroll = Object.assign(penalizeTroll_send, {
            call:penalizeTroll_call
        });
        let stakeParams = (params: IStakeParams) => [this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.amount)];
        let stake_send = async (params: IStakeParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('stake',stakeParams(params),options);
            return result;
        }
        let stake_call = async (params: IStakeParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('stake',stakeParams(params),options);
            return new BigNumber(result);
        }
        this.stake = Object.assign(stake_send, {
            call:stake_call
        });
        let unstakeParams = (params: IUnstakeParams) => [params.backer,this.wallet.utils.toString(params.shares)];
        let unstake_send = async (params: IUnstakeParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unstake',unstakeParams(params),options);
            return result;
        }
        let unstake_call = async (params: IUnstakeParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('unstake',unstakeParams(params),options);
            return;
        }
        this.unstake = Object.assign(unstake_send, {
            call:unstake_call
        });
        let unstakeApproveParams = (params: IUnstakeApproveParams) => [this.wallet.utils.stringToBytes(params.signatures),params.backer,this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.shares),this.wallet.utils.toString(params.nonce)];
        let unstakeApprove_send = async (params: IUnstakeApproveParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unstakeApprove',unstakeApproveParams(params),options);
            return result;
        }
        let unstakeApprove_call = async (params: IUnstakeApproveParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('unstakeApprove',unstakeApproveParams(params),options);
            return;
        }
        this.unstakeApprove = Object.assign(unstakeApprove_send, {
            call:unstakeApprove_call
        });
        let unstakeRequest_send = async (shares:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unstakeRequest',[this.wallet.utils.toString(shares)],options);
            return result;
        }
        let unstakeRequest_call = async (shares:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('unstakeRequest',[this.wallet.utils.toString(shares)],options);
            return;
        }
        this.unstakeRequest = Object.assign(unstakeRequest_send, {
            call:unstakeRequest_call
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
        let updateTrollRegistry_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateTrollRegistry',[],options);
            return result;
        }
        let updateTrollRegistry_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateTrollRegistry',[],options);
            return;
        }
        this.updateTrollRegistry = Object.assign(updateTrollRegistry_send, {
            call:updateTrollRegistry_call
        });
        let verifyStakedValueParams = (params: IVerifyStakedValueParams) => [params.msgSender,this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.stringToBytes32(params.paramsHash)];
        let verifyStakedValue_send = async (params: IVerifyStakedValueParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('verifyStakedValue',verifyStakedValueParams(params),options);
            return result;
        }
        let verifyStakedValue_call = async (params: IVerifyStakedValueParams, options?: TransactionOptions): Promise<{superTrollCount:BigNumber,totalStake:BigNumber,signers:BigNumber[]}> => {
            let result = await this.call('verifyStakedValue',verifyStakedValueParams(params),options);
            return {
                superTrollCount: new BigNumber(result.superTrollCount),
                totalStake: new BigNumber(result.totalStake),
                signers: result.signers.map(e=>new BigNumber(e))
            };
        }
        this.verifyStakedValue = Object.assign(verifyStakedValue_send, {
            call:verifyStakedValue_call
        });
    }
}
export module OSWAP_BridgeVaultTrollRegistry2{
    export interface PenaltyEvent {trollProfileIndex:BigNumber,amount:BigNumber,_event:Event}
    export interface StakeEvent {backer:string,trollProfileIndex:BigNumber,amount:BigNumber,shares:BigNumber,backerBalance:BigNumber,trollBalance:BigNumber,totalShares:BigNumber,_event:Event}
    export interface UnstakeEvent {backer:string,trollProfileIndex:BigNumber,amount:BigNumber,shares:BigNumber,approvalDecrement:BigNumber,trollBalance:BigNumber,totalShares:BigNumber,_event:Event}
    export interface UnstakeApprovalEvent {backer:string,msgSender:string,signers:BigNumber[],shares:BigNumber,_event:Event}
    export interface UnstakeRequestEvent {backer:string,trollProfileIndex:BigNumber,shares:BigNumber,backerBalance:BigNumber,_event:Event}
    export interface UpdateConfigStoreEvent {newConfigStore:string,_event:Event}
    export interface UpdateTrollRegistryEvent {newTrollRegistry:string,_event:Event}
}