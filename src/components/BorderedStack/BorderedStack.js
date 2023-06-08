import React from "react";
import { Stack } from "@chakra-ui/react";

const BorderedStack = ({ children }) => {
  return (
    <Stack borderWidth="1px" borderColor="gray.100" p="5" borderRadius="md">
      {children}
    </Stack>
  );
};

export default BorderedStack;
