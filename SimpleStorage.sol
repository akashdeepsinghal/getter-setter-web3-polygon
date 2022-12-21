// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract TodoWeb3 {
    uint256 public num = 1;

    function set(uint256 _x) public {
        num = _x;
    }

    function get() public view returns (uint256) {
        return num;
    }
}
