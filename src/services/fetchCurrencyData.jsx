export  async function fetchCurrencyData (value, currency)  {
  const response = await fetch("https://api.nbp.pl/api/exchangerates/tables/a");
  const data = await response.json();
  const rates = data?.[0]?.rates;

  if (!rates) {
    throw new Error("Failed getting currency rates");
  }

  const selectedRate = rates.find((rate) => rate.code === currency);

  if (!selectedRate) {
    throw new Error("Failed to find selected currency.");
  }

  const rate = selectedRate.mid;
  return (Number(value) * rate).toFixed(2) + " PLN";
};
