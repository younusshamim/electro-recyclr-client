import React from "react";
import BorderedStack from "../../../components/BorderedStack/BorderedStack";
import { Grid, Heading, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import TextInput from "../../components/TextInput/TextInput";
import TextArea from "../../components/TextArea/TextArea";

const AddProduct = () => {
  const handleForm = useForm();
  const { handleSubmit, reset } = handleForm;

  const handleAddProduct = async (data) => {
    // const payload = {
    //   images: [{ img: "" }, { img: "" }, { img: "" }],
    // };
  };

  return (
    <BorderedStack>
      <Heading fontSize="20px">Add New Product</Heading>

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
        </Grid>

        <Input
          value="Add"
          type="submit"
          size="lg"
          cursor="pointer"
          bg="primary.900"
          _active={{ bg: "primary.700" }}
          color="white"
        />
      </form>
    </BorderedStack>
  );
};

export default AddProduct;
