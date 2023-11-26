// src/App.js

import React, { useState } from "react";
import ComicForm from "./components/ComicForm";
import ComicGrid from "./components/ComicGrid";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  const [showForm, setShowForm] = useState(true);
  const [comicImages, setComicImages] = useState([]);

  const handleGenerate = (imageData) => {
    // Handle image data as needed
  };

  const handlePublish = () => {
    setComicImages([
      ...comicImages,
      ...Array.from({ length: 10 }, (_, index) => `fakeImageUrl${index}`),
    ]);
    setShowForm(false);
  };

  const handleGoHome = () => {
    setShowForm(true);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Comic Creator</span>
          {showForm ? (
            <button
              className="btn btn-light"
              onClick={handlePublish}
              disabled={!comicImages.length}
            >
              {comicImages.length ? "Publish" : "Generate and Publish"}
            </button>
          ) : (
            <button className="btn btn-light" onClick={handleGoHome}>
              Home
            </button>
          )}
        </div>
      </nav>
      <div className="container">
        {showForm ? (
          <ComicForm onGenerate={handleGenerate} onPublish={handlePublish} />
        ) : (
          <ComicGrid images={comicImages} />
        )}
      </div>
    </div>
  );
}

export default App;
