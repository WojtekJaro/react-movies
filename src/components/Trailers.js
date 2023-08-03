import { AspectRatio, Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

const Trailers = ({ items }) => {
  return (
    <Box bg="blue.600" py="40px" my="70px">
      <Box maxW={"8xl"} mx="auto" px={{ base: 4 }}>
        <Heading color="white" mb={4}  as="h2" size="lg" noOfLines={1}>
          Najnowsze zwiastuny
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {items.map((item) => (
            <GridItem bg="blue.100">
              <AspectRatio maxW="560px" ratio={16 / 9}>
                <iframe
                  title="naruto"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  allowFullScreen
                />
              </AspectRatio>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Trailers;
