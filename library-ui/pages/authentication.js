import Link from 'next/link'
import { Heading, Text } from '@chakra-ui/react'
import Reading from '../assets/svgs/reading'
import Publish from '../assets/svgs/publish'
import styles from '../styles/authentication.module.css'
import { getLayout } from '../layout/HomeLayout'

const Authentication = () => {
  return (
    <div className={styles.authentication}>
      <div className={styles.authentication__container}>
        <Heading
          fontFamily="'Clash Grotesk', sans-serif"
          fontSize="40px"
          fontWeight="700"
          mb={1}
          textAlign="center"
          color="#050820"
        >
          Sign into your account
        </Heading>
        <Text
          color="#6E718D"
          fontSize="20px"
          fontWeight="500"
          mb={5}
          textAlign="center"
        >
          Select an account type.
        </Text>
        <div className={styles.authentication__wrapper}>
          <Link href="">
            <div className={styles.authentication__box}>
              <Reading />
              <Heading
                color="#000000"
                mt={2}
                fontSize="20px"
                fontWeight="700"
                textAlign="center"
                letterSpacing="-0.02em"
              >
                As a reader
              </Heading>
              <Text color="#374151" textAlign="center" mb={1} fontSize="14px">
                Purchase books and own legal right
              </Text>
            </div>
          </Link>
          <Link href="/">
            <div className={styles.authentication__box}>
              <Publish />
              <Heading
                color="#000000"
                mt={4}
                fontSize="20px"
                fontWeight="700"
                textAlign="center"
                letterSpacing="-0.02em"
              >
                Publish a book
              </Heading>
              <Text color="#374151" textAlign="center" mb={1} fontSize="14px">
                Publish a book and earn crypto
              </Text>
            </div>
          </Link>
        </div>
        <Text
          color="#000000"
          fontSize="12px"
          fontWeight="400"
          textAlign="center"
          mt={8}
        >
          This site is protected by Delibra Terms of Service and Privacy policy.
        </Text>
      </div>
    </div>
  )
}
Authentication.getLayout = getLayout
export default Authentication
