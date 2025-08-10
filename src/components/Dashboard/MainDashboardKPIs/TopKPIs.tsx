import React from "react"

interface TopKPI {
  name: string
  value: number
  date?: string
  mOm?: number
  type?: string
}

const TopKPIs: React.FC<{ topKPIs: TopKPI[] }> = ({ topKPIs }) => <span>Table: {JSON.stringify(topKPIs)}</span>

export default TopKPIs
