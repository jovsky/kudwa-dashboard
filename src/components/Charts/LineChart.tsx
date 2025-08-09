import { FC, useMemo } from "react"
import { CartesianGrid, Line, LineChart as RLineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import sumNumbers from "@/utils/sumNumbers"

import ChartTooltip from "./ChartTooltip"

interface LineChartProps {
  chartName: string
  chartData: Array<{ xDesc: string; Value: number }>
  yAxisDescription: string
  lineColor: string
  formatFn?: (value: number) => string
}

const LineChart: FC<LineChartProps> = ({
  chartName,
  chartData,
  yAxisDescription,
  lineColor,
  formatFn = (value) => value.toString(),
}) => {
  // Take the maximum Y value from the chart data
  const maxValueY = useMemo(() => {
    const maxValue = Math.max(...chartData.map((item) => item.Value))
    const tenPower = 10 ** (maxValue.toString().length - 1)
    return Math.round(Math.ceil(maxValue / tenPower) * tenPower)
  }, [chartData])

  // Sum all Y values to get the total items
  const totalItems = useMemo(() => sumNumbers(chartData, "Value"), [chartData])

  return (
    <div className="w-full">
      <div className="w-full">
        <p className="mt-2 items-center text-center text-lg font-bold uppercase">{chartName}</p>
        <p className="mt-1 text-center">Total: {formatFn(totalItems)}</p>
      </div>
      <ResponsiveContainer width={600} height={300}>
        <RLineChart data={chartData} margin={{ top: 30, left: 20 }} className="outline-none!">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="xDesc" tick={{ fontSize: 12 }} />
          <YAxis
            allowDecimals={false}
            domain={[0, Math.max(maxValueY, 10)]}
            tick={{ fontSize: 14 }}
            label={{
              value: yAxisDescription,
              position: "top",
              offset: 15,
              style: { textAnchor: "start", fontSize: 14 },
            }}
            tickFormatter={formatFn}
          />
          <Tooltip content={(val) => <ChartTooltip val={val} descKey="xDesc" valueKey="Value" formatFn={formatFn} />} />
          <Line
            dataKey="Value"
            stroke={lineColor}
            type="monotone"
            strokeWidth={2}
            dot={{ stroke: lineColor, strokeWidth: 3, fill: lineColor }}
            isAnimationActive={true}
          />
        </RLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChart
