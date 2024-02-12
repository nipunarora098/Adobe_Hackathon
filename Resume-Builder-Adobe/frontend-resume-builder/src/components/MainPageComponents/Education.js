import React from "react";

const Education = ({ resumeData, setResumeData }) => {
  const handleEducationChange = (e, index, field) => {
    const { value } = e.target;
    setResumeData((prevState) => {
      const updatedEducation = [...prevState.education];
      updatedEducation[index][field] = value;
      return {
        ...prevState,
        education: updatedEducation,
      };
    });
  };

  const removeEducation = (index) => {
    setResumeData((prevState) => {
      const updatedEducation = [...prevState.education];
      updatedEducation.splice(index, 1);
      return {
        ...prevState,
        education: updatedEducation,
      };
    });
  };

  return (
    <div className="form-section">
      <h2 className="section-heading">Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="education-entry">
          <div className="form-group two-fields-container">
            <div className="form-group">
              <label htmlFor={`school_name-${index}`}>School Name:</label>
              <input
                type="text"
                className="form-control"
                value={edu.school_name}
                onChange={(e) => handleEducationChange(e, index, "school_name")}
                required
                id={`school_name-${index}`}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`Passing_Year-${index}`}>Passing Year:</label>
              <input
                type="text"
                className="form-control"
                value={edu.passing_year}
                onChange={(e) =>
                  handleEducationChange(e, index, "passing_year")
                }
                required
                id={`Passing_Year-${index}`}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor={`description-${index}`}>Description:</label>
            <textarea
              className="form-control"
              value={edu.description}
              onChange={(e) => handleEducationChange(e, index, "description")}
              required
              id={`description-${index}`}
            ></textarea>
          </div>
          <button
            className="btn btn-danger remove-button"
            onClick={() => removeEducation(index)}
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
            education: [
              ...prevState.education,
              {
                school_name: "",
                passing_year: "",
                description: "",
              },
            ],
          }))
        }
      >
        Add Education
      </button>
    </div>
  );
};

export default Education;
