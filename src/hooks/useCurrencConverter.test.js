import { renderHook, act, waitFor } from "@testing-library/react";
import useCurrencyConverter from "./useCurrencyConverter";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          table: "A",
          no: "112/A/NBP/2025",
          effectiveDate: "2025-06-13",
          rates: [
            { currency: "dolar amerykański", code: "USD", mid: 4.0 },
            { currency: "euro", code: "EUR", mid: 4.5 },
            { currency: "frank szwajcarski", code: "CHF", mid: 4.8 },
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

    // 💡 Poczekaj aż hook ustawi dane
    await waitFor(() => {
      expect(result.current.result).toBe("400.00 PLN");
    });

    expect(result.current.error).toBe("");
    expect(result.current.loading).toBe(false);
  });

  it("sets error if currency not found", async () => {
    const { result } = renderHook(() => useCurrencyConverter());

    await act(async () => {
      await result.current.handleConvert("100", "ABC");
    });

    await waitFor(() => {
      expect(result.current.error).toBe("Error fetching data from server.");
    });

    expect(result.current.result).toBe("");
  });
});
