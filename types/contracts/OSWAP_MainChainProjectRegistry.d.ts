import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAddProjectTokenParams {
    projectId: number | BigNumber;
    tokens: {
        chainId: number | BigNumber;
        token: string;
    }[];
    nonce: number | BigNumber;
    signatures: string[];
}
export interface IAddTrollsParams {
    projectId: number | BigNumber;
    trollProfileIndex: (number | BigNumber)[];
    nonce: number | BigNumber;
    signature: string;
}
export interface IGetProjectsParams {
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface INewProjectParams {
    tokens: {
        chainId: number | BigNumber;
        token: string;
    }[];
    projectTrolls: (number | BigNumber)[];
    nonce: number | BigNumber;
    signatures: string[];
}
export interface IProjectTrollsInvParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IRemoveTrollsParams {
    projectId: number | BigNumber;
    trollProfileIndex: (number | BigNumber)[];
    nonce: number | BigNumber;
    signature: string;
}
export interface ITakeProjectOwnershipParams {
    projectId: number | BigNumber;
    nonce: number | BigNumber;
    signature: string;
}
export interface ITransferProjectOwnershipParams {
    projectId: number | BigNumber;
    newOwner: string;
}
export declare class OSWAP_MainChainProjectRegistry extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(trollRegistry: string, options?: TransactionOptions): Promise<string>;
    parseAddTrollsEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.AddTrollsEvent[];
    decodeAddTrollsEvent(event: Event): OSWAP_MainChainProjectRegistry.AddTrollsEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): OSWAP_MainChainProjectRegistry.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): OSWAP_MainChainProjectRegistry.DeauthorizeEvent;
    parseNewProjectEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.NewProjectEvent[];
    decodeNewProjectEvent(event: Event): OSWAP_MainChainProjectRegistry.NewProjectEvent;
    parseNewProjectTokenEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.NewProjectTokenEvent[];
    decodeNewProjectTokenEvent(event: Event): OSWAP_MainChainProjectRegistry.NewProjectTokenEvent;
    parseRemoveTrollsEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.RemoveTrollsEvent[];
    decodeRemoveTrollsEvent(event: Event): OSWAP_MainChainProjectRegistry.RemoveTrollsEvent;
    parseResumeEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.ResumeEvent[];
    decodeResumeEvent(event: Event): OSWAP_MainChainProjectRegistry.ResumeEvent;
    parseShutdownEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.ShutdownEvent[];
    decodeShutdownEvent(event: Event): OSWAP_MainChainProjectRegistry.ShutdownEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_MainChainProjectRegistry.StartOwnershipTransferEvent;
    parseStartProjectOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.StartProjectOwnershipTransferEvent[];
    decodeStartProjectOwnershipTransferEvent(event: Event): OSWAP_MainChainProjectRegistry.StartProjectOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): OSWAP_MainChainProjectRegistry.TransferOwnershipEvent;
    parseTransferProjectOwnershipEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.TransferProjectOwnershipEvent[];
    decodeTransferProjectOwnershipEvent(event: Event): OSWAP_MainChainProjectRegistry.TransferProjectOwnershipEvent;
    addProjectToken: {
        (params: IAddProjectTokenParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddProjectTokenParams, options?: TransactionOptions) => Promise<void>;
    };
    addTrolls: {
        (params: IAddTrollsParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddTrollsParams, options?: TransactionOptions) => Promise<void>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    getProject: {
        (projectId: number | BigNumber, options?: TransactionOptions): Promise<{
            owner: string;
            newOwner: string;
            projectTrolls: BigNumber[];
            chainIds: BigNumber[];
            tokens: string[];
        }>;
    };
    getProjects: {
        (params: IGetProjectsParams, options?: TransactionOptions): Promise<{
            owner: string[];
            projectTrolls: BigNumber[][];
            chainIds: BigNumber[][];
            tokens: string[][];
        }>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    newProject: {
        (params: INewProjectParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewProjectParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    paused: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    projectLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    projectTrollsInv: {
        (params: IProjectTrollsInvParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    projects: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            owner: string;
            newOwner: string;
        }>;
    };
    projectsTrollsAndChainsLength: {
        (projectId: number | BigNumber, options?: TransactionOptions): Promise<{
            trolls: BigNumber;
            chains: BigNumber;
        }>;
    };
    removeTrolls: {
        (params: IRemoveTrollsParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveTrollsParams, options?: TransactionOptions) => Promise<void>;
    };
    resume: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    shutdownByAdmin: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    takeProjectOwnership: {
        (params: ITakeProjectOwnershipParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITakeProjectOwnershipParams, options?: TransactionOptions) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    transferProjectOwnership: {
        (params: ITransferProjectOwnershipParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferProjectOwnershipParams, options?: TransactionOptions) => Promise<void>;
    };
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_MainChainProjectRegistry {
    interface AddTrollsEvent {
        projectId: BigNumber;
        trollProfileIndex: BigNumber[];
        nonce: BigNumber;
        signature: string;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface NewProjectEvent {
        projectId: BigNumber;
        owner: string;
        projectTrolls: BigNumber[];
        _event: Event;
    }
    interface NewProjectTokenEvent {
        projectId: BigNumber;
        chainId: BigNumber;
        token: string;
        nonce: BigNumber;
        signature: string;
        _event: Event;
    }
    interface RemoveTrollsEvent {
        projectId: BigNumber;
        trollProfileIndex: BigNumber[];
        nonce: BigNumber;
        signature: string;
        _event: Event;
    }
    interface ResumeEvent {
        _event: Event;
    }
    interface ShutdownEvent {
        account: string;
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface StartProjectOwnershipTransferEvent {
        projectId: BigNumber;
        newOwner: string;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
    interface TransferProjectOwnershipEvent {
        projectId: BigNumber;
        newOwner: string;
        nonce: BigNumber;
        signature: string;
        _event: Event;
    }
}
