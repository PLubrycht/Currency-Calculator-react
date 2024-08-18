// src/components/component.jsx
import React from "react";
import CurrencyForm from "./CurrencyForm";
import useCurrencyConverter from "../utils/useCurrencyConverter"; 

const Container = () => {
  const { result, loading, handleConvert } = useCurrencyConverter();
  return (
    <div className="container">
      <main className="content-section">
        <header className="headline">Currency converter</header>
        <CurrencyForm onConvert={handleConvert} />
        {loading && <span className="loader"></span>}
        <div>
          <p id="calculatedValue" className="calculatedValue">
            {result}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Container;
