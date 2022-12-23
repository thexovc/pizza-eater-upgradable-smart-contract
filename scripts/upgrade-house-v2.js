const { ethers, upgrades } = require("hardhat")

const PROXY = "0x6C37e7813AD9C3f75eF3AD10EB84bBd1e4C135eD"

async function main() {
    const HouseV2 = await ethers.getContractFactory("HouseV2");

    await upgrades.upgradeProxy(PROXY, HouseV2)

    console.log("House Upgraded")

}

main()