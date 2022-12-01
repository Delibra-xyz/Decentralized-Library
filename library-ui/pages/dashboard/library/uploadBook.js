import { getLayout } from '../../../layout/DashboardLayout';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from '@chakra-ui/react';
import ImageIcon from '../../../assets/svgs/image';
import Upload from '../../../assets/svgs/Upload';
import BookOpenColoured from '../../../assets/svgs/BookOpenColoured';
import styles from '../../../styles/libraryOverview.module.css';

const UploadBook = () => {
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
            <FormLabel display='flex' justifyContent='center' alignItems='center' m='0'>
              <ImageIcon />
            </FormLabel>
            <Input
              type='file'
              placeholder='Upload a cover'
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
              Add cover story
            </FormHelperText>
          </FormControl>
        </Box>
        <Box
          ml='36px'
          bgColor='#FFFFFF'
          border='1px solid #E5E7EB'
          borderRadius='16px'
          width='65%'
          height='390px'
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
              <FormHelperText fontSize='14px' color='#6B7280' fontWeight={500} m='0' pb='8px' letterSpacing='-0.02em'>
                pdf, txt, doc, ppt, xls, docx, and more. Max 100mb
              </FormHelperText>
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
                />
              </Button>
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
            >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </FormControl>
          <FormControl mb='32px'>
            <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
              Tags
            </FormLabel>
            <Input
              type='text'
              placeholder='Enter a title'
              color='#1F2937'
              fontSize='16px'
              bg='#FFFFFF'
              borderRadius='6px'
              focusBorderColor='#6B7280'
              border='1px solid #D1D5DB'
              _placeholder={{ color: '#9CA3AF' }}
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
              />
              <InputRightElement>
                <span>ETH</span>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl mb='32px'>
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
          </FormControl>
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
            >
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
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
          >
            Publish Book
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

UploadBook.getLayout = getLayout;
export default UploadBook;
