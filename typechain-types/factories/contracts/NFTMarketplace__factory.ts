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
        name: "nftAddress",
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
    ],
    name: "listNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105bc3803806105bc8339818101604052810190610032919061007a565b80600081905550506100a7565b600080fd5b6000819050919050565b61005781610044565b811461006257600080fd5b50565b6000815190506100748161004e565b92915050565b6000602082840312156100905761008f61003f565b5b600061009e84828501610065565b91505092915050565b610506806100b66000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063ad05f1b414610046578063bfb231d214610076578063c78f19f9146100aa575b600080fd5b610060600480360381019061005b9190610388565b6100c8565b60405161006d91906103ea565b60405180910390f35b610090600480360381019061008b9190610405565b610232565b6040516100a195949392919061047d565b60405180910390f35b6100b26102c5565b6040516100bf91906103ea565b60405180910390f35b60006100d460016102cb565b60006100e060016102e1565b905060026040518060a001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020013373ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160030160146101000a81548160ff0219169083151502179055505050809150509392505050565b6002818154811061024257600080fd5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030160149054906101000a900460ff16905085565b60005481565b6001816000016000828254019250508190555050565b600081600001549050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061031f826102f4565b9050919050565b61032f81610314565b811461033a57600080fd5b50565b60008135905061034c81610326565b92915050565b6000819050919050565b61036581610352565b811461037057600080fd5b50565b6000813590506103828161035c565b92915050565b6000806000606084860312156103a1576103a06102ef565b5b60006103af8682870161033d565b93505060206103c086828701610373565b92505060406103d186828701610373565b9150509250925092565b6103e481610352565b82525050565b60006020820190506103ff60008301846103db565b92915050565b60006020828403121561041b5761041a6102ef565b5b600061042984828501610373565b91505092915050565b61043b81610314565b82525050565b600061044c826102f4565b9050919050565b61045c81610441565b82525050565b60008115159050919050565b61047781610462565b82525050565b600060a0820190506104926000830188610432565b61049f60208301876103db565b6104ac60408301866103db565b6104b96060830185610453565b6104c6608083018461046e565b969550505050505056fea26469706673582212209b53395a6e211beae59e9f591c090ea8ef84673a52b8d72d3374a87f64e5847564736f6c63430008110033";

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
