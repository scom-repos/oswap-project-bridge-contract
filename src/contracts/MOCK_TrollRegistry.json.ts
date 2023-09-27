export default {
"abi":[
{"inputs":[{"internalType":"contract IERC20","name":"_govToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"troll","type":"address"},{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isSuperTroll","type":"bool"}],"name":"AddTroll","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Authorize","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Deauthorize","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"}],"name":"DelistTroll","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":false,"internalType":"address","name":"lockedBy","type":"address"}],"name":"LockGeneralTroll","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":false,"internalType":"address","name":"lockedBy","type":"address"}],"name":"LockSuperTroll","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"name","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"value","type":"bytes32"}],"name":"ParamSet","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"name","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"value1","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"value2","type":"bytes32"}],"name":"ParamSet2","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"}],"name":"RemoveTroll","type":"event"},
{"anonymous":false,"inputs":[],"name":"Resume","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newVotingExecutor","type":"address"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"}],"name":"SetVotingExecutor","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"Shutdown","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"StartOwnershipTransfer","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"TransferOwnership","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"}],"name":"UnlockGeneralTroll","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":false,"internalType":"bool","name":"unlock","type":"bool"},{"indexed":false,"internalType":"address","name":"bridgeVault","type":"address"},{"indexed":false,"internalType":"uint256","name":"penalty","type":"uint256"}],"name":"UnlockSuperTroll","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract OSWAP_ConfigStore","name":"newConfigStore","type":"address"}],"name":"UpdateConfigStore","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":true,"internalType":"address","name":"oldTroll","type":"address"},{"indexed":true,"internalType":"address","name":"newTroll","type":"address"}],"name":"UpdateTroll","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newTrollRegistry","type":"address"}],"name":"Upgrade","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract OSWAP_VotingManager","name":"newVotingManager","type":"address"}],"name":"UpgradeVotingManager","type":"event"},
{"inputs":[{"internalType":"bytes[]","name":"signatures","type":"bytes[]"},{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"address","name":"troll","type":"address"},{"internalType":"bool","name":"_isSuperTroll","type":"bool"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"addTroll","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"configStore","outputs":[{"internalType":"contract OSWAP_ConfigStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"deny","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"generalTrollCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"govToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"contract OSWAP_ConfigStore","name":"_configStore","type":"address"}],"name":"initAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"troll","type":"address"},{"internalType":"bool","name":"returnFalseIfBlocked","type":"bool"}],"name":"isGeneralTroll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"bool","name":"returnFalseIfBlocked","type":"bool"}],"name":"isGeneralTrollByIndex","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isPermitted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"troll","type":"address"},{"internalType":"bool","name":"returnFalseIfBlocked","type":"bool"}],"name":"isSuperTroll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"bool","name":"returnFalseIfBlocked","type":"bool"}],"name":"isSuperTrollByIndex","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isVotingExecutor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"}],"name":"lockGeneralTroll","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"}],"name":"lockSuperTroll","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"newTrollRegistry","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"newVotingManager","outputs":[{"internalType":"contract OSWAP_VotingManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"bytes[]","name":"signatures","type":"bytes[]"},{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"removeTroll","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"resume","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"_votingExecutor","type":"address"},{"internalType":"bool","name":"_bool","type":"bool"}],"name":"setVotingExecutor","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"shutdownByAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"shutdownByVoting","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"superTrollCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"takeOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"trollProfileInv","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"trollProfiles","outputs":[{"internalType":"address","name":"troll","type":"address"},{"internalType":"enum MOCK_TrollRegistry.TrollType","name":"trollType","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"trollRegistry","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"bytes[]","name":"signatures","type":"bytes[]"},{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"unlockGeneralTroll","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"bytes[]","name":"signatures","type":"bytes[]"},{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"bool","name":"unlock","type":"bool"},{"internalType":"address[]","name":"vaultRegistry","type":"address[]"},{"internalType":"uint256[]","name":"penalty","type":"uint256[]"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"unlockSuperTroll","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"updateConfigStore","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"bytes[]","name":"signatures","type":"bytes[]"},{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"address","name":"newTroll","type":"address"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"updateTroll","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"_trollRegistry","type":"address"}],"name":"upgradeTrollRegistry","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"_trollRegistry","type":"address"}],"name":"upgradeTrollRegistryByAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"contract OSWAP_VotingManager","name":"_votingManager","type":"address"}],"name":"upgradeVotingManager","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"contract OSWAP_VotingManager","name":"_votingManager","type":"address"}],"name":"upgradeVotingManagerByAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"usedNonce","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"votingExecutor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"votingExecutorInv","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"votingExecutorLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}
],
"bytecode":"60c06040523060601b60a0523480156200001857600080fd5b5060405162002b2638038062002b268339810160408190526200003b91620002b5565b600080546001600160a01b0319163390811782556001600160601b0319606084901b1660805280825260026020526040909120805460ff191660019081179091556200008891906200008f565b50620002fd565b6001600160a01b038216620000eb5760405162461bcd60e51b815260206004820152601760248201527f4f535741503a20496e76616c6964206578656375746f7200000000000000000060448201526064015b60405180910390fd5b600a5415806200013f57506001600160a01b0382166000818152600b6020526040902054600a80549091908110620001275762000127620002e7565b6000918252602090912001546001600160a01b031614155b15620001a757600a80546001600160a01b0384166000818152600b60205260408120839055600183018455929092527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80180546001600160a01b031916909117905562000218565b6001600160a01b0382166000908152600b6020526040902054620002185760405162461bcd60e51b815260206004820152602160248201527f4f535741503a2063616e6e6f74207265736574206d61696e206578656375746f6044820152603960f91b6064820152608401620000e2565b6001600160a01b0382166000908152600c60205260409020805460ff19168215151790557f410bdf2fedecd51e396bd4e5ca41880366c00ff01f4df34d7cc46faef60eb706606083901b6001600160601b031916826200027a5760006200027d565b60015b604080516d3b37ba34b733a2bc32b1baba37b960911b8152602081019390935260ff9091169082015260600160405180910390a15050565b600060208284031215620002c857600080fd5b81516001600160a01b0381168114620002e057600080fd5b9392505050565b634e487b7160e01b600052603260045260246000fd5b60805160601c60a05160601c6127fd6200032960003960006103960152600061032401526127fd6000f3fe608060405234801561001057600080fd5b50600436106102e85760003560e01c80638da5cb5b11610191578063bba588ca116100e3578063d81fa48711610097578063f2fde38b11610071578063f2fde38b146106a4578063f6f04d7f146106b7578063f7b1bf7e146106d757600080fd5b8063d81fa48714610473578063e19888df14610630578063ef9414fc1461064357600080fd5b8063c10ebe4b116100c8578063c10ebe4b146105ea578063c20ecd1f146105fd578063d4ee1d901461061057600080fd5b8063bba588ca146105b7578063bc69b032146105d757600080fd5b80639723fb6d11610145578063a2f55ae51161011f578063a2f55ae514610579578063a3818b3b1461058c578063b8624127146105af57600080fd5b80639723fb6d1461051e5780639c52a7f1146105415780639d69dc4e1461055457600080fd5b8063919270501161017657806391927050146104ef5780639527afb41461050257806396e9c5601461050b57600080fd5b80638da5cb5b146104bc5780638f409ae9146104dc57600080fd5b80635a8124651161024a57806364efe63f116101fe57806378a1a9fa116101d857806378a1a9fa1461049957806382ad7119146104a1578063842c4835146104b457600080fd5b806364efe63f1461037e57806372ecb9d014610473578063788ddbcb1461048657600080fd5b8063605361721161022f578063605361721461045057806364305328146104585780636468fca11461046b57600080fd5b80635a812465146104325780635c975abb1461044557600080fd5b806330167bec116102a15780633fd8cc4e116102865780633fd8cc4e146103e6578063414016d814610409578063568621751461041257600080fd5b806330167bec146103915780633820a526146103b857600080fd5b806305268cff116102d257806305268cff1461031f57806309a34aa41461036b578063290b7e781461037e57600080fd5b80622e6074146102ed578063046f7da214610315575b600080fd5b6103006102fb366004612626565b6106ea565b60405190151581526020015b60405180910390f35b61031d610784565b005b6103467f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161030c565b6103006103793660046123cc565b61086c565b61031d61038c3660046123af565b6108a4565b6103467f000000000000000000000000000000000000000000000000000000000000000081565b6103d86103c63660046123af565b60056020526000908152604090205481565b60405190815260200161030c565b6103006103f43660046123af565b60026020526000908152604090205460ff1681565b6103d860065481565b600d546103469073ffffffffffffffffffffffffffffffffffffffff1681565b61031d6104403660046123af565b6108d4565b60035460ff16610300565b61031d610a46565b61031d61046636600461260d565b610b70565b61031d610d17565b61031d6104813660046123af565b610e7b565b61031d6104943660046123cc565b610ea8565b600a546103d8565b6103006104af3660046123cc565b610eda565b61031d610f0a565b6000546103469073ffffffffffffffffffffffffffffffffffffffff1681565b61031d6104ea36600461259f565b6110af565b6103466104fd36600461260d565b6112b4565b6103d860075481565b61031d610519366004612401565b6112eb565b61030061052c36600461260d565b60086020526000908152604090205460ff1681565b61031d61054f3660046123af565b6115ec565b60035461034690610100900473ffffffffffffffffffffffffffffffffffffffff1681565b61031d6105873660046123af565b61168c565b61030061059a3660046123af565b600c6020526000908152604090205460ff1681565b61031d61172f565b6009546103469073ffffffffffffffffffffffffffffffffffffffff1681565b6103006105e5366004612626565b611753565b61031d6105f836600461259f565b6117a2565b61031d61060b366004612479565b6118dc565b6001546103469073ffffffffffffffffffffffffffffffffffffffff1681565b61031d61063e3660046124e0565b611a28565b61069661065136600461260d565b60046020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900460ff1682565b60405161030c929190612649565b61031d6106b23660046123af565b611d21565b6103d86106c53660046123af565b600b6020526000908152604090205481565b61031d6106e536600461260d565b611db8565b6000600160008481526004602081905260409091205474010000000000000000000000000000000000000000900460ff169081111561072b5761072b612747565b148061077d575060035b60008481526004602081905260409091205474010000000000000000000000000000000000000000900460ff169081111561077257610772612747565b14801561077d575081155b9392505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107a857600080fd5b60035460ff16610819576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e4f54205041555345442100000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556040517f490d6d11e278f168be9be39e46297f72ea877136d5bccad9cf4993e63a29568f90600090a1565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005602052604081205461089c8184611753565b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108c857600080fd5b6108d181611f57565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108f857600080fd5b73ffffffffffffffffffffffffffffffffffffffff8116610975576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e756c6c206164647265737300000000000000000000000000000000000000006044820152606401610810565b600354610100900473ffffffffffffffffffffffffffffffffffffffff16156109fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f616c7265616479207365740000000000000000000000000000000000000000006044820152606401610810565b6003805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163314610aed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610810565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526004602052604090206002815474010000000000000000000000000000000000000000900460ff166004811115610bae57610bae612747565b14610c15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f7420612067656e6572616c2074726f6c6c000000000000000000000000006044820152606401610810565b610c20336000610eda565b80610c3a57503360009081526002602052604090205460ff165b610ca0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f742066726f6d2073757065722074726f6c6c0000000000000000000000006044820152606401610810565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167404000000000000000000000000000000000000000017815560405133815282907f7f685450453775986a82112c4cad63fd255a97ece09a2fca2bbca02c420fb748906020015b60405180910390a25050565b3360009081526002602052604090205460ff16610db6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610810565b60035460ff1615610e23576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610810565b600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560405133907f28b4c24cb1012c094cd2f59f98e89d791973295f8fda6eaa118022d6d318960a90600090a2565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e9f57600080fd5b6108d181611fca565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ecc57600080fd5b610ed6828261203d565b5050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005602052604081205461089c81846106ea565b6000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ef0609516040518163ffffffff1660e01b815260040160206040518083038186803b158015610f7457600080fd5b505afa158015610f88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fac91906125f0565b905073ffffffffffffffffffffffffffffffffffffffff811661102b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f72650000000000000000000000006044820152606401610810565b600380547fffffffffffffffffffffff0000000000000000000000000000000000000000ff1661010073ffffffffffffffffffffffffffffffffffffffff8481168202929092179283905560405192041681527f6fa6ee9ec7808d2a9699505042862d79597c4068938b960a4a18d584a2aa3eea906020015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff1633146110d357600080fd5b600082815260046020526040812090815474010000000000000000000000000000000000000000900460ff16600481111561111057611110612747565b1415611178576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420612076616c69642074726f6c6c0000000000000000000000000000006044820152606401610810565b60405183907f3146e37097e6cad53dc6803fe565afb42bd0fa6d1c8f2770885428ba293f672290600090a2805473ffffffffffffffffffffffffffffffffffffffff16600090815260056020908152604080832083905585835260049182905290912080547fffffffffffffffffffffff00000000000000000000000000000000000000000016908190556001917401000000000000000000000000000000000000000090910460ff169081111561123257611232612747565b14156112525760068054906000611248836126aa565b91905055506112ad565b600160008481526004602081905260409091205474010000000000000000000000000000000000000000900460ff169081111561129157611291612747565b14156112ad57600780549060006112a7836126aa565b91905055505b5050505050565b600a81815481106112c457600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60005473ffffffffffffffffffffffffffffffffffffffff16331461130f57600080fd5b600084815260046020819052604082205474010000000000000000000000000000000000000000900460ff169081111561134b5761134b612747565b146113b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f616c7265616479206164646564000000000000000000000000000000000000006044820152606401610810565b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836113e55760026113e8565b60015b60048111156113f9576113f9612747565b90526000858152600460208181526040909220835181547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff9092169182178355938501519193919284927fffffffffffffffffffffff0000000000000000000000000000000000000000001690911790740100000000000000000000000000000000000000009084908111156114a8576114a8612747565b0217905550505073ffffffffffffffffffffffffffffffffffffffff83166000908152600560205260409020849055600160008581526004602081905260409091205474010000000000000000000000000000000000000000900460ff169081111561151657611516612747565b1415611536576006805490600061152c836126df565b9190505550611591565b600160008581526004602081905260409091205474010000000000000000000000000000000000000000900460ff169081111561157557611575612747565b1415611591576007805490600061158b836126df565b91905055505b838373ffffffffffffffffffffffffffffffffffffffff167f8c9d891ac7160986ec470eacfe13fdd4e04741d07abc6e880cd9cdb4d1e019cb846040516115dc911515815260200190565b60405180910390a3505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461161057600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491016110a4565b60005473ffffffffffffffffffffffffffffffffffffffff1633146116b057600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016110a4565b60005473ffffffffffffffffffffffffffffffffffffffff163314610db657600080fd5b6000600260008481526004602081905260409091205474010000000000000000000000000000000000000000900460ff169081111561179457611794612747565b148061077d57506004610735565b60005473ffffffffffffffffffffffffffffffffffffffff1633146117c657600080fd5b600082815260046020819052604090912090815474010000000000000000000000000000000000000000900460ff16600481111561180657611806612747565b1461186d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f7420696e206c6f636b6564207374617475730000000000000000000000006044820152606401610810565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167402000000000000000000000000000000000000000017815560405183907f5190d96f5b35d80be130fe8fdbbe793dcb5b7df2507981d58b0787851c64186c90600090a25050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461190057600080fd5b60008381526004602052604090205473ffffffffffffffffffffffffffffffffffffffff168061198c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f7420657869737473000000000000000000000000000000000000000000006044820152606401610810565b73ffffffffffffffffffffffffffffffffffffffff81811660008181526005602081815260408084208490558984526004825280842080547fffffffffffffffffffffffff000000000000000000000000000000000000000016968a1696871790558584529190528082208890555187917fa809954178f86ac2228f0b080243af1f1e8fa8931fde712147cc69b266967cc191a4505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611a4c57600080fd5b60008781526004602052604090206003815474010000000000000000000000000000000000000000900460ff166004811115611a8a57611a8a612747565b14611af1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f7420696e206c6f636b6564207374617475730000000000000000000000006044820152606401610810565b84838114611b5b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6c656e677468206e6f74206d61746368000000000000000000000000000000006044820152606401610810565b8715611b9f5781547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001782555b60005b81811015611d1357878782818110611bbc57611bbc612776565b9050602002016020810190611bd191906123af565b73ffffffffffffffffffffffffffffffffffffffff1663b5155a1b8b888885818110611bff57611bff612776565b905060200201356040518363ffffffff1660e01b8152600401611c2c929190918252602082015260400190565b600060405180830381600087803b158015611c4657600080fd5b505af1158015611c5a573d6000803e3d6000fd5b50505050897fdc296d8aadc3ba5ba13b757df60241d09dc546e017a11ca07f0b71fccc55d66f8a8a8a85818110611c9357611c93612776565b9050602002016020810190611ca891906123af565b898986818110611cba57611cba612776565b90506020020135604051611cf993929190921515835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b60405180910390a280611d0b816126df565b915050611ba2565b505050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611d4557600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016110a4565b60008181526004602052604090206001815474010000000000000000000000000000000000000000900460ff166004811115611df657611df6612747565b14611e5d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420612073757065722074726f6c6c0000000000000000000000000000006044820152606401610810565b611e68336000610eda565b80611e8257503360009081526002602052604090205460ff165b611ee8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f742066726f6d2073757065722074726f6c6c0000000000000000000000006044820152606401610810565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167403000000000000000000000000000000000000000017815560405133815282907fbb4243cf85be5a0fe6bee455e2c678ca74c8796416a6880ba7f98963ad83848990602001610d0b565b600d80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f951c9bd637098cf919144d7f3755ae837b05fd4ccf465318c9e4298f8e3718c5906020016110a4565b600980547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527ff78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d906020016110a4565b73ffffffffffffffffffffffffffffffffffffffff82166120ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4f535741503a20496e76616c6964206578656375746f720000000000000000006044820152606401610810565b600a541580612124575073ffffffffffffffffffffffffffffffffffffffff82166000818152600b6020526040902054600a805490919081106120ff576120ff612776565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b156121af57600a805473ffffffffffffffffffffffffffffffffffffffff84166000818152600b60205260408120839055600183018455929092527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055612261565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600b6020526040902054612261576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4f535741503a2063616e6e6f74207265736574206d61696e206578656375746f60448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610810565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168215151790557f410bdf2fedecd51e396bd4e5ca41880366c00ff01f4df34d7cc46faef60eb706606083901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001682612304576000612307565b60015b604080517f766f74696e674578656375746f720000000000000000000000000000000000008152602081019390935260ff9091169082015260600160405180910390a15050565b60008083601f84011261236057600080fd5b50813567ffffffffffffffff81111561237857600080fd5b6020830191508360208260051b850101111561239357600080fd5b9250929050565b803580151581146123aa57600080fd5b919050565b6000602082840312156123c157600080fd5b813561077d816127a5565b600080604083850312156123df57600080fd5b82356123ea816127a5565b91506123f86020840161239a565b90509250929050565b60008060008060008060a0878903121561241a57600080fd5b863567ffffffffffffffff81111561243157600080fd5b61243d89828a0161234e565b909750955050602087013593506040870135612458816127a5565b92506124666060880161239a565b9150608087013590509295509295509295565b60008060008060006080868803121561249157600080fd5b853567ffffffffffffffff8111156124a857600080fd5b6124b48882890161234e565b9096509450506020860135925060408601356124cf816127a5565b949793965091946060013592915050565b600080600080600080600080600060c08a8c0312156124fe57600080fd5b893567ffffffffffffffff8082111561251657600080fd5b6125228d838e0161234e565b909b50995060208c0135985089915061253d60408d0161239a565b975060608c013591508082111561255357600080fd5b61255f8d838e0161234e565b909750955060808c013591508082111561257857600080fd5b506125858c828d0161234e565b9a9d999c50979a9699959894979660a00135949350505050565b600080600080606085870312156125b557600080fd5b843567ffffffffffffffff8111156125cc57600080fd5b6125d88782880161234e565b90989097506020870135966040013595509350505050565b60006020828403121561260257600080fd5b815161077d816127a5565b60006020828403121561261f57600080fd5b5035919050565b6000806040838503121561263957600080fd5b823591506123f86020840161239a565b73ffffffffffffffffffffffffffffffffffffffff83168152604081016005831061269d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8260208301529392505050565b6000816126b9576126b9612718565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561271157612711612718565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff811681146108d157600080fdfea26469706673582212209ac069711bde612b89d4b7ae023b55deb843b1dde22af6cbde039e32150a89ca64736f6c63430008060033"
}