import React from "react";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

const TextInput = ({
  handleForm,
  label,
  type,
  name,
  placeholder,
  validations,
  controlRest,
  inputRest,
  errorRest,
}) => {
  const {
    register,
    formState: { errors },
  } = handleForm;

  return (
    <FormControl {...controlRest}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(name, validations)}
        {...inputRest}
      />

      {errors[name] && (
        <Text color="negative.900" fontSize="14px" {...errorRest}>
          {errors[name].message}
        </Text>
      )}
    </FormControl>
  );
};

export default TextInput;
