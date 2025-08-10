import React from "react"

import { Period } from "@/types/globalTypes"
import { ReportField, UniqueReference } from "@/types/reportTypes"
import formatDateTime from "@/utils/formatDateTime"

import FieldsList from "../FieldsList"
import ActualDataComponent from "./ActualDataComponent"
import ReportTable from "./ReportTable"
import UniqueReferenceComponent from "./UniqueReferenceComponent"

interface ReportFieldComponentProps {
  field: ReportField
  otherInfo: Record<string, string | number>
  period: Period
  uniqueReference?: UniqueReference
}

const ReportFieldComponent: React.FC<ReportFieldComponentProps> = ({ field, otherInfo, period, uniqueReference }) => {
  return (
    <div className="rounded-lg mb-4 bg-kudwa-light">
      <div className="font-bold text-lg mb-2">{field.name}</div>

      <div className="flex gap-10 text-sm items-end mb-6">
        <FieldsList
          list={{
            ID: field.id,
            Description: field.description ?? "-",
            Style: field.style ?? "-",
            "Created At": formatDateTime(field.createdAt),
            "Updated At": formatDateTime(field.updatedAt),
          }}
        />
        <FieldsList list={otherInfo} />
        {uniqueReference && <UniqueReferenceComponent uniqueReference={uniqueReference} />}
      </div>

      <ActualDataComponent actualData={field.actualData} />

      <ReportTable field={field} period={period} />
    </div>
  )
}

export default React.memo(ReportFieldComponent)
