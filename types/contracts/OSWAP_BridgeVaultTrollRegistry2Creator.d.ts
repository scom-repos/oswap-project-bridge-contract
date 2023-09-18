import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface INewVaultRegistryParams {
    projectId: number | BigNumber;
    asset: string;
    bridgeVault: string;
}
export declare class OSWAP_BridgeVaultTrollRegistry2Creator extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(projectRegistry: string, options?: TransactionOptions): Promise<string>;
    bytecodeHash: {
        (options?: TransactionOptions): Promise<string>;
    };
    getAddress: {
        (projectId: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    newVaultRegistry: {
        (params: INewVaultRegistryParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewVaultRegistryParams, options?: TransactionOptions) => Promise<string>;
    };
    projectRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
