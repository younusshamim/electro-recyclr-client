import React, { useState } from "react";
import BorderedStack from "../../../components/BorderedStack/BorderedStack";
import { Box, Grid, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import TextInput from "../../components/TextInput/TextInput";
import TextArea from "../../components/TextArea/TextArea";
import districts from "../../../data/districts";
import ReactSelect from "../../components/ReactSelect/ReactSelect";
import Select from "react-select";

const AddProduct = () => {
  // states
  const [selectedDistrict, setSelectedDistrict] = useState("");
  // form handle
  const handleForm = useForm();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = handleForm;
  // district options
  const districtOptions = districts.map((district) => {
    return { value: district, label: district };
  });
  // handle function
  const handleAddProduct = async (data) => {};

  return (
    <BorderedStack>
      <Heading fontSize="20px" mb="5">
        Add New Product
      </Heading>

      <form onSubmit={handleSubmit(handleAddProduct)}>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <TextInput
            label="Product Name"
            name="name"
            type="text"
            placeholder="Product Name"
            handleForm={handleForm}
            validations={{
              required: "Name is Required",
            }}
          />

          <TextInput
            label="Price"
            name="price"
            type="text"
            placeholder="Product Price"
            handleForm={handleForm}
            validations={{
              required: "Price is Required",
            }}
          />

          <TextInput
            label="Orginal Price"
            name="orginalPrice"
            type="text"
            placeholder="Product Orginal Price"
            handleForm={handleForm}
            validations={{
              required: "Orginal Price is Required",
            }}
          />

          <TextInput
            label="Address"
            name="address"
            type="text"
            placeholder="Write Meeting Address"
            handleForm={handleForm}
            validations={{
              required: "Meeting Address is Required",
            }}
          />

          <TextArea
            label="Description"
            name="description"
            placeholder="Write Description"
            handleForm={handleForm}
            validations={{
              required: "Description is Required",
            }}
          />

          {/* <ReactSelect
            name="district"
            label="Select District"
            placeholder="Select District"
            handleForm={handleForm}
            options={districtOptions}
            value={selectedDistrict}
            setValue={setSelectedDistrict}
            validations={{
              required: "District is Required",
            }}
            Controller={Controller}
          /> */}

          <VStack align="flex-start">
            <Text fontWeight="semibold">Distict</Text>

            <Box w="100%">
              <Controller
                control={control}
                name="district"
                rules={{ required: "District is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={districtOptions}
                    // value={selectedDistrict}
                    // onChange={setSelectedDistrict}
                  />
                )}
              />
              {errors.district && (
                <Text color="negative.900" fontSize="14px">
                  {errors.district.message}
                </Text>
              )}
            </Box>
          </VStack>
        </Grid>

        <Input
          value="Add"
          type="submit"
          size="lg"
          cursor="pointer"
          bg="primary.900"
          _active={{ bg: "primary.700" }}
          color="white"
          mt="10"
        />
      </form>
    </BorderedStack>
  );
};

export default AddProduct;
