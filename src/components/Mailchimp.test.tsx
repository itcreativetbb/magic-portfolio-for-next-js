import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Mailchimp } from "./Mailchimp";

describe("Mailchimp component", () => {
  test("displays an error message for an empty email", () => {
    render(<Mailchimp />);
    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.blur(emailInput);
    const errorMessage = screen.getByText("Please enter a valid email address.");
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays an error message for an invalid email", () => {
    render(<Mailchimp />);
    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.blur(emailInput);
    const errorMessage = screen.getByText("Please enter a valid email address.");
    expect(errorMessage).toBeInTheDocument();
  });

  test("does not display an error message for a valid email", () => {
    render(<Mailchimp />);
    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.blur(emailInput);
    const errorMessage = screen.queryByText("Please enter a valid email address.");
    expect(errorMessage).not.toBeInTheDocument();
  });
});
