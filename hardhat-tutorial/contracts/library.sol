//SPDX-License_Identifier:MIT

pragma solidity ^0.8.0;

///@title A decentralised library
///@author Team BlockBaddies - Khadijah Amusat, Blessing Emah and Maureen


contract OpenBooks{

struct FreeBooks {
    string ipfsCID;
    string bookName;
    string genre;
    uint timeUploaded;
    string author;
    string free;
}

struct PaidBooks {
    string ipfsCID;
    string bookName;
    string genre;
    uint timeUploaded;
    string author;
    string paid;
}
mapping (string => BookDetail) public aboutBook;
mapping (address => uint) name;
mapping (string => bool) public bookExists;
mapping (address => mapping(string => bool) public bookShared;


mapping(string => FreeBooks) public freeCollections;
mapping (string => PaidBooks) public paidCollections;

event BookUploaded (string ipfsCID, string bookName, string genre, uint timeUploaded, address author, );

constructor() {
    owner =msg.sender;
}

///@notice Upload files to a public dashboard
/// @param  _ipfsCID The CID hash of the file uploaded to ipfs/any decentralised storage
/// @param  _fileName The file name of the file

function fileUpload(string memory _ipfsCID, string memory _bookName, string bookType) public {
    require(bookExists[_bookName] == false, "Book with this Name already exists, Rename");

    BookDetail memory bookDetails = BookDetail(_ipfsCID, _fileName, _genre, block.timestamp, msg.sender, _bookType);

    bookExists[_bookName] = true;
    bookExists[_ipfsCID] = true;

    emit BookUploaded(_ipfsCID, _fileName, block.timestamp, msg.sender);
}

function shareBook (address _to, string memory _fileName) external {
    require(bookExists[_bookName] == true, "Book does not exist");
    require(bookShared[_to][_fileName] == false, "Book has been shared to this address");

}


}