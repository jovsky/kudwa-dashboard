import { FC, memo } from "react"
import { TooltipContentProps } from "recharts"
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"

type ChartTooltipProps = {
  val: TooltipContentProps<ValueType, NameType>
}

const ChartTooltip: FC<ChartTooltipProps> = memo(
  ({ val }) =>
    val.active &&
    val.payload?.[0]?.payload && (
      <div className="bg-white p-2 rounded shadow">
        <p className="text-sm font-bold">{val.payload[0].payload.name}</p>
        <p className="text-xs">Value: {val.payload[0].payload.value}</p>
      </div>
    ),
)
ChartTooltip.displayName = "ChartTooltip"

export default ChartTooltip
