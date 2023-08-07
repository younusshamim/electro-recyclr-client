import axios from "axios";
import baseUrl from "./baseUrl";

export const onGetProducts = async (queries) => {
  return await axios.get(`${baseUrl}/products?${queries}`);
};

export const onGetProduct = async (id) => {
  return await axios.get(`${baseUrl}/products/${id}`);
};

export const onSaveProduct = async (data) => {
  return await axios.post(`${baseUrl}/products`, data);
};

export const onUpdateProductStatus = async (_id) => {
  return await axios.put(`${baseUrl}/products/status/${_id}`);
};
