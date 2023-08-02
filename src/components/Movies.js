import { Box, CircularProgress, CircularProgressLabel, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Movies = ({ items }) => {
	console.log(items)
	return (
		<Box maxW={'8xl'} mx='auto' px={{ base: 4 }}>
			<SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} spacing={10}>
				{items.map(item => (
					<Box key={item.id} bg='white'>
						<Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt='Dan Abramov' />


						<CircularProgress value={item.vote_average*10} color='green.400'>
							<CircularProgressLabel>{item.vote_average}</CircularProgressLabel>
						</CircularProgress>

						<Heading as='h2' size='lg' noOfLines={1}>
							{item.title}
						</Heading>
						<Heading as='p' size='xs' noOfLines={1}>
							{item.release_date}
						</Heading>
					</Box>
				))}
			</SimpleGrid>
		</Box>
	)
}

export default Movies
