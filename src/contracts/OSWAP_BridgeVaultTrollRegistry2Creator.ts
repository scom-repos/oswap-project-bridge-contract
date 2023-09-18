import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_BridgeVaultTrollRegistry2Creator.json";
export interface INewVaultRegistryParams {projectId:number|BigNumber;asset:string;bridgeVault:string}
export class OSWAP_BridgeVaultTrollRegistry2Creator extends _Contract{
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
    newVaultRegistry: {
        (params: INewVaultRegistryParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewVaultRegistryParams, options?: TransactionOptions) => Promise<string>;
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
        let newVaultRegistryParams = (params: INewVaultRegistryParams) => [this.wallet.utils.toString(params.projectId),params.asset,params.bridgeVault];
        let newVaultRegistry_send = async (params: INewVaultRegistryParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newVaultRegistry',newVaultRegistryParams(params),options);
            return result;
        }
        let newVaultRegistry_call = async (params: INewVaultRegistryParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newVaultRegistry',newVaultRegistryParams(params),options);
            return result;
        }
        this.newVaultRegistry = Object.assign(newVaultRegistry_send, {
            call:newVaultRegistry_call
        });
    }
}