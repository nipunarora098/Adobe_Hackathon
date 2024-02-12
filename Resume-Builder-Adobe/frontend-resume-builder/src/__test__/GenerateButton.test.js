import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import GenerateButton from "../components/MainPageComponents/GenerateButton";

describe("GenerateButton", () => {
  test("renders generate button when not loading", () => {
    const handleGenerateResume = jest.fn();
    const loading = false;

    render(
      <GenerateButton
        loading={loading}
        handleGenerateResume={handleGenerateResume}
      />
    );

    const generateButton = screen.getByText("Generate Resume");
    expect(generateButton).toBeInTheDocument();

    fireEvent.click(generateButton);
    expect(handleGenerateResume).toHaveBeenCalledTimes(1);
  });

  test("renders loading button when loading", () => {
    const loading = true;

    render(
      <GenerateButton loading={loading} handleGenerateResume={() => {}} />
    );

    const loadingButton = screen.getByText("Generating");
    expect(loadingButton).toBeInTheDocument();
    expect(loadingButton).toBeDisabled();
  });
});
