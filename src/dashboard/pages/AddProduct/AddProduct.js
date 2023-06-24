import React, { useState } from "react";
import BorderedStack from "../../../components/BorderedStack/BorderedStack";
import { Box, Grid, HStack, Heading, Input, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import TextInput from "../../components/TextInput/TextInput";
import TextArea from "../../components/TextArea/TextArea";
import districts from "../../../data/districts";
import ReactSelect from "../../components/ReactSelect/ReactSelect";
import getYearOptions from "../../utils/getYearOptions";
import { imgFileToUrl } from "../../utils/files";
import SelectImage from "../../components/SelectImage/SelectImage";
import SingleImage from "./SingleImage";
import { BiImageAdd } from "react-icons/bi";
import ImagePreview from "./ImagePreview";

const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  // form handle
  const handleForm = useForm();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    setValue,
    getValues,
  } = handleForm;

  // handle function
  const handleAddProduct = (data) => {
    console.log("hi");
  };

  const imgValidation = (files) => {
    if ([...files].length < 1) {
      return "At least one image is required.";
    }
    return true;
  };

  const handleImgChange = (e) => {
    const files = e.target.files;
    setSelectedImages((prev) => [...prev, ...files]);
  };

  const handleFileRemove = (index) => {
    const updatedFiles = [...selectedImages];
    updatedFiles.splice(index, 1);
    setSelectedImages(updatedFiles);
    setValue("images", updatedFiles);
  };

  //  options
  const districtOptions = districts.map((district) => {
    return { value: district, label: district };
  });
  const yearOptions = getYearOptions(2000);
  const conditionOptions = ["Excellent", "Good", "Fair"].map((condition) => {
    return { value: condition, label: condition };
  });

  console.log(getValues("images"));

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
            name="OrginalPrice"
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

          <ReactSelect
            label="District"
            name="district"
            options={districtOptions}
            handleForm={handleForm}
            validations={{ required: "District is Required" }}
          />

          <ReactSelect
            label="Year of Purchase"
            name="yearOfPurchase"
            options={yearOptions}
            handleForm={handleForm}
            validations={{ required: "Year of Purchase is Required" }}
          />

          <ReactSelect
            label="Condition"
            name="condition"
            options={conditionOptions}
            handleForm={handleForm}
            validations={{ required: "Condition is Required" }}
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

          <SelectImage
            label="Select Images"
            name="images"
            id="images"
            handleForm={handleForm}
            validations={imgValidation}
            handleChange={handleImgChange}
            btnText="Upload"
          />

          <HStack gridColumn="2/5">
            <ImagePreview />
          </HStack>
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
