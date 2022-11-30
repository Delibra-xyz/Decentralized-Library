// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract User {

    mapping (address -> bool) users;

    event UserCreated(address _addr, uint timestamp);

    function addUser(address _addr) external {
        users[_addr] = true;
        emit UserCreated(_addr, block.timestamp);
    }
