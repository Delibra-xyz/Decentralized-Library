require('@nomicfoundation/hardhat-toolbox')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-ethers')
require('dotenv').config()
require('@bonadocs/docgen')
const PRIVATE_KEY = process.env.PRIVATE_KEY
// const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL
module.exports = {
  // defaultNetwork: 'mumbai',
  // networks: {
  //   hardhat: {},
  //   mumbai: {
  //     url:
  //       'https://polygon-mumbai.g.alchemy.com/v2/P-RE0n-QPDHt-Jfhk78rFZ_5gMuW3Ir9',
  //     accounts: [process.env.PRIVATE_KEY],
  //   },
  // },

  docgen: {
    projectName: 'Delibra',
      projectDescription: 'A Decentralized Library',
      deploymentAddresses: { // optional. If you want to generate widgets for deployed contracts
        BookCover: [
        
       {
         chainId: 42161, // arbitrum
          address: '0x692Ca861D5b7A341259b3993a3db7a565880a740',
         },
       ],
    User: [
       
          {
            chainId: 42161, // arbitrum
            address: '0xd7F7d581E56B4bd981B1080af300bbdDF7B59b37',
         },
        ],
      },
  }, // if necessary to customize config
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
