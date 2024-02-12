import React from "react";

const TemplateSelector = ({ templateImages, resumeData, setResumeData }) => {
  const handleTemplateSelect = (templateId) => {
    setResumeData((prevState) => ({
      ...prevState,
      template_id: templateId, // Set the selected template ID
    }));
  };
  return (
    <div className="template-section">
      <h2 className="section-heading">Choose Template</h2>
      <div className="template-list">
        {templateImages.map((templateImage, index) => (
          <div
            key={index}
            className={`template-item ${
              resumeData.template_id === index + 1 ? "selected" : ""
            }`}
            onClick={() => handleTemplateSelect(index + 1)}
            data-testid={`template-item-${index + 1}`}
          >
            {resumeData.template_id === index + 1 && (
              <div className="selected-tick"></div>
            )}
            <img
              src={templateImage}
              alt={`Template ${index + 1} Preview`}
              className="template-preview"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
