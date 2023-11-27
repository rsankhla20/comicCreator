import React from "react";
import "./ComicGrid.css";

const ComicGrid = ({ images }) => {
  return (
    <>
      <div className="container dispgrid">
        <h1>Here is your comic strip</h1>
        <div className="comic-grid">
          {images.map((image, index) => (
            <div key={index} className="comic-panel">
              {image ? (
                <img
                  src={URL.createObjectURL(new Blob([image]))}
                  alt={`Comic Panel ${index + 1}`}
                />
              ) : (
                <div className="empty-panel">Image not generated</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ComicGrid;
