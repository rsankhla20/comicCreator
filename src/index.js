import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Import React and other necessary libraries
// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// // import "./styles.css";

// // Define a custom component for each comic panel
// function ComicPanel({ index, text, image, setText, setImage }) {
//   // Handle the change of text input
//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   // Handle the click of generate button
//   const handleClick = async () => {
//     // Call the query function with the text input
//     const result = await query({ inputs: text });
//     // Convert the result to a URL
//     const url = URL.createObjectURL(result);
//     // Set the image state to the URL
//     setImage(url);
//   };

//   return (
//     <div className="panel">
//       <h3>Panel {index + 1}</h3>
//       <div className="input">
//         <label htmlFor={`text-${index}`}>Text:</label>
//         <input
//           id={`text-${index}`}
//           type="text"
//           value={text}
//           onChange={handleChange}
//         />
//         <button onClick={handleClick}>Generate</button>
//       </div>
//       <div className="output">
//         {image ? (
//           <img src={image} alt={`Comic panel ${index + 1}`} />
//         ) : (
//           <p>No image yet</p>
//         )}
//       </div>
//     </div>
//   );
// }

// // Define a custom component for the comic strip
// function ComicStrip() {
//   // Define an array of 10 objects for storing the text and image states of each panel
//   const [panels, setPanels] = useState(
//     Array(10)
//       .fill(null)
//       .map(() => ({ text: "", image: "" }))
//   );

//   // Define a function to update the text state of a panel
//   const setText = (index, value) => {
//     // Copy the panels array
//     const newPanels = [...panels];
//     // Update the text property of the panel at the given index
//     newPanels[index].text = value;
//     // Set the panels state to the new array
//     setPanels(newPanels);
//   };

//   // Define a function to update the image state of a panel
//   const setImage = (index, value) => {
//     // Copy the panels array
//     const newPanels = [...panels];
//     // Update the image property of the panel at the given index
//     newPanels[index].image = value;
//     // Set the panels state to the new array
//     setPanels(newPanels);
//   };

//   return (
//     <div className="strip">
//       {panels.map((panel, index) => (
//         <ComicPanel
//           key={index}
//           index={index}
//           text={panel.text}
//           image={panel.image}
//           setText={(value) => setText(index, value)}
//           setImage={(value) => setImage(index, value)}
//         />
//       ))}
//     </div>
//   );
// }

// // Define the query function to call the text-to-image API
// async function query(data) {
//   const response = await fetch(
//     "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
//     {
//       headers: {
//         Accept: "image/png",
//         Authorization:
//           "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//       body: JSON.stringify(data),
//     }
//   );
//   const result = await response.blob();
//   return result;
// }

// // Render the comic strip component to the root element
// ReactDOM.render(<ComicStrip />, document.getElementById("root"));
