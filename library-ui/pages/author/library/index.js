import { Link as NextLink } from 'next/link';
import { getLayout } from '../../../layout/DashboardLayout';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  SimpleGrid,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import List from '../../../assets/svgs/list';
import Grid2 from '../../../assets/svgs/Grid2';
import Search from '../../../assets/svgs/search';
import LibraryCard from '../../../components/Dashboard/LibraryCard';
import LibraryEmptyState from '../../../components/Dashboard/LibraryEmptyState';
import styles from '../../../styles/library.module.css';

const Library = () => {
  const tabNames = ['Published', 'Activities'];

  return (
    <div className={styles.library}>
      <div className={styles.library__header}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Search />
          </InputLeftElement>
          <Input
            type='search'
            placeholder='What book are you looking for'
            borderRadius='37px'
            width='40%'
            bg='#FFFFFF'
            boxShadow='0px 2px 35px rgba(0, 0, 0, 0.08)'
            _focus={{
              boxShadow: 'unset',
            }}
          />
        </InputGroup>
        <Link
          as={NextLink}
          href='/author/library/upload'
          display='block'
          fontWeight={700}
          px='24px'
          py='12px'
          width='15%'
          borderRadius='8px'
          bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
          _hover={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)' }}
          _focus={{
            boxShadow: 'unset',
          }}
        >
          Upload Book
        </Link>
      </div>
      <Box>
        <Tabs defaultIndex={0} paddingBottom={'16px'}>
          <Flex>
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
            <Spacer />
            <Box>
              <Text
                bg='linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)'
                bgClip='text'
                display='inline-block'
                textColor='transparent'
                pr='9px'
              >
                Switch view:
              </Text>
              <IconButton
                aria-label='List view'
                icon={<List />}
                bg='#E0E0E0'
                borderRadius='4px'
                _hover={{ bgColor: '#E0E0E0' }}
                _focus={{
                  boxShadow: 'unset',
                  bgColor: 'transparent',
                }}
              />
              <IconButton
                aria-label='Grid view'
                icon={<Grid2 />}
                backgroundColor='transparent'
                borderRadius='4px'
                _hover={{ bgColor: 'transparent' }}
                _focus={{
                  boxShadow: 'unset',
                  bgColor: 'transparent',
                }}
              />
            </Box>
          </Flex>
          <TabPanels>
            <TabPanel px={0} py={6}>
              <LibraryEmptyState />
            </TabPanel>
            <TabPanel>
              <Text color='#1F2937' fontWeight='500' opacity='0.9'>
                Showing 1-10 out of 20
              </Text>
              <Box mt={6}>
                <SimpleGrid templateColumns='repeat(4, 1fr)' gap={5}>
                  <LibraryCard id='1' link={`/author/library/1`} />
                  <LibraryCard id='2' link={`/author/library/2`} />
                </SimpleGrid>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

Library.getLayout = getLayout;
export default Library;
