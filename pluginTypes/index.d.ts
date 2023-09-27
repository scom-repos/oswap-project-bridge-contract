/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/Authorization.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/Authorization.json.ts" {
    const _default: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/Authorization.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/Authorization.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, Event, TransactionOptions } from "@ijstech/eth-contract";
    export class Authorization extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseAuthorizeEvent(receipt: TransactionReceipt): Authorization.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): Authorization.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): Authorization.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): Authorization.DeauthorizeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): Authorization.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): Authorization.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): Authorization.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): Authorization.TransferOwnershipEvent;
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
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
        private assign;
    }
    export module Authorization {
        interface AuthorizeEvent {
            user: string;
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
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/MOCK_TrollRegistry.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/MOCK_TrollRegistry.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/MOCK_TrollRegistry.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/MOCK_TrollRegistry.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAddTrollParams {
        signatures: string[];
        trollProfileIndex: number | BigNumber;
        troll: string;
        isSuperTroll: boolean;
        nonce: number | BigNumber;
    }
    export interface IIsGeneralTrollParams {
        troll: string;
        returnFalseIfBlocked: boolean;
    }
    export interface IIsGeneralTrollByIndexParams {
        trollProfileIndex: number | BigNumber;
        returnFalseIfBlocked: boolean;
    }
    export interface IIsSuperTrollParams {
        troll: string;
        returnFalseIfBlocked: boolean;
    }
    export interface IIsSuperTrollByIndexParams {
        trollProfileIndex: number | BigNumber;
        returnFalseIfBlocked: boolean;
    }
    export interface IRemoveTrollParams {
        signatures: string[];
        trollProfileIndex: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface ISetVotingExecutorParams {
        votingExecutor: string;
        bool: boolean;
    }
    export interface IUnlockGeneralTrollParams {
        signatures: string[];
        trollProfileIndex: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface IUnlockSuperTrollParams {
        signatures: string[];
        trollProfileIndex: number | BigNumber;
        unlock: boolean;
        vaultRegistry: string[];
        penalty: (number | BigNumber)[];
        nonce: number | BigNumber;
    }
    export interface IUpdateTrollParams {
        signatures: string[];
        trollProfileIndex: number | BigNumber;
        newTroll: string;
        nonce: number | BigNumber;
    }
    export class MOCK_TrollRegistry extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(govToken: string, options?: TransactionOptions): Promise<string>;
        parseAddTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.AddTrollEvent[];
        decodeAddTrollEvent(event: Event): MOCK_TrollRegistry.AddTrollEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): MOCK_TrollRegistry.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): MOCK_TrollRegistry.DeauthorizeEvent;
        parseDelistTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.DelistTrollEvent[];
        decodeDelistTrollEvent(event: Event): MOCK_TrollRegistry.DelistTrollEvent;
        parseLockGeneralTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.LockGeneralTrollEvent[];
        decodeLockGeneralTrollEvent(event: Event): MOCK_TrollRegistry.LockGeneralTrollEvent;
        parseLockSuperTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.LockSuperTrollEvent[];
        decodeLockSuperTrollEvent(event: Event): MOCK_TrollRegistry.LockSuperTrollEvent;
        parseParamSetEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.ParamSetEvent[];
        decodeParamSetEvent(event: Event): MOCK_TrollRegistry.ParamSetEvent;
        parseParamSet2Event(receipt: TransactionReceipt): MOCK_TrollRegistry.ParamSet2Event[];
        decodeParamSet2Event(event: Event): MOCK_TrollRegistry.ParamSet2Event;
        parseRemoveTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.RemoveTrollEvent[];
        decodeRemoveTrollEvent(event: Event): MOCK_TrollRegistry.RemoveTrollEvent;
        parseResumeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.ResumeEvent[];
        decodeResumeEvent(event: Event): MOCK_TrollRegistry.ResumeEvent;
        parseSetVotingExecutorEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.SetVotingExecutorEvent[];
        decodeSetVotingExecutorEvent(event: Event): MOCK_TrollRegistry.SetVotingExecutorEvent;
        parseShutdownEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.ShutdownEvent[];
        decodeShutdownEvent(event: Event): MOCK_TrollRegistry.ShutdownEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): MOCK_TrollRegistry.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): MOCK_TrollRegistry.TransferOwnershipEvent;
        parseUnlockGeneralTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UnlockGeneralTrollEvent[];
        decodeUnlockGeneralTrollEvent(event: Event): MOCK_TrollRegistry.UnlockGeneralTrollEvent;
        parseUnlockSuperTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UnlockSuperTrollEvent[];
        decodeUnlockSuperTrollEvent(event: Event): MOCK_TrollRegistry.UnlockSuperTrollEvent;
        parseUpdateConfigStoreEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpdateConfigStoreEvent[];
        decodeUpdateConfigStoreEvent(event: Event): MOCK_TrollRegistry.UpdateConfigStoreEvent;
        parseUpdateTrollEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpdateTrollEvent[];
        decodeUpdateTrollEvent(event: Event): MOCK_TrollRegistry.UpdateTrollEvent;
        parseUpgradeEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpgradeEvent[];
        decodeUpgradeEvent(event: Event): MOCK_TrollRegistry.UpgradeEvent;
        parseUpgradeVotingManagerEvent(receipt: TransactionReceipt): MOCK_TrollRegistry.UpgradeVotingManagerEvent[];
        decodeUpgradeVotingManagerEvent(event: Event): MOCK_TrollRegistry.UpgradeVotingManagerEvent;
        addTroll: {
            (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        generalTrollCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        initAddress: {
            (configStore: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (configStore: string, options?: TransactionOptions) => Promise<void>;
        };
        isGeneralTroll: {
            (params: IIsGeneralTrollParams, options?: TransactionOptions): Promise<boolean>;
        };
        isGeneralTrollByIndex: {
            (params: IIsGeneralTrollByIndexParams, options?: TransactionOptions): Promise<boolean>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        isSuperTroll: {
            (params: IIsSuperTrollParams, options?: TransactionOptions): Promise<boolean>;
        };
        isSuperTrollByIndex: {
            (params: IIsSuperTrollByIndexParams, options?: TransactionOptions): Promise<boolean>;
        };
        isVotingExecutor: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        lockGeneralTroll: {
            (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (trollProfileIndex: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        lockSuperTroll: {
            (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (trollProfileIndex: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        newTrollRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        newVotingManager: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        paused: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        removeTroll: {
            (params: IRemoveTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        resume: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        setVotingExecutor: {
            (params: ISetVotingExecutorParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetVotingExecutorParams, options?: TransactionOptions) => Promise<void>;
        };
        shutdownByAdmin: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        shutdownByVoting: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        superTrollCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        trollProfileInv: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        trollProfiles: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                troll: string;
                trollType: BigNumber;
            }>;
        };
        trollRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        unlockGeneralTroll: {
            (params: IUnlockGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnlockGeneralTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        unlockSuperTroll: {
            (params: IUnlockSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnlockSuperTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        updateConfigStore: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        updateTroll: {
            (params: IUpdateTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        upgradeTrollRegistry: {
            (trollRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (trollRegistry: string, options?: TransactionOptions) => Promise<void>;
        };
        upgradeTrollRegistryByAdmin: {
            (trollRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (trollRegistry: string, options?: TransactionOptions) => Promise<void>;
        };
        upgradeVotingManager: {
            (votingManager: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (votingManager: string, options?: TransactionOptions) => Promise<void>;
        };
        upgradeVotingManagerByAdmin: {
            (votingManager: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (votingManager: string, options?: TransactionOptions) => Promise<void>;
        };
        usedNonce: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<boolean>;
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
        private assign;
    }
    export module MOCK_TrollRegistry {
        interface AddTrollEvent {
            troll: string;
            trollProfileIndex: BigNumber;
            isSuperTroll: boolean;
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
        interface DelistTrollEvent {
            trollProfileIndex: BigNumber;
            _event: Event;
        }
        interface LockGeneralTrollEvent {
            trollProfileIndex: BigNumber;
            lockedBy: string;
            _event: Event;
        }
        interface LockSuperTrollEvent {
            trollProfileIndex: BigNumber;
            lockedBy: string;
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
        interface RemoveTrollEvent {
            trollProfileIndex: BigNumber;
            _event: Event;
        }
        interface ResumeEvent {
            _event: Event;
        }
        interface SetVotingExecutorEvent {
            newVotingExecutor: string;
            isActive: boolean;
            _event: Event;
        }
        interface ShutdownEvent {
            account: string;
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
        interface UnlockGeneralTrollEvent {
            trollProfileIndex: BigNumber;
            _event: Event;
        }
        interface UnlockSuperTrollEvent {
            trollProfileIndex: BigNumber;
            unlock: boolean;
            bridgeVault: string;
            penalty: BigNumber;
            _event: Event;
        }
        interface UpdateConfigStoreEvent {
            newConfigStore: string;
            _event: Event;
        }
        interface UpdateTrollEvent {
            trollProfileIndex: BigNumber;
            oldTroll: string;
            newTroll: string;
            _event: Event;
        }
        interface UpgradeEvent {
            newTrollRegistry: string;
            _event: Event;
        }
        interface UpgradeVotingManagerEvent {
            newVotingManager: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/MintableToken.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/MintableToken.json.ts" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/MintableToken.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/MintableToken.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IBurnFromParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        account: string;
        amount: number | BigNumber;
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
    export class MintableToken extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): MintableToken.ApprovalEvent[];
        decodeApprovalEvent(event: Event): MintableToken.ApprovalEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): MintableToken.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): MintableToken.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): MintableToken.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): MintableToken.DeauthorizeEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): MintableToken.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): MintableToken.StartOwnershipTransferEvent;
        parseTransferEvent(receipt: TransactionReceipt): MintableToken.TransferEvent[];
        decodeTransferEvent(event: Event): MintableToken.TransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): MintableToken.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): MintableToken.TransferOwnershipEvent;
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        burn: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        burnFrom: {
            (params: IBurnFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IBurnFromParams, options?: TransactionOptions) => Promise<void>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        mint: {
            (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintParams, options?: TransactionOptions) => Promise<boolean>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
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
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
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
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module MintableToken {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
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
        interface StartOwnershipTransferEvent {
            user: string;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferOwnershipEvent {
            user: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/MockErc20.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/MockErc20.json.ts" {
    const _default_3: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/MockErc20.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/MockErc20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        name: string;
        symbol: string;
        decimals: number | BigNumber;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IBurnFromParams {
        account: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IGetRoleMemberParams {
        role: string;
        index: number | BigNumber;
    }
    export interface IGrantRoleParams {
        role: string;
        account: string;
    }
    export interface IHasRoleParams {
        role: string;
        account: string;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface IMintParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface IRenounceRoleParams {
        role: string;
        account: string;
    }
    export interface IRevokeRoleParams {
        role: string;
        account: string;
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
    export class MockErc20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): MockErc20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): MockErc20.ApprovalEvent;
        parsePausedEvent(receipt: TransactionReceipt): MockErc20.PausedEvent[];
        decodePausedEvent(event: Event): MockErc20.PausedEvent;
        parseRoleAdminChangedEvent(receipt: TransactionReceipt): MockErc20.RoleAdminChangedEvent[];
        decodeRoleAdminChangedEvent(event: Event): MockErc20.RoleAdminChangedEvent;
        parseRoleGrantedEvent(receipt: TransactionReceipt): MockErc20.RoleGrantedEvent[];
        decodeRoleGrantedEvent(event: Event): MockErc20.RoleGrantedEvent;
        parseRoleRevokedEvent(receipt: TransactionReceipt): MockErc20.RoleRevokedEvent[];
        decodeRoleRevokedEvent(event: Event): MockErc20.RoleRevokedEvent;
        parseTransferEvent(receipt: TransactionReceipt): MockErc20.TransferEvent[];
        decodeTransferEvent(event: Event): MockErc20.TransferEvent;
        parseUnpausedEvent(receipt: TransactionReceipt): MockErc20.UnpausedEvent[];
        decodeUnpausedEvent(event: Event): MockErc20.UnpausedEvent;
        DEFAULT_ADMIN_ROLE: {
            (options?: TransactionOptions): Promise<string>;
        };
        MINTER_ROLE: {
            (options?: TransactionOptions): Promise<string>;
        };
        PAUSER_ROLE: {
            (options?: TransactionOptions): Promise<string>;
        };
        allowance: {
            (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
        };
        balanceOf: {
            (account: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        burn: {
            (amount: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (amount: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        burnFrom: {
            (params: IBurnFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IBurnFromParams, options?: TransactionOptions) => Promise<void>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        getRoleAdmin: {
            (role: string, options?: TransactionOptions): Promise<string>;
        };
        getRoleMember: {
            (params: IGetRoleMemberParams, options?: TransactionOptions): Promise<string>;
        };
        getRoleMemberCount: {
            (role: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        grantRole: {
            (params: IGrantRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IGrantRoleParams, options?: TransactionOptions) => Promise<void>;
        };
        hasRole: {
            (params: IHasRoleParams, options?: TransactionOptions): Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
        };
        mint: {
            (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IMintParams, options?: TransactionOptions) => Promise<void>;
        };
        name: {
            (options?: TransactionOptions): Promise<string>;
        };
        pause: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        paused: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        renounceRole: {
            (params: IRenounceRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRenounceRoleParams, options?: TransactionOptions) => Promise<void>;
        };
        revokeRole: {
            (params: IRevokeRoleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRevokeRoleParams, options?: TransactionOptions) => Promise<void>;
        };
        supportsInterface: {
            (interfaceId: string, options?: TransactionOptions): Promise<boolean>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
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
        unpause: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module MockErc20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface PausedEvent {
            account: string;
            _event: Event;
        }
        interface RoleAdminChangedEvent {
            role: string;
            previousAdminRole: string;
            newAdminRole: string;
            _event: Event;
        }
        interface RoleGrantedEvent {
            role: string;
            account: string;
            sender: string;
            _event: Event;
        }
        interface RoleRevokedEvent {
            role: string;
            account: string;
            sender: string;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
        interface UnpausedEvent {
            account: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry.json.ts" {
    const _default_4: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_4;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IHashUnstakeRequestParams {
        backer: string;
        trollProfileIndex: number | BigNumber;
        shares: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface IPenalizeSuperTrollParams {
        trollProfileIndex: number | BigNumber;
        amount: number | BigNumber;
    }
    export interface IStakeParams {
        trollProfileIndex: number | BigNumber;
        amount: number | BigNumber;
    }
    export interface IStakedByParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IStakedByInvParams {
        param1: number | BigNumber;
        param2: string;
    }
    export interface IUnstakeParams {
        backer: string;
        shares: number | BigNumber;
    }
    export interface IUnstakeApproveParams {
        signatures: string[];
        backer: string;
        trollProfileIndex: number | BigNumber;
        shares: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface IVerifyStakedValueParams {
        msgSender: string;
        signatures: string[];
        paramsHash: string;
    }
    export class OSWAP_BridgeVaultTrollRegistry extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(trollRegistry: string, options?: TransactionOptions): Promise<string>;
        parsePenaltyEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.PenaltyEvent[];
        decodePenaltyEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.PenaltyEvent;
        parseStakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.StakeEvent[];
        decodeStakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.StakeEvent;
        parseUnstakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UnstakeEvent[];
        decodeUnstakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UnstakeEvent;
        parseUnstakeApprovalEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UnstakeApprovalEvent[];
        decodeUnstakeApprovalEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UnstakeApprovalEvent;
        parseUnstakeRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent[];
        decodeUnstakeRequestEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UnstakeRequestEvent;
        parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UpdateConfigStoreEvent[];
        decodeUpdateConfigStoreEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UpdateConfigStoreEvent;
        parseUpdateTrollRegistryEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry.UpdateTrollRegistryEvent[];
        decodeUpdateTrollRegistryEvent(event: Event): OSWAP_BridgeVaultTrollRegistry.UpdateTrollRegistryEvent;
        backerStakes: {
            (param1: string, options?: TransactionOptions): Promise<{
                trollProfileIndex: BigNumber;
                shares: BigNumber;
                pendingWithdrawal: BigNumber;
                approvedWithdrawal: BigNumber;
            }>;
        };
        bridgeVault: {
            (options?: TransactionOptions): Promise<string>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        getBackers: {
            (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<string[]>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        hashUnstakeRequest: {
            (params: IHashUnstakeRequestParams, options?: TransactionOptions): Promise<string>;
        };
        initAddress: {
            (bridgeVault: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (bridgeVault: string, options?: TransactionOptions) => Promise<void>;
        };
        lastTrollTxCount: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        maxWithdrawal: {
            (backer: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        penalizeSuperTroll: {
            (params: IPenalizeSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPenalizeSuperTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        stake: {
            (params: IStakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IStakeParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        stakedBy: {
            (params: IStakedByParams, options?: TransactionOptions): Promise<string>;
        };
        stakedByInv: {
            (params: IStakedByInvParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        stakedByLength: {
            (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        transactionsCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        trollRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        trollStakesBalances: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        trollStakesTotalShares: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        unstake: {
            (params: IUnstakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnstakeParams, options?: TransactionOptions) => Promise<void>;
        };
        unstakeApprove: {
            (params: IUnstakeApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnstakeApproveParams, options?: TransactionOptions) => Promise<void>;
        };
        unstakeRequest: {
            (shares: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (shares: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        updateConfigStore: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        updateTrollRegistry: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        usedNonce: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        verifyStakedValue: {
            (params: IVerifyStakedValueParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IVerifyStakedValueParams, options?: TransactionOptions) => Promise<{
                superTrollCount: BigNumber;
                totalStake: BigNumber;
                signers: BigNumber[];
            }>;
        };
        private assign;
    }
    export module OSWAP_BridgeVaultTrollRegistry {
        interface PenaltyEvent {
            trollProfileIndex: BigNumber;
            amount: BigNumber;
            _event: Event;
        }
        interface StakeEvent {
            backer: string;
            trollProfileIndex: BigNumber;
            amount: BigNumber;
            shares: BigNumber;
            backerBalance: BigNumber;
            trollBalance: BigNumber;
            totalShares: BigNumber;
            _event: Event;
        }
        interface UnstakeEvent {
            backer: string;
            trollProfileIndex: BigNumber;
            amount: BigNumber;
            shares: BigNumber;
            approvalDecrement: BigNumber;
            trollBalance: BigNumber;
            totalShares: BigNumber;
            _event: Event;
        }
        interface UnstakeApprovalEvent {
            backer: string;
            msgSender: string;
            signers: BigNumber[];
            shares: BigNumber;
            _event: Event;
        }
        interface UnstakeRequestEvent {
            backer: string;
            trollProfileIndex: BigNumber;
            shares: BigNumber;
            backerBalance: BigNumber;
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
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry2.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry2.json.ts" {
    const _default_5: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_5;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry2.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry2.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IHashUnstakeRequestParams {
        backer: string;
        trollProfileIndex: number | BigNumber;
        shares: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface IInitParams {
        projectRegistry: string;
        projectId: number | BigNumber;
        bondToken: string;
        bridgeVault: string;
    }
    export interface IPenalizeTrollParams {
        trollProfileIndex: number | BigNumber;
        amount: number | BigNumber;
    }
    export interface IStakeParams {
        trollProfileIndex: number | BigNumber;
        amount: number | BigNumber;
    }
    export interface IStakedByParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IStakedByInvParams {
        param1: number | BigNumber;
        param2: string;
    }
    export interface IUnstakeParams {
        backer: string;
        shares: number | BigNumber;
    }
    export interface IUnstakeApproveParams {
        signatures: string[];
        backer: string;
        trollProfileIndex: number | BigNumber;
        shares: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface IVerifyStakedValueParams {
        msgSender: string;
        signatures: string[];
        paramsHash: string;
    }
    export class OSWAP_BridgeVaultTrollRegistry2 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parsePenaltyEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.PenaltyEvent[];
        decodePenaltyEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.PenaltyEvent;
        parseStakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.StakeEvent[];
        decodeStakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.StakeEvent;
        parseUnstakeEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UnstakeEvent[];
        decodeUnstakeEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UnstakeEvent;
        parseUnstakeApprovalEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UnstakeApprovalEvent[];
        decodeUnstakeApprovalEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UnstakeApprovalEvent;
        parseUnstakeRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UnstakeRequestEvent[];
        decodeUnstakeRequestEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UnstakeRequestEvent;
        parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UpdateConfigStoreEvent[];
        decodeUpdateConfigStoreEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UpdateConfigStoreEvent;
        parseUpdateTrollRegistryEvent(receipt: TransactionReceipt): OSWAP_BridgeVaultTrollRegistry2.UpdateTrollRegistryEvent[];
        decodeUpdateTrollRegistryEvent(event: Event): OSWAP_BridgeVaultTrollRegistry2.UpdateTrollRegistryEvent;
        backerStakes: {
            (param1: string, options?: TransactionOptions): Promise<{
                trollProfileIndex: BigNumber;
                shares: BigNumber;
                pendingWithdrawal: BigNumber;
                approvedWithdrawal: BigNumber;
            }>;
        };
        bondToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        bridgeVault: {
            (options?: TransactionOptions): Promise<string>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        getBackers: {
            (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<string[]>;
        };
        hashUnstakeRequest: {
            (params: IHashUnstakeRequestParams, options?: TransactionOptions): Promise<string>;
        };
        init: {
            (params: IInitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitParams, options?: TransactionOptions) => Promise<void>;
        };
        maxWithdrawal: {
            (backer: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        penalizeTroll: {
            (params: IPenalizeTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IPenalizeTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        projectId: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        projectRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        stake: {
            (params: IStakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IStakeParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        stakedBy: {
            (params: IStakedByParams, options?: TransactionOptions): Promise<string>;
        };
        stakedByInv: {
            (params: IStakedByInvParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        stakedByLength: {
            (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        trollRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        trollStakesBalances: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        trollStakesTotalShares: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        unstake: {
            (params: IUnstakeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnstakeParams, options?: TransactionOptions) => Promise<void>;
        };
        unstakeApprove: {
            (params: IUnstakeApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnstakeApproveParams, options?: TransactionOptions) => Promise<void>;
        };
        unstakeRequest: {
            (shares: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (shares: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        updateConfigStore: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        updateTrollRegistry: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        usedNonce: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        verifyStakedValue: {
            (params: IVerifyStakedValueParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IVerifyStakedValueParams, options?: TransactionOptions) => Promise<{
                superTrollCount: BigNumber;
                totalStake: BigNumber;
                signers: BigNumber[];
            }>;
        };
        private assign;
    }
    export module OSWAP_BridgeVaultTrollRegistry2 {
        interface PenaltyEvent {
            trollProfileIndex: BigNumber;
            amount: BigNumber;
            _event: Event;
        }
        interface StakeEvent {
            backer: string;
            trollProfileIndex: BigNumber;
            amount: BigNumber;
            shares: BigNumber;
            backerBalance: BigNumber;
            trollBalance: BigNumber;
            totalShares: BigNumber;
            _event: Event;
        }
        interface UnstakeEvent {
            backer: string;
            trollProfileIndex: BigNumber;
            amount: BigNumber;
            shares: BigNumber;
            approvalDecrement: BigNumber;
            trollBalance: BigNumber;
            totalShares: BigNumber;
            _event: Event;
        }
        interface UnstakeApprovalEvent {
            backer: string;
            msgSender: string;
            signers: BigNumber[];
            shares: BigNumber;
            _event: Event;
        }
        interface UnstakeRequestEvent {
            backer: string;
            trollProfileIndex: BigNumber;
            shares: BigNumber;
            backerBalance: BigNumber;
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
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry2Creator.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry2Creator.json.ts" {
    const _default_6: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_6;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry2Creator.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry2Creator.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface INewVaultRegistryParams {
        projectId: number | BigNumber;
        asset: string;
        bridgeVault: string;
    }
    export class OSWAP_BridgeVaultTrollRegistry2Creator extends _Contract {
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
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_ChainRegistry.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_ChainRegistry.json.ts" {
    const _default_7: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_7;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_ChainRegistry.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_ChainRegistry.ts" {
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
    export class OSWAP_ChainRegistry extends _Contract {
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
    export module OSWAP_ChainRegistry {
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
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_ChainRegistryExecutor.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_ChainRegistryExecutor.json.ts" {
    const _default_8: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_8;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_ChainRegistryExecutor.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_ChainRegistryExecutor.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        votingManager: string;
        chainRegistry: string;
    }
    export class OSWAP_ChainRegistryExecutor extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseExecuteEvent(receipt: TransactionReceipt): OSWAP_ChainRegistryExecutor.ExecuteEvent[];
        decodeExecuteEvent(event: Event): OSWAP_ChainRegistryExecutor.ExecuteEvent;
        chainRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        execute: {
            (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: string[], options?: TransactionOptions) => Promise<void>;
        };
        votingManager: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_ChainRegistryExecutor {
        interface ExecuteEvent {
            params: string[];
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_ConfigStore.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_ConfigStore.json.ts" {
    const _default_9: {
        abi: ({
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_9;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_ConfigStore.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_ConfigStore.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface ISetConfigParams {
        name: string;
        value: string;
    }
    export interface ISetConfig2Params {
        name: string;
        value1: string;
        value2: string;
    }
    export interface ISetConfigAddressParams {
        name: string;
        value: string;
    }
    export interface ISetOracleParams {
        asset: string;
        oracle: string;
    }
    export class OSWAP_ConfigStore extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: {
            govToken: string;
            swapPolicy: string;
            lpWithdrawlDelay: number | BigNumber;
            transactionsGap: number | BigNumber;
            superTrollMinCount: number | BigNumber;
            generalTrollMinCount: number | BigNumber;
            transactionFee: number | BigNumber;
            router: string;
            rebalancer: string;
            feeTo: string;
            wrapper: string;
            asset: string[];
            baseFee: (number | BigNumber)[];
        }, options?: TransactionOptions): Promise<string>;
        parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): OSWAP_ConfigStore.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): OSWAP_ConfigStore.DeauthorizeEvent;
        parseParamSet1Event(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSet1Event[];
        decodeParamSet1Event(event: Event): OSWAP_ConfigStore.ParamSet1Event;
        parseParamSet2Event(receipt: TransactionReceipt): OSWAP_ConfigStore.ParamSet2Event[];
        decodeParamSet2Event(event: Event): OSWAP_ConfigStore.ParamSet2Event;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): OSWAP_ConfigStore.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): OSWAP_ConfigStore.TransferOwnershipEvent;
        parseUpdateVotingExecutorManagerEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.UpdateVotingExecutorManagerEvent[];
        decodeUpdateVotingExecutorManagerEvent(event: Event): OSWAP_ConfigStore.UpdateVotingExecutorManagerEvent;
        parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_ConfigStore.UpgradeEvent[];
        decodeUpgradeEvent(event: Event): OSWAP_ConfigStore.UpgradeEvent;
        baseFee: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        feeTo: {
            (options?: TransactionOptions): Promise<string>;
        };
        generalTrollMinCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        getBridgeParams: {
            (asset: string, options?: TransactionOptions): Promise<{
                param1: string;
                param2: string;
                param3: string;
                param4: string;
                param5: BigNumber;
                param6: BigNumber;
            }>;
        };
        getRebalanceParams: {
            (asset: string, options?: TransactionOptions): Promise<{
                param1: string;
                param2: string;
                param3: string;
            }>;
        };
        getSignatureVerificationParams: {
            (options?: TransactionOptions): Promise<{
                param1: BigNumber;
                param2: BigNumber;
                param3: BigNumber;
            }>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        initAddress: {
            (votingExecutorManager: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (votingExecutorManager: string, options?: TransactionOptions) => Promise<void>;
        };
        isApprovedProxy: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        lpWithdrawlDelay: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        newConfigStore: {
            (options?: TransactionOptions): Promise<string>;
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
        priceOracle: {
            (param1: string, options?: TransactionOptions): Promise<string>;
        };
        rebalancer: {
            (options?: TransactionOptions): Promise<string>;
        };
        router: {
            (options?: TransactionOptions): Promise<string>;
        };
        setConfig: {
            (params: ISetConfigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetConfigParams, options?: TransactionOptions) => Promise<void>;
        };
        setConfig2: {
            (params: ISetConfig2Params, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetConfig2Params, options?: TransactionOptions) => Promise<void>;
        };
        setConfigAddress: {
            (params: ISetConfigAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetConfigAddressParams, options?: TransactionOptions) => Promise<void>;
        };
        setOracle: {
            (params: ISetOracleParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetOracleParams, options?: TransactionOptions) => Promise<void>;
        };
        setSwapPolicy: {
            (swapPolicy: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (swapPolicy: string, options?: TransactionOptions) => Promise<void>;
        };
        superTrollMinCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        swapPolicy: {
            (options?: TransactionOptions): Promise<string>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        transactionFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transactionsGap: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        updateVotingExecutorManager: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        upgrade: {
            (configStore: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (configStore: string, options?: TransactionOptions) => Promise<void>;
        };
        votingExecutorManager: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_ConfigStore {
        interface AuthorizeEvent {
            user: string;
            _event: Event;
        }
        interface DeauthorizeEvent {
            user: string;
            _event: Event;
        }
        interface ParamSet1Event {
            name: string;
            value1: string;
            _event: Event;
        }
        interface ParamSet2Event {
            name: string;
            value1: string;
            value2: string;
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
        interface UpdateVotingExecutorManagerEvent {
            newVotingExecutorManager: string;
            _event: Event;
        }
        interface UpgradeEvent {
            newConfigStore: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_ConfigStoreTradeVault.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_ConfigStoreTradeVault.json.ts" {
    const _default_10: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_10;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_ConfigStoreTradeVault.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_ConfigStoreTradeVault.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        arbitrageFee: number | BigNumber;
        router: string;
    }
    export interface ISetConfigParams {
        name: string;
        value: string;
    }
    export interface ISetConfigAddressParams {
        name: string;
        value: string;
    }
    export class OSWAP_ConfigStoreTradeVault extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseParamSet1Event(receipt: TransactionReceipt): OSWAP_ConfigStoreTradeVault.ParamSet1Event[];
        decodeParamSet1Event(event: Event): OSWAP_ConfigStoreTradeVault.ParamSet1Event;
        arbitrageFee: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        feeTo: {
            (options?: TransactionOptions): Promise<string>;
        };
        getTradeParam: {
            (options?: TransactionOptions): Promise<{
                param1: string;
                param2: BigNumber;
            }>;
        };
        newConfigStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        router: {
            (options?: TransactionOptions): Promise<string>;
        };
        setConfig: {
            (params: ISetConfigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetConfigParams, options?: TransactionOptions) => Promise<void>;
        };
        setConfigAddress: {
            (params: ISetConfigAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetConfigAddressParams, options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module OSWAP_ConfigStoreTradeVault {
        interface ParamSet1Event {
            name: string;
            value1: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_ContractProxy.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_ContractProxy.json.ts" {
    const _default_11: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_11;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_ContractProxy.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_ContractProxy.ts" {
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
    export class OSWAP_ContractProxy extends _Contract {
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
    export module OSWAP_ContractProxy {
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
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainProjectRegistry.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainProjectRegistry.json.ts" {
    const _default_12: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_12;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainProjectRegistry.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainProjectRegistry.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        trollRegistry: string;
        trollType: number | BigNumber;
    }
    export interface IAddProjectTokenParams {
        projectId: number | BigNumber;
        tokens: {
            chainId: number | BigNumber;
            token: string;
        }[];
        nonce: number | BigNumber;
        signatures: string[];
    }
    export interface IAddTrollsParams {
        projectId: number | BigNumber;
        trollProfileIndex: (number | BigNumber)[];
        nonce: number | BigNumber;
        signature: string;
    }
    export interface IGetProjectsParams {
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface INewProjectParams {
        tokens: {
            chainId: number | BigNumber;
            token: string;
        }[];
        projectTrolls: (number | BigNumber)[];
        nonce: number | BigNumber;
        signatures: string[];
    }
    export interface IProjectTrollsInvParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IRemoveTrollsParams {
        projectId: number | BigNumber;
        trollProfileIndex: (number | BigNumber)[];
        nonce: number | BigNumber;
        signature: string;
    }
    export interface ITakeProjectOwnershipParams {
        projectId: number | BigNumber;
        nonce: number | BigNumber;
        signature: string;
    }
    export interface ITransferProjectOwnershipParams {
        projectId: number | BigNumber;
        newOwner: string;
    }
    export class OSWAP_MainChainProjectRegistry extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAddTrollsEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.AddTrollsEvent[];
        decodeAddTrollsEvent(event: Event): OSWAP_MainChainProjectRegistry.AddTrollsEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): OSWAP_MainChainProjectRegistry.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): OSWAP_MainChainProjectRegistry.DeauthorizeEvent;
        parseNewProjectEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.NewProjectEvent[];
        decodeNewProjectEvent(event: Event): OSWAP_MainChainProjectRegistry.NewProjectEvent;
        parseNewProjectTokenEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.NewProjectTokenEvent[];
        decodeNewProjectTokenEvent(event: Event): OSWAP_MainChainProjectRegistry.NewProjectTokenEvent;
        parseRemoveTrollsEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.RemoveTrollsEvent[];
        decodeRemoveTrollsEvent(event: Event): OSWAP_MainChainProjectRegistry.RemoveTrollsEvent;
        parseResumeEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.ResumeEvent[];
        decodeResumeEvent(event: Event): OSWAP_MainChainProjectRegistry.ResumeEvent;
        parseShutdownEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.ShutdownEvent[];
        decodeShutdownEvent(event: Event): OSWAP_MainChainProjectRegistry.ShutdownEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): OSWAP_MainChainProjectRegistry.StartOwnershipTransferEvent;
        parseStartProjectOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.StartProjectOwnershipTransferEvent[];
        decodeStartProjectOwnershipTransferEvent(event: Event): OSWAP_MainChainProjectRegistry.StartProjectOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): OSWAP_MainChainProjectRegistry.TransferOwnershipEvent;
        parseTransferProjectOwnershipEvent(receipt: TransactionReceipt): OSWAP_MainChainProjectRegistry.TransferProjectOwnershipEvent[];
        decodeTransferProjectOwnershipEvent(event: Event): OSWAP_MainChainProjectRegistry.TransferProjectOwnershipEvent;
        addProjectToken: {
            (params: IAddProjectTokenParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddProjectTokenParams, options?: TransactionOptions) => Promise<void>;
        };
        addTrolls: {
            (params: IAddTrollsParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddTrollsParams, options?: TransactionOptions) => Promise<void>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        getProject: {
            (projectId: number | BigNumber, options?: TransactionOptions): Promise<{
                owner: string;
                newOwner: string;
                projectTrolls: BigNumber[];
                chainIds: BigNumber[];
                tokens: string[];
            }>;
        };
        getProjects: {
            (params: IGetProjectsParams, options?: TransactionOptions): Promise<{
                owner: string[];
                projectTrolls: BigNumber[][];
                chainIds: BigNumber[][];
                tokens: string[][];
            }>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        newProject: {
            (params: INewProjectParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: INewProjectParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        paused: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        projectLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        projectTrollsInv: {
            (params: IProjectTrollsInvParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        projects: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                owner: string;
                newOwner: string;
            }>;
        };
        projectsTrollsAndChainsLength: {
            (projectId: number | BigNumber, options?: TransactionOptions): Promise<{
                trolls: BigNumber;
                chains: BigNumber;
            }>;
        };
        removeTrolls: {
            (params: IRemoveTrollsParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveTrollsParams, options?: TransactionOptions) => Promise<void>;
        };
        resume: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        shutdownByAdmin: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        takeProjectOwnership: {
            (params: ITakeProjectOwnershipParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITakeProjectOwnershipParams, options?: TransactionOptions) => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        transferProjectOwnership: {
            (params: ITransferProjectOwnershipParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferProjectOwnershipParams, options?: TransactionOptions) => Promise<void>;
        };
        trollRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        trollType: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
    export module OSWAP_MainChainProjectRegistry {
        interface AddTrollsEvent {
            projectId: BigNumber;
            trollProfileIndex: BigNumber[];
            nonce: BigNumber;
            signature: string;
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
        interface NewProjectEvent {
            projectId: BigNumber;
            owner: string;
            projectTrolls: BigNumber[];
            _event: Event;
        }
        interface NewProjectTokenEvent {
            projectId: BigNumber;
            chainId: BigNumber;
            token: string;
            nonce: BigNumber;
            signature: string;
            _event: Event;
        }
        interface RemoveTrollsEvent {
            projectId: BigNumber;
            trollProfileIndex: BigNumber[];
            nonce: BigNumber;
            signature: string;
            _event: Event;
        }
        interface ResumeEvent {
            _event: Event;
        }
        interface ShutdownEvent {
            account: string;
            _event: Event;
        }
        interface StartOwnershipTransferEvent {
            user: string;
            _event: Event;
        }
        interface StartProjectOwnershipTransferEvent {
            projectId: BigNumber;
            newOwner: string;
            _event: Event;
        }
        interface TransferOwnershipEvent {
            user: string;
            _event: Event;
        }
        interface TransferProjectOwnershipEvent {
            projectId: BigNumber;
            newOwner: string;
            nonce: BigNumber;
            signature: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainTrollRegistry.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainTrollRegistry.json.ts" {
    const _default_13: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_13;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainTrollRegistry.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainTrollRegistry.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        govToken: string;
        superTrollNft: string[];
        generalTrollNft: string[];
    }
    export interface IAddStakesTrollParams {
        nft: string;
        tokenId: number | BigNumber;
        amount: number | BigNumber;
    }
    export interface IAddTrollParams {
        troll: string;
        trollType: number | BigNumber;
        signature: string;
    }
    export interface IBackerStakingParams {
        backer: string;
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IGetTrollByNftParams {
        nft: string;
        tokenId: number | BigNumber;
    }
    export interface IGetTrollsParams {
        start: number | BigNumber;
        length: number | BigNumber;
    }
    export interface IOnERC721ReceivedParams {
        param1: string;
        param2: string;
        param3: number | BigNumber;
        param4: string;
    }
    export interface IOwnerTrollsParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IStakeToParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IStakeToInvParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IStakeTrollParams {
        trollProfileIndex: number | BigNumber;
        nft: string;
        tokenId: number | BigNumber;
    }
    export interface IStakedByParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IStakedByInvParams {
        param1: string;
        param2: number | BigNumber;
    }
    export interface IUnstakeTrollParams {
        nft: string;
        tokenId: number | BigNumber;
    }
    export interface IUpdateNftParams {
        nft: string;
        trollType: number | BigNumber;
    }
    export interface IUpdateTrollParams {
        trollProfileIndex: number | BigNumber;
        newTroll: string;
        signature: string;
    }
    export class OSWAP_MainChainTrollRegistry extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAddTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.AddTrollEvent[];
        decodeAddTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.AddTrollEvent;
        parseAddTrollTypeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.AddTrollTypeEvent[];
        decodeAddTrollTypeEvent(event: Event): OSWAP_MainChainTrollRegistry.AddTrollTypeEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): OSWAP_MainChainTrollRegistry.AuthorizeEvent;
        parseBlockNftTokenIdEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.BlockNftTokenIdEvent[];
        decodeBlockNftTokenIdEvent(event: Event): OSWAP_MainChainTrollRegistry.BlockNftTokenIdEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): OSWAP_MainChainTrollRegistry.DeauthorizeEvent;
        parseResumeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.ResumeEvent[];
        decodeResumeEvent(event: Event): OSWAP_MainChainTrollRegistry.ResumeEvent;
        parseShutdownEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.ShutdownEvent[];
        decodeShutdownEvent(event: Event): OSWAP_MainChainTrollRegistry.ShutdownEvent;
        parseStakeTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StakeTrollEvent[];
        decodeStakeTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.StakeTrollEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): OSWAP_MainChainTrollRegistry.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): OSWAP_MainChainTrollRegistry.TransferOwnershipEvent;
        parseUnstakeTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UnstakeTrollEvent[];
        decodeUnstakeTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.UnstakeTrollEvent;
        parseUpdateNFTEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateNFTEvent[];
        decodeUpdateNFTEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateNFTEvent;
        parseUpdateTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateTrollEvent[];
        decodeUpdateTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateTrollEvent;
        parseUpdateVotingManagerEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateVotingManagerEvent[];
        decodeUpdateVotingManagerEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateVotingManagerEvent;
        parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpgradeEvent[];
        decodeUpgradeEvent(event: Event): OSWAP_MainChainTrollRegistry.UpgradeEvent;
        BlockedGeneralTroll: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        BlockedSuperTroll: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        GeneralTroll: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        SuperTroll: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        addStakesTroll: {
            (params: IAddStakesTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddStakesTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        addTroll: {
            (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        addTrollType: {
            (name: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (name: string, options?: TransactionOptions) => Promise<void>;
        };
        backerStaking: {
            (params: IBackerStakingParams, options?: TransactionOptions): Promise<{
                nft: string;
                tokenId: BigNumber;
                trollProfileIndex: BigNumber;
                timestamp: BigNumber;
            }[]>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        getStakeTo: {
            (backer: string, options?: TransactionOptions): Promise<{
                nft: string;
                tokenId: BigNumber;
                trollProfileIndex: BigNumber;
                timestamp: BigNumber;
            }[]>;
        };
        getStakedBy: {
            (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<{
                nft: string;
                tokenId: BigNumber;
            }[]>;
        };
        getStakes: {
            (troll: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        getStakesByTrollProfile: {
            (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        getTrollByNft: {
            (params: IGetTrollByNftParams, options?: TransactionOptions): Promise<string>;
        };
        getTrollProfileByAddress: {
            (trollAddress: string, options?: TransactionOptions): Promise<{
                owner: string;
                troll: string;
                trollType: BigNumber;
                nftCount: BigNumber;
            }>;
        };
        getTrollProperties: {
            (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<{
                troll: {
                    owner: string;
                    troll: string;
                    trollType: BigNumber;
                    nftCount: BigNumber;
                };
                nfts: {
                    nft: string;
                    tokenId: BigNumber;
                }[];
                backers: string[];
            }>;
        };
        getTrollPropertiesByAddress: {
            (trollAddress: string, options?: TransactionOptions): Promise<{
                troll: {
                    owner: string;
                    troll: string;
                    trollType: BigNumber;
                    nftCount: BigNumber;
                };
                nfts: {
                    nft: string;
                    tokenId: BigNumber;
                }[];
                backers: string[];
            }>;
        };
        getTrolls: {
            (params: IGetTrollsParams, options?: TransactionOptions): Promise<{
                owner: string;
                troll: string;
                trollType: BigNumber;
                nftCount: BigNumber;
            }[]>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        initAddress: {
            (votingManager: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (votingManager: string, options?: TransactionOptions) => Promise<void>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        newTrollRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        nftType: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        onERC721Received: {
            (params: IOnERC721ReceivedParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IOnERC721ReceivedParams, options?: TransactionOptions) => Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        ownerTrolls: {
            (params: IOwnerTrollsParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        ownerTrollsLength: {
            (owner: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        paused: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        resume: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        shutdownByAdmin: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        shutdownByVoting: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        stakeOf: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        stakeTo: {
            (params: IStakeToParams, options?: TransactionOptions): Promise<{
                nft: string;
                tokenId: BigNumber;
                trollProfileIndex: BigNumber;
                timestamp: BigNumber;
            }>;
        };
        stakeToInv: {
            (params: IStakeToInvParams, options?: TransactionOptions): Promise<{
                backer: string;
                index: BigNumber;
            }>;
        };
        stakeToLength: {
            (backer: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        stakeTroll: {
            (params: IStakeTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IStakeTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        stakedBy: {
            (params: IStakedByParams, options?: TransactionOptions): Promise<{
                nft: string;
                tokenId: BigNumber;
            }>;
        };
        stakedByInv: {
            (params: IStakedByInvParams, options?: TransactionOptions): Promise<{
                trollProfileIndex: BigNumber;
                index: BigNumber;
            }>;
        };
        stakedByLength: {
            (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        totalStake: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        trollNft: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        trollNftInv: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        trollNftLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        trollProfileInv: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        trollProfiles: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                owner: string;
                troll: string;
                trollType: BigNumber;
                nftCount: BigNumber;
            }>;
        };
        trollProfilesLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        unstakeTroll: {
            (params: IUnstakeTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnstakeTrollParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        updateNft: {
            (params: IUpdateNftParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateNftParams, options?: TransactionOptions) => Promise<void>;
        };
        updateTroll: {
            (params: IUpdateTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        updateVotingManager: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        upgrade: {
            (trollRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (trollRegistry: string, options?: TransactionOptions) => Promise<void>;
        };
        upgradeByAdmin: {
            (trollRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (trollRegistry: string, options?: TransactionOptions) => Promise<void>;
        };
        votingManager: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_MainChainTrollRegistry {
        interface AddTrollEvent {
            owner: string;
            troll: string;
            trollProfileIndex: BigNumber;
            trollType: BigNumber;
            _event: Event;
        }
        interface AddTrollTypeEvent {
            trollType: BigNumber;
            name: string;
            _event: Event;
        }
        interface AuthorizeEvent {
            user: string;
            _event: Event;
        }
        interface BlockNftTokenIdEvent {
            nft: string;
            tokenId: BigNumber;
            blocked: boolean;
            _event: Event;
        }
        interface DeauthorizeEvent {
            user: string;
            _event: Event;
        }
        interface ResumeEvent {
            _event: Event;
        }
        interface ShutdownEvent {
            account: string;
            _event: Event;
        }
        interface StakeTrollEvent {
            backer: string;
            trollProfileIndex: BigNumber;
            nft: string;
            tokenId: BigNumber;
            stakesChange: BigNumber;
            stakesBalance: BigNumber;
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
        interface UnstakeTrollEvent {
            backer: string;
            trollProfileIndex: BigNumber;
            nft: string;
            tokenId: BigNumber;
            stakesChange: BigNumber;
            stakesBalance: BigNumber;
            _event: Event;
        }
        interface UpdateNFTEvent {
            nft: string;
            trollType: BigNumber;
            _event: Event;
        }
        interface UpdateTrollEvent {
            trollProfileIndex: BigNumber;
            oldTroll: string;
            newTroll: string;
            _event: Event;
        }
        interface UpdateVotingManagerEvent {
            newVotingManager: string;
            _event: Event;
        }
        interface UpgradeEvent {
            newTrollRegistry: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainVotingExecutor.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainVotingExecutor.json.ts" {
    const _default_14: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_14;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainVotingExecutor.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainVotingExecutor.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, Event, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_MainChainVotingExecutor extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(votingManager: string, options?: TransactionOptions): Promise<string>;
        parseExecuteEvent(receipt: TransactionReceipt): OSWAP_MainChainVotingExecutor.ExecuteEvent[];
        decodeExecuteEvent(event: Event): OSWAP_MainChainVotingExecutor.ExecuteEvent;
        chainRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        execute: {
            (params: string[], options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: string[], options?: TransactionOptions) => Promise<void>;
        };
        initAddress: {
            (chainRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (chainRegistry: string, options?: TransactionOptions) => Promise<void>;
        };
        trollRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        votingManager: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_MainChainVotingExecutor {
        interface ExecuteEvent {
            params: string[];
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_RouterVaultWrapper.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_RouterVaultWrapper.json.ts" {
    const _default_15: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_15;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_RouterVaultWrapper.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_RouterVaultWrapper.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface ISwapETHForExactTokensParams {
        pair: string[];
        vault: string;
        deadline: number | BigNumber;
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
    }
    export interface ISwapExactETHForTokensParams {
        pair: string[];
        vault: string;
        deadline: number | BigNumber;
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
    }
    export interface ISwapExactTokensForTokensParams {
        pair: string[];
        vault: string;
        amountIn: number | BigNumber;
        deadline: number | BigNumber;
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
    }
    export interface ISwapTokensForExactTokensParams {
        pair: string[];
        vault: string;
        amountIn: number | BigNumber;
        deadline: number | BigNumber;
        order: {
            peerChain: number | BigNumber;
            inAmount: number | BigNumber;
            outToken: string;
            minOutAmount: number | BigNumber;
            to: string;
            expire: number | BigNumber;
        };
    }
    export class OSWAP_RouterVaultWrapper extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_RouterVaultWrapper.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_RouterVaultWrapper.SwapEvent;
        parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_RouterVaultWrapper.UpdateConfigStoreEvent[];
        decodeUpdateConfigStoreEvent(event: Event): OSWAP_RouterVaultWrapper.UpdateConfigStoreEvent;
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        initAddress: {
            (configStore: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (configStore: string, options?: TransactionOptions) => Promise<void>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        swapETHForExactTokens: {
            (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapETHForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
        };
        swapExactETHForTokens: {
            (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactETHForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
        };
        updateConfigStore: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        private assign;
    }
    export module OSWAP_RouterVaultWrapper {
        interface SwapEvent {
            vault: string;
            orderId: BigNumber;
            sender: string;
            inToken: string;
            inAmount: BigNumber;
            _event: Event;
        }
        interface UpdateConfigStoreEvent {
            newConfigStore: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainProjectRegistry.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainProjectRegistry.json.ts" {
    const _default_16: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_16;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainProjectRegistry.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainProjectRegistry.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAddTrollParams {
        signatures: string[];
        trollProfileIndex: number | BigNumber;
        troll: string;
        nonce: number | BigNumber;
    }
    export interface IHashNewVaultParams {
        projectId: number | BigNumber;
        asset: string;
        owner: string;
        projectTrolls: (number | BigNumber)[];
        nonce: number | BigNumber;
    }
    export interface IHashNewVaultFormOwnerParams {
        asset: string;
        projectTrolls: (number | BigNumber)[];
        nonce: number | BigNumber;
    }
    export interface IHashTrollParams {
        trollProfileIndex: number | BigNumber;
        troll: string;
        nonce: number | BigNumber;
    }
    export interface IHashUpdateProjectParams {
        projectId: number | BigNumber;
        newOwner: string;
        trollsToRemove: (number | BigNumber)[];
        trollsToAdd: (number | BigNumber)[];
        nonce: number | BigNumber;
    }
    export interface IHashUpdateProjectFromOwnerParams {
        projectId: number | BigNumber;
        newOwner: string;
        trollsToRemove: (number | BigNumber)[];
        trollsToAdd: (number | BigNumber)[];
        nonce: number | BigNumber;
    }
    export interface IHashUpdateTrollFromOwnerParams {
        trollProfileIndex: number | BigNumber;
        newTroll: string;
        nonce: number | BigNumber;
    }
    export interface IInitAddressParams {
        vaultRegistryCreator: string;
        bridgeVaultCreator: string;
    }
    export interface IIsProjectTrollParams {
        projectId: number | BigNumber;
        trollProfileIndex: number | BigNumber;
    }
    export interface IIsProjectTrollByAddressParams {
        projectId: number | BigNumber;
        troll: string;
    }
    export interface INewVaultParams {
        trollsSignatures: string[];
        ownerSignature: string;
        projectId: number | BigNumber;
        asset: string;
        owner: string;
        projectTrolls: (number | BigNumber)[];
        nonceForOwnerSignature: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface IProjectTrollsInvParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export interface IUpdateProjectParams {
        trollsSignatures: string[];
        ownerSignature: string;
        projectId: number | BigNumber;
        newOwner: string;
        trollsToRemove: (number | BigNumber)[];
        trollsToAdd: (number | BigNumber)[];
        nonceForOwnerSignature: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface IUpdateTrollParams {
        signatures: string[];
        ownerSignature: string;
        trollProfileIndex: number | BigNumber;
        newTroll: string;
        nonceForOwnerSignature: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface IUsedProjectNonceParams {
        param1: number | BigNumber;
        param2: number | BigNumber;
    }
    export class OSWAP_SideChainProjectRegistry extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(trollRegistry: string, options?: TransactionOptions): Promise<string>;
        parseAddTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.AddTrollEvent[];
        decodeAddTrollEvent(event: Event): OSWAP_SideChainProjectRegistry.AddTrollEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): OSWAP_SideChainProjectRegistry.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): OSWAP_SideChainProjectRegistry.DeauthorizeEvent;
        parseNewProjectVaultEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.NewProjectVaultEvent[];
        decodeNewProjectVaultEvent(event: Event): OSWAP_SideChainProjectRegistry.NewProjectVaultEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): OSWAP_SideChainProjectRegistry.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): OSWAP_SideChainProjectRegistry.TransferOwnershipEvent;
        parseUpdateProjectEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.UpdateProjectEvent[];
        decodeUpdateProjectEvent(event: Event): OSWAP_SideChainProjectRegistry.UpdateProjectEvent;
        parseUpdateTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainProjectRegistry.UpdateTrollEvent[];
        decodeUpdateTrollEvent(event: Event): OSWAP_SideChainProjectRegistry.UpdateTrollEvent;
        addTroll: {
            (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        bridgeVaultCreator: {
            (options?: TransactionOptions): Promise<string>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        getProject: {
            (projectId: number | BigNumber, options?: TransactionOptions): Promise<{
                asset: string;
                owner: string;
                vaultRegistry: string;
                bridgeVault: string;
                projectTrolls: BigNumber[];
            }>;
        };
        getProjects: {
            (projectIds: (number | BigNumber)[], options?: TransactionOptions): Promise<{
                asset: string;
                owner: string;
                vaultRegistry: string;
                bridgeVault: string;
                projectTrolls: BigNumber[];
            }[]>;
        };
        hashNewVault: {
            (params: IHashNewVaultParams, options?: TransactionOptions): Promise<string>;
        };
        hashNewVaultFormOwner: {
            (params: IHashNewVaultFormOwnerParams, options?: TransactionOptions): Promise<string>;
        };
        hashTroll: {
            (params: IHashTrollParams, options?: TransactionOptions): Promise<string>;
        };
        hashUpdateProject: {
            (params: IHashUpdateProjectParams, options?: TransactionOptions): Promise<string>;
        };
        hashUpdateProjectFromOwner: {
            (params: IHashUpdateProjectFromOwnerParams, options?: TransactionOptions): Promise<string>;
        };
        hashUpdateTrollFromOwner: {
            (params: IHashUpdateTrollFromOwnerParams, options?: TransactionOptions): Promise<string>;
        };
        initAddress: {
            (params: IInitAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitAddressParams, options?: TransactionOptions) => Promise<void>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        isProjectTroll: {
            (params: IIsProjectTrollParams, options?: TransactionOptions): Promise<boolean>;
        };
        isProjectTrollByAddress: {
            (params: IIsProjectTrollByAddressParams, options?: TransactionOptions): Promise<boolean>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        newVault: {
            (params: INewVaultParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: INewVaultParams, options?: TransactionOptions) => Promise<void>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        projectTrollsInv: {
            (params: IProjectTrollsInvParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        projectTrollsLength: {
            (projectId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        trollProfileInv: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        trollProfiles: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                owner: string;
                troll: string;
            }>;
        };
        trollRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        updateProject: {
            (params: IUpdateProjectParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateProjectParams, options?: TransactionOptions) => Promise<void>;
        };
        updateTroll: {
            (params: IUpdateTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        usedNonce: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<boolean>;
        };
        usedProjectNonce: {
            (params: IUsedProjectNonceParams, options?: TransactionOptions): Promise<boolean>;
        };
        vaultRegistryCreator: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_SideChainProjectRegistry {
        interface AddTrollEvent {
            troll: string;
            trollProfileIndex: BigNumber;
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
        interface NewProjectVaultEvent {
            projectId: BigNumber;
            asset: string;
            owner: string;
            vaultRegistry: string;
            bridgeVault: string;
            projectTrolls: BigNumber[];
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
        interface UpdateProjectEvent {
            projectId: BigNumber;
            owner: string;
            trollsToRemove: BigNumber[];
            trollsToAdd: BigNumber[];
            _event: Event;
        }
        interface UpdateTrollEvent {
            trollProfileIndex: BigNumber;
            troll: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainTrollRegistry.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainTrollRegistry.json.ts" {
    const _default_17: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_17;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainTrollRegistry.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainTrollRegistry.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAddTrollParams {
        signatures: string[];
        trollProfileIndex: number | BigNumber;
        troll: string;
        isSuperTroll: boolean;
        nonce: number | BigNumber;
    }
    export interface IHashAddTrollParams {
        trollProfileIndex: number | BigNumber;
        troll: string;
        isSuperTroll: boolean;
        nonce: number | BigNumber;
    }
    export interface IHashRegisterVaultParams {
        token: string;
        vault: string;
        nonce: number | BigNumber;
    }
    export interface IHashRemoveTrollParams {
        trollProfileIndex: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface IHashUnlockTrollParams {
        trollProfileIndex: number | BigNumber;
        unlock: boolean;
        vaultRegistry: string[];
        penalty: (number | BigNumber)[];
        nonce: number | BigNumber;
    }
    export interface IHashUpdateTrollParams {
        trollProfileIndex: number | BigNumber;
        newTroll: string;
        nonce: number | BigNumber;
    }
    export interface IInitAddressParams {
        votingExecutor: string;
        tokens: string[];
        vaults: string[];
    }
    export interface IIsGeneralTrollParams {
        troll: string;
        returnFalseIfBlocked: boolean;
    }
    export interface IIsGeneralTrollByIndexParams {
        trollProfileIndex: number | BigNumber;
        returnFalseIfBlocked: boolean;
    }
    export interface IIsSuperTrollParams {
        troll: string;
        returnFalseIfBlocked: boolean;
    }
    export interface IIsSuperTrollByIndexParams {
        trollProfileIndex: number | BigNumber;
        returnFalseIfBlocked: boolean;
    }
    export interface IRegisterVaultParams {
        signatures: string[];
        token: string;
        vault: string;
        nonce: number | BigNumber;
    }
    export interface IRemoveTrollParams {
        signatures: string[];
        trollProfileIndex: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface ISetVotingExecutorParams {
        votingExecutor: string;
        bool: boolean;
    }
    export interface IUnlockGeneralTrollParams {
        signatures: string[];
        trollProfileIndex: number | BigNumber;
        nonce: number | BigNumber;
    }
    export interface IUnlockSuperTrollParams {
        signatures: string[];
        trollProfileIndex: number | BigNumber;
        unlock: boolean;
        vaultRegistry: string[];
        penalty: (number | BigNumber)[];
        nonce: number | BigNumber;
    }
    export interface IUpdateTrollParams {
        signatures: string[];
        trollProfileIndex: number | BigNumber;
        newTroll: string;
        nonce: number | BigNumber;
    }
    export interface IVerifySignaturesParams {
        msgSender: string;
        signatures: string[];
        paramsHash: string;
        nonce: number | BigNumber;
    }
    export class OSWAP_SideChainTrollRegistry extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(configStore: string, options?: TransactionOptions): Promise<string>;
        parseAddTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.AddTrollEvent[];
        decodeAddTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.AddTrollEvent;
        parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.AuthorizeEvent[];
        decodeAuthorizeEvent(event: Event): OSWAP_SideChainTrollRegistry.AuthorizeEvent;
        parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.DeauthorizeEvent[];
        decodeDeauthorizeEvent(event: Event): OSWAP_SideChainTrollRegistry.DeauthorizeEvent;
        parseDelistTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.DelistTrollEvent[];
        decodeDelistTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.DelistTrollEvent;
        parseLockGeneralTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.LockGeneralTrollEvent[];
        decodeLockGeneralTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.LockGeneralTrollEvent;
        parseLockSuperTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.LockSuperTrollEvent[];
        decodeLockSuperTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.LockSuperTrollEvent;
        parseNewVaultEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.NewVaultEvent[];
        decodeNewVaultEvent(event: Event): OSWAP_SideChainTrollRegistry.NewVaultEvent;
        parseRemoveTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.RemoveTrollEvent[];
        decodeRemoveTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.RemoveTrollEvent;
        parseResumeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.ResumeEvent[];
        decodeResumeEvent(event: Event): OSWAP_SideChainTrollRegistry.ResumeEvent;
        parseSetVotingExecutorEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.SetVotingExecutorEvent[];
        decodeSetVotingExecutorEvent(event: Event): OSWAP_SideChainTrollRegistry.SetVotingExecutorEvent;
        parseShutdownEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.ShutdownEvent[];
        decodeShutdownEvent(event: Event): OSWAP_SideChainTrollRegistry.ShutdownEvent;
        parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.StartOwnershipTransferEvent[];
        decodeStartOwnershipTransferEvent(event: Event): OSWAP_SideChainTrollRegistry.StartOwnershipTransferEvent;
        parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.TransferOwnershipEvent[];
        decodeTransferOwnershipEvent(event: Event): OSWAP_SideChainTrollRegistry.TransferOwnershipEvent;
        parseUnlockGeneralTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UnlockGeneralTrollEvent[];
        decodeUnlockGeneralTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.UnlockGeneralTrollEvent;
        parseUnlockSuperTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UnlockSuperTrollEvent[];
        decodeUnlockSuperTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.UnlockSuperTrollEvent;
        parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UpdateConfigStoreEvent[];
        decodeUpdateConfigStoreEvent(event: Event): OSWAP_SideChainTrollRegistry.UpdateConfigStoreEvent;
        parseUpdateTrollEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UpdateTrollEvent[];
        decodeUpdateTrollEvent(event: Event): OSWAP_SideChainTrollRegistry.UpdateTrollEvent;
        parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_SideChainTrollRegistry.UpgradeEvent[];
        decodeUpgradeEvent(event: Event): OSWAP_SideChainTrollRegistry.UpgradeEvent;
        addTroll: {
            (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        allVaultToken: {
            (options?: TransactionOptions): Promise<string[]>;
        };
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        deny: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        generalTrollCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        hashAddTroll: {
            (params: IHashAddTrollParams, options?: TransactionOptions): Promise<string>;
        };
        hashRegisterVault: {
            (params: IHashRegisterVaultParams, options?: TransactionOptions): Promise<string>;
        };
        hashRemoveTroll: {
            (params: IHashRemoveTrollParams, options?: TransactionOptions): Promise<string>;
        };
        hashUnlockTroll: {
            (params: IHashUnlockTrollParams, options?: TransactionOptions): Promise<string>;
        };
        hashUpdateTroll: {
            (params: IHashUpdateTrollParams, options?: TransactionOptions): Promise<string>;
        };
        initAddress: {
            (params: IInitAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitAddressParams, options?: TransactionOptions) => Promise<void>;
        };
        isGeneralTroll: {
            (params: IIsGeneralTrollParams, options?: TransactionOptions): Promise<boolean>;
        };
        isGeneralTrollByIndex: {
            (params: IIsGeneralTrollByIndexParams, options?: TransactionOptions): Promise<boolean>;
        };
        isPermitted: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        isSuperTroll: {
            (params: IIsSuperTrollParams, options?: TransactionOptions): Promise<boolean>;
        };
        isSuperTrollByIndex: {
            (params: IIsSuperTrollByIndexParams, options?: TransactionOptions): Promise<boolean>;
        };
        isVotingExecutor: {
            (param1: string, options?: TransactionOptions): Promise<boolean>;
        };
        lastTrollTxCount: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        lockGeneralTroll: {
            (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (trollProfileIndex: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        lockSuperTroll: {
            (trollProfileIndex: number | BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (trollProfileIndex: number | BigNumber, options?: TransactionOptions) => Promise<void>;
        };
        newOwner: {
            (options?: TransactionOptions): Promise<string>;
        };
        newTrollRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        newVotingExecutorManager: {
            (options?: TransactionOptions): Promise<string>;
        };
        owner: {
            (options?: TransactionOptions): Promise<string>;
        };
        paused: {
            (options?: TransactionOptions): Promise<boolean>;
        };
        permit: {
            (user: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (user: string, options?: TransactionOptions) => Promise<void>;
        };
        registerVault: {
            (params: IRegisterVaultParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRegisterVaultParams, options?: TransactionOptions) => Promise<void>;
        };
        removeTroll: {
            (params: IRemoveTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        resume: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        setVotingExecutor: {
            (params: ISetVotingExecutorParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISetVotingExecutorParams, options?: TransactionOptions) => Promise<void>;
        };
        shutdownByAdmin: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        shutdownByVoting: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        superTrollCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        takeOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        transactionsCount: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transferOwnership: {
            (newOwner: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (newOwner: string, options?: TransactionOptions) => Promise<void>;
        };
        trollProfileInv: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        trollProfiles: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<{
                troll: string;
                trollType: BigNumber;
            }>;
        };
        trollRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        unlockGeneralTroll: {
            (params: IUnlockGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnlockGeneralTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        unlockSuperTroll: {
            (params: IUnlockSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUnlockSuperTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        updateConfigStore: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
        };
        updateTroll: {
            (params: IUpdateTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IUpdateTrollParams, options?: TransactionOptions) => Promise<void>;
        };
        upgrade: {
            (trollRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (trollRegistry: string, options?: TransactionOptions) => Promise<void>;
        };
        upgradeByAdmin: {
            (trollRegistry: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (trollRegistry: string, options?: TransactionOptions) => Promise<void>;
        };
        usedNonce: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<boolean>;
        };
        vaultToken: {
            (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
        };
        vaultTokenLength: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        vaults: {
            (param1: string, options?: TransactionOptions): Promise<string>;
        };
        verifySignatures: {
            (params: IVerifySignaturesParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IVerifySignaturesParams, options?: TransactionOptions) => Promise<void>;
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
        private assign;
    }
    export module OSWAP_SideChainTrollRegistry {
        interface AddTrollEvent {
            troll: string;
            trollProfileIndex: BigNumber;
            isSuperTroll: boolean;
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
        interface DelistTrollEvent {
            trollProfileIndex: BigNumber;
            _event: Event;
        }
        interface LockGeneralTrollEvent {
            trollProfileIndex: BigNumber;
            lockedBy: string;
            _event: Event;
        }
        interface LockSuperTrollEvent {
            trollProfileIndex: BigNumber;
            lockedBy: string;
            _event: Event;
        }
        interface NewVaultEvent {
            token: string;
            vault: string;
            _event: Event;
        }
        interface RemoveTrollEvent {
            trollProfileIndex: BigNumber;
            _event: Event;
        }
        interface ResumeEvent {
            _event: Event;
        }
        interface SetVotingExecutorEvent {
            newVotingExecutor: string;
            isActive: boolean;
            _event: Event;
        }
        interface ShutdownEvent {
            account: string;
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
        interface UnlockGeneralTrollEvent {
            trollProfileIndex: BigNumber;
            _event: Event;
        }
        interface UnlockSuperTrollEvent {
            trollProfileIndex: BigNumber;
            unlock: boolean;
            bridgeVault: string;
            penalty: BigNumber;
            _event: Event;
        }
        interface UpdateConfigStoreEvent {
            newConfigStore: string;
            _event: Event;
        }
        interface UpdateTrollEvent {
            trollProfileIndex: BigNumber;
            troll: string;
            _event: Event;
        }
        interface UpgradeEvent {
            newTrollRegistry: string;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainVotingExecutor.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainVotingExecutor.json.ts" {
    const _default_18: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_18;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainVotingExecutor.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainVotingExecutor.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IExecuteParams {
        signatures: string[];
        params: string[];
        nonce: number | BigNumber;
    }
    export interface IExecuteHashParams {
        params: string[];
        nonce: number | BigNumber;
    }
    export class OSWAP_SideChainVotingExecutor extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(trollRegistry: string, options?: TransactionOptions): Promise<string>;
        parseExecuteEvent(receipt: TransactionReceipt): OSWAP_SideChainVotingExecutor.ExecuteEvent[];
        decodeExecuteEvent(event: Event): OSWAP_SideChainVotingExecutor.ExecuteEvent;
        configStore: {
            (options?: TransactionOptions): Promise<string>;
        };
        execute: {
            (params: IExecuteParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IExecuteParams, options?: TransactionOptions) => Promise<void>;
        };
        executeHash: {
            (params: IExecuteHashParams, options?: TransactionOptions): Promise<string>;
        };
        govToken: {
            (options?: TransactionOptions): Promise<string>;
        };
        trollRegistry: {
            (options?: TransactionOptions): Promise<string>;
        };
        private assign;
    }
    export module OSWAP_SideChainVotingExecutor {
        interface ExecuteEvent {
            params: string[];
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingContract.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingContract.json.ts" {
    const _default_19: {
        abi: ({
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_19;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingContract.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingContract.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_VotingContract extends _Contract {
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
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingManager.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingManager.json.ts" {
    const _default_20: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_20;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingManager.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingManager.ts" {
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
    export class OSWAP_VotingManager extends _Contract {
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
    export module OSWAP_VotingManager {
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
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingRegistry.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingRegistry.json.ts" {
    const _default_21: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_21;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingRegistry.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingRegistry.ts" {
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
    export class OSWAP_VotingRegistry extends _Contract {
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
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault.json.ts" {
    const _default_22: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_22;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        vaultRegistry: string;
        configStore: string;
        asset: string;
    }
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
    export class OSWAP_BridgeVault extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.AddLiquidityEvent[];
        decodeAddLiquidityEvent(event: Event): OSWAP_BridgeVault.AddLiquidityEvent;
        parseAmendOrderRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.AmendOrderRequestEvent[];
        decodeAmendOrderRequestEvent(event: Event): OSWAP_BridgeVault.AmendOrderRequestEvent;
        parseApprovalEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.ApprovalEvent[];
        decodeApprovalEvent(event: Event): OSWAP_BridgeVault.ApprovalEvent;
        parseNewOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.NewOrderEvent[];
        decodeNewOrderEvent(event: Event): OSWAP_BridgeVault.NewOrderEvent;
        parseOrderCanceledEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.OrderCanceledEvent[];
        decodeOrderCanceledEvent(event: Event): OSWAP_BridgeVault.OrderCanceledEvent;
        parseRebalanceEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.RebalanceEvent[];
        decodeRebalanceEvent(event: Event): OSWAP_BridgeVault.RebalanceEvent;
        parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.RemoveLiquidityEvent[];
        decodeRemoveLiquidityEvent(event: Event): OSWAP_BridgeVault.RemoveLiquidityEvent;
        parseRemoveLiquidityRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.RemoveLiquidityRequestEvent[];
        decodeRemoveLiquidityRequestEvent(event: Event): OSWAP_BridgeVault.RemoveLiquidityRequestEvent;
        parseRequestCancelOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.RequestCancelOrderEvent[];
        decodeRequestCancelOrderEvent(event: Event): OSWAP_BridgeVault.RequestCancelOrderEvent;
        parseSwapEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.SwapEvent[];
        decodeSwapEvent(event: Event): OSWAP_BridgeVault.SwapEvent;
        parseSyncEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.SyncEvent[];
        decodeSyncEvent(event: Event): OSWAP_BridgeVault.SyncEvent;
        parseTransferEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.TransferEvent[];
        decodeTransferEvent(event: Event): OSWAP_BridgeVault.TransferEvent;
        parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.UpdateConfigStoreEvent[];
        decodeUpdateConfigStoreEvent(event: Event): OSWAP_BridgeVault.UpdateConfigStoreEvent;
        parseUpdateTrollRegistryEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.UpdateTrollRegistryEvent[];
        decodeUpdateTrollRegistryEvent(event: Event): OSWAP_BridgeVault.UpdateTrollRegistryEvent;
        parseVoidOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.VoidOrderEvent[];
        decodeVoidOrderEvent(event: Event): OSWAP_BridgeVault.VoidOrderEvent;
        parseWithdrawUnexecutedOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.WithdrawUnexecutedOrderEvent[];
        decodeWithdrawUnexecutedOrderEvent(event: Event): OSWAP_BridgeVault.WithdrawUnexecutedOrderEvent;
        parseWithdrawlTrollFeeEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.WithdrawlTrollFeeEvent[];
        decodeWithdrawlTrollFeeEvent(event: Event): OSWAP_BridgeVault.WithdrawlTrollFeeEvent;
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
        assetDecimalsScale: {
            (options?: TransactionOptions): Promise<BigNumber>;
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
        govToken: {
            (options?: TransactionOptions): Promise<string>;
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
        initAddress: {
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
    export module OSWAP_BridgeVault {
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
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault2.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault2.json.ts" {
    const _default_23: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_23;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault2.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault2.ts" {
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
    export class OSWAP_BridgeVault2 extends _Contract {
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
    export module OSWAP_BridgeVault2 {
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
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault2Creator.json.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault2Creator.json.ts" {
    const _default_24: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        })[];
        bytecode: string;
    };
    export default _default_24;
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault2Creator.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault2Creator.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export class OSWAP_BridgeVault2Creator extends _Contract {
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
}
/// <amd-module name="@scom/oswap-project-bridge-contract/contracts/index.ts" />
declare module "@scom/oswap-project-bridge-contract/contracts/index.ts" {
    export { Authorization } from "@scom/oswap-project-bridge-contract/contracts/Authorization.ts";
    export { MOCK_TrollRegistry } from "@scom/oswap-project-bridge-contract/contracts/MOCK_TrollRegistry.ts";
    export { MintableToken } from "@scom/oswap-project-bridge-contract/contracts/MintableToken.ts";
    export { MockErc20 } from "@scom/oswap-project-bridge-contract/contracts/MockErc20.ts";
    export { OSWAP_BridgeVaultTrollRegistry } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry.ts";
    export { OSWAP_BridgeVaultTrollRegistry2 } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry2.ts";
    export { OSWAP_BridgeVaultTrollRegistry2Creator } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVaultTrollRegistry2Creator.ts";
    export { OSWAP_ChainRegistry } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_ChainRegistry.ts";
    export { OSWAP_ChainRegistryExecutor } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_ChainRegistryExecutor.ts";
    export { OSWAP_ConfigStore } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_ConfigStore.ts";
    export { OSWAP_ConfigStoreTradeVault } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_ConfigStoreTradeVault.ts";
    export { OSWAP_ContractProxy } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_ContractProxy.ts";
    export { OSWAP_MainChainProjectRegistry } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainProjectRegistry.ts";
    export { OSWAP_MainChainTrollRegistry } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainTrollRegistry.ts";
    export { OSWAP_MainChainVotingExecutor } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_MainChainVotingExecutor.ts";
    export { OSWAP_RouterVaultWrapper } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_RouterVaultWrapper.ts";
    export { OSWAP_SideChainProjectRegistry } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainProjectRegistry.ts";
    export { OSWAP_SideChainTrollRegistry } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainTrollRegistry.ts";
    export { OSWAP_SideChainVotingExecutor } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_SideChainVotingExecutor.ts";
    export { OSWAP_VotingContract } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingContract.ts";
    export { OSWAP_VotingManager } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingManager.ts";
    export { OSWAP_VotingRegistry } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_VotingRegistry.ts";
    export { OSWAP_BridgeVault } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault.ts";
    export { OSWAP_BridgeVault2 } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault2.ts";
    export { OSWAP_BridgeVault2Creator } from "@scom/oswap-project-bridge-contract/contracts/OSWAP_BridgeVault2Creator.ts";
}
/// <amd-module name="@scom/oswap-project-bridge-contract" />
declare module "@scom/oswap-project-bridge-contract" {
    import * as Contracts from "@scom/oswap-project-bridge-contract/contracts/index.ts";
    export { Contracts };
}
