import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Achievements from "../components/MainPageComponents/Achievements";

const resumeData = {
  achievements: [
    { field: "Field 1", awards: "Awards 1" },
    { field: "Field 2", awards: "Awards 2" },
  ],
};

describe("Achievements", () => {
  test("renders achievements with remove button", () => {
    const setResumeData = jest.fn();
    render(
      <Achievements resumeData={resumeData} setResumeData={setResumeData} />
    );

    const fieldInputs = screen.getAllByLabelText("Field:", {
      selector: "input",
    });
    const awardsInputs = screen.getAllByLabelText("Awards:", {
      selector: "input",
    });

    // Assert that each achievement is rendered correctly
    expect(fieldInputs[0]).toHaveValue("Field 1");
    expect(awardsInputs[0]).toHaveValue("Awards 1");
    expect(fieldInputs[1]).toHaveValue("Field 2");
    expect(awardsInputs[1]).toHaveValue("Awards 2");
  });

  test("removes an achievement when remove button is clicked", () => {
    const setResumeDataMock = jest.fn();

    render(
      <Achievements resumeData={resumeData} setResumeData={setResumeDataMock} />
    );

    // Simulate clicking on the remove button of the first achievement
    fireEvent.click(screen.getAllByText("Remove")[1]);

    // Assert that the first achievement is removed
    // console.log(setResumeDataMock.mock.calls); // Log the arguments received by setResumeDataMock
    expect(setResumeDataMock).toHaveBeenCalledTimes(1);
    const fieldInputs = screen.getAllByLabelText("Field:", {
      selector: "input",
    });
    const awardsInputs = screen.getAllByLabelText("Awards:", {
      selector: "input",
    });
    expect(fieldInputs[0]).toHaveValue("Field 1");
    expect(awardsInputs[0]).toHaveValue("Awards 1");
  });

  test("adds a new achievement when add button is clicked", () => {
    const resumeData = {
      achievements: [
        { field: "Field 1", awards: "Awards 1" },
        { field: "Field 2", awards: "Awards 2" },
      ],
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Achievements
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Simulate clicking on the add button
    fireEvent.click(screen.getByText("Add Achievement"));

    // Assert that a new empty achievement is added
    const fieldInputs = screen.getAllByLabelText("Field:", {
      selector: "input",
    });
    const awardsInputs = screen.getAllByLabelText("Awards:", {
      selector: "input",
    });
    expect(fieldInputs[0]).toHaveValue("Field 1");
    expect(awardsInputs[0]).toHaveValue("Awards 1");
    expect(fieldInputs[1]).toHaveValue("Field 2");
    expect(awardsInputs[1]).toHaveValue("Awards 2");
    expect(fieldInputs[2]).toHaveValue("");
    expect(awardsInputs[2]).toHaveValue("");
  });

  test("updates achievements when Field input value changes", () => {
    const resumeData = {
      achievements: [{ field: "Field 1", awards: "Awards 1" }],
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Achievements
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Get the input element for the first achievement
    const fieldInput = screen.getByLabelText("Field:", { selector: "input" });

    // Simulate a change event on the input
    fireEvent.change(fieldInput, { target: { value: "Updated Field" } });

    // Check if the setResumeData function was called with the updated achievements
    expect(screen.getByLabelText("Field:", { selector: "input" })).toHaveValue(
      "Updated Field"
    );
  });

  test("updates achievements when Award input value changes", () => {
    const resumeData = {
      achievements: [{ field: "Field 1", awards: "Awards 1" }],
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Achievements
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Get the input element for the first achievement
    const fieldInput = screen.getByLabelText("Awards:", { selector: "input" });

    // Simulate a change event on the input
    fireEvent.change(fieldInput, { target: { value: "Updated Award" } });

    // Check if the setResumeData function was called with the updated achievements
    expect(screen.getByLabelText("Awards:", { selector: "input" })).toHaveValue(
      "Updated Award"
    );
  });
});
