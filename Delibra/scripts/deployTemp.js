const hre = require("hardhat");
const fs = require('fs')

const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
    
    console.log("deploying contracts with account ", deployer.address);
    
    const User = await hre.ethers.getContractFactory("DelibraUserAuth");
    const UserContract = await User.deploy();

    await UserContract.deployed()

    console.log("Delibra user contract address: ", UserContract.address);

    const address = JSON.stringify({
      "contractAddress": UserContract.address,
    })

    console.log("account balance ", accountBalance.toString());

    const abi = fs.readFileSync(`./artifacts/contracts/User.sol/DelibraUserAuth.json`);
   
    fs.writeFileSync('../library-ui/contracts/User/abi.json', abi);
    fs.writeFileSync('../library-ui/contracts/User/contract_address.json', address)

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