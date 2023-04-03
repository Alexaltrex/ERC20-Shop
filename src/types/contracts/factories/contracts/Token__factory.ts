/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Token, TokenInterface } from "../../contracts/Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxTokenCount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002d3b38038062002d3b8339818101604052810190620000379190620007b3565b806040518060400160405280601181526020017f416c657820416c7472657820546f6b656e0000000000000000000000000000008152506040518060400160405280600381526020017f41415400000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bc929190620006c3565b508060049080519060200190620000d5929190620006c3565b5050506000600560006101000a81548160ff0219169083151502179055506000811162000139576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001309062000846565b60405180910390fd5b8060808181525050506200016262000156620001d160201b60201c565b620001d960201b60201c565b6200017e673efa235264ede57a60c01b6200029f60201b60201c565b6200019a670a8e3452db66245760c01b6200029f60201b60201c565b620001b6679d1dac737422eb0060c01b6200029f60201b60201c565b620001ca336101f4620002a260201b60201c565b5062000add565b600033905090565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b50565b620002be6778c66cf97588869d60c01b6200029f60201b60201c565b620002da673b41643f2a15175d60c01b6200029f60201b60201c565b620002f6672cbffff6f3b007dc60c01b6200029f60201b60201c565b6200030d82826200031160201b62000a831760201c565b5050565b62000321620003a260201b60201c565b8162000337620003ac60201b620004a11760201c565b62000343919062000897565b111562000387576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200037e9062000944565b60405180910390fd5b6200039e8282620003b660201b62000aed1760201c565b5050565b6000608051905090565b6000600254905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000429576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200042090620009b6565b60405180910390fd5b6200043d600083836200052460201b60201c565b806002600082825462000451919062000897565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620005049190620009e9565b60405180910390a36200052060008383620005dd60201b60201c565b5050565b6200054067ee66f790b445bc5960c01b6200029f60201b60201c565b62000550620005e260201b60201c565b6200056c670a019cb1e996ace260c01b6200029f60201b60201c565b6200058867c1bdbef522a135b560c01b6200029f60201b60201c565b620005a4678beb7109282584a160c01b6200029f60201b60201c565b620005c06760d2e8e15d3bf37760c01b6200029f60201b60201c565b620005d88383836200063760201b62000c441760201c565b505050565b505050565b620005f26200063c60201b60201c565b1562000635576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200062c9062000a56565b60405180910390fd5b565b505050565b60006200065a67bc4e5e2a8a46963b60c01b6200029f60201b60201c565b6200067667678846ab4ceeded160c01b6200029f60201b60201c565b6200069267e2530342262db28060c01b6200029f60201b60201c565b620006a7620006ac60201b62000c491760201c565b905090565b6000600560009054906101000a900460ff16905090565b828054620006d19062000aa7565b90600052602060002090601f016020900481019282620006f5576000855562000741565b82601f106200071057805160ff191683800117855562000741565b8280016001018555821562000741579182015b828111156200074057825182559160200191906001019062000723565b5b50905062000750919062000754565b5090565b5b808211156200076f57600081600090555060010162000755565b5090565b600080fd5b6000819050919050565b6200078d8162000778565b81146200079957600080fd5b50565b600081519050620007ad8162000782565b92915050565b600060208284031215620007cc57620007cb62000773565b5b6000620007dc848285016200079c565b91505092915050565b600082825260208201905092915050565b7f45524332304361707065643a2063617020697320300000000000000000000000600082015250565b60006200082e601583620007e5565b91506200083b82620007f6565b602082019050919050565b6000602082019050818103600083015262000861816200081f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620008a48262000778565b9150620008b18362000778565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620008e957620008e862000868565b5b828201905092915050565b7f45524332304361707065643a2063617020657863656564656400000000000000600082015250565b60006200092c601983620007e5565b91506200093982620008f4565b602082019050919050565b600060208201905081810360008301526200095f816200091d565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006200099e601f83620007e5565b9150620009ab8262000966565b602082019050919050565b60006020820190508181036000830152620009d1816200098f565b9050919050565b620009e38162000778565b82525050565b600060208201905062000a006000830184620009d8565b92915050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b600062000a3e601083620007e5565b915062000a4b8262000a06565b602082019050919050565b6000602082019050818103600083015262000a718162000a2f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000ac057607f821691505b6020821081141562000ad75762000ad662000a78565b5b50919050565b60805161224262000af9600039600061052301526122426000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80635c975abb116100b85780638da5cb5b1161007c5780638da5cb5b1461030457806395d89b4114610322578063a457c2d714610340578063a9059cbb14610370578063dd62ed3e146103a0578063f2fde38b146103d057610137565b80635c975abb1461028657806370a08231146102a4578063715018a6146102d457806379cc6790146102de5780638456cb59146102fa57610137565b8063355274ea116100ff578063355274ea146101f657806339509351146102145780633f4ba83a1461024457806340c10f191461024e57806342966c681461026a57610137565b806306fdde031461013c578063095ea7b31461015a57806318160ddd1461018a57806323b872dd146101a8578063313ce567146101d8575b600080fd5b6101446103ec565b60405161015191906116d3565b60405180910390f35b610174600480360381019061016f919061178e565b61047e565b60405161018191906117e9565b60405180910390f35b6101926104a1565b60405161019f9190611813565b60405180910390f35b6101c260048036038101906101bd919061182e565b6104ab565b6040516101cf91906117e9565b60405180910390f35b6101e06104da565b6040516101ed919061189d565b60405180910390f35b6101fe61051f565b60405161020b9190611813565b60405180910390f35b61022e6004803603810190610229919061178e565b610547565b60405161023b91906117e9565b60405180910390f35b61024c61057e565b005b6102686004803603810190610263919061178e565b6105f3565b005b610284600480360381019061027f91906118b8565b61066d565b005b61028e6106e5565b60405161029b91906117e9565b60405180910390f35b6102be60048036038101906102b991906118e5565b610730565b6040516102cb9190611813565b60405180910390f35b6102dc610778565b005b6102f860048036038101906102f3919061178e565b61078c565b005b6103026107ac565b005b61030c610822565b6040516103199190611921565b60405180910390f35b61032a61084c565b60405161033791906116d3565b60405180910390f35b61035a6004803603810190610355919061178e565b6108de565b60405161036791906117e9565b60405180910390f35b61038a6004803603810190610385919061178e565b610955565b60405161039791906117e9565b60405180910390f35b6103ba60048036038101906103b5919061193c565b610978565b6040516103c79190611813565b60405180910390f35b6103ea60048036038101906103e591906118e5565b6109ff565b005b6060600380546103fb906119ab565b80601f0160208091040260200160405190810160405280929190818152602001828054610427906119ab565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b600080610489610c60565b9050610496818585610c68565b600191505092915050565b6000600254905090565b6000806104b6610c60565b90506104c3858285610e33565b6104ce858585610ebf565b60019150509392505050565b60006104f0678ae6c7e25c1ac78860c01b611137565b610504670540517efde6971060c01b611137565b610518678c8ba584b5cc95a660c01b611137565b6000905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b600080610552610c60565b90506105738185856105648589610978565b61056e9190611a0c565b610c68565b600191505092915050565b61059267d9bc5970d4804c9660c01b611137565b61059a61113a565b6105ad66c49d9fc2986e8c60c01b611137565b6105c167d1cf7da89ca52a0660c01b611137565b6105d567dae5a633f6752c7a60c01b611137565b6105e9676b2315a04c92a0eb60c01b611137565b6105f16111b8565b565b61060767299eb76a1872609e60c01b611137565b61060f61113a565b61062367858b6ba20804417760c01b611137565b610637676d5439791e61df7460c01b611137565b61064b671b916a670b1f267860c01b611137565b61065f67ff5e791fa50d909560c01b611137565b6106698282610a83565b5050565b61068167e58bd2542074cf3660c01b611137565b61068961113a565b61069d67196bbf86d566596d60c01b611137565b6106b167c8010d053b6adfce60c01b611137565b6106c567a121d9b97070e71360c01b611137565b6106d967b5f1d5f752e8902660c01b611137565b6106e28161121b565b50565b60006106fb67bc4e5e2a8a46963b60c01b611137565b61070f67678846ab4ceeded160c01b611137565b61072367e2530342262db28060c01b611137565b61072b610c49565b905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61078061113a565b61078a600061122f565b565b61079e82610798610c60565b83610e33565b6107a882826112f5565b5050565b6107c067889f9aae198e0e9060c01b611137565b6107c861113a565b6107dc674abe1bff5818d83d60c01b611137565b6107f067fafe63f1cb2199ab60c01b611137565b610804671c2604cb75a51f0b60c01b611137565b61081867b7e92ac67b2cce9760c01b611137565b6108206114c3565b565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461085b906119ab565b80601f0160208091040260200160405190810160405280929190818152602001828054610887906119ab565b80156108d45780601f106108a9576101008083540402835291602001916108d4565b820191906000526020600020905b8154815290600101906020018083116108b757829003601f168201915b5050505050905090565b6000806108e9610c60565b905060006108f78286610978565b90508381101561093c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093390611ad4565b60405180910390fd5b6109498286868403610c68565b60019250505092915050565b600080610960610c60565b905061096d818585610ebf565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610a0761113a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6e90611b66565b60405180910390fd5b610a808161122f565b50565b610a8b61051f565b81610a946104a1565b610a9e9190611a0c565b1115610adf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad690611bd2565b60405180910390fd5b610ae98282610aed565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5490611c3e565b60405180910390fd5b610b6960008383611526565b8060026000828254610b7b9190611a0c565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c2c9190611813565b60405180910390a3610c40600083836115a2565b5050565b505050565b6000600560009054906101000a900460ff16905090565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccf90611cd0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3f90611d62565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e269190611813565b60405180910390a3505050565b6000610e3f8484610978565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610eb95781811015610eab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea290611dce565b60405180910390fd5b610eb88484848403610c68565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2690611e60565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9690611ef2565b60405180910390fd5b610faa838383611526565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611030576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102790611f84565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161111e9190611813565b60405180910390a36111318484846115a2565b50505050565b50565b611142610c60565b73ffffffffffffffffffffffffffffffffffffffff16611160610822565b73ffffffffffffffffffffffffffffffffffffffff16146111b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ad90611ff0565b60405180910390fd5b565b6111c06115a7565b6000600560006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611204610c60565b6040516112119190611921565b60405180910390a1565b61122c611226610c60565b826112f5565b50565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611365576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135c90612082565b60405180910390fd5b61137182600083611526565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156113f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ee90612114565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516114aa9190611813565b60405180910390a36114be836000846115a2565b505050565b6114cb6115f0565b6001600560006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861150f610c60565b60405161151c9190611921565b60405180910390a1565b61153a67ee66f790b445bc5960c01b611137565b6115426115f0565b611556670a019cb1e996ace260c01b611137565b61156a67c1bdbef522a135b560c01b611137565b61157e678beb7109282584a160c01b611137565b6115926760d2e8e15d3bf37760c01b611137565b61159d838383610c44565b505050565b505050565b6115af6106e5565b6115ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e590612180565b60405180910390fd5b565b6115f86106e5565b15611638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162f906121ec565b60405180910390fd5b565b600081519050919050565b600082825260208201905092915050565b60005b83811015611674578082015181840152602081019050611659565b83811115611683576000848401525b50505050565b6000601f19601f8301169050919050565b60006116a58261163a565b6116af8185611645565b93506116bf818560208601611656565b6116c881611689565b840191505092915050565b600060208201905081810360008301526116ed818461169a565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611725826116fa565b9050919050565b6117358161171a565b811461174057600080fd5b50565b6000813590506117528161172c565b92915050565b6000819050919050565b61176b81611758565b811461177657600080fd5b50565b60008135905061178881611762565b92915050565b600080604083850312156117a5576117a46116f5565b5b60006117b385828601611743565b92505060206117c485828601611779565b9150509250929050565b60008115159050919050565b6117e3816117ce565b82525050565b60006020820190506117fe60008301846117da565b92915050565b61180d81611758565b82525050565b60006020820190506118286000830184611804565b92915050565b600080600060608486031215611847576118466116f5565b5b600061185586828701611743565b935050602061186686828701611743565b925050604061187786828701611779565b9150509250925092565b600060ff82169050919050565b61189781611881565b82525050565b60006020820190506118b2600083018461188e565b92915050565b6000602082840312156118ce576118cd6116f5565b5b60006118dc84828501611779565b91505092915050565b6000602082840312156118fb576118fa6116f5565b5b600061190984828501611743565b91505092915050565b61191b8161171a565b82525050565b60006020820190506119366000830184611912565b92915050565b60008060408385031215611953576119526116f5565b5b600061196185828601611743565b925050602061197285828601611743565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806119c357607f821691505b602082108114156119d7576119d661197c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611a1782611758565b9150611a2283611758565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a5757611a566119dd565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611abe602583611645565b9150611ac982611a62565b604082019050919050565b60006020820190508181036000830152611aed81611ab1565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611b50602683611645565b9150611b5b82611af4565b604082019050919050565b60006020820190508181036000830152611b7f81611b43565b9050919050565b7f45524332304361707065643a2063617020657863656564656400000000000000600082015250565b6000611bbc601983611645565b9150611bc782611b86565b602082019050919050565b60006020820190508181036000830152611beb81611baf565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611c28601f83611645565b9150611c3382611bf2565b602082019050919050565b60006020820190508181036000830152611c5781611c1b565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611cba602483611645565b9150611cc582611c5e565b604082019050919050565b60006020820190508181036000830152611ce981611cad565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611d4c602283611645565b9150611d5782611cf0565b604082019050919050565b60006020820190508181036000830152611d7b81611d3f565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611db8601d83611645565b9150611dc382611d82565b602082019050919050565b60006020820190508181036000830152611de781611dab565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611e4a602583611645565b9150611e5582611dee565b604082019050919050565b60006020820190508181036000830152611e7981611e3d565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611edc602383611645565b9150611ee782611e80565b604082019050919050565b60006020820190508181036000830152611f0b81611ecf565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611f6e602683611645565b9150611f7982611f12565b604082019050919050565b60006020820190508181036000830152611f9d81611f61565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611fda602083611645565b9150611fe582611fa4565b602082019050919050565b6000602082019050818103600083015261200981611fcd565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600061206c602183611645565b915061207782612010565b604082019050919050565b6000602082019050818103600083015261209b8161205f565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b60006120fe602283611645565b9150612109826120a2565b604082019050919050565b6000602082019050818103600083015261212d816120f1565b9050919050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b600061216a601483611645565b915061217582612134565b602082019050919050565b600060208201905081810360008301526121998161215d565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b60006121d6601083611645565b91506121e1826121a0565b602082019050919050565b60006020820190508181036000830152612205816121c9565b905091905056fea2646970667358221220ac6683d39277078cd10ef012373dbead2f18b028de5a5a8203272acb7e07cdbe64736f6c63430008090033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    maxTokenCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Token> {
    return super.deploy(maxTokenCount, overrides || {}) as Promise<Token>;
  }
  override getDeployTransaction(
    maxTokenCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(maxTokenCount, overrides || {});
  }
  override attach(address: string): Token {
    return super.attach(address) as Token;
  }
  override connect(signer: Signer): Token__factory {
    return super.connect(signer) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new utils.Interface(_abi) as TokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token {
    return new Contract(address, _abi, signerOrProvider) as Token;
  }
}