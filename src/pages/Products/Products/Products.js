import React, { useState } from "react";
import { Grid, Stack } from "@chakra-ui/react";
import ProductList from "../../../data/products";
import Product from "../../Shared/Product/Product";
import FilterOptions from "../FilterOptions/FilterOptions";
import Pagination from "../Pagination/Pagination";
import { onGetProducts } from "../../../services/product-services";
import { useQuery } from "react-query";
import BeatLoading from "../../../components/Loader/BeatLoading";

const Products = () => {
  // states
  const [selectedDistrict, setSelectedDistrict] = useState("Dhaka");
  const [categoryId, setCategoryId] = useState("64895a6801d9a76e5f4c701e");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(8);
  // query
  const queries = `district=${selectedDistrict}&categoryId=${categoryId}&page=${page}&size=${size}`;
  // data
  const { data, isLoading } = useQuery(["products", queries], () =>
    onGetProducts(queries)
  );
  const products = data?.data;

  if (isLoading) return <BeatLoading />;

  return (
    <Stack p="50px 120px 25px 120px">
      <FilterOptions />

      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        columnGap="4"
        rowGap={{ base: 6, md: 8 }}
        pt="5"
      >
        {products.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </Grid>
      <Pagination />
    </Stack>
  );
};

export default Products;
