import { getLayout } from '../layout/DashboardLayout';
import Library from './library';

const Dashboard = () => {
  return (
    <>
      <Library />
    </>
  );
};

Dashboard.getLayout = getLayout;
export default Dashboard;
