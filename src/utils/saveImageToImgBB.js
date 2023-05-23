import { onSaveImage } from "../services/common-services";
const imgHostKey = process.env.REACT_APP_imgbb_key;

const saveImageToImgBB = async (images) => {
  const formData = new FormData();
  formData.append("image", images[0]);
  const result = await onSaveImage(formData, imgHostKey);
  return result.data.data;
};

export default saveImageToImgBB;
