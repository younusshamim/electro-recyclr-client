export const validateImgType = (allowedTypes, files) => {
  return [...files].every((file) => {
    const { name } = file;
    const fileType = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
    return allowedTypes.includes(fileType);
  });
};
