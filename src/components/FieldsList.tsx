import React from "react"

interface FieldsListProps {
  list: Record<string, string | number>
  className?: string
}

const FieldsList: React.FC<FieldsListProps> = ({ list, className = "" }) => {
  return (
    <div className={`flex flex-col gap-1 h-fit ${className}`}>
      {Object.entries(list).map(([key, value]) => (
        <div key={key} className="flex">
          <div key={key} className="font-semibold mr-2">
            {key}:
          </div>{" "}
          {value}
        </div>
      ))}
    </div>
  )
}

export default FieldsList
