import React, { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const Images = ({ item }) => {
  const [displayImage, setdisplayImage] = useState(item.images[0]);

  return (
    <Flex direction="column" w="50%" mr="5">
      <Box mx="auto">
        <Image
          src={displayImage}
          alt={item.name}
          borderRadius="xl"
          h="400px"
          mb="4"
        />
      </Box>

      <Flex gap="5" justify="center">
        {item.images.map((img, i) => (
          <Box key={i} cursor="pointer" onClick={() => setdisplayImage(img)}>
            <Image
              src={img}
              alt=""
              w="100px"
              h="100px"
              objectFit="cover"
              borderRadius="xl"
              opacity={img !== displayImage && "60%"}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Images;
