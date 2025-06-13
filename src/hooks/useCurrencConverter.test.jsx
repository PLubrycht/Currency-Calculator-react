import { renderHook, act } from "@testing-library/react";
import useCurrencyConverter from "./useCurrencyConverter";

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          rates: [
            { code: "USD", mid: 4.0 },
            { code: "EUR", mid: 4.5 },
            { code: "CHF", mid: 4.8 },
          ],
        },
      ]),
  })
);

describe("useCurrencyConverter", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("returns converted value on success", async () => {
    const { result } = renderHook(() => useCurrencyConverter());

    await act(async () => {
      await result.current.handleConvert("100", "USD");
    });

    expect(result.current.result).toBe("400.00 PLN");
    expect(result.current.error).toBe("");
    expect(result.current.loading).toBe(false);
  });

  it("sets error if currency not found", async () => {
    const { result } = renderHook(() => useCurrencyConverter());

    await act(async () => {
      await result.current.handleConvert("100", "ABC");
    });

    expect(result.current.result).toBe("");
    expect(result.current.error).toBe("Error fetching data from server.");
  });
});
