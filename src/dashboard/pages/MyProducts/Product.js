import React from "react";
import useBookings from "../../../hooks/useBookings";
import { Box, Button, Flex, HStack, Image, Text, Tr } from "@chakra-ui/react";
import CstmTd from "../../components/CstmTd/CstmTd";
import ImageNameCard from "../../components/ImageNameCard/ImageNameCard";
import BeatLoading from "../../../components/Loader/BeatLoading";
import ResponseIcons from "./ResponseIcons";
import { FaAngleRight } from "react-icons/fa";
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";

const Product = ({ product }) => {
  const payload = { productId: product._id };
  const { isLoading: bookingsLoading, data: bookingsData } =
    useBookings(payload);
  const bookings = bookingsData?.data;

  return (
    <Tr key={product._id}>
      <CstmTd>
        <ImageNameCard img={product.images[0]} name={product.name} />
      </CstmTd>
      <CstmTd>TK {product.price}</CstmTd>
      <CstmTd>
        {product.description.length > 20
          ? product.description.slice(0, 20) + "..."
          : product.description}
      </CstmTd>

      <CstmTd>
        <ResponseIcons bookingsLoading={bookingsLoading} bookings={bookings} />
      </CstmTd>

      <CstmTd>
        <PrimaryBtn size="sm">
          <HStack>
            <Text>{product.isSold ? "Sold" : "Available"}</Text>
          </HStack>
        </PrimaryBtn>
      </CstmTd>
    </Tr>
  );
};

export default Product;
