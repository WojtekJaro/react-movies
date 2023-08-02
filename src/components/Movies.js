import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Movies = ({items}) => {
  console.log(items)
  return (
    <Box maxW={"8xl"} mx="auto" px={{ base: 4 }}>
      <SimpleGrid columns={{sm: 2, md: 3, lg:4, xl:5}} spacing={10}>
        {items.map((item) => (
            <Box key={item.id} bg="tomato">
                {item.title}
            </Box>
        ))}
        

      </SimpleGrid>
    </Box>
  );
};

export default Movies;
