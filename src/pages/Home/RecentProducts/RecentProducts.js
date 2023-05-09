import React, { useState } from "react";
import { Flex, Grid, Heading, Stack, Button } from "@chakra-ui/react";
import Product from "../../Shared/Product/Product";
import { MdTune } from "react-icons/md";
import { Link } from "react-router-dom";
import ProductList from "../../../data/products";

const AllRestaurant = () => {
  const [activeTab, setActiveTab] = useState("Rating");

  // const filterItemList = [
  //   { id: 2, name: "Delivery Time" },
  //   { id: 3, name: "Rating" },
  //   { id: 4, name: "Cost: Low To High" },
  //   { id: 5, name: "Cost: High To Low" },
  // ];

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

      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        columnGap="4"
        rowGap={{ base: 6, md: 8 }}
      >
        {ProductList.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </Grid>
    </Stack>
  );
};

export default AllRestaurant;
