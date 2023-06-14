import React from "react";
import { FormControl, FormLabel, Text, Textarea } from "@chakra-ui/react";

const TextArea = ({
  handleForm,
  label,
  name,
  rows,
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
      <Textarea
        rows={rows}
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

export default TextArea;
