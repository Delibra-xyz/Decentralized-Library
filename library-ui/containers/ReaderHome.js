import { Text, Flex, Image, Box, useToast, Button } from '@chakra-ui/react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useAccount } from 'wagmi';
import CurrentBookCard from '../components/Dashboard/CurrentBookCard';
import LibraryCard from '../components/Dashboard/LibraryCard';
import { useAuth } from '../context/AppContext';
import { db } from '../utils/firebase';

export default function ReaderHome({recommended, all}) {
  const toast = useToast();
  const router = useRouter();
  const { user } = useAuth()
  const { address } = useAccount();
  const [reads, setReads] = useState([])

  const truncate = (addr) => {
    let starter = addr.slice(0,5)
    let end = addr.slice(-4)
    return starter + "..." + end
  }

  // fetch user current reads
  const fetchCurrentReads = async() => {
    let arr = [];
    const currentRef = collection(db,"currentReads");
    const q = query(currentRef, where("userId", "==", address));
    const ss = await getDocs(q);
    ss.forEach(doc => {
      let book = {id: doc.id, ...doc.data()};
      arr.push(book);
    })
    return arr;
  }

  useEffect(()=> {
    fetchCurrentReads().then(r => {
      setReads(r)
    })
    .catch(err => {
      toast({
        title: "An error occured while fetching current reads",
        status: "error",
        isClosable: true, 
        duration: 3000,
      });
    })
  },[address])

  return (
    <>
      <Flex color='#1F2937' mb={5}>
        <Box mr={3}>
          <Text fontWeight='700' fontSize='21px' fontFamily="'Inter', sans-serif">
            Hello {truncate(address)}, 👋🏾{' '}
          </Text>
          <Text fontWeight='400' fontSize='15px'>
            What are you reading today?
          </Text>
        </Box>
        <Image src={user.profileImg || '/dp.png'} alt='avatar' width='56px' height='56px' borderRadius='50%' />
      </Flex>

      {reads.length === 0 ? 
      <Box w="100%" mx="auto"  mb={10} bg='#fff' border='1px solid #E5E7EB' borderRadius='8px' p={10}>
          <Image src='/StackOfBooks.png' alt='' margin='0 auto' />
          <Text fontSize='18px' color='#4B5563' textAlign='center' letterSpacing='-0.02em' fontFamily='DM Sans' py={5}>
              You have no books you are currently reading. Check the marketplace to see book options.
          </Text>
          <Button
            p='12px 24px'
            bg='#F3F4F6'
            borderRadius='8px'
            fontSize='14px'
            color='#1A0830'
            fontWeight={500}
            margin='0 auto'
            display='flex'
            _hover={{ bg: '#FFFFFF' }}
            onClick={() => router.push("/reader/browse")}
          >
              View marketplace
          </Button>
      </Box>
      :
      <Flex justify='space-between' alignItems='center' mb={10}>
        <Box w='60%' h='auto'>
          <CurrentBookCard 
            w='100%' 
            id={reads[0].id}
            price={reads[0].price}
            category={reads[0].category}
            pages={reads[0].pages}
            image={`https://${reads[0].bookCoverCid}.ipfs.w3s.link`}
            author={reads[0].author}
            title={reads[0].title}
          />
        </Box>

        <Box w='30%' bg='#fff' border='1px solid #E5E7EB' borderRadius='8px' height='228px' py={3} px={5}>
          <Text fontSize='18px' fontWeight='700' fontFamily="'Inter', sans-serif" color='#000000' mb={5}>
            Currently reading
          </Text>
          {(reads.slice(0,2)).map(read => (<Flex mb={5}>
            <Box w='35px' h='65px' bg='#113E6B' pos='relative'>
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
                {read.author}
              </Text>
            </Box>
          </Flex>))}
          {/* <Flex>
            <Box w='35px' h='65px' bg='#113E6B' pos='relative'>
              <Image
                src='/featured6.png'
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
                Life on the Mississppi
              </Text>
              <Text fontSize='12px' fontWeight='400' color='#4B5563'>
                Madeline Miller
              </Text>
            </Box>
          </Flex> */}
        </Box>
      </Flex>}

      <Box mb={10}>
        <Flex justify='space-between' mb={5}>
          <Text fontSize='21px' fontWeight='700' fontFamily="'Inter', sans-serif" color='#1F2937'>
            Recommended for you
          </Text>

          <Box>
            <Box
              as='button'
              bg='transparent'
              border='1.1331px solid #E5E7EB'
              borderRadius='50px'
              color='#000000'
              p={2}
              mr={3}
            >
              <BsChevronLeft />
            </Box>
            <Box as='button' bg='transparent' border='1.1331px solid #E5E7EB' borderRadius='50px' color='#000000' p={2}>
              <BsChevronRight />
            </Box>
          </Box>
        </Flex>
        <Flex justify={recommended.length === 5 ? 'space-between': 'flex-start'}>
          {(recommended.slice(0,5)).map(book => (
            <LibraryCard 
              w='18%'
              mr={recommended.length === 5 ? '0px': '20px'}
              id={book.id} 
              link={`/reader/browse/${book.id}`} 
              unit={book.unit}
              price={book.price} 
              title={book.title}
              category={book.category}
              uri={book.tokenUri}
              image={`https://${book.bookCoverCid}.ipfs.w3s.link`}
            />
          ))}
        </Flex>
      </Box>

      <Box>
        <Flex justify='space-between' mb={5}>
          <Text fontSize='21px' fontWeight='700' fontFamily="'Inter', sans-serif" color='#1F2937'>
            Best Selling
          </Text>

          <Box>
            <Box
              as='button'
              bg='transparent'
              border='1.1331px solid #E5E7EB'
              borderRadius='50px'
              color='#000000'
              p={2}
              mr={3}
            >
              <BsChevronLeft />
            </Box>
            <Box as='button' bg='transparent' border='1.1331px solid #E5E7EB' borderRadius='50px' color='#000000' p={2}>
              <BsChevronRight />
            </Box>
          </Box>
        </Flex>
        <Flex justify={all.length === 5 ? 'space-between': 'flex-start'}>
          {(all.slice(0,5)).map((book,index) => (
            <LibraryCard 
              w='18%'
              mr={all.length === 5 ? '0px': '20px'}
              id={book.id} 
              link={`/reader/browse/${book.id}`} 
              unit={book.unit}
              price={book.price} 
              title={book.title}
              category={book.category}
              uri={book.tokenUri}
              image={`https://${book.bookCoverCid}.ipfs.w3s.link`}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
}
