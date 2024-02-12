import React from "react";
import { render, screen } from "@testing-library/react";
import MainPagePC from "../pages/MainPagePC";

describe("MainPagePC", () => {
  test("renders the main page components", () => {
    render(<MainPagePC />);

    // Check if the main page components are rendered
    expect(screen.getByText("RESUME BUILDER")).toBeInTheDocument();
    expect(screen.getByText("Choose Template")).toBeInTheDocument();
    expect(screen.getByText("Personal Information")).toBeInTheDocument();
    expect(screen.getByText("Job Title")).toBeInTheDocument();
    expect(screen.getByText("Career Objective")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Achievements")).toBeInTheDocument();
    expect(screen.getByText("Generate Resume")).toBeInTheDocument();
  });
});
