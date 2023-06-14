import axios from "axios";
import baseUrl from "./baseUrl";

export const onGetCategories = async () => {
  return await axios.get(`${baseUrl}/categories`);
};
