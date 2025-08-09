import { FC } from "react"

import { Period } from "@/types/dashboardTypes"

const periods: Period[] = ["monthly", "quarterly", "yearly"]

interface PeriodSelectorProps {
  period: Period
  onPeriodChange: (period: Period) => void
  disabled?: boolean
}

const PeriodSelector: FC<PeriodSelectorProps> = ({ period, onPeriodChange, disabled }) => {
  return (
    <div className={`flex items-center gap-4 ${disabled ? "pointer-events-none" : ""}`}>
      <h2 className="text-lg font-semibold text-kudwa-dark">Period:</h2>
      <div className="flex gap-2">
        {periods.map((p) => (
          <button
            key={p}
            onClick={() => onPeriodChange(p)}
            className={`btn-base btn-md ${p === period ? "btn-tertiary" : "btn-primary"}`}
            disabled={disabled}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PeriodSelector
