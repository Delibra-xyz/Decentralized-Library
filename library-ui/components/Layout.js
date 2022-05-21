import React, { useCallback, useEffect, useReducer } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Web3Modal from 'web3modal'
import { Box } from '@chakra-ui/react';
import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        80001: "https://rpc-mumbai.maticvigil.com"
      },
      chainId:80001
    },
  },
}

let web3Modal
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'Mumbai Testnet', // optional
    cacheProvider: true,
    providerOptions, // required

  })
}


const initialState = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
  network:null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
        network: action.network,
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId,
      }
    case 'SET_NETWORK':
      return {
        ...state,
        network: action.network,
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}

const Layout = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState)
  const { provider, web3Provider, address, chainId, network } = state

  const connect = useCallback(async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect()

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.
    const web3Provider = new providers.Web3Provider(provider)

    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()

    const network = await web3Provider.getNetwork()

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
      network,
    })
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    },
    [provider]
  )

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId) => {
        window.location.reload()
      }

      const handleDisconnect = (error) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])


const account = {
  address: address,
  connect: connect,
}

    return (
    	<>
	        <Header 
		        address={address} 
		        // network={network} 
		        web3Provider={web3Provider} 
		        disconnect={disconnect}
		        connect={connect}
            network={network}
		    />
        {console.log(network)}
        <Box minH="calc(100vh - 100px)" w="100%" pt="100px" bg="#E4E9F2"> 
        {React.Children.map(props.children, child => {
          return React.cloneElement(child, {account}, null)
        })}
        </Box>
        
	        <Footer/>
	    </>
    );
};


export default Layout;
