import { useState } from "react";
import { fetchCurrencyData } from "../services/fetchCurrencyData";

const useCurrencyConverter = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConvert = async (value, currency) => {
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
