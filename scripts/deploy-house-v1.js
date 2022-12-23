const { ethers, upgrades } = require('hardhat')

async function main() {
    const Box = await ethers.getContractFactory("House")

    const box = await upgrades.deployProxy(Box, [42], {
        intializer: "intialize"
    })

    await box.deployed();

    console.log("Box deployed to:", box.address);

}

main()