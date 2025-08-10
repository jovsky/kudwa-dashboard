import React from "react"

import { IMainDashboardKPIs } from "@/types/dashboardTypes"

import KPIsTable from "./KPIsTable"
import TopKPIs from "./TopKPIs"

const MainDashboardKPIs: React.FC<{ mainDashboardKPIs: IMainDashboardKPIs }> = ({ mainDashboardKPIs }) => {
  return (
    <section className="w-full mb-8">
      <h2 className="text-2xl font-bold mb-6 text-kudwa-dark">KPIs</h2>
      <TopKPIs topKPIs={mainDashboardKPIs.topKPIs} />
      <KPIsTable KPIs={mainDashboardKPIs.KPIs} />
    </section>
  )
}

export default MainDashboardKPIs
