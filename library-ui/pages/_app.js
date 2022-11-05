import { ChakraProvider } from '@chakra-ui/react'
import '../styles/style.css'
// import '@rainbow-me/rainbowkit/styles.css';
// import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
// import { WagmiConfig } from 'wagmi';
// import { chains, wagmiClient } from '../utils/ConnectionUtilities';


function Home({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}> */}
          <Component {...pageProps} />
        {/* </RainbowKitProvider>
      </WagmiConfig> */}
    </ChakraProvider>
  )
}

export default Home
