import React, { useMemo } from "react"

import { Period } from "@/types/globalTypes"
import { ComputedField, ReportField } from "@/types/reportTypes"
import formatCurrency from "@/utils/formatCurrency"
import toTitleCase from "@/utils/toTitleCase"

import Table from "../Table"

interface ReportTableProps {
  field: ComputedField | ReportField
  period: Period
}

const buildTableRows = (field: ComputedField | ReportField, period: Period): Record<string, number[]> => {
  if (period === "monthly") {
    return {
      Result: field.result,
      ...(field.totalResult ? { "Total Result": field.totalResult } : {}),
      "Past Month": field.pastMonth,
    }
  }

  if (period === "quarterly") {
    return {
      Result: field.quarterly,
      "Total Result": "currentQuarterActual" in field ? field.currentQuarterActual : field.quarterlyResult,
      "Past Month": field.quarterlyPastMonth,
    }
  }

  return {
    Result: field.yearly,
    "Total Result": "currentYearActual" in field ? field.currentYearActual : field.yearlyResult,
    "Past Month": field.yearlyPastMonth,
  }
}

const ReportTable: React.FC<ReportTableProps> = ({ field, period }) => {
  const rows = buildTableRows(field, period)

  const headDescriptions = useMemo(() => Array.from({ length: Object.values(rows)[0].length }, (_, i) => `T${i + 1}`), [rows])

  return (
    <div className="mt-2">
      <p className="text-gray-500 text-md font-semibold">
        {field.name} | {toTitleCase(period)} Data Table
      </p>
      <Table headDescriptions={headDescriptions} rows={rows} format={formatCurrency} />
    </div>
  )
}

export default ReportTable
