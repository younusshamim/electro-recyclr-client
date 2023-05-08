import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const InputField = ({
  label = "",
  value = "",
  placeholder = "",
  type = "text",
  disabled = false,
  size = "sm",
}) => {
  return (
    <FormControl>
      <FormLabel fontSize="14px">{label}</FormLabel>
      <Input
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        type={type}
        size={size}
      />
    </FormControl>
  );
};

export default InputField;
