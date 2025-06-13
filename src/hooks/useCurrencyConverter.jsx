import { useState } from "react";
import { fetchCurrencyData } from "../services/fetchCurrencyData";

function useCurrencyConverter() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleConvert(value, currency) {
    setLoading(true);
    setError("");
    try {
      const conversionResult = await fetchCurrencyData(value, currency);
      setResult(conversionResult);
    } catch (error) {
      setError("Error fetching data from server.");
    } finally {
      setLoading(false);
    }
  }

  return { result, loading, error, handleConvert };
}

export default useCurrencyConverter;
