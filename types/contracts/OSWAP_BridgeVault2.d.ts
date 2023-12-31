import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAllowanceParams {
    owner: string;
    spender: string;
}
export interface IApproveParams {
    spender: string;
    amount: number | BigNumber;
}
export interface IAssetPriceAgainstGovTokenParams {
    govTokenOracle: string;
    assetTokenOracle: string;
}
export interface ICancelOrderParams {
    signatures: string[];
    orderId: number | BigNumber;
    canceledByOrderOwner: boolean;
    protocolFee: number | BigNumber;
}
export interface IDecreaseAllowanceParams {
    spender: string;
    subtractedValue: number | BigNumber;
}
export interface IGetOrdersParams {
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IHashCancelOrderParamsParams {
    orderId: number | BigNumber;
    canceledByOrderOwner: boolean;
    protocolFee: number | BigNumber;
}
export interface IHashOrderParams {
    owner: string;
    sourceChainId: number | BigNumber;
    orderId: number | BigNumber;
}
export interface IHashSwapParamsParams {
    orderId: string;
    amendment: number | BigNumber;
    order: {
        peerChain: number | BigNumber;
        inAmount: number | BigNumber;
        outToken: string;
        minOutAmount: number | BigNumber;
        to: string;
        expire: number | BigNumber;
    };
    protocolFee: number | BigNumber;
    pair: string[];
}
export interface IHashWithdrawParamsParams {
    owner: string;
    amount: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IIncreaseAllowanceParams {
    spender: string;
    addedValue: number | BigNumber;
}
export interface INewOrderFromRouterParams {
    order: {
        peerChain: number | BigNumber;
        inAmount: number | BigNumber;
        outToken: string;
        minOutAmount: number | BigNumber;
        to: string;
        expire: number | BigNumber;
    };
    trader: string;
}
export interface IOrderAmendmentsParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export interface IRebalancerWithdrawParams {
    signatures: string[];
    assetAmount: number | BigNumber;
    nonce: number | BigNumber;
}
export interface IRemoveLiquidityParams {
    provider: string;
    assetAmount: number | BigNumber;
}
export interface IRequestAmendOrderParams {
    orderId: number | BigNumber;
    order: {
        peerChain: number | BigNumber;
        inAmount: number | BigNumber;
        outToken: string;
        minOutAmount: number | BigNumber;
        to: string;
        expire: number | BigNumber;
    };
}
export interface IRequestCancelOrderParams {
    sourceChainId: number | BigNumber;
    orderId: number | BigNumber;
}
export interface ISwapParams {
    signatures: string[];
    owner: string;
    orderId: number | BigNumber;
    amendment: number | BigNumber;
    protocolFee: number | BigNumber;
    pair: string[];
    order: {
        peerChain: number | BigNumber;
        inAmount: number | BigNumber;
        outToken: string;
        minOutAmount: number | BigNumber;
        to: string;
        expire: number | BigNumber;
    };
}
export interface ITransferParams {
    recipient: string;
    amount: number | BigNumber;
}
export interface ITransferFromParams {
    sender: string;
    recipient: string;
    amount: number | BigNumber;
}
export interface IVoidOrderParams {
    signatures: string[];
    orderId: string;
}
export interface IVoidUserCancelOrderParams {
    signatures: string[];
    orderId: number | BigNumber;
}
export declare class OSWAP_BridgeVault2 extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.AddLiquidityEvent[];
    decodeAddLiquidityEvent(event: Event): OSWAP_BridgeVault2.AddLiquidityEvent;
    parseAmendOrderRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.AmendOrderRequestEvent[];
    decodeAmendOrderRequestEvent(event: Event): OSWAP_BridgeVault2.AmendOrderRequestEvent;
    parseApprovalEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.ApprovalEvent[];
    decodeApprovalEvent(event: Event): OSWAP_BridgeVault2.ApprovalEvent;
    parseNewOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.NewOrderEvent[];
    decodeNewOrderEvent(event: Event): OSWAP_BridgeVault2.NewOrderEvent;
    parseOrderCanceledEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.OrderCanceledEvent[];
    decodeOrderCanceledEvent(event: Event): OSWAP_BridgeVault2.OrderCanceledEvent;
    parseRebalanceEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.RebalanceEvent[];
    decodeRebalanceEvent(event: Event): OSWAP_BridgeVault2.RebalanceEvent;
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.RemoveLiquidityEvent[];
    decodeRemoveLiquidityEvent(event: Event): OSWAP_BridgeVault2.RemoveLiquidityEvent;
    parseRemoveLiquidityRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.RemoveLiquidityRequestEvent[];
    decodeRemoveLiquidityRequestEvent(event: Event): OSWAP_BridgeVault2.RemoveLiquidityRequestEvent;
    parseRequestCancelOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.RequestCancelOrderEvent[];
    decodeRequestCancelOrderEvent(event: Event): OSWAP_BridgeVault2.RequestCancelOrderEvent;
    parseRequestCancelOrderOnSourceChainEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.RequestCancelOrderOnSourceChainEvent[];
    decodeRequestCancelOrderOnSourceChainEvent(event: Event): OSWAP_BridgeVault2.RequestCancelOrderOnSourceChainEvent;
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.SwapEvent[];
    decodeSwapEvent(event: Event): OSWAP_BridgeVault2.SwapEvent;
    parseSyncEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.SyncEvent[];
    decodeSyncEvent(event: Event): OSWAP_BridgeVault2.SyncEvent;
    parseTransferEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.TransferEvent[];
    decodeTransferEvent(event: Event): OSWAP_BridgeVault2.TransferEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_BridgeVault2.UpdateConfigStoreEvent;
    parseUpdateTrollRegistryEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.UpdateTrollRegistryEvent[];
    decodeUpdateTrollRegistryEvent(event: Event): OSWAP_BridgeVault2.UpdateTrollRegistryEvent;
    parseVoidOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.VoidOrderEvent[];
    decodeVoidOrderEvent(event: Event): OSWAP_BridgeVault2.VoidOrderEvent;
    parseVoidUserCancelOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.VoidUserCancelOrderEvent[];
    decodeVoidUserCancelOrderEvent(event: Event): OSWAP_BridgeVault2.VoidUserCancelOrderEvent;
    parseWithdrawUnexecutedOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.WithdrawUnexecutedOrderEvent[];
    decodeWithdrawUnexecutedOrderEvent(event: Event): OSWAP_BridgeVault2.WithdrawUnexecutedOrderEvent;
    parseWithdrawlTrollFeeEvent(receipt: TransactionReceipt): OSWAP_BridgeVault2.WithdrawlTrollFeeEvent[];
    decodeWithdrawlTrollFeeEvent(event: Event): OSWAP_BridgeVault2.WithdrawlTrollFeeEvent;
    addLiquidity: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
    };
    asset: {
        (options?: TransactionOptions): Promise<string>;
    };
    assetPriceAgainstGovToken: {
        (params: IAssetPriceAgainstGovTokenParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    balanceOf: {
        (account: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    cancelOrder: {
        (params: ICancelOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICancelOrderParams, options?: TransactionOptions) => Promise<void>;
    };
    configStore: {
        (options?: TransactionOptions): Promise<string>;
    };
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    };
    getChainId: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getOrders: {
        (params: IGetOrdersParams, options?: TransactionOptions): Promise<{
            peerChain: BigNumber;
            inAmount: BigNumber;
            outToken: string;
            minOutAmount: BigNumber;
            to: string;
            expire: BigNumber;
        }[]>;
    };
    hashCancelOrderParams: {
        (params: IHashCancelOrderParamsParams, options?: TransactionOptions): Promise<string>;
    };
    hashOrder: {
        (params: IHashOrderParams, options?: TransactionOptions): Promise<string>;
    };
    hashSwapParams: {
        (params: IHashSwapParamsParams, options?: TransactionOptions): Promise<string>;
    };
    hashVoidOrderParams: {
        (orderId: string, options?: TransactionOptions): Promise<string>;
    };
    hashWithdrawParams: {
        (params: IHashWithdrawParamsParams, options?: TransactionOptions): Promise<string>;
    };
    imbalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    increaseAllowance: {
        (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    };
    init: {
        (vaultRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (vaultRegistry: string, options?: TransactionOptions) => Promise<void>;
    };
    lastKnownBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    lpAssetBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    name: {
        (options?: TransactionOptions): Promise<string>;
    };
    newOrder: {
        (order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        }, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        }, options?: TransactionOptions) => Promise<BigNumber>;
    };
    newOrderFromRouter: {
        (params: INewOrderFromRouterParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewOrderFromRouterParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    orderAmendments: {
        (params: IOrderAmendmentsParams, options?: TransactionOptions): Promise<{
            peerChain: BigNumber;
            inAmount: BigNumber;
            outToken: string;
            minOutAmount: BigNumber;
            to: string;
            expire: BigNumber;
        }>;
    };
    orderAmendmentsLength: {
        (orderId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    orderOwner: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    orderRefunds: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    orderRequestCancelDate: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    orderStatus: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    orders: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<{
            peerChain: BigNumber;
            inAmount: BigNumber;
            outToken: string;
            minOutAmount: BigNumber;
            to: string;
            expire: BigNumber;
        }>;
    };
    ordersLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    pendingWithdrawalAmount: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    pendingWithdrawalTimeout: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    projectId: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    projectRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    protocolFeeBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    rebalancerDeposit: {
        (assetAmount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (assetAmount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    rebalancerWithdraw: {
        (params: IRebalancerWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRebalancerWithdrawParams, options?: TransactionOptions) => Promise<void>;
    };
    removeLiquidity: {
        (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
    };
    removeLiquidityRequest: {
        (lpTokenAmount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (lpTokenAmount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    requestAmendOrder: {
        (params: IRequestAmendOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRequestAmendOrderParams, options?: TransactionOptions) => Promise<void>;
    };
    requestCancelOrder: {
        (params: IRequestCancelOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRequestCancelOrderParams, options?: TransactionOptions) => Promise<void>;
    };
    requestCancelOrderOnSourceChain: {
        (orderId: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (orderId: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    swap: {
        (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    swapOrderStatus: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    };
    sync: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    totalPendingWithdrawal: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
    };
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    updateConfigStore: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    updateTrollRegistry: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    vaultRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    voidOrder: {
        (params: IVoidOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IVoidOrderParams, options?: TransactionOptions) => Promise<void>;
    };
    voidUserCancelOrder: {
        (params: IVoidUserCancelOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IVoidUserCancelOrderParams, options?: TransactionOptions) => Promise<void>;
    };
    withdrawUnexecutedOrder: {
        (orderId: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (orderId: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    withdrawlTrollFee: {
        (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_BridgeVault2 {
    interface AddLiquidityEvent {
        provider: string;
        amount: BigNumber;
        mintAmount: BigNumber;
        newBalance: BigNumber;
        newLpAssetBalance: BigNumber;
        _event: Event;
    }
    interface AmendOrderRequestEvent {
        orderId: BigNumber;
        amendment: BigNumber;
        order: {
            peerChain: BigNumber;
            inAmount: BigNumber;
            outToken: string;
            minOutAmount: BigNumber;
            to: string;
            expire: BigNumber;
        };
        _event: Event;
    }
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface NewOrderEvent {
        orderId: BigNumber;
        owner: string;
        order: {
            peerChain: BigNumber;
            inAmount: BigNumber;
            outToken: string;
            minOutAmount: BigNumber;
            to: string;
            expire: BigNumber;
        };
        newImbalance: BigNumber;
        _event: Event;
    }
    interface OrderCanceledEvent {
        orderId: BigNumber;
        sender: string;
        signers: BigNumber[];
        canceledByOrderOwner: boolean;
        newImbalance: BigNumber;
        newProtocolFeeBalance: BigNumber;
        _event: Event;
    }
    interface RebalanceEvent {
        rebalancer: string;
        amount: BigNumber;
        newImbalance: BigNumber;
        _event: Event;
    }
    interface RemoveLiquidityEvent {
        provider: string;
        amount: BigNumber;
        newPendingWithdrawal: BigNumber;
        _event: Event;
    }
    interface RemoveLiquidityRequestEvent {
        provider: string;
        amount: BigNumber;
        burnAmount: BigNumber;
        newBalance: BigNumber;
        newLpAssetBalance: BigNumber;
        newPendingWithdrawal: BigNumber;
        _event: Event;
    }
    interface RequestCancelOrderEvent {
        owner: string;
        sourceChainId: BigNumber;
        orderId: BigNumber;
        hashedOrderId: string;
        _event: Event;
    }
    interface RequestCancelOrderOnSourceChainEvent {
        orderId: BigNumber;
        _event: Event;
    }
    interface SwapEvent {
        orderId: BigNumber;
        sender: string;
        signers: BigNumber[];
        owner: string;
        amendment: BigNumber;
        order: {
            peerChain: BigNumber;
            inAmount: BigNumber;
            outToken: string;
            minOutAmount: BigNumber;
            to: string;
            expire: BigNumber;
        };
        outAmount: BigNumber;
        newImbalance: BigNumber;
        newLpAssetBalance: BigNumber;
        newProtocolFeeBalance: BigNumber;
        _event: Event;
    }
    interface SyncEvent {
        excess: BigNumber;
        newProtocolFeeBalance: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
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
    interface VoidOrderEvent {
        orderId: string;
        sender: string;
        signers: BigNumber[];
        _event: Event;
    }
    interface VoidUserCancelOrderEvent {
        orderId: BigNumber;
        signers: BigNumber[];
        _event: Event;
    }
    interface WithdrawUnexecutedOrderEvent {
        owner: string;
        orderId: BigNumber;
        newImbalance: BigNumber;
        _event: Event;
    }
    interface WithdrawlTrollFeeEvent {
        feeTo: string;
        amount: BigNumber;
        newProtocolFeeBalance: BigNumber;
        _event: Event;
    }
}
