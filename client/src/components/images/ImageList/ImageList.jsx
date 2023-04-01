import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Header } from "../../../components";
import { getUploadedImages } from "../../../services/ImageService";
import "./ImageList.css";

export default function ImageList() {
  const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    getUploadedImages()
      .then((res) => {
        setUploadedImages(res.data.images);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, []);

  const viewThumbnails = (image) => {
    navigate(image._id, { state: { thumbnails: image.thumbnails } });
  };

  return (
    <div>
      <Header />
      <div className="image-list-wrapper">
        {uploadedImages.map((image, i) => (
          <div
            key={i}
            className="image-card-wrapper"
            onClick={() => viewThumbnails(image)}
          >
            <img
              width="100%"
              height={"100%"}
              src={`${import.meta.env.VITE_API_URL}photos/${image.originalImage.slice(
                8
              )}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
