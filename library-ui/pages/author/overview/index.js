import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import OverviewBook from '../../../assets/svgs/OverviewBook';
import Wallet from '../../../assets/svgs/wallet';
import OverviewCard from '../../../components/Dashboard/OverviewCard';
import { getLayout } from '../../../layout/DashboardLayout';

const Overview = () => {
  return (
    <Box>
      <Flex px={10} py={5} bg='#fff' w='100%' justify='space-between' alignItems='center'>
        <Flex color='#1F2937'>
          <Box mr={3}>
            <Text fontWeight='700' fontSize='21px' fontFamily="'Inter', sans-serif">
              Hello mayor.delibra.eth, 👋🏾{' '}
            </Text>
            <Text fontWeight='400' fontSize='15px'>
              Welcome to your dashboard
            </Text>
          </Box>
          <Image src='/dp.png' alt='avatar' width='56px' height='56px' borderRadius='50%' />
        </Flex>
        <Button
          background='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
          borderRadius='8px'
          p={3}
          fontWeight='700'
          fontSize='17px'
          color='#000000'
          _hover={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)' }}
        >
          Publish book
        </Button>
      </Flex>

      <Flex w='100%' px={10} justify='space-between' my={5}>
        <OverviewCard title='My Earnings .' count='-' text='24.5 MATIC' icon={<Wallet />} w='30%' />
        <OverviewCard
          title='Total Books Published .'
          count='-'
          text={
            <>
              Increased <b>16%</b> from last month
            </>
          }
          icon={<OverviewBook />}
          w='30%'
        />
        <OverviewCard
          title='Total Books Sold'
          count='-'
          text={
            <>
              Increased <b>16%</b> from last month
            </>
          }
          icon={<OverviewBook />}
          w='30%'
        />
      </Flex>
      <Flex w='100%' px={10} justify='space-between'>
        <Box border='1px solid #E5E7EB' borderRadius='8px' p={5} w='calc(50% - 15px)' h='445px' bg='#fff'>
          <Flex justify='space-between' alignItems='center'>
            <Text color='#1F2937' fontWeight='700' fontSize='20px' fontFamily="'Inter', sans-serif">
              Recent Publish
            </Text>
            <Text
              fontWeight='600'
              fontSize='16px'
              bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
              bgClip='text'
            >
              View all
            </Text>
          </Flex>
          <Box mx='auto' my='130px'>
            <Text fontSize='18px' color='#4B5563' textAlign='center' letterSpacing='-0.02em' py={5}>
              You have not published any book yet.
            </Text>
            <Button
              bg='#F3F4F6'
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
        </Box>

        <Box border='1px solid #E5E7EB' borderRadius='8px' p={5} w='calc(50% - 15px)' h='445px' bg='#fff'>
          <Flex justify='space-between' alignItems='center'>
            <Text color='#1F2937' fontWeight='700' fontSize='20px' fontFamily="'Inter', sans-serif">
              Activity
            </Text>
            <Text
              fontWeight='600'
              fontSize='16px'
              bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
              bgClip='text'
            >
              View all
            </Text>
          </Flex>
          <Box mx='auto' my='130px'>
            <Text fontSize='18px' color='#4B5563' textAlign='center' letterSpacing='-0.02em' py={5}>
              You have no activity yet.
            </Text>
            <Button
              bg='#F3F4F6'
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
        </Box>
      </Flex>
      <Flex px={10} py={5}>
        <Box border='1px solid #E5E7EB' borderRadius='8px' p={5} w='100%' h='445px' bg='#fff' mx='auto'>
          <Flex justify='space-between' alignItems='center'>
            <Text color='#1F2937' fontWeight='700' fontSize='20px' fontFamily="'Inter', sans-serif">
              Transactions
            </Text>
            <Text
              fontWeight='600'
              fontSize='16px'
              bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
              bgClip='text'
            >
              View all
            </Text>
          </Flex>
          <Box mx='auto' my='130px'>
            <Text fontSize='18px' color='#4B5563' textAlign='center' letterSpacing='-0.02em' py={5}>
              You have no activity yet.
            </Text>
            <Button
              bg='#F3F4F6'
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
        </Box>
      </Flex>
    </Box>
  );
};

Overview.getLayout = getLayout;
export default Overview;
