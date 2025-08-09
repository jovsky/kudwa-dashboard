import React from "react"

import { DashboardData } from "@/types/dashboardTypes"

const DashboardContent: React.FC<{ dashboardData: DashboardData }> = ({ dashboardData }) => {
  return (
    <div style={{ padding: "2rem" }}>
      <div className="bg-kudwa-light p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Dashboard Overview</h2>
        <div className="space-y-2">
          <p>
            <strong>Period:</strong> {dashboardData.mainDashboard.period}
          </p>
          <p>
            <strong>Date Range:</strong> {dashboardData.mainDashboard.startDate} - {dashboardData.mainDashboard.endDate}
          </p>
          <p>
            <strong>Data Points:</strong> {dashboardData.mainDashboard.dateArray.length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-kudwa-yellow/20 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Cash at Bank</h3>
          <p>{dashboardData.mainDashboard.charts.cashAtBank.length} data series</p>
        </div>
        <div className="bg-kudwa-blue/20 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Expense Split</h3>
          <p>{dashboardData.mainDashboard.charts.expenseSplit.length} categories</p>
        </div>
        <div className="bg-kudwa-brown/20 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Revenue Split</h3>
          <p>{dashboardData.mainDashboard.charts.totalRevenuesSplit.length} sources</p>
        </div>
      </div>

      <div>
        <summary className="cursor-pointer text-kudwa-blue font-medium">View Raw Data</summary>
        <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-auto max-h-96 text-black">
          {JSON.stringify(dashboardData, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default DashboardContent
