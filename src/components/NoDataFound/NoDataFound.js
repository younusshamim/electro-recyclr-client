import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const NoDataFound = ({ msg = "No Data Found", h = "50vh" }) => {
  return (
    <Flex w="100%" h={h} align="center" justify="center">
      <Heading size="sm">{msg}</Heading>
    </Flex>
  );
};

export default NoDataFound;
