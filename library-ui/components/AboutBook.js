import React from 'react';
import { Flex, Box, Image, Heading, Text, Button, ButtonGroup, Link } from "@chakra-ui/react";
import { PlusSquareIcon, RepeatIcon } from "@chakra-ui/icons";

const 	AboutBook = () => {
    return (
        <Flex p="30px" justifyContent="space-between" direction={{ base: "column", md: "row" }}>	
            <Image
            	src="image3.jpg" 
      			alt="book-cover" 
      			overflow="hidden" 
      			objectFit="cover" 
      			width="45%" 
      			height="auto"
      			maxH="500px"
            />

            <Box w="50%">	
            	<Heading
	              textAlign="center"
	              fontSize="2rem"
	              mb={3}
	              fontWeight="bold"
	              lineHeight={1.2}
	            >
	              Book Title
	            </Heading>
	            <Heading
	              textAlign="center"
	              fontSize="2rem"
	              mb={3}
	              fontWeight="bold"
	              lineHeight={1.2}
	            >
		              Free
	            </Heading>
	            <Box
	              display="flex"
	              alignItems="baseline"
	              justifyContent="space-between"
	              textTransform="uppercase"
	              fontSize="sm"
	              fontWeight="600"
	              lineHeight="md"
	              px={15}
	              mt={5}
	            >
	              <Box as="span">Author</Box>
	              <Box as="span">Ratings</Box>
	              <Box as="span">Genre</Box>
	              <Box as="span">Year</Box>
	              
	            </Box>
	            <Box
	              display="flex"
	              alignItems="baseline"
	              justifyContent="space-between"
	              fontSize={{ base: "sm", md: "md", lg: "lg" }}
	              fontWeight="600"
	              lineHeight="normal"
	              mt={3}
	              px={15}
	            >
	              <Box as="span">Lorem Ipsum</Box>
	              <Box as="span">4</Box>
	              <Box as="span">Educational</Box>
	              <Box as="span">2012</Box>
	              
	            </Box>
	            <Flex direction={{ base: "column-reverse", md: "column" }}>
	              <ButtonGroup
	                display="flex"
	                flexWrap="wrap"
	                justifyContent="space-between"
	                mt={5}
	                mx="auto"
	                w="100%"
	                mb={7}
	              >
	                 <Button
	                    bg="#0384C6"
	                    color="#fff"
	                    my={2}
	                    w={{ base: "100%", md: "45%" }}
	                    px={12}
	                    _hover={{
	                    	border:" 1px solid #0384C6",
	                    	bg:"transparent",
	                    	color:"#0384C6"
	                    }}
	                 >
                    
	                    <PlusSquareIcon /> &nbsp; Purchase
	                  </Button>

	                <Button 
	                	my={2} 
	                	w={{ base: "100%", md: "45%" }} 
	                	px={12} 
	                	variant="outline" 
	                	colorScheme="#0384C6"
	                	_hover={{
	                    	border:" 1px solid #0384C6",
	                    	color:"#0384C6",
	                    	bg:"#fff"
	                    }}
	                >
	                  {" "}
	                  <RepeatIcon /> &nbsp; Borrow
	                </Button>
	              </ButtonGroup>

	              <Box px={{ base: "15px", md: "0px" }}>
	                <Heading
	                  textAlign="left"
	                  fontSize="1.5rem"
	                  mb={3}
	                  fontWeight="bold"
	                  lineHeight={1.2}
	                  mt={5}
	                >
	                  Details
	                </Heading>
	                  <Box display="flex" mb={7}>
	                    <Box
	                      fontSize="lg"
	                      fontWeight="600"
	                      lineHeight="normal"
	                      mt={5}
	                      mr={{ base: "20%", md: "30%" }}
	                    >
	                      <Box mb={2}>Author:</Box>
	                      <Box mb={2}>Genre:</Box>
	                      <Box mb={2}>Purchase Price:</Box>
	                      <Box mb={2}>Borrow Price:</Box>
	                      <Box mb={2}>Publisher:</Box>
	                      <Box mb={2}>Year:</Box>
	                      <Box mb={2}>Edition:</Box>
	                    </Box>
	                    <Box
	                      fontSize="lg"
	                      fontWeight="normal"
	                      lineHeight="normal"
	                      mt={5}
	                    >
	                      <Box mb={2}>Lorem Ipsum</Box>
	                      <Box mb={2}>Educational</Box>
	                      <Box mb={2}>Free</Box>
	                      <Box mb={2}>Free</Box>
	                      <Box mb={2}>ABC Publishers</Box>
	                      <Box mb={2}>2012</Box>
	                      <Box mb={2}>1st Edition</Box>
	                    </Box>
	                  </Box>
	                  </Box>
	                <Heading
		              textAlign="left"
		              fontSize="1.5rem"
		              mb={3}
		              fontWeight="bold"
		              lineHeight={1.2}
		            >
		              About Book
		            </Heading>
		            <Box
		              color="headingSm"
		              fontSize="lg"
		              fontWeight="normal"
		              lineHeight="normal"
		              mt={5}
		              mb={7}
		            >
		              This is a book about the biafran war and how the igbos were nearly annihilated during this period
		              <br />
		              <Link color="primary">read more</Link>
		            </Box>
		        </Flex>
            </Box>
        </Flex>	
    );
};


export default 	AboutBook;
