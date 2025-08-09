import React from "react"
import { FaChartBar } from "react-icons/fa"

import { IMainDashboard } from "@/types/dashboardTypes"

import ChartMap from "../Charts/ChartMap"
import Collapsible from "../Collapsible"
import ChartCard from "./ChartCard"

const MainDashboard: React.FC<{ mainDashboard: IMainDashboard }> = ({ mainDashboard }) => {
  const series = [
    { name: "Cash at Bank", data: mainDashboard.charts.cashAtBank },
    { name: "Expense Split", data: mainDashboard.charts.expenseSplit },
    { name: "Indirect Cashflow", data: mainDashboard.charts.indirectCashflow },
    { name: "Total Revenues Split", data: mainDashboard.charts.totalRevenuesSplit },
    { name: "Profit Loss Overview", data: mainDashboard.charts.profitLossOverview },
    { name: "Salaries Split", data: mainDashboard.charts.salariesSplit },
    { name: "Manpower Operating Expenses", data: mainDashboard.charts.ManpowerOperatingExpenses },
  ]

  return (
    <>
      <div className="p-4 rounded-lg mb-6">
        <div className="space-y-2">
          <p>
            <strong>Period:</strong> {mainDashboard.period}
          </p>
          <p>
            <strong>Date Range:</strong> {mainDashboard.startDate} - {mainDashboard.endDate}
          </p>
          <p>
            <strong>Interval:</strong> {mainDashboard.dateArray.length} months
          </p>
        </div>
      </div>

      <div className="grid grid-rows-2 gap-4 mb-6">
        <div className="grid grid-cols-3 gap-4">
          {series.slice(0, 3).map(({ name, data }) => (
            <ChartCard key={name} name={name} metricsCount={data.length} Icon={FaChartBar} color="blue" />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {series.slice(3).map(({ name, data }) => (
            <ChartCard key={name} name={name} metricsCount={data.length} Icon={FaChartBar} color="yellow" />
          ))}
        </div>
      </div>

      <Collapsible togglerText={"Charts"}>
        <div className="flex flex-col gap-4">
          {series.map(({ name, data }) => (
            <Collapsible key={name} togglerText={name}>
              <ChartMap chartInfo={data} dateArray={mainDashboard.dateArray} />
            </Collapsible>
          ))}
        </div>
      </Collapsible>
    </>
  )
}

export default MainDashboard
