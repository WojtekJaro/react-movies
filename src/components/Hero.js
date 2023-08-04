import React, { useEffect, useRef } from "react";
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
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const listRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setActiveIndex(null);
        setResults([])
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Scroll to the active item when it changes
    if (listRef.current && activeIndex !== null) {
      const activeItem = listRef.current.children[activeIndex];
      const containerRect = listRef.current.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const scrollOffset = itemRect.bottom - containerRect.bottom;
      listRef.current.scrollTop += scrollOffset;
    }

    if (activeIndex > 0) {
      listRef.current.focus();
    }

  }, [activeIndex]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      console.log(activeIndex);
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      console.log(activeIndex);
      setActiveIndex((prevIndex) =>
        Math.min(prevIndex + 1, results.length - 1)
      );
    } else if (event.key === "Enter") {
      const clicked = results[activeIndex];
      navigate(
        `/movie/${clicked.title.replaceAll(" ", "-").toLowerCase()}-${
          clicked.id
        }`
      );
    }
  };

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setActiveIndex(0);
      return;
    }
    searchMovies();
  }, [query]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=pl`
      );
      setResults(response.data.results);
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
            onKeyDown={handleKeyDown}
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

          {results.length > 0  ? (
            <UnorderedList
              ref={listRef}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              outline="none"
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
              height={350}
              overflowY="scroll"
              zIndex="1000"
            >
              {results.map((item, index) => (
                <MovieListItem
                  //  onKeyDown={(e)=>handleKeyDown(e,item)}
                  index={index}
                  active={activeIndex}
                  key={item.id}
                  movie={item}
                />
              ))}
            </UnorderedList>
          ) : null}
        </InputGroup>
      </Box>
    </Box>
  );
};

export default Hero;
