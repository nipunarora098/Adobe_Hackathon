import React from "react";

const CareerObjective = ({ resumeData, setResumeData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="form-section">
      <label><h2 className="section-heading">Career Objective</h2></label>
      <div className="form-group">
        <textarea
          className="form-control"
          name="career_objective"
          value={resumeData.career_objective}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
    </div>
  );
};

export default CareerObjective;
