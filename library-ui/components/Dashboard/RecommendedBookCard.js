import { Box, Image, Text, Icon, Flex, Link } from '@chakra-ui/react';
import { RiStarFill } from 'react-icons/ri'
import { BsEmojiSunglasses } from "react-icons/bs"
import { Link as NextLink } from 'next/link';

const RecommendedBookCard = ({ id, ...props }) => {
  return (
    <Flex border="1px solid #E5E7EB" borderRadius="8px" p={1} pos="relative" m={3} {...props}>
        <Box w="150px" h="175px" bg="#F3F4F6" borderRadius="4px">
            <Image src='/featured1.jfif' alt='bookCover' width='86px' height='109px' margin='33px auto' />
        </Box>
        <Box px={5} py={3}>
            <Link
                as={NextLink}
                href={`/reader/browse/${id}`}
                _hover={{ textDecoration: 'none' }}
                _focus={{
                    boxShadow: 'unset',
                }}
            >
                <Text 
                    fontSize="16px" 
                    fontWeight="800" 
                    fontFamily="'Inter', sans-serif"
                    color="#000000"
                    mb={2}
                >Life on the Mississppi</Text>
            </Link>
            <Text 
                fontSize="14px" 
                fontWeight="500" 
                color="#000000"
                mb={1}
                display="flex"
                alignItems="center"
            >Madeline Miller &nbsp; <Icon as={BsEmojiSunglasses}/></Text>

            <Flex>
                <Icon as={RiStarFill} boxSize="17px" color="#F59E0B"/>
                <Icon as={RiStarFill} boxSize="17px" color="#F59E0B"/>
                <Icon as={RiStarFill} boxSize="17px" color="#F59E0B"/>
                <Icon as={RiStarFill} boxSize="17px" color="#F59E0B"/>
                <Icon as={RiStarFill} boxSize="17px" color="#E6E6E6"/>
                <Text fontSize="14px" fontWeight="500" >&nbsp;4.5</Text>
            </Flex>
            <Box pos="absolute" bottom={3}>
                <Text 
                    fontSize="12px" 
                    fontWeight="500" 
                    color="#4B5563"
                >Floor Price</Text>

                <Text 
                    fontSize="16px" 
                    fontWeight="700" 
                    color="#000000"
                >56.3 MATIC &nbsp; </Text>
            </Box>
        </Box>
    </Flex>
  );
};

export default RecommendedBookCard;
