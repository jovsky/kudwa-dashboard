import React from "react"

interface KPI {
  name: string
  value: number
  mom: number
  prefix: string
}

const KPIsTable: React.FC<{ KPIs: KPI[] }> = ({ KPIs }) => <span>Table: {JSON.stringify(KPIs)}</span>

export default KPIsTable
