import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAddTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    troll: string;
    nonce: number | BigNumber;
}
export interface IHashAddTrollParams {
    trollProfileIndex: number | BigNumber;
    troll: string;
    nonce: number | BigNumber;
}
export interface IHashNewVaultParams {
    projectId: number | BigNumber;
    asset: string;
    owner: string;
    projectTrolls: (number | BigNumber)[];
    nonce: number | BigNumber;
}
export interface IHashNewVaultFormOwnerParams {
    asset: string;
    projectTrolls: (number | BigNumber)[];
    nonce: number | BigNumber;
}
export interface IHashUpdateProjectParams {
    projectId: number | BigNumber;
    newOwner: string;
    trollsToRemove: (number | BigNumber)[];
    trollsToAdd: (number | BigNumber)[];
    nonce: number | BigNumber;
}
export interface IHashUpdateProjectFromOwnerParams {
    projectId: number | BigNumber;
    newOwner: string;
    trollsToRemove: (number | BigNumber)[];
    trollsToAdd: (number | BigNumber)[];
    nonce: number | BigNumber;
}
export interface IHashUpdateTrollParams {
    trollProfileIndex: number | BigNumber;
    newTroll: string;
    nonce: number | BigNumber;
}
export interface IHashUpdateTrollFromTrollParams {
    trollProfileIndex: number | BigNumber;
    newTroll: string;
    nonce: number | BigNumber;
}
export interface IInitAddressParams {
    vaultRegistryCreator: string;
    bridgeVaultCreator: string;
}
export interface IIsProjectTrollParams {
    projectId: number | BigNumber;
    trollProfileIndex: number | BigNumber;
}
export interface IIsProjectTrollByAddressParams {
    projectId: number | BigNumber;
    troll: string;
}
export interface INewVaultParams {
    trollsSignatures: string[];
    ownerSignature: string;
    projectId: number | BigNumber;
    asset: string;
    owner: string;
    projectTrolls: (number | BigNumber)[];
    nonceForOwnerSignature: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IProjectTrollsInvParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IUpdateProjectParams {
    trollsSignatures: string[];
    ownerSignature: string;
    projectId: number | BigNumber;
    newOwner: string;
    trollsToRemove: (number | BigNumber)[];
    trollsToAdd: (number | BigNumber)[];
    nonceForOwnerSignature: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IUpdateTrollParams {
    signatures: string[];
    trollSignature: string;
    trollProfileIndex: number | BigNumber;
    newTroll: string;
    nonceForTrollSignature: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IUsedProjectNonceParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export declare class OSWAP_SideChainProjectRegistry extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(trollRegistry: string, options?: TransactionOptions): Promise<string>;
    parseAddTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.AddTrollEvent[];
    decodeAddTrollEvent(event: Event): OSWAP_SideChainProjectRegistry.AddTrollEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): OSWAP_SideChainProjectRegistry.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): OSWAP_SideChainProjectRegistry.DeauthorizeEvent;
    parseNewProjectVaultEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.NewProjectVaultEvent[];
    decodeNewProjectVaultEvent(event: Event): OSWAP_SideChainProjectRegistry.NewProjectVaultEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_SideChainProjectRegistry.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): OSWAP_SideChainProjectRegistry.TransferOwnershipEvent;
    parseUpdateProjectEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.UpdateProjectEvent[];
    decodeUpdateProjectEvent(event: Event): OSWAP_SideChainProjectRegistry.UpdateProjectEvent;
    parseUpdateTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.UpdateTrollEvent[];
    decodeUpdateTrollEvent(event: Event): OSWAP_SideChainProjectRegistry.UpdateTrollEvent;
    addTroll: {
        (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    bridgeVaultCreator: {
        (options?: TransactionOptions): Promise<string>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    getProject: {
        (projectId: number | BigNumber, options?: TransactionOptions): Promise<{
            asset: string;
            owner: string;
            vaultRegistry: string;
            bridgeVault: string;
            projectTrolls: BigNumber[];
        }>;
    };
    getProjects: {
        (projectIds: (number | BigNumber)[], options?: TransactionOptions): Promise<{
            asset: string;
            owner: string;
            vaultRegistry: string;
            bridgeVault: string;
            projectTrolls: BigNumber[];
        }[]>;
    };
    hashAddTroll: {
        (params: IHashAddTrollParams, options?: TransactionOptions): Promise<string>;
    };
    hashNewVault: {
        (params: IHashNewVaultParams, options?: TransactionOptions): Promise<string>;
    };
    hashNewVaultFormOwner: {
        (params: IHashNewVaultFormOwnerParams, options?: TransactionOptions): Promise<string>;
    };
    hashUpdateProject: {
        (params: IHashUpdateProjectParams, options?: TransactionOptions): Promise<string>;
    };
    hashUpdateProjectFromOwner: {
        (params: IHashUpdateProjectFromOwnerParams, options?: TransactionOptions): Promise<string>;
    };
    hashUpdateTroll: {
        (params: IHashUpdateTrollParams, options?: TransactionOptions): Promise<string>;
    };
    hashUpdateTrollFromTroll: {
        (params: IHashUpdateTrollFromTrollParams, options?: TransactionOptions): Promise<string>;
    };
    initAddress: {
        (params: IInitAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IInitAddressParams, options?: TransactionOptions) => Promise<void>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    isProjectTroll: {
        (params: IIsProjectTrollParams, options?: TransactionOptions): Promise<boolean>;
    };
    isProjectTrollByAddress: {
        (params: IIsProjectTrollByAddressParams, options?: TransactionOptions): Promise<boolean>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    newVault: {
        (params: INewVaultParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewVaultParams, options?: TransactionOptions) => Promise<void>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    projectTrollsInv: {
        (params: IProjectTrollsInvParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    projectTrollsLength: {
        (projectId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    trollProfileInv: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    trollProfiles: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    updateProject: {
        (params: IUpdateProjectParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateProjectParams, options?: TransactionOptions) => Promise<void>;
    };
    updateTroll: {
        (params: IUpdateTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    usedNonce: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<boolean>;
    };
    usedProjectNonce: {
        (params: IUsedProjectNonceParams, options?: TransactionOptions): Promise<boolean>;
    };
    vaultRegistryCreator: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_SideChainProjectRegistry {
    interface AddTrollEvent {
        troll: string;
        trollProfileIndex: BigNumber;
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
    interface NewProjectVaultEvent {
        projectId: BigNumber;
        asset: string;
        owner: string;
        vaultRegistry: string;
        bridgeVault: string;
        projectTrolls: BigNumber[];
        _event: Event;
    }
    interface StartOwnershipTransferEvent {
        user: string;
        _event: Event;
    }
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
    interface UpdateProjectEvent {
        projectId: BigNumber;
        owner: string;
        trollsToRemove: BigNumber[];
        trollsToAdd: BigNumber[];
        _event: Event;
    }
    interface UpdateTrollEvent {
        trollProfileIndex: BigNumber;
        troll: string;
        _event: Event;
    }
}
