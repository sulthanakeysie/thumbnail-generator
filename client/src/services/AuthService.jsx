import axios from "axios";

export const signUp = async (user) => {
  return await axios.post(import.meta.env.VITE_API_URL + "auth/register", user);
};

export const login = async (user) => {
  return await axios.post(import.meta.env.VITE_API_URL + "auth/login", user);
};
