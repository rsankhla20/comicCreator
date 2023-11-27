import React, { useState } from "react";

import PanelForm from "./PanelForm";

const ComicForm = ({ onFinishing, img_array }) => {
  const [panelTexts, setPanelTexts] = useState(Array(10).fill(""));
  const [panelImages, setPanelImages] = useState(img_array);
  const [loading, setLoading] = useState(Array(10).fill(false));
  const [activeTab, setActiveTab] = useState(0);

  const handleGenerate = async (index, imageData) => {
    const updatedImages = [...panelImages];
    updatedImages[index] = imageData;
    setPanelImages(updatedImages);
    // onFinishing(panelImages);
  };

  const handleTextChange = (index, text) => {
    const updatedTexts = [...panelTexts];
    updatedTexts[index] = text;
    setPanelTexts(updatedTexts);
  };

  const handleLoadingChange = (value, index) => {
    const updatedLoading = [...loading];
    updatedLoading[index] = value;
    setLoading(updatedLoading);
  };

  return (
    <div className="comic-form">
      <ul className="nav nav-tabs">
        {panelTexts.map((_, index) => (
          <li className="nav-item" key={index}>
            <a
              className={`nav-link ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
              href="#"
            >
              <span style={{ color: panelImages[index] ? "green" : "" }}>
                Panel {index + 1}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {panelTexts.map((text, index) => (
          <div
            key={index}
            className={`tab-pane fade ${
              activeTab === index ? "show active" : ""
            }`}
          >
            <PanelForm
              index={index}
              onGenerate={handleGenerate}
              panelText={panelTexts[index]}
              panelImage={panelImages}
              loading={loading}
              setLoading={handleLoadingChange}
              onFinishing={onFinishing}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicForm;
