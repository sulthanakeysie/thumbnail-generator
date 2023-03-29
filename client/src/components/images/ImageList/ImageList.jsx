import React from "react";
import { Header } from "../../../components";
import "./ImageList.css";
export default function ImageList() {
  let images = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <div>
      <Header />
      <div className="image-list-wrapper">
        {images.map((image) => (
          <div className="image-card-wrapper">{image}</div>
        ))}
      </div>
    </div>
  );
}
