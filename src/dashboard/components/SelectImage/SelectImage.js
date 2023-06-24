import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiUpload } from "react-icons/bi";

const SelectImage = ({
  label,
  name,
  id,
  handleForm,
  validations,
  handleChange,
  btnText,
  btnRest,
  inputRest,
  errorRest,
}) => {
  const {
    register,
    formState: { errors },
  } = handleForm;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      {/* Hidden file input */}
      <Input
        display="none"
        type="file"
        id={id}
        name={name}
        multiple
        {...register(name, {
          validate: validations,
          onChange: handleChange,
        })}
        {...inputRest}
      />

      {/* Upload button */}
      <Button variant="outline" htmlFor={id} as="label" {...btnRest}>
        <Text mr="10px" fontWeight="normal">
          {btnText}
        </Text>
        <Box fontSize="22px">
          <BiUpload />
        </Box>
      </Button>

      {errors.images && (
        <Text color="negative.900" fontSize="14px" {...errorRest}>
          {errors.images.message}
        </Text>
      )}
    </FormControl>
  );
};

export default SelectImage;
