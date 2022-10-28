import { ChakraProvider } from '@chakra-ui/react'
import '../styles/style.css'

function Home({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Home
