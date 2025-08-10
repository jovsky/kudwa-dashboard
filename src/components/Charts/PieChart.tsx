import { FC } from "react"
import { Cell, Pie, PieChart as RPieChart, ResponsiveContainer, Tooltip } from "recharts"

import { getChartColor } from "@/data/constants/chartColors"
import formatNumber from "@/utils/formatNumber"

interface PieChartProps {
  chartData: Array<{ name: string; value: number }>
}

const PieChart: FC<PieChartProps> = ({ chartData }) => {
  return (
    <ResponsiveContainer height={300}>
      <RPieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={110}
          paddingAngle={0}
          label={({ name, value }) => `${name}: ${formatNumber(Number(value))}`}
          isAnimationActive={true}
        >
          {chartData.map((entry, idx) => (
            <Cell key={entry.name} fill={getChartColor(idx)} />
          ))}
        </Pie>
        <Tooltip formatter={(val) => formatNumber(+val, "truncate")} />
      </RPieChart>
    </ResponsiveContainer>
  )
}

export default PieChart
