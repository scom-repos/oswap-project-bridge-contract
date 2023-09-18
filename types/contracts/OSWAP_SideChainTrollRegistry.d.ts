import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAddTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    troll: string;
    isSuperTroll: boolean;
    nonce: number | BigNumber;
}
export interface IHashAddTrollParams {
    trollProfileIndex: number | BigNumber;
    troll: string;
    isSuperTroll: boolean;
    nonce: number | BigNumber;
}
export interface IHashRegisterVaultParams {
    token: string;
    vault: string;
    nonce: number | BigNumber;
}
export interface IHashRemoveTrollParams {
    trollProfileIndex: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IHashUnlockTrollParams {
    trollProfileIndex: number | BigNumber;
    unlock: boolean;
    vaultRegistry: string[];
    penalty: (number | BigNumber)[];
    nonce: number | BigNumber;
}
export interface IHashUpdateTrollParams {
    trollProfileIndex: number | BigNumber;
    newTroll: string;
    nonce: number | BigNumber;
}
export interface IInitAddressParams {
    votingExecutor: string;
    tokens: string[];
    vaults: string[];
}
export interface IIsGeneralTrollParams {
    troll: string;
    returnFalseIfBlocked: boolean;
}
export interface IIsGeneralTrollByIndexParams {
    trollProfileIndex: number | BigNumber;
    returnFalseIfBlocked: boolean;
}
export interface IIsSuperTrollParams {
    troll: string;
    returnFalseIfBlocked: boolean;
}
export interface IIsSuperTrollByIndexParams {
    trollProfileIndex: number | BigNumber;
    returnFalseIfBlocked: boolean;
}
export interface IRegisterVaultParams {
    signatures: string[];
    token: string;
    vault: string;
    nonce: number | BigNumber;
}
export interface IRemoveTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    nonce: number | BigNumber;
}
export interface ISetVotingExecutorParams {
    votingExecutor: string;
    bool: boolean;
}
export interface IUnlockGeneralTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IUnlockSuperTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    unlock: boolean;
    vaultRegistry: string[];
    penalty: (number | BigNumber)[];
    nonce: number | BigNumber;
}
export interface IUpdateTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    newTroll: string;
    nonce: number | BigNumber;
}
export interface IVerifySignaturesParams {
    msgSender: string;
    signatures: string[];
    paramsHash: string;
    nonce: number | BigNumber;
}
export declare class OSWAP_SideChainTrollRegistry extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(configStore: string, options?: TransactionOptions): Promise<string>;
    parseAddTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.AddTrollEvent[];
    decodeAddTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.AddTrollEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): OSWAP_SideChainTrollRegistry.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): OSWAP_SideChainTrollRegistry.DeauthorizeEvent;
    parseDelistTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.DelistTrollEvent[];
    decodeDelistTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.DelistTrollEvent;
    parseLockGeneralTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.LockGeneralTrollEvent[];
    decodeLockGeneralTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.LockGeneralTrollEvent;
    parseLockSuperTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.LockSuperTrollEvent[];
    decodeLockSuperTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.LockSuperTrollEvent;
    parseNewVaultEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.NewVaultEvent[];
    decodeNewVaultEvent(event: Event): OSWAP_SideChainTrollRegistry.NewVaultEvent;
    parseRemoveTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.RemoveTrollEvent[];
    decodeRemoveTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.RemoveTrollEvent;
    parseResumeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.ResumeEvent[];
    decodeResumeEvent(event: Event): OSWAP_SideChainTrollRegistry.ResumeEvent;
    parseSetVotingExecutorEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.SetVotingExecutorEvent[];
    decodeSetVotingExecutorEvent(event: Event): OSWAP_SideChainTrollRegistry.SetVotingExecutorEvent;
    parseShutdownEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.ShutdownEvent[];
    decodeShutdownEvent(event: Event): OSWAP_SideChainTrollRegistry.ShutdownEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_SideChainTrollRegistry.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): OSWAP_SideChainTrollRegistry.TransferOwnershipEvent;
    parseUnlockGeneralTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UnlockGeneralTrollEvent[];
    decodeUnlockGeneralTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.UnlockGeneralTrollEvent;
    parseUnlockSuperTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UnlockSuperTrollEvent[];
    decodeUnlockSuperTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.UnlockSuperTrollEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_SideChainTrollRegistry.UpdateConfigStoreEvent;
    parseUpdateTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UpdateTrollEvent[];
    decodeUpdateTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.UpdateTrollEvent;
    parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UpgradeEvent[];
    decodeUpgradeEvent(event: Event): OSWAP_SideChainTrollRegistry.UpgradeEvent;
    addTroll: {
        (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    allVaultToken: {
        (options?: TransactionOptions): Promise<string[]>;
    };
    configStore: {
        (options?: TransactionOptions): Promise<string>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    generalTrollCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    govToken: {
        (options?: TransactionOptions): Promise<string>;
    };
    hashAddTroll: {
        (params: IHashAddTrollParams, options?: TransactionOptions): Promise<string>;
    };
    hashRegisterVault: {
        (params: IHashRegisterVaultParams, options?: TransactionOptions): Promise<string>;
    };
    hashRemoveTroll: {
        (params: IHashRemoveTrollParams, options?: TransactionOptions): Promise<string>;
    };
    hashUnlockTroll: {
        (params: IHashUnlockTrollParams, options?: TransactionOptions): Promise<string>;
    };
    hashUpdateTroll: {
        (params: IHashUpdateTrollParams, options?: TransactionOptions): Promise<string>;
    };
    initAddress: {
        (params: IInitAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IInitAddressParams, options?: TransactionOptions) => Promise<void>;
    };
    isGeneralTroll: {
        (params: IIsGeneralTrollParams, options?: TransactionOptions): Promise<boolean>;
    };
    isGeneralTrollByIndex: {
        (params: IIsGeneralTrollByIndexParams, options?: TransactionOptions): Promise<boolean>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    isSuperTroll: {
        (params: IIsSuperTrollParams, options?: TransactionOptions): Promise<boolean>;
    };
    isSuperTrollByIndex: {
        (params: IIsSuperTrollByIndexParams, options?: TransactionOptions): Promise<boolean>;
    };
    isVotingExecutor: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    lastTrollTxCount: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    lockGeneralTroll: {
        (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollProfileIndex: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    lockSuperTroll: {
        (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollProfileIndex: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    newTrollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    newVotingExecutorManager: {
        (options?: TransactionOptions): Promise<string>;
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
    registerVault: {
        (params: IRegisterVaultParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRegisterVaultParams, options?: TransactionOptions) => Promise<void>;
    };
    removeTroll: {
        (params: IRemoveTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    resume: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    setVotingExecutor: {
        (params: ISetVotingExecutorParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetVotingExecutorParams, options?: TransactionOptions) => Promise<void>;
    };
    shutdownByAdmin: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    shutdownByVoting: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    superTrollCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    transactionsCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    trollProfileInv: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    trollProfiles: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            troll: string;
            trollType: BigNumber;
        }>;
    };
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    unlockGeneralTroll: {
        (params: IUnlockGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnlockGeneralTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    unlockSuperTroll: {
        (params: IUnlockSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnlockSuperTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    updateConfigStore: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    updateTroll: {
        (params: IUpdateTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    upgrade: {
        (trollRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollRegistry: string, options?: TransactionOptions) => Promise<void>;
    };
    upgradeByAdmin: {
        (trollRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollRegistry: string, options?: TransactionOptions) => Promise<void>;
    };
    usedNonce: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<boolean>;
    };
    vaultToken: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    vaultTokenLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    vaults: {
        (param1: string, options?: TransactionOptions): Promise<string>;
    };
    verifySignatures: {
        (params: IVerifySignaturesParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IVerifySignaturesParams, options?: TransactionOptions) => Promise<void>;
    };
    votingExecutor: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    votingExecutorInv: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    votingExecutorLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    private assign;
}
export declare module OSWAP_SideChainTrollRegistry {
    interface AddTrollEvent {
        troll: string;
        trollProfileIndex: BigNumber;
        isSuperTroll: boolean;
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
    interface DelistTrollEvent {
        trollProfileIndex: BigNumber;
        _event: Event;
    }
    interface LockGeneralTrollEvent {
        trollProfileIndex: BigNumber;
        lockedBy: string;
        _event: Event;
    }
    interface LockSuperTrollEvent {
        trollProfileIndex: BigNumber;
        lockedBy: string;
        _event: Event;
    }
    interface NewVaultEvent {
        token: string;
        vault: string;
        _event: Event;
    }
    interface RemoveTrollEvent {
        trollProfileIndex: BigNumber;
        _event: Event;
    }
    interface ResumeEvent {
        _event: Event;
    }
    interface SetVotingExecutorEvent {
        newVotingExecutor: string;
        isActive: boolean;
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
    interface TransferOwnershipEvent {
        user: string;
        _event: Event;
    }
    interface UnlockGeneralTrollEvent {
        trollProfileIndex: BigNumber;
        _event: Event;
    }
    interface UnlockSuperTrollEvent {
        trollProfileIndex: BigNumber;
        unlock: boolean;
        bridgeVault: string;
        penalty: BigNumber;
        _event: Event;
    }
    interface UpdateConfigStoreEvent {
        newConfigStore: string;
        _event: Event;
    }
    interface UpdateTrollEvent {
        trollProfileIndex: BigNumber;
        troll: string;
        _event: Event;
    }
    interface UpgradeEvent {
        newTrollRegistry: string;
        _event: Event;
    }
}
