import React, { useState, useRef } from "react";
import axios from "axios";
import "../css/MainPagePC.css";

function MainPagePC() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleSelectInvoices = () => {
    fileInputRef.current.value = null; // Reset the file input element
    setSelectedFiles([]); // Clear the selected files
    fileInputRef.current.click();
  };
  const handleConvertToExcel = () => {
    
    if (selectedFiles.length === 0) {
      alert("Please select files to convert.");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });
    
    axios
      .post(`http://localhost:5000/convert-to-excel`, formData, {
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Extracted_data.csv");
        link.style.display = "none";

        document.body.appendChild(link);
        link.click();

        window.URL.revokeObjectURL(url);
        link.remove();

        setLoading(false);
        
        setSelectedFiles([]);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="MainPage">
      <div className="container">
        <h1>PDF Invoices to Excel</h1>
        <div className="upload-container">
          <input
            type="file"
            className="upload-input"
            multiple
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <label className="upload-label" onClick={handleSelectInvoices}>
            Select Invoices
          </label>
        </div>
        <div className="upload-files">
          {selectedFiles.length === 0 ? (
            <p>No files selected</p>
          ) : (
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="submit-button-container">
          {loading ? (
            <button className="submit-button" disabled>
              Processing &nbsp;
              <div className="loader"> </div>
            </button>
          ) : (
            <button className="submit-button" onClick={handleConvertToExcel} >
              Convert to Excel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPagePC;
