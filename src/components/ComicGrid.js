// src/components/ComicGrid.js

import React from "react";

const ComicGrid = ({ images }) => {
  return (
    <div className="comic-grid">
      {images.map((image, index) => (
        <div key={index} className="comic-panel">
          <img src={image} alt={`Comic Panel ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ComicGrid;
