export default function calculateMaxYValue(values: number[]): number {
  const maxValue = Math.max(...values)
  const tenPower = 10 ** (maxValue.toString().length - 1)
  return Math.round(Math.ceil(maxValue / tenPower) * tenPower)
}
