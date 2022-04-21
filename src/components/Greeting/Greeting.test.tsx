import React from "react";
import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

describe("Greeting", () => {
  it("should render a greeting using hte passed name", () => {
    render(<Greeting name="Whitney" />);
    expect(screen.getByText(/Hello Whitney/gi)).toBeInTheDocument();
  });
});
