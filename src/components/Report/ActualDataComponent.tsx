import React, { useMemo } from "react"

import { ActualData } from "@/types/reportTypes"
import formatDateTime from "@/utils/formatDateTime"

import ReportTable from "./ReportTable"

interface ActualDataComponentProps {
  actualData: ActualData[]
}

const ActualDataComponent: React.FC<ActualDataComponentProps> = ({ actualData }) => {
  const slots = useMemo(() => Array.from({ length: actualData[0]?.value.length }, (_, i) => `T${i + 1}`), [actualData])

  const data = actualData[0] as ActualData | undefined

  return (
    <div className="my-3 bg-kudwa-yellow-100 p-4 rounded-3xl">
      {data ? (
        <>
          <div className="text-sm text-gray-600 mb-2">
            <span className="font-semibold">ID:</span> {data.id}
            <br />
            <span className="font-semibold">Account:</span> {data.codatAccountId || "-"}
            <br />
            <span className="font-semibold">Source:</span> {data.source}
            <br />
            <span className="font-semibold">Created At:</span> {formatDateTime(data.createdAt)}
          </div>
          <div className="flex flex-col gap-4 overflow-x-scroll py-3">
            <ReportTable headDescriptions={slots} rows={{ Values: data.value }} />
          </div>
        </>
      ) : (
        <div className="flex-1 text-center">No actual data available.</div>
      )}
    </div>
  )
}

export default ActualDataComponent
