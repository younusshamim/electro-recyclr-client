export const imgFileToUrl = (file) => {
  return URL.createObjectURL(file);
};

export const arrToFileList = (files) => {
  const fileList = {
    length: files.length,
    item(index) {
      return files[index];
    },
  };
  return fileList;
};
