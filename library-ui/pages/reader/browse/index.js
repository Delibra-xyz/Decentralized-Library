import { getLayout } from '../../../layout/DashboardLayout';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spacer,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  useToast,
} from '@chakra-ui/react';
import Search from '../../../assets/svgs/search';
import LibraryCard from '../../../components/Dashboard/LibraryCard';
import LibraryEmptyState from '../../../components/Dashboard/LibraryEmptyState';
import BookOpenColoured from '../../../assets/svgs/BookOpenColoured';
import User from '../../../assets/svgs/User';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../utils/firebase';

const Browse = () => {
  const toast = useToast();
  const [ loading, setLoading] = useState(false);
  const [all, setAll] = useState([]);
  const [filter, setFilter]= useState(["All"]);

  // fetch random books
  const fetchRandom = async() => {
    let arr = [];
    const booksRef = collection(db,"books");
    const q = query(booksRef, where("minted", "==", true));
        const ss = await getDocs(q);
        ss.forEach(doc => {
          let book = {id: doc.id, ...doc.data()};
          arr.push(book);
        })
      return arr;
  }

  // fetch recommended books with genre
  const fetchFilters = async(x) => {
    if((x.length === 1 && x[0] === "All") || x.length === 0){
      console.log("here")
      fetchRandom().then(r => {
        setAll(r)
      })
      .catch(err => console.log(err))
    } else{
      let arr = [];
      let allFilters = x.filter(x => x!=="All");
      const booksRef = collection(db,"books");
      const q = query(booksRef, where("minted", "==", true), where("category", "in", allFilters));
      const ss = await getDocs(q);
      if(ss.length !== 0){
        ss.forEach(doc => {
          let book = {id: doc.id, ...doc.data()};
          arr.push(book);
        })
      } 
      setAll(arr)
    }
    return "done";
  }


  useEffect(()=> {
    setLoading(true)
    fetchRandom().then(async r => {
      await setAll(r)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      toast({
        title: "An error occured while fetching books",
        status: "error",
        isClosable: true, 
        duration: 3000,
      });
      setLoading(false)
    })
  },[])

  const handleSelect = (x) => {
    setLoading(true)
    if(!filter.includes(x)){
      setFilter(prev => [...prev, x]);
      fetchFilters([...filter, x]).then(res => {
        setLoading(false)
      })
    } else {
      let rem = filter.filter(p => p !== x);
      setFilter(rem)
      fetchFilters(rem).then(res => {
        setLoading(false)
      })
    }
  }

  const clearFilters = () => {
    setLoading(true)
    setFilter(['All']);
    fetchFilters(["All"]).then(res => {
      setLoading(false)
    })
  }

  const tabNames = [
    {
      tabName: 'Books',
      tabIcon: <BookOpenColoured />,
    },
    {
      tabName: 'Author',
      tabIcon: <User />,
    },
  ];
  const tags = ['All', 'Thriller', 'Romance', 'Travel', 'Non fiction', 'Comedy'];

  return (
    <Box px='24px' py='34px'>
      <Box>
        <Tabs defaultIndex={0} paddingBottom={'16px'}>
          <Flex>
            <TabList width='fit-content'>
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
                  isDisabled={tabName === 'Author' ? true : false}
                >
                  {tabIcon} &nbsp; {tabName}
                </Tab>
              ))}
            </TabList>
            <Spacer />
            <InputGroup width='30%'>
              <InputLeftElement pointerEvents='none'>
                <Search />
              </InputLeftElement>
              <Input
                type='search'
                placeholder='What book are you looking for'
                _placeholder={{ color: '#9CA3AF' }}
                borderRadius='37px'
                width='100%'
                bg='#FFFFFF'
                boxShadow='0px 2px 35px rgba(0, 0, 0, 0.08)'
                _focus={{
                  boxShadow: 'unset',
                }}
              />
            </InputGroup>
          </Flex>
          <Flex pt='24px'>
            {tags.map((tag, index) => (
              <Tag
                key={index}
                px='24px'
                py='12px'
                border='1px solid #D1D5DB'
                mr='16px'
                borderRadius='31px'
                cursor='pointer'
                bg={filter.includes(tag) ? '#E5E7EB' : '#FFFFFF'}
                color='#000000'
                onClick={()=> handleSelect(tag)}
              >
                {tag}
              </Tag>
            ))}
          </Flex>
          <TabPanels>
            <TabPanel px='0'>
              <>
                <Box>
                  <Heading
                    pt='34px'
                    color='#1F2937'
                    fontSize='21px'
                    fontWeight={700}
                    fontFamily='Inter'
                    letterSpacing='-0.02em'
                  >
                    All books
                  </Heading>
                  {loading ? 
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
                    <Box mt={4}>
                      {all.length === 0 ? 
                      <Box w="60%" mx="auto"  mt={10} mb={10} p={10}>
                        <Image src='/StackOfBooks.png' alt='' margin='0 auto' />
                        <Text fontSize='18px' color='#4B5563' textAlign='center' letterSpacing='-0.02em' fontFamily='DM Sans' py={5}>
                            There are no books matching the selected filter. Select another filter or clear filters to see more options.
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
                          onClick={() => clearFilters()}
                        >
                            Clear Filters
                        </Button>
                      </Box> 
                      :
                      <SimpleGrid templateColumns='repeat(5, 1fr)' gap={4} rowGap={10}>
                        {all.map((book, index) => (
                        <LibraryCard 
                          key={index}
                          mr={all.length > 4 ? '0px': '20px'}
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
                      </SimpleGrid>}
                    </Box>}
                </Box>
              </>
            </TabPanel>
            {/* <TabPanel px={0} py={6}>
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

Browse.getLayout = getLayout;
export default Browse;
