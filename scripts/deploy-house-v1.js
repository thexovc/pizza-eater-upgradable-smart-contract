const { ethers, upgrades } = require('hardhat')

async function main() {
    const House = await ethers.getContractFactory("House")

    const house = await upgrades.deployProxy(House, [42], {
        intializer: "intialize"
    })

    await house.deployed();

    console.log("house deployed to:", house.address);

}

main()