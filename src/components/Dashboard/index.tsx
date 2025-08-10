"use client"

import React, { useEffect } from "react"
import { IoMdRefresh } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"

import pageDefs from "@/app/pageDefs"
import type { AppDispatch } from "@/store"
import { RootState } from "@/store"
import { changePeriod, fetchDashboardData } from "@/store/slices/dashboardSlice"

import Button from "../Button"
import LoadingScreen from "../LoadingScreen"
import PageTitle from "../PageTitle"
import MainDashboard from "./MainDashboard"
import MainDashboardKPIs from "./MainDashboardKPIs"
import PeriodSelector from "./PeriodSelector"

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, error, period } = useSelector((state: RootState) => state.dashboard)

  useEffect(() => {
    dispatch(fetchDashboardData(period))
  }, [dispatch, period])

  if (error) {
    throw new Error(`Error fetching dashboard data: ${error}`)
  }

  return (
    <>
      <div className="flex items-center w-full border-b border-gray-200 gap-10 py-4">
        <PageTitle title={pageDefs.dashboard.name} />
        <div className="flex items-center gap-10 ml-auto">
          <PeriodSelector period={period} onPeriodChange={(p) => dispatch(changePeriod(p))} disabled={loading} />
          <Button
            size="md"
            icon={IoMdRefresh}
            onClick={() => dispatch(fetchDashboardData(period))}
            variant="success"
            disabled={loading}
          />
        </div>
      </div>
      {loading ? (
        <LoadingScreen />
      ) : data ? (
        <div className="flex flex-col pt-2 px-6 pb-20 overflow-y-auto">
          <MainDashboard mainDashboard={data.mainDashboard} />
          <div className="w-full border-b border-gray-200 h-1 mt-14 mb-8"></div>
          <MainDashboardKPIs mainDashboardKPIs={data.mainDashboardKPIs} />
        </div>
      ) : null}
    </>
  )
}

export default Dashboard
