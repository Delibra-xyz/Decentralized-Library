import SideBar from '../components/Sidebar/sidebar';
import DashboardHeader from '../components/Dashboard/dashboardHeader';
import { useAuth } from '../context/AppContext';
import { useRouter} from "next/router"
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

const DashboardLayout = ({ children }) => {
  const router = useRouter()
  const { isConnected } = useAccount()
  const { mounted } = useAuth()

  useEffect(() => {
    if(mounted){
      if (isConnected === false) router.push("/");
    }
  }, [mounted]);

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
