import React, { createContext, useState, useContext, useEffect} from 'react';
import { useAccount } from 'wagmi'

const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const { isConnected } = useAccount()
    const [mounted, setMounted] = useState(false)
    const [ connected, setConnected ] = useState(mounted ? isConnected : false);

    useEffect(() => {
        setMounted(true)
    },[])

    const value = {
        connected,
        setConnected,
        mounted
    }

    return (
       <AppContext.Provider value={value}>
       	{children} 
       </AppContext.Provider>
    );
};

export default AppContext;


export const useAuth = () => useContext(AppContext);
