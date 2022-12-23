// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract HouseV2 {
    uint256 avg;

    function inc() returns () public {
        avg++;
    }

    function dec() return () public {
        avg--;
    }
}
