import React from "react"

import formatCurrency from "@/utils/formatCurrency"

interface KPI {
  name: string
  value: number
  mom: number
  prefix: string
}

const KPIsTable: React.FC<{ KPIs: KPI[] }> = ({ KPIs }) => (
  <div className="bg-white rounded-lg shadow-soft border border-kudwa-brown-100 overflow-x-auto">
    <table className="min-w-full text-left">
      <thead>
        <tr className="bg-kudwa-brown-100">
          <th className="py-3 px-4 font-semibold text-kudwa-dark">Name</th>
          <th className="py-3 px-4 font-semibold text-kudwa-dark">Value</th>
          <th className="py-3 px-4 font-semibold text-kudwa-dark">{KPIs[0].prefix} Change</th>
        </tr>
      </thead>
      <tbody>
        {KPIs.map((kpi, idx) => (
          <tr
            key={kpi.name + idx}
            className="border-t border-kudwa-brown-200 hover:bg-kudwa-brown-200 transition-all duration-200 ease-in-out"
          >
            <td className="py-2 px-4 font-medium text-kudwa-brown-700">{kpi.name}</td>
            <td className="py-2 px-4 text-kudwa-blue font-semibold whitespace-nowrap">{formatCurrency(kpi.value)}</td>
            <td
              className={`py-2 px-4 font-semibold whitespace-nowrap ${
                kpi.mom > 0 ? "text-green-600" : kpi.mom < 0 ? "text-red-600" : "text-gray-600"
              }`}
            >
              {kpi.mom > 0 ? "+" : ""}
              {formatCurrency(kpi.mom)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default React.memo(KPIsTable)
