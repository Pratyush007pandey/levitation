import React, { useState } from "react";

const FileUpload = ({ UpdateForm }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && isValidFileType(file)) {
      setSelectedFile(file);
      UpdateForm(file, "single_file");
      console.log(file);
    } else {
      setSelectedFile(null);
      alert("Please select a valid PNG or PDF file.");
    }
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
        onChange={handleFileChange}
        disabled={selectedFile !== null}
      />
      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
          <p>File size: {selectedFile.size}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
