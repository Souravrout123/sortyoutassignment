
import React, { useState } from "react";

const fileBoxStyle = {
  width: "200px",
  height: "200px",
  backgroundColor: "grey",
  border: "2px solid #333",
  textAlign: "center",
  lineHeight: "100px",
  fontSize: "18px",
  margin: "10px",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const containersStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const hideFileInputText = {

  color: "transparent",
  textIndent: "-9999px", 
};

const FileBoxes = () => {
  const [selectedFiles, setSelectedFiles] = useState(new Array(4).fill(null));

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedSelectedFiles = [...selectedFiles];
        updatedSelectedFiles[index] = e.target.result;
        setSelectedFiles(updatedSelectedFiles);
        localStorage.setItem(`fileBox-${index}`, e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Let them Who are the best</h1>
      <p>Loreum ipsum is simply dummy text</p>
      <div style={containersStyle}>
        {selectedFiles.map((fileData, index) => (
          <div key={index}>
            {fileData ? (
              <img
                src={fileData}
                alt={`File ${index}`}
                style={fileBoxStyle}
              />
            ) : (
              <input
                type="file"
                style={{ ...fileBoxStyle, ...hideFileInputText }}
                onChange={(event) => handleFileChange(event, index)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileBoxes;

