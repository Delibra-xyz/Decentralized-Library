import { Link, Box, Heading, Image, Text, Flex } from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import Star from '../../assets/svgs/Star';

const ReaderLibraryCard = ({ id, link, bookName, bookAuthor, bookCover, ...props }) => {
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
      <Link
        as={NextLink}
        href={link}
        _hover={{ textDecoration: 'none' }}
        _focus={{
          boxShadow: 'unset',
        }}
      >
        <Box bg='#F3F4F6' borderRadius='8' overflow='hidden' py='4'>
          <Image src={bookCover} alt='bookCover' width='86px' height='110px' margin='0 auto' />
        </Box>
        <Box pt='12px' pb='16px'>
          <Heading
            fontSize='16px'
            color='#000000'
            fontWeight={700}
            letterSpacing='-0.024em'
            fontFamily='DM Sans'
            pb='2px'
          >
            {bookName}
          </Heading>
          <Text fontSize='12px' color='#374151' fontFamily='DM Sans' fontWeight={500}>
            by {bookAuthor}
          </Text>
        </Box>
        <Box>
          <Text fontSize='12px' fontWeight={500} color='#4B5563' fontFamily='DM Sans' pb='2px'>
            Ratings
          </Text>
          <Flex>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <Star key={i} />
              ))}
            <Text fontSize='12px' color='#4B5563' fontFamily='DM Sans' pl='4px' fontWeight={500}>
              4.5
            </Text>
          </Flex>
        </Box>
      </Link>
    </Box>
  );
};

export default ReaderLibraryCard;
