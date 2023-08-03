import axios from "axios";
import baseUrl from "./baseUrl";

export const onSaveBooking = async (data) => {
  return await axios.post(`${baseUrl}/bookings`, data);
};

export const onGetBookings = async (queries) => {
  return await axios.get(`${baseUrl}/bookings?${queries}`);
};
