"use client"
import React, { useEffect } from "react"
import { IoMdRefresh } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"

import pageDefs from "@/app/pageDefs"
import { AppDispatch, RootState } from "@/store"
import { changePeriod, fetchReportData } from "@/store/slices/reportSlice"

import Button from "../Button"
import LoadingScreen from "../LoadingScreen"
import PageTitle from "../PageTitle"
import PeriodSelector from "../PeriodSelector"
import ReportContent from "./ReportContent"

const Report: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, error, period } = useSelector((state: RootState) => state.report)

  useEffect(() => {
    dispatch(fetchReportData())
  }, [dispatch])

  if (error) {
    throw new Error(`Error fetching Report data: ${error}`)
  }

  return (
    <>
      <div className="flex items-center w-full border-b border-gray-200 gap-10 py-4">
        <PageTitle title={pageDefs.report.name} />
        <div className="flex items-center gap-10 ml-auto">
          <PeriodSelector period={period} onPeriodChange={(p) => dispatch(changePeriod(p))} disabled={loading} />
          <Button size="md" icon={IoMdRefresh} onClick={() => dispatch(fetchReportData())} variant="success" disabled={loading} />
        </div>
      </div>
      {loading ? <LoadingScreen /> : data ? <ReportContent reportData={data} period={period} /> : null}
    </>
  )
}

export default Report
