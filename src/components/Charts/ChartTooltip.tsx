import { FC, memo } from "react"
import { TooltipContentProps } from "recharts"
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"

type ChartTooltipProps = {
  val: TooltipContentProps<ValueType, NameType>
  descKey: string
  valueKey: string
  formatFn: (value: number) => string
}

const ChartTooltip: FC<ChartTooltipProps> = memo(
  ({ val, descKey, valueKey, formatFn }) =>
    val.active &&
    val.payload?.[0]?.payload && (
      <div className="bg-white p-2 rounded shadow">
        <p className="text-sm font-bold">{val.payload[0].payload[descKey]}</p>
        <p className="text-xs">Value: {formatFn(val.payload[0].payload[valueKey])}</p>
      </div>
    ),
)
ChartTooltip.displayName = "ChartTooltip"

export default ChartTooltip
