import { Box, Text } from "@chakra-ui/react";
import React from "react";

const GoalCard = ({children, title, cont}) => {
    return (
        <Box
            bg="linear-gradient(115.03deg, rgba(255, 176, 189, 0.2) 6.95%, rgba(255, 194, 161, 0.2) 89.09%)"
            borderRadius="13px"
            maxW="560px"
            w={{base:"100%", md:"48%"}}
            p={5}
            textAlign="left"
            mb={{base:"30px", md:"0px"}}
        >
            {children}
            <Text
                fontSize="28px"
                fontWeight="700"
                bgGradient="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)"
                bgClip='text'
                my={4}
            >{title}</Text>
            <Text
                color="#4B5563"
                fontSize="20px"
                fontWeight="500"
            >{cont}</Text>
        </Box>
    )
}

export default GoalCard;