import React , {useState} from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import JobTitle from "../components/MainPageComponents/JobTitle";

describe("JobTitle", () => {
  test("renders job title input", () => {
    const resumeData = {
        job_title :"Software Developer",
    }
    const TestComponent = () => {
        const [resumeDataState, setResumeDataState] = useState(resumeData);
  
        return (
          <JobTitle
            resumeData={resumeDataState}
            setResumeData={setResumeDataState}
          />
        );
      };
  
      render(<TestComponent />);

    expect(screen.getByTestId("job-title-input")).toHaveValue(
        "Software Developer"
    );
  });
  test("renders job title input and updates state on change", () => {
    const resumeData = {
        job_title :"Software Developer",
    }
    const TestComponent = () => {
        const [resumeDataState, setResumeDataState] = useState(resumeData);
  
        return (
          <JobTitle
            resumeData={resumeDataState}
            setResumeData={setResumeDataState}
          />
        );
      };
  
      render(<TestComponent />);
    const newJobTitle = "Full Stack Engineer";
    fireEvent.change(screen.getByTestId("job-title-input"), { target: { value: newJobTitle } });
    expect(screen.getByTestId("job-title-input")).toHaveValue(newJobTitle);
  });
});
