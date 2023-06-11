import axios from "axios";
import baseUrl from "./baseUrl";
const imageHostKey = process.env.REACT_APP_imgbb_key;

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
