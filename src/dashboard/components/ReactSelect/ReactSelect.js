import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import Select from "react-select";

const ReactSelect = ({
  name,
  label,
  placeholder,
  options,
  value,
  setValue,
  handleForm,
  validations,
  Controller,
  ...rest
}) => {
  const {
    register,
    control,
    formState: { errors },
  } = handleForm;

  const customStyle = {};

  return (
    <VStack align="flex-start">
      <Text fontWeight="semibold">{label}</Text>

      <Box w="100%">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Select
              {...field}
              className="basic-single"
              options={options}
              value={value}
              onChange={setValue}
            />
          )}
        />

        {errors[name] && (
          <Text color="negative.900" fontSize="14px">
            {errors[name].message}
          </Text>
        )}
      </Box>
    </VStack>
  );
};

export default ReactSelect;
