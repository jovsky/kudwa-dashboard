// format to 8 Jan 2025, 10:30:12 AM
export default function formatDateTime(dateString: string): string {
  const date = new Date(dateString)
  return (
    date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) +
    ", " +
    date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })
  )
}
