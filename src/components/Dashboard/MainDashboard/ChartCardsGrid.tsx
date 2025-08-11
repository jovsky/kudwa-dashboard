import { FaChartBar } from "react-icons/fa"

import { MainDashboardChartInfo } from "."
import ChartCard from "./ChartCard"

const ChartCardsGrid: React.FC<{ chartsInfo: MainDashboardChartInfo[] }> = ({ chartsInfo }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 my-6">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        {chartsInfo.slice(0, 3).map(({ data, ...props }) => (
          <ChartCard key={props.name} metricsCount={data.length} Icon={FaChartBar} color="blue" {...props} />
        ))}
      </div>
      <div className="flex flex-col 2xl:flex-row gap-2 md:gap-4">
        <div className="flex flex-col md:flex-row gap-2 lg:gap-4 w-full">
          {chartsInfo.slice(3, 5).map(({ data, ...props }) => (
            <ChartCard key={props.name} metricsCount={data.length} Icon={FaChartBar} color="yellow" {...props} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-2 lg:gap-4 w-full">
          {chartsInfo.slice(5, 7).map(({ data, ...props }) => (
            <ChartCard key={props.name} metricsCount={data.length} Icon={FaChartBar} color="yellow" {...props} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChartCardsGrid
