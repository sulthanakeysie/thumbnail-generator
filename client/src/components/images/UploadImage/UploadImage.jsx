import React, { useState } from "react";
import Header from "../../header/Header";
import "./UploadImage.css";

export default function UploadImage() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // code to submit the image
  };

  return (
    <div className="upload-image-page-wrapper">
      <Header />
      <form className="image-upload-form" onSubmit={handleFormSubmit}>
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
