import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { useProductsFilter } from "../../../contexts/ProductsFilterProvider";

const Pagination = ({ pages }) => {
  // filter contxt
  const { filterOptions, setFilterOptions } = useProductsFilter();

  return (
    <HStack justify="center" py="12">
      {[...Array(pages).keys()].map((number) => (
        <Box
          key={number}
          bg={filterOptions.page == number ? "black" : "gray.100"}
          color={filterOptions.page == number ? "white" : null}
          p="5px 15px"
          borderRadius="md"
          fontWeight="semibold"
          cursor="pointer"
          onClick={() => setFilterOptions({ ...filterOptions, page: number })}
        >
          {number + 1}
        </Box>
      ))}
    </HStack>
  );
};

export default Pagination;
