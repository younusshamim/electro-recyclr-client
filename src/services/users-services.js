import api from "./api";

export const onSaveUser = async (data) => {
  return await api.post(`/users`, data);
};

export const onUpdateUser = async ({ id, ...data }) => {
  return await api.put(`/users/${id}`, data);
};

export const onGetUserDetails = async (email) => {
  return await api.get(`/users/${email}`);
};

export const onGetUsers = async (status, search) => {
  return await api.get(`/users?status=${status}&search=${search}`);
};

export const onUpdateUserStatus = async ({ _id, value }) => {
  return await api.put(`/users/status/${_id}?status=${value}`);
};

export const isAdmin = async (email) => {
  return await api.get(`/users/admin/${email}`);
};

export const onGetJWT = async (email) => {
  return await api.get(`/jwt?email=${email}`);
};
