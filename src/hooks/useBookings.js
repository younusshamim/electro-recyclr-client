import { useQuery } from "react-query";
import { onGetBookings } from "../services/bookings-services";

const useBookings = (payload) => {
  const { userEmail, productId } = payload;
  const queries = `userEmail=${userEmail}&productId=${productId}`;

  return useQuery(["getBookings", queries], () => onGetBookings(queries), {
    enabled: !!(userEmail || productId),
  });
};

export default useBookings;
