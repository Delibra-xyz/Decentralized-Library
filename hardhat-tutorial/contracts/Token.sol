// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./IERC20.sol";

// WETH - mirrors Ether

contract KhadijahToken is IERC20{

    string public name = "OpenBook";
    string public symbol = "OBT";
    uint public decimals = 18;
    uint public override totalSupply = 1000000000 * (10 ** decimals);

    constructor(){
        balanceOf[msg.sender] = totalSupply;
    }

    mapping(address => uint256) public override balanceOf;
    mapping(address => mapping(address => uint256)) approved;

    function transfer(address _to, uint256 _amount) public override returns(bool){
        balanceOf[msg.sender] -= _amount;
        balanceOf[_to] += _amount;
        emit Transfer(msg.sender, _to, _amount);
        return true;
    }

    function allowance(address _owner, address _spender) public view override returns(uint256){
        uint256 _amount = approved[_owner][_spender];
        return _amount;
    }

    function approve(address _spender, uint256 _amount) public override returns(bool){
        require(balanceOf[msg.sender] >= _amount, "You don't have enough balance");
        approved[msg.sender][_spender] += _amount;
        emit Approval(msg.sender, _spender, _amount);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _amount) public override returns(bool){
        require(approved[_from][msg.sender] >= _amount, "Amount not approved");
        approved[_from][msg.sender] -= _amount;
        balanceOf[_from] -= _amount;
        balanceOf[_to] += _amount;
        emit Transfer(_from, _to, _amount);
        return true;
    }


    event Received(uint value);
  
    function deposit() public payable {
        emit Received(msg.value);
    }
    
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
    
    fallback() external payable {
        emit Received(msg.value);
    }
    
    receive() external payable {
        emit Received(msg.value);
    }
}



    
