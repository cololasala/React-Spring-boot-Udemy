import axios from "axios";

export const authService = async ({ username, password }) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, {
      username,
      password
    });
    return response;
  } catch (error) {
    throw error;
  }
};