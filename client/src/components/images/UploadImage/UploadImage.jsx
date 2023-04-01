import React, { useState } from "react";
import { uploadImage } from "../../../services/ImageService";
import Header from "../../header/Header";
import { toast } from "react-toastify";
import "./UploadImage.css";

export default function UploadImage() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    uploadImage(formData)
      .then((res) => {
        toast.success("Image uploaded successfully");
        setImage(null);
      })
      .catch((err) => {
        toast.error("Image upload failed");
      });
  };

  return (
    <div className="upload-image-page-wrapper">
      <Header />
      <form
        className="image-upload-form"
        onSubmit={handleFormSubmit}
        encType="multipart/form-data"
      >
        <label htmlFor="image-upload">Select an image:</label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
