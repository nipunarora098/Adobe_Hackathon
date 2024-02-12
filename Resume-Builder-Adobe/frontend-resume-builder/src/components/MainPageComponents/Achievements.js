import React from "react";

const Achievements = ({ resumeData, setResumeData }) => {
  const handleAchievementsChange = (e, index, field) => {
    const { value } = e.target;
    setResumeData((prevState) => {
      const updatedAchievements = [...prevState.achievements];
      updatedAchievements[index][field] = value;
      return {
        ...prevState,
        achievements: updatedAchievements,
      };
    });
  };

  const removeAchievement = (index) => {
    setResumeData((prevState) => {
      const updatedAchievements = [...prevState.achievements];
      updatedAchievements.splice(index, 1);
      return {
        ...prevState,
        achievements: updatedAchievements,
      };
    });
  };

  return (
    <div className="form-section">
      <h2 className="section-heading">Achievements</h2>
      {resumeData.achievements.map((ach, index) => (
        <div key={index} className="achievement-entry">
          <div className="achievement-content">
            <div className="form-group two-fields-container">
              <div className="form-group">
                <label htmlFor={`field-${index}`}>Field:</label>
                <input
                  type="text"
                  className="form-control"
                  value={ach.field}
                  onChange={(e) => handleAchievementsChange(e, index, "field")}
                  required
                  id={`field-${index}`}
                />
              </div>
              <div className="form-group">
                <label htmlFor={`awards-${index}`}>Awards:</label>
                <input
                  type="text"
                  className="form-control"
                  value={ach.awards}
                  onChange={(e) => handleAchievementsChange(e, index, "awards")}
                  required
                  id={`awards-${index}`}
                />
              </div>
            </div>
          </div>
          <button
            className="btn btn-danger remove-button"
            onClick={() => removeAchievement(index)}
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
            achievements: [
              ...prevState.achievements,
              {
                field: "",
                awards: "",
              },
            ],
          }))
        }
      >
        Add Achievement
      </button>
    </div>
  );
};

export default Achievements;
