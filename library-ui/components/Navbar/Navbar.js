import React, { useRef } from "react";
import ConnectWalletButton from "../ConnectWalletButton";
import { Flex, Box, Spacer, ButtonGroup, Text, Icon, Menu, MenuButton, MenuList, MenuItem, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useAuth } from "../../context/AppContext";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { getUser, isDelibraUser } from "../../utils/contractUtils";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  const { isConnected, address } = useAccount();
  const router  = useRouter();
  const { mounted, setUser } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const handleAuthCheck = () => {
    isDelibraUser(window.ethereum, address).then(
      res => {
        if(res === false){
          router.push("/authentication")
        } else {
          getUser(window.ethereum).then(
            res => {
              setUser({
              userType: res.userType,
              isOnboarded: res.onboarded,
              userName: res.userName
            })
            res.userType === 0 ? router.push("/reader/home") : router.push("/author/overview")
          }).catch(err => console.log(err))
        }
      }).catch(err => console.log(err))
  }

  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        bg="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%);"
        borderBottom={"1px solid #2A1B38;"}
        backdropFilter="blur(12.5px);"
        p={{base: 5, md:10}}
      >
        <Link href="/" legacyBehavior>
          <Flex>
            <Box px={{base:0, lg:3}} maxW="full" m={[2, 3]}></Box>
            <Image src="logo.svg" alt="delibra"/>
            <Box>
              <Image src="delibra.svg" alt="delibra" display={{base:"none", md:"flex"}}/>
            </Box>
          </Flex>
        </Link>

        <Spacer />


        {mounted && isConnected ? (
          <Text
            color="#fff"
            fontWeight="700"
            fontSize="lg"
            px={10}
            display={{base:"none", md:"flex"}}
            alignItems="center"
            cursor="pointer"
            onClick={handleAuthCheck}
          >
            <Icon as={MdOutlineDashboard} />
            &nbsp;Dashboard
          </Text>
        ) : null}

        <ButtonGroup gap="10">
          <ConnectWalletButton
            bgGradient="linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)"
            backgroundColor="#fff"
            _hover={{ bg: "#fff" }}
          />
        </ButtonGroup>

        <Spacer display={{base:"flex", md:"none"}}/>

        <IconButton 
          ref={btnRef}
          variant="ghost"
          icon={<GiHamburgerMenu />}
          _hover={{
            background:"transparent"
          }}
          _active={{
            background:"transparent"
          }}
          color="#fff" 
          fontSize="32px"
          display={{base:"flex", md:"none"}}
          onClick={onOpen}
        />

      {mounted && isConnected ? <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          display={{base:"flex", md:"none"}}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Flex>
                <Box px={{base:0, lg:3}} maxW="full" m={[2, 3]}></Box>
                <Image src="logo.svg" alt="delibra"/>
                <Box pl={3}>
                  <Text 
                    fontFamily="'Clash Grotesk', sans-serif" 
                    bgGradient="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)" 
                    bgClip="text">Delibra</Text>
                </Box>
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              <Box py={3} borderTop="1px solid" borderBottom="1px solid">
                <Text
                  bgGradient="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)" 
                  bgClip="text"
                  fontWeight="700"
                  fontSize="lg"
                  px={10}
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  onClick={handleAuthCheck}
                >
                  <Icon as={MdOutlineDashboard} color="#1A0830"/>
                  &nbsp;Dashboard
                </Text>
              </Box>
            </DrawerBody>

          </DrawerContent>
        </Drawer> : null}

       
      </Flex>
    </>
  );
};

export default Navbar;
