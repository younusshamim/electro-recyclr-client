import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Box, Flex } from "@chakra-ui/react";

const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <Flex
      align="center"
      justify="center"
      fontSize="22px"
      onClick={onClick}
      h={{ base: "20px", md: "25px" }}
      w={{ base: "20px", md: "25px" }}
      borderRadius="50%"
      position="absolute"
      bottom="0"
      top="0"
      marginY="auto"
      left={{ base: "0px", md: "-25px" }}
      cursor="pointer"
      color="white"
      bg="brand.200"
      _hover={{ bg: "brand.400" }}
      _active={{ bg: "brand.500" }}
      transition="0.4s"
      zIndex="9"
    >
      <MdKeyboardArrowLeft />
    </Flex>
  );
};

export default PrevArrow;
