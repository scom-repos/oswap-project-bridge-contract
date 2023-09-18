import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAddTrollParams {
    signatures: string[];
    trollProfileIndex: number | BigNumber;
    troll: string;
    isSuperTroll: boolean;
    nonce: number | BigNumber;
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
export declare class MOCK_TrollRegistry extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(govToken: string, options?: TransactionOptions): Promise<string>;
    parseAddTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.AddTrollEvent[];
    decodeAddTrollEvent(event: Event): MOCK_TrollRegistry.AddTrollEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): MOCK_TrollRegistry.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): MOCK_TrollRegistry.DeauthorizeEvent;
    parseDelistTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.DelistTrollEvent[];
    decodeDelistTrollEvent(event: Event): MOCK_TrollRegistry.DelistTrollEvent;
    parseLockGeneralTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.LockGeneralTrollEvent[];
    decodeLockGeneralTrollEvent(event: Event): MOCK_TrollRegistry.LockGeneralTrollEvent;
    parseLockSuperTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.LockSuperTrollEvent[];
    decodeLockSuperTrollEvent(event: Event): MOCK_TrollRegistry.LockSuperTrollEvent;
    parseParamSetEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.ParamSetEvent[];
    decodeParamSetEvent(event: Event): MOCK_TrollRegistry.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): MOCK_TrollRegistry.ParamSet2Event[];
    decodeParamSet2Event(event: Event): MOCK_TrollRegistry.ParamSet2Event;
    parseRemoveTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.RemoveTrollEvent[];
    decodeRemoveTrollEvent(event: Event): MOCK_TrollRegistry.RemoveTrollEvent;
    parseResumeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.ResumeEvent[];
    decodeResumeEvent(event: Event): MOCK_TrollRegistry.ResumeEvent;
    parseSetVotingExecutorEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.SetVotingExecutorEvent[];
    decodeSetVotingExecutorEvent(event: Event): MOCK_TrollRegistry.SetVotingExecutorEvent;
    parseShutdownEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.ShutdownEvent[];
    decodeShutdownEvent(event: Event): MOCK_TrollRegistry.ShutdownEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): MOCK_TrollRegistry.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): MOCK_TrollRegistry.TransferOwnershipEvent;
    parseUnlockGeneralTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UnlockGeneralTrollEvent[];
    decodeUnlockGeneralTrollEvent(event: Event): MOCK_TrollRegistry.UnlockGeneralTrollEvent;
    parseUnlockSuperTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UnlockSuperTrollEvent[];
    decodeUnlockSuperTrollEvent(event: Event): MOCK_TrollRegistry.UnlockSuperTrollEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): MOCK_TrollRegistry.UpdateConfigStoreEvent;
    parseUpdateTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpdateTrollEvent[];
    decodeUpdateTrollEvent(event: Event): MOCK_TrollRegistry.UpdateTrollEvent;
    parseUpgradeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpgradeEvent[];
    decodeUpgradeEvent(event: Event): MOCK_TrollRegistry.UpgradeEvent;
    parseUpgradeVotingManagerEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpgradeVotingManagerEvent[];
    decodeUpgradeVotingManagerEvent(event: Event): MOCK_TrollRegistry.UpgradeVotingManagerEvent;
    addTroll: {
        (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddTrollParams, options?: TransactionOptions) => Promise<void>;
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
    initAddress: {
        (configStore: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (configStore: string, options?: TransactionOptions) => Promise<void>;
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
    newVotingManager: {
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
    upgradeTrollRegistry: {
        (trollRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollRegistry: string, options?: TransactionOptions) => Promise<void>;
    };
    upgradeTrollRegistryByAdmin: {
        (trollRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollRegistry: string, options?: TransactionOptions) => Promise<void>;
    };
    upgradeVotingManager: {
        (votingManager: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingManager: string, options?: TransactionOptions) => Promise<void>;
    };
    upgradeVotingManagerByAdmin: {
        (votingManager: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingManager: string, options?: TransactionOptions) => Promise<void>;
    };
    usedNonce: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<boolean>;
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
export declare module MOCK_TrollRegistry {
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
    interface ParamSetEvent {
        name: string;
        value: string;
        _event: Event;
    }
    interface ParamSet2Event {
        name: string;
        value1: string;
        value2: string;
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
        oldTroll: string;
        newTroll: string;
        _event: Event;
    }
    interface UpgradeEvent {
        newTrollRegistry: string;
        _event: Event;
    }
    interface UpgradeVotingManagerEvent {
        newVotingManager: string;
        _event: Event;
    }
}
