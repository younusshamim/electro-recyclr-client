import React from "react";
import { Grid, Stack } from "@chakra-ui/react";
import ProductList from "../../../data/products";
import Product from "../../Shared/Product/Product";
import FilterOptions from "../FilterOptions/FilterOptions";
import Pagination from "../Pagination/Pagination";

const Products = () => {
  return (
    <Stack p="50px 120px 25px 120px">
      <FilterOptions />

      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        columnGap="4"
        rowGap={{ base: 6, md: 8 }}
        pt="5"
      >
        {ProductList.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </Grid>
      <Pagination />
    </Stack>
  );
};

export default Products;
