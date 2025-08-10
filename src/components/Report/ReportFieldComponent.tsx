import React, { FC } from "react"

import { ReportField } from "@/types/reportTypes"
import _formatNumber from "@/utils/formatNumber"

const formatNumber = (value: number) => _formatNumber(value, 2)

interface ReportFieldComponentProps {
  field: ReportField
  OtherInfo: FC
}

const ReportFieldComponent: React.FC<ReportFieldComponentProps> = ({ field, OtherInfo }) => (
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
      <OtherInfo />
    </div>

    <div className="my-3">
      <span className="font-semibold">Actual Data:</span>
      <div className="list-disc ml-6">
        {field.actualData.map((ad) => (
          <li key={ad.id}>
            {ad.value.map(formatNumber).join(", ")} ({ad.source})
          </li>
        ))}
      </div>
    </div>

    <div className="flex flex-wrap gap-4 mb-2">
      <div>
        <span className="font-semibold">Result:</span> {field.result.map(formatNumber).join(", ")}
      </div>
      <div>
        <span className="font-semibold">Total Result:</span> {field.totalResult.map(formatNumber).join(", ")}
      </div>
      <div>
        <span className="font-semibold">Past Month:</span> {field.pastMonth.map(formatNumber).join(", ")}
      </div>
      <div>
        <span className="font-semibold">Yearly:</span> {field.yearly.map(formatNumber).join(", ")}
      </div>
      <div>
        <span className="font-semibold">Quarterly:</span> {field.quarterly.map(formatNumber).join(", ")}
      </div>
      <div>
        <span className="font-semibold">Yearly Past Month:</span> {field.yearlyPastMonth.map(formatNumber).join(", ")}
      </div>
      <div>
        <span className="font-semibold">Quarterly Past Month:</span> {field.quarterlyPastMonth.map(formatNumber).join(", ")}
      </div>
      <div>
        <span className="font-semibold">Yearly Result:</span> {field.yearlyResult.map(formatNumber).join(", ")}
      </div>
      <div>
        <span className="font-semibold">Quarterly Result:</span> {field.quarterlyResult.map(formatNumber).join(", ")}
      </div>
    </div>
  </div>
)

export default ReportFieldComponent
