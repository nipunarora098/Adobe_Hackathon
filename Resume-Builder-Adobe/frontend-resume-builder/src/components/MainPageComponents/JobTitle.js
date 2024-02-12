import React from "react";

const JobTitle = ({ resumeData, setResumeData }) => {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="form-section">
      <h2 className="section-heading">Job Title</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="job_title"
          value={resumeData.job_title}
          onChange={handleInputChange}
          required
          data-testid = "job-title-input"
        />
      </div>
    </div>
  );
};

export default JobTitle;
