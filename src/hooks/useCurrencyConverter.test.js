import { renderHook, act } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import useCurrencyConverter from "./useCurrencyConverter";
import * as fetchModule from "../services/fetchCurrencyData"; // 👈 import modułu

jest.mock("../services/fetchCurrencyData"); // 👈 mock całego modułu

beforeEach(() => {
  fetchModule.fetchCurrencyData.mockResolvedValue("400.00 PLN"); // 👈 podstawowa wartość
});

afterEach(() => {
  jest.clearAllMocks();
});

it("returns converted value on success", async () => {
  const { result } = renderHook(() => useCurrencyConverter());

  await act(async () => {
    await result.current.handleConvert("100", "USD");
  });

  await waitFor(() => {
    expect(result.current.result).toBe("400.00 PLN");
  });

  expect(result.current.error).toBe("");
  expect(result.current.loading).toBe(false);
});
