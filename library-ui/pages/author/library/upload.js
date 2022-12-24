import { useState } from 'react';
import { getLayout } from '../../../layout/DashboardLayout';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Spinner,
  Text,
  useToast
} from '@chakra-ui/react';
import ImageIcon from '../../../assets/svgs/image';
import Upload from '../../../assets/svgs/Upload';
import BookOpenColoured from '../../../assets/svgs/BookOpenColoured';
import styles from '../../../styles/libraryOverview.module.css';
import { storeFiles } from '../../../utils/store';
import { tags } from '../../../containers/Genre';
import { AiOutlineFileDone } from "react-icons/ai"
import { addDoc, collection } from 'firebase/firestore';
import { useAccount } from 'wagmi';
import { db } from '../../../utils/firebase';
import { useRouter } from 'next/router';

const UploadBook = () => {
  const { address } = useAccount()
  const router = useRouter()
  const toast  = useToast()
  const numbers = [1,2,3,4,5,6,7,8,9,10]
  const [photo, setPhoto] = useState('');
  const [loading, setLoading] = useState(false)
  const [imageLoading, setImageLoading] = useState(false)
  const [image2Loading, setImage2Loading] = useState(false)
  const [imageCid, setImageCid] = useState("")
  const [fileCid, setFileCid] = useState("")
  const [ tokenUri, setTokenUri] = useState("")
  const [imagePreviewUrl, setImagePreviewUrl] = useState(<ImageIcon />);
  const [ doc, setDoc] = useState()
  const [values, setValues] = useState({
    tokenUri: tokenUri,
    bookCoverCid:imageCid,
    fileCid:fileCid,
    title:"",
    description:"",
    category:"",
    tags:[],
    price:"",
    unit:"",
    royalties:""
  })

  const handleBookCoverChange = async (e) => {
    setImageLoading(true)
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setPhoto(file);
      setImagePreviewUrl(reader.result);
    };
    // uploading to web3 storage
      try {
       const res = await storeFiles (e.target.files, e.target.files[0].name)
       setImageCid(res)
       setValues({...values, bookCoverCid: res})
       setImageLoading(false)
       reader.readAsDataURL(file);
      } catch (error) {
        console.log(error)
       setImageLoading(false)
      }
  };

  const handleFileUpload = async (e) => {
    setImage2Loading(true)
    // uploading to web3 storage
      try {
       const res = await storeFiles (e.target.files, e.target.files[0].name)
       setFileCid(res)
       setValues({...values, fileCid: res})
       setDoc(e.target.files[0])
       setImage2Loading(false)
      } catch (error) {
        console.log(error)
        setImage2Loading(false)
      }
  };

  const generateTokenUri = async() => {
    const data = {
      name: values.title,
      description: values.description,
      image:`https//ipfs.io/ipfs/${values.bookCoverCid}`
    }
    const myFile = await new File([JSON.stringify(data)], `${values.title.trim()}.json`);
    if(myFile){
      try {
      const res = await storeFiles ([myFile], `${values.title.trim()}.json`)
      setTokenUri(() => res)
      setValues({...values, tokenUri: res})
      setTimeout(() => {
        uploadToFireStore(res)
      }, 3000);
     } catch (error) {
       console.log(error)
       setLoading(false)
     }
    }
  }

  const uploadToFireStore = async(r) => {
    let bookRef = collection(db, "books");
    await addDoc(bookRef, {...values, tokenUri: r, userId: address, minted: false})
    .then(res => {
      toast({
        title: "Upload successful",
        status: "success",
        isClosable: true,
        duration: 3000,
      })
      setLoading(false)
      router.push("/author/library")
      console.log("successful")
      setValues({
        tokenUri: "",
        bookCoverCid:"",
        fileCid:"",
        title:"",
        description:"",
        category:"",
        tags:[],
        price:"",
        unit:"",
        royalties:""
      })
      setImageCid("")
      setFileCid("")
      setDoc("")
      setPhoto("")
      setTokenUri("")
      setImagePreviewUrl(<ImageIcon />)
    })
    .catch(err => {
      console.error(err);
      setLoading(false)
      toast({
        title: "An error occured",
        description:"Please try again later",
        status: "error",
        isClosable: true,
        duration: 3000,
      })
    })
  }

  const submitBook = () => {
    setLoading(true)
    generateTokenUri()
  }

  return (
    <Box my='23px' px='40px'>
      <Heading
        color='#1F2937'
        fontSize='21px'
        fontWeight={700}
        fontFamily='Inter'
        textAlign='center'
        letterSpacing='-0.02em'
      >
        Publish your book for the world
      </Heading>
      <Text
        color='#1F2937'
        fontSize='15px'
        fontWeight={400}
        textAlign='center'
        mb='48px'
        letterSpacing='-0.02em'
        pt='5px'
      >
        Presentations, research papers, stories
      </Text>
      <Flex justifyContent='center'>
        <Box>
          <FormControl
            bg='#FFFFFF'
            borderRadius='8px'
            border='1px solid #E5E7EB'
            height='317px'
            width='250px'
            overflow='hidden'
            position='relative'
          >
            <FormLabel display='flex' justifyContent='center' alignItems='center' m='0' p='24px' height='265px'>
              {imageLoading ?
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              /> : photo === '' ? imagePreviewUrl : <Image src={imagePreviewUrl} alt='' height='210px' width='160px' />}
            </FormLabel>
            <Input
              type='file'
              placeholder='Upload a cover'
              onChange={handleBookCoverChange}
              title=' '
              p='0'
              borderRadius='none'
              cursor='pointer'
              border='none'
              focusBorderColor='none'
              height='265px'
              position='absolute'
              top='0'
              left='0'
              opacity='0'
              isRequired
            />
            <FormHelperText
              fontSize='16px'
              color='#000000'
              fontWeight={400}
              bg='#E5E7EB'
              p='16px'
              m='0'
              position='absolute'
              bottom='0'
              width='100%'
              textAlign='center'
              letterSpacing='-0.02em'
            >
              Upload book cover
            </FormHelperText>
          </FormControl>
        </Box>
        <Box
          ml='36px'
          bgColor='#FFFFFF'
          border='1px solid #E5E7EB'
          borderRadius='16px'
          width='65%'
          height='73vh'
          overflow='auto'
          px='24px'
          py='16px'
        >
          <Heading
            bg='linear-gradient(98.41deg, #1D2B64 0%, #25020D 100%)'
            bgClip='text'
            borderBottom='3px solid  #25020D'
            fontSize='18px'
            fontWeight={700}
            display='flex'
            alignItems='center'
            width='fit-content'
            mb='26px'
            cursor='pointer'
          >
            <BookOpenColoured className={styles.upload__icon} />
            <span style={{ paddingLeft: '6px', paddingBottom: '6px' }}>Details</span>
          </Heading>
          <FormControl mb='32px' position='relative'>
            <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
              Upload file
            </FormLabel>
            <Box
              borderRadius='8px'
              border='1px dashed #6B7280'
              height='145px'
              display='flex'
              alignItems='center'
              justifyContent='center'
              flexDirection='column'
            >
              {image2Loading ? 
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              /> :
              <>
              {doc ?  <AiOutlineFileDone style={{fontSize:"60px", marginBottom:"20px"}}/> : 
              <FormHelperText fontSize='14px' color='#6B7280' fontWeight={500} m='0' pb='8px' letterSpacing='-0.02em'>
                pdf, txt, doc, ppt, xls, docx, and more. Max 100mb
              </FormHelperText>}
              <Button
                bgColor='#E5E7EB'
                borderRadius='8px'
                px='24px'
                py='12px'
                color='#000000'
                fontSize='14px'
                fontWeight={500}
                fontFamily='DM Sans'
                display='flex'
                alignItems='end'
                justifyContent='center'
              >
                <span style={{ paddingRight: '8px' }}>Choose File</span>
                <Upload />
                <Input
                  type='file'
                  placeholder='Upload file'
                  title=' '
                  p='0'
                  cursor='pointer'
                  focusBorderColor='none'
                  position='absolute'
                  top='0'
                  left='0'
                  borderRadius='0'
                  border='none'
                  height='100%'
                  opacity='0'
                  onChange={handleFileUpload}
                  isRequired
                />
              </Button>
              </>
              }
            </Box>
          </FormControl>
          <FormControl mb='32px'>
            <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
              Title
            </FormLabel>
            <Input
              type='text'
              placeholder='Enter a title'
              color='#1F2937'
              fontSize='16px'
              focusBorderColor='#6B7280'
              bg='#FFFFFF'
              borderRadius='6px'
              border='1px solid #D1D5DB'
              _placeholder={{ color: '#9CA3AF' }}
              onChange={(e) => setValues({...values, title: e.target.value})}
              isRequired
            />
          </FormControl>
          <FormControl mb='32px'>
            <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
              Description
            </FormLabel>
            <Input
              type='text'
              placeholder='Enter a description'
              color='#1F2937'
              fontSize='16px'
              focusBorderColor='#6B7280'
              bg='#FFFFFF'
              borderRadius='6px'
              border='1px solid #D1D5DB'
              _placeholder={{ color: '#9CA3AF' }}
              onChange={(e) => setValues({...values, description: e.target.value})}
              isRequired
            />
          </FormControl>
          <FormControl mb='32px'>
            <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
              Category
            </FormLabel>
            <Select
              placeholder='Select a category'
              type='text'
              color='#1F2937'
              focusBorderColor='#6B7280'
              fontSize='16px'
              bg='#FFFFFF'
              borderRadius='6px'
              border='1px solid #D1D5DB'
              _placeholder={{ color: '#9CA3AF' }}
              onChange={(e) => setValues({...values, category: e.target.value})}
              isRequired
            >
              {tags.map((tag, index) => (
                    <option value={tag} key={index}>{tag}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl mb='32px'>
            <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
              Tags (Separate them with commas e.g tragedy,economics,country)
            </FormLabel>
            <Input
              type='text'
              placeholder='Enter tags e.g tragedy,country,monster'
              color='#1F2937'
              fontSize='16px'
              bg='#FFFFFF'
              borderRadius='6px'
              focusBorderColor='#6B7280'
              border='1px solid #D1D5DB'
              _placeholder={{ color: '#9CA3AF' }}
              onChange={(e) => setValues({...values, tags: e.target.value.split(",")})}
              isRequired
            />
          </FormControl>
          <FormControl mb='32px'>
            <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
              Price
            </FormLabel>
            <InputGroup>
              <Input
                type='text'
                placeholder='Enter a price for this book'
                color='#1F2937'
                fontSize='16px'
                bg='#FFFFFF'
                focusBorderColor='#6B7280'
                borderRadius='6px'
                border='1px solid #D1D5DB'
                _placeholder={{ color: '#9CA3AF' }}
                onChange={(e) => setValues({...values, price: e.target.value})}
                isRequired
              />
              <InputRightElement pr='16px'>
                <span>MATIC</span>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          {/* <FormControl mb='32px'>
            <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
              Date of listing expiration
            </FormLabel>
            <Select
              placeholder='3 month'
              type='text'
              color='#1F2937'
              fontSize='16px'
              bg='#FFFFFF'
              focusBorderColor='#6B7280'
              borderRadius='6px'
              border='1px solid #D1D5DB'
              _placeholder={{ color: '#9CA3AF' }}
            >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
            </Select>
          </FormControl> */}
          <FormControl mb='32px'>
            <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
              Unit
            </FormLabel>
            <Select
              placeholder='10'
              type='text'
              color='#1F2937'
              fontSize='16px'
              bg='#FFFFFF'
              borderRadius='6px'
              focusBorderColor='#6B7280'
              border='1px solid #D1D5DB'
              _placeholder={{ color: '#9CA3AF' }}
              onChange={(e) => setValues({...values, unit: e.target.value})}
              isRequired
            >
              {numbers.map((number, index) => (
              <option value={number} key={index}>{number}</option>
              ))}
            </Select>
            <FormHelperText color='#6B7280' fontSize='14px' fontWeight={500}>
              Maximum is 10
            </FormHelperText>
          </FormControl>
          <FormControl mb='32px'>
            <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
              Royalities
            </FormLabel>
            <InputGroup>
              <Input
                type='text'
                placeholder='10'
                color='#1F2937'
                fontSize='16px'
                bg='#FFFFFF'
                focusBorderColor='#6B7280'
                borderRadius='6px'
                border='1px solid #D1D5DB'
                _placeholder={{ color: '#9CA3AF' }}
                onChange={(e) => setValues({...values, royalties: e.target.value})}
              />
              <InputRightElement>
                <span>%</span>
              </InputRightElement>
            </InputGroup>
            <FormHelperText color='#6B7280' fontSize='14px' fontWeight={500}>
              Suggested: 0%, 5%, 10%. Maximum is 10%
            </FormHelperText>
          </FormControl>

          <Button
            mt='40px'
            bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
            color='#000000'
            _hover={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)' }}
            _focus={{
              boxShadow: 'unset',
            }}
            onClick={submitBook}
            isLoading={loading}
          >
            Upload Book
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

UploadBook.getLayout = getLayout;
export default UploadBook;
