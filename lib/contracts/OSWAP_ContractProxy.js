"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_ContractProxy = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_ContractProxy_json_1 = __importDefault(require("./OSWAP_ContractProxy.json"));
class OSWAP_ContractProxy extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_ContractProxy_json_1.default.abi, OSWAP_ContractProxy_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.logic, params.votingManager, this.wallet.utils.stringToBytes(params.data)], options);
    }
    parseAdminChangedEvent(receipt) {
        return this.parseEvents(receipt, "AdminChanged").map(e => this.decodeAdminChangedEvent(e));
    }
    decodeAdminChangedEvent(event) {
        let result = event.data;
        return {
            previousAdmin: result.previousAdmin,
            newAdmin: result.newAdmin,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBeaconUpgradedEvent(receipt) {
        return this.parseEvents(receipt, "BeaconUpgraded").map(e => this.decodeBeaconUpgradedEvent(e));
    }
    decodeBeaconUpgradedEvent(event) {
        let result = event.data;
        return {
            beacon: result.beacon,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt) {
        return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt) {
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt) {
        return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUpgradedEvent(receipt) {
        return this.parseEvents(receipt, "Upgraded").map(e => this.decodeUpgradedEvent(e));
    }
    decodeUpgradedEvent(event) {
        let result = event.data;
        return {
            implementation: result.implementation,
            _event: event
        };
    }
    assign() {
        let implementation_call = async (options) => {
            let result = await this.call('implementation', [], options);
            return result;
        };
        this.implementation = implementation_call;
        let isPermitted_call = async (param1, options) => {
            let result = await this.call('isPermitted', [param1], options);
            return result;
        };
        this.isPermitted = isPermitted_call;
        let newOwner_call = async (options) => {
            let result = await this.call('newOwner', [], options);
            return result;
        };
        this.newOwner = newOwner_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let deny_send = async (user, options) => {
            let result = await this.send('deny', [user], options);
            return result;
        };
        let deny_call = async (user, options) => {
            let result = await this.call('deny', [user], options);
            return;
        };
        this.deny = Object.assign(deny_send, {
            call: deny_call
        });
        let permit_send = async (user, options) => {
            let result = await this.send('permit', [user], options);
            return result;
        };
        let permit_call = async (user, options) => {
            let result = await this.call('permit', [user], options);
            return;
        };
        this.permit = Object.assign(permit_send, {
            call: permit_call
        });
        let takeOwnership_send = async (options) => {
            let result = await this.send('takeOwnership', [], options);
            return result;
        };
        let takeOwnership_call = async (options) => {
            let result = await this.call('takeOwnership', [], options);
            return;
        };
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call: takeOwnership_call
        });
        let transferOwnership_send = async (newOwner, options) => {
            let result = await this.send('transferOwnership', [newOwner], options);
            return result;
        };
        let transferOwnership_call = async (newOwner, options) => {
            let result = await this.call('transferOwnership', [newOwner], options);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let upgradeToParams = (params) => [params.oldImplementation, params.newImplementation, params.finalize];
        let upgradeTo_send = async (params, options) => {
            let result = await this.send('upgradeTo', upgradeToParams(params), options);
            return result;
        };
        let upgradeTo_call = async (params, options) => {
            let result = await this.call('upgradeTo', upgradeToParams(params), options);
            return;
        };
        this.upgradeTo = Object.assign(upgradeTo_send, {
            call: upgradeTo_call
        });
        let upgradeToAndCallParams = (params) => [params.oldImplementation, params.newImplementation, this.wallet.utils.stringToBytes(params.data), params.finalize];
        let upgradeToAndCall_send = async (params, options) => {
            let result = await this.send('upgradeToAndCall', upgradeToAndCallParams(params), options);
            return result;
        };
        let upgradeToAndCall_call = async (params, options) => {
            let result = await this.call('upgradeToAndCall', upgradeToAndCallParams(params), options);
            return;
        };
        this.upgradeToAndCall = Object.assign(upgradeToAndCall_send, {
            call: upgradeToAndCall_call
        });
    }
}
OSWAP_ContractProxy._abi = OSWAP_ContractProxy_json_1.default.abi;
exports.OSWAP_ContractProxy = OSWAP_ContractProxy;
