import { Text, Flex, Image, Box, Button } from '@chakra-ui/react';
import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import CurrentBookCard from '../components/Dashboard/CurrentBookCard';
import LibraryCard from '../components/Dashboard/LibraryCard';

export default function ReaderHome() {
  return (
    <>
      <Flex color='#1F2937' mb={5}>
        <Box mr={3}>
          <Text fontWeight='700' fontSize='21px' fontFamily="'Inter', sans-serif">
            Hello mayor.delibra.eth, 👋🏾{' '}
          </Text>
          <Text fontWeight='400' fontSize='15px'>
            What are you reading today?
          </Text>
        </Box>
        <Image src='/dp.png' alt='avatar' width='56px' height='56px' borderRadius='50%' />
      </Flex>

      <Flex justify='space-between' alignItems='center' mb={10}>
        <Box w='60%' h='auto'>
          <CurrentBookCard w='100%' />
        </Box>

        <Box w='30%' bg='#fff' border='1px solid #E5E7EB' borderRadius='8px' height='228px' py={3} px={5}>
          <Text fontSize='18px' fontWeight='700' fontFamily="'Inter', sans-serif" color='#000000' mb={5}>
            Currently reading
          </Text>
          <Flex mb={5}>
            <Box w='35px' h='65px' bg='#113E6B' pos='relative'>
              <Image
                src='/featured6.png'
                alt='bookCover'
                width='35px'
                height='55px'
                pos='absolute'
                top='5px'
                left='10px'
              />
            </Box>
            <Box ml={5}>
              <Text fontSize='16px' fontWeight='600' color='#000000'>
                Life on the Mississppi
              </Text>
              <Text fontSize='12px' fontWeight='400' color='#4B5563'>
                Madeline Miller
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box w='35px' h='65px' bg='#113E6B' pos='relative'>
              <Image
                src='/featured6.png'
                alt='bookCover'
                width='35px'
                height='55px'
                pos='absolute'
                top='5px'
                left='10px'
              />
            </Box>
            <Box ml={5}>
              <Text fontSize='16px' fontWeight='600' color='#000000'>
                Life on the Mississppi
              </Text>
              <Text fontSize='12px' fontWeight='400' color='#4B5563'>
                Madeline Miller
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Box mb={10}>
        <Flex justify='space-between' mb={5}>
          <Text fontSize='21px' fontWeight='700' fontFamily="'Inter', sans-serif" color='#1F2937'>
            Recommended for you
          </Text>

          <Box>
            <Box
              as='button'
              bg='transparent'
              border='1.1331px solid #E5E7EB'
              borderRadius='50px'
              color='#000000'
              p={2}
              mr={3}
            >
              <BsChevronLeft />
            </Box>
            <Box as='button' bg='transparent' border='1.1331px solid #E5E7EB' borderRadius='50px' color='#000000' p={2}>
              <BsChevronRight />
            </Box>
          </Box>
        </Flex>
        <Flex justify='space-between'>
          <LibraryCard id='1' link={`/reader/browse/1`} w='18%' />
          <LibraryCard id='2' link={`/reader/browse/2`} w='18%' />
          <LibraryCard id='3' link={`/reader/browse/3`} w='18%' />
          <LibraryCard id='4' link={`/reader/browse/4`} w='18%' />
          <LibraryCard id='5' link={`/reader/browse/5`} w='18%' />
        </Flex>
      </Box>

      <Box>
        <Flex justify='space-between' mb={5}>
          <Text fontSize='21px' fontWeight='700' fontFamily="'Inter', sans-serif" color='#1F2937'>
            Best Selling
          </Text>

          <Box>
            <Box
              as='button'
              bg='transparent'
              border='1.1331px solid #E5E7EB'
              borderRadius='50px'
              color='#000000'
              p={2}
              mr={3}
            >
              <BsChevronLeft />
            </Box>
            <Box as='button' bg='transparent' border='1.1331px solid #E5E7EB' borderRadius='50px' color='#000000' p={2}>
              <BsChevronRight />
            </Box>
          </Box>
        </Flex>
        <Flex justify='space-between'>
          <LibraryCard id='1' link={`/reader/browse/1`} w='18%' />
          <LibraryCard id='2' link={`/reader/browse/2`} w='18%' />
          <LibraryCard id='3' link={`/reader/browse/3`} w='18%' />
          <LibraryCard id='4' link={`/reader/browse/4`} w='18%' />
          <LibraryCard id='5' link={`/reader/browse/5`} w='18%' />
        </Flex>
      </Box>
    </>
  );
}
