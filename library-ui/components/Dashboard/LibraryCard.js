import { Link, Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import Unit from '../../assets/svgs/unit';
import styles from '../../styles/library.module.css';

const LibraryCard = ({ id, link, ...props }) => {
  return (
    <Box
      maxW='3xs'
      borderWidth='1px'
      borderColor='#E5E7EB'
      borderRadius='16px'
      p='2'
      backgroundColor='#FFFFFF'
      {...props}
    >
      <Box bg='#F3F4F6' borderRadius='8' overflow='hidden' py='4'>
        <Image src='/featured1.jfif' alt='bookCover' width='86px' height='110px' margin='0 auto' />
      </Box>
      <Box>
        <Text fontSize='12px' color='#374151' fontFamily='DM Sans' pt={3}>
          Romance
        </Text>
        <Link
          as={NextLink}
          href={link}
          _hover={{ textDecoration: 'none' }}
          _focus={{
            boxShadow: 'unset',
          }}
        >
          <Heading
            fontSize='16px'
            color='#000000'
            fontWeight={800}
            letterSpacing='-0.024em'
            fontFamily='Inter'
            pt='2px'
          >
            Life on the Mississppi
          </Heading>
        </Link>
      </Box>
      <div className={styles.library__wrapper}>
        <Box>
          <Text fontSize='12px' color='#6B7280' fontFamily='DM Sans' pt={3}>
            Price
          </Text>
          <Heading fontSize='14px' color='#374151' fontFamily='DM Sans' display='inline-block'>
            0.89
          </Heading>
          <Text
            display='inline-block'
            color='#6B7280'
            textTransform='uppercase'
            fontSize='12px'
            fontWeight={500}
            pl={1}
          >
            ETH
          </Text>
        </Box>
        <Box>
          <Text fontSize='12px' color='#6B7280' fontFamily='DM Sans' pt={3}>
            Unit
          </Text>
          <Heading fontSize='14px' color='#374151' pr={1} fontFamily='DM Sans' display='inline-block'>
            10
          </Heading>
          <Unit />
        </Box>
      </div>
    </Box>
  );
};

export default LibraryCard;
