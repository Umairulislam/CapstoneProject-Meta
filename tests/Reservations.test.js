import Reservations from "../src/components/Reservations"; // Assuming the component's location
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // For complex user interactions
import { expect } from 'vitest';


test("renders the 'Book Your Table Now' page title", () => {
    render(<Reservations />);
    const pageTitle = screen.getByText(/Book Your Table Now/i);
    expect(pageTitle).toBeInTheDocument();
  });

  test("displays error for missing date when submitting", () => {
    render(<Reservations />);
    fireEvent.click(screen.getByText(/Make your reservation/i));
    const errorMessage = screen.getByText(/Please choose a date/i);
    expect(errorMessage).toBeInTheDocument();
  });
  test("displays error for invalid time outside allowed range", () => {
    render(<Reservations />);
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: "14:00" } });
    fireEvent.click(screen.getByText(/Make your reservation/i));
    const errorMessage = screen.getByText(/Please choose a time between 5:00 PM and 10:00 PM/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays error for invalid number of guests exceeding maximum", () => {
    render(<Reservations />);
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: "15" } });
    fireEvent.click(screen.getByText(/Make your reservation/i));
    const errorMessage = screen.getByText(/Please choose a guests between 1 and 10/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("resets form data after successful submission", () => {
    render(<Reservations />);
    // Fill in valid form data
    fireEvent.click(screen.getByText(/Make your reservation/i));
    expect(formData).toEqual({ date: "", time: "", guests: "", occasion: "" });
  });
  