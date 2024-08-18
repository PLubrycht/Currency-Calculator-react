import React, { useState } from "react";

function CurrencyForm({ onConvert }) {
  const [value, setValue] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!currency) {
      alert("Please select a Currency.");
      return;
    }
    onConvert(value, currency);
  };

  return (
    <form id="currency-form" className="currency-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="number"
          id="enterValue"
          className="enterValue"
          placeholder="enter value"
          required
          min="0.01"
          step="0.01"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          id="currenciesList"
          className="currenciesList"
          required
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="" disabled selected>
            choose Your currency
          </option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CHF">CHF</option>
        </select>
      </div>
      <button type="submit" id="calculateButton" className="calculateButton">
        Convert
      </button>
    </form>
  );
}

export default CurrencyForm;
