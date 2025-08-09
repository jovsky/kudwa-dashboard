import { FC, useMemo } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import sumNumbers from "@/utils/sumNumbers"

import ChartTooltip from "./ChartTooltip"

interface ColumnStackChartProps {
  chartName: string
  chartData: Record<string, string | number>[]
  yAxisDescription: string
  formatFn?: (value: number) => string
}

const colors = [
  "var(--kudwa-blue-200)",
  "var(--kudwa-yellow-500)",
  "var(--kudwa-brown-200)",
  "var(--kudwa-yellow-600)",
  "var(--kudwa-blue-300)",
  "var(--kudwa-brown)",
  "var(--kudwa-blue-400)",
  "var(--kudwa-yellow-600)",
  "var(--kudwa-blue-500)",
  "var(--kudwa-brown-500)",
]

const ColumnStackChart: FC<ColumnStackChartProps> = ({
  chartName,
  chartData,
  yAxisDescription,
  formatFn = (value) => value.toString(),
}) => {
  /*
  chartData = [
    { xDesc: "2023-01-01", total: 60Value1: 10, Value2: 20, Value3: 30 },
    { xDesc: "2023-01-02", total: 80, Value1: 20, Value2: 30, Value3: 30 },
    { xDesc: "2023-01-03", total: 100, Value1: 30, Value2: 40, Value3: 30 },
    // ... more data
  ]
  */

  const totalBarHeights = useMemo(() => chartData.map((item) => sumNumbers(Object.values(item))), [chartData])

  // Take the maximum Y value from the chart data
  const maxValueY = useMemo(() => {
    const maxValue = Math.max(...totalBarHeights)
    const tenPower = 10 ** (maxValue.toString().length - 1)
    return Math.round(Math.ceil(maxValue / tenPower) * tenPower)
  }, [totalBarHeights])

  // Sum all Y values to get the total items
  const totalItems = useMemo(() => sumNumbers(totalBarHeights), [totalBarHeights])

  const keys = useMemo(() => Object.keys(chartData[0]).filter((key) => key !== "xDesc"), [chartData])

  return (
    <div className="flex flex-col w-full justify-end">
      <div className="w-full">
        <p className="mt-2 items-center text-center text-lg font-bold uppercase">{chartName}</p>
        <p className="mt-1 text-center">Total: {formatFn(totalItems)}</p>
      </div>
      <ResponsiveContainer width={600} height={300}>
        <BarChart data={chartData} margin={{ top: 30, left: 20 }} className="outline-none!">
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
          {/* <Bar dataKey="Value" fill={ColumnStackColor} stackId="a" isAnimationActive={true} /> */}
          {keys.map((key, i) => (
            <Bar key={key} dataKey={key} fill={colors[i % colors.length]} stackId="a" isAnimationActive={true} />
          ))}
          <Legend wrapperStyle={{ fontSize: "12px" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ColumnStackChart
