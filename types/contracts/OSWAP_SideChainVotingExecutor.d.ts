import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IExecuteParams {
    signatures: string[];
    params: string[];
    nonce: number | BigNumber;
}
export interface IExecuteHashParams {
    params: string[];
    nonce: number | BigNumber;
}
export declare class OSWAP_SideChainVotingExecutor extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(trollRegistry: string, options?: TransactionOptions): Promise<string>;
    parseExecuteEvent(receipt: TransactionReceipt): OSWAP_SideChainVotingExecutor.ExecuteEvent[];
    decodeExecuteEvent(event: Event): OSWAP_SideChainVotingExecutor.ExecuteEvent;
    configStore: {
        (options?: TransactionOptions): Promise<string>;
    };
    execute: {
        (params: IExecuteParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IExecuteParams, options?: TransactionOptions) => Promise<void>;
    };
    executeHash: {
        (params: IExecuteHashParams, options?: TransactionOptions): Promise<string>;
    };
    govToken: {
        (options?: TransactionOptions): Promise<string>;
    };
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_SideChainVotingExecutor {
    interface ExecuteEvent {
        params: string[];
        _event: Event;
    }
}
