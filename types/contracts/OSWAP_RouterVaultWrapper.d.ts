import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface ISwapETHForExactTokensParams {
    pair: string[];
    vault: string;
    deadline: number | BigNumber;
    order: {
        peerChain: number | BigNumber;
        inAmount: number | BigNumber;
        outToken: string;
        minOutAmount: number | BigNumber;
        to: string;
        expire: number | BigNumber;
    };
}
export interface ISwapExactETHForTokensParams {
    pair: string[];
    vault: string;
    deadline: number | BigNumber;
    order: {
        peerChain: number | BigNumber;
        inAmount: number | BigNumber;
        outToken: string;
        minOutAmount: number | BigNumber;
        to: string;
        expire: number | BigNumber;
    };
}
export interface ISwapExactTokensForTokensParams {
    pair: string[];
    vault: string;
    amountIn: number | BigNumber;
    deadline: number | BigNumber;
    order: {
        peerChain: number | BigNumber;
        inAmount: number | BigNumber;
        outToken: string;
        minOutAmount: number | BigNumber;
        to: string;
        expire: number | BigNumber;
    };
}
export interface ISwapTokensForExactTokensParams {
    pair: string[];
    vault: string;
    amountIn: number | BigNumber;
    deadline: number | BigNumber;
    order: {
        peerChain: number | BigNumber;
        inAmount: number | BigNumber;
        outToken: string;
        minOutAmount: number | BigNumber;
        to: string;
        expire: number | BigNumber;
    };
}
export declare class OSWAP_RouterVaultWrapper extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RouterVaultWrapper.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_RouterVaultWrapper.SwapEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_RouterVaultWrapper.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_RouterVaultWrapper.UpdateConfigStoreEvent;
    configStore: {
        (options?: TransactionOptions): Promise<string>;
    };
    initAddress: {
        (configStore: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (configStore: string, options?: TransactionOptions) => Promise<void>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    swapETHForExactTokens: {
        (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    swapExactETHForTokens: {
        (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
    };
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    updateConfigStore: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_RouterVaultWrapper {
    interface SwapEvent {
        vault: string;
        orderId: BigNumber;
        sender: string;
        inToken: string;
        inAmount: BigNumber;
        _event: Event;
    }
    interface UpdateConfigStoreEvent {
        newConfigStore: string;
        _event: Event;
    }
}
