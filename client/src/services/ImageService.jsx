import axios from "axios";

export const getUploadedImages = async () => {
  console.log(import.meta.env.VITE_API_URL)
  return await axios.get(import.meta.env.VITE_API_URL + "image", {
    headers: {
      Authorization: localStorage.getItem("api_key"),
      "Content-Type": "application/json",
    },
  });
};

export const uploadImage = async (formData) => {
  return await axios.post(`${import.meta.env.VITE_API_URL}image`, formData, {
    headers: {
      Authorization: localStorage.getItem("api_key"),
      "Content-Type": "multipart/form-data",
    },
  });
};
