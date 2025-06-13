export function formatResult(value, rate) {
  return (Number(value) * rate).toFixed(2) + " PLN";
}
