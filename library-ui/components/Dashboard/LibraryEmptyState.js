import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const LibraryEmptyState = () => {
  const router = useRouter();
  return (
    <Box mt={10}>
      <Image src='/StackOfBooks.png' alt='' margin='0 auto' />
      <Text fontSize='18px' color='#4B5563' textAlign='center' letterSpacing='-0.02em' fontFamily='DM Sans' py={5}>
        You have not written any book yet.
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
        _hover={{ bg: '#F3F4F6' }}
        _active={{ bg: '#F3F4F6' }}
        _focus={{ bg: '#F3F4F6' }}
        onClick={() => router.push('/author/library/upload')}
      >
        Publish a book
      </Button>
    </Box>
  );
};

export default LibraryEmptyState;
