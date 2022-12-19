import React, { createContext, useState, useContext, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { getUser, isDelibraUser } from '../utils/contractUtils'
// import { ethers } from 'ethers';
// import contractAddress from "../contracts/User/contract_address.json"
// import abi from "../contracts/User/abi.json"

const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const { isConnected, address } = useAccount()
  const [mounted, setMounted] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    isDelibraUser(window.ethereum, address).then((res) => {
      if (res === false) {
        setUser({})
      } else {
        getUser(window.ethereum)
          .then((res) => {
            setUser({
              userType: res.userType,
              isOnboarded: res.onboarded,
              userName: res.userName,
            })
          })
          .catch((err) => console.log(err))
      }
    })
  }, [])

  const value = {
    isConnected,
    mounted,
    user,
    setUser,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContext

export const useAuth = () => useContext(AppContext)
