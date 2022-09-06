// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CryptoDev {
    uint public maxWhitelistAddress;

    uint public numWhiteList;

    mapping(address => bool) public whiteListAddress;

    constructor(uint _maxWhitelistAddress){
        maxWhitelistAddress = _maxWhitelistAddress;
    }

    function createWhitleList() public {
        require(whiteListAddress[msg.sender] == false, "User already exist");
        require(numWhiteList<=maxWhitelistAddress,"Ohh, the whitelist has reach is maximum" );
           
            whiteListAddress[msg.sender] = true;
            numWhiteList += 1;
    }

}