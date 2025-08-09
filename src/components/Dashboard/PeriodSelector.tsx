import { FC, useState } from "react"

import { Period } from "@/types/dashboardTypes"

const periods: Period[] = ["monthly", "quarterly", "yearly"]

const PeriodSelector: FC<{ period: Period; onPeriodChange: (period: Period) => void }> = ({ period, onPeriodChange }) => {
  return (
    <div className="border-b border-gray-200 px-6 py-4">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-kudwa-dark">Period:</h2>
        <div className="flex gap-2">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => onPeriodChange(p)}
              className={`px-4 py-2 rounded transition-colors ${
                p === period ? "bg-kudwa-brown text-white" : " hover:bg-kudwa-light-brown hover:text-white "
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PeriodSelector
