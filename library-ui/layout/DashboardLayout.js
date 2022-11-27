import SideBar from '../components/Sidebar/sidebar';
import DashboardHeader from '../components/Dashboard/dashboardHeader';

const DashboardLayout = ({ children }) => {
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
