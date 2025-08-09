"use client"
import { useQuery } from "@tanstack/react-query"
import React, { useState } from "react"

import pageDefs from "@/app/pageDefs"
import api from "@/data/api"
import { Period } from "@/types/dashboardTypes"

import LoadingScreen from "../LoadingScreen"
import PageTitle from "../PageTitle"
import DashboardContent from "./DashboardContent"
import PeriodSelector from "./PeriodSelector"

const Dashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("monthly")

  const {
    data: apiResponse,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["dashboardData", selectedPeriod],
    queryFn: () => api.getDashboardData(selectedPeriod),
  })

  if (error) {
    throw new Error(`Error fetching dashboard data: ${error.message}`)
  }

  return (
    <>
      <PageTitle title={pageDefs.dashboard.name} />
      <PeriodSelector period={selectedPeriod} onPeriodChange={setSelectedPeriod} />
      <div className="flex-1">
        {isLoading ? <LoadingScreen /> : apiResponse ? <DashboardContent dashboardData={apiResponse.data} /> : null}
      </div>
    </>
  )
}

export default Dashboard
