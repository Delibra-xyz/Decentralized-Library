import { getLayout } from '../../../layout/DashboardLayout';
import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from '@chakra-ui/react';
import Search from '../../../assets/svgs/search';
import Eye from '../../../assets/svgs/Eye';
import Bookmark from '../../../assets/svgs/Bookmark';
import ReaderLibraryCard from '../../../components/Dashboard/ReaderLibraryCard';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { db } from '../../../utils/firebase';

const Library = () => {
  const { address } = useAccount();
  const toast = useToast();
  const router = useRouter();
  const [ loading, setLoading] = useState(false);
  const [ purchases, setPurchases] = useState([]);

  // fetch my purchases
  const fetchPurchases = async() => {
    let arr = [];
    const booksRef = collection(db,"purchases");
    const q = query(booksRef, where("buyerId", "==", address));
        const ss = await getDocs(q);
        ss.forEach(doc => {
          let book = {id: doc.id, ...doc.data()};
          arr.push(book);
        })
      return arr;
  }

  const tabNames = [
    {
      tabName: 'Purchased',
      tabIcon: <Eye />,
    },
    {
      tabName: 'Wishlist',
      tabIcon: <Bookmark />,
    },
  ];

  useEffect(()=> {
    setLoading(true)
    fetchPurchases().then(async r => {
      await setPurchases(r);
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      toast({
        title: "An error occured while fetching purchases",
        status: "error",
        isClosable: true, 
        duration: 3000,
      });
      setLoading(false)
    })
  },[])

  return (
    <Box mt='23px' p='0 25px'>
      <InputGroup mb='32px'>
        <InputLeftElement pointerEvents='none'>
          <Search />
        </InputLeftElement>
        <Input
          type='search'
          placeholder='What book are you looking for'
          borderRadius='37px'
          width='40%'
          bg='#FFFFFF'
          boxShadow='0px 2px 35px rgba(0, 0, 0, 0.08)'
          _focus={{
            boxShadow: 'unset',
          }}
        />
      </InputGroup>
      <Box>
        <Tabs defaultIndex={0} paddingBottom={'18px'}>
          <TabList>
            {tabNames.map(({ tabName, tabIcon }, index) => (
              <Tab
                key={index}
                color='#1F2937'
                fontSize='18px'
                fontWeight='500'
                _selected={{
                  color: '#25020D',
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  borderBottom: '3px solid #25020D',
                }}
                isDisabled={tabName === "Wishlist" ? true : false}
              >
                {tabIcon} &nbsp;
                {tabName}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel px='0'>
              <Text color='#1F2937' fontWeight='500' opacity='0.9'>
                Showing 1-10 out of 20
              </Text>
              {loading  ? 
                    <Box px={10} py={5} h="65vh" w="100%">
                        <Spinner
                          thickness='4px'
                          speed='0.65s'
                          emptyColor='gray.200'
                          color='blue.500'
                          size='xl'
                          mx="48%"
                          my="24%"
                        />
                    </Box> : 
                    <Box mt={6}>
                      {purchases.length === 0 ? 
                      <Box w="60%" mx="auto"  mt={10} mb={10} p={10}>
                        <Image src='/StackOfBooks.png' alt='' margin='0 auto' />
                        <Text fontSize='18px' color='#4B5563' textAlign='center' letterSpacing='-0.02em' fontFamily='DM Sans' py={5}>
                            You have not purchased any books. Check the marketplace to see book options.
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
                            Go to marketplace
                        </Button>
                      </Box> 
                      :
                      <SimpleGrid templateColumns='repeat(5, 1fr)' gap={4} rowGap={10}>
                        {purchases.map((book, index) => (
                          <ReaderLibraryCard
                            key={index}
                            id={book.id}
                            link={`/reader/library/${book.id}`}
                            bookName={book.title}
                            bookAuthor={book.author}
                            bookCover={`https://${book.bookCoverCid}.ipfs.w3s.link`}
                          />
                        ))}
                      </SimpleGrid>}
                    </Box>}
            </TabPanel>
            {/* <TabPanel px={0} py={6}>
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

Library.getLayout = getLayout;
export default Library;
