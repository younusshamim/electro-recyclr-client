import { Button, Collapse, Grid, Stack, Text, Tr } from "@chakra-ui/react";
import React from "react";
import CstmTd from "../../components/CstmTd/CstmTd";
import ImageNameCard from "../../components/ImageNameCard/ImageNameCard";
import { dateTimeFormat, utcToLocalTime } from "../../../utils";

const ProductResponse = ({
  bookingsShow,
  bookings,
  toggleBookingShow,
  handleBookingStatus,
  bookingMutateLoading,
}) => {
  const isConfirmedExist = bookings?.find((booking) => booking.isConfirmed);

  return (
    <Tr bg={bookingsShow && "gray.50"} border="none">
      <CstmTd colSpan={5} border={"none"} p="0">
        <Collapse in={bookingsShow} animateOpacity>
          <Stack
            padding="20px 40px"
            borderLeftWidth="1px"
            borderRightWidth="1px"
            borderColor="gray.200"
            onClick={toggleBookingShow}
          >
            {bookings.map((booking) => {
              const { img, name } = booking.customerInfo;

              return (
                <Grid
                  templateColumns="repeat(5, 1fr)"
                  gap={5}
                  alignItems="center"
                >
                  <ImageNameCard
                    img={img}
                    name={name}
                    borderRadius="50%"
                    h="40px"
                    w="40px"
                    gap={5}
                  />
                  <Text>{booking?.contact || "-"}</Text>
                  <Text>{booking?.userEmail || "-"}</Text>
                  <Text fontSize="14px">
                    {dateTimeFormat(utcToLocalTime(booking?.postedTime))}
                  </Text>

                  <Button
                    size="sm"
                    w="fit-content"
                    onClick={(e) => handleBookingStatus(e, booking)}
                    isDisabled={
                      bookingMutateLoading ||
                      (isConfirmedExist && !booking?.isConfirmed)
                    }
                  >
                    {booking?.isConfirmed === true ? "Accepted" : "Accept"}
                  </Button>
                </Grid>
              );
            })}
          </Stack>
        </Collapse>
      </CstmTd>
    </Tr>
  );
};

export default ProductResponse;
