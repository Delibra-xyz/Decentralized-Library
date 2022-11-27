import { Image } from '@chakra-ui/react';
import Bell from '../../assets/svgs/Bell';
import Ethereum from '../../assets/svgs/ethereum';
import ChevronDown from '../../assets/svgs/ChevronDown';
import styles from '../../styles/dashboard-header.module.css';

const DashboardHeader = () => {
  return (
    <div className={styles.dashboardHeader}>
      <div className={styles.dashboardHeader__container}>
        <h2 className={styles.dashboardHeader__header}>Dashboard</h2>
        <div className={styles.dashboardHeader__wrapper}>
          <div className={styles.dashboardHeader__notification}>
            <Bell />
          </div>
          <div className={styles.dashboardHeader__dropdown}>
            <div className={styles.dashboardHeader__dropdown__box}>
              <Ethereum />
            </div>
            <span>Ethereum</span>
            <ChevronDown />
          </div>
          <div className={styles.dashboardHeader__dropdown}>
            <Image src='metamask.png' alt='metamask' />
            <span>0x9...10Q</span>
            <ChevronDown />
          </div>
          <Image src='/dp.png' alt='avatar' width='40px' height='40px' borderRadius='50%' />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
