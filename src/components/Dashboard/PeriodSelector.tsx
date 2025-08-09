import { FC } from "react"

import { Period } from "@/types/dashboardTypes"

const periods: Period[] = ["monthly", "quarterly", "yearly"]

const PeriodSelector: FC<{ period: Period; onPeriodChange: (period: Period) => void }> = ({ period, onPeriodChange }) => {
  return (
    <div className="px-6 py-4">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-kudwa-dark">Period:</h2>
        <div className="flex gap-2">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => onPeriodChange(p)}
              className={`btn-base btn-md ${p === period ? "btn-tertiary" : "btn-primary"}`}
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
