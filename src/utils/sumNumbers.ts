export default function sumNumbers(arr: unknown[], keyObj = ""): number {
  return arr.reduce((acc: number, curr) => {
    // if number, sum it directly
    if (typeof curr === "number") {
      return acc + curr
    }

    // if Object, sum the value of the keyObj if provided
    if (keyObj && typeof curr === "object" && curr !== null && keyObj in curr) {
      const value = (curr as Record<string, number>)[keyObj]
      return acc + (typeof value === "number" ? value : 0)
    }

    // If string, parse it to float and sum if valid
    if (typeof curr === "string") {
      const parsedValue = parseFloat(curr)

      if (!isNaN(parsedValue)) return acc + parsedValue
    }

    // Otherwise
    return acc
  }, 0)
}
