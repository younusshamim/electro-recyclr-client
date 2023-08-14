import React from "react";
import { Stack } from "@chakra-ui/react";

const BorderedStack = ({ children, ...rest }) => {
  return (
    <Stack
      w="full"
      borderWidth="1px"
      borderColor="gray.100"
      p="5"
      borderRadius="md"
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default BorderedStack;
