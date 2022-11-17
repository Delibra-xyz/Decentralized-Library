import { Box } from "@chakra-ui/layout";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";


const HomeLayout = ({ children }) => {
  return (
    <Box minH="100vh">
        <Navbar/>
        <Box>{children}</Box>
        <Footer/>
    </Box>
  );
};

export const getLayout = page => <HomeLayout>{page}</HomeLayout>;

export default HomeLayout;
