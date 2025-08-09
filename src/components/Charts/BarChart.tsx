import { FC, useMemo } from "react"
import { Bar, BarChart as RBarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface BarChartProps {
  chartName: string
  chartData: Array<{ xDesc: string; Value: number }>
  yAxisDescription: string
  barColor: string
  formatFn?: (value: number) => string
}

const BarChart: FC<BarChartProps> = ({
  chartName,
  chartData,
  yAxisDescription,
  barColor,
  formatFn = (value) => value.toString(),
}) => {
  // Take the maximum Y value from the chart data
  const maxValueY = useMemo(() => {
    const maxValue = Math.max(...chartData.map((item) => item.Value))
    const tenPower = 10 ** (maxValue.toString().length - 1)
    return Math.round(Math.ceil(maxValue / tenPower) * tenPower)
  }, [chartData])

  // Sum all Y values to get the total items
  const totalItems = useMemo(() => {
    return chartData.reduce((sum, item) => sum + item.Value, 0)
  }, [chartData])

  return (
    <div className="w-full">
      <div className="w-full">
        <p className="mt-2 items-center text-center text-lg font-bold uppercase">{chartName}</p>
        <p className="mt-1 text-center">Total: {formatFn(totalItems)}</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <RBarChart data={chartData} margin={{ top: 30, left: 20 }} className="outline-none!">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="xDesc" tick={{ fontSize: 12 }} />
          <YAxis
            allowDecimals={false}
            domain={[0, maxValueY]}
            tick={{ fontSize: 14 }}
            label={{
              value: yAxisDescription,
              position: "top",
              offset: 15,
              style: { textAnchor: "start", fontSize: 14 },
            }}
            tickFormatter={formatFn}
          />
          <Tooltip formatter={(value) => formatFn(+value)} />
          <Bar
            dataKey="Value"
            fill={barColor}
            stackId="a"
            label={({ x, y, width, value }: { x: number; y: number; width: number; value: number }) => (
              <text x={x + width / 2} y={y - 4} fill="#111" fontSize={10} textAnchor="middle">
                {formatFn(value)}
              </text>
            )}
            isAnimationActive={false}
          />
        </RBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChart
