// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StarSlayersToken is ERC20, Ownable {
    uint256 private constant TOTAL_SUPPLY = 100_000_000_000 * 10**18; // 100 billion tokens

    constructor() ERC20("StarSlayers", "SLAY") Ownable(msg.sender) {
        _mint(msg.sender, TOTAL_SUPPLY);
    }

    function burn(uint256 amount) public {
        _burn(_msgSender(), amount);
    }
}