import React from "react";
import { Button, Flex, HStack, Heading, Image, Stack } from "@chakra-ui/react";
import sellImg from "../../../assets/sell-image.png";

const PostYourAdd = () => {
  return (
    <HStack
      p="10px"
      m="25px 120px"
      bg="gray.50"
      borderRadius="2xl"
      align="center"
      justify="center"
      gap="10"
    >
      <Image src={sellImg} alt="sell image" w="300px" />

      <Flex w="50%" direction="column">
        <Heading textTransform="uppercase" fontSize="30px" mb="5">
          Do you have something <br /> to sell? Post your ad.
        </Heading>
        <Button
          textTransform="uppercase"
          fontWeight="bold"
          p="25px 20px"
          w="fit-content"
          color="white"
          bg="black"
          _hover={{ bg: "black" }}
          _active={{ bg: "gray.700" }}
        >
          Post Your Ad
        </Button>
      </Flex>
    </HStack>
  );
};

export default PostYourAdd;
