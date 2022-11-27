import Link from 'next/link';
import { useRouter } from 'next/router';
import { Image } from '@chakra-ui/react';
import { authorRoutes } from './sidebarMenu';
import styles from '../../styles/sidebar.module.css';

const SideBar = () => {
  const router = useRouter();
  return (
    <div className={styles.sidebar}>
      <Image className={styles.sidebar__logo} src='/full-logo.svg' alt='logo' />
      <div className={styles.sidebar__navigation}>
        <ul className={styles.sidebar__navigation__menu}>
          {authorRoutes.map(({ to, routeIcon, routeName }) => (
            <li key={routeName} className={styles.sidebar__navigation__list}>
              <Link href={to}>
                <a className={styles.sidebar__navigation__link}>
                  {routeIcon}
                  <span className={styles.sidebar__navigation__name}>{routeName}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
