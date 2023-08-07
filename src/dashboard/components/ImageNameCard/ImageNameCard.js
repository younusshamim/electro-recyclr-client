import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import userImage from "../../../assets/user.png";

const ImageNameCard = ({
  img,
  name,
  borderRadius = "lg",
  w = "50px",
  h = "50px",
  gap,
}) => {
  return (
    <HStack gap={gap}>
      <Image
        src={img ? img : userImage}
        background="gray.200"
        alt={name}
        w={w}
        h={h}
        objectFit="cover"
        borderRadius={borderRadius}
        padding={!img && "5px"}
      />
      <Text>{name}</Text>
    </HStack>
  );
};

export default ImageNameCard;
