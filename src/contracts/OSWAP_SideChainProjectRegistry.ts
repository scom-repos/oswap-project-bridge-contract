import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_SideChainProjectRegistry.json";
export interface IAddTrollParams {signatures:string[];trollProfileIndex:number|BigNumber;troll:string;nonce:number|BigNumber}
export interface IHashAddTrollParams {trollProfileIndex:number|BigNumber;troll:string;nonce:number|BigNumber}
export interface IHashNewVaultParams {projectId:number|BigNumber;asset:string;owner:string;projectTrolls:(number|BigNumber)[];nonce:number|BigNumber}
export interface IHashNewVaultFormOwnerParams {asset:string;projectTrolls:(number|BigNumber)[];nonce:number|BigNumber}
export interface IHashUpdateProjectParams {projectId:number|BigNumber;newOwner:string;trollsToRemove:(number|BigNumber)[];trollsToAdd:(number|BigNumber)[];nonce:number|BigNumber}
export interface IHashUpdateProjectFromOwnerParams {projectId:number|BigNumber;newOwner:string;trollsToRemove:(number|BigNumber)[];trollsToAdd:(number|BigNumber)[];nonce:number|BigNumber}
export interface IHashUpdateTrollParams {trollProfileIndex:number|BigNumber;newTroll:string;nonce:number|BigNumber}
export interface IHashUpdateTrollFromTrollParams {trollProfileIndex:number|BigNumber;newTroll:string;nonce:number|BigNumber}
export interface IInitAddressParams {vaultRegistryCreator:string;bridgeVaultCreator:string}
export interface IIsProjectTrollParams {projectId:number|BigNumber;trollProfileIndex:number|BigNumber}
export interface IIsProjectTrollByAddressParams {projectId:number|BigNumber;troll:string}
export interface INewVaultParams {trollsSignatures:string[];ownerSignature:string;projectId:number|BigNumber;asset:string;owner:string;projectTrolls:(number|BigNumber)[];nonceForOwnerSignature:number|BigNumber;nonce:number|BigNumber}
export interface IProjectTrollsInvParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IUpdateProjectParams {trollsSignatures:string[];ownerSignature:string;projectId:number|BigNumber;newOwner:string;trollsToRemove:(number|BigNumber)[];trollsToAdd:(number|BigNumber)[];nonceForOwnerSignature:number|BigNumber;nonce:number|BigNumber}
export interface IUpdateTrollParams {signatures:string[];trollSignature:string;trollProfileIndex:number|BigNumber;newTroll:string;nonceForTrollSignature:number|BigNumber;nonce:number|BigNumber}
export interface IUsedProjectNonceParams {param1:number|BigNumber;param2:number|BigNumber}
export class OSWAP_SideChainProjectRegistry extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(trollRegistry:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([trollRegistry], options);
    }
    parseAddTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.AddTrollEvent[]{
        return this.parseEvents(receipt, "AddTroll").map(e=>this.decodeAddTrollEvent(e));
    }
    decodeAddTrollEvent(event: Event): OSWAP_SideChainProjectRegistry.AddTrollEvent{
        let result = event.data;
        return {
            troll: result.troll,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): OSWAP_SideChainProjectRegistry.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): OSWAP_SideChainProjectRegistry.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseNewProjectVaultEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.NewProjectVaultEvent[]{
        return this.parseEvents(receipt, "NewProjectVault").map(e=>this.decodeNewProjectVaultEvent(e));
    }
    decodeNewProjectVaultEvent(event: Event): OSWAP_SideChainProjectRegistry.NewProjectVaultEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            asset: result.asset,
            owner: result.owner,
            vaultRegistry: result.vaultRegistry,
            bridgeVault: result.bridgeVault,
            projectTrolls: result.projectTrolls.map(e=>new BigNumber(e)),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_SideChainProjectRegistry.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): OSWAP_SideChainProjectRegistry.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUpdateProjectEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.UpdateProjectEvent[]{
        return this.parseEvents(receipt, "UpdateProject").map(e=>this.decodeUpdateProjectEvent(e));
    }
    decodeUpdateProjectEvent(event: Event): OSWAP_SideChainProjectRegistry.UpdateProjectEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            owner: result.owner,
            trollsToRemove: result.trollsToRemove.map(e=>new BigNumber(e)),
            trollsToAdd: result.trollsToAdd.map(e=>new BigNumber(e)),
            _event: event
        };
    }
    parseUpdateTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.UpdateTrollEvent[]{
        return this.parseEvents(receipt, "UpdateTroll").map(e=>this.decodeUpdateTrollEvent(e));
    }
    decodeUpdateTrollEvent(event: Event): OSWAP_SideChainProjectRegistry.UpdateTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            troll: result.troll,
            _event: event
        };
    }
    addTroll: {
        (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    bridgeVaultCreator: {
        (options?: TransactionOptions): Promise<string>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    getProject: {
        (projectId:number|BigNumber, options?: TransactionOptions): Promise<{asset:string,owner:string,vaultRegistry:string,bridgeVault:string,projectTrolls:BigNumber[]}>;
    }
    getProjects: {
        (projectIds:(number|BigNumber)[], options?: TransactionOptions): Promise<{asset:string,owner:string,vaultRegistry:string,bridgeVault:string,projectTrolls:BigNumber[]}[]>;
    }
    hashAddTroll: {
        (params: IHashAddTrollParams, options?: TransactionOptions): Promise<string>;
    }
    hashNewVault: {
        (params: IHashNewVaultParams, options?: TransactionOptions): Promise<string>;
    }
    hashNewVaultFormOwner: {
        (params: IHashNewVaultFormOwnerParams, options?: TransactionOptions): Promise<string>;
    }
    hashUpdateProject: {
        (params: IHashUpdateProjectParams, options?: TransactionOptions): Promise<string>;
    }
    hashUpdateProjectFromOwner: {
        (params: IHashUpdateProjectFromOwnerParams, options?: TransactionOptions): Promise<string>;
    }
    hashUpdateTroll: {
        (params: IHashUpdateTrollParams, options?: TransactionOptions): Promise<string>;
    }
    hashUpdateTrollFromTroll: {
        (params: IHashUpdateTrollFromTrollParams, options?: TransactionOptions): Promise<string>;
    }
    initAddress: {
        (params: IInitAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IInitAddressParams, options?: TransactionOptions) => Promise<void>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    isProjectTroll: {
        (params: IIsProjectTrollParams, options?: TransactionOptions): Promise<boolean>;
    }
    isProjectTrollByAddress: {
        (params: IIsProjectTrollByAddressParams, options?: TransactionOptions): Promise<boolean>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    newVault: {
        (params: INewVaultParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewVaultParams, options?: TransactionOptions) => Promise<void>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    projectTrollsInv: {
        (params: IProjectTrollsInvParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    projectTrollsLength: {
        (projectId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    trollProfileInv: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    trollProfiles: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    updateProject: {
        (params: IUpdateProjectParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateProjectParams, options?: TransactionOptions) => Promise<void>;
    }
    updateTroll: {
        (params: IUpdateTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    usedNonce: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<boolean>;
    }
    usedProjectNonce: {
        (params: IUsedProjectNonceParams, options?: TransactionOptions): Promise<boolean>;
    }
    vaultRegistryCreator: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let bridgeVaultCreator_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('bridgeVaultCreator',[],options);
            return result;
        }
        this.bridgeVaultCreator = bridgeVaultCreator_call
        let getProject_call = async (projectId:number|BigNumber, options?: TransactionOptions): Promise<{asset:string,owner:string,vaultRegistry:string,bridgeVault:string,projectTrolls:BigNumber[]}> => {
            let result = await this.call('getProject',[this.wallet.utils.toString(projectId)],options);
            return (
            {
                asset: result.asset,
                owner: result.owner,
                vaultRegistry: result.vaultRegistry,
                bridgeVault: result.bridgeVault,
                projectTrolls: result.projectTrolls.map(e=>new BigNumber(e))
            }
            );
        }
        this.getProject = getProject_call
        let getProjects_call = async (projectIds:(number|BigNumber)[], options?: TransactionOptions): Promise<{asset:string,owner:string,vaultRegistry:string,bridgeVault:string,projectTrolls:BigNumber[]}[]> => {
            let result = await this.call('getProjects',[this.wallet.utils.toString(projectIds)],options);
            return (result.map(e=>(
                {
                    asset: e.asset,
                    owner: e.owner,
                    vaultRegistry: e.vaultRegistry,
                    bridgeVault: e.bridgeVault,
                    projectTrolls: e.projectTrolls.map(e=>new BigNumber(e))
                }
            )));
        }
        this.getProjects = getProjects_call
        let hashAddTrollParams = (params: IHashAddTrollParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.troll,this.wallet.utils.toString(params.nonce)];
        let hashAddTroll_call = async (params: IHashAddTrollParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashAddTroll',hashAddTrollParams(params),options);
            return result;
        }
        this.hashAddTroll = hashAddTroll_call
        let hashNewVaultParams = (params: IHashNewVaultParams) => [this.wallet.utils.toString(params.projectId),params.asset,params.owner,this.wallet.utils.toString(params.projectTrolls),this.wallet.utils.toString(params.nonce)];
        let hashNewVault_call = async (params: IHashNewVaultParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashNewVault',hashNewVaultParams(params),options);
            return result;
        }
        this.hashNewVault = hashNewVault_call
        let hashNewVaultFormOwnerParams = (params: IHashNewVaultFormOwnerParams) => [params.asset,this.wallet.utils.toString(params.projectTrolls),this.wallet.utils.toString(params.nonce)];
        let hashNewVaultFormOwner_call = async (params: IHashNewVaultFormOwnerParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashNewVaultFormOwner',hashNewVaultFormOwnerParams(params),options);
            return result;
        }
        this.hashNewVaultFormOwner = hashNewVaultFormOwner_call
        let hashUpdateProjectParams = (params: IHashUpdateProjectParams) => [this.wallet.utils.toString(params.projectId),params.newOwner,this.wallet.utils.toString(params.trollsToRemove),this.wallet.utils.toString(params.trollsToAdd),this.wallet.utils.toString(params.nonce)];
        let hashUpdateProject_call = async (params: IHashUpdateProjectParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashUpdateProject',hashUpdateProjectParams(params),options);
            return result;
        }
        this.hashUpdateProject = hashUpdateProject_call
        let hashUpdateProjectFromOwnerParams = (params: IHashUpdateProjectFromOwnerParams) => [this.wallet.utils.toString(params.projectId),params.newOwner,this.wallet.utils.toString(params.trollsToRemove),this.wallet.utils.toString(params.trollsToAdd),this.wallet.utils.toString(params.nonce)];
        let hashUpdateProjectFromOwner_call = async (params: IHashUpdateProjectFromOwnerParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashUpdateProjectFromOwner',hashUpdateProjectFromOwnerParams(params),options);
            return result;
        }
        this.hashUpdateProjectFromOwner = hashUpdateProjectFromOwner_call
        let hashUpdateTrollParams = (params: IHashUpdateTrollParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.newTroll,this.wallet.utils.toString(params.nonce)];
        let hashUpdateTroll_call = async (params: IHashUpdateTrollParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashUpdateTroll',hashUpdateTrollParams(params),options);
            return result;
        }
        this.hashUpdateTroll = hashUpdateTroll_call
        let hashUpdateTrollFromTrollParams = (params: IHashUpdateTrollFromTrollParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.newTroll,this.wallet.utils.toString(params.nonce)];
        let hashUpdateTrollFromTroll_call = async (params: IHashUpdateTrollFromTrollParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashUpdateTrollFromTroll',hashUpdateTrollFromTrollParams(params),options);
            return result;
        }
        this.hashUpdateTrollFromTroll = hashUpdateTrollFromTroll_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1],options);
            return result;
        }
        this.isPermitted = isPermitted_call
        let isProjectTrollParams = (params: IIsProjectTrollParams) => [this.wallet.utils.toString(params.projectId),this.wallet.utils.toString(params.trollProfileIndex)];
        let isProjectTroll_call = async (params: IIsProjectTrollParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isProjectTroll',isProjectTrollParams(params),options);
            return result;
        }
        this.isProjectTroll = isProjectTroll_call
        let isProjectTrollByAddressParams = (params: IIsProjectTrollByAddressParams) => [this.wallet.utils.toString(params.projectId),params.troll];
        let isProjectTrollByAddress_call = async (params: IIsProjectTrollByAddressParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isProjectTrollByAddress',isProjectTrollByAddressParams(params),options);
            return result;
        }
        this.isProjectTrollByAddress = isProjectTrollByAddress_call
        let newOwner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newOwner',[],options);
            return result;
        }
        this.newOwner = newOwner_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let projectTrollsInvParams = (params: IProjectTrollsInvParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let projectTrollsInv_call = async (params: IProjectTrollsInvParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectTrollsInv',projectTrollsInvParams(params),options);
            return new BigNumber(result);
        }
        this.projectTrollsInv = projectTrollsInv_call
        let projectTrollsLength_call = async (projectId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectTrollsLength',[this.wallet.utils.toString(projectId)],options);
            return new BigNumber(result);
        }
        this.projectTrollsLength = projectTrollsLength_call
        let trollProfileInv_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('trollProfileInv',[param1],options);
            return new BigNumber(result);
        }
        this.trollProfileInv = trollProfileInv_call
        let trollProfiles_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('trollProfiles',[this.wallet.utils.toString(param1)],options);
            return result;
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
        let usedProjectNonceParams = (params: IUsedProjectNonceParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let usedProjectNonce_call = async (params: IUsedProjectNonceParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('usedProjectNonce',usedProjectNonceParams(params),options);
            return result;
        }
        this.usedProjectNonce = usedProjectNonce_call
        let vaultRegistryCreator_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('vaultRegistryCreator',[],options);
            return result;
        }
        this.vaultRegistryCreator = vaultRegistryCreator_call
        let addTrollParams = (params: IAddTrollParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.trollProfileIndex),params.troll,this.wallet.utils.toString(params.nonce)];
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
        let initAddressParams = (params: IInitAddressParams) => [params.vaultRegistryCreator,params.bridgeVaultCreator];
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
        let newVaultParams = (params: INewVaultParams) => [this.wallet.utils.stringToBytes(params.trollsSignatures),this.wallet.utils.stringToBytes(params.ownerSignature),this.wallet.utils.toString(params.projectId),params.asset,params.owner,this.wallet.utils.toString(params.projectTrolls),this.wallet.utils.toString(params.nonceForOwnerSignature),this.wallet.utils.toString(params.nonce)];
        let newVault_send = async (params: INewVaultParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newVault',newVaultParams(params),options);
            return result;
        }
        let newVault_call = async (params: INewVaultParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('newVault',newVaultParams(params),options);
            return;
        }
        this.newVault = Object.assign(newVault_send, {
            call:newVault_call
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
        let updateProjectParams = (params: IUpdateProjectParams) => [this.wallet.utils.stringToBytes(params.trollsSignatures),this.wallet.utils.stringToBytes(params.ownerSignature),this.wallet.utils.toString(params.projectId),params.newOwner,this.wallet.utils.toString(params.trollsToRemove),this.wallet.utils.toString(params.trollsToAdd),this.wallet.utils.toString(params.nonceForOwnerSignature),this.wallet.utils.toString(params.nonce)];
        let updateProject_send = async (params: IUpdateProjectParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateProject',updateProjectParams(params),options);
            return result;
        }
        let updateProject_call = async (params: IUpdateProjectParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateProject',updateProjectParams(params),options);
            return;
        }
        this.updateProject = Object.assign(updateProject_send, {
            call:updateProject_call
        });
        let updateTrollParams = (params: IUpdateTrollParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.stringToBytes(params.trollSignature),this.wallet.utils.toString(params.trollProfileIndex),params.newTroll,this.wallet.utils.toString(params.nonceForTrollSignature),this.wallet.utils.toString(params.nonce)];
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
    }
}
export module OSWAP_SideChainProjectRegistry{
    export interface AddTrollEvent {troll:string,trollProfileIndex:BigNumber,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface NewProjectVaultEvent {projectId:BigNumber,asset:string,owner:string,vaultRegistry:string,bridgeVault:string,projectTrolls:BigNumber[],_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UpdateProjectEvent {projectId:BigNumber,owner:string,trollsToRemove:BigNumber[],trollsToAdd:BigNumber[],_event:Event}
    export interface UpdateTrollEvent {trollProfileIndex:BigNumber,troll:string,_event:Event}
}