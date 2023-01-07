import { onAuthStateChanged, onIdTokenChanged, signInAnonymously, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { createContext, useState, useContext, useEffect} from 'react';
import { useAccount } from 'wagmi'
import { getUser, isDelibraUser } from '../utils/contractUtils';
import { auth, db } from '../utils/firebase';
import nookies from 'nookies';
// import { ethers } from 'ethers';
// import contractAddress from "../contracts/User/contract_address.json"
// import abi from "../contracts/User/abi.json"

const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const { isConnected, address } = useAccount()
    const [mounted, setMounted] = useState(false)
    const [ user, setUser] = useState({})
    const [ firebaseUser, setFirebaseUser] = useState({})

    useEffect(() => {
        setMounted(true)
    },[])

    useEffect(()=> {
      onIdTokenChanged(auth, async (user) => {
          if(!user){
            setFirebaseUser({})
            nookies.set(undefined, 'token', "", { path: '/'})
          }else {
            const token = await user.getIdToken();
            setFirebaseUser(user)
            nookies.set(undefined, 'token', token, { path: '/'})
          }
      })
    },[])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setFirebaseUser(user)
          } else {
            setFirebaseUser({})
          }
        });
       
  }, [])

    useEffect(() => {
        isDelibraUser(window.ethereum, address).then(
          res => {
            if(res === false){
              setUser({})
            } else {
              getUser(window.ethereum).then(
                res => {
                  setUser({
                  userType: res.userType,
                  isOnboarded: res.onboarded,
                  userName: res.userName
                })
              }).catch(err => console.log(err))
            }
          })
      },[])


    const onLogin = () => {
        // e.preventDefault();
        signInAnonymously(auth)
        .then((userCredential) => {
          setFirebaseUser(userCredential.user)
            // console.log(userCredential);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

    const handleLogout = () => {               
      signOut(auth).then(() => {
          setFirebaseUser({})
          setUser({})
      }).catch((error) => {
        console.log(error)
      });
  }

    const fetchDetailsFromDb = async () => {
      try {
        let userRef = doc(db, "users", address);
        await getDoc(userRef).then(r => {
          setUser(r.data())
        })
        .catch(err => {
          console.error(err);
        })
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    const value = {
        isConnected,
        onLogin,
        mounted,
        user,
        setUser,
        firebaseUser,
        setFirebaseUser,
        fetchDetailsFromDb,
        handleLogout
    }

    return (
       <AppContext.Provider value={value}>
        {console.log(user)}
       	{children} 
       </AppContext.Provider>
    );
};

export default AppContext;


export const useAuth = () => useContext(AppContext);
