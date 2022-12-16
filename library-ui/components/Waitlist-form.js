import React from 'react'

import styles from '../components/Footer/footer.module.css'

export default function Waitlistform() {
  return (
    <form
      className={styles.footer__input__group}
      name="contact"
      method="POST"
      data-netlify="true"
      action="/success"
    >
      <p>
        <input
          name="form-name"
          placeholder="Enter your email"
          size="lg"
          focusBorderColor="none"
          background="#fff"
          color="#667085"
          _placeholder={{ color: '#667085' }}
        />
      </p>

      <p>
        <button
          width="159px"
          height="48px"
          className={styles.footer__btn}
          type="submit"
        >
          Send
        </button>
      </p>
    </form>
  )
}
