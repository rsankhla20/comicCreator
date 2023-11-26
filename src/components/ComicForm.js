import React, { useState } from "react";

import PanelForm from "./PanelForm";

// const ComicForm = ({ onGenerate }) => {
//   const [panelTexts, setPanelTexts] = useState(Array(10).fill(""));
//   const [panelImages, setPanelImages] = useState(Array(10).fill(null));
//   const [activeTab, setActiveTab] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = async () => {
//     setLoading(true);
//     const imageData = await query({ inputs: panelTexts[activeTab] });
//     const updatedImages = [...panelImages];
//     updatedImages[activeTab] = imageData;
//     setPanelImages(updatedImages);
//     onGenerate(imageData);
//     setLoading(false);
//   };

//   const handleTextChange = (index, text) => {
//     const updatedTexts = [...panelTexts];
//     updatedTexts[index] = text;
//     setPanelTexts(updatedTexts);
//   };

//   return (
//     <div className="comic-form">
//       <ul className="nav nav-tabs">
//         {panelTexts.map((_, index) => (
//           <li className="nav-item" key={index}>
//             <a
//               className={`nav-link ${activeTab === index ? "active" : ""}`}
//               onClick={() => setActiveTab(index)}
//               href="#"
//             >
//               <span style={{ color: panelImages[index] ? "green" : "" }}>
//                 Panel {index + 1}
//               </span>
//             </a>
//           </li>
//         ))}
//       </ul>
//       <div className="tab-content">
//         {panelTexts.map((text, index) => (
//           <div
//             key={index}
//             className={`tab-pane fade ${
//               activeTab === index ? "show active" : ""
//             }`}
//           >
//             <textarea
//               placeholder={`Enter text for Panel ${index + 1}...`}
//               value={panelTexts[index]}
//               onChange={(e) => handleTextChange(index, e.target.value)}
//             />
//             {loading && <div className="loader"></div>}
//             <button onClick={handleGenerate} disabled={loading}>
//               {loading ? "Generating..." : "Generate"}
//             </button>
//             {panelImages[index] ? (
//               <img
//                 src={URL.createObjectURL(new Blob([panelImages[index]]))}
//                 alt={`Panel ${index + 1}`}
//               />
//             ) : (
//               <div>Image not generated</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
const ComicForm = () => {
  const [panelTexts, setPanelTexts] = useState(Array(10).fill(""));
  const [panelImages, setPanelImages] = useState(Array(10).fill(null));
  const [loading, setLoading] = useState(Array(10).fill(false));
  const [activeTab, setActiveTab] = useState(0);

  const handleGenerate = async (index, imageData) => {
    const updatedImages = [...panelImages];
    updatedImages[index] = imageData;
    setPanelImages(updatedImages);
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// async function query(data) {
//   try {
//     const response = await fetch(
//       "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
//       {
//         headers: {
//           Accept: "image/png",
//           Authorization:
//             "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
//           "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify(data),
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const result = await response.blob();
//     console.log("generated");
//     return result;
//   } catch (error) {
//     console.error("Error generating image:", error);
//     throw error; // Rethrow the error for further handling
//   }
// }

export default ComicForm;
