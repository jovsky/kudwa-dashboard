import React from "react"

import formatCurrency from "@/utils/formatCurrency"

interface ReportTableProps {
  headDescriptions: string[]
  rows: Record<string, number[]>
}

const ReportTable: React.FC<ReportTableProps> = ({ headDescriptions, rows }) => {
  return (
    <table className="min-w-full border border-kudwa-blue bg-kudwa-blue-100 rounded-lg text-sm whitespace-nowrap text-kudwa-blue-700">
      <thead>
        <tr className="bg-kudwa-blue-300">
          <th className={`report-table-cell font-semibold`}>Slot</th>
          {headDescriptions.map((headDesc) => (
            <th key={headDesc} className="report-table-cell">
              {headDesc}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(rows).map(([label, values]) => (
          <tr key={label}>
            <td className={`report-table-cell font-semibold text-start`}>{label}</td>
            {values.map((value, i) => (
              <td key={`${label}-${i}`} className={`report-table-cell ${value ? "font-semibold" : "opacity-50"}`}>
                {formatCurrency(value) ?? "-"}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ReportTable
