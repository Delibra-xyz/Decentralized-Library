import { Box } from "@chakra-ui/react";
import React from "react";

export function ComingSoon(){
    return(
        <Box 
            bg="#fff" 
            w="100%" 
            h="85vh"
            border="1px solid #E5E7EB"
            borderRadius="16px"
            p={5}
        >
            <iframe src="https://embed.lottiefiles.com/animation/85893" style={{width:"90%", height:"80vh"}}></iframe>
        </Box>
    )
}