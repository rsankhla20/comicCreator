import React, { useState } from "react";

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
}) => {
  const [text, setText] = useState(panelText);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleGenerate = async () => {
    setLoading(true, index); // Set loading state for the specific panel

    try {
      const imageData = await query({ inputs: text });
      const updatedImages = [...panelImage];
      updatedImages[index] = imageData;
      onGenerate(index, updatedImages);
    } catch (error) {
      console.error("Error generating image:", error);
      // Handle error as needed
    } finally {
      setLoading(false, index); // Reset loading state for the specific panel
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
      <button onClick={handleGenerate} disabled={loading[index]}>
        {loading[index] ? "Generating..." : "Generate"}
      </button>
      {panelImage[index] ? (
        <img
          src={URL.createObjectURL(new Blob([panelImage[index]]))}
          alt={`Panel ${index + 1}`}
        />
      ) : (
        <div>Image not generated</div>
      )}
    </div>
  );
};

export default PanelForm;
