// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

//Counters
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract NFTMarketplace {
  using Counters for Counters.Counter ;
  uint256 public listingPrice;
  Counters.Counter private _itemIds;

  constructor(uint256 _listingPrice){
    listingPrice = _listingPrice;
  }

  struct Item{
    address nftContract;
    uint256 tokenId;
    uint256 price;
    address payable seller;
    bool sold;
  }

  Item[] public items;

  function listNFT(address nftAddress, uint256 tokenId, uint256 price) public payable returns(uint256) {
    require(price > 0, "Price must be at least 1 wei");
    require(msg.value == listingPrice, "Price must be equal to listing price");
    _itemIds.increment();
    uint256 itemId = _itemIds.current();
    IERC721(nftAddress).transferFrom(msg.sender, address(this), tokenId);
    items.push(Item(
      nftAddress,
      tokenId,
      price,
      payable(msg.sender),
      false
    ));
    return itemId;
  }
}