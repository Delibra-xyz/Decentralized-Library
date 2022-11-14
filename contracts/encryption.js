const chain = 'polygon'

const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })

// Visit here to understand how to encrypt static content
// <https://developer.litprotocol.com/docs/LitTools/JSSDK/staticContent>
const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(
  fileInString,
)

const encryptedSymmetricKey = await litNodeClient.saveEncryptionKey({
  accessControlConditions: accessControlConditions.accessControlConditions,
  symmetricKey,
  authSig,
  chain,
})

console.log('encryptedString:', encryptedString)
