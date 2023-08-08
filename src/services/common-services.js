import axios from "axios";

export const onSaveImage = async (formData, imgHostKey) => {
  return await axios.post(
    `https://api.imgbb.com/1/upload?key=${imgHostKey}`,
    formData
  );
};
