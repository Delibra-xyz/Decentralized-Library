// Contract based on https://docs.openzeppelin.com/contracts/4.x/erc721
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BookCover is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    // address of the marketplace smart contract
    address marketplaceContract;
    //  will be emitted every time a NFT is minted.
    event NFTMinted(uint256);
    // address private Delibra = 0x20dB5945336B9Ba91084dd6FC70Be3D841304E73;
    uint transactionFee = 10 ^ 18;

    constructor(address _marketplaceContract) ERC721("BookCover", "DBC") {
        marketplaceContract = _marketplaceContract;
    }

    function mintNFT(
        string memory tokenURI
    ) public payable onlyOwner returns (uint256) {
        require(msg.value == transactionFee, "invalid amount");
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(marketplaceContract, true);

        return newItemId;

        // transaction fee
    }

    // withdrawing fee function

    function withdraw() public {
        uint amount = address(this).balance;
        (bool success, ) = Delibra.call{value: amount}("");
        require(success, "failed to send matic");
    }
}
