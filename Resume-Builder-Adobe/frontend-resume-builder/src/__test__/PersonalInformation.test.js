import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import PersonalInformation from "../components/MainPageComponents/PersonalInformation";

describe("PersonalInformation", () => {
  test("renders personal information inputs", () => {
    const resumeData = {
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://www.linkedin.com/in/johndoe",
      },
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <PersonalInformation
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    const nameInput = screen.getByLabelText("Name:");
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue("John");

    const lastNameInput = screen.getByLabelText("Last Name:");
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).toHaveValue("Doe");

    const emailInput = screen.getByLabelText("Email Address:");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue("john.doe@example.com");

    const phoneInput = screen.getByLabelText("Phone Number:");
    expect(phoneInput).toBeInTheDocument();
    expect(phoneInput).toHaveValue("1234567890");

    const linkedinInput = screen.getByLabelText("LinkedIn URL:");
    expect(linkedinInput).toBeInTheDocument();
    expect(linkedinInput).toHaveValue("https://www.linkedin.com/in/johndoe");
  });

  test("updates personal information state on First Name change", () => {
    const resumeData = {
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://www.linkedin.com/in/johndoe",
      },
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <PersonalInformation
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);
    fireEvent.change(screen.getByLabelText("Name:"), {
      target: { value: "Jane" },
    });
    expect(screen.getByLabelText("Name:")).toHaveValue("Jane");
  });

  test("updates personal information state on Last Name change", () => {
    const resumeData = {
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://www.linkedin.com/in/johndoe",
      },
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <PersonalInformation
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);
    fireEvent.change(screen.getByLabelText("Last Name:"), {
      target: { value: "Singh" },
    });
    expect(screen.getByLabelText("Last Name:")).toHaveValue("Singh");
  });

  test("updates personal information state on Email change", () => {
    const resumeData = {
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://www.linkedin.com/in/johndoe",
      },
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <PersonalInformation
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);
    fireEvent.change(screen.getByLabelText("Email Address:"), {
      target: { value: "john.doe@adobe.com" },
    });
    expect(screen.getByLabelText("Email Address:")).toHaveValue(
      "john.doe@adobe.com"
    );
  });

  test("updates personal information state on Phone Number change", () => {
    const resumeData = {
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://www.linkedin.com/in/johndoe",
      },
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <PersonalInformation
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);
    fireEvent.change(screen.getByLabelText("Phone Number:"), {
      target: { value: "9518286744" },
    });
    expect(screen.getByLabelText("Phone Number:")).toHaveValue("9518286744");
  });

  test("updates personal information state on LinkedIn URL change", () => {
    const resumeData = {
      personal_information: {
        name: "John",
        last_names: "Doe",
        email_address: "john.doe@example.com",
        phone_number: "1234567890",
        linkedin_url: "https://www.linkedin.com/in/johndoe",
      },
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <PersonalInformation
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);
    fireEvent.change(screen.getByLabelText("LinkedIn URL:"), {
      target: { value: "https://www.linkedin.com/in/johndoe12" },
    });
    expect(screen.getByLabelText("LinkedIn URL:")).toHaveValue(
      "https://www.linkedin.com/in/johndoe12"
    );
  });
});
