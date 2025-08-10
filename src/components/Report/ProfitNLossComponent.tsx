import React from "react"

import { Period } from "@/types/globalTypes"
import { ProfitNLoss, ProfitNLossField } from "@/types/reportTypes"

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
    <div className="border rounded-lg p-4 mb-4 bg-kudwa-light shadow">
      <ReportFieldComponent field={field} otherInfo={otherInfo} period={period} />

      {field.fields && field.fields.length > 0 && (
        <div className="mt-4">
          <span className="font-semibold">Fields:</span>
          <div className="ml-4">
            {field.fields.map((subfield) => (
              <ProfitNLossComponent key={subfield.id} field={subfield} period={period} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default React.memo(ProfitNLossComponent)
