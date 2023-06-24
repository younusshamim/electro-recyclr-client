import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";

const SingleImage = ({ url, index, handleRemove }) => {
  return (
    <Box position="relative">
      <Image
        src={url}
        w="80px"
        h="80px"
        borderRadius="md"
        bg="gray.50"
        p="10px"
      />
      <Box
        position="absolute"
        bg="primary.900"
        _hover={{ bg: "primary.800" }}
        _active={{ bg: "primary.900" }}
        color="white"
        borderRadius="50%"
        top="0"
        right="0"
        padding="1px"
        fontSize="14px"
        cursor="pointer"
        onClick={() => handleRemove(index)}
      >
        <IoMdClose />
      </Box>
    </Box>
  );
};

export default SingleImage;
