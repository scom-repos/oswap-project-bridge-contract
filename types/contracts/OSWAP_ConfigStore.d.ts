import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface ISetConfigParams {
    name: string;
    value: string;
}
export interface ISetConfig2Params {
    name: string;
    value1: string;
    value2: string;
}
export interface ISetConfigAddressParams {
    name: string;
    value: string;
}
export interface ISetOracleParams {
    asset: string;
    oracle: string;
}
export declare class OSWAP_ConfigStore extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        govToken: string;
        swapPolicy: string;
        lpWithdrawlDelay: number | BigNumber;
        transactionsGap: number | BigNumber;
        superTrollMinCount: number | BigNumber;
        generalTrollMinCount: number | BigNumber;
        transactionFee: number | BigNumber;
        router: string;
        rebalancer: string;
        feeTo: string;
        wrapper: string;
        asset: string[];
        baseFee: (number | BigNumber)[];
    }, options?: TransactionOptions): Promise<string>;
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): OSWAP_ConfigStore.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): OSWAP_ConfigStore.DeauthorizeEvent;
    parseParamSet1Event(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSet1Event[];
    decodeParamSet1Event(event: Event): OSWAP_ConfigStore.ParamSet1Event;
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OSWAP_ConfigStore.ParamSet2Event;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_ConfigStore.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): OSWAP_ConfigStore.TransferOwnershipEvent;
    parseUpdateVotingExecutorManagerEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.UpdateVotingExecutorManagerEvent[];
    decodeUpdateVotingExecutorManagerEvent(event: Event): OSWAP_ConfigStore.UpdateVotingExecutorManagerEvent;
    parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.UpgradeEvent[];
    decodeUpgradeEvent(event: Event): OSWAP_ConfigStore.UpgradeEvent;
    baseFee: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    feeTo: {
        (options?: TransactionOptions): Promise<string>;
    };
    generalTrollMinCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getBridgeParams: {
        (asset: string, options?: TransactionOptions): Promise<{
            param1: string;
            param2: string;
            param3: string;
            param4: string;
            param5: BigNumber;
            param6: BigNumber;
        }>;
    };
    getRebalanceParams: {
        (asset: string, options?: TransactionOptions): Promise<{
            param1: string;
            param2: string;
            param3: string;
        }>;
    };
    getSignatureVerificationParams: {
        (options?: TransactionOptions): Promise<{
            param1: BigNumber;
            param2: BigNumber;
            param3: BigNumber;
        }>;
    };
    govToken: {
        (options?: TransactionOptions): Promise<string>;
    };
    initAddress: {
        (votingExecutorManager: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingExecutorManager: string, options?: TransactionOptions) => Promise<void>;
    };
    isApprovedProxy: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    lpWithdrawlDelay: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    newConfigStore: {
        (options?: TransactionOptions): Promise<string>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    priceOracle: {
        (param1: string, options?: TransactionOptions): Promise<string>;
    };
    rebalancer: {
        (options?: TransactionOptions): Promise<string>;
    };
    router: {
        (options?: TransactionOptions): Promise<string>;
    };
    setConfig: {
        (params: ISetConfigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetConfigParams, options?: TransactionOptions) => Promise<void>;
    };
    setConfig2: {
        (params: ISetConfig2Params, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetConfig2Params, options?: TransactionOptions) => Promise<void>;
    };
    setConfigAddress: {
        (params: ISetConfigAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetConfigAddressParams, options?: TransactionOptions) => Promise<void>;
    };
    setOracle: {
        (params: ISetOracleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetOracleParams, options?: TransactionOptions) => Promise<void>;
    };
    setSwapPolicy: {
        (swapPolicy: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (swapPolicy: string, options?: TransactionOptions) => Promise<void>;
    };
    superTrollMinCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    swapPolicy: {
        (options?: TransactionOptions): Promise<string>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    transactionFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transactionsGap: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    updateVotingExecutorManager: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    upgrade: {
        (configStore: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (configStore: string, options?: TransactionOptions) => Promise<void>;
    };
    votingExecutorManager: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_ConfigStore {
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface ParamSet1Event {
        name: string;
        value1: string;
        _event: Event;
    }
    interface ParamSet2Event {
        name: string;
        value1: string;
        value2: string;
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
    interface UpdateVotingExecutorManagerEvent {
        newVotingExecutorManager: string;
        _event: Event;
    }
    interface UpgradeEvent {
        newConfigStore: string;
        _event: Event;
    }
}
