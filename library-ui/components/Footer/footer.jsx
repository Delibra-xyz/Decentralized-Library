import Link from 'next/link';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import Twitter from '../../assets/svgs/twitter';
import LinkedIn from '../../assets/svgs/linkedIn';
import Facebook from '../../assets/svgs/facebook';
import Discord from '../../assets/svgs/discord';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <h2 className={styles.footer__heading}>Be the first to know when we launch</h2>
        <p className={styles.footer__sub}>
          we promise!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum augue mi vestibulum tempor.
          Mauris suspendisse.
        </p>
        <InputGroup className={styles.footer__input__group}>
          <Input
            placeholder='Enter your email'
            size='lg'
            focusBorderColor='none'
            background='#fff'
            color='#667085'
            _placeholder={{ color: '#667085' }}
          />
          <InputRightElement width='159px' height='48px'>
            <Button className={styles.footer__btn}>Stay Updated</Button>
          </InputRightElement>
        </InputGroup>
        <div className={styles.footer__socials}>
          <Link href='/'>
            <a>
              <Twitter className={styles.footer__socials__icon} />
            </a>
          </Link>
          <Link href='/'>
            <a>
              <LinkedIn className={styles.footer__socials__icon} />
            </a>
          </Link>
          <Link href='/'>
            <a>
              <Facebook className={styles.footer__socials__icon} />
            </a>
          </Link>

          <Link href='/'>
            <a>
              <Discord className={styles.footer__socials__icon} />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__box}>
          <p className={styles.footer__copy}>© {new Date().getFullYear()} Delibra. All rights reserved.</p>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <Link href='/' className={styles.footer__link}>
                Terms
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link href='/' className={styles.footer__link}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
