import { Link as NextLink } from 'next/link';
import { Link, Image } from '@chakra-ui/react';
import { authorRoutes } from './sidebarMenu';
import styles from '../../styles/sidebar.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const SideBar = () => {
  const router = useRouter()
  const [active, setActive] = useState("")

  useEffect(()=> {
    if(router.isReady){
      if(router.pathname.includes("/dashboard/library")){
        setActive("library")
      } else if(router.pathname.includes("/dashboard/rewards")){
        setActive("rewards")
      } else if(router.pathname.includes("/dashboard/settings")){
        setActive("settings")
      } else{
        setActive("overview")
      }
    }
  },[router.isReady])

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
          {authorRoutes.map(({ tag, to, routeIcon, routeName }) => (
            <li key={routeName} className={styles.sidebar__navigation__list}>
              <Link
                as={NextLink}
                href={to}
                onClick={()=> setActive(tag)}
                className={ active === tag ? styles.sidebar__navigation__link__active : styles.sidebar__navigation__link}
                _focus={{
                  boxShadow: 'unset',
                }}
              >
                <>
                  {routeIcon}
                  <span className={styles.sidebar__navigation__name}>{routeName}</span>
                </>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
