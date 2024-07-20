// Breadcrumbs.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { Breadcrumbs } from "./Breadcrumbs";

describe("Breadcrumbs", () => {
  it("renders without crashing", () => {
    const crumbs = [{ label: "Home", slug: "/" }];
    render(<Breadcrumbs crumbs={crumbs} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders multiple crumbs correctly", () => {
    const crumbs = [
      { label: "Home", slug: "/" },
      { label: "About", slug: "/about" },
    ];
    render(<Breadcrumbs crumbs={crumbs} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText(">")).toBeInTheDocument();
  });

  it("renders text only for the last crumb", () => {
    const crumbs = [
      { label: "Home", slug: "/" },
      { label: "About", slug: "" },
    ];
    render(<Breadcrumbs crumbs={crumbs} />);
    const aboutElement = screen.getByText("About");
    expect(aboutElement.tagName).toBe("DIV");
  });

  it("does not render separator before the first crumb", () => {
    const crumbs = [{ label: "Home", slug: "/" }];
    render(<Breadcrumbs crumbs={crumbs} />);
    const separators = screen.queryAllByText(">");
    expect(separators.length).toBe(0);
  });
});
