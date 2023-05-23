import { onSaveImage } from "../services/common-services";

const saveImageToImgBB = async (images) => {
  const formData = new FormData();
  formData.append("image", images[0]);
  const result = await onSaveImage(formData);
  return result.data.data;
};

export default saveImageToImgBB;
