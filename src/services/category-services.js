import api from "./api";

export const onGetCategories = async () => {
  return await api.get(`/categories`);
};
