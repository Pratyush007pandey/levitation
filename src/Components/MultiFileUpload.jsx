import React, { useState } from "react";

const MultiFileUpload = ({ UpdateForm }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const updatedFiles = [...selectedFiles];

    // Check the number of files selected
    if (files.length + selectedFiles.length > 5) {
      alert("You can only upload a maximum of 5 files.");
      return;
    }

    // Iterate through each selected file
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (isValidFileType(file)) {
        updatedFiles.push(file);
      } else {
        alert(`File '${file.name}' is not a valid PNG or PDF file.`);
      }
    }
    console.log(updatedFiles);
    setSelectedFiles(updatedFiles);
    UpdateForm(updatedFiles, "multi_file");
  };

  const isValidFileType = (file) => {
    const fileType = file.type;
    return fileType === "image/png" || fileType === "application/pdf";
  };

  return (
    <div className="form-dynamic">
      <input
        type="file"
        accept=".png,.pdf"
        multiple
        onChange={handleFileChange}
        disabled={selectedFiles.length >= 5}
      />
      {selectedFiles.length > 0 && (
        <div>
          <p>Selected files:</p>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiFileUpload;
