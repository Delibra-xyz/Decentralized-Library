import { getLayout } from '../layout/HomeLayout';
import { Heading, Text, Box, useToast } from '@chakra-ui/react';
import Reading from '../assets/svgs/reading';
import Publish from '../assets/svgs/publish';
import styles from '../styles/authentication.module.css';
import { setUser } from '../utils/contractUtils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/AppContext';

const Authentication = () => {
  const router  = useRouter();
  const toast = useToast();
  const { user } = useAuth()

  const register = (type) => {
      setUser(window.ethereum,"", false, type, "").then(res => 
        {
          if(res){
            toast({
              title: "Registeration successful",
              status: "success",
              isClosable: true,
              duration: 3000,
            })
            type === 0 ? router.push("/reader/home") : router.push("/author/overview")
          } else {
            toast({
              title: "An error occured",
              description:"Please try again later",
              status: "error",
              isClosable: true,
              duration: 3000,
            })
          }
        }).catch(err => console.log(err))
  }

  useEffect(()=> {
    if(user.userType === 0){
       router.push("/reader/home")
    } else if (user.userType === 1){
      router.push("/author/overview")
    } else if (!user || !user.userType){
      return;
    }  
  },[user])

  return (
    <div className={styles.authentication}>
      <div className={styles.authentication__container}>
        <Heading
          fontFamily="'Clash Grotesk', sans-serif"
          fontSize='40px'
          fontWeight='700'
          mb={1}
          textAlign='center'
          color='#050820'
        >
          Sign into your account
        </Heading>
        <Text color='#6E718D' fontSize='20px' fontWeight='500' mb={5} textAlign='center'>
          Select an account type.
        </Text>
        <div className={styles.authentication__wrapper}>
          <Box className={styles.authentication__box} onClick={() => register(0)}>
              <>
                <Reading className={styles.authentication__box__link} />
                <Heading
                  color='#000000'
                  mt={2}
                  fontSize='20px'
                  fontWeight='700'
                  textAlign='center'
                  letterSpacing='-0.02em'
                >
                  As a reader
                </Heading>
                <Text color='#374151' textAlign='center' mb={1} fontSize='14px'>
                  Purchase books and own legal right
                </Text>
              </>
          </Box>
          <Box className={styles.authentication__box} onClick={() => register(1)}>
              <>
                <Publish className={styles.authentication__box__link} />
                <Heading
                  color='#000000'
                  mt={4}
                  fontSize='20px'
                  fontWeight='700'
                  textAlign='center'
                  letterSpacing='-0.02em'
                >
                  Publish a book
                </Heading>
                <Text color='#374151' textAlign='center' mb={1} fontSize='14px'>
                  Publish a book and earn crypto
                </Text>
              </>
          </Box>
        </div>
        <Text color='#000000' fontSize='12px' fontWeight='400' textAlign='center' mt={8}>
          This site is protected by Delibra Terms of Service and Privacy policy.
        </Text>
      </div>
    </div>
  );
};
Authentication.getLayout = getLayout;
export default Authentication;
