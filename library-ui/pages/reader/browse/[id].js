import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { getLayout } from '../../../layout/DashboardLayout';
import BookOpen2 from '../../../assets/svgs/BookOpen2';
// import Ethereum from '../../../assets/svgs/ethereum';
import Share from '../../../assets/svgs/share';
// import Star from '../../../assets/svgs/Star';
import styles from '../../../styles/browse.module.css';
import firebaseAdmin from '../../../utils/db';
import { useEffect, useState } from 'react';
import { buyBook, getMarketPlaceContract, getNftOwners } from '../../../utils/contractUtils';
import { useAccount } from 'wagmi';
import { db } from '../../../utils/firebase';
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import moment from "moment"

const BookOverview = ({ data }) => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false)
  const [ transactions, setTransactions] = useState([]);
  const [reload, setReload] = useState(false);
  const [holders, setHolders] = useState([])
  const { address } = useAccount();
  // fetch book info from contract
  

  useEffect(()=> {
    let activitiesRef = collection(db, "activities");
    let bd = { 
        actor:address, 
        owner: data.userId,
        action:"viewed", 
        bookId:data.id, 
        title: data.title, 
        time: new Date()
      }
    notifyAuthor(activitiesRef, bd); 
  },[])

  const updateTxns = (ev) => {
    let txnsRef = collection(db, "transactions");
    let bd = { 
        buyerId:address, 
        authorId: data.userId,
        price: data.price,
        bookId:data.id, 
        title: data.title, 
        tx: ev,
        time: new Date()
      }
    notifyAuthor(txnsRef, bd);
  }

  // inform author when someone views a books or buys a book
  const notifyAuthor = async(ref, body) => {
    try {
      await addDoc(ref, body)
      .then(res => {
        console.log("successful")
      })
      .catch(err => {
        console.error(err);
      })
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const updateAuthorSoldCount = () => {
    const userRef = doc(db, "users", data.userId)
    let s = getDoc(userRef);
    s.then(res => {
      console.log(res.data())
      setDoc(userRef,{ booksSold: res.data().booksSold + 1, earnings: res.data().earnings + data.price}, { merge: true })
    })
  }

  const addToPurchases = async ()=> {
    let purchaseRef = collection(db, "purchases");
    await addDoc(purchaseRef, 
      { buyerId: address, 
        bookId: data.id, 
        tokenUri: data.tokenUri, 
        author: data.author, 
        authorId: data.userId,
        bookCoverCid: data.bookCoverCid,
        title: data.title,
        time: new Date()
      })
      .then(res => {
        toast({
          title: "Successfully purchased this NFT",
          status: "success",
          isClosable: true, 
          duration: 3000,
        });
        setLoading(false)
        setReload(!reload)
      })
      .catch(err => {
        console.error(err)
        toast({
          title: "An error occured",
          status: "error",
          isClosable: true, 
          duration: 3000,
        });
        setLoading(false)
      })
  }

  const mintBook = () => {
    setLoading(true)
    buyBook(window.ethereum,data.price,data.tokenUri).then(async res => {
      updateAuthorSoldCount();
      const contract = await getMarketPlaceContract(window.ethereum)
      contract.on("NFTSold", (seller, buyer, price, event) => {
        updateTxns(event.transactionHash);
      })
      await addToPurchases();
    })
    .catch(err => {
      console.log(err)
      toast({
        title: "An error occured",
        status: "error",
        isClosable: true, 
        duration: 3000,
      });
      setLoading(false)
    })
  }

  const fetchAllPurchases = async() => {
    let arr = [];
    const currentRef = collection(db,"purchases");
    const q = query(currentRef, where("bookId", "==", data.id));
    const ss = await getDocs(q);
    ss.forEach(doc => {
      let book = {id: doc.id, ...doc.data()};
      arr.push(book);
    })
    return arr;
  }

  useEffect(()=> {
    // get nft holders
    getNftOwners(window.ethereum, data.tokenUri)
    .then(
      res => {
        console.log(res)
        setHolders(res)
      })
    .catch(err => console.log(err))
      // fetch purchases
    fetchAllPurchases()
    .then(r => setTransactions(r))
    .catch(err => {
      toast({
        title: "Error loading book transaction history",
        status: "error",
        isClosable: true, 
        duration: 3000,
      });
    })
  },[data, reload])

  const truncate = (addr) => {
    let starter = addr.slice(0,5)
    let end = addr.slice(-4)
    return starter + "..." + end
  }
  const tabNames = ['Properties', 'History'];
  const addr = (data.userId).substring(0, 18) + '...';
  return (
    <Box px='24px' py='30px'>
      <Flex>
        <Image
          src={`https://${data.bookCoverCid}.ipfs.w3s.link`}
          alt='book-cover'
          width='280px'
          height='450px'
          filter='drop-shadow(13.0191px 13.0191px 13.0191px rgba(0, 0, 0, 0.12));'
          boxShadow='0px 10.5444px 15.8166px -2.63609px rgba(16, 24, 40, 0.1), 0px 5.27219px 10.5444px -5.27219px rgba(16, 24, 40, 0.1)'
        />
        <Spacer />
        <Box pl='90px' pr='50px'>
          <Box>
            <Heading
              pb='14px'
              color='#1F2937'
              fontSize='40px'
              fontWeight={800}
              fontFamily='Inter'
              letterSpacing='-0.02em'
            >
              {data.title || "The Perfect Marriage"}
            </Heading>
            <Text color='#1F2937' fontSize='16px' fontWeight={400} lineHeight='29px'>
              {data.description || 
              'BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.'}
            </Text>
          </Box>
          <Box pt='20px' pb='30px' display='flex'>
            <Box mr='50px'>
              <Text color='#4B5563' fontSize='14px' fontWeight={400}>
                Created by
              </Text>
              <Heading
                py='4px'
                color='#000000'
                fontSize='17px'
                fontWeight={500}
                fontFamily='DM Sans'
                letterSpacing='-0.02em'
              >
                {data.author || "Madeline Miller"}
              </Heading>
            </Box>
            <Box>
              <Text color='#4B5563' fontSize='14px' fontWeight={400}>
                Supply
              </Text>
              <Heading
                py='4px'
                color='#000000'
                fontSize='17px'
                fontWeight={500}
                fontFamily='DM Sans'
                letterSpacing='-0.02em'
              >
                {data.unit}
              </Heading>
            </Box>
          </Box>
          <Box pt='20px' pb='30px' display='flex'>
            <Box mr="90px">
              <Text color='#4B5563' fontSize='14px' fontWeight={400}>
                Floor Price
              </Text>
              <Heading
                pb='18px'
                color='#000000'
                fontFamily='DM Sans'
                fontSize='18px'
                fontWeight={700}
                letterSpacing='-0.02em'
              >
                <span>{data.price || 56.3} MATIC</span>
                <span className={styles.browse__icon__container}>
                  <Image src="/matic.svg" className={styles.browse__icon} />
                </span>
              </Heading>
              {/* <Text color='#9CA3AF' fontSize='14px' fontWeight={700}>
                $16,739
              </Text> */}
            </Box>
            <Box>
                <Text color='#4B5563' fontSize='14px' fontWeight={400}>
                  Quantity left
                </Text>
                <Heading
                  py='4px'
                  color='#000000'
                  fontSize='17px'
                  fontWeight={500}
                  fontFamily='DM Sans'
                  letterSpacing='-0.02em'
                >
                  {data.unit - holders.length}
                </Heading>
            </Box>
          </Box>
          <Flex alignItems='center' mt='10px' mb='30px'>
            <Button
              fontWeight={700}
              px='24px'
              py='16px'
              fontSize='17px'
              color='#000000'
              borderRadius='8px'
              bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
              _hover={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)' }}
              _active={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)' }}
              _focus={{
                boxShadow: 'unset',
              }}
              onClick={onOpen}
              isLoading={loading}
            >
              Buy Now for {data.price || 56.3} MATIC
              <span className={styles.browse__icon__container}>
                <Image src="/matic.svg" className={styles.browse__icon} />
              </span>
            </Button>
            <Button
              bg='transparent'
              fontSize='17px'
              color='#000000'
              borderRadius='0'
              _hover={{ bg: 'transparent' }}
              _active={{ bg: 'transparent' }}
              _focus={{
                boxShadow: 'unset',
              }}
            >
              <span style={{ paddingRight: '8px' }}>Share</span>
              <Share />
            </Button>
          </Flex>
          {/* <Box textAlign='center'>
            <Box as='span' color='#9CA3AF' fontSize='16px' fontWeight={700} pr='12px'>
              Sale ends in
            </Box>
            <Box as='span' color='#9CA3AF' fontSize='16px' fontWeight={700} pr='12px'>
              28d
            </Box>
            <Box as='span' color='#9CA3AF' fontSize='16px' fontWeight={700} pr='12px'>
              11h
            </Box>
            <Box as='span' color='#9CA3AF' fontSize='16px' fontWeight={700} pr='12px'>
              55m
            </Box>
            <Box as='span' color='#9CA3AF' fontSize='16px' fontWeight={700} pr='12px'>
              4s
            </Box>
          </Box> */}
        </Box>
      </Flex>
      <Box pt='52px' width='60%'>
        <Tabs>
          <TabList>
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
          <TabPanels>
            <TabPanel px={0} py={6}>
              <Box>
                <FormControl mb='35px'>
                  <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
                    Category
                  </FormLabel>
                  <Input
                    type='text'
                    placeholder={data.category}
                    _placeholder={{ color: '#1F2937' }}
                    fontSize='16px'
                    bg='#FFFFFF'
                    focusBorderColor='none'
                    borderRadius='6px'
                    border='1px solid #D1D5DB'
                    cursor='default'
                    readOnly
                  />
                </FormControl>
                <FormControl mb='35px'>
                  <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
                    Tags
                  </FormLabel>
                  <Flex>
                    {(data.tags).map((t,index) => (
                    <Tag px='24px' py='12px' fontSize='16px' bgColor='#E5E7EB' mr='8px' borderRadius='46px' key={index}>
                      #{t.trim()}
                    </Tag>
                    ))}
                  </Flex>
                </FormControl>
                <FormControl mb='35px'>
                  <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
                    Creator&apos;s Royalties Percent
                  </FormLabel>
                  <Input
                    type='text'
                    placeholder={data.royalties}
                    _placeholder={{ color: '#1F2937' }}
                    fontSize='16px'
                    bg='#FFFFFF'
                    focusBorderColor='none'
                    borderRadius='6px'
                    border='1px solid #D1D5DB'
                    cursor='default'
                    readOnly
                  />
                </FormControl>
              </Box>
            </TabPanel>
            <TabPanel px='0'>
              {transactions.length === 0 ? 
              <Box>
                <Heading
                  py='4px'
                  color='#000000'
                  fontSize='20px'
                  fontWeight={500}
                  fontFamily='DM Sans'
                  letterSpacing='-0.02em'
                  my={10}
                  textAlign="center"
                >
                  There are no transactions on this book.
                </Heading>
              </Box>:
              <Box>
              {transactions.map((tx, index) => (
                <Flex mt='40px'>
                      <Flex>
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
                            Purchased by {truncate(tx.buyerId)}
                          </Heading>
                          <Text color='#9CA3AF' fontSize='15px' fontWeight={500}>
                            {moment().endOf(new Date((tx.time).seconds * 1000)).fromNow()}
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
                          <span>{data.price} MATIC</span>
                          <span className={styles.browse__icon__container}>
                            <Image src="/matic.svg" className={styles.browse__icon} />
                          </span>
                        </Heading>
                        <Text color='#9CA3AF' fontSize='14px' fontWeight={500}>
                          #{index + 1}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
              </Box>}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent py='30px'>
          <ModalHeader
            pb='10px'
            pt='0'
            color='#000000'
            fontFamily='Inter'
            fontSize='24px'
            fontWeight={800}
            letterSpacing='-0.02em'
            textAlign='center'
          >
            Checkout
          </ModalHeader>
          <ModalBody>
            <Text
              color='#6B7280'
              fontFamily='DM Sans'
              fontSize='17px'
              lineHeight='30px'
              fontWeight={500}
              textAlign='center'
              letterSpacing='-0.02em'
            >
              You are about to purchase{' '}
              <span style={{ color: '#000000', fontWeight: '700' }}>{data.title}</span> from
              <span style={{ color: '#000000', fontWeight: '700' }}>&nbsp;{addr}</span>
            </Text>
            <Box border=' 1px solid #D1D5DB' borderRadius='8px' px='8px' py='16px' mt='40px'>
              <Box display='flex' justifyContent='space-between' alignItems='center' pb='16px'>
                <Text color='#284E51' fontSize='16px' fontWeight={500}>
                  Creator
                </Text>
                <Text color='#000000' fontSize='15px' fontWeight={500} textAlign='right'>
                  {data.author}
                </Text>
              </Box>
              <Box display='flex' justifyContent='space-between' alignItems='center' pb='16px'>
                <Text color='#284E51' fontSize='16px' fontWeight={500}>
                  Price
                </Text>
                <Text color='#000000' fontSize='15px' fontWeight={500} textAlign='right'>
                  {data.price} MATIC
                </Text>
              </Box>
              <Box display='flex' justifyContent='space-between' alignItems='center' pb='16px'>
                <Text color='#284E51' fontSize='16px' fontWeight={500}>
                  Gas fee 
                </Text>
                <Text color='#000000' fontSize='15px' fontWeight={500} textAlign='right'>
                  To be calculated
                </Text>
              </Box>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Text color='#284E51' fontSize='16px' fontWeight={500}>
                  You will pay
                </Text>
                <Text color='#000000' fontSize='15px' fontWeight={500} textAlign='right'>
                {data.price} + gas MATIC
                </Text>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              fontWeight={700}
              px='24px'
              py='16px'
              fontSize='17px'
              color='#000000'
              borderRadius='8px'
              margin='0 auto'
              bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
              _hover={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)' }}
              _focus={{
                boxShadow: 'unset',
              }}
              onClick={()=>{
                mintBook()
                onClose()
              }}
              isLoading={loading}
            >
              Buy Now for {data.price} MATIC
              <span className={styles.browse__icon__container}>
                <Image src="/matic.svg" className={styles.browse__icon} />
              </span>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export const getStaticPaths = async () => {
  // fetch all published  books
  let arr = [];
  await firebaseAdmin.collection("/books").where("minted", "==", true).get()
  .then(ss =>{
    ss.forEach(doc => {
        let p = { params: { id: doc.id } }
        arr.push(p);
      })
  })
  
  const paths = [...arr];
  return {
    paths,
    fallback: false, // meaning any path not returned by `getStaticPaths` will result in a 404 page
  };
};

export async function getStaticProps({params}) {
  // fetch book info
  let data = {}
  await firebaseAdmin.collection("books").doc(params.id).get()
  .then(res => {
      data = JSON.parse(JSON.stringify({id: params.id, ...res.data()}))
  })
  
  // Pass data to the page via props
  return { props: { data } }
}

BookOverview.getLayout = getLayout;
export default BookOverview;
