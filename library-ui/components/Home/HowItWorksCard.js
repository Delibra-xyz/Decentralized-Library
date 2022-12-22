import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const HowItWorksCard = ({ stepNumber, stepText }) => {
  return (
    <Box
      bg='linear-gradient(115.03deg, rgba(255, 176, 189, 0.2) 6.95%, rgba(255, 194, 161, 0.2) 89.09%)'
      borderRadius='13px'
      padding='24px 24px 48px'
      textAlign='left'
      height='310px'
    >
      <Heading
        bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)'
        bgClip='text'
        fontSize='64px'
        fontWeight='900'
        mb={3}
      >
        {stepNumber}
      </Heading>
      <Text textTransform='uppercase' color='#000000' fontSize='22px' fontWeight='700' mb={2}>
        step {stepNumber}
      </Text>
      <Text color='#4B5563' fontSize='16px' fontWeight='500'>
        {stepText}
      </Text>
    </Box>
  );
};

export default HowItWorksCard;
