import React from 'react';
import { Box, Text, Avatar, Button } from '@chakra-ui/react';
import Logo from "./Logo";
import { ellipseAddress } from '../utils/ConnectionUtilities'

const Header = ({web3Provider, address, disconnect, connect}) => {
    return (
    <Box 
        p={5} 
        w="100vw" 
        bg="linear-gradient(225deg, #192038 0%, #2E3A59 100%)"
        position="fixed" 
        display="flex" 
        justifyContent="space-between"
        alignItems="center"
        zIndex="99"
    >
         <Box>    
           <Text color="#fff" display="flex" alignItems="center" fontWeight="700" fontSize="40px">
           <Logo/> &nbsp; OpenBooks </Text>
        </Box>
        
        <Box display="flex" justifyContent="space-around" pr={5} alignItems="center">
        	{address ? <Avatar name="Anonymous" src="dp.png" size="lg"/> : null}
            <Box display="flex" flexDirection="column" mt="-10px">
	            {web3Provider ?  
	            	<Button color="linear-gradient(225deg, #192038 0%, #2E3A59 100%)" bg="white" ml={5} onClick={disconnect} mb={2}>
	            		{ellipseAddress(address)}
	            	</Button> : 
		        	<Button color="linear-gradient(225deg, #192038 0%, #2E3A59 100%)" bg="white" ml={5} onClick={connect} mb={2}>
		                 👛 Connect Wallet
	                 </Button>
	             }
	            <sub style={{color:"orange",fontSize:"10px", fontWeight:"bold", textAlign:'center'}}>PolygonMumbai</sub>
            </Box>
        </Box>
    </Box>
  )
};

export default Header;
