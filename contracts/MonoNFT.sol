// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MonoNFT is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for  Counters.Counter;
    Counters.Counter private _tokenId;
    address  nftMarketPlaceAddress;
    constructor(address _nftMarketPlaceAddress) ERC721("MonoNFT", "MNC") {
        nftMarketPlaceAddress = _nftMarketPlaceAddress;
    }

    function giveAway(address to) public returns (uint256){
        uint256 newTokenId = _tokenId.current();
        string memory mockURI = "https://slnexn775u23nlude4u7ygztqywwhjbsbkcfo445c6fwu3jgmeaq.arweave.net/ktpLt__tNbaugycp_Bszhi1jpDIKhFdznReLam0mYQE";
        _safeMint(to, newTokenId);
        _setTokenURI(newTokenId, mockURI);
        _tokenId.increment();
        setApprovalForAll(nftMarketPlaceAddress, true);
        console.log("Minted token %s to %s", newTokenId, to);
        return newTokenId;
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}