import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import ReactSelectt from "react-select";
import { Controller } from "react-hook-form";

const ReactSelect = ({
  label,
  name,
  placeholder,
  options,
  handleForm,
  validations,
  value,
  setValue,
  controlRest,
  inputRest,
  errorRest,
}) => {
  const {
    register,
    control,
    formState: { errors },
  } = handleForm;

  const customStyle = {};

  if (setValue) {
    return (
      <FormControl {...controlRest}>
        <FormLabel>{label}</FormLabel>
        <Select
          {...register(name, validations)}
          {...inputRest}
          placeholder={placeholder}
        >
          {options.map(({ value, label }) => {
            return (
              <option value={value} key={value}>
                {label}
              </option>
            );
          })}
        </Select>

        {errors[name] && (
          <Text color="negative.900" fontSize="14px" {...errorRest}>
            {errors[name].message}
          </Text>
        )}
      </FormControl>
    );
  } else {
    return (
      <VStack align="flex-start" {...controlRest} w="100%">
        <Text fontWeight="semibold">{label}</Text>
        <Box w="100%">
          <Controller
            control={control}
            placeholder={placeholder}
            name={name}
            rules={validations}
            render={({ field }) => (
              <ReactSelectt {...field} options={options} />
            )}
            {...inputRest}
          />
          {errors[name] && (
            <Text color="negative.900" fontSize="14px" {...errorRest}>
              {errors[name].message}
            </Text>
          )}
        </Box>
      </VStack>
    );
  }
};

export default ReactSelect;
