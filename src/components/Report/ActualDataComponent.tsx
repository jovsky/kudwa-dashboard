import React, { useMemo } from "react"

import { ActualData } from "@/types/reportTypes"
import formatCurrency from "@/utils/formatCurrency"
import formatDateTime from "@/utils/formatDateTime"

import FieldsList from "../FieldsList"
import Table from "../Table"

interface ActualDataComponentProps {
  actualData: ActualData[]
}

const ActualDataComponent: React.FC<ActualDataComponentProps> = ({ actualData }) => {
  const slots = useMemo(() => Array.from({ length: actualData[0]?.value.length }, (_, i) => `T${i + 1}`), [actualData])

  const data = actualData[0] as ActualData | undefined

  return (
    <div className="my-3 bg-kudwa-yellow-100 p-4 rounded-3xl border-2 border-kudwa-yellow">
      {data ? (
        <>
          <div className="flex gap-10 text-sm items-end mb-6">
            <FieldsList
              list={{
                "Account ID": data.codatAccountId || "-",
                ID: data.id,
                "Created At": formatDateTime(data.createdAt),
                "Updated At": formatDateTime(data.updatedAt),
              }}
            />
            <FieldsList
              list={{
                "Integration Source ID": data.integrationSourceId || "-",
                Source: data.source,
                "Field ID": data.fieldId || "-",
                "Top Level Field ID": data.topLevelFieldId || "-",
              }}
            />
          </div>
          <Table rows={{ Values: data.value }} headDescriptions={slots} format={formatCurrency} />
        </>
      ) : (
        <div className="flex-1 text-center">No actual data available.</div>
      )}
    </div>
  )
}

export default ActualDataComponent
