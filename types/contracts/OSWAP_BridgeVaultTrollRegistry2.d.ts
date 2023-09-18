import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IHashUnstakeRequestParams {
    backer: string;
    trollProfileIndex: number | BigNumber;
    shares: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IInitParams {
    projectRegistry: string;
    projectId: number | BigNumber;
    bondToken: string;
    bridgeVault: string;
}
export interface IPenalizeTrollParams {
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
export declare class OSWAP_BridgeVaultTrollRegistry2 extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    parsePenaltyEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.PenaltyEvent[];
    decodePenaltyEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.PenaltyEvent;
    parseStakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.StakeEvent[];
    decodeStakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.StakeEvent;
    parseUnstakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UnstakeEvent[];
    decodeUnstakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UnstakeEvent;
    parseUnstakeApprovalEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UnstakeApprovalEvent[];
    decodeUnstakeApprovalEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UnstakeApprovalEvent;
    parseUnstakeRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UnstakeRequestEvent[];
    decodeUnstakeRequestEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UnstakeRequestEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UpdateConfigStoreEvent;
    parseUpdateTrollRegistryEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UpdateTrollRegistryEvent[];
    decodeUpdateTrollRegistryEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UpdateTrollRegistryEvent;
    backerStakes: {
        (param1: string, options?: TransactionOptions): Promise<{
            trollProfileIndex: BigNumber;
            shares: BigNumber;
            pendingWithdrawal: BigNumber;
            approvedWithdrawal: BigNumber;
        }>;
    };
    bondToken: {
        (options?: TransactionOptions): Promise<string>;
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
    hashUnstakeRequest: {
        (params: IHashUnstakeRequestParams, options?: TransactionOptions): Promise<string>;
    };
    init: {
        (params: IInitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IInitParams, options?: TransactionOptions) => Promise<void>;
    };
    maxWithdrawal: {
        (backer: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    penalizeTroll: {
        (params: IPenalizeTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPenalizeTrollParams, options?: TransactionOptions) => Promise<void>;
    };
    projectId: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    projectRegistry: {
        (options?: TransactionOptions): Promise<string>;
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
export declare module OSWAP_BridgeVaultTrollRegistry2 {
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
