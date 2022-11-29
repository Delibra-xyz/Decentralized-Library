import { Link as NextLink } from 'next/link';
import { Link, Image } from '@chakra-ui/react';
import { authorRoutes } from './sidebarMenu';
import styles from '../../styles/sidebar.module.css';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Link
        as={NextLink}
        href='/'
        _focus={{
          boxShadow: 'unset',
        }}
      >
        <Image className={styles.sidebar__logo} src='/full-logo.svg' alt='logo' />
      </Link>
      <div className={styles.sidebar__navigation}>
        <ul className={styles.sidebar__navigation__menu}>
          {authorRoutes.map(({ to, routeIcon, routeName }) => (
            <li key={routeName} className={styles.sidebar__navigation__list}>

              <Link
                as={NextLink}
                href={to}
                className={styles.sidebar__navigation__link}
                _focus={{
                  boxShadow: 'unset',
                }}
              >
                <>
                  {routeIcon}
                  <span className={styles.sidebar__navigation__name}>{routeName}</span>
                </>

              <Link href={to} className={styles.sidebar__navigation__link}>

                {routeIcon}
                <span className={styles.sidebar__navigation__name}>{routeName}</span>

              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
