import React, { useState } from "react";
import "../css/MainPagePC.css"; // Import custom CSS file
import TemplateSelector from "../components/MainPageComponents/TemplateSelector";
import PersonalInformation from "../components/MainPageComponents/PersonalInformation";
import JobTitle from "../components/MainPageComponents/JobTitle";
import CareerObjective from "../components/MainPageComponents/CareerObjective";
import Skills from "../components/MainPageComponents/Skills";
import Education from "../components/MainPageComponents/Education";
import Experience from "../components/MainPageComponents/Experience";
import Achievements from "../components/MainPageComponents/Achievements";
import GenerateButton from "../components/MainPageComponents/GenerateButton";
import validateForm from "../components/MainPageComponents/formValidation";
const templateImages = [];
for (let i = 1; i <= 3; i++) {
  const templateImage = require(`../templates/BasicTemplate${i}.jpg`);
  templateImages.push(templateImage);
}
function MainPagePC() {
  const [loading , setLoading] = useState(false);
  const [resumeData, setResumeData] = useState({
    template_id: "",
    personal_information: {
      name: "",
      last_names: "",
      email_address: "",
      phone_number: "",
      linkedin_url: "",
    },
    job_title: "",
    career_objective: "",
    skills: [""],
    education: [
      {
        school_name: "",
        passing_year: "",
        description: "",
      },
    ],
    experience: [
      {
        company_name: "",
        passing_year: "",
        responsibilities: "",
      },
    ],
    achievements: [
      {
        field: "",
        awards: "",
      },
    ],
  });

  
  const handleGenerateResume = () => {
    const template_id = String(resumeData.template_id);
    console.log(typeof(template_id));
    if(template_id.trim() === "") {
      alert("Choose Template");
      return ;
    }
    const isFormValid = validateForm(resumeData);
    if (!isFormValid) {
      alert("Please fill in all fields");
      return;
    }
    console.log(resumeData);
    setLoading(true);
    fetch("http://localhost:8080/resume", {
      method: "POST",
      headers: {
        Accept: "application/pdf",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resumeData),
    })
      .then((response) => response.blob())
      .then((blob) => {
        if(blob.status === 500){
          alert("Error generating resume");
          return;
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Resume.pdf");
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        window.open(url, "_blank");
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error generating resume:", error);
        setLoading(false);
      });
  };
  
  return (
    <div className="container">
      <h1 className="page-heading">RESUME BUILDER</h1>
      <TemplateSelector
        templateImages={templateImages}
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <PersonalInformation
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <JobTitle
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <CareerObjective
        resumeData={resumeData}
        setResumeData = {setResumeData}
      />
      <Skills
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <Education
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <Experience
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <Achievements
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <GenerateButton
        loading={loading}
        handleGenerateResume={handleGenerateResume}
      />
      
      
    </div>
  );
}

export default MainPagePC;
