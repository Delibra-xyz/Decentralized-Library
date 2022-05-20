import React, { useState } from 'react';
import { Box, Image, Flex, Button, Text } from "@chakra-ui/react";
import StarRatings from 'react-star-ratings';
import Ellipsis from "./Ellipsis";
import { useRouter } from 'next/router'

const 	BookCard = ({title, author, image,w, account}) => {
	const router = useRouter();
	const [rating, setRating] = useState(3);

	const handleViewBookDetails= () => {
			if(!account?.address){
				account?.connect();
			}
				
			router.push('/book');		
	}
    return (
        <Box p={5} h="450px" boxShadow="0px 8px 16px rgba(25, 32, 56, 0.04)" color="black" borderRadius="5px" bg="#fff" w={w} mr={2} position="relative">
				<Image 
      				src={image}
      				alt="book-cover" 
      				overflow="hidden" 
      				objectFit="cover" 
      				width="100%" 
      				height="60%"
      			/>	
 
  				<Box>	
  					<Box my={3}>	
  						<StarRatings
				          rating={rating}
				          starRatedColor="yellow"
				          changeRating={(r, name)=> setRating(r)}
				          numberOfStars={5}
				          name='rating'
				        />
  					</Box>	
  					<Text>{title}</Text>
  					<Text>{author}</Text>
  					<Box position="absolute" bottom="20px" display="flex" justifyContent="space-between" alignItems="center" w="80%">
  						<Button bg="#0384C6" color="#fff" borderRadius="5px" fontSize="12px" onClick={handleViewBookDetails}>View Details</Button>
  						<Ellipsis/>
  					</Box>	
  				</Box>	
  		</Box>
    );
};

export default 	BookCard;
