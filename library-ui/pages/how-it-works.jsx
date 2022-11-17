import { Heading, Text } from '@chakra-ui/react'
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { authorData, readerData } from '../utils/data/authorData'
import HowItWorksCard from '../components/Home/HowItWorksCard'

const tabNames = ['Authors', 'Readers']

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <Heading
        fontFamily="'Clash Grotesk', sans-serif"
        fontSize="56px"
        fontWeight="700"
        mb={5}
        textAlign="center"
      >
        How it works
      </Heading>
      <Text
        color="#6B7280"
        fontSize="20px"
        fontWeight="500"
        mb={5}
        textAlign="center"
        w="70%"
        mx="auto"
      >
        Earn with your articles and get discovered through the power of
        community and technology on Delibra.
      </Text>
      <Tabs
        variant="soft-rounded"
        defaultIndex={0}
        paddingTop={'30px'}
        paddingBottom={'20px'}
      >
        <TabList
          width="fit-content"
          mx="auto"
          background="#F3F4F6"
          borderRadius="66px"
          marginBottom={'30px'}
        >
          {tabNames.map((tab, index) => (
            <Tab
              key={index}
              color="#000000"
              fontSize="17px"
              fontWeight="600"
              _selected={{
                color: '#FFC2A1',
                background: '#281C36',
                boxShadow: 'none',
              }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid templateColumns="repeat(4, 1fr)" gap={5}>
              {authorData.map(({ id, step, content }) => (
                <GridItem key={id} w="100%">
                  <HowItWorksCard stepNumber={step} stepText={content} />
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid templateColumns="repeat(4, 1fr)" gap={5}>
              {readerData.map(({ id, step, content }) => (
                <GridItem key={id} w="100%">
                  <HowItWorksCard stepNumber={step} stepText={content} />
                </GridItem>
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default HowItWorks
