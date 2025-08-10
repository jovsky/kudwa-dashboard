const chartColors = [
  "var(--kudwa-blue-200)",
  "var(--kudwa-yellow-500)",
  "var(--kudwa-brown-200)",
  "var(--kudwa-yellow-600)",
  "var(--kudwa-blue-300)",
  "var(--kudwa-brown)",
  "var(--kudwa-blue-400)",
  "var(--kudwa-yellow-600)",
  "var(--kudwa-blue-500)",
  "var(--kudwa-brown-500)",
]
export default chartColors

export const getChartColor = (index: number): string => chartColors[index % chartColors.length]
