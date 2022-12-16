import React from "react";
import ConnectWalletButton from "../ConnectWalletButton";
import { Flex, Box, Spacer, ButtonGroup, Text, Icon } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useAuth } from "../../context/AppContext";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { getUser, isDelibraUser } from "../../utils/contractUtils";

const Navbar = () => {
  const { isConnected, address } = useAccount();
  const router  = useRouter();
  const { mounted, setUser } = useAuth();

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
        p={10}
      >
        <Link href="/" legacyBehavior>
          <Flex>
            <Box px={3} maxW="full" m={[2, 3]}></Box>
            <Image src="logo.svg" alt="delibra" />
            <Box>
              <Image src="delibra.svg" alt="delibra" />
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
            display="flex"
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
      </Flex>
    </>
  );
};

export default Navbar;
