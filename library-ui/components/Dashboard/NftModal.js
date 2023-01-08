import {
    Box,
    Button,
  Flex,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiErrorAlt } from "react-icons/bi";
import { useAccount } from "wagmi";
import { getNftsOwnedByAccount } from "../../utils/nftport";

const NftModal = ({onClose, isOpen, handleNftSelection}) => {
  const { address } = useAccount();
  const toast = useToast();
  const [nfts, setNfts] = useState([]);
  const [num, setNum] = useState(5)

  useEffect(() => {
    getNftsOwnedByAccount(address,num)
      .then((res) => {
        if(res.nfts){
            setNfts(res.nfts)
        }
      })
      .catch((err) => {
        toast({
          title: "An error occured while fetching your NFTs",
          description: "Please try again later",
          status: "error",
          isClosable: true,
          duration: 3000,
        });
        console.log(err);
      });
  }, [num]);

  const loadMore = () => {
        setNum(num + 5)
  }

  const shorten =(x) => {
    if(x !==null && x!==undefined){
        if(x.length < 16){
            return x;
        } else {
            return x.substring(0, 14) + '...'
        }
    } else {
        return ""
    }
  }

  const getUri = (svg) => {
    let start = svg.indexOf("href=")
    let rem = svg.substr(start + 5)
    let mod = rem.slice(1)
    let end = mod.indexOf('"')
    let uri = mod.substring(0,end)
    return uri;
  }

  const fileUrl = (data) => {
    if(data?.metadata?.image_data){
        return getUri((data.file_url).toString());
    } else {
        return data?.cached_file_url
    }
  }
  
return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent h="500px" overflowY="scroll">
        <ModalHeader>Select one from these NFTs</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex w="100%" mx="auto" flexWrap="wrap" justifyContent="space-around">
            {nfts.length === 0 ? <Box textAlign="center" mx="auto" w="70%">
                <Icon as={BiErrorAlt} boxSize={150}/>
                <Text
                    py='4px'
                    color='#000000'
                    fontSize='20px'
                    fontWeight={500}
                    fontFamily='DM Sans'
                    letterSpacing='-0.02em'
                    my={10}
                    textAlign="center"
                >
                    You do not have any NFTs on the polygon network. Try to select from your files instead.
                </Text>
            </Box>: 
           nfts.map((nft, index) => (
                <Box
                    borderWidth="1px"
                    borderColor="#E5E7EB"
                    borderRadius="16px"
                    p="2"
                    backgroundColor="#FFFFFF"
                    key={index}
                    m={2}
                    w="30%"
                    minW="220px"
                    maxw="240px"
                    cursor="pointer"
                    onClick={() => handleNftSelection(fileUrl(nft))}
                    _hover={{bg:"gray.100"}}
                >
                <Box 
                    bgImage={"url("+fileUrl(nft)+")"}
                    borderRadius="8" 
                    overflow="hidden" 
                    py="4" 
                    width="200px"
                    height="160px"
                    mx="auto"
                    bgPosition="center"
                    bgSize="contain"
                    bgRepeat="no-repeat"
                >
                    </Box>
                    <Flex py={3} justifyContent="flex-start">
                        <Box fontSize="small" mr={5} color="gray.500">
                            <Text>Chain</Text>
                            <Text>Name</Text>
                            <Text>Token ID</Text>
                            <Text>File URL</Text>
                            <Text>Address</Text>
                        </Box>
                        <Box fontSize="small" color="gray.500">
                            <Text>Polygon</Text>
                            <Text>{shorten(nft.name)}</Text>
                            <Text>#{shorten(nft.token_id)}</Text>
                            <Text>{shorten(nft.file_url)}</Text>
                            <Text>{shorten(nft.contract_address)}</Text>
                        </Box>
                    </Flex>
                </Box>
           ))} 
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Close
          </Button>
          {num !==5 && <Button variant="ghost" mr={3} onClick={() => setNum(num - 5)}>
            Load less
          </Button>}
          {nfts.length !== 0 && <Button colorScheme="blue" onClick={loadMore}>Load more</Button>}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NftModal;
