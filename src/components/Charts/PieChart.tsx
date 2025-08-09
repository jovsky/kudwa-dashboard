import { FC } from "react"
import { Cell, Pie, PieChart as RPieChart, ResponsiveContainer, Tooltip } from "recharts"

import ChartTooltip from "./ChartTooltip"

interface PieChartProps {
  chartData: Array<{ name: string; value: number }>
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

const PieChart: FC<PieChartProps> = ({ chartData, formatFn = (value) => value.toString() }) => {
  return (
    <ResponsiveContainer width={600} height={300}>
      <RPieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={110}
          paddingAngle={1}
          label={({ name, value }) => `${name}: ${formatFn(Number(value))}`}
          isAnimationActive={true}
        >
          {chartData.map((entry, idx) => (
            <Cell key={entry.name} fill={colors[idx % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={(val) => <ChartTooltip val={val} descKey="name" valueKey="value" formatFn={formatFn} />} />
      </RPieChart>
    </ResponsiveContainer>
  )
}

export default PieChart
