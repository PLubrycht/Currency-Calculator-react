import { render, screen, fireEvent } from "@testing-library/react";
import CurrencyForm from "./CurrencyForm";

test("calls onConvert with correct arguments", () => {
  const mockConvert = jest.fn();
  render(<CurrencyForm onConvert={mockConvert} />);

  fireEvent.change(screen.getByPlaceholderText(/enter value/i), {
    target: { value: "100" },
  });

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "USD" },
  });

  fireEvent.click(screen.getByText(/convert/i));

  expect(mockConvert).toHaveBeenCalledWith("100", "USD");
});
