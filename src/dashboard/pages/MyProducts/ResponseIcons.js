import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import BeatLoading from "../../../components/Loader/BeatLoading";
import userImage from "../../../assets/user.png";

const ResponseIcons = ({ bookingsLoading, bookings }) => {
  return bookingsLoading ? (
    <BeatLoading h="auto" w="auto" />
  ) : bookings.length === 0 ? (
    "No Response"
  ) : (
    <Flex alignItems="center" cursor="pointer">
      {bookings
        .sort((a, b) => (b.image ? 1 : -1) - (a.image ? 1 : -1))
        .slice(0, 3)
        .map((booking, i) => (
          <Image
            key={i}
            src={booking?.customerInfo?.img || userImage}
            h="25px"
            w="25px"
            borderRadius="50%"
            bg="gray.200"
          />
        ))}
      {bookings.length > 3 && (
        <Text fontSize="20px" color="gray.500">
          +
        </Text>
      )}
    </Flex>
  );
};

export default ResponseIcons;
