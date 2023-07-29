import React, { useState } from "react";
import { Flex, Grid, Heading, Stack, Button } from "@chakra-ui/react";
import Product from "../../Shared/Product/Product";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { onGetProducts } from "../../../services/product-services";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import BeatLoading from "../../../components/Loader/BeatLoading";

const RecentProducts = () => {
  // query
  const queries = `page=0&size=8`;
  const { data, isLoading, error } = useQuery(
    [["products", queries], queries],
    () => onGetProducts(queries)
  );
  const productList = data?.data?.products;

  return (
    <Stack p={{ base: "20px 10px 10px 10px", md: "25px 120px" }}>
      <Flex justify="space-between" align="center" mb="10px">
        <Heading fontSize={{ base: "20px", md: "26px" }}>
          Recent Products
        </Heading>

        <Link to="/products">
          <Button size="sm">See More</Button>
        </Link>
      </Flex>

      {isLoading ? (
        <BeatLoading />
      ) : error ? (
        <ErrorMessage error={error.message} />
      ) : productList?.length === 0 ? (
        <ErrorMessage error="No Data Found" />
      ) : (
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          columnGap="4"
          rowGap={{ base: 6, md: 8 }}
        >
          {productList.map((product, i) => (
            <Product product={product} key={i} />
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default RecentProducts;
