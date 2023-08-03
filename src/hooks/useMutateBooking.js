import { useMutation } from "react-query";
import { onSaveBooking } from "../services/bookings-services";

const useMutateBooking = (onSuccess, onError) => {
  return useMutation(onSaveBooking, {
    onSuccess: onSuccess,
    onError: onError,
  });
};

export default useMutateBooking;
