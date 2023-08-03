import React from "react";
import Images from "../Images/Images";
import Information from "../Information/Information";
import { Flex, useDisclosure } from "@chakra-ui/react";
import BookingModal from "../BookingModal/BookingModal";
import { useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import BeatLoading from "../../../components/Loader/BeatLoading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";

const Product = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  // product
  const {
    data: productData,
    isLoading: productLoading,
    error: productError,
  } = useProduct(id);
  const product = productData?.data;

  return productLoading ? (
    <BeatLoading h="100vh" />
  ) : productError ? (
    <ErrorMessage error={productError.message} h="100vh" />
  ) : (
    <Flex p="50px 120px 25px 120px">
      <Images product={product} />
      <Information product={product} onOpen={onOpen} />
      {isOpen && (
        <BookingModal isOpen={isOpen} onClose={onClose} product={product} />
      )}
    </Flex>
  );
};

export default Product;
