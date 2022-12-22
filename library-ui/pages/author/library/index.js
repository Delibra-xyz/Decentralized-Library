import { Link as NextLink } from 'next/link';
import { getLayout } from '../../../layout/DashboardLayout';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  SimpleGrid,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import List from '../../../assets/svgs/list';
import Grid2 from '../../../assets/svgs/Grid2';
import Search from '../../../assets/svgs/search';
import LibraryCard from '../../../components/Dashboard/LibraryCard';
import LibraryEmptyState from '../../../components/Dashboard/LibraryEmptyState';
import styles from '../../../styles/library.module.css';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, QuerySnapshot, where } from 'firebase/firestore';
import { db } from '../../../utils/firebase';
import { useAccount } from 'wagmi';
import { listBook } from '../../../utils/contractUtils';
import { BsFillFlagFill } from 'react-icons/bs';

const Library = () => {
  const { address } = useAccount()
  const tabNames = ['Published', 'Uploads'];
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(false)
  const [reload, setReload] = useState(false)
  const published = uploads.filter(x => x.minted === true);

  async function getBooks(){
    let b = []
    const booksRef = collection(db, 'books')
    const q = query(booksRef, where("userId", "==", address))
    const ss =  await getDocs(q);
    await ss.forEach(doc => {
      let book = {id: doc.id, ...doc.data()}
      b.push(book)
      // setUploads(prev => [...prev,book])
    })
    return b;
    
  }

  useEffect(()=> {
    setLoading(true)
    getBooks().then(r => {
      setUploads(r);
      setLoading(false)
    })
  },[reload])

  return (
    <div className={styles.library}>
      <div className={styles.library__header}>
        <InputGroup>
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
        <Link
          as={NextLink}
          href='/author/library/upload'
          display='block'
          fontWeight={700}
          px='24px'
          py='12px'
          width='15%'
          borderRadius='8px'
          bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
          _hover={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)' }}
          _focus={{
            boxShadow: 'unset',
          }}
        >
          Upload Book
        </Link>
      </div>
      <Box>
        <Tabs defaultIndex={0} paddingBottom={'16px'}>
          <Flex>
            <TabList width='fit-content'>
              {tabNames.map((tab, index) => (
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
                >
                  {tab}
                </Tab>
              ))}
            </TabList>
            <Spacer />
            <Box>
              <Text
                bg='linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)'
                bgClip='text'
                display='inline-block'
                textColor='transparent'
                pr='9px'
              >
                Switch view:
              </Text>
              <IconButton
                aria-label='List view'
                icon={<List />}
                bg='#E0E0E0'
                borderRadius='4px'
                _hover={{ bgColor: '#E0E0E0' }}
                _focus={{
                  boxShadow: 'unset',
                  bgColor: 'transparent',
                }}
              />
              <IconButton
                aria-label='Grid view'
                icon={<Grid2 />}
                backgroundColor='transparent'
                borderRadius='4px'
                _hover={{ bgColor: 'transparent' }}
                _focus={{
                  boxShadow: 'unset',
                  bgColor: 'transparent',
                }}
              />
            </Box>
          </Flex>
          {loading ? 
          <Box px={10} py={5} h="65vh" w="100%">
            <lottie-player 
              src="https://assets7.lottiefiles.com/temp/lf20_MoTZke.json"  
              background="transparent"  
              speed="1"    
              loop 
              autoplay
            >   
            </lottie-player>
          </Box> : 
          <TabPanels>
            <TabPanel px={0} py={6}>
            { published.length ===0 && !loading ?
             <LibraryEmptyState text="You have not published any book yet."/> :
             <>
              <Text color='#1F2937' fontWeight='500' opacity='0.9' mb={3}>
                Showing 1-10 out of 20
              </Text>
              <Box mt={6}>
                <SimpleGrid templateColumns='repeat(4, 1fr)' gap={5}>
                  {published.map(upload => (
                     <LibraryCard 
                        id={upload.id} 
                        link={`/author/library/${upload.id}`} 
                        unit={upload.unit}
                        price={upload.price} 
                        title={upload.title}
                        category={upload.category}
                        showMint={false}
                        uri={upload.tokenUri}
                        image={`https://${upload.bookCoverCid}.ipfs.w3s.link`}
                        minted={upload.minted}
                        reload={reload}
                        setReload={setReload}
                      />
                  ))}
                </SimpleGrid>
              </Box>
              </>}
            </TabPanel>
            <TabPanel>
             { uploads.length ===0 && !loading ?
             <LibraryEmptyState btn="Upload  a book" text="You have not uploaded any book yet."/> :
             <>
              <Text color='#1F2937' fontWeight='500' opacity='0.9' mb={3}>
                Showing 1-10 out of 20
              </Text>
              <Text color='green' fontSize='14px' fontWeight={500} display="flex" alignItems="center">
                <BsFillFlagFill/>&nbsp; Publishing costs 0.0001MATIC
              </Text>
              <Box mt={6}>
                <SimpleGrid templateColumns='repeat(4, 1fr)' gap={5}>
                  {uploads.map(upload => (
                     <LibraryCard 
                        id={upload.id} 
                        link={`/author/library/${upload.id}`} 
                        unit={upload.unit}
                        price={upload.price} 
                        title={upload.title}
                        category={upload.category}
                        showMint
                        uri={upload.tokenUri}
                        image={`https://${upload.bookCoverCid}.ipfs.w3s.link`}
                        minted={upload.minted}
                        reload={reload}
                        setReload={setReload}
                      />
                  ))}
                </SimpleGrid>
              </Box>
              </>}
              
            </TabPanel>
          </TabPanels>
          }   
        </Tabs>
      </Box>
    </div>
  );
};

Library.getLayout = getLayout;
export default Library;
