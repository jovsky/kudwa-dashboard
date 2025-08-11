"use client"
import React from "react"

import { Period } from "@/types/globalTypes"
import { ReportData } from "@/types/reportTypes"
import formatDateTime from "@/utils/formatDateTime"
import formatMonthYear from "@/utils/formatMonthYear"

import Collapsible from "../Collapsible"
import FieldsList from "../FieldsList"
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
      <FieldsList
        list={{
          "Report ID": reportData.reportResult.id,
          "Scenario ID": reportData.reportResult.scenarioId,
          "Date Range": `${startDate} - ${endDate}`,
          "Created At": formatDateTime(reportData.reportResult.createdAt),
          "Updated At": formatDateTime(reportData.reportResult.updatedAt),
        }}
        className="my-6"
      />

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
