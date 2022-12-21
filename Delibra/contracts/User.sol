// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;

contract DelibraUserAuth {
    // User is able to identify as a reader or author
    // we need to know users that have been onboarded
    // users that have their delibra names
    //extras
    //for readers: genre []
    //for authors: username, displayname, profile url

    enum UserType {
        Reader, // returns 0
        Author, // returns 1
        Admin // returns 2
    }

    struct User {
        string userName;
        bool onboarded;
        UserType userType;
        string profileUrl;
    }

    mapping(address => User) public users;
    address[] UsersAddress;

    event UserCreated(address _addr, uint timestamp);
    event UserUpdated(address _addr, uint timestamp);

    function getUserInfo() public view returns (User memory){
        require(isDelibraUser(msg.sender) == true, "Not a delibra user");
        return users[msg.sender];
    }

    function isDelibraUser(address _addr) public view returns (bool){
        for(uint i=0; i<UsersAddress.length; ++i){
            if(UsersAddress[i] == _addr){
                return true;
            } 
        }
        return false;
    }

    function setUserInfo(
        string calldata _username, 
        bool _onboarded, 
        UserType _usertype,
        string calldata _profileUrl) public returns (bool){
        users[msg.sender] = User(_username, _onboarded, _usertype, _profileUrl);
        if(isDelibraUser(msg.sender) == false){
            UsersAddress.push(msg.sender);
            emit UserCreated(msg.sender, block.timestamp);
        } else{
            emit UserUpdated(msg.sender, block.timestamp);
        }
        return true;
    }
}
