import Head from 'next/head'
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
import Book from '../assets/svgs/Book'
import HowItWorks from '../components/how-it-works'
import Roadmap from '../components/roadmap'
import { getLayout } from '../layout/HomeLayout'

// import LitJsSdk from 'lit-js-sdk'

const Home = () => {
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

      <Box>
        {/* Hero section */}
        <Flex
          bgGradient="linear-gradient(98.41deg, #02081F 0%, #1A0830 96.87%)"
          width="100vw"
          height={{base:"90vh", "2xl":"88vh"}}
          mb={10}
          position="relative"
          justifyContent="space-between"
          alignItems="center"
        >

          <Image 
            src="Frame 75.svg" 
            position="absolute" 
            bottom="20vh" 
            top={{base:"33vh", sm:"22vh"}}
            // height={{base:"85vh", sm:"100%"}}
            display={{base:"block", lg:"none"}}
            left={{base:"-250px", sm:"-200px"}}
            transform={{base:"scale(3)", sm:"scale(1.9)"}}
          />
          <Image src="Rectangle 20.svg" position="absolute" bottom="0" display={{base:"none", lg:"block"}}/>

          <Box w={{base:"100%",sm:"85%", md:"75%", lg:"65%", "2xl":"60%"}} ps={{base:"30px", md:"50px", lg:"90px"}}>
            <Heading
              fontFamily="'Clash Grotesk', sans-serif"
              fontSize={{base:"40px", md: "50px",lg:"60px",xl:"81px", "2xl":"100px"}}
              fontWeight="700"
              bgGradient="linear-gradient(89.34deg, #FFFFFF -13.15%, #332640 93.4%)"
              bgClip="text"
              width={{base:"100%", sm:"85%", md:"70%"}}
            >
              Meet the first decentralized Library
            </Heading>

            <Text 
              fontSize={{base:"16px", lg: "20px", "2xl":"40px"}} 
              fontWeight="500" 
              color="#E2E0E5" 
              mb={10} 
              mt={5} 
              w={{base:"100%", sm:"85%", md:"70%"}}
            >
              Delibra is the first read to earn decentalized platform that
              gives instant access to e-books, audiobooks, articles, and
              documents.
            </Text>

            <Button
              fontSize="18px"
              fontWeight="700"
              background="#FFFFFF"
              border="1px solid #FFFFFF"
              borderRadius="6px"
              onClick={() => {
                if (window)
                  window.location.href =
                    'https://khadijah-wuraola-amusat.gitbook.io/delibra/'
              }}
            >
              <Text
                bgGradient="linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%)"
                bgClip="text"
                fontFamily="'Clash Grotesk', sans-serif"
              >
                View Whitepaper
              </Text>
            </Button>

          </Box>
          <Box w={{base:"0%", lg:"35%"}} pe="90px">
            <div className="lottie" width={800}>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_1a8dx7zj.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </Box>  
        </Flex>

        {/* Our features section */}

        <Box bg="#ffffff" width="100vw" minH="50vh" px={{base:"30px", md:"50px",lg:"100px"}} py={10} mb={10}>
          <Heading
            fontFamily="'Clash Grotesk', sans-serif"
            fontSize="56px"
            fontWeight="700"
            mb={5}
          >
            Our Features
          </Heading>

          <Text
            fontFamily="'Inter', sans-serif"
            fontSize="20px"
            fontWeight="400"
            mb={5}
          >
            {/* We have distinct features and benefits that m
           ake our platform the best for readers and authors. */}
          </Text>

          <Flex justify="space-between" my={10} wrap="wrap" direction={{base:"column", md:"row"}}>
            <FeatureCard
              icon={<MdOutlineEnhancedEncryption />}
              title="Book encryption"
              cont="Through secure means, we solve the problem of e-book piracy, plagiarism, and loss of data or assets."
              mb={{base:"30px", "2xl":0}}
              w="100%"
            />

            <FeatureCard
              icon={<GiReceiveMoney />}
              title="Read to earn"
              cont="In addition to reading for knowledge, earn tokens and royalties for your reviews and comments on a book."
              mb={{base:"30px", "2xl":0}}
              w="100%"
            />

            <FeatureCard
              icon={<BiPurchaseTag />}
              title="Ease of purchase"
              cont="Purchase books freely and conveniently on the blockchain with a few steps from the comfort of your home."
              mb={{base:"30px", "2xl":0}}
              w="100%"
            />

            <FeatureCard
              icon={<FaPeopleArrows />}
              title="Community"
              cont="We provide a captivating community where readers and authors can interact, and connect with each other."
              mb={{base:"30px", "2xl":0}}
              w="100%"
            />
          </Flex>
        </Box>

        {/* Goals section */}
        <Box py={10} px={{base:"30px", sm:"80px", md:"100px"}} minH="50vh" textAlign="center" pos="relative">
          <Book
            className="rotate-in-center"
            style={{
              position: 'absolute',
              top: '-40px',
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
          <Flex justify="space-between" mt={10} direction={{base:"column", md:"row"}}>
            <GoalCard
              title="For Authors"
              cont="Connect with an extensive global platform that grants access to potential readers and buyers, which would promote your creative work."
            >
              <Avatar1 />
            </GoalCard>
            <GoalCard
              title="For Readers"
              cont="Get access to various books for free while connecting, relating, and discussing with other readers on book reviews."
            >
              <Avatar2 />
            </GoalCard>
          </Flex>
        </Box>

        {/* Divider section */}
        <Box my={5} px="20%">
          <Divider />
        </Box>

        {/*  How it works section */}
        <Box my="100px" px={{base:"30px", sm:"80px", md:"100px"}}>
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

        {/* <Footer /> */}
        {/* <Preloader /> */}
      </Box>
    </>
  )
}

Home.getLayout = getLayout
export default Home
