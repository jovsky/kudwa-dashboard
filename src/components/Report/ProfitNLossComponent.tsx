import React from "react"

import { Period } from "@/types/globalTypes"
import { ProfitNLoss, ProfitNLossField } from "@/types/reportTypes"

import Collapsible from "../Collapsible"
import ReportFieldComponent from "./ReportFieldComponent"

interface ProfitNLossComponentProps {
  field: ProfitNLoss | ProfitNLossField
  period: Period
  variant?: "blue" | "gray"
}

const ProfitNLossComponent: React.FC<ProfitNLossComponentProps> = ({ field, period, variant = "blue" }) => {
  const otherInfo: Record<string, string | number> =
    "financialReportId" in field
      ? {
          "Financial Report ID": field.financialReportId,
          Type: field.type,
        }
      : {
          "Top Level Field ID": field.topLevelFieldId || "-",
          "Field ID": field.fieldId || "-",
        }

  return (
    <Collapsible togglerText={field.name} variant={variant}>
      <ReportFieldComponent
        field={field}
        otherInfo={otherInfo}
        period={period}
        uniqueReference={"uniqueReference" in field ? field.uniqueReference : undefined}
      />

      {field.fields && field.fields.length > 0 && (
        <Collapsible variant="bg-gray" togglerText={`${field.name} Metrics`} complementaryText={`(${field.fields.length})`}>
          <div className="flex flex-col gap-3 md:gap-6">
            {field.fields.map((subfield) => (
              <ProfitNLossComponent key={subfield.id} field={subfield} period={period} />
            ))}
          </div>
        </Collapsible>
      )}
    </Collapsible>
  )
}

export default React.memo(ProfitNLossComponent)
