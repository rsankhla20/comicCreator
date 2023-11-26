// src/App.js

import React, { useState } from "react";
import ComicForm from "./components/ComicForm";
import ComicGrid from "./components/ComicGrid";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  const [showForm, setShowForm] = useState(true);
  const [comicImages, setComicImages] = useState(Array(10).fill(null));

  // const handleFinish = async (index, imageArray) => {
  //   const updatedImages = [...comicImages];
  //   updatedImages[index] = imageArray;

  //   setComicImages(updatedImages);
  // };

  const handleFinish = async (index, imageArray) => {
    setComicImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = imageArray;
      return updatedImages;
    });
  };

  const handlePublish = () => {
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
            <button className="btn btn-light" onClick={handlePublish}>
              Publish
            </button>
          ) : (
            <button className="btn btn-light" onClick={handleGoHome}>
              Create
            </button>
          )}
        </div>
      </nav>
      <div className="container">
        {showForm ? (
          <ComicForm onFinishing={handleFinish} />
        ) : (
          <ComicGrid images={comicImages} />
        )}
      </div>
    </div>
  );
}

export default App;
