import { FC, JSX } from "react"

import {
  BarChartInfo,
  ChartInfoUnion,
  LineChartInfo,
  // ColumnStackedChartInfo,
  // DonutChartInfo,
  // LineChartInfo,
  // PieChartInfo,
} from "@/types/dashboardTypes"
import formatCurrency from "@/utils/formatCurrency"

import BarChart from "./BarChart"
import LineChart from "./LineChart"

interface ChartMapProps {
  chartInfo: ChartInfoUnion[]
  dateArray: string[]
}

const ChartMap: FC<ChartMapProps> = ({ chartInfo, dateArray }) => {
  if (!chartInfo.length) {
    return <span>No chart data available</span>
  }

  const lineChartInfo: LineChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "line")
  // const donutChartInfo: DonutChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "donut")
  const barChartInfo: BarChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "bar")
  // const pieChartInfo: PieChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "pie")
  // const columnStackedChartInfo: ColumnStackedChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "columnStacked")

  // a dynamic way to get colors from --kudwa-brown, --kudwa-yellow and --kudwa-blue
  const colors = ["var(--kudwa-yellow)", "var(--kudwa-blue)", "var(--kudwa-brown)"]

  const Charts: JSX.Element[] = []

  if (barChartInfo.length) {
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
    Charts.push(...BarCharts)
  }

  if (lineChartInfo.length) {
    const LineCharts = lineChartInfo.map((chart, index) =>
      chart ? (
        <LineChart
          key={index}
          chartName={chart.name}
          chartData={chart.values.map((value, index) => ({
            xDesc: dateArray[index],
            Value: value,
          }))}
          yAxisDescription={"$ Value"}
          lineColor={colors[index % colors.length]}
          formatFn={(value) => formatCurrency(value, 0)}
        />
      ) : (
        <></>
      ),
    )
    Charts.push(...LineCharts)
  }

  if (!Charts.length) {
    return <span>No implemented chart type found</span>
  }

  return <div className="flex overflow-x-auto overflow-y-hidden gap-20 px-10 py-4">{Charts}</div>
}

export default ChartMap
