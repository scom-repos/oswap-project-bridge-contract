import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export declare class OSWAP_BridgeVault2Creator extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(projectRegistry: string, options?: TransactionOptions): Promise<string>;
    bytecodeHash: {
        (options?: TransactionOptions): Promise<string>;
    };
    getAddress: {
        (projectId: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    newVault: {
        (vaultRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (vaultRegistry: string, options?: TransactionOptions) => Promise<string>;
    };
    projectRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
