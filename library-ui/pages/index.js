import Head from 'next/head'
import { Box, Button, Divider, Flex, Image, Tag } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import FeatureCard from '../components/Home/FeatureCard'
import { MdOutlineEnhancedEncryption } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { BiPurchaseTag } from 'react-icons/bi'
import { FaPeopleArrows } from 'react-icons/fa'
import GoalCard from '../components/Home/GoalCard'
import Avatar1 from '../assets/svgs/Avatar1'
import Avatar2 from '../assets/svgs/Avatar2'
import Book from '../assets/svgs/Book'
import HowItWorks from '../components/how-it-works'
import Roadmap from '../components/roadmap'
import { getLayout } from '../layout/HomeLayout'
import Preloader from '../components/Preloader/preloader'

const Home = () => {
  return (
    <>
      <Head>
        <title> Delibra </title>
        <meta name="description" content="Decentralized Library" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Box>
        {/* Hero section */}
        <Flex
          bgGradient="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)"
          width="100vw"
          height={{ base: '90vh', '2xl': '88vh' }}
          mb={10}
          position="relative"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            src="Frame 75.svg"
            alt="delibra"
            position="absolute"
            bottom="20vh"
            top={{ base: '33vh', sm: '22vh' }}
            // height={{base:"85vh", sm:"100%"}}
            display={{ base: 'block', lg: 'none' }}
            left={{ base: '-250px', sm: '-200px' }}
            transform={{ base: 'scale(3)', sm: 'scale(1.9)' }}
          />
          <Image
            src="Rectangle 20.svg"
            alt="delibra"
            position="absolute"
            bottom="0"
            display={{ base: 'none', lg: 'block' }}
          />

          <Box
            w={{ base: '100%', sm: '85%', md: '75%', lg: '65%', '2xl': '60%' }}
            ps={{ base: '30px', md: '50px', lg: '90px' }}
          >
            <Heading
              fontFamily="'Clash Grotesk', sans-serif"
              fontSize={{
                base: '40px',
                md: '50px',
                lg: '60px',
                xl: '81px',
                '2xl': '100px',
              }}
              fontWeight="700"
              bgGradient="linear-gradient(89.34deg, #FFFFFF -13.15%, #332640 93.4%)"
              bgClip="text"
              width={{ base: '100%', sm: '85%', md: '70%' }}
            >
              Meet the first decentralized Library
            </Heading>

            <Text
              fontSize={{ base: '16px', lg: '20px', '2xl': '40px' }}
              fontWeight="500"
              color="#E2E0E5"
              mb={10}
              mt={5}
              w={{ base: '100%', sm: '85%', md: '70%' }}
            >
              Delibra is the first read to earn decentalized platform that gives
              instant access to e-books, audiobooks, articles, and documents.
            </Text>

            <Button
              fontSize="18px"
              fontWeight="700"
              background="#FFFFFF"
              border="1px solid #FFFFFF"
              borderRadius="6px"
              onClick={() => {
                if (window)
                  window.location.href =
                    'https://khadijah-wuraola-amusat.gitbook.io/delibra/'
              }}
            >
              <Text
                bgGradient="linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)"
                bgClip="text"
                fontFamily="'Clash Grotesk', sans-serif"
              >
                View Litepaper
              </Text>
            </Button>
          </Box>
          <Box w={{ base: '0%', lg: '35%' }} pe="90px">
            <div className="lottie" width={800}>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_1a8dx7zj.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </Box>
        </Flex>

        {/* Our features section */}

        <Box
          bg="#ffffff"
          width="100vw"
          minH="50vh"
          px={{ base: '30px', md: '50px', lg: '100px' }}
          py={10}
          mb={10}
        >
          <Heading
            fontFamily="'Clash Grotesk', sans-serif"
            fontSize="56px"
            fontWeight="700"
            mb={5}
          >
            Our Features
          </Heading>

          <Text
            fontFamily="'Inter', sans-serif"
            fontSize="20px"
            fontWeight="400"
            mb={5}
          ></Text>

          <Flex
            justify="space-between"
            my={10}
            wrap="wrap"
            direction={{ base: 'column', md: 'row' }}
          >
            <FeatureCard
              icon={<MdOutlineEnhancedEncryption />}
              title="Book encryption"
              cont="Through secure means, we solve the problem of e-book piracy, plagiarism, and loss of data or assets."
              mb={{ base: '30px', '2xl': 0 }}
              w="100%"
            />

            <FeatureCard
              icon={<GiReceiveMoney />}
              title="Read to earn"
              cont="In addition to reading for knowledge, earn tokens and royalties for your reviews and comments on a book."
              mb={{ base: '30px', '2xl': 0 }}
              w="100%"
            />

            <FeatureCard
              icon={<BiPurchaseTag />}
              title="Ease of purchase"
              cont="Purchase books freely and conveniently on the blockchain with a few steps from the comfort of your home."
              mb={{ base: '30px', '2xl': 0 }}
              w="100%"
            />

            <FeatureCard
              icon={<FaPeopleArrows />}
              title="Community"
              cont="We provide a captivating community where readers and authors can interact, and connect with each other."
              mb={{ base: '30px', '2xl': 0 }}
              w="100%"
            />
          </Flex>
        </Box>

        {/* Goals section */}
        <Box
          py={10}
          px={{ base: '30px', sm: '80px', md: '100px' }}
          minH="50vh"
          textAlign="center"
          pos="relative"
        >
          <Book
            className="rotate-in-center"
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-20px',
            }}
          />
          <Tag
            color="#EAA391"
            bg="#FFEBE1"
            borderRadius="86px"
            fontSize="16px"
            fontWeight="700"
            px={4}
            py={2}
            mb={5}
          >
            OUR GOAL IS SIMPLE
          </Tag>
          <Heading
            fontFamily="'Clash Grotesk', sans-serif"
            fontSize="46px"
            fontWeight="700"
            mb={5}
            w="90%"
            mx="auto"
          ></Heading>
          <Flex
            justify="space-between"
            mt={10}
            direction={{ base: 'column', md: 'row' }}
          >
            <GoalCard
              title="For Authors"
              cont="Connect with an extensive global platform that grants access to potential readers and buyers, which would promote your creative work."
            >
              <Avatar1 />
            </GoalCard>
            <GoalCard
              title="For Readers"
              cont="Get access to various books for free while connecting, relating, and discussing with other readers on book reviews."
            >
              <Avatar2 />
            </GoalCard>
          </Flex>
        </Box>

        {/* Divider section */}
        <Box my={5} px="20%">
          <Divider />
        </Box>

        {/*  How it works section */}
        <Box my="100px" px={{ base: '30px', sm: '80px', md: '100px' }}>
          <HowItWorks />
        </Box>

        {/*  Roadmap section */}
        <Box
          py="100px"
          px="7%"
          bg="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)"
        >
          <Roadmap />
        </Box>

        {/* <Footer /> */}
        <Preloader />
      </Box>
    </>
  )
}

Home.getLayout = getLayout
export default Home
