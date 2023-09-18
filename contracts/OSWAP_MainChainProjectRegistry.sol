// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.8.6;

import "./OSWAP_MainChainTrollRegistry.sol";
import "./Authorization.sol";

contract OSWAP_MainChainProjectRegistry is Authorization {
    modifier whenPaused() {
        require(paused(), "NOT PAUSED!");
        _;
    }
    modifier whenNotPaused() {
        require(!paused(), "PAUSED!");
        _;
    }

    struct Token {
        uint256 chainId;
        address token;
    }
    struct Project {
        address owner;
        address newOwner;
        uint256[] projectTrolls; // trollProfileIndex
        uint256[] chainIds;
        mapping(uint256 => address) tokens; // tokens[chainid] = token
    }

    bool private _paused;
    OSWAP_MainChainTrollRegistry public trollRegistry;
    Project[] public projects;
    mapping(uint256 => mapping(uint256 => uint256)) public projectTrollsInv; // projectTrollsInv[projectId][projectTroll] = projects.projectTrolls.idx

    event Shutdown(address indexed account);
    event Resume();
    event NewProject(uint256 indexed projectId, address indexed owner, uint256[] projectTrolls);
    event NewProjectToken(uint256 indexed projectId, uint256 indexed chainId, address indexed token, uint256 nonce, bytes signature);
    event StartProjectOwnershipTransfer(uint256 indexed projectId, address indexed newOwner);
    event TransferProjectOwnership(uint256 indexed projectId, address indexed newOwner, uint256 nonce, bytes signature);
    event AddTrolls(uint256 indexed projectId, uint256[] trollProfileIndex, uint256 nonce, bytes signature);
    event RemoveTrolls(uint256 indexed projectId, uint256[] trollProfileIndex, uint256 nonce, bytes signature);

    constructor(OSWAP_MainChainTrollRegistry _trollRegistry) {
        trollRegistry = _trollRegistry;
    }
    function paused() public view returns (bool) {
        return _paused;
    }
    function shutdownByAdmin() external auth whenNotPaused {
        _paused = true;
        emit Shutdown(msg.sender);
    }
    function resume() external auth whenPaused {
        _paused = false;
        emit Resume();
    }
    function projectLength() external view returns (uint256 length) {
        length = projects.length;
    }
    function getProject(uint256 projectId) public view returns (
        address owner, 
        address newOwner, 
        uint256[] memory projectTrolls, 
        uint256[] memory chainIds, 
        address[] memory tokens
    ) {
        Project storage project = projects[projectId];
        owner = project.owner;
        newOwner = project.newOwner;
        projectTrolls = project.projectTrolls;
        chainIds = project.chainIds;
        uint256 length = chainIds.length;
        tokens = new address[](length);
        uint256 i;
        while (i < length) {
            tokens[i] = project.tokens[chainIds[i]];
            unchecked { i++; }
        }
    }
    function getProjects(uint256 start, uint256 length) external view returns (
        address[] memory owner, 
        uint256[][] memory projectTrolls, 
        uint256[][] memory chainIds, 
        address[][] memory tokens
    ) {
        if (start > projects.length)
            start = projects.length;
        if (start + length > projects.length)
            length = projects.length - start;

        owner = new address[](length);
        projectTrolls = new uint256[][](length);
        chainIds = new uint256[][](length);
        tokens = new address[][](length);

        uint256 i;
        while (i < length) {
            (owner[i], , projectTrolls[i], chainIds[i], tokens[i]) = getProject(i + start);
            unchecked { i++; }
        }
    }
    function projectsTrollsAndChainsLength(uint256 projectId) external view returns (uint256 trolls, uint256 chains) {
        Project storage project = projects[projectId];
        trolls = project.projectTrolls.length;
        chains = project.chainIds.length;
    }
    function _addProjectToken(uint256 projectId, Project storage project, Token calldata token, uint256 nonce, bytes calldata signature) internal {
        require(project.tokens[token.chainId] == address(0), "token already exists");
        project.chainIds.push(token.chainId);
        project.tokens[token.chainId] = token.token;
        emit NewProjectToken(projectId, token.chainId, token.token, nonce, signature);
    }
    function newProject(Token[] calldata tokens, uint256[] calldata projectTrolls, uint256 nonce, bytes[] calldata signatures) external whenNotPaused returns (uint256 projectId) {
        projectId = projects.length;
        projects.push();
        Project storage project = projects[projectId];
        project.owner = msg.sender;
        project.projectTrolls = projectTrolls;
        emit NewProject(projectId, msg.sender, projectTrolls);

        uint256 i;
        uint256 length = tokens.length;
        require(length == signatures.length, "array length not matched");
        while ( i < length) {
            _addProjectToken(projectId, project, tokens[i], nonce, signatures[i]);
            unchecked { i++; }
        }
        i = 0;
        length = projectTrolls.length;
        while ( i < length ) {
            (/*address owner*/, /*address troll*/, OSWAP_MainChainTrollRegistry.TrollType trollType, /*uint256 nftCount*/) = trollRegistry.trollProfiles(projectTrolls[i]);
            require(trollType == OSWAP_MainChainTrollRegistry.TrollType.ProjectTroll, "not a project troll");
            require(projectTrollsInv[projectId][projectTrolls[i]] == 0, "troll already exists");
            projectTrollsInv[projectId][projectTrolls[i]] = i;
            unchecked { i++; }
        }
    }
    function addProjectToken(uint256 projectId, Token[] calldata tokens, uint256 nonce, bytes[] calldata signatures) external whenNotPaused {
        Project storage project = projects[projectId];
        require(project.owner == msg.sender, "not from owner");
        uint256 i;
        uint256 length = tokens.length;
        require(length == signatures.length, "array length not matched");
        while ( i < length) {
            _addProjectToken(projectId, project, tokens[i], nonce, signatures[i]);
            unchecked { i++; }
        }
    }
    function transferProjectOwnership(uint256 projectId, address newOwner_) external {
        require(projectId < projects.length, "invalid projectId");
        require(msg.sender == projects[projectId].owner, "not from project owner");
        projects[projectId].newOwner = newOwner_;
        emit StartProjectOwnershipTransfer(projectId, newOwner_);
    }
    function takeProjectOwnership(uint256 projectId, uint256 nonce, bytes calldata signature) external {
        require(projects[projectId].owner != address(0), "invalid projectId");
        require(msg.sender == projects[projectId].newOwner, "Action performed by unauthorized address.");
        projects[projectId].owner = projects[projectId].newOwner;
        projects[projectId].newOwner = address(0);
        emit TransferProjectOwnership(projectId, projects[projectId].owner, nonce, signature);
    }
    function addTrolls(uint256 projectId, uint256[] calldata trollProfileIndex, uint256 nonce, bytes calldata signature) external {
        uint256 length = trollProfileIndex.length;
        if (length > 0) {
            uint256 i = 0;
            uint256 index = projects[projectId].projectTrolls.length;
            while (i < length) {
                uint256 troll = trollProfileIndex[i];
                require(projectTrollsInv[projectId][troll] == 0, "troll already exists");
                projects[projectId].projectTrolls.push(troll);
                projectTrollsInv[projectId][troll] = index;
                index++;
                unchecked { i++; }
            }
        }
        emit AddTrolls(projectId, trollProfileIndex, nonce, signature);
    }
    function removeTrolls(uint256 projectId, uint256[] calldata trollProfileIndex, uint256 nonce, bytes calldata signature) external {
        uint256 length = trollProfileIndex.length;
        if (length > 0) {
            uint256 i = 0;
            while (i < length) {
                uint256 troll = trollProfileIndex[i];
                uint256 index = projectTrollsInv[projectId][troll];
                require(projects[projectId].projectTrolls[index] == troll, "troll not exists");
                uint256 lastIndex = projects[projectId].projectTrolls.length - 1;
                if (index < lastIndex) {
                    uint256 troll2 = projects[projectId].projectTrolls[lastIndex];
                    projects[projectId].projectTrolls[index] = troll2;
                    projectTrollsInv[projectId][troll2] = index;
                }
                projects[projectId].projectTrolls.pop();
                delete projectTrollsInv[projectId][troll];
                unchecked { i++; }
            }
        }
        emit RemoveTrolls(projectId, trollProfileIndex, nonce, signature);
    }
}