import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CareerObjective from "../components/MainPageComponents/CareerObjective";

describe("CareerObjective", () => {
  test("renders career objective textarea", () => {
    const resumeData = {
      career_objective: "Lorem ipsum dolor sit amet",
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <CareerObjective
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    expect(screen.getByRole("textbox")).toHaveValue(
      "Lorem ipsum dolor sit amet"
    );
  });

  test("updates career objective when input value changes", () => {
    const resumeData = {
      career_objective: "Lorem ipsum dolor sit amet",
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <CareerObjective
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Updated career objective" },
    });

    expect(screen.getByRole("textbox")).toHaveValue("Updated career objective");
  });
});
