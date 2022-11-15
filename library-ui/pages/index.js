import Head from 'next/head'
// import Preloader from '../components/Preloader/preloader'
// import Timer from '../components/Countdown/Timer'
import { Box, Button, Divider, Flex, Image, Tag } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import FeatureCard from '../components/Home/FeatureCard'
import { MdOutlineEnhancedEncryption } from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import { BiPurchaseTag } from 'react-icons/bi'
import { FaPeopleArrows } from 'react-icons/fa'
import GoalCard from '../components/Home/GoalCard'
import Avatar1 from '../assets/svgs/Avatar1'
import Avatar2 from '../assets/svgs/Avatar2'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'
import Book from '../assets/svgs/Book'
import Frame from '../assets/svgs/Frame'
import HowItWorks from './HowItWorks/how-it-works'
import Roadmap from './Roadmap/roadmap'

// import LitJsSdk from 'lit-js-sdk'

export default function Home() {
  // // -- arweave states
  // const [JWK, setJWK] = useState(null)
  // const [arweaveAddress, setArweaveAddress] = useState(null)

  // const [currency, setCurrency] = useState('arweave')
  // const [node, setNode] = useState('http://node1.bundlr.network')

  // const [file, setFile] = useState(null)
  // const [fileSize, setFileSize] = useState(null)
  // const [txId, setTxId] = useState(null)

  // // -- lit states
  // const [accessControlConditions, setAccessControlConditiosn] = useState(null)
  // const [humanised, setHumanised] = useState(null)
  // const [encryptedData, setEncryptedData] = useState(null)
  // const [encryptedSymmetricKey, setEncryptedSymmetricKey] = useState(null)
  // const [downloadedEncryptedData, setDownloadedEncryptedData] = useState(null)
  // const [decryptedData, setDecryptedData] = useState(null)

  // // -- init litNodeClient
  // const litNodeClient = new LitJsSdk.LitNodeClient()
  // litNodeClient.connect()

  // //
  // // (AR) event: when a key file is being dragged to the drop zone
  // // @param { Array } accepted files callback from the input
  // // @return { void }
  // //
  // const onDropKey = useCallback(async (acceptedFiles) => {
  //   const supportedFileTypes = ['application/json']

  //   // Only return a single file
  //   const file = acceptedFiles[0]

  //   // -- validate:: if file type is .json
  //   if (!supportedFileTypes.includes(file.type)) {
  //     alert(
  //       `Incorrect file type! We only support ${supportedFileTypes.toString()} at the moment`,
  //     )
  //     return
  //   }

  //   const fileReader = new FileReader()

  //   fileReader.onload = async (e) => {
  //     let _JWK = JSON.parse(e.target.result)

  //     console.log('JWK:', _JWK)

  //     setJWK(_JWK)

  //     // arweave will be dealth from backend
  //     const res = await fetch('./api/arweave', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         currency,
  //         node,
  //         jwk: _JWK,
  //       }),
  //     })

  //     const _arweaveAddress = (await res.json()).address

  //     setArweaveAddress(_arweaveAddress)
  //   }

  //   fileReader.readAsText(file)
  // }, [])

  // //
  // // (LIT) event: when a file is being dragged to the drop zone
  // // @param { Array } accepted files callback from the input
  // // @return { void }
  // //
  // const onDropFile = useCallback(async (acceptedFiles) => {
  //   const supportedFileTypes = ['image/jpeg', 'image/png']

  //   // Only return a single file
  //   const file = acceptedFiles[0]

  //   // -- validate:: if file type is .json
  //   if (!supportedFileTypes.includes(file.type)) {
  //     alert(
  //       `Incorrect file type! We only support ${supportedFileTypes.toString()} at the moment`,
  //     )
  //     return
  //   }

  //   const fileReader = new FileReader()

  //   fileReader.onload = async (e) => {
  //     const dataURL = e.target.result

  //     console.log('DataURL:', dataURL)

  //     setFile(dataURL)

  //     setFileSize(prettyBytes(dataURL.length))
  //   }

  //   fileReader.readAsDataURL(file)
  // }, [])

  // //
  // // (LIT Modal) Close share modal
  // // @return { void }
  // //
  // const closeModal = () => {
  //   ACCM.ReactContentRenderer.unmount(document.getElementById('shareModal'))
  // }

  // //
  // // (LIT Modal) Set access control conditions
  // // @return { void }
  // //
  // const onClickSetAccessControl = () => {
  //   ACCM.ReactContentRenderer.render(
  //     ACCM.ShareModal,
  //     {
  //       sharingItem: [],
  //       onAccessControlConditionsSelected: async (accessControlConditions) => {
  //         console.log('accessControlConditions:', accessControlConditions)

  //         let humanised = await LitJsSdk.humanizeAccessControlConditions({
  //           accessControlConditions:
  //             accessControlConditions.accessControlConditions,
  //         })

  //         console.log('humanised:', humanised)

  //         setAccessControlConditiosn(accessControlConditions)

  //         setHumanised(humanised)

  //         closeModal()
  //       },
  //       onClose: closeModal,
  //       getSharingLink: (sharingItem) => {},
  //       showStep: 'ableToAccess',
  //     },
  //     document.getElementById('shareModal'),
  //   )
  // }

  // //
  // // (LIT) Encrypt image data
  // // @return { void }
  // //
  // const onClickEncryptImage = async () => {
  //   const fileInBase64 = btoa(file)

  //   console.log('fileInBase64:', fileInBase64)

  //   const chain = 'ethereum'

  //   const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })

  //   // Visit here to understand how to encrypt static content
  //   // https://developer.litprotocol.com/docs/LitTools/JSSDK/staticContent
  //   const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(
  //     fileInBase64,
  //   )

  //   const encryptedSymmetricKey = await litNodeClient.saveEncryptionKey({
  //     accessControlConditions: accessControlConditions.accessControlConditions,
  //     symmetricKey,
  //     authSig,
  //     chain,
  //   })

  //   console.log('encryptedString:', encryptedString)

  //   const encryptedStringInDataURI = await blobToDataURI(encryptedString)

  //   console.log('encryptedStringInDataURI:', encryptedStringInDataURI)

  //   setEncryptedData(encryptedStringInDataURI)

  //   setEncryptedSymmetricKey(encryptedSymmetricKey)
  // }

  // //
  // // (AR) Sign and upload to arweave
  // // @return { void }
  // //
  // const onClickSignAndUpload = async () => {
  //   console.log('onClickSignAndUpload')

  //   const packagedData = {
  //     encryptedData: await encryptedData,
  //     encryptedSymmetricKey,
  //     accessControlConditions: accessControlConditions.accessControlConditions,
  //   }

  //   console.log('packagedData:', packagedData)

  //   const packagedDataInString = JSON.stringify(packagedData)

  //   console.log('packagedDataInString:', packagedDataInString)

  //   // (POST) Get estimate to upload and sign
  //   const gastimateResult = (
  //     await (
  //       await fetch('./api/arweave/gastimate', {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           currency,
  //           node,
  //           jwk: JWK,
  //           encryptedData: packagedDataInString,
  //         }),
  //       })
  //     ).json()
  //   ).gastimate

  //   // -- Stop if 'cancel' is selected
  //   if (!confirm(gastimateResult)) return

  //   // (POST) Get estimate to upload and sign
  //   const upload = await fetch('./api/arweave/upload', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       currency,
  //       node,
  //       jwk: JWK,
  //       encryptedData: packagedDataInString,
  //     }),
  //   })

  //   const txId = (await upload.json()).txId

  //   console.log('Uploaded! Transaction ID:', txId)

  //   setTxId(txId)
  // }

  // //
  // // (Helper) Turn blob data to data URI
  // // @param { Blob } blob
  // // @return { Promise<String> } blob data in data URI
  // //
  // const blobToDataURI = (blob) => {
  //   return new Promise((resolve, reject) => {
  //     var reader = new FileReader()

  //     reader.onload = (e) => {
  //       var data = e.target.result
  //       resolve(data)
  //     }
  //     reader.readAsDataURL(blob)
  //   })
  // }

  // //
  // // (Helper) Convert data URI to blob
  // // @param { String } dataURI
  // // @return { Blob } blob object
  // //
  // const dataURItoBlob = (dataURI) => {
  //   console.log(dataURI)

  //   var byteString = window.atob(dataURI.split(',')[1])
  //   var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  //   var ab = new ArrayBuffer(byteString.length)
  //   var ia = new Uint8Array(ab)
  //   for (var i = 0; i < byteString.length; i++) {
  //     ia[i] = byteString.charCodeAt(i)
  //   }

  //   var blob = new Blob([ab], { type: mimeString })

  //   return blob
  // }

  // //
  // // (GET) Fetch Encrypted Data
  // // @return { void }
  // //
  // const onFetchEncryptedData = async () => {
  //   const downloadUrl = 'https://arweave.net/' + txId

  //   const data = await fetch(downloadUrl)

  //   const encryptedData = JSON.parse(await data.text())

  //   console.log('encryptedData:', encryptedData)

  //   setDownloadedEncryptedData(encryptedData)
  // }

  // //
  // // (LIT) Decrypt downloaded encrypted data
  // // @return { void }
  // //
  // const onDecryptDownloadedData = async () => {
  //   const authSig = await LitJsSdk.checkAndSignAuthMessage({
  //     chain: 'ethereum',
  //   })

  //   const symmetricKey = await litNodeClient.getEncryptionKey({
  //     accessControlConditions: downloadedEncryptedData.accessControlConditions,
  //     // Note, below we convert the encryptedSymmetricKey from a UInt8Array to a hex string.  This is because we obtained the encryptedSymmetricKey from "saveEncryptionKey" which returns a UInt8Array.  But the getEncryptionKey method expects a hex string.
  //     toDecrypt: LitJsSdk.uint8arrayToString(encryptedSymmetricKey, 'base16'),
  //     chain: 'ethereum',
  //     authSig,
  //   })

  //   const decryptedString = await LitJsSdk.decryptString(
  //     dataURItoBlob(downloadedEncryptedData.encryptedData),
  //     symmetricKey,
  //   )

  //   const originalFormat = atob(decryptedString)

  //   console.log('Original Format:', originalFormat)

  //   setDecryptedData(originalFormat)
  // }

  return (
    <>
      <Head>
        <title> Delibra </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Navbar />
      <Box>
        {/* Hero section */}
        <Box
          bg="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)"
          width="100vw"
          height="90vh"
          mb={10}
          px="90px"
        >
          <Box pt="5%" mb={10}>
            <Heading
              fontFamily="'Clash Grotesk', sans-serif"
              fontSize="81px"
              fontWeight="700"
              bgGradient="linear-gradient(89.34deg, #FFFFFF -13.15%, #332640 93.4%)"
              bgClip="text"
              width="45%"
              // pl="90px"
            >
              Meet the first decentralized
              <Frame />
              {/* <Text
                bg="linear-gradient(115.03deg, rgba(255, 176, 189, 0.2) 6.95%, rgba(255, 194, 161, 0.2) 89.09%)"
                w="max-content"

              >library</Text> */}
            </Heading>
          </Box>
          <Flex>
            <Image src="/book 1.svg" alt="" />
            <Image src="/book 2.svg" alt="" />
            <Image src="/book 2.svg" alt="" />
            <Image src="/book 2.svg" alt="" />

            <Box w="40%">
              <Text fontSize="20px" fontWeight="500" color="#E2E0E5" mb={5}>
                Delibra is the first read to earn decentalized platform that
                gives instant access to ebooks, audiobooks, articles, podcasts,
                sheet music, and documents.
              </Text>
              <Button
                fontSize="18px"
                fontWeight="700"
                background="#FFFFFF"
                border="1px solid #FFFFFF"
                borderRadius="6px"
              >
                <Text
                  bgGradient="linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)"
                  bgClip="text"
                  fontFamily="'Clash Grotesk', sans-serif"
                >
                  Download Whitepaper
                </Text>
              </Button>
            </Box>
          </Flex>
        </Box>

        {/* Our features section */}

        <Box bg="#ffffff" width="100vw" minH="50vh" px="100px" py={10} mb={10}>
          <Text
            bgGradient="linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)"
            bgClip="text"
            fontSize="40px"
            fontWeight="500"
            mb={5}
          >
            Our Features
          </Text>
          <Heading
            fontFamily="'Clash Grotesk', sans-serif"
            fontSize="56px"
            fontWeight="700"
            mb={5}
          >
            Lorem ipsum dolor sit amet
          </Heading>
          <Text
            fontFamily="'Inter', sans-serif"
            fontSize="20px"
            fontWeight="400"
            mb={5}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dictum
            augue mi vestibulum tempor.{' '}
          </Text>

          <Flex justify="space-between" my={10}>
            <FeatureCard
              icon={<MdOutlineEnhancedEncryption />}
              title="Book encryption"
              cont="Preventing the problem of e-book piracy and protecting against the loss of data or assets"
            />

            <FeatureCard
              icon={<GiReceiveMoney />}
              title="Read to earn"
              cont="Earn tokens and royalties for your translations, reviews, and other activities. "
            />

            <FeatureCard
              icon={<BiPurchaseTag />}
              title="Ease of purchase"
              cont="Buy books conveniently on the blockchain with a single click  "
            />

            <FeatureCard
              icon={<FaPeopleArrows />}
              title="Community"
              cont="Creating a fascinating community of Readers and Authors "
            />
          </Flex>
        </Box>

        {/* Goals section */}
        <Box py={10} px="100px" minH="50vh" textAlign="center" pos="relative">
          <Book
            className="rotate-in-center"
            style={{
              position: 'absolute',
              top: '120px',
              right: '-20px',
            }}
          />
          <Tag
            color="#EAA391"
            bg="#FFEBE1"
            borderRadius="86px"
            fontSize="16px"
            fontWeight="700"
            px={4}
            py={2}
            mb={5}
          >
            OUR GOAL IS SIMPLE
          </Tag>
          <Heading
            fontFamily="'Clash Grotesk', sans-serif"
            fontSize="46px"
            fontWeight="700"
            mb={5}
            w="90%"
            mx="auto"
          ></Heading>
          <Flex justify="space-between" mt={10}>
            <GoalCard
              title="For Authors"
              cont=" Access to a global platform of potential readers and buyers"
            >
              <Avatar1 />
            </GoalCard>
            <GoalCard title="For Readers" cont=" Access to free">
              <Avatar2 />
            </GoalCard>
          </Flex>
        </Box>

        {/* Divider section */}
        <Box my={5} px="20%">
          <Divider />
        </Box>

        {/*  How it works section */}
        <Box my="100px" px="7%">
          <HowItWorks />
        </Box>

        {/*  Roadmap section */}
        <Box
          py="100px"
          px="7%"
          bg="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)"
        >
          <Roadmap />
        </Box>

        <Footer />
        {/* <Preloader /> */}
      </Box>
    </>
  )
}
