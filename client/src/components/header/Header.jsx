import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/images">Images</a>
          </li>
          <li>
            <a href="/upload-image">Upload</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
