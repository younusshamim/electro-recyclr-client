import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { timeDistance } from "../../../utils";
import { MdVerifiedUser } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import useCategories from "../../../hooks/useCategories";
import { useAuth } from "../../../contexts/AuthProvider";
import BeatLoading from "../../../components/Loader/BeatLoading";
import { useLocation, useNavigate } from "react-router-dom";
import useBookings from "../../../hooks/useBookings";

const Information = ({ product, onOpen }) => {
  const [randomLoadig, setRandomLoading] = useState(true);
  const onSuccess = () => setRandomLoading(false);

  // category data
  const { data: categoryData, isLoading: categoryLoading } = useCategories();
  const categoryList = categoryData?.data;
  // auth data
  const { loading: authLoading, userDetails } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // bookings
  const bookingPayload = {
    userEmail: userDetails?.email,
    productId: product._id,
  };
  const { data: bookingsData, isLoading: bookingsLoading } = useBookings(
    bookingPayload,
    onSuccess
  );
  const booked = bookingsData?.data[0];
  const bookingBtnLoading = bookingsLoading || authLoading || randomLoadig;

  return (
    <Flex direction="column" w="50%">
      <Heading fontSize="24px" mb="1">
        {product.name}
      </Heading>
      <Text mb="4">{product.address + "," + product.district}</Text>
      <HStack mb="2px">
        <Text fontWeight="semibold">{product.sellerInfo.name}</Text>
        {product?.sellerInfo?.status !== "User" && (
          <Flex
            align="center"
            justify="center"
            bg="gray.600"
            color="white"
            padding="0px 5px"
            fontSize="14px"
            borderRadius="5px"
            w="fit-content"
          >
            <Box mr="3px">
              <MdVerifiedUser />
            </Box>
            <Text>verified</Text>
          </Flex>
        )}
      </HStack>
      <Flex align="center" fontWeight="semibold">
        <Box mr="5px" fontSize="18px">
          <IoIosCall />
        </Box>
        <Text>{product.sellerInfo.mobile}</Text>
      </Flex>
      <Divider my="4" />
      <Grid templateColumns="repeat(3, 1fr)" mb="5">
        {!categoryLoading && (
          <Text>
            Category:{" "}
            {categoryList.find((cat) => cat._id == product.categoryId)?.name}
          </Text>
        )}
        <Text>Condition: {product.condition}</Text>
        <Text>Year of Purchase: {product.yearOfPurchase}</Text>
        <Text>Posted: {timeDistance(product.postedTime)}</Text>
        <Text>Original Price: {product.orginalPrice} BDT</Text>
      </Grid>
      <Text fontSize="18px" fontWeight="semibold" mb="3">
        Price: {product.price} BDT
      </Text>
      <Text mb="5">Description: {product.description}</Text>

      {bookingBtnLoading && <BeatLoading h="auto" w="fit-content" />}

      {!bookingBtnLoading && (
        <Button
          color="white"
          bg="black"
          _hover={{ bg: "black" }}
          _active={{ bg: "gray.700" }}
          w="fit-content"
          onClick={
            userDetails
              ? onOpen
              : () => navigate("/login", { state: { targetUrl: location } })
          }
          isDisabled={booked?.productId || product?.isSold}
        >
          {product?.isSold === true
            ? "Sold Out"
            : booked?.productId
            ? "Booked"
            : "Book Now"}
        </Button>
      )}
    </Flex>
  );
};

export default Information;
