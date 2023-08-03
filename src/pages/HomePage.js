import React, { useEffect, useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import useFetchMovies from "../hooks/useFetchMovies";
import Movies from "../components/Movies";
import Hero from "../components/Hero";
import axios from "axios";
import { AspectRatio } from "@chakra-ui/react";
import Trailers from "../components/Trailers";
import ActorPage from "./ActorPage";


const HomePage = () => {
  const popular = useFetchMovies("popular");
  const playing = useFetchMovies("now_playing");
  const upcoming = useFetchMovies("upcoming");

  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    if (upcoming.data.length === 0) return;
    const ids = upcoming.data.slice(0, 3).map((item) => item.id);

    (async function () {
      const movie1 = fetchVideos(ids[0]);
      const movie2 = fetchVideos(ids[1]);
      const movie3 = fetchVideos(ids[2]);
      const movieTrailers = await Promise.all([movie1, movie2, movie3]);
      setTrailers(movieTrailers);
    })();
  }, [upcoming.data]);

  const fetchVideos = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
      );
      return response.data.results[0] //.find(res => res.type === "Official Trailer");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(trailers);

  return (
    <MainTemplate>
      <Hero />
      <Movies autoplay title="Najpopularniejsze" items={popular.data} />
      <Movies title="Teraz grane" items={playing.data} />
      <Trailers items={trailers}/>
      <Movies title="Nadchodzące" items={upcoming.data} />
      
  

    </MainTemplate>
  );
};

export default HomePage;
