"use client"

import React, { useEffect, useState } from "react"
import { IoMdRefresh } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"

import pageDefs from "@/app/pageDefs"
import type { AppDispatch } from "@/store"
import { RootState } from "@/store"
import { fetchDashboardData } from "@/store/slices/dashboardSlice"
import { Period } from "@/types/dashboardTypes"

import Button from "../Button"
import LoadingScreen from "../LoadingScreen"
import PageTitle from "../PageTitle"
import DashboardContent from "./DashboardContent"
import PeriodSelector from "./PeriodSelector"

const Dashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("monthly")
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, error } = useSelector((state: RootState) => state.dashboard)

  useEffect(() => {
    dispatch(fetchDashboardData(selectedPeriod))
  }, [dispatch, selectedPeriod])

  if (error) {
    throw new Error(`Error fetching dashboard data: ${error}`)
  }

  return (
    <>
      <div className="flex items-center w-full border-b border-gray-200 gap-10 py-4">
        <PageTitle title={pageDefs.dashboard.name} />
        <div className="flex items-center gap-10 ml-auto">
          <PeriodSelector period={selectedPeriod} onPeriodChange={setSelectedPeriod} disabled={loading} />
          <Button
            size="md"
            icon={IoMdRefresh}
            onClick={() => dispatch(fetchDashboardData(selectedPeriod))}
            variant="success"
            disabled={loading}
          />
        </div>
      </div>
      <div className="flex-1">{loading ? <LoadingScreen /> : data ? <DashboardContent dashboardData={data} /> : null}</div>
    </>
  )
}

export default Dashboard
