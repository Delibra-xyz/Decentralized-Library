import Link from "next/link";
import React from "react";
import { Box, Flex, Heading, Avatar } from "@chakra-ui/react";
import BookCard from "../components/BookCard";



const Reader = (props)=> {
  return (
    <>
     <Avatar name="Anonymous" src="dp.png" size="lg" />
      <Box mt={10} p="30px">
        <Heading mb={5}>Featured</Heading>
        {console.log(props)}

        <Flex direction={{ base: "column", md: "row" }}>
          <BookCard
            title="Title1"
            author="Lorem Ipsum"
            image="featured1.jfif"
            w="20%"
            account={props.account}
          />

          <BookCard
            title="Title2"
            author="Lorem Ipsum"
            image="featured2.jfif"
            w="20%"
            account={props.account}
          />

          <BookCard
            title="Title3"
            author="Lorem Ipsum"
            image="featured3.jfif"
            w="20%"
            account={props.account}
          />

          <BookCard
            title="Title4"
            author="Lorem Ipsum"
            image="featured4.jfif"
            w="20%"
            account={props.account}
          />

          <BookCard
            title="Title5"
            author="Lorem Ipsum"
            image="featured5.jfif"
            w="20%"
            account={props.account}
          />
        </Flex>
      </Box>
    </>
  );
};

export default Reader;
