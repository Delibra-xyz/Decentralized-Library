import { Link, Box, Flex, Image, Text, Icon } from "@chakra-ui/react";
import { Link as NextLink } from "next/link";
import { BsDot, BsEmojiSunglasses } from "react-icons/bs";

const CurrentBookCard = ({ id, ...props }) => {
  return (
    <Flex
      bg="#fff"
      boxShadow="0px 0px 21px -3px rgba(121, 139, 177, 0.1)"
      borderRadius="8px"
      p={1}
      pos="relative"
      overflowY="hidden"
      height="228px"
      {...props}
    >
      <Box
        w="202px"
        h="295px"
        bg="#F3F4F6"
        borderRadius="8px"
        border="1.08551px solid #E5E7EB;"
        ml={10}
        mt={5}
        mr={5}
      >
        <Image
          src="/featured6.png"
          alt="bookCover"
          width="185px"
          height="278px"
          margin="7px auto"
        />
      </Box>
      <Box px={5} py={3} >
        <Link
          as={NextLink}
          href={`/reader/browse/${id}`}
          _hover={{ textDecoration: "none" }}
          _focus={{
            boxShadow: "unset",
          }}
        >
          <Text
            fontSize="21px"
            fontWeight="700"
            fontFamily="'Inter', sans-serif"
            color="#000000"
          >
            The song of archilles
          </Text>
        </Link>
        <Text color="#4B5563" fontSize="14px" fontWeight="500" display="flex" alignItems="center" mb={7}>
          Thriller &nbsp;
          <BsDot style={{fontSize:"20px"}}/> &nbsp; 246 pages
        </Text>

        <Text color="#4B5563" fontSize="14px" fontWeight="500">
          Created by
        </Text>
        <Text
          fontSize="17px"
          fontWeight="500"
          color="#000000"
          display="flex"
          alignItems="center"
        >
          Madeline Miller &nbsp; <Icon as={BsEmojiSunglasses} />
        </Text>

        <Box pos="absolute" bottom={3}>
          <Text fontSize="14px" fontWeight="500" color="#4B5563">
            Floor Price
          </Text>

          <Text fontSize="18px" fontWeight="700" color="#000000">
            56.3 MATIC &nbsp;{" "}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default CurrentBookCard;
