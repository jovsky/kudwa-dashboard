import React from "react"

import TopKPICard from "./TopKPICard"

interface TopKPI {
  name: string
  value: number
  date?: string
  mOm?: number
  type?: string
}
const TopKPIs: React.FC<{ topKPIs: TopKPI[] }> = ({ topKPIs }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    {topKPIs.map((kpi) => (
      <TopKPICard key={kpi.name} kpi={kpi} />
    ))}
  </div>
)

export default TopKPIs
