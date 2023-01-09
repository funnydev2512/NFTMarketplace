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
import type {
  NFTMarketplace,
  NFTMarketplaceInterface,
} from "../../contracts/NFTMarketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_listingPrice",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "buyNFT",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "changNFTPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "delistNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "isSold",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "items",
    outputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "bool",
        name: "sold",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "listNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "listingPrice",
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
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "nftPrice",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516200116e3803806200116e8339818101604052810190610034919061007c565b80600081905550506100a9565b600080fd5b6000819050919050565b61005981610046565b811461006457600080fd5b50565b60008151905061007681610050565b92915050565b60006020828403121561009257610091610041565b5b60006100a084828501610067565b91505092915050565b6110b580620000b96000396000f3fe60806040526004361061007b5760003560e01c8063bfb231d21161004e578063bfb231d214610146578063c78f19f914610187578063cb917b9c146101b2578063d4a8dcd3146101db5761007b565b80630110a1761461008057806351ed8288146100bd5780636de29914146100d9578063ad05f1b414610116575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a29190610b0d565b610204565b6040516100b49190610b55565b60405180910390f35b6100d760048036038101906100d29190610b0d565b610240565b005b3480156100e557600080fd5b5061010060048036038101906100fb9190610b0d565b610427565b60405161010d9190610b7f565b60405180910390f35b610130600480360381019061012b9190610bf8565b610456565b60405161013d9190610b7f565b60405180910390f35b34801561015257600080fd5b5061016d60048036038101906101689190610b0d565b6106b5565b60405161017e959493929190610c7b565b60405180910390f35b34801561019357600080fd5b5061019c610748565b6040516101a99190610b7f565b60405180910390f35b3480156101be57600080fd5b506101d960048036038101906101d49190610b0d565b61074e565b005b3480156101e757600080fd5b5061020260048036038101906101fd9190610cce565b610990565b005b60006002828154811061021a57610219610d0e565b5b906000526020600020906004020160030160149054906101000a900460ff169050919050565b60006002828154811061025657610255610d0e565b5b90600052602060002090600402019050600015158160030160149054906101000a900460ff161515146102be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b590610d9a565b60405180910390fd5b80600201543414610304576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fb90610e2c565b60405180910390fd5b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd303384600101546040518463ffffffff1660e01b815260040161036993929190610e4c565b600060405180830381600087803b15801561038357600080fd5b505af1158015610397573d6000803e3d6000fd5b505050508060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610405573d6000803e3d6000fd5b5060018160030160146101000a81548160ff0219169083151502179055505050565b60006002828154811061043d5761043c610d0e565b5b9060005260206000209060040201600201549050919050565b600080821161049a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049190610ecf565b60405180910390fd5b60005434146104de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d590610f61565b60405180910390fd5b6104e86001610aae565b60006104f46001610ac4565b90508473ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b815260040161053393929190610e4c565b600060405180830381600087803b15801561054d57600080fd5b505af1158015610561573d6000803e3d6000fd5b5050505060026040518060a001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020013373ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160030160146101000a81548160ff0219169083151502179055505050809150509392505050565b600281815481106106c557600080fd5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030160149054906101000a900460ff16905085565b60005481565b60006002828154811061076457610763610d0e565b5b906000526020600020906004020190503373ffffffffffffffffffffffffffffffffffffffff168160030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610806576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fd90610fcd565b60405180910390fd5b600015158160030160149054906101000a900460ff1615151461085e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085590610d9a565b60405180910390fd5b8060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd303384600101546040518463ffffffff1660e01b81526004016108c393929190610e4c565b600060405180830381600087803b1580156108dd57600080fd5b505af11580156108f1573d6000803e3d6000fd5b505050506002828154811061090957610908610d0e565b5b9060005260206000209060040201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600182016000905560028201600090556003820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556003820160146101000a81549060ff021916905550505050565b6000600283815481106109a6576109a5610d0e565b5b906000526020600020906004020190503373ffffffffffffffffffffffffffffffffffffffff168160030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3f9061105f565b60405180910390fd5b600015158160030160149054906101000a900460ff16151514610aa0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9790610d9a565b60405180910390fd5b818160020181905550505050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600080fd5b6000819050919050565b610aea81610ad7565b8114610af557600080fd5b50565b600081359050610b0781610ae1565b92915050565b600060208284031215610b2357610b22610ad2565b5b6000610b3184828501610af8565b91505092915050565b60008115159050919050565b610b4f81610b3a565b82525050565b6000602082019050610b6a6000830184610b46565b92915050565b610b7981610ad7565b82525050565b6000602082019050610b946000830184610b70565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bc582610b9a565b9050919050565b610bd581610bba565b8114610be057600080fd5b50565b600081359050610bf281610bcc565b92915050565b600080600060608486031215610c1157610c10610ad2565b5b6000610c1f86828701610be3565b9350506020610c3086828701610af8565b9250506040610c4186828701610af8565b9150509250925092565b610c5481610bba565b82525050565b6000610c6582610b9a565b9050919050565b610c7581610c5a565b82525050565b600060a082019050610c906000830188610c4b565b610c9d6020830187610b70565b610caa6040830186610b70565b610cb76060830185610c6c565b610cc46080830184610b46565b9695505050505050565b60008060408385031215610ce557610ce4610ad2565b5b6000610cf385828601610af8565b9250506020610d0485828601610af8565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082825260208201905092915050565b7f4974656d20616c726561647920736f6c64000000000000000000000000000000600082015250565b6000610d84601183610d3d565b9150610d8f82610d4e565b602082019050919050565b60006020820190508181036000830152610db381610d77565b9050919050565b7f5072696365206d75737420626520657175616c20746f206974656d207072696360008201527f6500000000000000000000000000000000000000000000000000000000000000602082015250565b6000610e16602183610d3d565b9150610e2182610dba565b604082019050919050565b60006020820190508181036000830152610e4581610e09565b9050919050565b6000606082019050610e616000830186610c4b565b610e6e6020830185610c4b565b610e7b6040830184610b70565b949350505050565b7f5072696365206d757374206265206174206c6561737420312077656900000000600082015250565b6000610eb9601c83610d3d565b9150610ec482610e83565b602082019050919050565b60006020820190508181036000830152610ee881610eac565b9050919050565b7f5072696365206d75737420626520657175616c20746f206c697374696e67207060008201527f7269636500000000000000000000000000000000000000000000000000000000602082015250565b6000610f4b602483610d3d565b9150610f5682610eef565b604082019050919050565b60006020820190508181036000830152610f7a81610f3e565b9050919050565b7f4f6e6c792073656c6c65722063616e2064656c697374206974656d0000000000600082015250565b6000610fb7601b83610d3d565b9150610fc282610f81565b602082019050919050565b60006020820190508181036000830152610fe681610faa565b9050919050565b7f4f6e6c792073656c6c65722063616e206368616e6765206974656d207072696360008201527f6500000000000000000000000000000000000000000000000000000000000000602082015250565b6000611049602183610d3d565b915061105482610fed565b604082019050919050565b600060208201905081810360008301526110788161103c565b905091905056fea2646970667358221220f1d71b2ea2e3cbd8d63f9e07df54600838450819be057bde277d08d640e5c31964736f6c63430008110033";

type NFTMarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTMarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTMarketplace__factory extends ContractFactory {
  constructor(...args: NFTMarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _listingPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTMarketplace> {
    return super.deploy(
      _listingPrice,
      overrides || {}
    ) as Promise<NFTMarketplace>;
  }
  override getDeployTransaction(
    _listingPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_listingPrice, overrides || {});
  }
  override attach(address: string): NFTMarketplace {
    return super.attach(address) as NFTMarketplace;
  }
  override connect(signer: Signer): NFTMarketplace__factory {
    return super.connect(signer) as NFTMarketplace__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTMarketplaceInterface {
    return new utils.Interface(_abi) as NFTMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTMarketplace {
    return new Contract(address, _abi, signerOrProvider) as NFTMarketplace;
  }
}
