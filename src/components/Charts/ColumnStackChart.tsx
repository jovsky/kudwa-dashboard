import { FC, useMemo } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { getChartColor } from "@/data/constants/chartColors"
import formatNumber from "@/utils/formatNumber"
import sumNumbers from "@/utils/sumNumbers"

interface ColumnStackChartProps {
  chartName: string
  chartData: Record<string, string | number>[]
  yAxisDescription: string
}

const ColumnStackChart: FC<ColumnStackChartProps> = ({ chartName, chartData, yAxisDescription }) => {
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
        <p className="mt-1 text-center">Total: {formatNumber(totalItems)}</p>
      </div>
      <ResponsiveContainer height={300} minWidth={500}>
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
            tickFormatter={(val: number) => formatNumber(val, "truncate")}
          />
          <Tooltip formatter={(val) => formatNumber(+val, "truncate")} />
          {keys.map((key, i) => (
            <Bar key={key} dataKey={key} fill={getChartColor(i)} stackId="a" isAnimationActive={true} animationDuration={1500} />
          ))}
          <Legend wrapperStyle={{ fontSize: "12px" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ColumnStackChart
