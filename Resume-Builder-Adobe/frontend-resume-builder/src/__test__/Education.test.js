import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Education from "../components/MainPageComponents/Education";

describe("Education", () => {
  test("renders education fields with remove button", () => {
    const resumeData = {
      education: [
        {
          school_name: "School 1",
          passing_year: "2022",
          description: "Description 1",
        },
        {
          school_name: "School 2",
          passing_year: "2023",
          description: "Description 2",
        },
      ],
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Education
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Assert that the education entry is rendered correctly
    const SchoolNameInputs = screen.getAllByLabelText("School Name:", {
      selector: "input",
    });
    const PassingYearInputs = screen.getAllByLabelText("Passing Year:", {
      selector: "input",
    });
    const DescriptionInputs = screen.getAllByLabelText("Description:", {
      selector: "textarea",
    });
    // 1st education entry
    expect(SchoolNameInputs[0]).toHaveValue("School 1");
    expect(PassingYearInputs[0]).toHaveValue("2022");
    expect(DescriptionInputs[0]).toHaveValue("Description 1");
    // 2nd education entry
    expect(SchoolNameInputs[1]).toHaveValue("School 2");
    expect(PassingYearInputs[1]).toHaveValue("2023");
    expect(DescriptionInputs[1]).toHaveValue("Description 2");
  });

  test("adds a new education entry when add button is clicked", () => {
    const resumeData = {
      education: [
        {
          school_name: "School 1",
          passing_year: "2022",
          description: "Description 1",
        },
      ],
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Education
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Simulate clicking on the add button
    fireEvent.click(screen.getByText("Add Education"));

    // Assert that the new education entry is added
    const SchoolNameInputs = screen.getAllByLabelText("School Name:", {
      selector: "input",
    });
    const PassingYearInputs = screen.getAllByLabelText("Passing Year:", {
      selector: "input",
    });
    const DescriptionInputs = screen.getAllByLabelText("Description:", {
      selector: "textarea",
    });
    // 1st education entry
    expect(SchoolNameInputs[1]).toHaveValue("");
    expect(PassingYearInputs[1]).toHaveValue("");
    expect(DescriptionInputs[1]).toHaveValue("");
  });

  test("removes an education entry when remove button is clicked", () => {
    const resumeData = {
      education: [
        {
          school_name: "School 1",
          passing_year: "2022",
          description: "Description 1",
        },
        {
          school_name: "School 2",
          passing_year: "2023",
          description: "Description 2",
        },
      ],
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Education
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Simulate clicking on the remove button of the first education entry
    fireEvent.click(screen.getAllByText("Remove")[0]);

    // Assert that the first education entry is removed
    const SchoolNameInputs = screen.getAllByLabelText("School Name:", {
      selector: "input",
    });
    const PassingYearInputs = screen.getAllByLabelText("Passing Year:", {
      selector: "input",
    });
    const DescriptionInputs = screen.getAllByLabelText("Description:", {
      selector: "textarea",
    });
    // Checking first education entry of school 2
    expect(SchoolNameInputs[0]).toHaveValue("School 2");
    expect(PassingYearInputs[0]).toHaveValue("2023");
    expect(DescriptionInputs[0]).toHaveValue("Description 2");
  });
  test("updates education fields when school input value changes", () => {
    const resumeData = {
      education: [
        {
          school_name: "School 1",
          passing_year: "2022",
          description: "Description 1",
        },
      ],
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Education
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Simulate changing the input values of the first education entry
    fireEvent.change(screen.getByLabelText("School Name:"), {
      target: { value: "Updated School" },
    });

    // Assert that the education fields are updated
    expect(screen.getByLabelText("School Name:")).toHaveValue("Updated School");
    expect(screen.getByLabelText("Passing Year:")).toHaveValue("2022");
    expect(screen.getByLabelText("Description:")).toHaveValue("Description 1");
  });
  test("updates education fields when passing year input value changes", () => {
    const resumeData = {
      education: [
        {
          school_name: "School 1",
          passing_year: "2022",
          description: "Description 1",
        },
      ],
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Education
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Simulate changing the input value of passing year

    fireEvent.change(screen.getByLabelText("Passing Year:"), {
      target: { value: "2023" },
    });

    // Assert that the education fields are updated
    expect(screen.getByLabelText("School Name:")).toHaveValue("School 1");
    expect(screen.getByLabelText("Passing Year:")).toHaveValue("2023");
    expect(screen.getByLabelText("Description:")).toHaveValue("Description 1");
  });
  test("updates education fields when Description input value changes", () => {
    const resumeData = {
      education: [
        {
          school_name: "School 1",
          passing_year: "2022",
          description: "Description 1",
        },
      ],
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Education
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Simulate changing the input value of description
    fireEvent.change(screen.getByLabelText("Description:"), {
      target: { value: "Updated Description" },
    });

    // Assert that the education fields are updated
    expect(screen.getByLabelText("School Name:")).toHaveValue("School 1");
    expect(screen.getByLabelText("Passing Year:")).toHaveValue("2022");
    expect(screen.getByLabelText("Description:")).toHaveValue(
      "Updated Description"
    );
  });
});
