import { getLayout } from '../../../layout/DashboardLayout';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Genre from '../../../containers/Genre';
import Recommendation from '../../../containers/Recommendation';

const Home = () => {
  const [page, setPage] = useState(0);
  return (
    <Box px='21px' py='20px'>
      <Flex border="1px solid #E5E7EB" >
        <Flex>
          <Box>1</Box>
          <Box>
            <Text></Text>
          </Box>
        </Flex>
        <Flex>
          
        </Flex>
      </Flex>
      {page === 0 ? <Genre/> : null}
      {page === 1 ? <Recommendation/> : null}
    </Box>
  );
};
Home.getLayout = getLayout;
export default Home;
