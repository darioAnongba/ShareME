pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/token/ERC827/ERC827Token.sol';

contract ShareMeToken is ERC827Token {

    string public name = 'ShareMeToken';
    string public symbol = 'TT';
    uint public decimals = 8;
    uint public INITIAL_SUPPLY = 500000000;

    function ShareMeToken() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}