"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "abi": [
        { "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "_decimals_", "type": "uint8" }], "stateMutability": "nonpayable", "type": "constructor" },
        { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
        { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" },
        { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" },
        { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" },
        { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" },
        { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
        { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" },
        { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "MINTER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "PAUSER_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
        { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
        { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
    ],
    "bytecode": "60a06040523480156200001157600080fd5b5060405162002694380380620026948339810160408190526200003491620003cd565b8282818181600590805190602001906200005092919062000270565b5080516200006690600690602084019062000270565b50506007805460ff1916905550620000806000336200010b565b620000ac7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200010b565b620000d87f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336200010b565b505060f81b7fff000000000000000000000000000000000000000000000000000000000000001660805250620004a59050565b6200012282826200014e60201b62000b7b1760201c565b60008281526001602090815260409091206200014991839062000b856200015e821b17901c565b505050565b6200015a82826200017e565b5050565b600062000175836001600160a01b0384166200021e565b90505b92915050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166200015a576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001da3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000818152600183016020526040812054620002675750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000178565b50600062000178565b8280546200027e9062000452565b90600052602060002090601f016020900481019282620002a25760008555620002ed565b82601f10620002bd57805160ff1916838001178555620002ed565b82800160010185558215620002ed579182015b82811115620002ed578251825591602001919060010190620002d0565b50620002fb929150620002ff565b5090565b5b80821115620002fb576000815560010162000300565b600082601f8301126200032857600080fd5b81516001600160401b03808211156200034557620003456200048f565b604051601f8301601f19908116603f011681019082821181831017156200037057620003706200048f565b816040528381526020925086838588010111156200038d57600080fd5b600091505b83821015620003b1578582018301518183018401529082019062000392565b83821115620003c35760008385830101525b9695505050505050565b600080600060608486031215620003e357600080fd5b83516001600160401b0380821115620003fb57600080fd5b620004098783880162000316565b945060208601519150808211156200042057600080fd5b506200042f8682870162000316565b925050604084015160ff811681146200044757600080fd5b809150509250925092565b600181811c908216806200046757607f821691505b602082108114156200048957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160f81c6121d0620004c4600039600061027d01526121d06000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d53913931461041c578063d547741f14610443578063dd62ed3e14610456578063e63ab1e91461049c57600080fd5b8063a457c2d7146103e3578063a9059cbb146103f6578063ca15c8731461040957600080fd5b80639010d07c116100d35780639010d07c1461035757806391d148541461038f57806395d89b41146103d3578063a217fddf146103db57600080fd5b806370a082311461030657806379cc67901461033c5780638456cb591461034f57600080fd5b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146102cd57806340c10f19146102d557806342966c68146102e85780635c975abb146102fb57600080fd5b8063313ce5671461027657806336568abe146102a757806339509351146102ba57600080fd5b806318160ddd116101a257806318160ddd1461021957806323b872dd1461022b578063248a9ca31461023e5780632f2ff15d1461026157600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063095ea7b314610206575b600080fd5b6101dc6101d7366004611ea9565b6104c3565b60405190151581526020015b60405180910390f35b6101f961051f565b6040516101e89190611f6c565b6101dc610214366004611e21565b6105b1565b6004545b6040519081526020016101e8565b6101dc610239366004611de5565b6105c7565b61021d61024c366004611e4b565b60009081526020819052604090206001015490565b61027461026f366004611e64565b6106b2565b005b60405160ff7f00000000000000000000000000000000000000000000000000000000000000001681526020016101e8565b6102746102b5366004611e64565b6106d9565b6101dc6102c8366004611e21565b6106fb565b610274610744565b6102746102e3366004611e21565b610804565b6102746102f6366004611e4b565b6108c8565b60075460ff166101dc565b61021d610314366004611d97565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b61027461034a366004611e21565b6108d5565b610274610989565b61036a610365366004611e87565b610a47565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101e8565b6101dc61039d366004611e64565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6101f9610a66565b61021d600081565b6101dc6103f1366004611e21565b610a75565b6101dc610404366004611e21565b610b4d565b61021d610417366004611e4b565b610b5a565b61021d7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610274610451366004611e64565b610b71565b61021d610464366004611db2565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260036020908152604080832093909416825291909152205490565b61021d7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f5a05180f000000000000000000000000000000000000000000000000000000001480610519575061051982610ba7565b92915050565b60606005805461052e9061208a565b80601f016020809104026020016040519081016040528092919081815260200182805461055a9061208a565b80156105a75780601f1061057c576101008083540402835291602001916105a7565b820191906000526020600020905b81548152906001019060200180831161058a57829003601f168201915b5050505050905090565b60006105be338484610c3e565b50600192915050565b60006105d4848484610df1565b73ffffffffffffffffffffffffffffffffffffffff841660009081526003602090815260408083203384529091529020548281101561069a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6106a78533858403610c3e565b506001949350505050565b6106bc82826110b1565b60008281526001602052604090206106d49082610b85565b505050565b6106e382826110d7565b60008281526001602052604090206106d49082611186565b33600081815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916105be91859061073f908690611fbd565b610c3e565b61076e7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361039d565b6107fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e7061757365000000000000006064820152608401610691565b6108026111a8565b565b61082e7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361039d565b6108ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f7665206d696e74657220726f6c6520746f206d696e74000000000000000000006064820152608401610691565b6108c48282611289565b5050565b6108d233826113b5565b50565b60006108e18333610464565b905081811015610972576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7760448201527f616e6365000000000000000000000000000000000000000000000000000000006064820152608401610691565b61097f8333848403610c3e565b6106d483836113b5565b6109b37f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a3361039d565b610a3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f2070617573650000000000000000006064820152608401610691565b6108026115ae565b6000828152600160205260408120610a5f908361166e565b9392505050565b60606006805461052e9061208a565b33600090815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915281205482811015610b36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610691565b610b433385858403610c3e565b5060019392505050565b60006105be338484610df1565b60008181526001602052604081206105199061167a565b6106e38282611684565b6108c482826116aa565b6000610a5f8373ffffffffffffffffffffffffffffffffffffffff841661179a565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061051957507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610519565b73ffffffffffffffffffffffffffffffffffffffff8316610ce0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610691565b73ffffffffffffffffffffffffffffffffffffffff8216610d83576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610691565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610e94576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610691565b73ffffffffffffffffffffffffffffffffffffffff8216610f37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610691565b610f428383836117e9565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602052604090205481811015610ff8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610691565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526002602052604080822085850390559185168152908120805484929061103c908490611fbd565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110a291815260200190565b60405180910390a35b50505050565b6000828152602081905260409020600101546110cd81336117f4565b6106d483836116aa565b73ffffffffffffffffffffffffffffffffffffffff8116331461117c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610691565b6108c482826118c4565b6000610a5f8373ffffffffffffffffffffffffffffffffffffffff841661197b565b60075460ff16611214576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610691565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b73ffffffffffffffffffffffffffffffffffffffff8216611306576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610691565b611312600083836117e9565b80600460008282546113249190611fbd565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152600260205260408120805483929061135e908490611fbd565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8216611458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610691565b611464826000836117e9565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600260205260409020548181101561151a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610691565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600260205260408120838303905560048054849290611556908490612012565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b60075460ff161561161b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610691565b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861125f3390565b6000610a5f8383611a6e565b6000610519825490565b6000828152602081905260409020600101546116a081336117f4565b6106d483836118c4565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166108c45760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905561173c3390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008181526001830160205260408120546117e157508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610519565b506000610519565b6106d4838383611a98565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166108c45761184a8173ffffffffffffffffffffffffffffffffffffffff166014611b2b565b611855836020611b2b565b604051602001611866929190611eeb565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a000000000000000000000000000000000000000000000000000000000825261069191600401611f6c565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156108c45760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60008181526001830160205260408120548015611a6457600061199f600183612012565b85549091506000906119b390600190612012565b9050818114611a185760008660000182815481106119d3576119d361213c565b90600052602060002001549050808760000184815481106119f6576119f661213c565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611a2957611a2961210d565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610519565b6000915050610519565b6000826000018281548110611a8557611a8561213c565b9060005260206000200154905092915050565b60075460ff16156106d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e7366657220776860448201527f696c6520706175736564000000000000000000000000000000000000000000006064820152608401610691565b60606000611b3a836002611fd5565b611b45906002611fbd565b67ffffffffffffffff811115611b5d57611b5d61216b565b6040519080825280601f01601f191660200182016040528015611b87576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611bbe57611bbe61213c565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611c2157611c2161213c565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611c5d846002611fd5565b611c68906001611fbd565b90505b6001811115611d05577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611ca957611ca961213c565b1a60f81b828281518110611cbf57611cbf61213c565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611cfe81612055565b9050611c6b565b508315610a5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610691565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d9257600080fd5b919050565b600060208284031215611da957600080fd5b610a5f82611d6e565b60008060408385031215611dc557600080fd5b611dce83611d6e565b9150611ddc60208401611d6e565b90509250929050565b600080600060608486031215611dfa57600080fd5b611e0384611d6e565b9250611e1160208501611d6e565b9150604084013590509250925092565b60008060408385031215611e3457600080fd5b611e3d83611d6e565b946020939093013593505050565b600060208284031215611e5d57600080fd5b5035919050565b60008060408385031215611e7757600080fd5b82359150611ddc60208401611d6e565b60008060408385031215611e9a57600080fd5b50508035926020909101359150565b600060208284031215611ebb57600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610a5f57600080fd5b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611f23816017850160208801612029565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351611f60816028840160208801612029565b01602801949350505050565b6020815260008251806020840152611f8b816040850160208701612029565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008219821115611fd057611fd06120de565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561200d5761200d6120de565b500290565b600082821015612024576120246120de565b500390565b60005b8381101561204457818101518382015260200161202c565b838111156110ab5750506000910152565b600081612064576120646120de565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b600181811c9082168061209e57607f821691505b602082108114156120d8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea26469706673582212201fde0a32730bb03a1964f3a9cbdaea0a2cc7c28b31247c9367e70f2292fdd5b664736f6c63430008060033"
};