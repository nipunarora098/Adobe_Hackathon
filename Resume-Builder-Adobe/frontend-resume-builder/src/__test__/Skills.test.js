import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Skills from "../components/MainPageComponents/Skills";

describe("Skills", () => {
  test("renders the skills input fields", () => {
    const resumeData = {
      skills: ["JavaScript", "React", "HTML"],
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Skills
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Check if the skills input fields are rendered
    const skillInputs = screen.getAllByRole("textbox");
    expect(skillInputs).toHaveLength(resumeData.skills.length);

    // Check if the skill values are displayed correctly
    expect(skillInputs[0].value).toBe(resumeData.skills[0]);
    expect(skillInputs[1].value).toBe(resumeData.skills[1]);
    expect(skillInputs[2].value).toBe(resumeData.skills[2]);
  });

  test("updates skills when input fields change", () => {
    const resumeData = {
      skills: ["JavaScript", "React", "HTML"],
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Skills
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Find the skill input field
    const skillInputs = screen.getAllByRole("textbox");

    // Simulate a change event on the skill input field
    fireEvent.change(skillInputs[0], { target: { value: "TypeScript" } });

    // check skill is updated
    expect(skillInputs[0].value).toBe("TypeScript");
  });

  test("removes a skill when the remove button is clicked", () => {
    const resumeData = {
      skills: ["JavaScript", "React", "HTML"],
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Skills
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);
    // Find the remove button for the second skill
    const removeButton = screen.getAllByText("X")[1];

    // Simulate a click event on the remove button
    fireEvent.click(removeButton);

    // Check the skills array
    const skillInputs = screen.getAllByRole("textbox");
    expect(skillInputs[0].value).toBe("JavaScript");
    expect(skillInputs[1].value).toBe("HTML");
  });

  test("adds a skill when the add button is clicked", () => {
    const resumeData = {
      skills: ["JavaScript", "React"],
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Skills
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Find the add button
    const addButton = screen.getByText("Add Skill");

    // Simulate a click event on the add button
    fireEvent.click(addButton);

    // Check skills array including the added skill
    // Check the skills array
    const skillInputs = screen.getAllByRole("textbox");
    expect(skillInputs[2].value).toBe("");
  });
});
