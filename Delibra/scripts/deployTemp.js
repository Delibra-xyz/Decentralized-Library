const hre = require("hardhat");
const fs = require('fs')

const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
    
    console.log("deploying contracts with account ", deployer.address);
    
    const marketPlace = await hre.ethers.getContractFactory("Marketplace");
    const MarketplaceContract = await marketPlace.deploy();

    await MarketplaceContract.deployed()

    console.log("Delibra user contract address: ", MarketplaceContract.address);

    const address = JSON.stringify({
      "contractAddress": MarketplaceContract.address,
    })

    console.log("account balance ", accountBalance.toString());

    const abi = fs.readFileSync(`./artifacts/contracts/Marketplace.sol/Marketplace.json`);
   
    fs.writeFileSync('../library-ui/contracts/Marketplace/abi.json', abi);
    fs.writeFileSync('../library-ui/contracts/Marketplace/contract_address.json', address)

}

const runMain = async () => {
    try {
        await main();
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
    
runMain();