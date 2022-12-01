import { Box, Flex, IconButton, Text } from '@chakra-ui/react';


const OverviewCard = ({title, count, text,icon, ...props}) => {
  return (
    <Flex 
        {...props} 
        bg="#fff"
        border="1px solid #E5E7EB"
        borderRadius="8px"
        p={5}
        alignItems="center"
        justifyContent="space-between"
    >
        <Box>
            <Text
                color="#6B7280"
                fontWeight="500"
                fontSize="14px"
            >{title}</Text>
            <Text
                fontWeight="700"
                fontSize="32px"
                color="#1F2937"
            >{count}</Text>
            <Text
                color="#6B7280"
                fontWeight="400"
                fontSize="14px"
            >{text}</Text>
        </Box>
        <IconButton
            bg="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)"
            color="#fff"
            borderRadius="49px"
            icon={icon}
        />
    </Flex>
  );
};

export default OverviewCard;
