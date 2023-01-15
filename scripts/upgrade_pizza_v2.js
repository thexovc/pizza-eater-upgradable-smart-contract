const { ethers, upgrades } = require("hardhat");

const PROXY = "0xde49C10B8CAc7f4F5A975b7e664b79D1fE86345e"

async function main() {
    const PizzaV2 = await ethers.getContractFactory("PizzaV2");
    console.log("Upgrading Pizza...");
    await upgrades.upgradeProxy(PROXY, PizzaV2);
    console.log("Pizza upgraded successfully");
}

main();