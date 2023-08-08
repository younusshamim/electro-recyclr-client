import api from "./api";

export const onSaveBooking = async (data) => {
  return await api.post(`/bookings`, data);
};

export const onGetBookings = async (queries) => {
  return await api.get(`/bookings?${queries}`);
};

export const onUpdateBookingStatus = async (_id) => {
  return await api.put(`/bookings/status/${_id}`);
};
