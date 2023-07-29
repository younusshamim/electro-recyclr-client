import { Box, HStack } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ page, setPage, pages }) => {
  return (
    <HStack justify="center" py="12">
      {[...Array(pages).keys()].map((number) => (
        <Box
          key={number}
          bg={page == number ? "black" : "gray.100"}
          color={page == number ? "white" : null}
          p="5px 15px"
          borderRadius="md"
          fontWeight="semibold"
          cursor="pointer"
          onClick={() => setPage(number)}
        >
          {number + 1}
        </Box>
      ))}
    </HStack>
  );
};

export default Pagination;
