import { IWallet, Contract as _Contract, TransactionReceipt, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    votingManager: string;
    chainRegistry: string;
}
export declare class OSWAP_ChainRegistryExecutor extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseExecuteEvent(receipt: TransactionReceipt): OSWAP_ChainRegistryExecutor.ExecuteEvent[];
    decodeExecuteEvent(event: Event): OSWAP_ChainRegistryExecutor.ExecuteEvent;
    chainRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    execute: {
        (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: string[], options?: TransactionOptions) => Promise<void>;
    };
    votingManager: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_ChainRegistryExecutor {
    interface ExecuteEvent {
        params: string[];
        _event: Event;
    }
}
