import { Box, IconButton, Text } from "@chakra-ui/react";
import React from "react";

const FeatureCard = ({icon, title, cont, ...props})=> {
    return(
        <Box
            w="20%"
            minW="250px"
            maxW="280px"
            mr={5}
            {...props}
        >
            <IconButton
                bg="linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)"
                color="#fff"
                aria-label='Call Segun'
                borderRadius="10px"
                icon={icon}
                mb={4}
                className="heartbeat"
            />
            <Text
                bgGradient="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)"
                bgClip='text'
                fontSize="22px"
                fontWeight="700"
                mb={4}
            >{title}</Text>
            <Text
                color="#1F2937"
                fontSize="16px"
                fontWeight="500"
            >
                {cont} 
            </Text>

        </Box>
    )
}

export default FeatureCard;