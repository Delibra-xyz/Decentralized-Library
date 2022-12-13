import { Box } from '@chakra-ui/react';
import React from 'react';
import { ComingSoon } from '../../containers/ComingSoon';
import { getLayout } from '../../layout/DashboardLayout';

const Rewards = () => {

  return (
    <Box p={5} bg="#F3F4F6" minH="91%">
        <ComingSoon/>
    </Box>
  );
};

Rewards.getLayout = getLayout;
export default Rewards;
