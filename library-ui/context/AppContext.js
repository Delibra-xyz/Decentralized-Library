import React, { createContext, useState, useContext} from 'react';

const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const [ connected, setConnected ] = useState(false);
    const value = {
        connected,
        setConnected
    }

    return (
       <AppContext.Provider value={value}>
       	{children} 
       </AppContext.Provider>
    );
};

export default AppContext;


export const useAuth = () => useContext(AppContext);
