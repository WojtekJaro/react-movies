import React, { useEffect, useState } from 'react'
import MainTemplate from '../templates/MainTemplate'
import { useParams } from 'react-router-dom'
import useFetchMovies from '../hooks/useFetchMovies'
import axios from 'axios'

const MoviePage = () => {
	const params = useParams()
	const itemid = params.url.replace(/\D/g, '')
	const [movie, setMovie] = useState({})

	useEffect(()=>{
      getMovie()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])
	
	const getMovie = async () => {
		try {
			const response = await axios.get(`https://api.themoviedb.org/3/movie/${itemid}?api_key=${process.env.REACT_APP_API_KEY}`);
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
			<h1>test{movie.id}</h1>
		</MainTemplate>
	)
}

export default MoviePage
