import React from "react"

interface TableProps {
  headDescriptions: string[]
  rows: Record<string, number[]>
  format?: (value: number) => string
}

const Table: React.FC<TableProps> = ({ headDescriptions, rows, format = (v) => v }) => {
  return (
    <div className="flex flex-col gap-4 overflow-x-scroll py-3">
      <table className="min-w-full border border-kudwa-blue bg-kudwa-blue-100 rounded-lg text-sm whitespace-nowrap text-kudwa-blue-700">
        <thead>
          <tr className="bg-kudwa-blue-300">
            <th className={`kudwa-table-cell font-semibold`}>Slot</th>
            {headDescriptions.map((headDesc) => (
              <th key={headDesc} className="kudwa-table-cell">
                {headDesc}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(rows).map(([label, values]) => (
            <tr key={label}>
              <td className={`kudwa-table-cell font-semibold text-start`}>{label}</td>
              {values.map((value, i) => (
                <td key={`${label}-${i}`} className={`kudwa-table-cell ${value ? "font-semibold" : "opacity-50"}`}>
                  {format(value) ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
