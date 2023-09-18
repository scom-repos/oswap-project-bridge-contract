import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    trollRegistry: string;
    names: string[];
    minExeDelay: (number | BigNumber)[];
    minVoteDuration: (number | BigNumber)[];
    maxVoteDuration: (number | BigNumber)[];
    minGovTokenToCreateVote: (number | BigNumber)[];
    minQuorum: (number | BigNumber)[];
}
export interface IAddVotingConfigParams {
    name: string;
    minExeDelay: number | BigNumber;
    minVoteDuration: number | BigNumber;
    maxVoteDuration: number | BigNumber;
    minGovTokenToCreateVote: number | BigNumber;
    minQuorum: number | BigNumber;
}
export interface IGetVotingConfigProfilesParams {
    start: number | BigNumber;
    length: number | BigNumber;
}
export interface IGetVotingsParams {
    start: number | BigNumber;
    count: number | BigNumber;
}
export interface INewVoteParams {
    vote: string;
    isExecutiveVote: boolean;
}
export interface ISetVotingConfigParams {
    configName: string;
    paramName: string;
    paramValue: number | BigNumber;
}
export interface ISetVotingExecutorParams {
    votingExecutor: string;
    bool: boolean;
}
export interface IVotedParams {
    poll: boolean;
    account: string;
    option: number | BigNumber;
}
export declare class OSWAP_VotingManager extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAddVotingConfigEvent(receipt: TransactionReceipt): OSWAP_VotingManager.AddVotingConfigEvent[];
    decodeAddVotingConfigEvent(event: Event): OSWAP_VotingManager.AddVotingConfigEvent;
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_VotingManager.AuthorizeEvent[];
    decodeAuthorizeEvent(event: Event): OSWAP_VotingManager.AuthorizeEvent;
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_VotingManager.DeauthorizeEvent[];
    decodeDeauthorizeEvent(event: Event): OSWAP_VotingManager.DeauthorizeEvent;
    parseExecutedEvent(receipt: TransactionReceipt): OSWAP_VotingManager.ExecutedEvent[];
    decodeExecutedEvent(event: Event): OSWAP_VotingManager.ExecutedEvent;
    parseNewPollEvent(receipt: TransactionReceipt): OSWAP_VotingManager.NewPollEvent[];
    decodeNewPollEvent(event: Event): OSWAP_VotingManager.NewPollEvent;
    parseNewVoteEvent(receipt: TransactionReceipt): OSWAP_VotingManager.NewVoteEvent[];
    decodeNewVoteEvent(event: Event): OSWAP_VotingManager.NewVoteEvent;
    parseParamSetEvent(receipt: TransactionReceipt): OSWAP_VotingManager.ParamSetEvent[];
    decodeParamSetEvent(event: Event): OSWAP_VotingManager.ParamSetEvent;
    parseParamSet2Event(receipt: TransactionReceipt): OSWAP_VotingManager.ParamSet2Event[];
    decodeParamSet2Event(event: Event): OSWAP_VotingManager.ParamSet2Event;
    parsePollEvent(receipt: TransactionReceipt): OSWAP_VotingManager.PollEvent[];
    decodePollEvent(event: Event): OSWAP_VotingManager.PollEvent;
    parseSetVotingConfigEvent(receipt: TransactionReceipt): OSWAP_VotingManager.SetVotingConfigEvent[];
    decodeSetVotingConfigEvent(event: Event): OSWAP_VotingManager.SetVotingConfigEvent;
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_VotingManager.StartOwnershipTransferEvent[];
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_VotingManager.StartOwnershipTransferEvent;
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_VotingManager.TransferOwnershipEvent[];
    decodeTransferOwnershipEvent(event: Event): OSWAP_VotingManager.TransferOwnershipEvent;
    parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_VotingManager.UpgradeEvent[];
    decodeUpgradeEvent(event: Event): OSWAP_VotingManager.UpgradeEvent;
    parseVetoEvent(receipt: TransactionReceipt): OSWAP_VotingManager.VetoEvent[];
    decodeVetoEvent(event: Event): OSWAP_VotingManager.VetoEvent;
    parseVoteEvent(receipt: TransactionReceipt): OSWAP_VotingManager.VoteEvent[];
    decodeVoteEvent(event: Event): OSWAP_VotingManager.VoteEvent;
    addVotingConfig: {
        (params: IAddVotingConfigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddVotingConfigParams, options?: TransactionOptions) => Promise<void>;
    };
    admin: {
        (options?: TransactionOptions): Promise<string>;
    };
    allVotings: {
        (options?: TransactionOptions): Promise<string[]>;
    };
    closeVote: {
        (vote: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (vote: string, options?: TransactionOptions) => Promise<void>;
    };
    deny: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    executed: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    getNewVoteId: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<BigNumber>;
    };
    getVotingConfigProfiles: {
        (params: IGetVotingConfigProfilesParams, options?: TransactionOptions): Promise<string[]>;
    };
    getVotingCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    getVotingParams: {
        (name: string, options?: TransactionOptions): Promise<{
            minExeDelay: BigNumber;
            minVoteDuration: BigNumber;
            maxVoteDuration: BigNumber;
            minGovTokenToCreateVote: BigNumber;
            minQuorum: BigNumber;
        }>;
    };
    getVotings: {
        (params: IGetVotingsParams, options?: TransactionOptions): Promise<string[]>;
    };
    govToken: {
        (options?: TransactionOptions): Promise<string>;
    };
    initAdmin: {
        (admin: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (admin: string, options?: TransactionOptions) => Promise<void>;
    };
    initVotingExecutor: {
        (votingExecutor: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingExecutor: string[], options?: TransactionOptions) => Promise<void>;
    };
    isPermitted: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    isVotingContract: {
        (votingContract: string, options?: TransactionOptions): Promise<boolean>;
    };
    isVotingExecutor: {
        (param1: string, options?: TransactionOptions): Promise<boolean>;
    };
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    };
    newVote: {
        (params: INewVoteParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewVoteParams, options?: TransactionOptions) => Promise<void>;
    };
    newVotingExecutorManager: {
        (options?: TransactionOptions): Promise<string>;
    };
    newVotingManager: {
        (options?: TransactionOptions): Promise<string>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    permit: {
        (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user: string, options?: TransactionOptions) => Promise<void>;
    };
    setAdmin: {
        (admin: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (admin: string, options?: TransactionOptions) => Promise<void>;
    };
    setVotingConfig: {
        (params: ISetVotingConfigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetVotingConfigParams, options?: TransactionOptions) => Promise<void>;
    };
    setVotingExecutor: {
        (params: ISetVotingExecutorParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetVotingExecutorParams, options?: TransactionOptions) => Promise<void>;
    };
    setVotingRegister: {
        (votingRegister: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingRegister: string, options?: TransactionOptions) => Promise<void>;
    };
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    transferOwnership: {
        (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
    };
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    };
    updateWeight: {
        (account: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account: string, options?: TransactionOptions) => Promise<void>;
    };
    upgrade: {
        (votingManager: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingManager: string, options?: TransactionOptions) => Promise<void>;
    };
    upgradeByAdmin: {
        (votingManager: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingManager: string, options?: TransactionOptions) => Promise<void>;
    };
    veto: {
        (voting: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (voting: string, options?: TransactionOptions) => Promise<void>;
    };
    voteCount: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    voted: {
        (params: IVotedParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IVotedParams, options?: TransactionOptions) => Promise<void>;
    };
    votingConfigProfiles: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    votingConfigProfilesLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    votingConfigs: {
        (param1: string, options?: TransactionOptions): Promise<{
            minExeDelay: BigNumber;
            minVoteDuration: BigNumber;
            maxVoteDuration: BigNumber;
            minGovTokenToCreateVote: BigNumber;
            minQuorum: BigNumber;
        }>;
    };
    votingExecutor: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    votingExecutorInv: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    votingExecutorLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    votingIdx: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    votingRegister: {
        (options?: TransactionOptions): Promise<string>;
    };
    votings: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    private assign;
}
export declare module OSWAP_VotingManager {
    interface AddVotingConfigEvent {
        name: string;
        minExeDelay: BigNumber;
        minVoteDuration: BigNumber;
        maxVoteDuration: BigNumber;
        minGovTokenToCreateVote: BigNumber;
        minQuorum: BigNumber;
        _event: Event;
    }
    interface AuthorizeEvent {
        user: string;
        _event: Event;
    }
    interface DeauthorizeEvent {
        user: string;
        _event: Event;
    }
    interface ExecutedEvent {
        vote: string;
        _event: Event;
    }
    interface NewPollEvent {
        poll: string;
        _event: Event;
    }
    interface NewVoteEvent {
        vote: string;
        _event: Event;
    }
    interface ParamSetEvent {
        name: string;
        value: string;
        _event: Event;
    }
    interface ParamSet2Event {
        name: string;
        value1: string;
        value2: string;
        _event: Event;
    }
    interface PollEvent {
        account: string;
        poll: string;
        option: BigNumber;
        _event: Event;
    }
    interface SetVotingConfigEvent {
        configName: string;
        paramName: string;
        minExeDelay: BigNumber;
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
    interface UpgradeEvent {
        newVotingManager: string;
        _event: Event;
    }
    interface VetoEvent {
        vote: string;
        _event: Event;
    }
    interface VoteEvent {
        account: string;
        vote: string;
        option: BigNumber;
        _event: Event;
    }
}
