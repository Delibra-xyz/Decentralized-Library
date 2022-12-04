import React from 'react';
import ConnectWalletButton from '../ConnectWalletButton';
import { Flex, Box, Spacer, ButtonGroup, Text, Icon } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { useAuth } from '../../context/AppContext';
import Link from 'next/link';
import { MdOutlineDashboard } from 'react-icons/md';
const Navbar = () => {
  const { connected } = useAuth();
  return (
    <>
      <Flex
        minWidth='max-content'
        alignItems='center'
        gap='2'
        bg='linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%);'
        borderBottom={'1px solid #2A1B38;'}
        backdropFilter='blur(12.5px);'
        p={10}
      >
        <Link href='/' legacyBehavior>
          <Flex>
            <Box px={3} maxW='full' m={[2, 3]}></Box>
            <Image src='logo.svg' />
            <Box>
              <Image src='delibra.svg' />
            </Box>
          </Flex>
        </Link>

        <Spacer />

        {connected ? (
          <Link href='/authentication' legacyBehavior cursor='pointer'>
            <Text color='#fff' fontWeight='700' fontSize='lg' px={10} display='flex' alignItems='center' cursor="pointer">
              <Icon as={MdOutlineDashboard} />
              &nbsp;Dashboard
            </Text>
          </Link>
        ) : null}

        <ButtonGroup gap='10'>
          <ConnectWalletButton
            bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
            backgroundColor='#fff'
            _hover={{ bg: '#fff' }}
          />
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Navbar;
