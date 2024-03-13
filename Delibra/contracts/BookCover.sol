// Contract based on https://docs.openzeppelin.com/contracts/4.x/erc721
// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BookCover is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address private Delibra = 0x79348433D02B91f11e222094D6c41A5D6911F9d6;
    uint transactionFee = 10 ^ 18;

    constructor() ERC721("NFT", "ENFT") {}

    function mintNFT(string memory )
        public
        payable
        returns (uint256)
    {
        require(msg.value == transactionFee, "invalid amount");
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);

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
