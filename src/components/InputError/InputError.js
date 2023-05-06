import { Text } from "@chakra-ui/react";
import React from "react";

const InputError = ({ error, ...rest }) => {
  return (
    <Text color="negative.900" fontSize="14px" {...rest}>
      {error}
    </Text>
  );
};

export default InputError;
