import SideBar from '../components/Sidebar/sidebar';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import { useAuth } from '../context/AppContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { mounted, fetchDetailsFromDb, handleLogout } = useAuth();

  useEffect(() => {
    if (mounted) {
      if (isConnected === false) {
        router.push('/');
        handleLogout()
      }
    }
  }, [mounted, isConnected]);

  useEffect(()=> {
    fetchDetailsFromDb()
  },[])

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
