import formatNumber from "./formatNumber"

export default function formatCurrency(value: number, decimals: number | "truncate" = "truncate"): string {
  return "$" + formatNumber(value, decimals)
}
