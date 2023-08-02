import { AspectRatio, Box } from "@chakra-ui/react";
import React from "react";

const Trailers = ({ items }) => {
  return (
    <Box>
      {items.map((item) => (
        <AspectRatio maxW="560px" ratio={1}>
          <iframe
            title="naruto"
            src={`https://www.youtube.com/embed/${item.key}`}
            allowFullScreen
          />
        </AspectRatio>
      ))}
    </Box>
  );
};

export default Trailers;
