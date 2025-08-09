import { FC } from "react"

import {
  BarChartInfo,
  ChartInfoUnion,
  // ColumnStackedChartInfo,
  // DonutChartInfo,
  // LineChartInfo,
  // PieChartInfo,
} from "@/types/dashboardTypes"
import formatCurrency from "@/utils/formatCurrency"

import BarChart from "./BarChart"

interface ChartMapProps {
  chartInfo: (ChartInfoUnion | null)[]
  dateArray: string[]
}

const ChartMap: FC<ChartMapProps> = ({ chartInfo, dateArray }) => {
  if (!chartInfo.length) {
    return <span>No chart data available</span>
  }

  const barChartInfo: BarChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "bar")
  // const donutChartInfo: DonutChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "donut")
  // const lineChartInfo: LineChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "line")
  // const pieChartInfo: PieChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "pie")
  // const columnStackedChartInfo: ColumnStackedChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "columnStacked")

  // a dynamic way to get colors from --kudwa-brown, --kudwa-yellow and --kudwa-blue
  const colors = ["var(--kudwa-brown)", "var(--kudwa-yellow)", "var(--kudwa-blue)"]

  const BarCharts = barChartInfo.map((chart, index) =>
    chart ? (
      <BarChart
        key={index}
        chartName={chart.name}
        chartData={chart.values.map((value, index) => ({
          xDesc: dateArray[index],
          Value: value,
        }))}
        yAxisDescription={"$ Value"}
        barColor={colors[index % colors.length]}
        formatFn={(value) => formatCurrency(value, 0)}
      />
    ) : (
      <></>
    ),
  )

  if (!BarCharts.length /** || !DonutCharts.length || !LineCharts.length || !PieCharts.length || !ColumnStackedCharts.length */) {
    return <span>No implemented chart type found</span>
  }

  return <div className="flex overflow-x-auto overflow-y-hidden">{BarCharts}</div>
}

export default ChartMap
