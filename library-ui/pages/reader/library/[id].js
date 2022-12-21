import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from '@chakra-ui/react';
import { getLayout } from '../../../layout/DashboardLayout';
import { RiStarFill } from 'react-icons/ri';
import Ethereum from '../../../assets/svgs/ethereum';
import Star from '../../../assets/svgs/Star';
import styles from '../../../styles/browse.module.css';

const BookDetails = () => {
  const tabNames = ['Book Info', 'History'];

  return (
    <Box px='24px' pt='42px' pb='27px'>
      <Flex>
        <Box pr='50px'>
          <Box>
            <Heading
              pb='8px'
              color='#1F2937'
              fontSize='32px'
              fontWeight={700}
              fontFamily='DM Sans'
              letterSpacing='-0.02em'
            >
              Cloud Cuckoo Land
            </Heading>
          </Box>
          <Box display='flex'>
            <Box mr='50px'>
              <Text color='#4B5563' fontSize='14px' fontWeight={500}>
                By
              </Text>
              <Heading
                py='2px'
                color='#000000'
                fontSize='17px'
                fontWeight={500}
                fontFamily='DM Sans'
                letterSpacing='-0.02em'
              >
                Jeneva Rose
              </Heading>
            </Box>
            <Box mr='50px'>
              <Text color='#4B5563' fontSize='14px' fontWeight={500}>
                Ratings
              </Text>
              <Box display='flex' alignItems='flex-start' py='2px'>
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <Star key={i} />
                  ))}
                <Box as='span' ml='4px' color='#4B5563' fontSize='14px'>
                  4.5/5
                </Box>
              </Box>
            </Box>
            <Box>
              <Text color='#4B5563' fontSize='14px' fontWeight={500}>
                Floor Price
              </Text>
              <Heading color='#000000' fontFamily='DM Sans' fontSize='16px' fontWeight={700} letterSpacing='-0.02em'>
                <span>56.3 ETH</span>
                <span className={styles.browse__icon__container}>
                  <Ethereum className={styles.browse__icon} />
                </span>
              </Heading>
            </Box>
          </Box>
          <Button
            fontWeight={700}
            px='32px'
            py='12px'
            mt='32px'
            fontSize='14px'
            color='#000000'
            borderRadius='8px'
            bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
            _hover={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)' }}
            _active={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)' }}
            _focus={{
              boxShadow: 'unset',
            }}
          >
            Relist book
          </Button>
          <Box mt='17px'>
            <Box as='span' color='#1F2937' fontSize='16px' fontWeight={700} pr='8px'>
              Sale ends in
            </Box>
            <Box as='span' color='#6B7280' fontSize='16px' fontWeight={700}>
              28d:
            </Box>
            <Box as='span' color='#6B7280' fontSize='16px' fontWeight={700}>
              11h:
            </Box>
            <Box as='span' color='#6B7280' fontSize='16px' fontWeight={700}>
              55m:
            </Box>
            <Box as='span' color='#6B7280' fontSize='16px' fontWeight={700}>
              4s
            </Box>
          </Box>
        </Box>
        <Spacer />
        <Image
          src='/featured1.jfif'
          alt='book-cover'
          width='151px'
          height='238px'
          filter='drop-shadow(13.0191px 13.0191px 13.0191px rgba(0, 0, 0, 0.12));'
          boxShadow='0px 10.5444px 15.8166px -2.63609px rgba(16, 24, 40, 0.1), 0px 5.27219px 10.5444px -5.27219px rgba(16, 24, 40, 0.1)'
        />
      </Flex>
      <Box pt='40px'>
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
              <Flex>
                <Box width='62%'>
                  <Box>
                    <Heading fontSize='16px' color='#1F2937' fontWeight={700} fontFamily='DM Sans' pb='16px'>
                      Description
                    </Heading>
                    <Text
                      fontSize='16px'
                      color='#374151'
                      fontFamily='DM Sans'
                      pb='12px'
                      lineHeight='24px'
                      textAlign='justify'
                    >
                      Sarah Morgan is a successful and powerful defence attorney in Washington D.C. At thirty-three
                      years old, she is a named partner at her firm and life is going exactly how she planned. The same
                      cannot be said for her husband, Adam. He is a struggling writer who has had little success in his
                      career. He begins to tire of his and Sarah&apos;s relationship as she is constantly working. Out
                      in the secluded woods, at Adam and Sarah&apos;s second home, Adam engages in a passionate affair
                      with Kelly Summers. Then, one morning everything changes. Adam is arrested for Kelly&apos;s
                      murder. She had been found stabbed to death in Adam and Sarah&apos;s second home.
                    </Text>
                  </Box>
                  <Box pt='24px'>
                    <Heading fontSize='16px' color='#1F2937' pb='10px' fontWeight={700} fontFamily='DM Sans'>
                      Ratings
                    </Heading>
                    <Text fontSize='16px' color='#374151' fontFamily='DM Sans' pb='12px'>
                      Give a ratings if you have read the book
                    </Text>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <Icon key={i} as={RiStarFill} boxSize='32px' color='#D1D5DB' mr='4px' />
                      ))}
                  </Box>
                </Box>
                <Spacer />
                <Box>
                  <Heading fontSize='16px' color='#1F2937' fontWeight={700} fontFamily='DM Sans' pb='16px'>
                    Properties
                  </Heading>
                  <Box border='0.5px solid #D1D5DB' borderRadius='8px' p='15px' width='345px'>
                    <Box display='flex' pb='16px'>
                      <Text color='#374151' fontSize='14px' fontWeight={400} width='65%'>
                        Pages
                      </Text>
                      <Text color='#303336' fontSize='16px' fontWeight={500}>
                        459
                      </Text>
                    </Box>
                    <Box display='flex' pb='16px'>
                      <Text color='#374151' fontSize='14px' fontWeight={400} width='65%'>
                        Category
                      </Text>
                      <Text color='#303336' fontSize='16px' fontWeight={500}>
                        Romance
                      </Text>
                    </Box>
                    <Box display='flex' pb='16px'>
                      <Text color='#374151' fontSize='14px' fontWeight={400} width='65%'>
                        Released
                      </Text>
                      <Text color='#303336' fontSize='16px' fontWeight={500}>
                        May 4th 2021
                      </Text>
                    </Box>
                    <Box display='flex' pb='16px'>
                      <Text color='#374151' fontSize='14px' fontWeight={400} width='65%'>
                        Creator Royalty
                      </Text>
                      <Text color='#303336' fontSize='16px' fontWeight={500}>
                        10%
                      </Text>
                    </Box>
                    <Box display='flex' pb='16px'>
                      <Text color='#374151' fontSize='14px' fontWeight={400} width='65%'>
                        Tags
                      </Text>
                      <Box>
                        <Tag bg='#F3F4F6' borderRadius='6px' fontSize='12px' p='6px 12px' mr='8px' mb='14px'>
                          Love
                        </Tag>
                        <Tag bg='#F3F4F6' borderRadius='6px' fontSize='12px' p='6px 12px' mr='8px' mb='14px'>
                          Easy to read
                        </Tag>
                        <Tag bg='#F3F4F6' borderRadius='6px' fontSize='12px' p='6px 12px' mr='8px' mb='14px'>
                          Adenturous
                        </Tag>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel px='0'></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

BookDetails.getLayout = getLayout;
export default BookDetails;
