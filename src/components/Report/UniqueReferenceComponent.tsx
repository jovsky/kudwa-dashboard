import React from "react"

import { UniqueReference } from "@/types/reportTypes"

import FieldsList from "../FieldsList"

interface UniqueReferenceProps {
  uniqueReference: UniqueReference
}

const UniqueReferenceComponent: React.FC<UniqueReferenceProps> = ({ uniqueReference }) => {
  return (
    <div
      className={`p-3 bg-kudwa-brown rounded-lg text-xs h-fit
        border-2 border-kudwa-brown-600 text-kudwa-light `}
    >
      <div className="font-bold text-md mb-4">Unique Reference</div>
      <div className="flex justify-between gap-10">
        <FieldsList
          list={{
            "Sheet Type": uniqueReference.sheetType,
            "Source Type": uniqueReference.sourceType,
            "Integration Source ID": uniqueReference.integrationSourceId ?? "-",
            "Account ID": uniqueReference.accountId ?? "-",
            "Account Name": uniqueReference.accountName ?? "-",
            Metric: uniqueReference.metric ? "Yes" : "No",
          }}
          className="gap-0!"
        />
      </div>
    </div>
  )
}

export default UniqueReferenceComponent
