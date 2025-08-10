import { FC, memo, useMemo } from "react"
import { Cell, Pie, PieChart as RPieChart, ResponsiveContainer, Tooltip } from "recharts"

import { getChartColor } from "@/data/constants/chartColors"
import formatCurrency from "@/utils/formatCurrency"
import sumNumbers from "@/utils/sumNumbers"

interface PieChartProps {
  chartName: string
  chartData: Array<{ name: string; value: number }>
}

const PieChart: FC<PieChartProps> = ({ chartName, chartData }) => {
  const totalItems = useMemo(() => sumNumbers(chartData.map((item) => item.value)), [chartData])

  return (
    <div className="flex flex-col w-full justify-end">
      <div className="w-full">
        <p className="mt-2 items-center text-center text-lg font-bold uppercase">{chartName}</p>
        <p className="mt-1 text-center">Total: {formatCurrency(totalItems)}</p>
      </div>
      <ResponsiveContainer height={300} minWidth={500}>
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
            label={({ name, value }) => `${name}: ${formatCurrency(Number(value))}`}
            isAnimationActive={true}
          >
            {chartData.map((entry, idx) => (
              <Cell key={entry.name} fill={getChartColor(idx)} />
            ))}
          </Pie>
          <Tooltip formatter={(val) => formatCurrency(+val)} />
        </RPieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default memo(PieChart)
