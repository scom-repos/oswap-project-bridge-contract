import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_BridgeVault2Creator.json";
export class OSWAP_BridgeVault2Creator extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(projectRegistry:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([projectRegistry], options);
    }
    bytecodeHash: {
        (options?: TransactionOptions): Promise<string>;
    }
    getAddress: {
        (projectId:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    newVault: {
        (vaultRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (vaultRegistry:string, options?: TransactionOptions) => Promise<string>;
    }
    projectRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let bytecodeHash_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('bytecodeHash',[],options);
            return result;
        }
        this.bytecodeHash = bytecodeHash_call
        let getAddress_call = async (projectId:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getAddress',[this.wallet.utils.toString(projectId)],options);
            return result;
        }
        this.getAddress = getAddress_call
        let projectRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('projectRegistry',[],options);
            return result;
        }
        this.projectRegistry = projectRegistry_call
        let newVault_send = async (vaultRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newVault',[vaultRegistry],options);
            return result;
        }
        let newVault_call = async (vaultRegistry:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newVault',[vaultRegistry],options);
            return result;
        }
        this.newVault = Object.assign(newVault_send, {
            call:newVault_call
        });
    }
}