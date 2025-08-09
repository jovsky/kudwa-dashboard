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
  cashAtBank: CashAtBank[]
  expenseSplit: Split[]
  indirectCashflow: Array<CashAtBank | null>
  totalRevenuesSplit: Split[]
  profitLossOverview: CashAtBank[]
  salariesSplit: unknown[]
  ManpowerOperatingExpenses: unknown[]
}

export interface CashAtBank {
  chartType: ChartType
  name: string
  values: number[]
}

export interface Split {
  chartType: ChartType
  name: string
  values: number
}

export interface MainDashboardKPIs {
  topKPIs: TopKPI[]
  KPIs: Kpi[]
}

export interface Kpi {
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
