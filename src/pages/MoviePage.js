import React, { useEffect, useState } from 'react'
import MainTemplate from '../templates/MainTemplate'
import { useParams } from 'react-router-dom'
import useFetchMovies from '../hooks/useFetchMovies'
import axios from 'axios'
import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'

const MoviePage = () => {
	const params = useParams()
	const itemid = params.url.replace(/\D/g, '')
	const [movie, setMovie] = useState()

	useEffect(() => {
		getMovie()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const getMovie = async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${itemid}?api_key=${process.env.REACT_APP_API_KEY}`
			)
			setMovie(response.data)
		} catch (error) {
			console.log(error)
		}
	}
	if (!movie) {
		return
	}
	console.log(movie)

	return (
		<MainTemplate>
			<Box my={5} maxW={"8xl"} mx="auto" px={{ base: 4 }}>
			<Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
				<GridItem rowSpan={2}>
					<Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='Dan Abramov' />
				</GridItem>

				<GridItem colSpan={2}>
					<Heading>{movie.title}</Heading>
					<Text>{movie.release_date}</Text>
					<Text>{movie.genres.map(item => item.name)}</Text>
					<Text>{movie.original_language}</Text>
				</GridItem>

				<GridItem colSpan={3}>
					<Text>{movie.runtime}</Text>
					<Text>{movie.vote_average}</Text>
					<Text>{movie.overview}</Text>
					<Text>{movie.overview}</Text>
				</GridItem>
			</Grid>

			</Box>
		</MainTemplate>
	)
}

export default MoviePage
