import React from 'react'
import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Heading,
	Input,
	InputRightElement,
    InputGroup,
} from '@chakra-ui/react'
const Hero = () => {
	return (
		<Box
			my={5}
			maxW={'8xl'}
			minH={'300px'}
			mx='auto'
			bg='red'
			px={{ base: 4 }}
			backgroundImage="url('https://cdn.pixabay.com/photo/2023/07/25/02/00/terraces-8148062_1280.jpg')">
            
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
						<Button bg="violet" borderRadius={"30px"}>Szukaj
						</Button>
					</InputRightElement>
				</InputGroup>
			</Box>
		</Box>
	)
}

export default Hero
