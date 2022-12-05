import { getLayout } from '../../../layout/DashboardLayout';
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Genre from '../../../containers/Genre';
import Recommendation from '../../../containers/Recommendation';

const Home = () => {
  const [page, setPage] = useState(0);

  // const next = () => {
  //   if(page >= 1){
  //     setPage()
  //   }
  // }

  return (
    <Box px='21px' py='20px' bg="#F3F4F6"> 
      <Box border='1px solid #E5E7EB' borderRadius='8px' px='50px' pb='16px' bg="#fff">
        <Flex mb={5} w="60%" mx="auto">
          <Flex 
            borderBottom={page ===0 ? "3px solid #FFC2A1" : "1px solid #E5E7EB" } 
            w="50%" 
            onClick={() => setPage(0)} 
            cursor="pointer"
            borderRight="1px solid #E5E7EB"
            borderLeft="1px solid #E5E7EB"
            px={5}
            borderBottomLeftRadius="8px"
            py={3}
          >
            <Box 
              boxSize={6}
              borderRadius="42px" 
              bg={page===0 ? "linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)" : "#E5E7EB"}
              color="#fff"
              textAlign="center"
              fontSize="14px"
              pt="2px"
              mr={3}
            >
              1
            </Box>
            <Box>
              <Text 
                fontSize="16px" 
                fontWeight="700" 
                fontFamily="'Inter', sans-serif"
                color={page ===0 ? "#1F2937" : "#6B7280"}
              >Select Genre</Text>
              <Text 
                fontSize="12px" 
                fontWeight="400"
                color={page === 0 ? "#1F2937" : "#9CA3AF"}
              >Pick your favourite genre</Text>
            </Box>
          </Flex>

          <Flex 
            borderBottom={page ===1 ? "3px solid #FFC2A1" : "1px solid #E5E7EB" } 
            w="50%" 
            onClick={() => setPage(1)} 
            cursor="pointer"
            px={5}
            borderRight="1px solid #E5E7EB"
            borderBottomRightRadius="8px"
            py={3}
          >
            <Box 
              boxSize={6}
              borderRadius="42px" 
              bg={page===1 ? "linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)" : "#E5E7EB"}
              color="#fff"
              textAlign="center"
              fontSize="14px"
              pt="2px"
              mr={3}
            >
              2
            </Box>
            <Box>
              <Text 
                fontSize="16px" 
                fontWeight="700" 
                fontFamily="'Inter', sans-serif"
                color={page === 1 ? "#1F2937" : "#6B7280"}
              >View Recommendation</Text>
              <Text 
                fontSize="12px" 
                fontWeight="400"
                color={page === 1 ? "#1F2937" : "#9CA3AF"}
              >View recommended book and mint</Text>
            </Box>
          </Flex>
        </Flex>
        {page === 0 ? <Genre/> : null}
        {page === 1 ? <Recommendation/> : null}
        <Stack direction='row' spacing={4} align='center' justifyContent='flex-end' my='40px'>
          <Button
            bgColor='#E5E7EB'
            fontWeight={700}
            fontSize='14px'
            color='#000000'
            borderRadius='8px'
            _hover={{ bg: '#E5E7EB' }}
            _active={{ bg: '#E5E7EB' }}
            _focus={{
              boxShadow: 'unset',
            }}
          >
            Skip
          </Button>
          <Button
            fontWeight={700}
            fontSize='14px'
            color='#000000'
            borderRadius='8px'
            bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%);'
            _hover={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%);' }}
            _active={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%);' }}
            _focus={{
              boxShadow: 'unset',
            }}
            // onClick={next}
          >
            Continue
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
Home.getLayout = getLayout;
export default Home;
