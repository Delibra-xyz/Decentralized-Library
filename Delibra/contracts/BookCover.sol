// Contract based on https://docs.openzeppelin.com/contracts/4.x/erc721
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

contract BookCover is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address owner;
    
    event NFTMinted(uint256 _id);

    constructor() ERC721("BookCover", "DBC") {
        owner = msg.sender;
    }

    function mintNFT(
        string memory tokenURI
    ) internal returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        emit NFTMinted(newItemId);
        // setApprovalForAll(marketplaceContract, true);

        return newItemId;

    }

    
}
