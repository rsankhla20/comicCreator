// src/App.js

import React, { useState, useEffect } from "react";
import ComicForm from "./components/ComicForm";
import ComicGrid from "./components/ComicGrid";
// import Home from "./components/Home";
import image1 from "./assests/preview.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function App() {
  const [showForm, setShowForm] = useState(true);
  // const [comicImages, setComicImages] = useState(Array(10).fill(null));
  // const [comicImages, setComicImages] = useState(
  //   Array.from({ length: 10 }, () => image1)
  // );

  const [comicImages, setComicImages] = useState(Array(10).fill(null));

  // Convert image1 to blob when the component mounts
  useEffect(() => {
    const convertImageToBlob = async () => {
      try {
        // Fetch image1 and convert it to blob
        const response = await fetch(image1);
        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.status}`);
        }

        const blob = await response.blob();

        // Update the state with the blob data for image1
        setComicImages((prevImages) => prevImages.map((_, index) => blob));
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    convertImageToBlob();
  }, []);

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
    <>
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
        <div className="container mb-5">
          {showForm ? (
            <ComicForm onFinishing={handleFinish} img_array={comicImages} />
          ) : (
            <ComicGrid images={comicImages} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
