// This module exports a function named `validateForm` that takes in an object `resumeData` as an argument and checks if the data in the object is valid.
// Return true if no empty field is present.
const validateForm = (resumeData) => {
  const template_id = String(resumeData.template_id);
  const { name, last_names, email_address, phone_number, linkedin_url } =
    resumeData.personal_information;
  const job_title = resumeData.job_title;
  const career_objective = resumeData.career_objective;
  const isSkillsValid = resumeData.skills.every((skill) => skill.trim() !== "");
  const isEducationValid = resumeData.education.every(
    (edu) =>
      edu.school_name.trim() !== "" &&
      edu.passing_year.trim() !== "" &&
      edu.description.trim() !== ""
  );
  const isExperienceValid = resumeData.experience.every(
    (exp) =>
      exp.company_name.trim() !== "" &&
      exp.passing_year.trim() !== "" &&
      exp.responsibilities.trim() !== ""
  );
  const isAchievementsValid = resumeData.achievements.every(
    (ach) => ach.field.trim() !== "" && ach.awards.trim() !== ""
  );

  return (
    template_id.trim() !== "" &&
    name.trim() !== "" &&
    last_names.trim() !== "" &&
    email_address.trim() !== "" &&
    phone_number.trim() !== "" &&
    linkedin_url.trim() !== "" &&
    job_title.trim() !== "" &&
    career_objective.trim() !== "" &&
    isSkillsValid &&
    isEducationValid &&
    isExperienceValid &&
    isAchievementsValid
  );
};
module.exports = { validateForm };
