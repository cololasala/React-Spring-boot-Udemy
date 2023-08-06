import axios from "axios";

export const authService = async ({ username, password }) => {
  try {
    const response = await axios.post("http://localhost:8080/login", {
      username,
      password
    });
    return response;
  } catch (error) {
    throw error;
  }
};