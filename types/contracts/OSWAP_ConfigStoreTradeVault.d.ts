import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    arbitrageFee: number | BigNumber;
    router: string;
}
export interface ISetConfigParams {
    name: string;
    value: string;
}
export interface ISetConfigAddressParams {
    name: string;
    value: string;
}
export declare class OSWAP_ConfigStoreTradeVault extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseParamSet1Event(receipt: TransactionReceipt): OSWAP_ConfigStoreTradeVault.ParamSet1Event[];
    decodeParamSet1Event(event: Event): OSWAP_ConfigStoreTradeVault.ParamSet1Event;
    arbitrageFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    feeTo: {
        (options?: TransactionOptions): Promise<string>;
    };
    getTradeParam: {
        (options?: TransactionOptions): Promise<{
            param1: string;
            param2: BigNumber;
        }>;
    };
    newConfigStore: {
        (options?: TransactionOptions): Promise<string>;
    };
    router: {
        (options?: TransactionOptions): Promise<string>;
    };
    setConfig: {
        (params: ISetConfigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetConfigParams, options?: TransactionOptions) => Promise<void>;
    };
    setConfigAddress: {
        (params: ISetConfigAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetConfigAddressParams, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_ConfigStoreTradeVault {
    interface ParamSet1Event {
        name: string;
        value1: string;
        _event: Event;
    }
}
