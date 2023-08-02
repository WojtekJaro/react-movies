import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Movies = ({ items, title }) => {
  return (
    <Box my={5} maxW={"8xl"} mx="auto" px={{ base: 4 }}>
      <Heading mb={4} mt={5} as="h2" size="lg" noOfLines={1}>
        {title}
      </Heading>

      <Box position="relative">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 1500,
          }}
          speed={1500}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2.3,
            },
            768: {
              slidesPerView: 4.3,
            },
            1024: {
              slidesPerView: 7.5,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/movie/${item.title.replaceAll(" ", "-").toLowerCase()}-${item.id}`}>
                <Box position={"relative"} bg="white">
                  <Image
                    borderRadius={15}
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt="Dan Abramov"
                  />

                  <CircularProgress
                    position={"absolute"}
                    bg="gray.900"
                    borderRadius="50%"
                    bottom="50px"
                    left="10px"
                    value={item.vote_average * 10}
                    color="green.400"
                    size="40px"
                  >
                    <CircularProgressLabel
                      color="white"
                      fontWeight={700}
                      fontSize={13}
                    >
                      {item.vote_average}
                    </CircularProgressLabel>
                  </CircularProgress>

                  <Heading mt={7} as="h2" size="sm" noOfLines={1}>
                    {item.title}
                  </Heading>
                  <Text color="gray.400" fontSize="12px">
                    {item.release_date}
                  </Text>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          bg="white"
          width="40px"
          height="110%"
          position="absolute"
          top="-20px"
          right={-10}
          zIndex={1}
          boxShadow="0 0 35px 40px white"
        />
      </Box>
    </Box>
  );
};

export default Movies;
