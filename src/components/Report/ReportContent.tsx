"use client"
import React from "react"

import { ReportData } from "@/types/reportTypes"

import ProfitNLossComponent from "./ProfitNLossComponent"

const ReportContent: React.FC<{ reportData: ReportData }> = ({ reportData }) => {
  return (
    <div className="py-2 px-6 overflow-y-auto">
      <div className="bg-kudwa-light p-4 rounded-lg space-y-2">
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

      {reportData.reportResult.profitnLoss.map((field) => (
        <ProfitNLossComponent key={field.id} field={field} />
      ))}
    </div>
  )
}

export default ReportContent
