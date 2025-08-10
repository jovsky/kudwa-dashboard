import React, { useCallback, useMemo } from "react"
import { FaChartBar } from "react-icons/fa"

import useDisclosure from "@/hooks/useDisclosure"
import { ChartInfoUnion, Charts, IMainDashboard } from "@/types/dashboardTypes"
import filterNull from "@/utils/filterNull"

import ChartMap from "../../Charts/ChartMap"
import Collapsible from "../../Collapsible"
import ChartCard from "./ChartCard"

type MainDashboardChartInfo = {
  id: keyof Charts
  name: string
  data: ChartInfoUnion[]
  isOpen: boolean
  toggle: () => void
  onOpen: () => void
}

const MainDashboard: React.FC<{ mainDashboard: IMainDashboard }> = ({ mainDashboard }) => {
  const cashAtBankDisclosure = useDisclosure("collapse:cashAtBank")
  const expenseSplitDisclosure = useDisclosure("collapse:expenseSplit")
  const indirectCashflowDisclosure = useDisclosure("collapse:indirectCashflow")
  const totalRevenuesSplitDisclosure = useDisclosure("collapse:totalRevenuesSplit")
  const profitLossOverviewDisclosure = useDisclosure("collapse:profitLossOverview")
  const salariesSplitDisclosure = useDisclosure("collapse:salariesSplit")
  const manpowerOperatingExpensesDisclosure = useDisclosure("collapse:ManpowerOperatingExpenses")

  const buildChartSerieData = useCallback(
    (id: keyof typeof mainDashboard.charts, name: string, disclosure: ReturnType<typeof useDisclosure>) => ({
      id,
      name,
      data: filterNull(mainDashboard.charts[id]),
      isOpen: disclosure.isOpen,
      toggle: disclosure.toggle,
      onOpen: () => {
        setTimeout(() => {
          const el = document.getElementById(id)
          el?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
        }, 100)
        disclosure.onOpen()
      },
    }),
    [mainDashboard],
  )

  const cashAtBank = useMemo(
    () => buildChartSerieData("cashAtBank", "Cash at Bank", cashAtBankDisclosure),
    [cashAtBankDisclosure, buildChartSerieData],
  )
  const expenseSplit = useMemo(
    () => buildChartSerieData("expenseSplit", "Expense Split", expenseSplitDisclosure),
    [expenseSplitDisclosure, buildChartSerieData],
  )
  const indirectCashflow = useMemo(
    () => buildChartSerieData("indirectCashflow", "Indirect Cashflow", indirectCashflowDisclosure),
    [indirectCashflowDisclosure, buildChartSerieData],
  )
  const totalRevenuesSplit = useMemo(
    () => buildChartSerieData("totalRevenuesSplit", "Total Revenues Split", totalRevenuesSplitDisclosure),
    [totalRevenuesSplitDisclosure, buildChartSerieData],
  )
  const profitLossOverview = useMemo(
    () => buildChartSerieData("profitLossOverview", "Profit Loss Overview", profitLossOverviewDisclosure),
    [profitLossOverviewDisclosure, buildChartSerieData],
  )
  const salariesSplit = useMemo(
    () => buildChartSerieData("salariesSplit", "Salaries Split", salariesSplitDisclosure),
    [salariesSplitDisclosure, buildChartSerieData],
  )
  const manpowerOperatingExpenses = useMemo(
    () => buildChartSerieData("ManpowerOperatingExpenses", "Manpower Operating Expenses", manpowerOperatingExpensesDisclosure),
    [manpowerOperatingExpensesDisclosure, buildChartSerieData],
  )

  const series: MainDashboardChartInfo[] = [
    cashAtBank,
    expenseSplit,
    indirectCashflow,
    totalRevenuesSplit,
    profitLossOverview,
    salariesSplit,
    manpowerOperatingExpenses,
  ]

  return (
    <section className="w-full mb-8">
      <div className="p-4 mb-6">
        <div className="space-y-2">
          <p>
            <strong>Period:</strong> {mainDashboard.period}
          </p>
          <p>
            <strong>Date Range:</strong> {mainDashboard.startDate} - {mainDashboard.endDate}
          </p>
          <p>
            <strong>Interval:</strong> {mainDashboard.dateArray.length} months
          </p>
        </div>
      </div>

      <div className="grid grid-rows-2 gap-4 mb-10">
        <div className="grid grid-cols-3 gap-4">
          {series.slice(0, 3).map(({ data, ...props }) => (
            <ChartCard key={props.name} metricsCount={data.length} Icon={FaChartBar} color="blue" {...props} />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {series.slice(3, 7).map(({ data, ...props }) => (
            <ChartCard key={props.name} metricsCount={data.length} Icon={FaChartBar} color="yellow" {...props} />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full p-1 overflow-hidden gap-6">
        {series.map(({ name, data, id, ...disclosure }) => (
          <Collapsible
            key={name}
            collapseProps={{ id }}
            togglerText={name}
            complementaryText={`(${data.length} metrics)`}
            disclosure={disclosure}
          >
            <ChartMap chartInfo={data} dateArray={mainDashboard.dateArray} />
          </Collapsible>
        ))}
      </div>
    </section>
  )
}

export default MainDashboard
