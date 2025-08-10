export default function formatNumber(value: number, decimals: number | "truncate" = "truncate"): string {
  if (decimals === "truncate") {
    if (value >= 1_000_000 || value <= -1_000_000) {
      return `${(value / 1_000_000).toFixed(2)} mi`
    }
    if (value >= 1_000 || value <= -1000) {
      return `${(value / 1_000).toFixed(2)} K`
    }
    decimals = 2
  }
  const numberFormatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return numberFormatter.format(value)
}
