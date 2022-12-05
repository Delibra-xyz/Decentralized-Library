import { Heading, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import RecommendedBookCard from '../components/Dashboard/RecommendedBookCard'

export default function Recommendation(){
    return (
        <>
            <Heading
                pt='32px'
                color='#1F2937'
                fontSize='20px'
                fontWeight={700}
                textAlign='center'
                fontFamily='Inter'
                letterSpacing='-0.02em'
            >
                Recommended Books
            </Heading>
            <Text color='#9CA3AF' fontFamily='DM Sans' fontSize='14px' pt={1} textAlign='center' letterSpacing='-0.02em'>
                We will help make better book recommendations and tailor what you use in your updates feed.
            </Text>
            <Flex flexWrap="wrap" w="80%" mx="auto" my={5}>
                <RecommendedBookCard w="45%" id="1"/>
                <RecommendedBookCard w="45%" id="2"/>
                <RecommendedBookCard w="45%" id="3"/>
                <RecommendedBookCard w="45%" id="4"/>
            </Flex>
        </>
    )
}