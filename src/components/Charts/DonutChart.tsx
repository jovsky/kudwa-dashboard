import { FC } from "react"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

import { getChartColor } from "@/data/constants/chartColors"
import formatNumber from "@/utils/formatNumber"

interface DonutChartProps {
  chartData: Array<{ name: string; value: number }>
}

const DonutChart: FC<DonutChartProps> = ({ chartData }) => {
  return (
    <ResponsiveContainer height={300} minWidth={500}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={110}
          paddingAngle={0}
          label={({ name, value }) => `${name}: ${formatNumber(Number(value))}`}
          isAnimationActive={true}
        >
          {chartData.map((entry, i) => (
            <Cell key={entry.name} fill={getChartColor(i)} />
          ))}
        </Pie>
        <Tooltip formatter={(val) => formatNumber(+val, "truncate")} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default DonutChart
