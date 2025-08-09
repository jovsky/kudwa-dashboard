export default function formatCurrency(value: number, decimals = 2): string {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return currencyFormatter.format(value)
}
