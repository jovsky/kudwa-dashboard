import React from "react"

interface FieldsListProps {
  list: Record<string, string | number>
  className?: string
}

const FieldsList: React.FC<FieldsListProps> = ({ list, className = "" }) => {
  const keySpanWidth = Math.max(...Object.keys(list).map((key) => key.length)) * 8

  return (
    <div className={`flex flex-col gap-2 h-fit ${className}`}>
      {Object.entries(list).map(([key, value]) => (
        <div key={key}>
          <span className="font-semibold" style={{ minWidth: keySpanWidth }}>
            {key}:
          </span>{" "}
          {value}
        </div>
      ))}
    </div>
  )
}

export default FieldsList
