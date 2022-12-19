import React, { useRef } from 'react'

import {
  Flex,
  Box,
  Spacer,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { useAuth } from '../../context/AppContext'
import Link from 'next/link'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const { isConnected, address } = useAccount()
  const router = useRouter()
  const { mounted, setUser } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        bg="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%);"
        borderBottom={'1px solid #2A1B38;'}
        backdropFilter="blur(12.5px);"
        p={{ base: 5, md: 10 }}
      >
        <Link href="/" legacyBehavior>
          <Flex>
            <Box px={{ base: 0, lg: 3 }} maxW="full" m={[2, 3]}></Box>
            <Image src="logo.svg" alt="delibra" />
            <Box>
              <Image
                src="delibra.svg"
                alt="delibra"
                display={{ base: 'none', md: 'flex' }}
              />
            </Box>
          </Flex>
        </Link>

        <Spacer />

        <Spacer display={{ base: 'flex', md: 'none' }} />

        <IconButton
          ref={btnRef}
          variant="ghost"
          icon={<GiHamburgerMenu />}
          _hover={{
            background: 'transparent',
          }}
          _active={{
            background: 'transparent',
          }}
          color="#fff"
          fontSize="32px"
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
        />

        {mounted && isConnected ? (
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            display={{ base: 'flex', md: 'none' }}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Flex>
                  <Box px={{ base: 0, lg: 3 }} maxW="full" m={[2, 3]}></Box>
                  <Image src="logo.svg" alt="delibra" />
                  <Box pl={3}>
                    <Text
                      fontFamily="'Clash Grotesk', sans-serif"
                      bgGradient="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)"
                      bgClip="text"
                    >
                      Delibra
                    </Text>
                  </Box>
                </Flex>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        ) : null}
      </Flex>
    </>
  )
}

export default Navbar
