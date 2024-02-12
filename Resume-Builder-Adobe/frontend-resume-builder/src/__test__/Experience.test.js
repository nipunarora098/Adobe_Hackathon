import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Experience from "../components/MainPageComponents/Experience";

describe("Experience", () => {
  test("renders experience entries with input fields", () => {
    const resumeData = {
      experience: [
        {
          company_name: "Company A",
          passing_year: "2020",
          responsibilities: "Lorem ipsum dolor sit amet",
        },
        {
          company_name: "Company B",
          passing_year: "2021",
          responsibilities: "Consectetur adipiscing elit",
        },
      ],
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Experience
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Assert that the education entry is rendered correctly
    const CompanyNameInputs = screen.getAllByLabelText("Company Name:", {
      selector: "input",
    });
    const PassingYearInputs = screen.getAllByLabelText("Passing Year:", {
      selector: "input",
    });
    const DescriptionInputs = screen.getAllByLabelText("Responsibilities:", {
      selector: "textarea",
    });
    // 1st education entry
    expect(CompanyNameInputs[0]).toHaveValue("Company A");
    expect(PassingYearInputs[0]).toHaveValue("2020");
    expect(DescriptionInputs[0]).toHaveValue("Lorem ipsum dolor sit amet");
    // 2nd education entry
    expect(CompanyNameInputs[1]).toHaveValue("Company B");
    expect(PassingYearInputs[1]).toHaveValue("2021");
    expect(DescriptionInputs[1]).toHaveValue("Consectetur adipiscing elit");
  });

  test("adds a new experience entry when add button is clicked", () => {
    const resumeData = {
      experience: [
        {
          company_name: "Company A",
          passing_year: "2020",
          responsibilities: "Lorem ipsum dolor sit amet",
        },
      ],
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Experience
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Simulate clicking on the add button
    fireEvent.click(screen.getByText("Add Experience"));

    // Assert that a new input field is added
    expect(screen.getAllByLabelText("Company Name:")).toHaveLength(2);
    expect(screen.getAllByLabelText("Passing Year:")).toHaveLength(2);
    expect(screen.getAllByLabelText("Responsibilities:")).toHaveLength(2);
  });

  test("removes an experience entry when remove button is clicked", () => {
    const resumeData = {
      experience: [
        {
          company_name: "Company A",
          passing_year: "2020",
          responsibilities: "Lorem ipsum dolor sit amet",
        },
        {
          company_name: "Company B",
          passing_year: "2021",
          responsibilities: "Consectetur adipiscing elit",
        },
      ],
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Experience
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Simulate clicking on the remove button of the first experience entry
    fireEvent.click(screen.getAllByText("Remove")[0]);

    // Assert that the first experience entry is removed
    const CompanyNameInputs = screen.getAllByLabelText("Company Name:", {
      selector: "input",
    });
    const PassingYearInputs = screen.getAllByLabelText("Passing Year:", {
      selector: "input",
    });
    const DescriptionInputs = screen.getAllByLabelText("Responsibilities:", {
      selector: "textarea",
    });

    // Assert that the second experience entry still exists
    expect(CompanyNameInputs[0]).toHaveValue("Company B");
    expect(PassingYearInputs[0]).toHaveValue("2021");
    expect(DescriptionInputs[0]).toHaveValue("Consectetur adipiscing elit");
  });
  test("updates experience fields when company_name value changes", () => {
    const resumeData = {
      experience: [
        {
          company_name: "Company A",
          passing_year: "2020",
          responsibilities: "Lorem ipsum dolor sit amet",
        },
      ],
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Experience
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Simulate changing the input value of the first experience Company name
    fireEvent.change(screen.getByLabelText("Company Name:"), {
      target: { value: "New Company" },
    });

    // Assert that the value has been updated
    expect(screen.getByLabelText("Company Name:")).toHaveValue("New Company");
  });
  test("updates experience fields when passing_year changes", () => {
    const resumeData = {
      experience: [
        {
          company_name: "Company A",
          passing_year: "2020",
          responsibilities: "Lorem ipsum dolor sit amet",
        },
      ],
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Experience
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);
    // Simulate changing the passing_year value of the second experience entry
    fireEvent.change(screen.getByLabelText("Passing Year:"), {
      target: { value: "2022" },
    });

    // Assert that the value has been updated
    expect(screen.getByLabelText("Passing Year:")).toHaveValue("2022");
  });
  test("updates experience fields when responsibilities input value changes", () => {
    const resumeData = {
      experience: [
        {
          company_name: "Company A",
          passing_year: "2020",
          responsibilities: "Lorem ipsum dolor sit amet",
        },
      ],
    };

    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <Experience
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Simulate changing the input value of the third experience entry
    fireEvent.change(screen.getByLabelText("Responsibilities:"), {
      target: { value: "Updated responsibilities" },
    });

    // Assert that the value has been updated
    expect(screen.getByLabelText("Responsibilities:")).toHaveValue(
      "Updated responsibilities"
    );
  });
});
