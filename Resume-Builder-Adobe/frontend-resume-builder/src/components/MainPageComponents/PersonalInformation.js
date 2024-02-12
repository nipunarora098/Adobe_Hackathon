import React from "react";

const PersonalInformation = ({ resumeData, setResumeData }) => {
  const handlePersonal_Info_Change = (e) => {
    const { name, value } = e.target;
    setResumeData((prevState) => ({
      ...prevState,
      personal_information: {
        ...prevState.personal_information,
        [name]: value,
      },
    }));
  };
  return (
    <div>
      <div className="form-section">
        <h2 className="section-heading">Personal Information</h2>
        <div className="form-group two-fields-container">
          <div className="form-group">
            <label htmlFor = "FirstName">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={resumeData.personal_information.name}
              onChange={handlePersonal_Info_Change}
              required
              id = "FirstName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="LastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              name="last_names"
              value={resumeData.personal_information.last_names}
              onChange={handlePersonal_Info_Change}
              required
              id = "LastName"
            />
          </div>
        </div>
        <div className="form-group two-fields-container">
          <div className="form-group">
            <label htmlFor="Email">Email Address:</label>
            <input
              type="email"
              className="form-control"
              name="email_address"
              value={resumeData.personal_information.email_address}
              onChange={handlePersonal_Info_Change}
              required
              id = "Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="PhoneNum">Phone Number:</label>
            <input
              type="tel"
              className="form-control"
              name="phone_number"
              value={resumeData.personal_information.phone_number}
              onChange={handlePersonal_Info_Change}
              required
              id = "PhoneNum"
            />
          </div>
        </div>
      </div>
      <div className="form-section">
        <div className="form-group">
          <label htmlFor="LinkedIn">LinkedIn URL:</label>
          <input
            type="link"
            className="form-control"
            name="linkedin_url"
            value={resumeData.personal_information.linkedin_url}
            onChange={handlePersonal_Info_Change}
            required
            id = "LinkedIn"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
