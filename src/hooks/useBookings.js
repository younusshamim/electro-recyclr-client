import { useQuery } from "react-query";
import { onGetBookings } from "../services/bookings-services";

const useBookings = (payload, onSuccess) => {
  const { userEmail = "", productId = "", required = "" } = payload;
  const queries = `userEmail=${userEmail}&productId=${productId}&required=${required}`;

  return useQuery(["getBookings", queries], () => onGetBookings(queries), {
    enabled: !!userEmail || !!productId,
    onSuccess: onSuccess,
    onError: onSuccess,
  });
};

export default useBookings;
