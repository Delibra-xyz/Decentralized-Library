//SPDX-License_Identifier:MIT

pragma solidity ^0.8.0;

////@title A decentralised library
///@author Team BlockBaddies - Khadijah Amusat, Blessing Emah and Maureen


contract OpenBooks{
    address Owner;
     address payable commissions =
        payable(0x32EC80abB502Dda08B433C2d3D24EF3a69BE96Ec);

struct FreeBooks {
    string ipfsCID;
    string bookName;
    string genre;
    uint timeUploaded;
    bool status;
    string author;
    address owner;
}

struct PaidBooks {
    string ipfsCID;
    string genre;
    address owner;
    uint timeUploaded;
    string author;
    bool status;
    uint _amount;
}
//mapping (string => BookDetail) public aboutBook;
mapping (address => uint) name;
mapping (string => bool) public bookExists;
mapping (address => mapping(string => bool)) public bookShared;


mapping(string => FreeBooks) public freeCollections;
mapping (string => PaidBooks) public paidCollections;

event BookUploaded (string ipfsCID, string bookName, uint timeUploaded, address author,uint amount );

constructor() {
    Owner =msg.sender;
}

receive ()external payable {}

///@notice Upload files to a public dashboard
/// @param  _ipfsCID The CID hash of the file uploaded to ipfs/any decentralised storage
/// @param  _bookName The file name of the file

function fileUpload(string memory _ipfsCID, string memory _bookName, string memory bookType, string memory _author, uint amount) public {
    require(bookExists[_bookName] == false, "Book with this Name already exists, Rename");
        PaidBooks storage pc = paidCollections[_bookName];
        pc.ipfsCID = _ipfsCID;
        pc._amount = amount;
        pc.genre = bookType;
        pc.owner = msg.sender;
        pc.timeUploaded = block.timestamp;
        pc.status = true;
        pc.author = _author;

    bookExists[_bookName] = true;
    bookExists[_ipfsCID] = true;

    emit BookUploaded(_ipfsCID, _bookName, block.timestamp, msg.sender, amount);
}

function shareBook (address _to, string memory _bookName) external {
    require(bookExists[_bookName] == true, "Book does not exist");
    require(bookShared[_to][_bookName] == false, "Book has been shared to this address");
    bookShared[_to][_bookName] = true;

}

function buyBook( string memory _bookname) public payable {
        require(bookExists[_bookname] == true, "Book does not exist");
        PaidBooks storage pc = paidCollections[_bookname];
    require(msg.value >= pc._amount, "send fundzz");
    require(pc._amount > 0, "book sold");
    address oldOwner = pc.owner;
    pc.owner = msg.sender;
    pc.status = false;
    pc._amount =0;

          (bool success, ) = payable(commissions).call{
            value: (msg.value * 3) / 100
        }("");
        require(success);
        
           (bool sent, ) = payable(oldOwner).call{
            value: (msg.value * 97) / 100
        }("");
        require(sent);
        
}

function withdraw() public payable {
    require(msg.sender == Owner, "caller is not the owner");
        // This will payout the owner 97% of the contract balance.
        // Do not remove this otherwise you will not be able to withdraw the funds.
        (bool sent, ) = payable(Owner).call{value: address(this).balance}("");
        require(sent);
    //payable(msg.sender).transfer(_amount);
}

}