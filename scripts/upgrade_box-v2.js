const { ethers, upgrades } = require("hardhat")

const PROXY = "0X4b8e79s98ahGSJ868"

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");

    await upgrades.upgradeProxy(PROXY, BoxV2)

    console.log("Box Upgraded")

}

main()