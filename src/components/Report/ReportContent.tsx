"use client"
import React from "react"

import { Period } from "@/types/globalTypes"
import { ReportData } from "@/types/reportTypes"
import formatMonthYear from "@/utils/formatMonthYear"

import Collapsible from "../Collapsible"
import ProfitNLossComponent from "./ProfitNLossComponent"
import ReportTable from "./ReportTable"

interface ReportContentProps {
  reportData: ReportData
  period: Period
}

const ReportContent: React.FC<ReportContentProps> = ({ reportData, period }) => {
  const startDate = formatMonthYear("01-" + reportData.reportResult.startingDate)
  const endDate = formatMonthYear("01-" + reportData.reportResult.endingDate)

  return (
    <div className="py-2 px-6 overflow-y-auto">
      <div className="bg-kudwa-light p-4 rounded-lg space-y-2">
        <p>
          <span className="font-semibold">Report ID:</span> {reportData.reportResult.id}
        </p>
        <p>
          <span className="font-semibold">Scenario ID:</span> {reportData.reportResult.scenarioId}
        </p>
        <p>
          <span className="font-semibold">Date Range:</span> {startDate} - {endDate}
        </p>
        <p>
          <span className="font-semibold">Profit & Loss Items:</span> {reportData.reportResult.profitnLoss.length}
        </p>
      </div>

      <div className="flex flex-col gap-6 mb-6">
        <Collapsible
          togglerText={"Profit & Loss Overview"}
          complementaryText={`(${reportData.reportResult.profitnLoss.length} metrics)`}
        >
          <div className="flex flex-col gap-6">
            {reportData.reportResult.profitnLoss.map((field) => (
              <ProfitNLossComponent key={field.id} field={field} period={period} />
            ))}
          </div>
        </Collapsible>

        <ProfitNLossComponent field={reportData.reportResult.metrics.pnlKeyMetrics} period={period} variant="gray" />

        <Collapsible
          togglerText={"Computed Fields"}
          complementaryText={`(${reportData.reportResult.computedFields.length} metrics)`}
        >
          <div className="flex flex-col gap-6">
            {reportData.reportResult.computedFields.map((field) => (
              <ReportTable key={field.name} field={field} period={period} />
            ))}
          </div>
        </Collapsible>
      </div>
    </div>
  )
}

export default ReportContent
