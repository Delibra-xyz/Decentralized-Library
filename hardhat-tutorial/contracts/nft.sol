//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// @title Contract to deploy BlackGlove NFTs to Opensea
contract OpenBooksToken is ERC721Enumerable, Ownable {
    using Strings for uint256;

    /// URI to read metadata of images to be deployed
    string public baseURI;

    /// expected file extensuon to be contained in URI
    string public baseExtension = ".json";

    /// cost of individual NFTs in collection
    uint256 public cost;

    /// Maximum supply of NFTs to be deployed by contract
    uint256 public maxSupply =10000;

    /// maximum amount to be minted
    uint256 public maxMintAmount =2 ;
    uint256 public nftPerAddressLimit ;

    bool public paused = true;
    mapping(address => uint256) public addressMintedBalance;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initBaseURI
    ) ERC721(_name, _symbol) {
        setBaseURI(_initBaseURI);
    }

    // set URI which contains created images, likely a pinata CID.
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    /// @dev Creates tokens of token type `id`, and assigns them to `to`
    /// `to` cannot be a zero address
    function mint(uint256 _mintAmount) public payable {
        require(!paused, "the contract is paused");

        require(_mintAmount > 0, "need to mint atleast 1 NFT");
        // require(
        //     _mintAmount <= maxMintAmount,
        //     "max mint amount per session exceeded"
    
        require(_mintAmount <= maxSupply, "max NFT limit exceeded");

        if (msg.sender != owner()) {
            //check here again
            uint256 ownerMintedCount = addressMintedBalance[msg.sender];
            require(
                ownerMintedCount + _mintAmount <= nftPerAddressLimit,
                "max NFT per address exceeded"
            );

            require(msg.value >= cost * _mintAmount, "insufficient funds");
        }

        for (uint256 i = 1; i <= _mintAmount; i++) {
            addressMintedBalance[msg.sender]++;
            _safeMint(msg.sender, maxSupply + i);
        }
        maxSupply += _mintAmount;
    }

    /// function which provides a basic access control mechanism
    /// where there is an account (an owner) that can be granted access to specific functions

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(abi.encodePacked(currentBaseURI))
                : "";
    }

    //Only owner can call this functions

    function setNftPerAddressLimit(uint256 _limit) public onlyOwner {
        nftPerAddressLimit = _limit;
    }

    function setCost(uint256 _newCost) public onlyOwner {
        cost = _newCost;
    }

    function setmaxMintAMount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension)
        public
        onlyOwner
    {
        baseExtension = _newBaseExtension;
    }

    function pause() public onlyOwner {
        paused = true;
    }

    function unpause() public onlyOwner {
        paused = false;
    }

    //Override for ERC721 & ERC721Enumerable

    
    function withdraw() public payable onlyOwner {
        (bool os, ) = payable(owner()).call{value: address(this).balance}("");
        require(os);
    }
}
