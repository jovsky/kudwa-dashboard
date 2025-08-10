import React, { useMemo } from "react"

import { Period } from "@/types/globalTypes"
import { ReportField } from "@/types/reportTypes"
import formatDateTime from "@/utils/formatDateTime"
import toTitleCase from "@/utils/toTitleCase"

import ActualDataComponent from "./ActualDataComponent"
import ReportTable from "./ReportTable"

interface ReportFieldComponentProps {
  field: ReportField
  otherInfo: [string, string | number][]
  period: Period
}

const ReportFieldComponent: React.FC<ReportFieldComponentProps> = ({ field, otherInfo, period }) => {
  const slots = useMemo(() => Array.from({ length: field.result.length }, (_, i) => `T${i + 1}`), [field.result.length])

  return (
    <div className="rounded-lg mb-4 bg-kudwa-light">
      <div className="font-bold text-lg mb-2">{field.name}</div>

      <div className="flex gap-10">
        <div className="">
          <div className="text-sm text-gray-500 mb-2">ID: {field.id}</div>
          <div className="text-sm text-gray-500 mb-2">Description: {field.description ?? "-"}</div>
          <div className="text-sm text-gray-500 mb-2">Style: {field.style ?? "-"}</div>
          <div className="text-sm text-gray-500 mb-2">Created At: {formatDateTime(field.createdAt)}</div>
          <div className="text-sm text-gray-500 mb-2">Updated At: {formatDateTime(field.updatedAt)}</div>
        </div>
        <div className="flex-1">
          {otherInfo.map(([label, value]) => (
            <div key={label} className="text-sm text-gray-500 mb-2">
              {label}: {value}
            </div>
          ))}
        </div>
      </div>

      <ActualDataComponent actualData={field.actualData} />

      <div className="mt-2">
        <p className="text-gray-500 text-md font-semibold">
          {field.name} {toTitleCase(period)} Data Table
        </p>
        <div className="flex flex-col gap-4 overflow-x-scroll py-3">
          {period === "monthly" ? (
            <ReportTable
              headDescriptions={slots}
              rows={{
                "Monthly Result": field.result,
                "Monthly Total Result": field.totalResult,
                "Monthly Past Month": field.pastMonth,
              }}
            />
          ) : period === "quarterly" ? (
            <ReportTable
              headDescriptions={slots}
              rows={{
                "Quarterly Result": field.quarterly,
                "Quarterly Total Result": field.quarterlyResult,
                "Quarterly Past Month": field.quarterlyPastMonth,
              }}
            />
          ) : (
            <ReportTable
              headDescriptions={slots}
              rows={{
                "Yearly Result": field.yearly,
                "Yearly Total Result": field.yearlyResult,
                "Yearly Past Month": field.yearlyPastMonth,
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ReportFieldComponent)
