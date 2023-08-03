import React, { useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import heroImage from "../assets/actors1.jpg";
import { useState } from "react";
import axios from "axios";
import MovieListItem from "./MovieListItem";

const Hero = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    searchMovies();
  }, [query]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=pl`
      );
      setResults(response.data.results.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      my={5}
	  position="relative"
	  zIndex="100"
      maxW={"8xl"}
      minH={"400px"}
      mx="auto"
      px={{ base: 4 }}
      backgroundImage={`url(${heroImage})`}
    >
      <Box pt={20} pl={5}>
        <Heading color="white">Witaj</Heading>
        <Heading color="white" as="h3" size="md">
          Millions of movies, TV shows and people to discover. Expolre now.
        </Heading>
      </Box>
      <Box pt={10} pl={5}>
        <InputGroup size="md">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            pr="4.5rem"
            bg="white"
            placeholder="Szukaj filmu, serialu, osoby..."
            borderRadius={"30px"}
          />
          <InputRightElement width="4.5rem">
            <Button
              bg="gray.800"
              m={1}
              height="80%"
              fontSize="14px"
              color="white"
              borderRadius={"30px"}
            >
              Szukaj
            </Button>
          </InputRightElement>

          {results.length > 0 ? (
            <UnorderedList
              m={0}
              my={2}
              listStyleType="none"
              px="10px"
              py="20px"
              bg="white"
              left={0}
              top="40px"
              position="absolute"
              width="100%"
              zIndex="1000"
            >
              {results.map((item) => (
                <MovieListItem key={item.id} movie={item} />
              ))}
            </UnorderedList>
          ) : null}
        </InputGroup>
      </Box>
    </Box>
  );
};

export default Hero;
