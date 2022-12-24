import { getLayout } from '../../../layout/DashboardLayout';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { books } from '../../../utils/data/bookData';
import Search from '../../../assets/svgs/search';
import Eye from '../../../assets/svgs/Eye';
import Bookmark from '../../../assets/svgs/Bookmark';
import ReaderLibraryCard from '../../../components/Dashboard/ReaderLibraryCard';

const Library = () => {
  const tabNames = [
    {
      tabName: 'Purchased',
      tabIcon: <Eye />,
    },
    {
      tabName: 'Wishlist',
      tabIcon: <Bookmark />,
    },
  ];

  return (
    <Box mt='23px' p='0 25px'>
      <InputGroup mb='32px'>
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
      <Box>
        <Tabs defaultIndex={0} paddingBottom={'18px'}>
          <TabList>
            {tabNames.map(({ tabName, tabIcon }, index) => (
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
                {tabIcon} &nbsp;
                {tabName}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel px='0'>
              <Text color='#1F2937' fontWeight='500' opacity='0.9'>
                Showing 1-10 out of 20
              </Text>
              <Box mt={6}>
                <SimpleGrid templateColumns='repeat(5, 1fr)' gap={4} rowGap={10}>
                  {books.map(({ id, bookName, bookCover, bookAuthor }) => (
                    <ReaderLibraryCard
                      key={id}
                      id={id}
                      link={`/reader/library/${id}`}
                      bookName={bookName}
                      bookAuthor={bookAuthor}
                      bookCover={bookCover}
                    />
                  ))}
                </SimpleGrid>
              </Box>
            </TabPanel>
            {/* <TabPanel px={0} py={6}>
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

Library.getLayout = getLayout;
export default Library;
