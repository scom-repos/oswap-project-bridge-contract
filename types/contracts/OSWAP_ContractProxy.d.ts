import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    logic: string;
    votingManager: string;
    data: string;
}
export interface IUpgradeToParams {
    oldImplementation: string;
    newImplementation: string;
    finalize: boolean;
}
export interface IUpgradeToAndCallParams {
    oldImplementation: string;
    newImplementation: string;
    data: string;
    finalize: boolean;
}
export declare class OSWAP_ContractProxy extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: number | BigNumber | TransactionOptions): Promise<string>;
    parseAdminChangedEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.AdminChangedEvent[];
    decodeAdminChangedEvent(event: Event): OSWAP_ContractProxy.AdminChangedEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): OSWAP_ContractProxy.AuthorizeEvent;
    parseBeaconUpgradedEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.BeaconUpgradedEvent[];
    decodeBeaconUpgradedEvent(event: Event): OSWAP_ContractProxy.BeaconUpgradedEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): OSWAP_ContractProxy.DeauthorizeEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_ContractProxy.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): OSWAP_ContractProxy.TransferOwnershipEvent;
    parseUpgradedEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.UpgradedEvent[];
    decodeUpgradedEvent(event: Event): OSWAP_ContractProxy.UpgradedEvent;
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    implementation: {
        (options?: TransactionOptions): Promise<string>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
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
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    upgradeTo: {
        (params: IUpgradeToParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpgradeToParams, options?: TransactionOptions) => Promise<void>;
    };
    upgradeToAndCall: {
        (params: IUpgradeToAndCallParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpgradeToAndCallParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module OSWAP_ContractProxy {
    interface AdminChangedEvent {
        previousAdmin: string;
        newAdmin: string;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface BeaconUpgradedEvent {
        beacon: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
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
    interface UpgradedEvent {
        implementation: string;
        _event: Event;
    }
}
