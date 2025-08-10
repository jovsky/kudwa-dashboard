import React from "react"

import { Period } from "@/types/globalTypes"
import { ReportField } from "@/types/reportTypes"
import _formatNumber from "@/utils/formatNumber"

const formatNumber = (value: number) => _formatNumber(value, 2)

interface ReportFieldComponentProps {
  field: ReportField
  otherInfo: [string, string | number][]
  period: Period
}

const ReportFieldComponent: React.FC<ReportFieldComponentProps> = ({ field, otherInfo, period }) => {
  return (
    <div className="rounded-lg p-4 mb-4 bg-kudwa-light">
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

      <div className="flex flex-col gap-4 mb-2">
        {period === "monthly" ? (
          <>
            <div>
              <span className="font-semibold">Result: ({field.result.length})</span> {field.result.map(formatNumber).join(", ")}
            </div>
            <div>
              <span className="font-semibold">Total Result: ({field.totalResult.length})</span>{" "}
              {field.totalResult.map(formatNumber).join(", ")}
            </div>
            <div>
              <span className="font-semibold">Past Month: ({field.pastMonth.length})</span>{" "}
              {field.pastMonth.map(formatNumber).join(", ")}
            </div>
          </>
        ) : period === "quarterly" ? (
          <>
            <div>
              <div>
                <span className="font-semibold">Quarterly: ({field.quarterly.length})</span>{" "}
                {field.quarterly.map(formatNumber).join(", ")}
                <div>
                  <span className="font-semibold">Quarterly Result: ({field.quarterlyResult.length})</span>{" "}
                  {field.quarterlyResult.map(formatNumber).join(", ")}
                </div>
              </div>
              <span className="font-semibold">Quarterly Past Month: ({field.quarterlyPastMonth.length})</span>{" "}
              {field.quarterlyPastMonth.map(formatNumber).join(", ")}
            </div>
          </>
        ) : (
          <>
            <div>
              <span className="font-semibold">Yearly: ({field.yearly.length})</span> {field.yearly.map(formatNumber).join(", ")}
            </div>
            <div>
              <span className="font-semibold">Yearly Result: ({field.yearlyResult.length})</span>{" "}
              {field.yearlyResult.map(formatNumber).join(", ")}
            </div>
            <div>
              <span className="font-semibold">Yearly Past Month: ({field.yearlyPastMonth.length})</span>{" "}
              {field.yearlyPastMonth.map(formatNumber).join(", ")}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default React.memo(ReportFieldComponent)
