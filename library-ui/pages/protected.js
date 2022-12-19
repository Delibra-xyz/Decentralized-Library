import { getSession } from 'next-auth/react'
import Moralis from 'moralis'
import { EvmChain } from '@moralisweb3/common-evm-utils'

function Protected({ message, nftList }) {
  return (
    <div>
      <h3>Protected content</h3>
      <p>{message}</p>
      <pre>{JSON.stringify(nftList, null, 2)}</pre>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  if (!Moralis.Core.isStarted) {
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY })
  }

  const nftList = await Moralis.EvmApi.nft.getWalletNFTs({
    chain: EvmChain.ETHEREUM,
    address: session.user.address,
    //   NFT token address
    tokenAddresses: ['0x5E2ef6A03F51fb64426110f5adF48995fc11A7BB'],
  })

  return {
    props: {
      message:
        // if user has at least one NFT he will get protected content
        nftList.raw.total > 0
          ? 'Nice! You have our NFT'
          : "Sorry, you don't have our NFT",
      nftList: nftList.raw.result,
    },
  }
}
export default Protected
