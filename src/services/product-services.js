import axios from "axios";
import baseUrl from "./baseUrl";

export const onSaveProduct = async (data) => {
  return await axios.post(`${baseUrl}/products`, data);
};
