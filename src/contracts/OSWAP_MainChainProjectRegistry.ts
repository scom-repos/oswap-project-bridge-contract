import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_MainChainProjectRegistry.json";
export interface IAddProjectTokenParams {projectId:number|BigNumber;tokens:{chainId:number|BigNumber,token:string}[];nonce:number|BigNumber;signatures:string[]}
export interface IAddTrollsParams {projectId:number|BigNumber;trollProfileIndex:(number|BigNumber)[];nonce:number|BigNumber;signature:string}
export interface IGetProjectsParams {start:number|BigNumber;length:number|BigNumber}
export interface INewProjectParams {tokens:{chainId:number|BigNumber,token:string}[];projectTrolls:(number|BigNumber)[];nonce:number|BigNumber;signatures:string[]}
export interface IProjectTrollsInvParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IRemoveTrollsParams {projectId:number|BigNumber;trollProfileIndex:(number|BigNumber)[];nonce:number|BigNumber;signature:string}
export interface ITakeProjectOwnershipParams {projectId:number|BigNumber;nonce:number|BigNumber;signature:string}
export interface ITransferProjectOwnershipParams {projectId:number|BigNumber;newOwner:string}
export class OSWAP_MainChainProjectRegistry extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(trollRegistry:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([trollRegistry], options);
    }
    parseAddTrollsEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.AddTrollsEvent[]{
        return this.parseEvents(receipt, "AddTrolls").map(e=>this.decodeAddTrollsEvent(e));
    }
    decodeAddTrollsEvent(event: Event): OSWAP_MainChainProjectRegistry.AddTrollsEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            trollProfileIndex: result.trollProfileIndex.map(e=>new BigNumber(e)),
            nonce: new BigNumber(result.nonce),
            signature: result.signature,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): OSWAP_MainChainProjectRegistry.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): OSWAP_MainChainProjectRegistry.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseNewProjectEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.NewProjectEvent[]{
        return this.parseEvents(receipt, "NewProject").map(e=>this.decodeNewProjectEvent(e));
    }
    decodeNewProjectEvent(event: Event): OSWAP_MainChainProjectRegistry.NewProjectEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            owner: result.owner,
            projectTrolls: result.projectTrolls.map(e=>new BigNumber(e)),
            _event: event
        };
    }
    parseNewProjectTokenEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.NewProjectTokenEvent[]{
        return this.parseEvents(receipt, "NewProjectToken").map(e=>this.decodeNewProjectTokenEvent(e));
    }
    decodeNewProjectTokenEvent(event: Event): OSWAP_MainChainProjectRegistry.NewProjectTokenEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            chainId: new BigNumber(result.chainId),
            token: result.token,
            nonce: new BigNumber(result.nonce),
            signature: result.signature,
            _event: event
        };
    }
    parseRemoveTrollsEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.RemoveTrollsEvent[]{
        return this.parseEvents(receipt, "RemoveTrolls").map(e=>this.decodeRemoveTrollsEvent(e));
    }
    decodeRemoveTrollsEvent(event: Event): OSWAP_MainChainProjectRegistry.RemoveTrollsEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            trollProfileIndex: result.trollProfileIndex.map(e=>new BigNumber(e)),
            nonce: new BigNumber(result.nonce),
            signature: result.signature,
            _event: event
        };
    }
    parseResumeEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.ResumeEvent[]{
        return this.parseEvents(receipt, "Resume").map(e=>this.decodeResumeEvent(e));
    }
    decodeResumeEvent(event: Event): OSWAP_MainChainProjectRegistry.ResumeEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.ShutdownEvent[]{
        return this.parseEvents(receipt, "Shutdown").map(e=>this.decodeShutdownEvent(e));
    }
    decodeShutdownEvent(event: Event): OSWAP_MainChainProjectRegistry.ShutdownEvent{
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_MainChainProjectRegistry.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseStartProjectOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.StartProjectOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartProjectOwnershipTransfer").map(e=>this.decodeStartProjectOwnershipTransferEvent(e));
    }
    decodeStartProjectOwnershipTransferEvent(event: Event): OSWAP_MainChainProjectRegistry.StartProjectOwnershipTransferEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): OSWAP_MainChainProjectRegistry.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferProjectOwnershipEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.TransferProjectOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferProjectOwnership").map(e=>this.decodeTransferProjectOwnershipEvent(e));
    }
    decodeTransferProjectOwnershipEvent(event: Event): OSWAP_MainChainProjectRegistry.TransferProjectOwnershipEvent{
        let result = event.data;
        return {
            projectId: new BigNumber(result.projectId),
            newOwner: result.newOwner,
            nonce: new BigNumber(result.nonce),
            signature: result.signature,
            _event: event
        };
    }
    addProjectToken: {
        (params: IAddProjectTokenParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddProjectTokenParams, options?: TransactionOptions) => Promise<void>;
    }
    addTrolls: {
        (params: IAddTrollsParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddTrollsParams, options?: TransactionOptions) => Promise<void>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    getProject: {
        (projectId:number|BigNumber, options?: TransactionOptions): Promise<{owner:string,newOwner:string,projectTrolls:BigNumber[],chainIds:BigNumber[],tokens:string[]}>;
    }
    getProjects: {
        (params: IGetProjectsParams, options?: TransactionOptions): Promise<{owner:string[],projectTrolls:BigNumber[][],chainIds:BigNumber[][],tokens:string[][]}>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    newProject: {
        (params: INewProjectParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewProjectParams, options?: TransactionOptions) => Promise<BigNumber>;
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
    projectLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    projectTrollsInv: {
        (params: IProjectTrollsInvParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    projects: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{owner:string,newOwner:string}>;
    }
    projectsTrollsAndChainsLength: {
        (projectId:number|BigNumber, options?: TransactionOptions): Promise<{trolls:BigNumber,chains:BigNumber}>;
    }
    removeTrolls: {
        (params: IRemoveTrollsParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveTrollsParams, options?: TransactionOptions) => Promise<void>;
    }
    resume: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    shutdownByAdmin: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    takeProjectOwnership: {
        (params: ITakeProjectOwnershipParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITakeProjectOwnershipParams, options?: TransactionOptions) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    transferProjectOwnership: {
        (params: ITransferProjectOwnershipParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferProjectOwnershipParams, options?: TransactionOptions) => Promise<void>;
    }
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let getProject_call = async (projectId:number|BigNumber, options?: TransactionOptions): Promise<{owner:string,newOwner:string,projectTrolls:BigNumber[],chainIds:BigNumber[],tokens:string[]}> => {
            let result = await this.call('getProject',[this.wallet.utils.toString(projectId)],options);
            return {
                owner: result.owner,
                newOwner: result.newOwner,
                projectTrolls: result.projectTrolls.map(e=>new BigNumber(e)),
                chainIds: result.chainIds.map(e=>new BigNumber(e)),
                tokens: result.tokens
            };
        }
        this.getProject = getProject_call
        let getProjectsParams = (params: IGetProjectsParams) => [this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getProjects_call = async (params: IGetProjectsParams, options?: TransactionOptions): Promise<{owner:string[],projectTrolls:BigNumber[][],chainIds:BigNumber[][],tokens:string[][]}> => {
            let result = await this.call('getProjects',getProjectsParams(params),options);
            return {
                owner: result.owner,
                projectTrolls: result.projectTrolls.map(a0=>a0.map(e=>new BigNumber(e))),
                chainIds: result.chainIds.map(a0=>a0.map(e=>new BigNumber(e))),
                tokens: result.tokens
            };
        }
        this.getProjects = getProjects_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1],options);
            return result;
        }
        this.isPermitted = isPermitted_call
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
        let paused_call = async (options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('paused',[],options);
            return result;
        }
        this.paused = paused_call
        let projectLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectLength',[],options);
            return new BigNumber(result);
        }
        this.projectLength = projectLength_call
        let projectTrollsInvParams = (params: IProjectTrollsInvParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let projectTrollsInv_call = async (params: IProjectTrollsInvParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('projectTrollsInv',projectTrollsInvParams(params),options);
            return new BigNumber(result);
        }
        this.projectTrollsInv = projectTrollsInv_call
        let projects_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{owner:string,newOwner:string}> => {
            let result = await this.call('projects',[this.wallet.utils.toString(param1)],options);
            return {
                owner: result.owner,
                newOwner: result.newOwner
            };
        }
        this.projects = projects_call
        let projectsTrollsAndChainsLength_call = async (projectId:number|BigNumber, options?: TransactionOptions): Promise<{trolls:BigNumber,chains:BigNumber}> => {
            let result = await this.call('projectsTrollsAndChainsLength',[this.wallet.utils.toString(projectId)],options);
            return {
                trolls: new BigNumber(result.trolls),
                chains: new BigNumber(result.chains)
            };
        }
        this.projectsTrollsAndChainsLength = projectsTrollsAndChainsLength_call
        let trollRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('trollRegistry',[],options);
            return result;
        }
        this.trollRegistry = trollRegistry_call
        let addProjectTokenParams = (params: IAddProjectTokenParams) => [this.wallet.utils.toString(params.projectId),params.tokens.map(e=>([this.wallet.utils.toString(e.chainId),e.token])),this.wallet.utils.toString(params.nonce),this.wallet.utils.stringToBytes(params.signatures)];
        let addProjectToken_send = async (params: IAddProjectTokenParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addProjectToken',addProjectTokenParams(params),options);
            return result;
        }
        let addProjectToken_call = async (params: IAddProjectTokenParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addProjectToken',addProjectTokenParams(params),options);
            return;
        }
        this.addProjectToken = Object.assign(addProjectToken_send, {
            call:addProjectToken_call
        });
        let addTrollsParams = (params: IAddTrollsParams) => [this.wallet.utils.toString(params.projectId),this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.nonce),this.wallet.utils.stringToBytes(params.signature)];
        let addTrolls_send = async (params: IAddTrollsParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addTrolls',addTrollsParams(params),options);
            return result;
        }
        let addTrolls_call = async (params: IAddTrollsParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addTrolls',addTrollsParams(params),options);
            return;
        }
        this.addTrolls = Object.assign(addTrolls_send, {
            call:addTrolls_call
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
        let newProjectParams = (params: INewProjectParams) => [params.tokens.map(e=>([this.wallet.utils.toString(e.chainId),e.token])),this.wallet.utils.toString(params.projectTrolls),this.wallet.utils.toString(params.nonce),this.wallet.utils.stringToBytes(params.signatures)];
        let newProject_send = async (params: INewProjectParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newProject',newProjectParams(params),options);
            return result;
        }
        let newProject_call = async (params: INewProjectParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('newProject',newProjectParams(params),options);
            return new BigNumber(result);
        }
        this.newProject = Object.assign(newProject_send, {
            call:newProject_call
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
        let removeTrollsParams = (params: IRemoveTrollsParams) => [this.wallet.utils.toString(params.projectId),this.wallet.utils.toString(params.trollProfileIndex),this.wallet.utils.toString(params.nonce),this.wallet.utils.stringToBytes(params.signature)];
        let removeTrolls_send = async (params: IRemoveTrollsParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeTrolls',removeTrollsParams(params),options);
            return result;
        }
        let removeTrolls_call = async (params: IRemoveTrollsParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('removeTrolls',removeTrollsParams(params),options);
            return;
        }
        this.removeTrolls = Object.assign(removeTrolls_send, {
            call:removeTrolls_call
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
        let takeProjectOwnershipParams = (params: ITakeProjectOwnershipParams) => [this.wallet.utils.toString(params.projectId),this.wallet.utils.toString(params.nonce),this.wallet.utils.stringToBytes(params.signature)];
        let takeProjectOwnership_send = async (params: ITakeProjectOwnershipParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('takeProjectOwnership',takeProjectOwnershipParams(params),options);
            return result;
        }
        let takeProjectOwnership_call = async (params: ITakeProjectOwnershipParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('takeProjectOwnership',takeProjectOwnershipParams(params),options);
            return;
        }
        this.takeProjectOwnership = Object.assign(takeProjectOwnership_send, {
            call:takeProjectOwnership_call
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
        let transferProjectOwnershipParams = (params: ITransferProjectOwnershipParams) => [this.wallet.utils.toString(params.projectId),params.newOwner];
        let transferProjectOwnership_send = async (params: ITransferProjectOwnershipParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferProjectOwnership',transferProjectOwnershipParams(params),options);
            return result;
        }
        let transferProjectOwnership_call = async (params: ITransferProjectOwnershipParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferProjectOwnership',transferProjectOwnershipParams(params),options);
            return;
        }
        this.transferProjectOwnership = Object.assign(transferProjectOwnership_send, {
            call:transferProjectOwnership_call
        });
    }
}
export module OSWAP_MainChainProjectRegistry{
    export interface AddTrollsEvent {projectId:BigNumber,trollProfileIndex:BigNumber[],nonce:BigNumber,signature:string,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface NewProjectEvent {projectId:BigNumber,owner:string,projectTrolls:BigNumber[],_event:Event}
    export interface NewProjectTokenEvent {projectId:BigNumber,chainId:BigNumber,token:string,nonce:BigNumber,signature:string,_event:Event}
    export interface RemoveTrollsEvent {projectId:BigNumber,trollProfileIndex:BigNumber[],nonce:BigNumber,signature:string,_event:Event}
    export interface ResumeEvent {_event:Event}
    export interface ShutdownEvent {account:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface StartProjectOwnershipTransferEvent {projectId:BigNumber,newOwner:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface TransferProjectOwnershipEvent {projectId:BigNumber,newOwner:string,nonce:BigNumber,signature:string,_event:Event}
}