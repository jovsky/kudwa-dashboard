// Dashboard Data Types
type ChartType = "line" | "donut" | "bar" | "pie" | "columnStacked"

type Period = "monthly" | "quarterly" | "yearly"

// Chart Data Structure
interface ChartData {
  chartType: ChartType
  name: string
  values: number[] | number
}

// Chart Collections
interface DashboardCharts {
  cashAtBank: ChartData[]
  expenseSplit: ChartData[]
  indirectCashflow: (ChartData | null)[]
  totalRevenuesSplit: ChartData[]
  profitLossOverview: ChartData[]
}

// Main Dashboard Structure
interface DashboardData {
  mainDashboard: {
    period: Period
    startDate: string
    endDate: string
    metricDate: string
    dateArray: string[]
    charts: DashboardCharts
  }
}

// Report Data Types
interface UniqueReference {
  sheetType: string
  integrationSourceId: number
  sourceType: string
  accountId: string
  accountName: string
  metric: boolean
}

interface ActualData {
  id: number
  topLevelFieldId: number | null
  fieldId: number
  value: number[]
  createdAt: string
  updatedAt: string
}

interface ReportField {
  id: number
  topLevelFieldId: number
  name: string
  code: string | null
  uniqueReference: UniqueReference
  order: number | null
  description: string | null
  style: string | null
  fieldType: string | null
  createdAt: string
  updatedAt: string
  fieldId: number | null
  outputs: any[]
  actualData: ActualData[]
  fields?: ReportField[]
}

interface TopLevelField {
  id: number
  financialReportId: number
  name: string
  type: string
  description: string | null
  style: string | null
  createdAt: string
  updatedAt: string
  outputs: any[]
  actualData: any[]
  fields: ReportField[]
}

interface ReportData {
  reportResult: {
    id: number
    scenarioId: number
    startingDate: string
    endingDate: string
    createdAt: string
    updatedAt: string
    profitnLoss: TopLevelField[]
    balanceSheet?: TopLevelField[]
    cashflow?: TopLevelField[]
  }
}

// Utility Types
type DashboardPeriodData = {
  monthly: DashboardData
  quarterly: DashboardData
  yearly: DashboardData
}

// View Types for Components
interface ChartComponentProps {
  data: ChartData[]
  title: string
  type: ChartType
}

interface DashboardMetrics {
  totalRevenue: number
  totalExpenses: number
  netProfit: number
  period: Period
}

// Filter and Selection Types
interface DateRange {
  startDate: string
  endDate: string
}

interface FilterOptions {
  period: Period
  dateRange?: DateRange
  chartTypes?: ChartType[]
}

//  utility type for all dashboard data
type AllDashboardData = {
  [K in Period]: DashboardData
}
