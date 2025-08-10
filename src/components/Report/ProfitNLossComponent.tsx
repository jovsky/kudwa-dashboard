import React from "react"

import { Period } from "@/types/globalTypes"
import { ProfitNLoss, ProfitNLossField } from "@/types/reportTypes"

import Collapsible from "../Collapsible"
import ReportFieldComponent from "./ReportFieldComponent"

interface ProfitNLossComponentProps {
  field: ProfitNLoss | ProfitNLossField
  period: Period
}

const ProfitNLossComponent: React.FC<ProfitNLossComponentProps> = ({ field, period }) => {
  const otherInfo: [string, string | number][] =
    "financialReportId" in field
      ? [
          ["Financial Report Id", field.financialReportId],
          ["Type", field.type],
        ]
      : [
          ["Top Level Field Id", field.topLevelFieldId || "-"],
          ["Unique Reference", JSON.stringify(field.uniqueReference)],
          ["Field Id", field.fieldId || "-"],
        ]

  return (
    <div className="rounded-lg p-6 bg-kudwa-light shadow-2xl border-4 border-kudwa-blue">
      <ReportFieldComponent field={field} otherInfo={otherInfo} period={period} />

      {field.fields && field.fields.length > 0 && (
        <Collapsible togglerText={`${field.name} Metrics`} complementaryText={`(${field.fields.length})`} className="bg-gray-200">
          <div className="flex flex-col gap-6">
            {field.fields.map((subfield) => (
              <ProfitNLossComponent key={subfield.id} field={subfield} period={period} />
            ))}
          </div>
        </Collapsible>
      )}
    </div>
  )
}

export default React.memo(ProfitNLossComponent)
