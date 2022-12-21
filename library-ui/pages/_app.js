import { ChakraProvider } from '@chakra-ui/react'
import '../styles/style.css'
import '@rainbow-me/rainbowkit/styles.css'
import {
  // ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit'
import { chain ,configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
// import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { AppProvider } from '../context/AppContext'
import Script from 'next/script'

// const zkevm = {
//   id: 1402,
//   name: 'Polygon zkEVM Testnet',
//   network: 'Polygon zkEVM Testnet',
//   iconUrl:
//     'https://res.cloudinary.com/polygontech/image/upload/f_auto,q_auto,dpr_2,w_44,h_44/Polygon_Hermez_efab9004dc',
//   iconBackground: '#fff',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'Ether',
//     symbol: 'ETH',
//   },
//   rpcUrls: {
//     default: 'https://rpc.public.zkevm-test.net',
//   },
//   blockExplorers: {
//     default: {
//       name: 'polygon zkEVM',
//       url: ' https://explorer.public.zkevm-test.net',
//     },
//   },
//   testnet: true,
// }

// const { provider, chains } = configureChains(
//   [zkevm],
//   [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) })],
// )

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({ alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function Home({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ChakraProvider>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@v1.5.7/dist/lottie-player.js"></Script>

      <AppProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              overlayBlur: 'small',
              borderRadius: 'medium',
              accentColor: '#7b3fe4',
              accentColorForeground: 'white',
            })}
            modalSize="compact"
            coolMode
          >
            {getLayout(<Component {...pageProps} />)}
          </RainbowKitProvider>
        </WagmiConfig>
      </AppProvider>
    </ChakraProvider>
  )
}

export default Home
