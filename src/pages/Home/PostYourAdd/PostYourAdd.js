import React from "react";
import { Button, Flex, HStack, Heading, Image, Stack } from "@chakra-ui/react";
import sellImg from "../../../assets/sell-image.png";
import { useNavigate } from "react-router-dom";

const PostYourAdd = () => {
  const navigate = useNavigate();

  return (
    <HStack
      p="50px 10px"
      m={{base:"25px 10px", md:"25px 120px"}}
      bg="orange.50"
      borderRadius="2xl"
      align="center"
      justify="center"
      gap="10"
      flexDirection={{base:'column', md:'row'}}
    >
      <Image src={sellImg} alt="sell image" w="500px" />

      <Flex direction="column">
        <Heading textTransform="uppercase"  mb="7" fontSize={{ base: "24px", md: "27px" }}>
          Do you have something <br /> to sell? Post your ad.
        </Heading>
        <Button
          textTransform="uppercase"
          fontWeight="bold"
          p="22px 15px"
          w="fit-content"
          color="white"
          bg="black"
          _hover={{ bg: "black" }}
          _active={{ bg: "gray.700" }}
          onClick={() => navigate("/dashboard/add-product")}
        >
          Post Your Ad
        </Button>
      </Flex>
    </HStack>
  );
};

export default PostYourAdd;
