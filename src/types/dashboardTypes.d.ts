type Period = "monthly" | "quarterly" | "yearly"

export interface DashboardData {
  mainDashboard: IMainDashboard
  mainDashboardKPIs: IMainDashboardKPIs
}

export interface IMainDashboard {
  period: Period
  startDate: string
  endDate: string
  metricDate: string
  dateArray: string[]
  charts: Charts
}

export interface Charts {
  cashAtBank: (LineChartInfo | null)[]
  expenseSplit: (DonutChartInfo | null)[]
  indirectCashflow: (BarChartInfo | null)[]
  totalRevenuesSplit: (PieChartInfo | null)[]
  profitLossOverview: (LineChartInfo | ColumnStackedChartInfo | null)[]
  salariesSplit: (ChartInfoUnion | null)[]
  ManpowerOperatingExpenses: (ChartInfoUnion | null)[]
}

export interface LineChartInfo {
  chartType: "line"
  name: string
  values: number[]
}

export interface DonutChartInfo {
  chartType: "donut"
  name: string
  values: number
}

export interface BarChartInfo {
  chartType: "bar"
  name: string
  values: number[]
}

export interface PieChartInfo {
  chartType: "pie"
  name: string
  values: number
}

export interface ColumnStackedChartInfo {
  chartType: "columnStacked"
  name: string
  values: number[]
}

type ChartInfoUnion = LineChartInfo | DonutChartInfo | BarChartInfo | PieChartInfo | ColumnStackedChartInfo

export interface IMainDashboardKPIs {
  topKPIs: TopKPI[]
  KPIs: KPI[]
}

export interface KPI {
  name: string
  value: number
  mom: number
  prefix: string
}

export interface TopKPI {
  name: string
  value: number
  date?: string
  mOm?: number
  type?: string
}
