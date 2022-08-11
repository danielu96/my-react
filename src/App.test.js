import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
test("renders learn react text", () => {
  render(<Card />);
  const Element = screen.getByText(/Zobacz/);
  expect(Element).toBeInTheDocument();
});
