import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { BsCollection } from "react-icons/bs";
import { MdOutlineCollections } from "react-icons/md";
import { useAccount } from "wagmi";
import NftModal from "../../components/Dashboard/NftModal";
import { useAuth } from "../../context/AppContext";
import { getLayout } from "../../layout/DashboardLayout";
import { db } from "../../utils/firebase";

const Settings = () => {
  const { address } = useAccount();
  const { user, setUser } = useAuth();
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tabNames = ["Account", "Notifications"];
  const [photo, setPhoto] = useState("");
  const [picLoading, setPicLoading] = useState(false)
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    <BiImageAdd style={{ color: "#fff", fontSize: "30px" }} />
  );

  const handleFileChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setPhoto(reader.result);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleNftSelection = (x) => {
        setImagePreviewUrl(x)
        setPhoto(x)
        onClose()
  }

  const changeProfilePic = async() => {
    setPicLoading(true)
    try {
        let userRef = doc(db, "users", address);
        await setDoc(userRef, {profileImg: photo} , { merge: true })
        .then(res => {
          toast({
            title: "Profile pic successfully updated",
            status: "success",
            isClosable: true,
            duration: 3000,
          })
          setPicLoading(false)
          console.log("successful")
          setUser({...user, profileImg:photo})
        })
        .catch(err => {
          console.error(err);
          toast({
            title: "An error occured",
            description:"Please try again later",
            status: "error",
            isClosable: true,
            duration: 3000,
          })
          setPicLoading(false)
          setPhoto(user.profileImg ? user.profileImg : "")
          setImagePreviewUrl(user.profileImg ? user.profileImg : "")
        })
      } catch (e) {
        console.error("Error adding document: ", e);
        toast({
          title: "An error occured",
          description:"Please try again later",
          status: "error",
          isClosable: true,
          duration: 3000,
        })
        setPicLoading(false)
        setPhoto(user.profileImg ? user.profileImg : "")
        setImagePreviewUrl(user.profileImg ? user.profileImg : "")
      }

  }

  useEffect(()=> {
    user.profileImg && setPhoto(user.profileImg)
    user.profileImg && setImagePreviewUrl(user.profileImg)
  },[user])
  
  return (
    <Box p={5} bg="#F3F4F6" minH="91.5%">
      <Tabs orientation="vertical">
        <TabList
          alignItems="start"
          w="30%"
          fontFamily="'Inter', sans-serif"
          height="fit-content"
        >
          {tabNames.map((tab, index) => (
            <Tab
              key={index}
              color="#6B7280"
              fontSize="18px"
              fontWeight="500"
              opacity="0.9"
              _selected={{
                color: "#25020D",
                fontWeight: "800",
                opacity: "1",
                borderLeft: "3px solid #25020D",
              }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels w="70%">
          <TabPanel
            bg="#fff"
            border="1px solid #E5E7EB"
            borderRadius="16px"
            p={5}
          >
            <Text
              fontWeight="700"
              fontSize="18px"
              fontFamily="'Inter', sans-serif"
            >
              Account
            </Text>
            <Text fontWeight="400" fontSize="15px" color="#4B5563">
              Update your photo and personal details.
            </Text>

            <Flex alignItems="center" mb="50px">
              <Menu>
                <MenuButton aria-label="Options">
                  <FormControl
                    borderRadius="195px"
                    height="115px"
                    width="115px"
                    overflow="hidden"
                    position="relative"
                    border="1px solid #CB3066"
                    bg={photo==="" ? "linear-gradient(98.41deg, #16BFFD 0%, #CB3066 100%)" : "#fff"} 
                    mt={10}
                    mr={5}
                  >
                    <FormLabel
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      m="0"
                      p={photo==="" ? "24px" : "0px"}
                      height="115px"
                    >
                      {photo === "" ? (
                        imagePreviewUrl
                      ) : (
                        <Image
                          src={imagePreviewUrl}
                          alt=""
                          height="115px"
                          width="100%"
                        />
                      )}
                    </FormLabel>
                  </FormControl>
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<BsCollection />} onClick={()=> onOpen()}>
                    From wallet NFTs(Polygon)
                  </MenuItem>
                    <FormControl px={3} pt={2} pb={0.5} _hover={{bgColor:"gray.100"}} cursor="pointer">
                        <FormLabel 
                            fontWeight="normal" 
                            display="flex"
                            alignItems="center"
                        >
                            <MdOutlineCollections /> &nbsp; From files
                        </FormLabel>
                        <Input
                            type="file"
                            onChange={handleFileChange}
                            title=" "
                            p="0"
                            borderRadius="none"
                            cursor="pointer"
                            border="none"
                            focusBorderColor="none"
                            height="265px"
                            position="absolute"
                            top="0"
                            left="0"
                            opacity="0"
                        />
                    </FormControl>
                </MenuList>
              </Menu>

              <Button
                borderRadius="8px"
                bg="#F3F4F6"
                color="#1A0830 "
                fontSize="15px"
                fontWeight="500"
                isLoading={picLoading}
                onClick={changeProfilePic}
              >
                Update Profile Image
              </Button>
            </Flex>

            <FormControl mb="32px">
              <FormLabel
                fontSize="18px"
                color="#000000"
                fontWeight={500}
                letterSpacing="-0.02em"
              >
                Display name
              </FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  color="#1F2937"
                  fontSize="16px"
                  focusBorderColor="#6B7280"
                  bg="#FFFFFF"
                  borderRadius="6px"
                  border="1px solid #D1D5DB"
                  pl="80px"
                />
                <InputLeftElement pl={10}>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#9CA3AF",
                    }}
                  >
                    Name
                  </span>
                </InputLeftElement>
              </InputGroup>
            </FormControl>

            <FormControl mb="32px">
              <FormLabel
                fontSize="18px"
                color="#000000"
                fontWeight={500}
                letterSpacing="-0.02em"
              >
                Username
              </FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  color="#1F2937"
                  fontSize="16px"
                  focusBorderColor="#6B7280"
                  bg="#FFFFFF"
                  borderRadius="6px"
                  border="1px solid #D1D5DB"
                  placeholder="username"
                  _placeholder={{ color: "#9CA3AF" }}
                  pl="50px"
                />
                <InputLeftElement pl={5}>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "#1F2937",
                    }}
                  >
                    @
                  </span>
                </InputLeftElement>
              </InputGroup>
            </FormControl>

            <FormControl mb="32px">
              <FormLabel
                fontSize="18px"
                color="#000000"
                fontWeight={500}
                letterSpacing="-0.02em"
              >
                Email
              </FormLabel>
              <FormHelperText
                color="#9CA3AF"
                fontSize="14px"
                fontWeight="500"
                mb={3}
              >
                Your email for purchase notifications
              </FormHelperText>
              <InputGroup>
                <Input
                  type="text"
                  color="#1F2937"
                  fontSize="16px"
                  focusBorderColor="#6B7280"
                  bg="#FFFFFF"
                  borderRadius="6px"
                  border="1px solid #D1D5DB"
                  placeholder="Enter an email"
                  _placeholder={{ color: "#9CA3AF" }}
                  px={5}
                />
              </InputGroup>
            </FormControl>

            <Button
              bg="linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)"
              borderRadius="8px"
              fontSize="17px"
              fontWeight="#000000"
              color="#000000"
              mt={10}
            >
              Save settings
            </Button>
          </TabPanel>

          <TabPanel
            bg="#fff"
            border="1px solid #E5E7EB"
            borderRadius="16px"
            h="83vh"
            p={5}
          >
            <Text
              fontWeight="700"
              fontSize="18px"
              fontFamily="'Inter', sans-serif"
            >
              Notifications
            </Text>
            <Text fontWeight="400" fontSize="15px" color="#4B5563" mb={10}>
              Select the kinds of notifications you’d like receive to your email
              and in-app notifications center
            </Text>

            <Flex justify="space-between" mb={10}>
              <Box>
                <Text fontWeight="700" fontSize="18px">
                  Sales
                </Text>
                <Text fontWeight="400" fontSize="15px" color="#4B5563">
                  When one of your books sells
                </Text>
              </Box>
              <Switch
                size="lg"
                colorScheme="gray"
                defaultChecked
                _focus={{ boxShadow: "none" }}
              />
            </Flex>

            <Flex justify="space-between" mb={10}>
              <Box>
                <Text fontWeight="700" fontSize="18px">
                  Relisted
                </Text>
                <Text fontWeight="400" fontSize="15px" color="#4B5563">
                  When one of your books get relisted
                </Text>
              </Box>
              <Switch
                size="lg"
                colorScheme="gray"
                defaultChecked
                _focus={{ boxShadow: "none" }}
              />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <NftModal onClose={onClose} isOpen={isOpen} handleNftSelection={handleNftSelection}/>
    </Box>
  );
};

Settings.getLayout = getLayout;
export default Settings;
