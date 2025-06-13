import "./currencyForm.css";
import { useState } from "react";

function CurrencyForm({ onConvert }) {
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const value = formData.get("value");
    const currency = formData.get("currency");

    if (!currency) {
      setError("Please select a currency.");
      return;
    }

    setError("");
    onConvert(value, currency);
  }

  return (
    <>
      <form className="currency-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="number"
            id="enterValue"
            name="value"
            className="enterValue"
            placeholder="Enter value"
            required
            min="0.01"
            step="0.01"
            autoFocus
          />
          <select name="currency" className="currenciesList" required defaultValue="">
            <option value="" disabled>
              Choose your currency
            </option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
          </select>
        </div>
        <button type="submit" className="calculateButton">
          Convert
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </>
  );
}

export default CurrencyForm;
