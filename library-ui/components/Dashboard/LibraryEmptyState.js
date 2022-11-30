import { Box, Button, Image, Text } from '@chakra-ui/react';

const LibraryEmptyState = () => {
  return (
    <Box mt={10}>
      <Image src='StackOfBooks.png' alt='' margin='0 auto' />
      <Text fontSize='18px' color='#4B5563' textAlign='center' letterSpacing='-0.02em' fontFamily='DM Sans' py={5}>
        You have not written any book yet.
      </Text>
      <Button
        bg='#FFFFFF'
        boxShadow='0px 9px 21px rgba(16, 24, 40, 0.05)'
        borderRadius='8px'
        fontSize='14px'
        color='#1A0830'
        fontWeight={500}
        margin='0 auto'
        display='flex'
        _hover={{ bg: '#FFFFFF' }}
      >
        Publish a book
      </Button>
    </Box>
  );
};

export default LibraryEmptyState;
