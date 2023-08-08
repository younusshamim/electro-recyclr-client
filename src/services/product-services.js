import api from "./api";

export const onGetProducts = async (queries) => {
  return await api.get(`/products?${queries}`);
};

export const onGetProduct = async (id) => {
  return await api.get(`/products/${id}`);
};

export const onSaveProduct = async (data) => {
  return await api.post(`/products`, data);
};

export const onUpdateProductStatus = async (_id) => {
  return await api.put(`/products/status/${_id}`);
};
