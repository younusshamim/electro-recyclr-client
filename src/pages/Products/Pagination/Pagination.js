import { Box, HStack } from "@chakra-ui/react";
import React from "react";

const Pagination = () => {
  return (
    <HStack justify="center" py="12">
      <Box
        bg="gray.100"
        p="5px 15px"
        borderRadius="md"
        fontWeight="semibold"
        cursor="pointer"
      >
        1
      </Box>
      <Box
        bg="black"
        color="white"
        p="5px 15px"
        borderRadius="md"
        fontWeight="semibold"
        cursor="pointer"
      >
        2
      </Box>
      <Box
        bg="gray.100"
        p="5px 15px"
        borderRadius="md"
        fontWeight="semibold"
        cursor="pointer"
      >
        3
      </Box>
      <Box
        bg="gray.100"
        p="5px 15px"
        borderRadius="md"
        fontWeight="semibold"
        cursor="pointer"
      >
        4
      </Box>
    </HStack>
  );
};

export default Pagination;
