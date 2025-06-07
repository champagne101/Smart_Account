// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract TestTarget {
    uint256 public x;

    function setX(uint256 _x) public {
        x = _x;
    }
}
