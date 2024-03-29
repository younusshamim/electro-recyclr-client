import React from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      bg="orange.50"
      h="400px"
      m={{ base: "25px 10px 25px 10px", md: "40px 120px 25px 120px" }}
      p="5"
      borderRadius="2xl"
      textAlign="center"
    >
      <Heading fontSize={{ base: "32px", md: "40px" }} mb="10px">
        Reduce, Reuse, and Revive with <br /> ElectroRecyclr
      </Heading>
      <Text fontSize="18px" mb="5">
        Your One-Stop Shop for Quality Second-Hand Electronics!
      </Text>

      <Button
        textTransform="uppercase"
        fontWeight="bold"
        p={"25px 20px" }
        fontSize={{ base: "14px", md: "16px" }}
        color="white"
        bg="black"
        _hover={{ bg: "black" }}
        _active={{ bg: "gray.700" }}
        onClick={() => navigate("/dashboard/add-product")}
      >
        Start Selling
      </Button>
    </Flex>
  );
};

export default Banner;
