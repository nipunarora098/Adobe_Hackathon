import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TemplateSelector from "../components/MainPageComponents/TemplateSelector";
import { toHaveClass } from "@testing-library/jest-dom";
describe("TemplateSelector", () => {
  test("renders the template images", () => {
    const templateImages = ["template1.jpg", "template2.jpg", "template3.jpg"];
    const resumeData = {
      template_id: 2,
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <TemplateSelector
          templateImages={templateImages}
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Check if the template images are rendered
    const templatePreviews = screen.getAllByAltText(
      (content, element) =>
        element.tagName.toLowerCase() === "img" &&
        content.startsWith("Template")
    );
    expect(templatePreviews).toHaveLength(templateImages.length);

    // Check if the template ID is set correctly for the selected template
    expect(
      screen.getByTestId("template-item-2").classList.contains("selected")
    ).toBe(true);
  });

  test("calls setResumeData with the selected template ID", () => {
    const templateImages = ["template1.jpg", "template2.jpg", "template3.jpg"];
    const resumeData = {
      template_id: 2,
    };
    const TestComponent = () => {
      const [resumeDataState, setResumeDataState] = useState(resumeData);

      return (
        <TemplateSelector
          templateImages={templateImages}
          resumeData={resumeDataState}
          setResumeData={setResumeDataState}
        />
      );
    };

    render(<TestComponent />);

    // Find the template item for the third template
    const templateItem = screen.getByTestId("template-item-3");

    // Simulate a click event on the template item
    fireEvent.click(templateItem);

    // checking 3rd template contain selected class 
    const selectedTemplateItem = screen.getByTestId("template-item-3");
    expect(selectedTemplateItem).toHaveClass("selected");
    
  });
});
