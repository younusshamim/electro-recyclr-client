import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const ErrorMessage = ({ error, h = "50vh" }) => {
  return (
    <Flex w="100%" h={h} align="center" justify="center">
      <Heading size="sm">{error}</Heading>
    </Flex>
  );
};

export default ErrorMessage;
