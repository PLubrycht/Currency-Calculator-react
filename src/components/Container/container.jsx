import "./container.css";
import CurrencyForm from "../CurrencyForm/CurrencyForm";
import useCurrencyConverter from "../../hooks/useCurrencyConverter";

function Container () {
  const { result, loading, handleConvert } = useCurrencyConverter();
  return (
    <div className="container">
      <main className="content-section">
        <header className="headline">Currency converter</header>
        <CurrencyForm onConvert={handleConvert} />
        {loading && <span className="loader"></span>}
        <div>
          <p className="calculatedValue">{result}</p>
        </div>
      </main>
    </div>
  );
};

export default Container;
