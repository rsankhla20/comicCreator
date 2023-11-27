import React, { useState, useEffect } from "react";
import "./PanelForm.css";
async function query(data) {
  try {
    const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          Accept: "image/png",
          Authorization:
            "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.blob();
    console.log("generated");
    return result;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error; // Rethrow the error for further handling
  }
}

const PanelForm = ({
  index,
  onGenerate,
  panelText,
  panelImage,
  loading,
  setLoading,
  onFinishing,
}) => {
  const [text, setText] = useState(panelText);
  const [imageSrc, setImageSrc] = useState(
    URL.createObjectURL(new Blob([panelImage[index]]))
  );

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleGenerate = async () => {
    setLoading(true, index);

    try {
      const imageData = await query({ inputs: text });
      console.log(imageData); // Log the imageData

      const updatedImages = [...panelImage];
      updatedImages[index] = imageData;
      onGenerate(index, updatedImages);
      onFinishing(index, imageData);
      // Create a Blob URL for the image
      const blob = new Blob([imageData]);
      const blobUrl = URL.createObjectURL(blob);
      setImageSrc(blobUrl);
    } catch (error) {
      console.error("Error generating image:", error);
      // Handle error as needed
    } finally {
      setLoading(false, index);
    }
  };

  return (
    <div className="panel-form">
      <textarea
        placeholder={`Enter text for Panel ${index + 1}...`}
        value={text}
        onChange={handleTextChange}
      />
      {loading[index] && <div className="loader"></div>}
      <button
        class="btn btn-outline-primary"
        onClick={handleGenerate}
        disabled={loading[index]}
      >
        {loading[index] ? "Generating..." : "Generate"}
      </button>
      {imageSrc ? (
        <img
          //   style={{ width: "512px", height: "512px" }}
          src={imageSrc}
          alt={`Panel ${index + 1}`}
        />
      ) : (
        <div>Image not generated</div>
      )}
    </div>
  );
};

export default PanelForm;
