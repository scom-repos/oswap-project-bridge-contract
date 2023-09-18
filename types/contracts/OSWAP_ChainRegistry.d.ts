import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAddChainParams {
    chainId: number | BigNumber;
    status: number | BigNumber;
    govToken: string;
    configStore: string;
    contractNames: string[];
    address: string[];
}
export interface IGetChainParams {
    chainId: number | BigNumber;
    contractnames: string[];
}
export interface IInitParams {
    chainId: (number | BigNumber)[];
    status: (number | BigNumber)[];
    govToken: string[];
    configStore: string[];
    mainChainContractNames: string[];
    mainChainContractAddress: string[];
    contractNames: string[];
    address: string[][];
    tokenNames: string[];
    vault: {
        token: string;
        vaultRegistry: string;
        bridgeVault: string;
    }[][];
}
export interface INewVaultParams {
    name: string;
    chainId: (number | BigNumber)[];
    vault: {
        token: string;
        vaultRegistry: string;
        bridgeVault: string;
    }[];
}
export interface ISideChainContractAddressParams {
    param1: number | BigNumber;
    param2: string;
}
export interface IUpdateAddressParams {
    chainId: number | BigNumber;
    contractName: string;
    address: string;
}
export interface IUpdateAddressesParams {
    chainId: number | BigNumber;
    contractNames: string[];
    addresses: string[];
}
export interface IUpdateConfigStoreParams {
    chainId: number | BigNumber;
    address: string;
}
export interface IUpdateMainChainAddressParams {
    contractName: string;
    address: string;
}
export interface IUpdateStatusParams {
    chainId: number | BigNumber;
    status: number | BigNumber;
}
export interface IUpdateVaultParams {
    index: number | BigNumber;
    chainId: number | BigNumber;
    vault: {
        token: string;
        vaultRegistry: string;
        bridgeVault: string;
    };
}
export interface IVaultsParams {
    param1: number | BigNumber;
    param2: number | BigNumber;
}
export declare class OSWAP_ChainRegistry extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(votingExecutorManager: string, options?: TransactionOptions): Promise<string>;
    parseNewChainEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.NewChainEvent[];
    decodeNewChainEvent(event: Event): OSWAP_ChainRegistry.NewChainEvent;
    parseUpdateAddressEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateAddressEvent[];
    decodeUpdateAddressEvent(event: Event): OSWAP_ChainRegistry.UpdateAddressEvent;
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateConfigStoreEvent[];
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_ChainRegistry.UpdateConfigStoreEvent;
    parseUpdateMainChainAddressEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateMainChainAddressEvent[];
    decodeUpdateMainChainAddressEvent(event: Event): OSWAP_ChainRegistry.UpdateMainChainAddressEvent;
    parseUpdateStatusEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateStatusEvent[];
    decodeUpdateStatusEvent(event: Event): OSWAP_ChainRegistry.UpdateStatusEvent;
    parseUpdateVaultEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateVaultEvent[];
    decodeUpdateVaultEvent(event: Event): OSWAP_ChainRegistry.UpdateVaultEvent;
    addChain: {
        (params: IAddChainParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddChainParams, options?: TransactionOptions) => Promise<void>;
    };
    allChains: {
        (options?: TransactionOptions): Promise<BigNumber[]>;
    };
    chains: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    chainsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    configStore: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    getChain: {
        (params: IGetChainParams, options?: TransactionOptions): Promise<{
            status: BigNumber;
            govToken: string;
            configStore: string;
            contracts: string[];
            vaults: {
                token: string;
                vaultRegistry: string;
                bridgeVault: string;
            }[];
        }>;
    };
    govToken: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    init: {
        (params: IInitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IInitParams, options?: TransactionOptions) => Promise<void>;
    };
    mainChainContractAddress: {
        (param1: string, options?: TransactionOptions): Promise<string>;
    };
    newVault: {
        (params: INewVaultParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewVaultParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    sideChainContractAddress: {
        (params: ISideChainContractAddressParams, options?: TransactionOptions): Promise<string>;
    };
    status: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    tokenNames: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    tokenNamesLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    updateAddress: {
        (params: IUpdateAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateAddressParams, options?: TransactionOptions) => Promise<void>;
    };
    updateAddresses: {
        (params: IUpdateAddressesParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateAddressesParams, options?: TransactionOptions) => Promise<void>;
    };
    updateConfigStore: {
        (params: IUpdateConfigStoreParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateConfigStoreParams, options?: TransactionOptions) => Promise<void>;
    };
    updateMainChainAddress: {
        (params: IUpdateMainChainAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateMainChainAddressParams, options?: TransactionOptions) => Promise<void>;
    };
    updateStatus: {
        (params: IUpdateStatusParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateStatusParams, options?: TransactionOptions) => Promise<void>;
    };
    updateVault: {
        (params: IUpdateVaultParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateVaultParams, options?: TransactionOptions) => Promise<void>;
    };
    vaults: {
        (params: IVaultsParams, options?: TransactionOptions): Promise<{
            token: string;
            vaultRegistry: string;
            bridgeVault: string;
        }>;
    };
    vaultsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    votingExecutorManager: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_ChainRegistry {
    interface NewChainEvent {
        chainId: BigNumber;
        status: BigNumber;
        govToken: string;
        _event: Event;
    }
    interface UpdateAddressEvent {
        chainId: BigNumber;
        contractName: string;
        address: string;
        _event: Event;
    }
    interface UpdateConfigStoreEvent {
        chainId: BigNumber;
        address: string;
        _event: Event;
    }
    interface UpdateMainChainAddressEvent {
        contractName: string;
        address: string;
        _event: Event;
    }
    interface UpdateStatusEvent {
        chainId: BigNumber;
        status: BigNumber;
        _event: Event;
    }
    interface UpdateVaultEvent {
        index: BigNumber;
        chainId: BigNumber;
        vault: {
            token: string;
            vaultRegistry: string;
            bridgeVault: string;
        };
        _event: Event;
    }
}
