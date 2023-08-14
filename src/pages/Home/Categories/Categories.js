import React from "react";
import { Box, Grid, Heading, Image, Stack } from "@chakra-ui/react";
import Slider from "react-slick";
import PrevArrow from "../../../components/PrevArrow/PrevArrow";
import NextArrow from "../../../components/NextArrow/NextArrow";
import { onGetCategories } from "../../../services/category-services";
import BeatLoading from "../../../components/Loader/BeatLoading";
import useCategories from "../../../hooks/useCategories";
import { useProductsFilter } from "../../../contexts/ProductsFilterProvider";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  // data
  const { data: categoryData, isLoading } = useCategories();
  const categories = categoryData?.data;
  // filter context
  const { filterOptions, setFilterOptions } = useProductsFilter();

  const handleClick = (categoryId) => {
    setFilterOptions({ ...filterOptions, categoryId: categoryId });
    navigate("/products");
  };

  return (
    <Stack m={{ base: "10px 10px", md: "25px 120px" }}>
      {/* <Heading
        fontWeight="semibold"
        mb={{ base: "10px", md: "15px" }}
        ml={{ base: "5px", md: "10px" }}
        fontSize={{ base: "20px", md: "26px" }}
      >
        Categories
      </Heading> */}

      {isLoading ? (
        <BeatLoading h="0" size={10} />
      ) : (
        <Grid templateColumns={{base:"repeat(4, 1fr)", md:"repeat(9, 1fr)"}} gap={{base:"2", md:"4"}}>
          {categories?.map((item) => (
            <Stack
              key={item._id}
              borderRadius="2xl"
              cursor="pointer"
              align="center"
              justify="center"
              p={{ base: "5px", md: "15px" }}
              borderStyle="solid"
              borderWidth="1px"
              borderColor="gray.200"
              transition="0.4s"
              _hover={{ boxShadow: "lg" }}
              onClick={() => handleClick(item._id)}
            >
              <Image
                src={item.img}
                alt={item.name}
                width={{base:'40px',md:"70px"}}
                height={{base:'40px',md:"70px"}}
                objectFit="cover"
              />

              <Heading
                fontSize={{ base: "13px", md: "15px" }}
                fontWeight="semibold"
                textAlign="center"
              >
                {item.name}
              </Heading>
            </Stack>
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default Categories;
