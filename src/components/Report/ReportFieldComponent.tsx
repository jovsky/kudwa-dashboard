import React, { useMemo } from "react"

import { Period } from "@/types/globalTypes"
import { ReportField } from "@/types/reportTypes"
import _formatNumber from "@/utils/formatNumber"
import toTitleCase from "@/utils/toTitleCase"

import ReportTable from "./ReportTable"

const formatNumber = (value: number) => _formatNumber(value, 2)

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
          <div className="text-sm text-gray-500 mb-2">Id: {field.id}</div>
          <div className="text-sm text-gray-500 mb-2">Description: {field.description ?? "-"}</div>
          <div className="text-sm text-gray-500 mb-2">Style: {field.style ?? "-"}</div>
          <div className="text-sm text-gray-500 mb-2">Created At: {field.createdAt}</div>
          <div className="text-sm text-gray-500 mb-2">Updated At: {field.updatedAt}</div>
        </div>
        <div className="flex-1">
          {otherInfo.map(([label, value]) => (
            <div key={label} className="text-sm text-gray-500 mb-2">
              {label}: {value}
            </div>
          ))}
        </div>
      </div>

      <div className="my-3">
        <span className="font-semibold">Actual Data: ({field.actualData[0]?.value.length ?? 0})</span>
        <div className="list-disc ml-6">
          {field.actualData.map((ad) => (
            <li key={ad.id}>
              {ad.value.map(formatNumber).join(", ")} ({ad.source})
            </li>
          ))}
        </div>
      </div>

      <div className="">
        <p className="text-gray-500 text-md font-semibold w-full text-center">
          {field.name} {toTitleCase(period)} Data Table
        </p>
        <div className="flex flex-col gap-4 overflow-x-scroll py-3">
          {period === "monthly" ? (
            <ReportTable result={field.result} totalResult={field.totalResult} pastMonth={field.pastMonth} slotLabels={slots} />
          ) : period === "quarterly" ? (
            <ReportTable
              result={field.quarterly}
              totalResult={field.quarterlyResult}
              pastMonth={field.quarterlyPastMonth}
              slotLabels={slots}
            />
          ) : (
            <ReportTable
              result={field.yearly}
              totalResult={field.yearlyResult}
              pastMonth={field.yearlyPastMonth}
              slotLabels={slots}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ReportFieldComponent)
