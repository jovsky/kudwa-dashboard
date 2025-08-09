type ChartType = "line" | "donut" | "bar" | "pie" | "columnStacked"

type Period = "monthly" | "quarterly" | "yearly"

export interface DashboardData {
  mainDashboard: MainDashboard
  mainDashboardKPIs: MainDashboardKPIs
}

export interface MainDashboard {
  period: Period
  startDate: string
  endDate: string
  metricDate: string
  dateArray: string[]
  charts: Charts
}

export interface Charts {
  cashAtBank: ChartInfo[]
  expenseSplit: SingleChartInfo[]
  indirectCashflow: (ChartInfo | null)[]
  totalRevenuesSplit: SingleChartInfo[]
  profitLossOverview: ChartInfo[]
  salariesSplit: unknown[]
  ManpowerOperatingExpenses: unknown[]
}

export interface ChartInfo {
  chartType: ChartType
  name: string
  values: number[]
}

export interface SingleChartInfo {
  chartType: ChartType
  name: string
  values: number
}

export interface MainDashboardKPIs {
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
