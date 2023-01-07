import { Heading, Text, Flex, Image, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import RecommendedBookCard from '../components/Dashboard/RecommendedBookCard'

export default function Recommendation({books}){
    const [selected, setSelected] = useState([])

    useEffect(()=> {
        if(books.length > 4){
            setSelected(books.slice(0,4))
        } else {
            setSelected(books)
        }
    },[books])

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
            {books.length ===  0 ? 
            <Box w="80%" mx="auto" my="100px">
                <Image src='/StackOfBooks.png' alt='' margin='0 auto' />
                <Text fontSize='18px' color='#4B5563' textAlign='center' letterSpacing='-0.02em' fontFamily='DM Sans' py={5}>
                    Sorry, there are no recommendations based on your selected genre
                </Text>
            </Box> : 
            <Flex flexWrap="wrap" w="80%" mx="auto" my={5}>
                {selected.map(book => (
                    <RecommendedBookCard 
                        w="45%" 
                        id={book.id}
                        author={book.author}
                        title={book.title}
                        price={book.price}
                        image={`https://${book.bookCoverCid}.ipfs.w3s.link`}
                    />
                ))}
            </Flex>}
        </>
    )
}