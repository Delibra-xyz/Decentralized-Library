// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./BookCover.sol";

contract Marketplace is ReentrancyGuard,BookCover  {
    using Counters for Counters.Counter;
    // increments when a NFT is sold and decremented when a NFT is relisted.
    // Counters.Counter private _nftsSold;
    // tracks how many types of NFTs have been listed.
    Counters.Counter private _nftCount;
    // is taken from the seller and transferred to the marketplace contract owner whenever an NFT is sold.
    uint256 public LISTING_FEE = 0.0001 ether;
    // stores the Marketplace contract owner, so that we know who to pay the listing fee to
    address payable private _marketOwner;
    // associates the unique tokenId to a the NFT struct.
    mapping(string => NFT) private _idToNFT;
    // associates an address to nfts listed by them
    mapping(address => NFT[]) private authorStore;
    //  stores relevant information for an NFT listed in the marketplace
    struct NFT {
        address payable seller;
        uint256 price;
        bool listed;
        uint256 quantity;
        address[] owners;
        string tokenId;
    }
    // is emitted every time a NFT is Listed.
    event NFTListed(
        address seller,
        uint256 quantity,
        uint256 price
    );
    // is emitted every time a NFT is sold.
    event NFTSold(
        address seller,
        address buyer,
        uint256 price
    );

    constructor() {
        _marketOwner = payable(msg.sender);
    }

    // List the NFT on the marketplace
    function listNft(
        string memory _tokenUri,
        uint256 _price,
        uint256 _quantity
    ) public payable nonReentrant {
        address[] memory _owners;
        require(_price > 0, "Price must be at least 1 wei");
        require(_quantity > 0, "Quantity must be greater than 0");
        require (nftExists(_tokenUri) != true , "NFT already exists");
        require(msg.value == LISTING_FEE, "Not enough ether for listing fee");
        // increment nft type count 
        _nftCount.increment();
        //mint one nft for the author
        BookCover.mintNFT(_tokenUri);
        // map nft to its id
        _idToNFT[_tokenUri] = NFT(
            payable(msg.sender),
            _price,
            true,
            _quantity,
            _owners,
            _tokenUri
        );
        //add to author's store
        authorStore[msg.sender].push(NFT(
            payable(msg.sender),
            _price,
            true,
            _quantity,
            _owners,
            _tokenUri
        ));
        // send listing fee to market owner
        payable(_marketOwner).transfer(msg.value);

        emit NFTListed(
            msg.sender,
            _quantity,
            _price
        );
    }

    // Buy an NFT
    function buyNft(
        string memory _tokenUri
    ) public payable nonReentrant {
        NFT storage nft = _idToNFT[_tokenUri];
        require (nftExists(_tokenUri) == true , "NFT does not exist");
        require(msg.value == nft.price, "Not enough or too much ether to cover asking price");
        require(nft.owners.length < nft.quantity, "NFTs maxed out");
        //mint one nft for the buyer
        BookCover.mintNFT(_tokenUri);
        // add to owners of nft
        nft.owners.push(msg.sender);
        _idToNFT[_tokenUri] = nft;
        // update the author's store
        NFT[] storage _store = authorStore[nft.seller];
        for(uint256 i = 0; i < _store.length; ++i){
            if(keccak256(abi.encodePacked(_store[i].tokenId)) == keccak256(abi.encodePacked(nft.tokenId))){
                _store[i].owners = nft.owners;
                authorStore[nft.seller] = _store;
            }
        }
        // send money to seller
        address payable buyer = payable(msg.sender);
        payable(nft.seller).transfer(msg.value);
        // IERC721(_nftContract).transferFrom(address(this), buyer, nft.tokenId);
        // _marketOwner.transfer(LISTING_FEE);
        // nft.owner = buyer;
        // nft.listed = false;

        // _nftsSold.increment();
        emit NFTSold( nft.seller, buyer, msg.value);
    }

    function nftExists(string memory _tokenUri) public view returns (bool) {
        NFT memory sample = _idToNFT[_tokenUri];
        if(sample.price == 0 || sample.quantity == 0){
            return false;
        } else {
            return true;
        }
    }

    // Resell an NFT purchased from the marketplace
    // function resellNft(
    //     address _nftContract,
    //     uint256 _tokenId,
    //     uint256 _price
    // ) public payable nonReentrant {
    //     require(_price > 0, "Price must be at least 1 wei");
    //     require(msg.value == LISTING_FEE, "Not enough ether for listing fee");

    //     IERC721(_nftContract).transferFrom(msg.sender, address(this), _tokenId);

    //     NFT storage nft = _idToNFT[_tokenId];
    //     nft.seller = payable(msg.sender);
    //     nft.owner = payable(address(this));
    //     nft.listed = true;
    //     nft.price = _price;

    //     _nftsSold.decrement();
    //     emit NFTListed(
    //         _nftContract,
    //         _tokenId,
    //         msg.sender,
    //         address(this),
    //         _price
    //     );
    // }

    function getListingFee() public view returns (uint256) {
        return LISTING_FEE;
    }

    // function getAllListedNfts() public view returns (NFT[] memory) {
    //     uint256 nftCount = _nftCount.current();
    //     // uint256 unsoldNftsCount = nftCount - _nftsSold.current();

    //     NFT[] memory nfts = new NFT[](unsoldNftsCount);
    //     uint nftsIndex = 0;
    //     for (uint i = 0; i < nftCount; i++) {
    //         if (_idToNFT[i + 1].listed) {
    //             nfts[nftsIndex] = _idToNFT[i + 1];
    //             nftsIndex++;
    //         }
    //     }
    //     return nfts;
    // }

    // function getMyNfts() public view returns (NFT[] memory) {
    //     uint nftCount = _nftCount.current();
    //     uint myNftCount = 0;
    //     for (uint i = 0; i < nftCount; i++) {
    //         if (_idToNFT[i + 1].owner == msg.sender) {
    //             myNftCount++;
    //         }
    //     }

    //     NFT[] memory nfts = new NFT[](myNftCount);
    //     uint nftsIndex = 0;
    //     for (uint i = 0; i < nftCount; i++) {
    //         if (_idToNFT[i + 1].owner == msg.sender) {
    //             nfts[nftsIndex] = _idToNFT[i + 1];
    //             nftsIndex++;
    //         }
    //     }
    //     return nfts;
    // }

    // function getMyListedNfts() public view returns (NFT[] memory) {
    //     uint nftCount = _nftCount.current();
    //     uint myListedNftCount = 0;
    //     for (uint i = 0; i < nftCount; i++) {
    //         if (
    //             _idToNFT[i + 1].seller == msg.sender && _idToNFT[i + 1].listed
    //         ) {
    //             myListedNftCount++;
    //         }
    //     }

    //     NFT[] memory nfts = new NFT[](myListedNftCount);
    //     uint nftsIndex = 0;
    //     for (uint i = 0; i < nftCount; i++) {
    //         if (
    //             _idToNFT[i + 1].seller == msg.sender && _idToNFT[i + 1].listed
    //         ) {
    //             nfts[nftsIndex] = _idToNFT[i + 1];
    //             nftsIndex++;
    //         }
    //     }
    //     return nfts;
    // }

    // function getPriceOfNft(uint256 _tokenId) public view returns (uint256 _price){
        
    // }
}
