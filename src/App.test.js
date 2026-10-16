import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders the hero and project grid", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Vahid");
  expect(screen.getByRole("heading", { name: "Games I’ve built" })).toBeInTheDocument();
});
