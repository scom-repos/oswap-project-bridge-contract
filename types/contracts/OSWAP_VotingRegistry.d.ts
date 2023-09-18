import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export interface INewVoteParams {
    executor: string;
    name: string;
    options: string[];
    quorum: number | BigNumber;
    threshold: number | BigNumber;
    voteEndTime: number | BigNumber;
    executeDelay: number | BigNumber;
    executeParam: string[];
}
export declare class OSWAP_VotingRegistry extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(votingManager: string, options?: TransactionOptions): Promise<string>;
    newVote: {
        (params: INewVoteParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewVoteParams, options?: TransactionOptions) => Promise<void>;
    };
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    votingManager: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
