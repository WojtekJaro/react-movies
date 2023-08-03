import React from 'react'
import {
	Box,
	Button,

	Heading,
	Input,
	InputRightElement,
    InputGroup,
} from '@chakra-ui/react'
import heroImage from '../assets/actors1.jpg'

const Hero = () => {
	return (
		<Box
			my={5}
			maxW={'8xl'}
			minH={'400px'}
			mx='auto'
			px={{ base: 4 }}
			backgroundImage={`url(${heroImage})`}>
            
			<Box pt={20} pl={5} >
				<Heading color="white">Witaj</Heading>
				<Heading color="white" as='h3' size='md'>
					Millions of movies, TV shows and people to discover. Expolre now.
				</Heading>
			</Box>
			<Box pt={10} pl={5} >
				<InputGroup size='md' >
					<Input pr='4.5rem' bg="white" placeholder='Szukaj filmu, serialu, osoby...' borderRadius={"30px"}/>
					<InputRightElement width='4.5rem'>
						<Button bg="gray.800" m={1} height="80%" fontSize="14px" color="white" borderRadius={"30px"}>Szukaj
						</Button>
					</InputRightElement>
				</InputGroup>
			</Box>
		</Box>
	)
}

export default Hero
