import { Link as NextLink } from 'next/link'
import {
  Link,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import Twitter from '../../assets/svgs/twitter'
import LinkedIn from '../../assets/svgs/linkedIn'
import Facebook from '../../assets/svgs/facebook'
import Discord from '../../assets/svgs/discord'
import styles from './footer.module.css'

const postUrl = `https://bit.us7.list-manage.com/subscribe/post?u=d25029132f3626cdd5e575572&id=9a216722ca`
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <h2 className={styles.footer__heading}>
          Be the first to know when we launch
        </h2>
        <p className={styles.footer__sub}>
          Subscribe for updates. No spam, just exciting content from a
          blockchain library&apos;s stable.
        </p>

        <InputGroup
          className={styles.footer__input__group}
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
        >
          <Input
            name="form-name"
            placeholder="Enter your email"
            size="lg"
            focusBorderColor="none"
            background="#fff"
            color="#667085"
            _placeholder={{ color: '#667085' }}
          />
          <InputRightElement width="159px" height="48px">
            <Button className={styles.footer__btn}>Stay Updated</Button>
          </InputRightElement>
        </InputGroup>

        <div className={styles.footer__socials}>
          <Link
            as={NextLink}
            href="https://twitter.com/delibra_xyz?s=21&t=Jzx2bbagOGJHBnTtcJNs3A"
            className={styles.footer__socials__link}
            _focus={{
              boxShadow: 'unset',
            }}
          >
            <Twitter className={styles.footer__socials__icon} />
          </Link>
          <Link
            as={NextLink}
            href="/"
            className={styles.footer__socials__link}
            _focus={{
              boxShadow: 'unset',
            }}
          >
            <LinkedIn className={styles.footer__socials__icon} />
          </Link>
          <Link
            as={NextLink}
            href="/"
            className={styles.footer__socials__link}
            _focus={{
              boxShadow: 'unset',
            }}
          >
            <Facebook className={styles.footer__socials__icon} />
          </Link>
          <Link
            as={NextLink}
            href="https://discord.gg/K4tw8wX5"
            className={styles.footer__socials__link}
            _focus={{
              boxShadow: 'unset',
            }}
          >
            <Discord className={styles.footer__socials__icon} />
          </Link>
        </div>
      </div>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__box}>
          <p className={styles.footer__copy}>
            © {new Date().getFullYear()} Delibra. All rights reserved.
          </p>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Terms
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href="/" className={styles.footer__link}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
