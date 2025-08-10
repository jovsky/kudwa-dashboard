import React from "react"

import { ProfitNLossField } from "@/types/reportTypes"

import ReportFieldComponent from "./ReportFieldComponent"

const ProfitNLossFieldComponent: React.FC<{ field: ProfitNLossField }> = ({ field }) => (
  <div className="border rounded-lg p-4 mb-4 bg-kudwa-light shadow">
    <ReportFieldComponent
      field={field}
      OtherInfo={() => (
        <div className="flex flex-col justify-end">
          <div className="text-sm text-gray-500 mb-2">Top Level Field Id: {field.topLevelFieldId || "-"}</div>
          <div className="text-sm text-gray-500 mb-2">Code: {field.code || "-"}</div>
          <div className="text-sm text-gray-500 mb-2">Unique Reference: {JSON.stringify(field.uniqueReference)}</div>
          <div className="text-sm text-gray-500 mb-2">Order: {field.order || "-"}</div>
          <div className="text-sm text-gray-500 mb-2">Field Type: {field.fieldType || "-"}</div>
          <div className="text-sm text-gray-500 mb-2">Field Id: {field.fieldId || "-"}</div>
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

export default ProfitNLossFieldComponent
