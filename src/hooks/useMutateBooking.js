import { useMutation } from "react-query";
import { onSaveBooking } from "../services/bookings-services";

const useMutateBooking = (onSuccess, onError) => {
  return useMutation(onSaveBooking, {
    onError: onError,
    onSuccess: onSuccess,
  });
};

export default useMutateBooking;
