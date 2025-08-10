import React from "react"

import { ProfitNLoss } from "@/types/reportTypes"

import ProfitNLossFieldComponent from "./ProfitNLossFieldComponent"
import ReportFieldComponent from "./ReportFieldComponent"

const ProfitNLossComponent: React.FC<{ field: ProfitNLoss }> = ({ field }) => (
  <div className="border rounded-lg p-4 mb-4 bg-kudwa-light shadow">
    <ReportFieldComponent
      field={field}
      OtherInfo={() => (
        <div className="flex flex-col justify-end">
          <div className="text-sm text-gray-500 mb-2">Financial Report Id: {field.financialReportId}</div>
          <div className="text-sm text-gray-500 mb-2">Type: {field.type}</div>
        </div>
      )}
    />

    {field.fields && field.fields.length > 0 && (
      <div className="mt-4">
        <span className="font-semibold">Fields:</span>
        <div className="ml-4">
          {field.fields.map((subfield) => (
            <ProfitNLossFieldComponent key={subfield.id} field={subfield} />
          ))}
        </div>
      </div>
    )}
  </div>
)

export default ProfitNLossComponent
