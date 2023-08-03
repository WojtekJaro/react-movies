import React, { useEffect, useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import { useParams } from "react-router-dom";
import useFetchMovies from "../hooks/useFetchMovies";
import axios from "axios";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { ColorExtractor } from "react-color-extractor";


const MoviePage = () => {
  const params = useParams();
  const itemid = params.url.replace(/\D/g, "");
  const [movie, setMovie] = useState();
  const [colors, setColors] = useState([])


  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetColors = (clr) => {
	console.log(clr)
   setColors(clr.map((c) => c.join(", ")))
  }

  console.log(colors)

  const getMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${itemid}?api_key=${process.env.REACT_APP_API_KEY}&language=pl`
      );
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (!movie && colors.length === 0) {
    return;
  }
  console.log(colors);

  return (
    <MainTemplate>

         <ColorExtractor getColors={handleGetColors}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            style={{ display:"none" }}
            alt=""
          />
        </ColorExtractor>
		
      <Box
	  bgSize="cover"
	    bgPosition="center"
        bgImage={`linear-gradient(to right, rgb(${colors[0]}) calc((50vw - 170px) - 340px), rgb(${colors[1]}) 50%, rgb(${colors[0]}) 100%),url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}
        maxWidth={"100%"}
        my={5}
        py={{ base: 9 }}
        px={{ base: 4 }}
      >
        <Grid
          color="white"
          maxW={"8xl"}
          mx="auto"
          templateColumns="300px 1fr 1fr"
          gap={10}
        >
          <GridItem rowSpan={2}>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="Dan Abramov"
			  borderRadius={8}
            />
          </GridItem>

          <GridItem colSpan={1}>

            <Heading>{movie.title}</Heading>
            <Text>
              {movie.release_date} ({movie.original_language.toUpperCase()})
              &#x2022;{" "}
              {movie.genres.map((item) => (
                <span>{item.name}, </span>
              ))}{" "}
              &#x2022; {movie.runtime}{" "}
            </Text>

            <Flex mt="30px" align="center" size="100px" gap={3}>
              <CircularProgress
                bg="gray.900"
                borderRadius="50%"
                value={movie.vote_average * 10}
                color="green.400"
                size="60px"
              >
                <CircularProgressLabel
                  color="white"
                  fontWeight={700}
                  fontSize={18}
                >
                  {movie.vote_average.toFixed(1)}
                </CircularProgressLabel>
              </CircularProgress>
              <Text fontWeight={700} textAlign="center">
                Ocena użytkowników
              </Text>
            </Flex>
          </GridItem>

          <GridItem colSpan={2}>
            <Text fontSize={22} fontWeight={700}>
              Opis
            </Text>
            <Text>{movie.overview}</Text>
          </GridItem>
        </Grid>
      </Box>
    </MainTemplate>
  );
};

export default MoviePage;
