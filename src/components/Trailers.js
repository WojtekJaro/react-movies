import { AspectRatio, Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const Trailers = ({ items }) => {
	return (
		<Box>
			{items.map(item => (
				<Grid templateColumns='repeat(5, 1fr)' gap={6}>
					<GridItem w='100%' h='10' bg='blue.500'>
						<AspectRatio maxW='560px' ratio={1}>
							<iframe title='naruto' src={`https://www.youtube.com/embed/${item.key}`} allowFullScreen />
						</AspectRatio>
					</GridItem>
          
				</Grid>
			))}
		</Box>
	)
}

export default Trailers
