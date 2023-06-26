import React, { useState } from "react";
import BorderedStack from "../../../components/BorderedStack/BorderedStack";
import { Grid, HStack, Heading, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import TextInput from "../../components/TextInput/TextInput";
import TextArea from "../../components/TextArea/TextArea";
import districts from "../../../data/districts";
import ReactSelect from "../../components/ReactSelect/ReactSelect";
import getYearOptions from "../../utils/getYearOptions";
import SelectImage from "../../components/SelectImage/SelectImage";
import ImagePreview from "./ImagePreview";
import { toast } from "react-hot-toast";
import saveImageToImgBB from "../../../utils/saveImageToImgBB";
import { useMutation, useQuery } from "react-query";
import { onGetCategories } from "../../../services/category-services";
import { useAuth } from "../../../contexts/AuthProvider";
import { onSaveProduct } from "../../../services/product-services";
import { validateImgType } from "../../utils/validations";

const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const { userDetails } = useAuth();

  // form handle
  const handleForm = useForm();
  const { handleSubmit, reset, setValue } = handleForm;

  // success & error handle
  const onSuccess = (data) => {
    toast("Added Successfully.");
    reset();
    setSelectedImages([]);
  };
  const onError = (err) => {
    toast(err.message);
  };

  // query data
  const { data: categoriesData, isLoading: categoriesLoading } = useQuery(
    "getCategories",
    onGetCategories
  );
  const categories = categoriesData?.data;
  const { mutate } = useMutation(onSaveProduct, { onSuccess, onError });

  // handle function
  const handleAddProduct = async (data) => {
    const payload = {
      ...data,
      userId: userDetails._id,
      categoryId: data.categoryId.value,
      condition: data.condition.value,
      district: data.district.value,
      yearOfPurchase: data.yearOfPurchase.value,
    };

    try {
      const imagesDetails = await saveImageToImgBB(selectedImages);
      payload.images = imagesDetails.map((img) => img.display_url);
      mutate(payload);
    } catch (err) {
      toast(err.message);
    }
  };

  const imgValidation = (files) => {
    if (files.length < 1) {
      return "At least one image is required.";
    }
    if (
      !validateImgType(["jpg", "jpeg", "png", "gif"], files) ||
      !validateImgType(["jpg", "jpeg", "png", "gif"], selectedImages)
    ) {
      return "Only JPG, JPEG, PNG, and GIF files are allowed";
    }
    return true;
  };

  const handleImgChange = (e) => {
    const { name, files } = e.target;
    if (name === "images") {
      setSelectedImages([...files]);
    } else if ("addMoreImage") {
      setSelectedImages((prev) => [...prev, ...files]);
    }
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
  const categoryOptions = categories?.map((category) => {
    return { value: category._id, label: category.name };
  });

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

          <ReactSelect
            label="Product Category"
            name="categoryId"
            options={categoryOptions}
            handleForm={handleForm}
            validations={{ required: "Category is Required" }}
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
          />

          <TextInput
            label="Address"
            name="address"
            type="text"
            placeholder="Write Meeting Address"
            handleForm={handleForm}
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
            <ImagePreview
              selectedImages={selectedImages}
              handleFileRemove={handleFileRemove}
              handleChange={handleImgChange}
            />
          </HStack>
        </Grid>

        <HStack justify="center">
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
        </HStack>
      </form>
    </BorderedStack>
  );
};

export default AddProduct;
