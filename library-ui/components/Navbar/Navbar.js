import { Flex, Box, Spacer } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Link from 'next/link'

const Navbar = () => {
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
      </Flex>
    </>
  )
}

export default Navbar
