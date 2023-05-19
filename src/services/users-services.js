import axios from "axios";
import baseUrl from "./baseUrl";

export const onSaveUser = async (data) => {
  return await axios.post(`${baseUrl}/users`, data);
};

export const onUpdateUser = async (data) => {
  return await axios.put(`${baseUrl}/users/${data._id}`, data);
};

export const onGetUserDetails = async (email) => {
  return await axios.get(`${baseUrl}/users/${email}`);
};
