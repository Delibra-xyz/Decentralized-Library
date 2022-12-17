import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react";
import { getLayout } from "../layout/HomeLayout";

const Success = () => {
  return (
    <Box minH="91vh" w="100vw">
      <Box w={{base:"100%", sm:"80%", md:"30%"}} mx="auto">
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_s2lryxtd.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </Box>
      <Heading
        fontFamily="'Clash Grotesk', sans-serif"
        fontSize={{base:"30px", md: "40px",lg:"50px"}}
        fontWeight="700"
        bgGradient="linear-gradient(89.34deg, #FFFFFF -13.15%, #332640 93.4%)"
        bgClip="text"
        textAlign="center"
        mb={5}
      >
        Email submitted successfully
      </Heading>
      <Text
        fontFamily="'Inter', sans-serif"
        fontSize="20px"
        fontWeight="400"
        mb={5}
        textAlign="center"
        w={{base:"80%", md:"60%", "2xl":"40%"}}
        mx="auto"
      >
        You will be notified about exciting updates delibra and you will be the first to know when we launch.
      </Text>

    </Box>
  );
}

Success.getLayout = getLayout
export default Success
