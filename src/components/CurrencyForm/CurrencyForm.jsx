import "./currencyForm.css";

function CurrencyForm({ onConvert }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const value = formData.get("value");
    const currency = formData.get("currency");

    if (!currency) {
      alert("Please select a Currency.");
      return;
    }
    onConvert(value, currency);
  }

  return (
    <form className="currency-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="number"
          id="enterValue"
          name="value"
          className="enterValue"
          placeholder="enter value"
          required
          min="0.01"
          step="0.01"
        />
        <select name="currency" className="currenciesList" required defaultValue="">
          <option value="" disabled >
            choose Your currency
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
  );
}

export default CurrencyForm;
