import { FC, memo } from "react"

import { getChartColor } from "@/data/constants/chartColors"
import {
  BarChartInfo,
  ChartInfoUnion,
  ColumnStackedChartInfo,
  DonutChartInfo,
  LineChartInfo,
  PieChartInfo,
} from "@/types/dashboardTypes"

import BarChart from "./BarChart"
import ColumnStackChart from "./ColumnStackChart"
import DonutChart from "./DonutChart"
import LineChart from "./LineChart"
import PieChart from "./PieChart"

interface ChartMapProps {
  title: string
  chartInfo: ChartInfoUnion[]
  dateArray: string[]
}

const ChartMap: FC<ChartMapProps> = ({ chartInfo, dateArray, title }) => {
  const lineChartInfo: LineChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "line")
  const donutChartInfo: DonutChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "donut")
  const barChartInfo: BarChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "bar")
  const pieChartInfo: PieChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "pie")
  const columnStackedChartInfo: ColumnStackedChartInfo[] = chartInfo.filter((chart) => chart?.chartType === "columnStacked")

  const Charts: React.FC[] = []

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
          barColor={getChartColor(index)}
        />
      ) : (
        <></>
      ),
    )
    Charts.push(...BarCharts.map((Chart) => () => Chart))
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
          lineColor={getChartColor(index)}
        />
      ) : (
        <></>
      ),
    )
    Charts.push(...LineCharts.map((Chart) => () => Chart))
  }

  if (pieChartInfo.length) {
    Charts.push(() => (
      <PieChart
        chartName={title}
        chartData={pieChartInfo
          .map((chart) => ({
            name: chart.name,
            value: chart.values,
          }))
          .filter((chart) => chart.value >= 0)}
      />
    ))
  }

  if (donutChartInfo.length) {
    Charts.push(() => (
      <DonutChart
        chartName={title}
        chartData={donutChartInfo
          .map((chart) => ({
            name: chart.name,
            value: chart.values,
          }))
          .filter((chart) => chart.value >= 0)}
      />
    ))
  }

  if (columnStackedChartInfo.length) {
    const chartData = dateArray.map((date, index) => {
      const item: Record<string, string | number> = { xDesc: date }

      columnStackedChartInfo.forEach((chart) => {
        item[chart.name] = chart.values[index]
      })

      return item
    })
    const ColumnStackedChart = <ColumnStackChart key="column-stacked-chart" chartName={title} chartData={chartData} />

    Charts.push(() => ColumnStackedChart)
  }

  return (
    <div
      className={`flex overflow-hidden md:overflow-x-auto gap-4 md:gap-20 px-2 md:px-10 py-4 flex-col md:flex-row
    ${Charts.length > 1 ? "w-min-[680px]" : "w-full justify-center"}`}
    >
      {Charts.length ? (
        Charts.map((Chart, index) => (
          <div key={index} className="flex-shrink-0">
            <Chart />
          </div>
        ))
      ) : (
        <span>No chart data available</span>
      )}
    </div>
  )
}

export default memo(ChartMap)
