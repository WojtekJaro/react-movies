import React from "react";
import MainTemplate from "../templates/MainTemplate";
import useFetchMovies from "../hooks/useFetchMovies";
import Movies from "../components/Movies";
import Hero from "../components/Hero";

const HomePage = () => {
  const popular = useFetchMovies("popular");
  const playing = useFetchMovies("now_playing");

  console.log(playing.data);

  return (
    
    <MainTemplate>
        <Hero></Hero>
       <Movies title="Najpopularniejsze" items={popular.data}/>
    </MainTemplate>
  );
};

export default HomePage;
