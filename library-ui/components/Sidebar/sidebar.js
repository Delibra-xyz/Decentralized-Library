import { Link as NextLink } from 'next/link'
import { Link, Image } from '@chakra-ui/react'
import { authorRoutes, readerRoutes } from './sidebarMenu'
import styles from '../../styles/sidebar.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const SideBar = () => {
  const router = useRouter()
  const [active, setActive] = useState('')

  useEffect(() => {
    if (router.isReady) {
      if (router.pathname.includes('/overview')) {
        setActive('overview')
      } else if (router.pathname.includes('/home')) {
        setActive('home')
      } else if (router.pathname.includes('/library')) {
        setActive('library')
      } else if (router.pathname.includes('/browse')) {
        setActive('browse')
      } else if (router.pathname.includes('/rewards')) {
        setActive('rewards')
      } else if (router.pathname.includes('/settings')) {
        setActive('settings')
      } else {
        setActive('overview')
      }
    }
  }, [router.isReady, router.pathname])

  return (
    <div className={styles.sidebar}>
      <Link
        as={NextLink}
        href="/"
        _focus={{
          boxShadow: 'unset',
        }}
      >
        <Image
          className={styles.sidebar__logo}
          src="/full-logo.svg"
          alt="logo"
        />
      </Link>
      <div className={styles.sidebar__navigation}>
        <ul className={styles.sidebar__navigation__menu}>
          {router.pathname.includes('/reader')
            ? readerRoutes.map(({ tag, to, routeIcon, routeName }) => (
                <li
                  key={routeName}
                  className={styles.sidebar__navigation__list}
                >
                  <Link
                    as={NextLink}
                    href={to}
                    onClick={() => setActive(tag)}
                    className={
                      active === tag
                        ? styles.sidebar__navigation__link__active
                        : styles.sidebar__navigation__link
                    }
                    _focus={{
                      boxShadow: 'unset',
                    }}
                  >
                    <>
                      {routeIcon}
                      <span className={styles.sidebar__navigation__name}>
                        {routeName}
                      </span>
                    </>
                  </Link>
                </li>
              ))
            : authorRoutes.map(({ tag, to, routeIcon, routeName }) => (
                <li
                  key={routeName}
                  className={styles.sidebar__navigation__list}
                >
                  <Link
                    as={NextLink}
                    href={to}
                    onClick={() => setActive(tag)}
                    className={
                      active === tag
                        ? styles.sidebar__navigation__link__active
                        : styles.sidebar__navigation__link
                    }
                    _focus={{
                      boxShadow: 'unset',
                    }}
                  >
                    <>
                      {routeIcon}
                      <span className={styles.sidebar__navigation__name}>
                        {routeName}
                      </span>
                    </>
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
