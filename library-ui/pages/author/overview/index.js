import { Box, Button, Flex, Heading, Image, Spacer, Spinner, Text, useToast } from '@chakra-ui/react';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import OverviewBook from '../../../assets/svgs/OverviewBook';
import Wallet from '../../../assets/svgs/wallet';
import OverviewCard from '../../../components/Dashboard/OverviewCard';
import { useAuth } from '../../../context/AppContext';
import { getLayout } from '../../../layout/DashboardLayout';
import { db } from '../../../utils/firebase';
import moment from "moment"
import BookOpen2 from '../../../assets/svgs/BookOpen2';
import styles from '../../../styles/browse.module.css';

const Overview = () => {

  const router = useRouter();
  const { user } = useAuth()
  const toast = useToast()
  const { address } = useAccount()
  const [loading, setLoading] = useState(false);
  const [ploading, setPloading]= useState(false)
  const [activities, setActivities] = useState([]);
  const [publish, setPublish] = useState([])

  const truncate = (addr) => {
    let starter = addr.slice(0,5)
    let end = addr.slice(-4)
    return starter + "..." + end
  }

  // fetch activities
  const fetchActivities = async() => {
    let arr = [];
    const booksRef = collection(db,"activities");
    const q = query(booksRef, where("owner", "==", address), orderBy("time", "desc"), limit(4));
        const ss = await getDocs(q);
        ss.forEach(doc => {
          let book = {id: doc.id, ...doc.data()};
          arr.push(book);
        })
      return arr;
  }

  // fetch activities
  const fetchPublished = async() => {
    let arr = [];
    const booksRef = collection(db,"books");
    const q = query(booksRef, where("minted", "==", true), where("userId", "==", address), orderBy("time", "desc"), limit(4));
        const ss = await getDocs(q);
        ss.forEach(doc => {
          let book = {id: doc.id, ...doc.data()};
          arr.push(book);
        })
      return arr;
  }

  useEffect(()=> {
    setLoading(true)
    setPloading(true)
    fetchActivities().then(async r => {
      await setActivities(r);
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      toast({
        title: "An error occured while fetching activities",
        status: "error",
        isClosable: true, 
        duration: 3000,
      });
      setLoading(false)
    })
    fetchPublished().then(async r => {
      await setPublish(r);
      setPloading(false)
    })
    .catch(err => {
      console.log(err)
      toast({
        title: "An error occured while fetching publishes",
        status: "error",
        isClosable: true, 
        duration: 3000,
      });
      setPloading(false)
    })
  },[])

  return (
    <Box>
      <Flex px={10} py={5} bg='#fff' w='100%' justify='space-between' alignItems='center'>
        <Flex color='#1F2937'>
          <Box mr={3}>
            <Text fontWeight='700' fontSize='21px' fontFamily="'Inter', sans-serif">
              Hello {user.userName===""? truncate(address) : user.userName}, 👋🏾{' '}
            </Text>
            <Text fontWeight='400' fontSize='15px'>
              Welcome to your dashboard
            </Text>
          </Box>
          <Image src={user.profileImg ||'/dp.png'} alt='avatar' width='56px' height='56px' borderRadius='50%' />
        </Flex>
        <Button
          background='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
          borderRadius='8px'
          p={3}
          fontWeight='700'
          fontSize='17px'
          color='#000000'
          _hover={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)' }}
          onClick={() => router.push("/author/library/upload")}
        >
          Publish book
        </Button>
      </Flex>

      <Flex w='100%' px={10} justify='space-between' my={5}>
        <OverviewCard title='My Earnings .' count={user.earnings || 0} text= "MATIC" icon={<Wallet />} w='30%' />
        <OverviewCard
          title='Total Books Published .'
          count={user.booksPublished || 0}
          text={
            <>
              Increased <b>0%</b> from last month
            </>
          }
          icon={<OverviewBook />}
          w='30%'
        />
        <OverviewCard
          title='Total Books Sold'
          count={user.booksSold || 0}
          text={
            <>
              Increased <b>0%</b> from last month
            </>
          }
          icon={<OverviewBook />}
          w='30%'
        />
      </Flex>
      <Flex w='100%' px={10} justify='space-between'>
        <Box border='1px solid #E5E7EB' borderRadius='8px' p={5} w='calc(50% - 15px)' h='445px' bg='#fff'>
          <Flex justify='space-between' alignItems='center'>
            <Text color='#1F2937' fontWeight='700' fontSize='20px' fontFamily="'Inter', sans-serif">
              Recent Publish
            </Text>
            <Text
              fontWeight='600'
              fontSize='16px'
              bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
              bgClip='text'
            >
              View all
            </Text>
          </Flex>
          {ploading === true || publish.length=== 0 ? <Box mx='auto' my='130px'>
          {loading === true ? 
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            /> : 
            <>
            <Text fontSize='18px' color='#4B5563' textAlign='center' letterSpacing='-0.02em' py={5}>
              You have not published any book yet.
            </Text>
            <Button
              bg='#F3F4F6'
              borderRadius='8px'
              fontSize='14px'
              color='#1A0830'
              fontWeight={500}
              margin='0 auto'
              display='flex'
              _hover={{ bg: '#FFFFFF' }}
              onClick={() => router.push("/author/library/upload")}
            >
              Publish a book
            </Button>
            </>}
          </Box> : 
          <Box>
          {publish.map(read => (<Flex mt='40px' alignItems="center" justifyContent="space-between"> 
            <Box w="35px" h='65px' bg='#113E6B' pos='relative'>
              <Image
                src={`https://${read.bookCoverCid}.ipfs.w3s.link`}
                alt='bookCover'
                width='35px'
                height='55px'
                pos='absolute'
                top='5px'
                left='10px'
              />
            </Box>
            <Box ml={5}>
              <Text fontSize='16px' fontWeight='600' color='#000000'>
                {read.title}
              </Text>
              <Text fontSize='12px' fontWeight='400' color='#4B5563'>
                {read.pages} pages
              </Text>
            </Box>

            <Box ml={5}>
              <Heading
                pb='8px'
                color='#1F2937'
                fontFamily='DM Sans'
                fontSize='16px'
                fontWeight={700}
                letterSpacing='-0.02em'
              >
                <span>{read.price} MATIC</span>
                <span className={styles.browse__icon__container}>
                  <Image src="/matic.svg" className={styles.browse__icon} />
                </span>
              </Heading>
            </Box>

            <Box ml={5}>
              <Heading
                  pb='8px'
                  color='#1F2937'
                  fontFamily='DM Sans'
                  fontSize='16px'
                  fontWeight={700}
                  letterSpacing='-0.02em'
                >
                  {read.unit}
                </Heading>
            </Box>
            <Box ml={5} mt="-10px">
              <Button colorScheme="gray" size="sm" borderRadius="16px">
                View
              </Button>
            </Box>
          </Flex>))}
          </Box>}
        </Box>

        <Box border='1px solid #E5E7EB' borderRadius='8px' p={5} w='calc(50% - 15px)' h='445px' bg='#fff'>
          <Flex justify='space-between' alignItems='center'>
            <Text color='#1F2937' fontWeight='700' fontSize='20px' fontFamily="'Inter', sans-serif">
              Activity
            </Text>
            <Text
              fontWeight='600'
              fontSize='16px'
              bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
              bgClip='text'
            >
              View all
            </Text>
          </Flex>
          {activities.length == 0 || loading === true ? <Box mx='auto' my='130px' textAlign="center">
            {loading === true ? 
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            /> : 
            <>
              <Text fontSize='18px' color='#4B5563' textAlign='center' letterSpacing='-0.02em' py={5}>
                You have no activity yet.
              </Text>
              <Button
                bg='#F3F4F6'
                borderRadius='8px'
                fontSize='14px'
                color='#1A0830'
                fontWeight={500}
                margin='0 auto'
                display='flex'
                _hover={{ bg: '#FFFFFF' }}
                onClick={() => router.push("/author/library/upload")}
              >
                Publish a book
              </Button>
            </>}
          </Box> : 
          <Box>
          {activities.map((tx, index) => (
            <Flex mt='40px' key={index}>
                  <Flex>
                    {console.log(tx)}
                    <Box
                      bg='linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)'
                      width='48px'
                      height='48px'
                      borderRadius='50%'
                      display='flex'
                      justifyContent='center'
                      alignItems='center'
                    >
                      <BookOpen2 />
                    </Box>
                    <Box pl='12px'>
                      <Heading
                        pb='8px'
                        bg='linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)'
                        bgClip='text'
                        fontFamily='DM Sans'
                        fontSize='16px'
                        fontWeight={700}
                        letterSpacing='-0.02em'
                      >
                        {tx.title}
                      </Heading>
                      <Text color='#9CA3AF' fontSize='15px' fontWeight={500}>
                        {tx.action} by {(tx.actor).substring(0, 18) + '...'}
                      </Text>
                    </Box>
                  </Flex>
                  <Spacer />
                  <Box textAlign='right'>
                    <Heading
                      pb='8px'
                      color='#1F2937'
                      fontFamily='DM Sans'
                      fontSize='16px'
                      fontWeight={700}
                      letterSpacing='-0.02em'
                    >
                      <span>{ moment(new Date((tx.time).seconds * 1000)).format("LT") }</span>
                    </Heading>
                    <Text color='#9CA3AF' fontSize='14px' fontWeight={500}>
                      { moment(new Date((tx.time).seconds * 1000)).format("Do MMM YYYY") }
                    </Text>
                  </Box>
                </Flex>
              ))}
          </Box>}

        </Box>
      </Flex>
      <Flex px={10} py={5}>
        <Box border='1px solid #E5E7EB' borderRadius='8px' p={5} w='100%' h='445px' bg='#fff' mx='auto'>
          <Flex justify='space-between' alignItems='center'>
            <Text color='#1F2937' fontWeight='700' fontSize='20px' fontFamily="'Inter', sans-serif">
              Transactions
            </Text>
            <Text
              fontWeight='600'
              fontSize='16px'
              bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
              bgClip='text'
            >
              View all
            </Text>
          </Flex>
          <Box mx='auto' my='130px'>
            <Text fontSize='18px' color='#4B5563' textAlign='center' letterSpacing='-0.02em' py={5}>
              You have no activity yet.
            </Text>
            <Button
              bg='#F3F4F6'
              boxShadow='0px 9px 21px rgba(16, 24, 40, 0.05)'
              borderRadius='8px'
              fontSize='14px'
              color='#1A0830'
              fontWeight={500}
              margin='0 auto'
              display='flex'
              _hover={{ bg: '#FFFFFF' }}
              onClick={() => router.push("/author/library/upload")}
            >
              Publish a book
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

Overview.getLayout = getLayout;
export default Overview;
