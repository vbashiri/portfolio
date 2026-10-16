import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders the hero and project grid", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Vahid");
  expect(screen.getByRole("heading", { name: "Games I’ve built" })).toBeInTheDocument();
});

it("renders a project page from the hash", () => {
  window.location.hash = "#/projects/flying-hills";
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Flying Hills");
  expect(screen.getByRole("heading", { name: "What I did" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /All games/ })).toHaveAttribute("href", "#work");
  window.location.hash = "";
});
