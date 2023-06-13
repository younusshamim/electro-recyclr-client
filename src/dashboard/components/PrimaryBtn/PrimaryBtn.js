import { Button } from "@chakra-ui/react";
import React from "react";

const PrimaryBtn = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      w="fit-content"
      color="white"
      bg="primary.900"
      _hover={{ bg: "primary.800" }}
      _active={{ bg: "primary.900" }}
    >
      {children}
    </Button>
  );
};

export default PrimaryBtn;
