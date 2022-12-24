import {
  Link,
  Box,
  Heading,
  Image,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Link as NextLink } from "next/link";
import { useState } from "react";
import Unit from "../../assets/svgs/unit";
import styles from "../../styles/library.module.css";
import { listBook } from "../../utils/contractUtils";
import { db } from "../../utils/firebase";

const LibraryCard = ({
  id,
  link,
  unit,
  price,
  title,
  category,
  showMint,
  image,
  uri,
  minted,
  reload,
  setReload,
  ...props
}) => {
  const fee = "0.0001";
  const toast = useToast();
  const [minting, setMinting] = useState(false);

  const update = async () => {
    let bookRef = doc(db, "books", id);
    const ss = await getDoc(bookRef);
    if (ss.exists()) {
      await updateDoc(bookRef, {
        minted: true,
      });
      setReload(!reload)
      toast({
        title: "Minted successfully",
        status: "success",
        isClosable: true,
        duration: 3000,
      });
    }
  };

  const handleMint = () => {
    setMinting(true);
    listBook(
      window.ethereum,
      uri,
      ethers.utils.parseEther(price.toString()),
      Number(unit),
      fee
    )
      .then(async (res) => {
        await update();
        setMinting(false);
      })
      .catch((err) => {
        console.log(err);
        setMinting(false);
        toast({
          title: "An error occured",
          description: "Please try again later",
          status: "error",
          isClosable: true,
          duration: 3000,
        });
      });
  };

  return (
    <Box
      maxW="3xs"
      borderWidth="1px"
      borderColor="#E5E7EB"
      borderRadius="16px"
      p="2"
      backgroundColor="#FFFFFF"
      {...props}
    >
      <Box bg="#F3F4F6" borderRadius="8" overflow="hidden" py="4">
        <Image
          src={image || "/featured1.jfif"}
          alt="bookCover"
          width="86px"
          height="110px"
          margin="0 auto"
        />
      </Box>
      <Box>
        <Text fontSize="12px" color="#374151" fontFamily="DM Sans" pt={3}>
          {category || "Romance"}
        </Text>
        <Link
          as={NextLink}
          href={link}
          _hover={{ textDecoration: "none" }}
          _focus={{
            boxShadow: "unset",
          }}
        >
          <Heading
            fontSize="16px"
            color="#000000"
            fontWeight={800}
            letterSpacing="-0.024em"
            fontFamily="Inter"
            pt="2px"
          >
            {title || "Life on the Mississppi"}
          </Heading>
        </Link>
      </Box>
      <div className={styles.library__wrapper}>
        <Box>
          <Text fontSize="12px" color="#6B7280" fontFamily="DM Sans" pt={3}>
            Price
          </Text>
          <Heading
            fontSize="14px"
            color="#374151"
            fontFamily="DM Sans"
            display="inline-block"
          >
            {price || "0.89"}
          </Heading>
          <Text
            display="inline-block"
            color="#6B7280"
            textTransform="uppercase"
            fontSize="12px"
            fontWeight={500}
            pl={1}
          >
            MATIC
          </Text>
        </Box>
        <Box>
          <Text fontSize="12px" color="#6B7280" fontFamily="DM Sans" pt={3}>
            Unit
          </Text>
          <Heading
            fontSize="14px"
            color="#374151"
            pr={1}
            fontFamily="DM Sans"
            display="inline-block"
          >
            {unit || "10"}
          </Heading>
        </Box>
      </div>
      {showMint && (
        <Button
          colorScheme="blue"
          onClick={() => handleMint()}
          size="sm"
          width="100%"
          mt={2}
          isLoading={minting}
          disabled={minted}
        >
          {minted ? "Minted" : " Publish"}
        </Button>
      )}
    </Box>
  );
};

export default LibraryCard;
