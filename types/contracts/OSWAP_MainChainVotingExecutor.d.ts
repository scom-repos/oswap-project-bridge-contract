import { IWallet, Contract as _Contract, TransactionReceipt, Event, TransactionOptions } from "@ijstech/eth-contract";
export declare class OSWAP_MainChainVotingExecutor extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(votingManager: string, options?: TransactionOptions): Promise<string>;
    parseExecuteEvent(receipt: TransactionReceipt): OSWAP_MainChainVotingExecutor.ExecuteEvent[];
    decodeExecuteEvent(event: Event): OSWAP_MainChainVotingExecutor.ExecuteEvent;
    chainRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    execute: {
        (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: string[], options?: TransactionOptions) => Promise<void>;
    };
    initAddress: {
        (chainRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (chainRegistry: string, options?: TransactionOptions) => Promise<void>;
    };
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    votingManager: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_MainChainVotingExecutor {
    interface ExecuteEvent {
        params: string[];
        _event: Event;
    }
}
