import usersApi from "../api/usersApi";

/* const config = () => {
  return {
    headers: {
      "Authorization": sessionStorage.getItem("token"),
      "Content-Type": "application/json"
    }
  }
} */

export const findAll = async () => {
  try {
    const response = await usersApi.get(`/users`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const findAllByPages = async (page = 0) => {
  try {
    const response = await usersApi.get(`/users/${page}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const saveUser = async (user) => {
  try {
    const response = await usersApi.post(`/user`, user);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, user) => {
  try {
    const response = await usersApi.put(`/user/${id}`, user);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await usersApi.delete(`/user/${id}`);
  } catch (error) {
    throw error;
  }
};
