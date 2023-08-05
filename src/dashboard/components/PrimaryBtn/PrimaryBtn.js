import { Button } from "@chakra-ui/react";
import React from "react";

const PrimaryBtn = ({ children, w = "fit-content", ...rest }) => {
  return (
    <Button
      {...rest}
      w={w}
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
