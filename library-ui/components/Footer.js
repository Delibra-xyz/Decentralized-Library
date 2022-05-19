import React from 'react';
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <a
          href="#"
        >
          Powered by{' '}
          <span className={styles.logo}>
           &nbsp;  Team ₿lock₿addies
          </span>
        </a>
      </footer>
    );
};

export default Footer;
