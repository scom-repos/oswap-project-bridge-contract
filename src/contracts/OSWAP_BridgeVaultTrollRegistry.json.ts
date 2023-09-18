export default {
"abi":[
{"inputs":[{"internalType":"contract OSWAP_SideChainTrollRegistry","name":"_trollRegistry","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Penalty","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"backer","type":"address"},{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"backerBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"trollBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalShares","type":"uint256"}],"name":"Stake","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"backer","type":"address"},{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"approvalDecrement","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"trollBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalShares","type":"uint256"}],"name":"Unstake","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"backer","type":"address"},{"indexed":true,"internalType":"address","name":"msgSender","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"signers","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"UnstakeApproval","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"backer","type":"address"},{"indexed":true,"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"backerBalance","type":"uint256"}],"name":"UnstakeRequest","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract OSWAP_ConfigStore","name":"newConfigStore","type":"address"}],"name":"UpdateConfigStore","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract OSWAP_SideChainTrollRegistry","name":"newTrollRegistry","type":"address"}],"name":"UpdateTrollRegistry","type":"event"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"backerStakes","outputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"pendingWithdrawal","type":"uint256"},{"internalType":"uint256","name":"approvedWithdrawal","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"bridgeVault","outputs":[{"internalType":"contract IOSWAP_BridgeVault","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"configStore","outputs":[{"internalType":"contract OSWAP_ConfigStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"}],"name":"getBackers","outputs":[{"internalType":"address[]","name":"backers","type":"address[]"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"govToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"backer","type":"address"},{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"hashUnstakeRequest","outputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"contract IOSWAP_BridgeVault","name":"_bridgeVault","type":"address"}],"name":"initAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastTrollTxCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"backer","type":"address"}],"name":"maxWithdrawal","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"penalizeSuperTroll","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakedBy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"stakedByInv","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"}],"name":"stakedByLength","outputs":[{"internalType":"uint256","name":"length","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"transactionsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"trollRegistry","outputs":[{"internalType":"contract OSWAP_SideChainTrollRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"trollStakesBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"trollStakesTotalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"backer","type":"address"},{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"bytes[]","name":"signatures","type":"bytes[]"},{"internalType":"address","name":"backer","type":"address"},{"internalType":"uint256","name":"trollProfileIndex","type":"uint256"},{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"unstakeApprove","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"unstakeRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"updateConfigStore","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"updateTrollRegistry","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"usedNonce","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"msgSender","type":"address"},{"internalType":"bytes[]","name":"signatures","type":"bytes[]"},{"internalType":"bytes32","name":"paramsHash","type":"bytes32"}],"name":"verifyStakedValue","outputs":[{"internalType":"uint256","name":"superTrollCount","type":"uint256"},{"internalType":"uint256","name":"totalStake","type":"uint256"},{"internalType":"uint256[]","name":"signers","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"}
],
"bytecode":"60a06040523480156200001157600080fd5b50604051620037423803806200374283398101604081905262000034916200018f565b6001600055600380546001600160a01b0319166001600160a01b03831690811790915560408051634eb4ee2760e11b81529051639d69dc4e91600480820192602092909190829003018186803b1580156200008e57600080fd5b505afa158015620000a3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c991906200018f565b600260006101000a8154816001600160a01b0302191690836001600160a01b03160217905550806001600160a01b03166305268cff6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200012957600080fd5b505afa1580156200013e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200016491906200018f565b60601b6001600160601b0319166080525060018054336001600160a01b0319909116179055620001cf565b600060208284031215620001a257600080fd5b8151620001af81620001b6565b9392505050565b6001600160a01b0381168114620001cc57600080fd5b50565b60805160601c6135386200020a600039600081816101ad01528181610b7101528181610c1c01528181610c740152611b9601526135386000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c8063842c4835116100ee578063ac03e9f011610097578063c2a672e011610071578063c2a672e0146104ba578063c9168b72146104cd578063e62d51cb146104ed578063fd99a7461461050d57600080fd5b8063ac03e9f014610400578063b5155a1b14610420578063becbab1f1461043357600080fd5b80639682e6c8116100c85780639682e6c8146103785780639886f99a146103cd5780639d69dc4e146103e057600080fd5b8063842c4835146103485780638658dae214610350578063944e86441461037057600080fd5b806336ec587b116101505780637b0472f01161012a5780637b0472f0146102ef5780637b77404414610302578063810129081461031557600080fd5b806336ec587b1461029c5780635a812465146102b15780635e1b7083146102c457600080fd5b806330167bec1161018157806330167bec1461023a5780633043ef751461025a57806330fed7791461027a57600080fd5b806305268cff146101a857806325ba4f8b146101f957806327afd02814610227575b600080fd5b6101cf7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b610219610207366004613091565b60086020526000908152604090205481565b6040519081526020016101f0565b610219610235366004612ebc565b610516565b6003546101cf9073ffffffffffffffffffffffffffffffffffffffff1681565b610219610268366004613091565b60009081526006602052604090205490565b61028d610288366004612efd565b610578565b6040516101f09392919061325c565b6102af6102aa366004612ffe565b610622565b005b6102af6102bf366004612ebc565b61081d565b6102196102d23660046130c3565b600760209081526000928352604080842090915290825290205481565b6102196102fd3660046130e8565b610908565b6101cf6103103660046130e8565b611168565b610338610323366004613091565b600c6020526000908152604090205460ff1681565b60405190151581526020016101f0565b6102af6111ad565b61021961035e366004613091565b60096020526000908152604090205481565b6102af611349565b6103ad610386366004612ebc565b60056020526000908152604090208054600182015460028301546003909301549192909184565b6040805194855260208501939093529183015260608201526080016101f0565b6102af6103db366004613091565b6114de565b6002546101cf9073ffffffffffffffffffffffffffffffffffffffff1681565b6004546101cf9073ffffffffffffffffffffffffffffffffffffffff1681565b6102af61042e3660046130e8565b6116eb565b610219610441366004612fc3565b604080514660208083019190915230606090811b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000009081168486015297901b90961660548201526068810194909452608884019290925260a8808401919091528151808403909101815260c89092019052805191012090565b6102af6104c8366004612f97565b611925565b6104e06104db366004613091565b611c51565b6040516101f0919061318f565b6102196104fb366004612ebc565b600b6020526000908152604090205481565b610219600a5481565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600560209081526040808320805480855260098452828520546008909452918420546001820154919391610566919061333c565b6105709190613301565b949350505050565b600454600090819060609073ffffffffffffffffffffffffffffffffffffffff163314610606576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f7420617574686f72697a656400000000000000000000000000000000000060448201526064015b60405180910390fd5b61061287878787611cca565b9250925092509450945094915050565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600560205260409020805484146106b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f696e76616c69642074726f6c6c50726f66696c65496e6465780000000000000060448201526064016105fd565b806002015483111561071f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76616c69642073686172657320616d6f756e74000000000000000000000060448201526064016105fd565b60408051466020808301919091527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b82168486015289901b166054830152606882018790526088820186905260a88083018690528351808403909101815260c890920190925280519101206000906107a29033908a908a90611cca565b92505050838260030160008282546107ba91906132e9565b9091555050604051339073ffffffffffffffffffffffffffffffffffffffff8816907f444d4debec68e4ad79ae18986a68000cafdda9e97e6a878376dfcbd2425af4aa9061080b90859089906131e9565b60405180910390a35050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461084157600080fd5b60045473ffffffffffffffffffffffffffffffffffffffff16156108c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6164647265737320616c7265616479207365740000000000000000000000000060448201526064016105fd565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000610912612486565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561097a57600080fd5b505afa15801561098e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b2919061306f565b15610a19576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f504155534544210000000000000000000000000000000000000000000000000060448201526064016105fd565b6003546040517fef9414fc0000000000000000000000000000000000000000000000000000000081526004810185905260009173ffffffffffffffffffffffffffffffffffffffff169063ef9414fc90602401604080518083038186803b158015610a8357600080fd5b505afa158015610a97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abb9190612f59565b915060019050816004811115610ad357610ad3613424565b14610b3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f7420612053757065722054726f6c6c00000000000000000000000000000060448201526064016105fd565b8215610d11576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b158015610bc857600080fd5b505afa158015610bdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0091906130aa565b9050610c4473ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163330876124fa565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b158015610ccb57600080fd5b505afa158015610cdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0391906130aa565b610d0d9190613379565b9350505b336000908152600560205260409020600181015415610f745780548514610f6f576002810154158015610d4657506003810154155b610dac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f796f7520686176652070656e64696e67207769746864726177616c000000000060448201526064016105fd565b805460008181526009602090815260408083205460089092528220546001850154610dd7919061333c565b610de19190613301565b905080600860008481526020019081526020016000206000828254610e069190613379565b9091555050600183015460008381526009602052604081208054909190610e2e908490613379565b90915550610e3e905081876132e9565b9550610e49826125dc565b60018301546040805191825260006020830152839133917fa6fc50e4af67f0cbdbede0b1a0756dfe52feb4b21c90092faca84a593295e124910160405180910390a360018301546000838152600860209081526040808320546009909252808320549051869433947fb470d40c136d4e4dd05c105682afd4ddae069ed03a4000f90dda3fa791a8e7c194610efa94898552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a350506000858152600660208181526040808420805460078452828620338088529085529286208190559383526001808501825590855291842090920180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169092179091558683558201555b610fd6565b848155600085815260066020818152604080842080546007845282862033808852908552928620819055938352600184018155845292200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690911790555b6000858152600860205260409020548015611015576000868152600960205260409020548190611006908761333c565b6110109190613301565b611017565b845b935060008411611083576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f616d6f756e7420746f6f20736d616c6c0000000000000000000000000000000060448201526064016105fd565b600086815260096020526040812080548692906110a19084906132e9565b9091555050600086815260086020526040812080548792906110c49084906132e9565b92505081905550838260010160008282546110df91906132e9565b9091555050600182015460008781526008602090815260408083205460098352928190205481518a8152928301899052828201949094526060820192909252608081019290925251879133917f2f7d5e2f3bc7e053f23dbf8061040964cd3b5cd1999f5821bd7e443b4b7776969181900360a00190a35050506111626001600055565b92915050565b6006602052816000526040600020818154811061118457600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b600254604080517fef060951000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163ef060951916004808301926020929190829003018186803b15801561121857600080fd5b505afa15801561122c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112509190612ee0565b905073ffffffffffffffffffffffffffffffffffffffff81166112cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f726500000000000000000000000060448201526064016105fd565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f6fa6ee9ec7808d2a9699505042862d79597c4068938b960a4a18d584a2aa3eea906020015b60405180910390a150565b600354604080517fbba588ca000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163bba588ca916004808301926020929190829003018186803b1580156113b457600080fd5b505afa1580156113c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ec9190612ee0565b905073ffffffffffffffffffffffffffffffffffffffff811661146b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f726500000000000000000000000060448201526064016105fd565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f2e622d86c9281f3be677f792b9721012fb471d4892cc764f6acd70b50d3907019060200161133e565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561154657600080fd5b505afa15801561155a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061157e919061306f565b156115e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f504155534544210000000000000000000000000000000000000000000000000060448201526064016105fd565b33600090815260056020526040902080548061165d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e6f742061206261636b6572000000000000000000000000000000000000000060448201526064016105fd565b828260010160008282546116719190613379565b925050819055508282600201600082825461168c91906132e9565b909155505060018201546116a3576116a3816125dc565b6001820154604080518581526020810192909252829133917fa6fc50e4af67f0cbdbede0b1a0756dfe52feb4b21c90092faca84a593295e124910160405180910390a3505050565b60035473ffffffffffffffffffffffffffffffffffffffff16331461176c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f742066726f6d20726567697374727900000000000000000000000000000060448201526064016105fd565b6000828152600860205260409020548111156117e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70656e616c747920657863656564732074726f6c6c2062616c616e636500000060448201526064016105fd565b60008281526008602052604081208054839290611802908490613379565b90915550506000828152600860205260409020546118e75760008281526008602090815260408083208390556009825280832083905560069091528120805490915b818110156118cc57600083828154811061186057611860613482565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff16808352600582526040808420848155600181018590556002810185905560030184905589845260078352808420918452915281205550806118c4816133bc565b915050611844565b5060008481526006602052604081206118e491612e45565b50505b817f28c619c49605c492d23419d5ffca91159426d25afdf8eec9d22f690c4350a3c58260405161191991815260200190565b60405180910390a25050565b61192d612486565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561199557600080fd5b505afa1580156119a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119cd919061306f565b15611a34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f504155534544210000000000000000000000000000000000000000000000000060448201526064016105fd565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005602052604090206003810154821115611ac7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f616d6f756e7420657863656564656420617070726f76616c000000000000000060448201526064016105fd565b8054600382018054849190600090611ae0908490613379565b9250508190555082826002016000828254611afb9190613379565b90915550506000818152600960209081526040808320546008909252822054611b24908661333c565b611b2e9190613301565b905083600960008481526020019081526020016000206000828254611b539190613379565b909155505060008281526008602052604081208054839290611b76908490613379565b90915550611bbd905073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001686836127c4565b600082815260086020908152604080832054600983529281902054815185815292830188905290820187905260608201929092526080810191909152829073ffffffffffffffffffffffffffffffffffffffff8716907fb470d40c136d4e4dd05c105682afd4ddae069ed03a4000f90dda3fa791a8e7c19060a00160405180910390a3505050611c4d6001600055565b5050565b600081815260066020908152604091829020805483518184028101840190945280845260609392830182828015611cbe57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311611c93575b50505050509050919050565b6000818152600c6020526040812054819060609060ff1615611d48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f6e636520757365640000000000000000000000000000000000000000000060448201526064016105fd565b6000848152600c6020526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055858067ffffffffffffffff811115611d9957611d996134b1565b604051908082528060200260200182016040528015611dc2578160200160208202803683370190505b5092506000805b828110156121bf576000611e8c8b8b84818110611de857611de8613482565b9050602002810190611dfa9190613284565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250506040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018e9052605c019150611e689050565b6040516020818303038152906040528051906020012061281f90919063ffffffff16565b905073ffffffffffffffffffffffffffffffffffffffff8116611f0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e657200000000000000000000000000000000000060448201526064016105fd565b6003546040517f3820a52600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526000921690633820a5269060240160206040518083038186803b158015611f7757600080fd5b505afa158015611f8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611faf91906130aa565b9050600081118015611fec57508373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16115b156121ac578087848151811061200457612004613482565b60209081029190910101526003546040517f82ad711900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260016024830152909116906382ad71199060440160206040518083038186803b15801561208157600080fd5b505afa158015612095573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120b9919061306f565b156120d057886120c8816133bc565b99505061218d565b6003546040517f09a34aa400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260016024830152909116906309a34aa49060440160206040518083038186803b15801561214257600080fd5b505afa158015612156573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061217a919061306f565b1561218d5785612189816133bc565b9650505b6000818152600860205260409020546121a690896132e9565b97508193505b5050806121b8906133bc565b9050611dc9565b5050506000806000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ee53f4cb6040518163ffffffff1660e01b815260040160606040518083038186803b15801561222f57600080fd5b505afa158015612243573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612267919061310a565b925092509250828410156122fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f4f535741505f4272696467655661756c743a204d696e696e756d2067656e657260448201527f616c2074726f6c6c20636f756e74206e6f74206d65740000000000000000000060648201526084016105fd565b8187101561238d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f4f535741505f4272696467655661756c743a204d696e696e756d20737570657260448201527f2074726f6c6c20636f756e74206e6f74206d657400000000000000000000000060648201526084016105fd565b6000600a6000815461239e906133bc565b918290555073ffffffffffffffffffffffffffffffffffffffff8d166000908152600b602052604090205490915081906123d99084906132e9565b10806123e55750818111155b61244b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f746f6f20736f6f6e00000000000000000000000000000000000000000000000060448201526064016105fd565b73ffffffffffffffffffffffffffffffffffffffff909b166000908152600b602052604090209a909a55509398929750909550909350505050565b600260005414156124f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105fd565b6002600055565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526125d69085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612843565b50505050565b6000818152600760209081526040808320338452825280832054848452600690925282205490919061261090600190613379565b905080821461272e57600083815260066020526040902080548290811061263957612639613482565b600091825260208083209091015485835260069091526040909120805473ffffffffffffffffffffffffffffffffffffffff909216918490811061267f5761267f613482565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff94909416939093179092558481526007825260408082206006909352812080548593929190849081106126fb576126fb613482565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff1683528201929092526040019020555b600083815260066020526040902080548061274b5761274b613453565b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055909201909255938152600784526040808220338352909452928320929092555050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261281a9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401612554565b505050565b600080600061282e8585612952565b9150915061283b81612998565b509392505050565b60006128a5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16612b529092919063ffffffff16565b90508051600014806128c65750808060200190518101906128c6919061306f565b61281a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105fd565b6000808251604114156129895760208301516040840151606085015160001a61297d87828585612b61565b94509450505050612991565b506000905060025b9250929050565b60008160048111156129ac576129ac613424565b14156129b55750565b60018160048111156129c9576129c9613424565b1415612a31576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105fd565b6002816004811115612a4557612a45613424565b1415612aad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105fd565b6003816004811115612ac157612ac1613424565b1415612b4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016105fd565b50565b60606105708484600085612c50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115612b985750600090506003612c47565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612bec573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116612c4057600060019250925050612c47565b9150600090505b94509492505050565b606082471015612ce2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105fd565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051612d0b9190613173565b60006040518083038185875af1925050503d8060008114612d48576040519150601f19603f3d011682016040523d82523d6000602084013e612d4d565b606091505b5091509150612d5e87838387612d69565b979650505050505050565b60608315612dfc578251612df55773ffffffffffffffffffffffffffffffffffffffff85163b612df5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105fd565b5081610570565b6105708383815115612e115781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fd919061320b565b5080546000825590600052602060002090810190612b4f91905b80821115612e735760008155600101612e5f565b5090565b60008083601f840112612e8957600080fd5b50813567ffffffffffffffff811115612ea157600080fd5b6020830191508360208260051b850101111561299157600080fd5b600060208284031215612ece57600080fd5b8135612ed9816134e0565b9392505050565b600060208284031215612ef257600080fd5b8151612ed9816134e0565b60008060008060608587031215612f1357600080fd5b8435612f1e816134e0565b9350602085013567ffffffffffffffff811115612f3a57600080fd5b612f4687828801612e77565b9598909750949560400135949350505050565b60008060408385031215612f6c57600080fd5b8251612f77816134e0565b602084015190925060058110612f8c57600080fd5b809150509250929050565b60008060408385031215612faa57600080fd5b8235612fb5816134e0565b946020939093013593505050565b60008060008060808587031215612fd957600080fd5b8435612fe4816134e0565b966020860135965060408601359560600135945092505050565b60008060008060008060a0878903121561301757600080fd5b863567ffffffffffffffff81111561302e57600080fd5b61303a89828a01612e77565b909750955050602087013561304e816134e0565b95989497509495604081013595506060810135946080909101359350915050565b60006020828403121561308157600080fd5b81518015158114612ed957600080fd5b6000602082840312156130a357600080fd5b5035919050565b6000602082840312156130bc57600080fd5b5051919050565b600080604083850312156130d657600080fd5b823591506020830135612f8c816134e0565b600080604083850312156130fb57600080fd5b50508035926020909101359150565b60008060006060848603121561311f57600080fd5b8351925060208401519150604084015190509250925092565b600081518084526020808501945080840160005b838110156131685781518752958201959082019060010161314c565b509495945050505050565b60008251613185818460208701613390565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b818110156131dd57835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016131ab565b50909695505050505050565b6040815260006131fc6040830185613138565b90508260208301529392505050565b602081526000825180602084015261322a816040850160208701613390565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b83815282602082015260606040820152600061327b6060830184613138565b95945050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126132b957600080fd5b83018035915067ffffffffffffffff8211156132d457600080fd5b60200191503681900382131561299157600080fd5b600082198211156132fc576132fc6133f5565b500190565b600082613337577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613374576133746133f5565b500290565b60008282101561338b5761338b6133f5565b500390565b60005b838110156133ab578181015183820152602001613393565b838111156125d65750506000910152565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156133ee576133ee6133f5565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114612b4f57600080fdfea264697066735822122034abb901cbb731f283ee2ac1193c53ae7dce4a9d6ff105d27894dda397b919ae64736f6c63430008060033"
}