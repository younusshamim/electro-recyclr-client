import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import userImage from "../../../assets/user.png";

const ImageNameCard = ({ img, name }) => {
  return (
    <HStack>
      <Image
        src={img ? img : userImage}
        alt={name}
        w="50px"
        h="50px"
        objectFit="cover"
        borderRadius="lg"
        padding={!img && "5px"}
      />
      <Text>{name}</Text>
    </HStack>
  );
};

export default ImageNameCard;
