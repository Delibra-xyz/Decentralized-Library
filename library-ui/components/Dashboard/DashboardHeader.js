import { Button, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
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
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={
                <div className={styles.dashboardHeader__dropdown__box}>
                  <Ethereum />
                </div>
              }
              rightIcon={<ChevronDown />}
              backgroundColor='#e5e7eb'
              mr='16px'
              borderRadius='8px'
              fontWeight={600}
              _focus={{
                boxShadow: 'none',
              }}
            >
              Ethereum
            </MenuButton>
            <MenuList>
              <MenuItem>Hello</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={<Image src='metamask.png' alt='metamask' />}
              rightIcon={<ChevronDown />}
              backgroundColor='#f3f4f6'
              mr='16px'
              borderRadius='8px'
              fontWeight={600}
              _hover={{ bg: '#f3f4f6' }}
              _focus={{
                boxShadow: 'unset',
              }}
            >
              0x9...10Q
            </MenuButton>
            <MenuList>
              <MenuItem>Hello</MenuItem>
            </MenuList>
          </Menu>
          <Image src='/dp.png' alt='avatar' width='40px' height='40px' borderRadius='50%' />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
