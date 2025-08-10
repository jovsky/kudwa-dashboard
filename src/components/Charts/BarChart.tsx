import { FC, memo, useMemo } from "react"
import { Bar, BarChart as RBarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import calculateMaxYValue from "@/utils/calculateMaxYValue"
import formatCurrency from "@/utils/formatCurrency"
import sumNumbers from "@/utils/sumNumbers"

interface BarChartProps {
  chartName: string
  chartData: Array<{ xDesc: string; Value: number }>
  barColor: string
}

const BarChart: FC<BarChartProps> = ({ chartName, chartData, barColor }) => {
  // Take the maximum Y value from the chart data
  const maxValueY = useMemo(() => calculateMaxYValue(chartData.map((item) => item.Value)), [chartData])

  // Sum all Y values to get the total items
  const totalItems = useMemo(() => sumNumbers(chartData, "Value"), [chartData])

  return (
    <div className="flex flex-col w-full justify-end">
      <div className="w-full">
        <p className="mt-2 items-center text-center text-lg font-bold uppercase">{chartName}</p>
        <p className="mt-1 text-center">Total: {formatCurrency(totalItems)}</p>
      </div>
      <ResponsiveContainer height={300} minWidth={500}>
        <RBarChart data={chartData} margin={{ top: 30, left: 20 }} className="outline-none!">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="xDesc" tick={{ fontSize: 12 }} />
          <YAxis
            allowDecimals={false}
            domain={[0, Math.max(maxValueY, 10)]}
            tick={{ fontSize: 14 }}
            tickFormatter={(val: number) => formatCurrency(val, "truncate")}
          />
          <Tooltip formatter={(val) => formatCurrency(+val)} />
          <Bar dataKey="Value" fill={barColor} stackId="a" isAnimationActive={true} animationDuration={1500} />
        </RBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default memo(BarChart)
