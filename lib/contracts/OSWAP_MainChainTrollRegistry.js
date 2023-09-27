"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSWAP_MainChainTrollRegistry = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const OSWAP_MainChainTrollRegistry_json_1 = __importDefault(require("./OSWAP_MainChainTrollRegistry.json"));
class OSWAP_MainChainTrollRegistry extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, OSWAP_MainChainTrollRegistry_json_1.default.abi, OSWAP_MainChainTrollRegistry_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.govToken, params.superTrollNft, params.generalTrollNft], options);
    }
    parseAddTrollEvent(receipt) {
        return this.parseEvents(receipt, "AddTroll").map(e => this.decodeAddTrollEvent(e));
    }
    decodeAddTrollEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            troll: result.troll,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            trollType: new eth_contract_1.BigNumber(result.trollType),
            _event: event
        };
    }
    parseAddTrollTypeEvent(receipt) {
        return this.parseEvents(receipt, "AddTrollType").map(e => this.decodeAddTrollTypeEvent(e));
    }
    decodeAddTrollTypeEvent(event) {
        let result = event.data;
        return {
            trollType: new eth_contract_1.BigNumber(result.trollType),
            name: result.name,
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
    parseBlockNftTokenIdEvent(receipt) {
        return this.parseEvents(receipt, "BlockNftTokenId").map(e => this.decodeBlockNftTokenIdEvent(e));
    }
    decodeBlockNftTokenIdEvent(event) {
        let result = event.data;
        return {
            nft: result.nft,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            blocked: result.blocked,
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
    parseResumeEvent(receipt) {
        return this.parseEvents(receipt, "Resume").map(e => this.decodeResumeEvent(e));
    }
    decodeResumeEvent(event) {
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownEvent(receipt) {
        return this.parseEvents(receipt, "Shutdown").map(e => this.decodeShutdownEvent(e));
    }
    decodeShutdownEvent(event) {
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseStakeTrollEvent(receipt) {
        return this.parseEvents(receipt, "StakeTroll").map(e => this.decodeStakeTrollEvent(e));
    }
    decodeStakeTrollEvent(event) {
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            nft: result.nft,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            stakesChange: new eth_contract_1.BigNumber(result.stakesChange),
            stakesBalance: new eth_contract_1.BigNumber(result.stakesBalance),
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
    parseUnstakeTrollEvent(receipt) {
        return this.parseEvents(receipt, "UnstakeTroll").map(e => this.decodeUnstakeTrollEvent(e));
    }
    decodeUnstakeTrollEvent(event) {
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            nft: result.nft,
            tokenId: new eth_contract_1.BigNumber(result.tokenId),
            stakesChange: new eth_contract_1.BigNumber(result.stakesChange),
            stakesBalance: new eth_contract_1.BigNumber(result.stakesBalance),
            _event: event
        };
    }
    parseUpdateNFTEvent(receipt) {
        return this.parseEvents(receipt, "UpdateNFT").map(e => this.decodeUpdateNFTEvent(e));
    }
    decodeUpdateNFTEvent(event) {
        let result = event.data;
        return {
            nft: result.nft,
            trollType: new eth_contract_1.BigNumber(result.trollType),
            _event: event
        };
    }
    parseUpdateTrollEvent(receipt) {
        return this.parseEvents(receipt, "UpdateTroll").map(e => this.decodeUpdateTrollEvent(e));
    }
    decodeUpdateTrollEvent(event) {
        let result = event.data;
        return {
            trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
            oldTroll: result.oldTroll,
            newTroll: result.newTroll,
            _event: event
        };
    }
    parseUpdateVotingManagerEvent(receipt) {
        return this.parseEvents(receipt, "UpdateVotingManager").map(e => this.decodeUpdateVotingManagerEvent(e));
    }
    decodeUpdateVotingManagerEvent(event) {
        let result = event.data;
        return {
            newVotingManager: result.newVotingManager,
            _event: event
        };
    }
    parseUpgradeEvent(receipt) {
        return this.parseEvents(receipt, "Upgrade").map(e => this.decodeUpgradeEvent(e));
    }
    decodeUpgradeEvent(event) {
        let result = event.data;
        return {
            newTrollRegistry: result.newTrollRegistry,
            _event: event
        };
    }
    assign() {
        let BlockedGeneralTroll_call = async (options) => {
            let result = await this.call('BlockedGeneralTroll', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.BlockedGeneralTroll = BlockedGeneralTroll_call;
        let BlockedSuperTroll_call = async (options) => {
            let result = await this.call('BlockedSuperTroll', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.BlockedSuperTroll = BlockedSuperTroll_call;
        let GeneralTroll_call = async (options) => {
            let result = await this.call('GeneralTroll', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.GeneralTroll = GeneralTroll_call;
        let SuperTroll_call = async (options) => {
            let result = await this.call('SuperTroll', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.SuperTroll = SuperTroll_call;
        let backerStakingParams = (params) => [params.backer, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
        let backerStaking_call = async (params, options) => {
            let result = await this.call('backerStaking', backerStakingParams(params), options);
            return (result.map(e => ({
                nft: e.nft,
                tokenId: new eth_contract_1.BigNumber(e.tokenId),
                trollProfileIndex: new eth_contract_1.BigNumber(e.trollProfileIndex),
                timestamp: new eth_contract_1.BigNumber(e.timestamp)
            })));
        };
        this.backerStaking = backerStaking_call;
        let getStakeTo_call = async (backer, options) => {
            let result = await this.call('getStakeTo', [backer], options);
            return (result.map(e => ({
                nft: e.nft,
                tokenId: new eth_contract_1.BigNumber(e.tokenId),
                trollProfileIndex: new eth_contract_1.BigNumber(e.trollProfileIndex),
                timestamp: new eth_contract_1.BigNumber(e.timestamp)
            })));
        };
        this.getStakeTo = getStakeTo_call;
        let getStakedBy_call = async (trollProfileIndex, options) => {
            let result = await this.call('getStakedBy', [this.wallet.utils.toString(trollProfileIndex)], options);
            return (result.map(e => ({
                nft: e.nft,
                tokenId: new eth_contract_1.BigNumber(e.tokenId)
            })));
        };
        this.getStakedBy = getStakedBy_call;
        let getStakes_call = async (troll, options) => {
            let result = await this.call('getStakes', [troll], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getStakes = getStakes_call;
        let getStakesByTrollProfile_call = async (trollProfileIndex, options) => {
            let result = await this.call('getStakesByTrollProfile', [this.wallet.utils.toString(trollProfileIndex)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getStakesByTrollProfile = getStakesByTrollProfile_call;
        let getTrollByNftParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId)];
        let getTrollByNft_call = async (params, options) => {
            let result = await this.call('getTrollByNft', getTrollByNftParams(params), options);
            return result;
        };
        this.getTrollByNft = getTrollByNft_call;
        let getTrollProfileByAddress_call = async (trollAddress, options) => {
            let result = await this.call('getTrollProfileByAddress', [trollAddress], options);
            return ({
                owner: result.owner,
                troll: result.troll,
                trollType: new eth_contract_1.BigNumber(result.trollType),
                nftCount: new eth_contract_1.BigNumber(result.nftCount)
            });
        };
        this.getTrollProfileByAddress = getTrollProfileByAddress_call;
        let getTrollProperties_call = async (trollProfileIndex, options) => {
            let result = await this.call('getTrollProperties', [this.wallet.utils.toString(trollProfileIndex)], options);
            return {
                troll: {
                    owner: result.troll.owner,
                    troll: result.troll.troll,
                    trollType: new eth_contract_1.BigNumber(result.troll.trollType),
                    nftCount: new eth_contract_1.BigNumber(result.troll.nftCount)
                },
                nfts: result.nfts.map(e => ({
                    nft: e.nft,
                    tokenId: new eth_contract_1.BigNumber(e.tokenId)
                })),
                backers: result.backers
            };
        };
        this.getTrollProperties = getTrollProperties_call;
        let getTrollPropertiesByAddress_call = async (trollAddress, options) => {
            let result = await this.call('getTrollPropertiesByAddress', [trollAddress], options);
            return {
                troll: {
                    owner: result.troll.owner,
                    troll: result.troll.troll,
                    trollType: new eth_contract_1.BigNumber(result.troll.trollType),
                    nftCount: new eth_contract_1.BigNumber(result.troll.nftCount)
                },
                nfts: result.nfts.map(e => ({
                    nft: e.nft,
                    tokenId: new eth_contract_1.BigNumber(e.tokenId)
                })),
                backers: result.backers
            };
        };
        this.getTrollPropertiesByAddress = getTrollPropertiesByAddress_call;
        let getTrollsParams = (params) => [this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
        let getTrolls_call = async (params, options) => {
            let result = await this.call('getTrolls', getTrollsParams(params), options);
            return (result.map(e => ({
                owner: e.owner,
                troll: e.troll,
                trollType: new eth_contract_1.BigNumber(e.trollType),
                nftCount: new eth_contract_1.BigNumber(e.nftCount)
            })));
        };
        this.getTrolls = getTrolls_call;
        let govToken_call = async (options) => {
            let result = await this.call('govToken', [], options);
            return result;
        };
        this.govToken = govToken_call;
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
        let newTrollRegistry_call = async (options) => {
            let result = await this.call('newTrollRegistry', [], options);
            return result;
        };
        this.newTrollRegistry = newTrollRegistry_call;
        let nftType_call = async (param1, options) => {
            let result = await this.call('nftType', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.nftType = nftType_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let ownerTrollsParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
        let ownerTrolls_call = async (params, options) => {
            let result = await this.call('ownerTrolls', ownerTrollsParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.ownerTrolls = ownerTrolls_call;
        let ownerTrollsLength_call = async (owner, options) => {
            let result = await this.call('ownerTrollsLength', [owner], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.ownerTrollsLength = ownerTrollsLength_call;
        let paused_call = async (options) => {
            let result = await this.call('paused', [], options);
            return result;
        };
        this.paused = paused_call;
        let stakeOf_call = async (param1, options) => {
            let result = await this.call('stakeOf', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.stakeOf = stakeOf_call;
        let stakeToParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
        let stakeTo_call = async (params, options) => {
            let result = await this.call('stakeTo', stakeToParams(params), options);
            return {
                nft: result.nft,
                tokenId: new eth_contract_1.BigNumber(result.tokenId),
                trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
                timestamp: new eth_contract_1.BigNumber(result.timestamp)
            };
        };
        this.stakeTo = stakeTo_call;
        let stakeToInvParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
        let stakeToInv_call = async (params, options) => {
            let result = await this.call('stakeToInv', stakeToInvParams(params), options);
            return {
                backer: result.backer,
                index: new eth_contract_1.BigNumber(result.index)
            };
        };
        this.stakeToInv = stakeToInv_call;
        let stakeToLength_call = async (backer, options) => {
            let result = await this.call('stakeToLength', [backer], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.stakeToLength = stakeToLength_call;
        let stakedByParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
        let stakedBy_call = async (params, options) => {
            let result = await this.call('stakedBy', stakedByParams(params), options);
            return {
                nft: result.nft,
                tokenId: new eth_contract_1.BigNumber(result.tokenId)
            };
        };
        this.stakedBy = stakedBy_call;
        let stakedByInvParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
        let stakedByInv_call = async (params, options) => {
            let result = await this.call('stakedByInv', stakedByInvParams(params), options);
            return {
                trollProfileIndex: new eth_contract_1.BigNumber(result.trollProfileIndex),
                index: new eth_contract_1.BigNumber(result.index)
            };
        };
        this.stakedByInv = stakedByInv_call;
        let stakedByLength_call = async (trollProfileIndex, options) => {
            let result = await this.call('stakedByLength', [this.wallet.utils.toString(trollProfileIndex)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.stakedByLength = stakedByLength_call;
        let totalStake_call = async (options) => {
            let result = await this.call('totalStake', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.totalStake = totalStake_call;
        let trollNft_call = async (param1, options) => {
            let result = await this.call('trollNft', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.trollNft = trollNft_call;
        let trollNftInv_call = async (param1, options) => {
            let result = await this.call('trollNftInv', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.trollNftInv = trollNftInv_call;
        let trollNftLength_call = async (options) => {
            let result = await this.call('trollNftLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.trollNftLength = trollNftLength_call;
        let trollProfileInv_call = async (param1, options) => {
            let result = await this.call('trollProfileInv', [param1], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.trollProfileInv = trollProfileInv_call;
        let trollProfiles_call = async (param1, options) => {
            let result = await this.call('trollProfiles', [this.wallet.utils.toString(param1)], options);
            return {
                owner: result.owner,
                troll: result.troll,
                trollType: new eth_contract_1.BigNumber(result.trollType),
                nftCount: new eth_contract_1.BigNumber(result.nftCount)
            };
        };
        this.trollProfiles = trollProfiles_call;
        let trollProfilesLength_call = async (options) => {
            let result = await this.call('trollProfilesLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.trollProfilesLength = trollProfilesLength_call;
        let votingManager_call = async (options) => {
            let result = await this.call('votingManager', [], options);
            return result;
        };
        this.votingManager = votingManager_call;
        let addStakesTrollParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.amount)];
        let addStakesTroll_send = async (params, options) => {
            let result = await this.send('addStakesTroll', addStakesTrollParams(params), options);
            return result;
        };
        let addStakesTroll_call = async (params, options) => {
            let result = await this.call('addStakesTroll', addStakesTrollParams(params), options);
            return;
        };
        this.addStakesTroll = Object.assign(addStakesTroll_send, {
            call: addStakesTroll_call
        });
        let addTrollParams = (params) => [params.troll, this.wallet.utils.toString(params.trollType), this.wallet.utils.stringToBytes(params.signature)];
        let addTroll_send = async (params, options) => {
            let result = await this.send('addTroll', addTrollParams(params), options);
            return result;
        };
        let addTroll_call = async (params, options) => {
            let result = await this.call('addTroll', addTrollParams(params), options);
            return;
        };
        this.addTroll = Object.assign(addTroll_send, {
            call: addTroll_call
        });
        let addTrollType_send = async (name, options) => {
            let result = await this.send('addTrollType', [this.wallet.utils.stringToBytes(name)], options);
            return result;
        };
        let addTrollType_call = async (name, options) => {
            let result = await this.call('addTrollType', [this.wallet.utils.stringToBytes(name)], options);
            return;
        };
        this.addTrollType = Object.assign(addTrollType_send, {
            call: addTrollType_call
        });
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
        let initAddress_send = async (votingManager, options) => {
            let result = await this.send('initAddress', [votingManager], options);
            return result;
        };
        let initAddress_call = async (votingManager, options) => {
            let result = await this.call('initAddress', [votingManager], options);
            return;
        };
        this.initAddress = Object.assign(initAddress_send, {
            call: initAddress_call
        });
        let onERC721ReceivedParams = (params) => [params.param1, params.param2, this.wallet.utils.toString(params.param3), this.wallet.utils.stringToBytes(params.param4)];
        let onERC721Received_send = async (params, options) => {
            let result = await this.send('onERC721Received', onERC721ReceivedParams(params), options);
            return result;
        };
        let onERC721Received_call = async (params, options) => {
            let result = await this.call('onERC721Received', onERC721ReceivedParams(params), options);
            return result;
        };
        this.onERC721Received = Object.assign(onERC721Received_send, {
            call: onERC721Received_call
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
        let resume_send = async (options) => {
            let result = await this.send('resume', [], options);
            return result;
        };
        let resume_call = async (options) => {
            let result = await this.call('resume', [], options);
            return;
        };
        this.resume = Object.assign(resume_send, {
            call: resume_call
        });
        let shutdownByAdmin_send = async (options) => {
            let result = await this.send('shutdownByAdmin', [], options);
            return result;
        };
        let shutdownByAdmin_call = async (options) => {
            let result = await this.call('shutdownByAdmin', [], options);
            return;
        };
        this.shutdownByAdmin = Object.assign(shutdownByAdmin_send, {
            call: shutdownByAdmin_call
        });
        let shutdownByVoting_send = async (options) => {
            let result = await this.send('shutdownByVoting', [], options);
            return result;
        };
        let shutdownByVoting_call = async (options) => {
            let result = await this.call('shutdownByVoting', [], options);
            return;
        };
        this.shutdownByVoting = Object.assign(shutdownByVoting_send, {
            call: shutdownByVoting_call
        });
        let stakeTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.nft, this.wallet.utils.toString(params.tokenId)];
        let stakeTroll_send = async (params, options) => {
            let result = await this.send('stakeTroll', stakeTrollParams(params), options);
            return result;
        };
        let stakeTroll_call = async (params, options) => {
            let result = await this.call('stakeTroll', stakeTrollParams(params), options);
            return;
        };
        this.stakeTroll = Object.assign(stakeTroll_send, {
            call: stakeTroll_call
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
        let unstakeTrollParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId)];
        let unstakeTroll_send = async (params, options) => {
            let result = await this.send('unstakeTroll', unstakeTrollParams(params), options);
            return result;
        };
        let unstakeTroll_call = async (params, options) => {
            let result = await this.call('unstakeTroll', unstakeTrollParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.unstakeTroll = Object.assign(unstakeTroll_send, {
            call: unstakeTroll_call
        });
        let updateNftParams = (params) => [params.nft, this.wallet.utils.toString(params.trollType)];
        let updateNft_send = async (params, options) => {
            let result = await this.send('updateNft', updateNftParams(params), options);
            return result;
        };
        let updateNft_call = async (params, options) => {
            let result = await this.call('updateNft', updateNftParams(params), options);
            return;
        };
        this.updateNft = Object.assign(updateNft_send, {
            call: updateNft_call
        });
        let updateTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.newTroll, this.wallet.utils.stringToBytes(params.signature)];
        let updateTroll_send = async (params, options) => {
            let result = await this.send('updateTroll', updateTrollParams(params), options);
            return result;
        };
        let updateTroll_call = async (params, options) => {
            let result = await this.call('updateTroll', updateTrollParams(params), options);
            return;
        };
        this.updateTroll = Object.assign(updateTroll_send, {
            call: updateTroll_call
        });
        let updateVotingManager_send = async (options) => {
            let result = await this.send('updateVotingManager', [], options);
            return result;
        };
        let updateVotingManager_call = async (options) => {
            let result = await this.call('updateVotingManager', [], options);
            return;
        };
        this.updateVotingManager = Object.assign(updateVotingManager_send, {
            call: updateVotingManager_call
        });
        let upgrade_send = async (trollRegistry, options) => {
            let result = await this.send('upgrade', [trollRegistry], options);
            return result;
        };
        let upgrade_call = async (trollRegistry, options) => {
            let result = await this.call('upgrade', [trollRegistry], options);
            return;
        };
        this.upgrade = Object.assign(upgrade_send, {
            call: upgrade_call
        });
        let upgradeByAdmin_send = async (trollRegistry, options) => {
            let result = await this.send('upgradeByAdmin', [trollRegistry], options);
            return result;
        };
        let upgradeByAdmin_call = async (trollRegistry, options) => {
            let result = await this.call('upgradeByAdmin', [trollRegistry], options);
            return;
        };
        this.upgradeByAdmin = Object.assign(upgradeByAdmin_send, {
            call: upgradeByAdmin_call
        });
    }
}
OSWAP_MainChainTrollRegistry._abi = OSWAP_MainChainTrollRegistry_json_1.default.abi;
exports.OSWAP_MainChainTrollRegistry = OSWAP_MainChainTrollRegistry;
