import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MovieListItem = ({ movie, active, index, onKeyDown }) => {
  return (
    <Link
      onKeyDown={onKeyDown}
      to={`/movie/${movie.title.replaceAll(" ", "-").toLowerCase()}-${
        movie.id
      }`}
    >
      <Card
        onKeyDown={() => console.log("halo")}
        direction={{ base: "row", sm: "row" }}
        overflow="hidden"
        bg={active === index ? "gray.200" : "white"}
        variant="outline"
        my="8px"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "50px", sm: "50px" }}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="sm">{movie.title}</Heading>
            <Text fontSize="12px">
              {" "}
              {movie.release_date} ({movie.original_language.toUpperCase()})
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </Link>
  );
};

export default MovieListItem;
