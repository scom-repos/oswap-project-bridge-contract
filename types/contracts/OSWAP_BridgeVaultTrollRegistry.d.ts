import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IHashUnstakeRequestParams {
    backer: string;
    trollProfileIndex: number | BigNumber;
    shares: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IPenalizeSuperTrollParams {
    trollProfileIndex: number | BigNumber;
    amount: number | BigNumber;
}
export interface IStakeParams {
    trollProfileIndex: number | BigNumber;
    amount: number | BigNumber;
}
export interface IStakedByParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IStakedByInvParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IUnstakeParams {
    backer: string;
    shares: number | BigNumber;
}
export interface IUnstakeApproveParams {
    signatures: string[];
    backer: string;
    trollProfileIndex: number | BigNumber;
    shares: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IVerifyStakedValueParams {
    msgSender: string;
    signatures: string[];
    paramsHash: string;
}
export declare class OSWAP_BridgeVaultTrollRegistry extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(trollRegistry: string, options?: TransactionOptions): Promise<string>;
    parsePenaltyEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.PenaltyEvent[];
    decodePenaltyEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.PenaltyEvent;
    parseStakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.StakeEvent[];
    decodeStakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.StakeEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UnstakeEvent;
    parseUnstakeApprovalEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UnstakeApprovalEvent[];
    decodeUnstakeApprovalEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UnstakeApprovalEvent;
    parseUnstakeRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent[];
    decodeUnstakeRequestEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UpdateConfigStoreEvent;
    parseUpdateTrollRegistryEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UpdateTrollRegistryEvent[];
    decodeUpdateTrollRegistryEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UpdateTrollRegistryEvent;
    backerStakes: {
        (param1: string, options?: TransactionOptions): Promise<{
            trollProfileIndex: BigNumber;
            shares: BigNumber;
            pendingWithdrawal: BigNumber;
            approvedWithdrawal: BigNumber;
        }>;
    };
    bridgeVault: {
        (options?: TransactionOptions): Promise<string>;
    };
    configStore: {
        (options?: TransactionOptions): Promise<string>;
    };
    getBackers: {
        (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<string[]>;
    };
    govToken: {
        (options?: TransactionOptions): Promise<string>;
    };
    hashUnstakeRequest: {
        (params: IHashUnstakeRequestParams, options?: TransactionOptions): Promise<string>;
    };
    initAddress: {
        (bridgeVault: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (bridgeVault: string, options?: TransactionOptions) => Promise<void>;
    };
    lastTrollTxCount: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    maxWithdrawal: {
        (backer: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    penalizeSuperTroll: {
        (params: IPenalizeSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPenalizeSuperTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    stake: {
        (params: IStakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IStakeParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    stakedBy: {
        (params: IStakedByParams, options?: TransactionOptions): Promise<string>;
    };
    stakedByInv: {
        (params: IStakedByInvParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    stakedByLength: {
        (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    transactionsCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    trollStakesBalances: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    trollStakesTotalShares: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    unstake: {
        (params: IUnstakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnstakeParams, options?: TransactionOptions) => Promise<void>;
    };
    unstakeApprove: {
        (params: IUnstakeApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnstakeApproveParams, options?: TransactionOptions) => Promise<void>;
    };
    unstakeRequest: {
        (shares: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (shares: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    updateConfigStore: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    updateTrollRegistry: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    usedNonce: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    verifyStakedValue: {
        (params: IVerifyStakedValueParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IVerifyStakedValueParams, options?: TransactionOptions) => Promise<{
            superTrollCount: BigNumber;
            totalStake: BigNumber;
            signers: BigNumber[];
        }>;
    };
    private assign;
}
export declare module OSWAP_BridgeVaultTrollRegistry {
    interface PenaltyEvent {
        trollProfileIndex: BigNumber;
        amount: BigNumber;
        _event: Event;
    }
    interface StakeEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        amount: BigNumber;
        shares: BigNumber;
        backerBalance: BigNumber;
        trollBalance: BigNumber;
        totalShares: BigNumber;
        _event: Event;
    }
    interface UnstakeEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        amount: BigNumber;
        shares: BigNumber;
        approvalDecrement: BigNumber;
        trollBalance: BigNumber;
        totalShares: BigNumber;
        _event: Event;
    }
    interface UnstakeApprovalEvent {
        backer: string;
        msgSender: string;
        signers: BigNumber[];
        shares: BigNumber;
        _event: Event;
    }
    interface UnstakeRequestEvent {
        backer: string;
        trollProfileIndex: BigNumber;
        shares: BigNumber;
        backerBalance: BigNumber;
        _event: Event;
    }
    interface UpdateConfigStoreEvent {
        newConfigStore: string;
        _event: Event;
    }
    interface UpdateTrollRegistryEvent {
        newTrollRegistry: string;
        _event: Event;
    }
}
