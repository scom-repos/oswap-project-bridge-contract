import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
export declare class OSWAP_VotingContract extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: {
        executor: string;
        id: number | BigNumber;
        name: string;
        options: string[];
        quorum: number | BigNumber;
        threshold: number | BigNumber;
        voteEndTime: number | BigNumber;
        executeDelay: number | BigNumber;
        executeParam: string[];
    }, options?: TransactionOptions): Promise<string>;
    accountVoteOption: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    accountVoteWeight: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    allExecuteParam: {
        (options?: TransactionOptions): Promise<string[]>;
    };
    allOptions: {
        (options?: TransactionOptions): Promise<string[]>;
    };
    allOptionsWeight: {
        (options?: TransactionOptions): Promise<BigNumber[]>;
    };
    execute: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    executeDelay: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    executeParam: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    executeParamLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    executed: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    executor: {
        (options?: TransactionOptions): Promise<string>;
    };
    getParams: {
        (options?: TransactionOptions): Promise<{
            executor: string;
            id: BigNumber;
            name: string;
            options: string[];
            voteStartTime: BigNumber;
            voteEndTime: BigNumber;
            executeDelay: BigNumber;
            status: boolean[];
            optionsWeight: BigNumber[];
            quorum: BigNumber[];
            executeParam: string[];
        }>;
    };
    id: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    name: {
        (options?: TransactionOptions): Promise<string>;
    };
    options: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    optionsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    optionsWeight: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    quorum: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    threshold: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    totalVoteWeight: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    totalWeight: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    updateWeight: {
        (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account: string, options?: TransactionOptions) => Promise<void>;
    };
    veto: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    vetoed: {
        (options?: TransactionOptions): Promise<boolean>;
    };
    vote: {
        (option: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (option: number | BigNumber, options?: TransactionOptions) => Promise<void>;
    };
    voteEndTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    voteStartTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    votingManager: {
        (options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
