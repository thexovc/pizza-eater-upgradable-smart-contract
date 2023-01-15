// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;
import "./Pizza.sol";

contract PizzaV2 is Pizza {
    ///@dev add one to the slice
    function refillSlice() public {
        slices += 1;
    }

    ///@dev returns the version of the contract
    function pizzaVersion() external pure returns (uint256) {
        return 2;
    }
}
