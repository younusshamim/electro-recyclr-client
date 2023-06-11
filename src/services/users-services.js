import axios from "axios";
import baseUrl from "./baseUrl";

export const onSaveUser = async (data) => {
  return await axios.post(`${baseUrl}/users`, data);
};

export const onUpdateUser = async ({ id, ...data }) => {
  return await axios.put(`${baseUrl}/users/${id}`, data);
};

export const onGetUserDetails = async (email) => {
  return await axios.get(`${baseUrl}/users/${email}`);
};

export const onGetUsers = async (status, search) => {
  return await axios.get(`${baseUrl}/users?status=${status}&search=${search}`);
};

export const onUpdateUserStatus = async ({ _id, value }) => {
  return await axios.put(`${baseUrl}/users/status/${_id}?status=${value}`);
};
