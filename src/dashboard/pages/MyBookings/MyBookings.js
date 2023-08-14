import { Heading } from "@chakra-ui/react";
import BorderedStack from "../../components/BorderedStack/BorderedStack";
import useBookings from "../../../hooks/useBookings";
import { useAuth } from "../../../contexts/AuthProvider";
import BeatLoading from "../../../components/Loader/BeatLoading";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import NoDataFound from "../../../components/NoDataFound/NoDataFound";
import SimpleTable from "../Shared/SimpleTable/SimpleTable";
import BookingRow from "./BookingRow";
import { useState } from 'react'

const MyBookings = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const { userDetails } = useAuth();
  const payload = { userEmail: userDetails?.email };
  // query
  const onSuccess = () => {
    setInitialLoading(false)
  }
  const {
    isLoading: bookingsLoading,
    data: bookingsData,
    error,
  } = useBookings(payload, onSuccess);
  const bookings = bookingsData?.data;
  // data
  const theadData = ["Product", "price", "Description", "Time", "Status"];

  return (
    <BorderedStack>
      {bookings?.length > 0 && (
        <Heading fontSize="20px" mb="5">
          My Booked Products
        </Heading>
      )}

      {bookingsLoading || initialLoading ? (
        <BeatLoading />
      ) : error ? (
        <ErrorMessage error={error?.message} />
      ) : bookings?.length === 0 ? (
        <NoDataFound msg="No product booked!" />
      ) : (
        <SimpleTable theadData={theadData}>
          {bookings?.map((booking) => (
            <BookingRow booking={booking} key={booking._id} />
          ))}
        </SimpleTable>
      )}
    </BorderedStack>
  );
};

export default MyBookings;
