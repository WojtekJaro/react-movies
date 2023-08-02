import React from "react";
import MainTemplate from "../templates/MainTemplate";
import useFetchMovies from "../hooks/useFetchMovies";
import Movies from "../components/Movies";

const HomePage = () => {
  const popular = useFetchMovies("popular");
  const playing = useFetchMovies("now_playing");

  console.log(playing.data);

  return (
    <MainTemplate>
       <Movies title="Najpopularniejsze" items={popular.data}/>
    </MainTemplate>
  );
};

export default HomePage;
