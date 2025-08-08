import React from "react"

const ReportPage: React.FC = () => {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Report</h1>
      <p>Welcome to your report!</p>
      <div style={{ marginTop: "2rem", display: "flex", gap: "2rem" }}>
        <div style={{ background: "#f0f0f0", padding: "1rem", borderRadius: "8px" }}>
          <h2>Users</h2>
          <p>42</p>
        </div>
        <div style={{ background: "#f0f0f0", padding: "1rem", borderRadius: "8px" }}>
          <h2>Revenue</h2>
          <p>$1,234</p>
        </div>
      </div>
    </main>
  )
}

export default ReportPage
