import React, { useEffect } from 'react'
import {
	Box,
	Button,

	Heading,
	Input,
	InputRightElement,
    InputGroup,
} from '@chakra-ui/react'
import heroImage from '../assets/actors1.jpg'
import { useState } from 'react'
import axios from 'axios'

const Hero = () => {

	const [results, setResults] = useState([])
	const [query, setQuery] = useState("");


	useEffect(()=>{
      if(!query) {
		setQuery([])
	  } 
	  searchMovies()
	},[query])

	const searchMovies = async () => {
     const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`)
	 setResults(response.data.results)
	}


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
					<Input onChange={(e)=>setQuery(e.target.value)} pr='4.5rem' bg="white" placeholder='Szukaj filmu, serialu, osoby...' borderRadius={"30px"}/>
					<InputRightElement width='4.5rem'>
						<Button bg="gray.800" m={1} height="80%" fontSize="14px" color="white" borderRadius={"30px"}>Szukaj
						</Button>
					</InputRightElement>
					{results.map((item) => <li>{item.title}</li>)}
				</InputGroup>
			</Box>
		</Box>
	)
}

export default Hero
