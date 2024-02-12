import React from "react";

const Skills = ({ resumeData, setResumeData }) => {
  const handleSkillsChange = (e, index) => {
    const { value } = e.target;
    setResumeData((prevState) => {
      const updatedSkills = [...prevState.skills];
      updatedSkills[index] = value;
      return {
        ...prevState,
        skills: updatedSkills,
      };
    });
  };
  
  const handleRemoveSkill = (index) => {
    setResumeData((prevState) => {
      const updatedSkills = [...prevState.skills];
      updatedSkills.splice(index, 1);
      return {
        ...prevState,
        skills: updatedSkills,
      };
    });
  };
  return (
    <div className="form-section">
      <h2 className="section-heading">Skills</h2>
      <div className="form-group">
        <div className="skills-container">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="form-control skill-input">
            <input
              type="text"
              className="skill-input-block"
              value={skill}
              onChange={(e) => handleSkillsChange(e, index)}
              required
            />
            <button 
            className = "skill-danger"
            onClick={() => handleRemoveSkill(index)}
            >
              X
            </button>
          </div>
          ))}
        </div>
        <button
          className="btn btn-primary add-button"
          onClick={() =>
            setResumeData((prevState) => ({
              ...prevState,
              skills: [...prevState.skills, ""],
            }))
          }
        >
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default Skills;
