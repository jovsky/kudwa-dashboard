import React from "react"

import formatCurrency from "@/utils/formatCurrency"

interface ReportTableProps {
  result: number[]
  totalResult: number[]
  pastMonth: number[]
  slotLabels: string[]
}

const ReportTable: React.FC<ReportTableProps> = ({ result, totalResult, pastMonth, slotLabels }) => {
  const length = Math.max(result.length, totalResult.length, pastMonth.length)

  return (
    <table className="min-w-full border border-kudwa-blue bg-kudwa-blue-100 rounded-lg text-sm whitespace-nowrap text-kudwa-blue-700">
      <thead>
        <tr className="bg-kudwa-blue-300">
          <th className={`report-table-cell font-semibold`}>Slot</th>
          {Array.from({ length }).map((_, i) => (
            <th key={i} className="report-table-cell">
              {slotLabels ? slotLabels[i] : i + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={`report-table-cell font-semibold`}>Result</td>
          {result.map((val, i) => (
            <td key={i} className={`report-table-cell ${val ? "font-semibold" : "opacity-50"}`}>
              {formatCurrency(val) ?? "-"}
            </td>
          ))}
        </tr>
        <tr>
          <td className={`report-table-cell font-semibold`}>Total Result</td>
          {totalResult.map((val, i) => (
            <td key={i} className={`report-table-cell ${val ? "font-semibold" : "opacity-50"}`}>
              {formatCurrency(val) ?? "-"}
            </td>
          ))}
        </tr>
        <tr>
          <td className={`report-table-cell font-semibold`}>Past Month</td>
          {pastMonth.map((val, i) => (
            <td key={i} className={`report-table-cell ${val ? "font-semibold" : "opacity-50"}`}>
              {formatCurrency(val) ?? "-"}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default React.memo(ReportTable)
