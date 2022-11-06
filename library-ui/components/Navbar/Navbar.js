import React from 'react'
import ConnectWalletButton from '../ConnectWalletButton'
import { Flex, Box, Heading, Spacer } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <>
      {/* <Container
        maxW="full"
        bg="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%);"
        borderBottom={'1px solid #2A1B38;'}
      >
        <Text>Delibra</Text>
        <ConnectWalletButton />
      </Container> */}

      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="3"
        bg="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%);"
        borderBottom={'1px solid #2A1B38;'}
      >
        <Box p="8" maxW="full"></Box>
        <Image src="logo.svg" />
        <Box>
          <Heading size="lg">Delibra</Heading>
        </Box>

        <Spacer />
        <Box Flex="1" p={5}>
          <ConnectWalletButton />
        </Box>
      </Flex>
    </>
  )
}

export default Navbar
