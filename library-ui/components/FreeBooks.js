import React from 'react';
import { Box, Flex, Heading } from "@chakra-ui/react";
import BookCard from "./BookCard";

const FreeBooks = (props) => {
    return (
        <Box mt={10} bg="#2E3A59" color="#fff" p="30px">	
        	<Heading mb={5}>Free Books</Heading>

        	<Flex direction={{base:"column",md:"row"}}>	
        		<BookCard
                    title="Title1"
                    author="Lorem Ipsum"
                    image="featured5.jfif"
                    w="20%"
                    account={props.account}
                />

                <BookCard
                    title="Title2"
                    author="Lorem Ipsum"
                    image="featured3.jfif"
                    w="20%"
                    account={props.account}
                />

                <BookCard
                    title="Title3"
                    author="Lorem Ipsum"
                    image="featured2.jfif"
                    w="20%"
                    account={props.account}
                />

                <BookCard
                    title="Title4"
                    author="Lorem Ipsum"
                    image="featured1.jfif"
                    w="20%"
                    account={props.account}
                />

                <BookCard
                    title="Title5"
                    author="Lorem Ipsum"
                    image="featured2.jfif"
                    w="20%"
                    account={props.account}
                />
        	</Flex>
        </Box>	
    );
};


export default FreeBooks;
