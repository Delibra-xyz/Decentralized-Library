
import React, { useState } from "react";
import {
  Flex,
  Heading,
  Avatar,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Button,
  
  Box,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
} from "react-icons/fi";

export default function Author() {
  const [display, changeDisplay] = useState("hide");
  const [value, changeValue] = useState(1);

  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}
      <Flex
        w={["100%", "100%", "10%", "15%", "15%"]}
        flexDir="column"
        alignItems="center"
        backgroundColor="black"
        color="#fff"
      >
        <Flex
          flexDir="column"
          h={[null, null, "100vh"]}
          justifyContent="space-between"
        >
          <Flex flexDir="column" as="nav">
            <Heading
              mt={50}
              mb={[25, 50, 100]}
              fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
              alignSelf="center"
              letterSpacing="tight"
            ></Heading>
            <Flex
              flexDir={["row", "row", "column", "column", "column"]}
              align={["center", "center", "center", "flex-start", "flex-start"]}
              wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
              justifyContent="center"
            >
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text className="active">Home</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiPieChart} fontSize="2xl" />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>Credit</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiDollarSign} fontSize="2xl" />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text> My books</Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiBox} fontSize="2xl" />
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text>Rewards</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            <Avatar name="Anonymous" src="dp.png" size="lg" />
          </Flex>
        </Flex>
      </Flex>

      {/* Column 2 */}
      <Flex
        w={["100%", "100%", "60%", "60%", "55%"]}
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
      >
        <Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Welcome back, <Flex display="inline-flex" fontWeight="bold"></Flex>
        </Heading>
        <Text color="gray" fontSize="sm">
          My Balance
        </Text>
        <Text fontWeight="bold" fontSize="2xl">
          $5,750.20
        </Text>
        {/* <MyChart /> */}
        <Flex justifyContent="space-between" mt={8}>
          <Flex align="flex-end">
            <Heading as="h2" size="lg" letterSpacing="tight">
              Transactions
            </Heading>
            <Text fontSize="small" color="gray" ml={4}>
              Apr 2021
            </Text>
          </Flex>
          <IconButton icon={<FiCalendar />} />
        </Flex>
        <Flex flexDir="column">
          <Flex overflow="auto">
            <Table variant="unstyled" mt={4}>
              <Thead>
                <Tr color="gray">
                  <Th>Wallet Address</Th>
                  <Th isNumeric>Name Of Book</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Heading size="sm" letterSpacing="tight">
                        <Text>1BoatSLRHtKNngkdXEeobR76b53LETtpyT</Text>
                      </Heading>
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight"></Heading>
                        <Text fontSize="sm" color="gray"></Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Super woman</Td>
                  <Td isNumeric>+$2</Td>
                  <Td isNumeric></Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          <Text>1BoatSLRHtKNngkdXEeobR76b53LETtpyT</Text>
                        </Heading>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Cafe and restaurant</Td>
                  <Td isNumeric>+$23</Td>
                  <Td isNumeric></Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          <Text>1BoatSLRHtKNngkdXEeobR76b53LETtpyT</Text>
                        </Heading>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Social Media</Td>
                  <Td isNumeric>+$4</Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
          <Flex align="center">
            <Divider />

            <Divider />
          </Flex>
        </Flex>
      </Flex>

      {/* Column 3 */}
      <Flex
        w={["100%", "100%", "30%"]}
        bgColor="#F5F5F5"
        p="3%"
        flexDir="column"
        overflow="auto"
        minW={[null, null, "300px", "300px", "400px"]}
      >
        <Flex alignContent="center">
          <InputGroup
            bgColor="#fff"
            mb={4}
            border="none"
            borderColor="#fff"
            borderRadius="10px"
            mr={2}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<FiSearch color="gray" />}
            />
            <Input type="number" placeholder="Search" borderRadius="10px" />
          </InputGroup>
          <IconButton
            icon={<FiBell />}
            fontSize="sm"
            bgColor="#fff"
            borderRadius="50%"
            p="10px"
          />
          <Flex
            w={30}
            h={25}
            bgColor="#B57295"
            borderRadius="50%"
            color="#fff"
            align="center"
            justify="center"
            ml="-3"
            mt="-2"
            zIndex="100"
            fontSize="xs"
          >
            2
          </Flex>
        </Flex>
        <Heading letterSpacing="tight">Upload A book</Heading>

        <Text color="gray" mt={4} mb={2}>
          Book Name
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiCreditCard color="gray.700" />}
          />
          <Input type="number" placeholder="xxxx xxxx xxxx xxxx" />
        </InputGroup>
        <Text color="gray" mt={4} mb={2}>
          Price
        </Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiDollarSign color="gray.700" />}
          />
          <Input type="number" placeholder="130.00" />
        </InputGroup>
        <Button
          mt={4}
          bgColor="blackAlpha.900"
          color="#fff"
          p={7}
          borderRadius={15}
        >
          Upload
        </Button>
      </Flex>
    </Flex>
  );
}