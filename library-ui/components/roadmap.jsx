import { Heading, Text, Image, SimpleGrid } from '@chakra-ui/react'
import RoadmapStepper from './Home/RoadmapStepper'

const Roadmap = () => {
  return (
    <div className="roadmap">
      <Heading
        fontFamily="'Clash Grotesk', sans-serif"
        fontSize="56px"
        color="#FFFFFF"
        fontWeight="700"
        mb={5}
        textAlign="center"
      >
        Delibra Roadmap
      </Heading>
      <Text
        color="#E5E7EB"
        fontSize="20px"
        fontWeight="500"
        mb={5}
        textAlign="center"
        w="70%"
        mx="auto"
      >
        We have fascinating milestones to achieve, here is our project
        development phase.
      </Text>
      <RoadmapStepper />

      <div className="Footer-logo">
        <Heading
          fontFamily="'Clash Grotesk', sans-serif"
          fontSize="56px"
          color="#FFFFFF"
          fontWeight="700"
          mt={40}
          mb={20}
          textAlign="center"
        >
          Powered By
        </Heading>
        <SimpleGrid columns={5} spacing="40px">
          <Image
            src="https://res.cloudinary.com/polygontech/image/upload/f_auto,q_auto,dpr_2,w_44,h_44/Polygon_Hermez_efab9004dc"
            alt="Polygon zkEVM"
          />

          <Image
            boxSize="80px"
            src="https://avatars.githubusercontent.com/u/83147108?s=200&v=4"
            alt="Dan Abramov"
          />

          <Image
            boxSize="80px"
            objectFit="cover"
            src="https://www.rainbowkit.com/rainbow.svg"
            alt="Dan Abramov"
          />

          <Image
            boxSize="80px"
            objectFit="cover"
            src="https://pbs.twimg.com/profile_images/1494718825023127554/Kv_3FJUi_400x400.jpg"
            alt="Dan Abramov"
          />

          <Image
            width={200}
            src="https://moralis.io/wp-content/uploads/2022/05/Moralis-Logo-LightBG-Large.png"
            alt="Dan Abramov"
          />

          <Image
            width={200}
            ml={20}
            src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true"
            alt="Dan Abramov"
          />

          <Image
            width={200}
            ml={20}
            src="https://en.bitcoinwiki.org/upload/en/images/thumb/d/d5/Solidity.png/400px-Solidity.png"
            alt="Dan Abramov"
          />

          <Image
            width={200}
            ml={20}
            src="https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png"
            alt="Dan Abramov"
          />

          <Image
            width={150}
            ml={20}
            src="https://miro.medium.com/max/420/1*3jj5tQildSIyhl-RO6RLlA.png"
            alt="Dan Abramov"
          />
        </SimpleGrid>
      </div>
    </div>
  )
}

export default Roadmap
