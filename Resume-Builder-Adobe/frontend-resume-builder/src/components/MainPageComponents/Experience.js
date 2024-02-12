import React from "react";

const Experience = ({ resumeData, setResumeData }) => {
  const handleExperienceChange = (e, index, field) => {
    const { value } = e.target;
    setResumeData((prevState) => {
      const updatedExperience = [...prevState.experience];
      updatedExperience[index][field] = value;
      return {
        ...prevState,
        experience: updatedExperience,
      };
    });
  };

  const removeExperience = (index) => {
    setResumeData((prevState) => {
      const updatedExperience = [...prevState.experience];
      updatedExperience.splice(index, 1);
      return {
        ...prevState,
        experience: updatedExperience,
      };
    });
  };

  return (
    <div className="form-section">
      <h2 className="section-heading">Experience</h2>
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="experience-entry">
          <div className="form-group two-fields-container">
            <div className="form-group">
              <label htmlFor={`CompanyName-${index}`}>Company Name:</label>
              <input
                type="text"
                className="form-control"
                value={exp.company_name}
                onChange={(e) =>
                  handleExperienceChange(e, index, "company_name")
                }
                required
                id={`CompanyName-${index}`}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`ExpPassingYear-${index}`}>Passing Year:</label>
              <input
                type="text"
                className="form-control"
                value={exp.passing_year}
                onChange={(e) =>
                  handleExperienceChange(e, index, "passing_year")
                }
                required
                id={`ExpPassingYear-${index}`}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor={`ExpRespons-${index}`}>Responsibilities:</label>
            <textarea
              className="form-control"
              value={exp.responsibilities}
              onChange={(e) =>
                handleExperienceChange(e, index, "responsibilities")
              }
              id={`ExpRespons-${index}`}
            ></textarea>
          </div>
          <button
            className="btn btn-danger remove-button"
            onClick={() => removeExperience(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="btn btn-primary add-button"
        onClick={() =>
          setResumeData((prevState) => ({
            ...prevState,
            experience: [
              ...prevState.experience,
              {
                company_name: "",
                passing_year: "",
                responsibilities: "",
              },
            ],
          }))
        }
      >
        Add Experience
      </button>
    </div>
  );
};

export default Experience;
