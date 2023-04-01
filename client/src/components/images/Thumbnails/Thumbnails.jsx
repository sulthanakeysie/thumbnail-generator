import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./Thumbnails.css";

const Thumbnails = () => {
  const location = useLocation();
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    setThumbnails(location.state.thumbnails);
  }, []);

  return (
    <div>
      <h1>Thumbnails Generated</h1>
      <div>
        {thumbnails.map((thumbnail, i) => (
          <div className="thumbnail" key={i}>
            <img
              src={`${
                import.meta.env.VITE_API_URL
              }thumbnails/${thumbnail.path.slice(15)}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thumbnails;
