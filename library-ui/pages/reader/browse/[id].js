import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from '@chakra-ui/react';
import Ethereum from '../../../assets/svgs/ethereum';
import Share from '../../../assets/svgs/share';
import Star from '../../../assets/svgs/Star';
import { getLayout } from '../../../layout/DashboardLayout';
import styles from '../../../styles/browse.module.css';

const BookOverview = () => {
  const tabNames = ['Properties', 'History'];
  return (
    <Box px='24px' py='30px'>
      <Flex>
        <Image
          src='/featured1.jfif'
          alt='book-cover'
          width='305px'
          height='479px'
          filter='drop-shadow(13.0191px 13.0191px 13.0191px rgba(0, 0, 0, 0.12));'
          boxShadow='0px 10.5444px 15.8166px -2.63609px rgba(16, 24, 40, 0.1), 0px 5.27219px 10.5444px -5.27219px rgba(16, 24, 40, 0.1)'
        />
        <Spacer />
        <Box pl='90px' pr='50px'>
          <Box>
            <Heading
              pb='14px'
              color='#1F2937'
              fontSize='40px'
              fontWeight={800}
              fontFamily='Inter'
              letterSpacing='-0.02em'
            >
              The Perfect Marriage
            </Heading>
            <Text color='#1F2937' fontSize='16px' fontWeight={400} lineHeight='29px'>
              BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum
              blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only
              benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and
              perks can be unlocked by the community through roadmap activation.
            </Text>
          </Box>
          <Box pt='20px' pb='30px' display='flex'>
            <Box mr='50px'>
              <Text color='#4B5563' fontSize='14px' fontWeight={400}>
                Created by
              </Text>
              <Heading
                py='4px'
                color='#000000'
                fontSize='17px'
                fontWeight={500}
                fontFamily='DM Sans'
                letterSpacing='-0.02em'
              >
                Madeline Miller
              </Heading>
            </Box>
            <Box>
              <Text color='#4B5563' fontSize='14px' fontWeight={400}>
                Ratings
              </Text>
              <Box display='flex' alignItems='flex-start' py='4px'>
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <Star key={i} />
                  ))}
                <Box as='span' ml='4px' color='#4B5563' fontSize='14px'>
                  4.5
                </Box>
              </Box>
            </Box>
          </Box>
          <Box pb='30px'>
            <Text color='#4B5563' fontSize='14px' fontWeight={400}>
              Floor Price
            </Text>
            <Heading
              pb='18px'
              color='#000000'
              fontFamily='DM Sans'
              fontSize='18px'
              fontWeight={700}
              letterSpacing='-0.02em'
            >
              <span>56.3 ETH</span>
              <span className={styles.browse__icon__container}>
                <Ethereum className={styles.browse__icon} />
              </span>
            </Heading>
            <Text color='#9CA3AF' fontSize='14px' fontWeight={700}>
              $16,739
            </Text>
          </Box>
          <Flex alignItems='center' mt='10px' mb='30px'>
            <Button
              fontWeight={700}
              px='24px'
              py='16px'
              fontSize='17px'
              color='#000000'
              borderRadius='8px'
              bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
              _hover={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)' }}
              _focus={{
                boxShadow: 'unset',
              }}
            >
              Buy Now for 2.90 ETH
              <span className={styles.browse__icon__container}>
                <Ethereum className={styles.browse__icon} />
              </span>
            </Button>
            <Button
              bg='transparent'
              fontSize='17px'
              color='#000000'
              borderRadius='0'
              _hover={{ bg: 'transparent' }}
              _active={{ bg: 'transparent' }}
              _focus={{
                boxShadow: 'unset',
              }}
            >
              <span style={{ paddingRight: '8px' }}>Share</span>
              <Share />
            </Button>
          </Flex>
          <Box textAlign='center'>
            <Box as='span' color='#9CA3AF' fontSize='16px' fontWeight={700} pr='12px'>
              Sale ends in
            </Box>
            <Box as='span' color='#9CA3AF' fontSize='16px' fontWeight={700} pr='12px'>
              28d
            </Box>
            <Box as='span' color='#9CA3AF' fontSize='16px' fontWeight={700} pr='12px'>
              11h
            </Box>
            <Box as='span' color='#9CA3AF' fontSize='16px' fontWeight={700} pr='12px'>
              55m
            </Box>
            <Box as='span' color='#9CA3AF' fontSize='16px' fontWeight={700} pr='12px'>
              4s
            </Box>
          </Box>
        </Box>
      </Flex>
      <Box pt='52px' width='60%'>
        <Tabs>
          <TabList>
            {tabNames.map((tab, index) => (
              <Tab
                key={index}
                color='#1F2937'
                fontSize='18px'
                fontWeight='500'
                _selected={{
                  color: '#25020D',
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  borderBottom: '3px solid #25020D',
                }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel px={0} py={6}>
              <Box>
                <FormControl mb='35px'>
                  <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
                    Category
                  </FormLabel>
                  <Input
                    type='text'
                    placeholder='Romance'
                    _placeholder={{ color: '#1F2937' }}
                    fontSize='16px'
                    bg='#FFFFFF'
                    focusBorderColor='none'
                    borderRadius='6px'
                    border='1px solid #D1D5DB'
                    cursor='default'
                    readOnly
                  />
                </FormControl>
                <FormControl mb='35px'>
                  <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
                    Category
                  </FormLabel>
                  <Flex>
                    <Tag px='24px' py='12px' fontSize='16px' bgColor='#E5E7EB' mr='8px' borderRadius='46px'>
                      Love
                    </Tag>
                  </Flex>
                </FormControl>
                <FormControl mb='35px'>
                  <FormLabel fontSize='18px' color='#000000' fontWeight={500} letterSpacing='-0.02em'>
                    Creator&apos;s Royalties Percent
                  </FormLabel>
                  <Input
                    type='text'
                    placeholder='10%'
                    _placeholder={{ color: '#1F2937' }}
                    fontSize='16px'
                    bg='#FFFFFF'
                    focusBorderColor='none'
                    borderRadius='6px'
                    border='1px solid #D1D5DB'
                    cursor='default'
                    readOnly
                  />
                </FormControl>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

BookOverview.getLayout = getLayout;
export default BookOverview;
