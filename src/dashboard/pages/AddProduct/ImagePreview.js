import React from "react";
import { imgFileToUrl } from "../../utils/files";
import { Box, Flex, Image, Input, VStack } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { BiImageAdd } from "react-icons/bi";

const ImagePreview = ({ selectedImages, handleFileRemove, handleChange }) => {
  return (
    <>
      {selectedImages?.map((file, index) => {
        const url = imgFileToUrl(file);

        return (
          <Box position="relative" key={index}>
            <Image
              src={url}
              w="80px"
              h="80px"
              objectFit="cover"
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
              onClick={() => handleFileRemove(index)}
            >
              <IoMdClose />
            </Box>
          </Box>
        );
      })}

      {selectedImages.length > 0 && (
        <>
          <Input
            display="none"
            type="file"
            id="addMoreImage"
            name="addMoreImage"
            onChange={handleChange}
          />
          <Flex
            w="80px"
            h="80px"
            borderRadius="md"
            bg="gray.50"
            p="10px"
            htmlFor="addMoreImage"
            as="label"
            cursor="pointer"
            justifyContent="center"
            alignItems="center"
          >
            <BiImageAdd fontSize="30px" />
          </Flex>
        </>
      )}
    </>
  );
};

export default ImagePreview;
