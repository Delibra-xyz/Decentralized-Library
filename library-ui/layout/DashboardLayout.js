import SideBar from '../components/Sidebar/sidebar';
import DashboardHeader from '../components/Dashboard/dashboardHeader';
import { useAuth } from '../context/AppContext';
import { useRouter} from "next/router"
import { useEffect, useState } from 'react';

const DashboardLayout = ({ children }) => {
  const router = useRouter()
  const { connected } = useAuth()
  const [ isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, []);

  useEffect(() => {
    if (!connected && isMounted) router.push("/");
  }, [connected]);

  return (
    <div className='flex'>
      <SideBar />
      <div className='main'>
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};

export const getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default DashboardLayout;
