require('@nomicfoundation/hardhat-toolbox')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-ethers')
require('dotenv').config()
const PRIVATE_KEY = process.env.PRIVATE_KEY
// const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL
module.exports = {
  defaultNetwork: 'mumbai',
  networks: {
    hardhat: {},
    mumbai: {
      url:
        'https://polygon-mumbai.g.alchemy.com/v2/P-RE0n-QPDHt-Jfhk78rFZ_5gMuW3Ir9',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
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
