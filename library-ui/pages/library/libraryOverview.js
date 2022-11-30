import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import Ethereum from '../../assets/svgs/ethereum';
import ThumbsUp from '../../assets/svgs/ThumbsUp';
import ClosedBook from '../../assets/svgs/ClosedBook';
import { getLayout } from '../../layout/DashboardLayout';
import styles from '../../styles/libraryOverview.module.css';

const tabNames = ['Overview', 'Stats', 'Transactions'];

const LibraryOverview = () => {
  return (
    <Box bgColor='#ffffff'>
      <Box bgColor='#F3F4F6' p='16px' display='flex' justifyContent='center'>
        <Image src='/featured1.jfif' alt='book-cover' width='120px' height='188px' />
        <Box pl='40px' display='flex' justifyContent='space-between' flexDirection='column'>
          <Box>
            <Box display='flex' alignItems='center' pb='8px'>
              <Box display='flex' alignItems='center'>
                <ThumbsUp />
                <Text color='#1F2937' fontSize='12px' fontWeight='500' pl='9px'>
                  4.5 Ratings
                </Text>
              </Box>
              <Box display='flex' alignItems='center' className={styles.libraryOverview__box}>
                <ClosedBook />
                <Text color='#1F2937' fontSize='12px' fontWeight='500' pl='9px'>
                  246 pages
                </Text>
              </Box>
            </Box>
            <Heading color='#000000' fontSize='36px' fontWeight={800} fontFamily='Inter' letterSpacing='-0.02em'>
              The Perfect Marriage
            </Heading>
          </Box>
          <Box>
            <Text color='#1F2937' fontSize='13px' fontWeight={500} letterSpacing='-0.02em' pb='4px'>
              Price
            </Text>
            <Text
              color='#000000'
              fontSize='18px'
              fontWeight={700}
              letterSpacing='-0.02em'
              display='inline-block'
              pr='7px'
            >
              56.3 ETH
            </Text>
            <span className={styles.libraryOverview__icon__container}>
              <Ethereum className={styles.libraryOverview__icon} />
            </span>
          </Box>
        </Box>
      </Box>
      <Flex px='24px' py='32px'>
        <Box pr='56px'>
          <Tabs defaultIndex={0} paddingBottom={'16px'}>
            <TabList width='fit-content'>
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
                  <ul className={styles.libraryOverview__list}>
                    <li className={`${styles.libraryOverview__item} ${styles.active}`}>About</li>
                    <li className={styles.libraryOverview__item}>Category</li>
                    <li className={styles.libraryOverview__item}>Tags</li>
                    <li className={styles.libraryOverview__item}>Chapters</li>
                  </ul>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Spacer />
        <Box>
          <Box>
            <Button
              bg='linear-gradient(115.03deg, rgba(255, 176, 189, 0.2) 6.95%, rgba(255, 194, 161, 0.2) 89.09%);'
              color='#1A0830'
              border='1px solid #ffc2a1'
              ml='auto'
              borderRadius='8px'
              display='flex'
              _hover={{
                bg: 'linear-gradient(115.03deg, rgba(255, 176, 189, 0.2) 6.95%, rgba(255, 194, 161, 0.2) 89.09%);',
              }}
              _focus={{
                boxShadow: 'unset',
                bg: 'linear-gradient(115.03deg, rgba(255, 176, 189, 0.2) 6.95%, rgba(255, 194, 161, 0.2) 89.09%);',
              }}
            >
              Edit Details
            </Button>
            <Box>
              <Box mt='36px'>
                <Heading color='#000000' fontSize='24px' fontWeight={700}>
                  About this Book
                </Heading>
                <Text color='#1F2937' fontSize='16px' lineHeight='28px' mt='16px'>
                  The bestselling thriller with “a tantalizing premise and twists at every turn . . . a sizzling,
                  masterful debut about betrayal and justice” (Samantha M. Bailey, #1 national bestselling author).
                  Optioned by Picture Perfect Federation for development as a film or TV seriesSarah Morgan is a
                  successful and powerful defense attorney in Washington D.C. As a named partner at her firm, life is
                  going exactly how she planned. The same cannot be said for her husband, Adam. He&apos;s a struggling
                  writer who has had little success in his career and he tires of his and Sarah&apos;s relationship as
                  she is constantly working. Out in the secluded woods, at the couple&apos;s lake house, Adam engages in
                  a passionate affair with Kelly Summers. But one morning everything changes. Kelly is found brutally
                  stabbed to death and now, Sarah must take on her hardest case yet, defending her own
                </Text>
              </Box>
              <Box mt='36px'>
                <Heading color='#000000' fontSize='24px' fontWeight={700}>
                  Category
                </Heading>
                <Text color='#1F2937' fontSize='16px' lineHeight='28px' mt='16px'>
                  Poetic, Romance, Triller
                </Text>
              </Box>
              <Box mt='36px'>
                <Heading color='#000000' fontSize='24px' fontWeight={700}>
                  Tags
                </Heading>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

LibraryOverview.getLayout = getLayout;
export default LibraryOverview;
