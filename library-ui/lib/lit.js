import * as LitJsSdk from 'lit-js-sdk'

const client = new LitJsSdk.LitNodeClient()
const chain = 'polygon'

// Must hold at least one Delibra Nft ()
const accessControlConditionsNFT = [
  {
    contractAddress: '0x4cb9F3f65B130574de768f3e30114094fe6a817E',
    standardContractType: 'ERC721',
    chain,
    method: 'balanceOf',
    parameters: [':userAddress'],
    returnValueTest: {
      comparator: '>',
      value: '0',
    },
  },
]

class Lit {
  litNodeClient

  async connect() {
    await client.connect()
    this.litNodeClient = client
  }

  async encryptString(str) {
    if (!this.litNodeClient) {
      await this.connect()
    }
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })
    const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(str)

    const encryptedSymmetricKey = await this.litNodeClient.saveEncryptionKey({
      accessControlConditions: accessControlConditionsNFT,
      symmetricKey,
      authSig,
      chain,
    })

    return {
      encryptedFile: encryptedString,
      encryptedSymmetricKey: LitJsSdk.uint8arrayToString(
        encryptedSymmetricKey,
        'base16',
      ),
    }
  }

  async decryptString(encryptedStr, encryptedSymmetricKey) {
    if (!this.litNodeClient) {
      await this.connect()
    }
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })
    const symmetricKey = await this.litNodeClient.getEncryptionKey({
      accessControlConditions: accessControlConditionsNFT,
      toDecrypt: encryptedSymmetricKey,
      chain,
      authSig,
    })
    const decryptedFile = await LitJsSdk.decryptString(
      encryptedStr,
      symmetricKey,
    )
    // eslint-disable-next-line no-console
    console.log({
      decryptedFile,
    })
    return { decryptedFile }
  }
}

export default new Lit()
