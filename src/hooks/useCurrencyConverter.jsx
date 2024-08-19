import { useState } from "react";
import { fetchCurrencyData } from "../services/fetchCurrencyData";

function useCurrencyConverter () {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleConvert (value, currency)  {
    setLoading(true);
    try {
      const conversionResult = await fetchCurrencyData(value, currency);
      setResult(conversionResult);
    } catch (error) {
      alert("Error, cannot communicate with server.");
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, handleConvert };
};
export default useCurrencyConverter;
