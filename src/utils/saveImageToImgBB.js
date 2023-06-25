import { onSaveImage } from "../services/common-services";
const imgHostKey = process.env.REACT_APP_imgbb_key;

const saveImageToImgBB = async (images) => {
  const data = [];
  for (const [i, img] of images.entries()) {
    const formData = new FormData();
    formData.append("image", img);
    const result = await onSaveImage(formData, imgHostKey);
    data[i] = result.data.data;
  }
  return data;
};

export default saveImageToImgBB;
