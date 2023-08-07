import React, { useState } from "react";
import useBookings from "../../../hooks/useBookings";
import { Collapse, HStack, Text, Tr } from "@chakra-ui/react";
import CstmTd from "../../components/CstmTd/CstmTd";
import ImageNameCard from "../../components/ImageNameCard/ImageNameCard";
import ResponseIcons from "./ResponseIcons";
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
import ProductResponse from "./ProductResponse";
import { useMutation, useQueryClient } from "react-query";
import { onUpdateProductStatus } from "../../../services/product-services";
import toast from "react-hot-toast";
import { onUpdateBookingStatus } from "../../../services/bookings-services";

const ProductRow = ({ product }) => {
  const [bookingsShow, setBookingsShow] = useState(false);
  const queryClient = useQueryClient();

  // query
  const payload = { productId: product._id };
  const { isLoading: bookingsLoading, data: bookingsData } =
    useBookings(payload);
  const bookings = bookingsData?.data;

  // mutations
  const { mutate: productMutate, isLoading: productMutateLoading } =
    useMutation(onUpdateProductStatus, {
      onSuccess: () => {
        queryClient.invalidateQueries("getProducts");
        toast("Status Updated Successfully.");
      },
      onError: (err) => {
        toast(err.message);
      },
    });

  const { mutate: bookingMutate, isLoading: bookingMutateLoading } =
    useMutation(onUpdateBookingStatus, {
      onSuccess: () => {
        queryClient.invalidateQueries("getBookings");
      },
    });

  // functions
  const toggleBookingShow = () => {
    if (bookings.length) setBookingsShow(!bookingsShow);
  };

  const handleProductStatus = (e) => {
    e.stopPropagation();
    productMutate(product._id);
    if (product?.isSold) {
      const target = bookings.find((book) => book.isConfirmed);
      target && bookingMutate(target._id);
    }
  };

  const handleBookingStatus = (e, booking) => {
    e.stopPropagation();
    if (product?.isSold === booking?.isConfirmed) {
      handleProductStatus(e);
    }
    bookingMutate(booking._id);
  };

  return (
    <>
      <Tr
        bg={bookingsShow && "gray.50"}
        onClick={toggleBookingShow}
        cursor="pointer"
      >
        <CstmTd border={bookingsShow && "none"}>
          <ImageNameCard img={product.images[0]} name={product.name} />
        </CstmTd>

        <CstmTd border={bookingsShow && "none"}>TK {product.price}</CstmTd>
        <CstmTd border={bookingsShow && "none"}>
          {product.description.length > 20
            ? product.description.slice(0, 20) + "..."
            : product.description}
        </CstmTd>

        <CstmTd border={bookingsShow && "none"}>
          <ResponseIcons
            bookingsLoading={bookingsLoading}
            bookings={bookings}
          />
        </CstmTd>

        <CstmTd border={bookingsShow && "none"}>
          <PrimaryBtn
            size="sm"
            onClick={handleProductStatus}
            isDisabled={productMutateLoading}
          >
            <Text>{product?.isSold === true ? "Sold Out" : "Available"}</Text>
          </PrimaryBtn>
        </CstmTd>
      </Tr>

      {!bookingsLoading && bookings.length > 0 && (
        <ProductResponse
          bookingsShow={bookingsShow}
          bookings={bookings}
          toggleBookingShow={toggleBookingShow}
          handleBookingStatus={handleBookingStatus}
          bookingMutateLoading={bookingMutateLoading}
        />
      )}
    </>
  );
};

export default ProductRow;
