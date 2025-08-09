"use client"
import React from "react"

import { ReportData } from "@/types/reportTypes"

const ReportContent: React.FC<{ reportData: ReportData }> = ({ reportData }) => {
  return (
    <main style={{ padding: "2rem" }}>
      <div className="bg-kudwa-light p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Report Data</h2>
        <div className="space-y-2">
          <p>
            <strong>Report ID:</strong> {reportData.reportResult.id}
          </p>
          <p>
            <strong>Scenario ID:</strong> {reportData.reportResult.scenarioId}
          </p>
          <p>
            <strong>Date Range:</strong> {reportData.reportResult.startingDate} - {reportData.reportResult.endingDate}
          </p>
          <p>
            <strong>Profit & Loss Items:</strong> {reportData.reportResult.profitnLoss.length}
          </p>
        </div>
      </div>

      <details className="mt-6">
        <summary className="cursor-pointer text-kudwa-dark font-medium">View Raw Data</summary>
        <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto max-h-96 text-black">
          {JSON.stringify(reportData, null, 2)}
        </pre>
      </details>
    </main>
  )
}

export default ReportContent
