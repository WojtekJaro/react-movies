import React from 'react'
import MainTemplate from '../templates/MainTemplate'
import { useParams } from 'react-router-dom'
import useFetchMovies from '../hooks/useFetchMovies'

const MoviePage = () => {
	const params = useParams()
	const itemid = params.url.replace(/\D/g, '')
	const itemids = useFetchMovies(itemid);
	console.log(itemids)

  
	return (
		<MainTemplate>
			<h1>Movie</h1>
		</MainTemplate>
	)
}

export default MoviePage
