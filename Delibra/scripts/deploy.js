async function deployContract() {
  const BookCover = await ethers.getContractFactory('BookCover')
  const deployBookCover = await BookCover.deploy()
  await deployBookCover.deployed()
  // This solves the bug in Mumbai network where the contract address is not the real one
  const txHash = deployBookCover.deployTransaction.hash
  const txReceipt = await ethers.provider.waitForTransaction(txHash)
  const contractAddress = txReceipt.contractAddress
  console.log('Contract deployed to address:', contractAddress)
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
