import { Image} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Bell from '../../assets/svgs/Bell';
import { useAuth } from '../../context/AppContext';
import styles from '../../styles/dashboard-header.module.css';
import ConnectWalletButton from '../ConnectWalletButton';

const DashboardHeader = () => {
  const { user } = useAuth();
  const [dp, setDp] = useState(user?.profileImg)

  useEffect(()=> {
    if(user.profileImg){
      user.profileImg && setDp(user.profileImg)
    } else{
      setDp('/dp.png')
    }
    
  },[user])
  return (
    <div className={styles.dashboardHeader}>
      <div className={styles.dashboardHeader__container}>
        <h2 className={styles.dashboardHeader__header}>Dashboard</h2>
        <div className={styles.dashboardHeader__wrapper}>
          <div className={styles.dashboardHeader__notification}>
            <Bell />
          </div>
          <ConnectWalletButton
            backgroundColor="#E5E7EB"
            bgGradient="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)"
            color="#000000"
            mr={3}
            fontSize="14px"
            _hover={{ bg: '#f3f4f6' }}
          />
          
          <Image src={dp} alt='avatar' width='40px' height='40px' borderRadius='50%' />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
