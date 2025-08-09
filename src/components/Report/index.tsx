"use client"
import { useQuery } from "@tanstack/react-query"
import React from "react"

import api from "@/data/api"

import LoadingScreen from "../LoadingScreen"
import PageTitle from "../PageTitle"
import ReportContent from "./ReportContent"

const Report: React.FC = () => {
  const {
    data: apiResponse,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["reportData"],
    queryFn: () => api.getReportData(),
  })

  if (error) {
    throw new Error(`Error fetching Report data: ${error.message}`)
  }

  return (
    <>
      <PageTitle title="Report" />
      <div className="flex-1">
        {isLoading ? <LoadingScreen /> : apiResponse ? <ReportContent reportData={apiResponse.data} /> : null}
      </div>
    </>
  )
}

export default Report
