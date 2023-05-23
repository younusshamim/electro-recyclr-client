import axios from "axios";
import baseUrl from "./baseUrl";
const imageHostKey = process.env.REACT_APP_imgbb_key;

export const onSaveImage = async (formData) => {
  return await axios.post(
    `https://api.imgbb.com/1/upload?key=7368137052956468304b9e8bf25eac76`,
    formData
  );
};
