import React from 'react'
import MainTemplate from '../templates/MainTemplate'
import useFetchMovies from '../hooks/useFetchMovies'


const HomePage = () => {

  const popular = useFetchMovies("popular");
  const playing = useFetchMovies("now_playing");

  console.log(popular.data)
  console.log(playing.data)

  return (
    <MainTemplate>
      {popular.loading ? <p>Wczytywanie</p> : null}
      <h1>Homepage</h1>     
    </MainTemplate>
  )
}

export default HomePage