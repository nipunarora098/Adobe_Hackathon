import React from "react";
const GenerateButton = ({ loading, handleGenerateResume }) => {
  return (
    <div className = "container">
      {loading ? (
        <button
          className="btn btn-success generate-button"
          style={{ fontSize: "20px" }}
          disabled
        >
          Generating &nbsp;
          <div className="loader1"> </div>
        </button>
      ) : (
        <button
          className="btn btn-success generate-button"
          onClick={handleGenerateResume}
          style={{ fontSize: "20px" }}
        >
          Generate Resume
        </button>
      )}
    </div>
  );
};

export default GenerateButton;
