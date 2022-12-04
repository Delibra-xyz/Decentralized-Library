import { Box } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';

const HomeLayout = ({ children }) => {
  const router = useRouter();
  return (
    <Box minH='100vh'>
      <Navbar />
      <Box>{children}</Box>
      {router.pathname !== '/authentication' && <Footer />}
    </Box>
  );
};

export const getLayout = (page) => <HomeLayout>{page}</HomeLayout>;

export default HomeLayout;
