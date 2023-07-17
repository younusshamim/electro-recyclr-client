import React from "react";
import { Box, Grid, Heading, Image, Stack } from "@chakra-ui/react";
import Slider from "react-slick";
import PrevArrow from "../../../components/PrevArrow/PrevArrow";
import NextArrow from "../../../components/NextArrow/NextArrow";
import { onGetCategories } from "../../../services/category-services";
import { useQuery } from "react-query";
import BeatLoading from "../../../components/Loader/BeatLoading";

const Categories = () => {
  const { data, isLoading } = useQuery("getCategories", onGetCategories);
  const categories = data?.data;

  return (
    <Stack p={{ base: "10px 5px", md: "25px 120px" }}>
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
        <Grid templateColumns="repeat(9, 1fr)" gap="4">
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
            >
              <Image
                src={item.img}
                alt={item.name}
                width="70px"
                height="70px"
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
