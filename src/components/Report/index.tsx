"use client"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import pageDefs from "@/app/pageDefs"
import { AppDispatch, RootState } from "@/store"
import { fetchReportData } from "@/store/slices/reportSlice"

import LoadingScreen from "../LoadingScreen"
import PageTitle from "../PageTitle"
import ReportContent from "./ReportContent"

const Report: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, error } = useSelector((state: RootState) => state.report)

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
      </div>
      <div className="flex-1">{loading ? <LoadingScreen /> : data ? <ReportContent reportData={data} /> : null}</div>
    </>
  )
}

export default Report
