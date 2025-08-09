import { z } from "zod"

import { ChartType, Period } from "@/types/dashboardTypes"

const chatTypeValues: ChartType[] = ["line", "donut", "bar", "pie", "columnStacked"] as const
const periodValues: Period[] = ["monthly", "quarterly", "yearly"] as const

export const ChartInfoSchema = z.object({
  chartType: z.enum(chatTypeValues),
  name: z.string(),
  values: z.array(z.number()),
})

export const SingleChartInfo = z.object({
  chartType: z.enum(chatTypeValues),
  name: z.string(),
  values: z.number(),
})

export const ChartsSchema = z.object({
  cashAtBank: z.array(ChartInfoSchema),
  expenseSplit: z.array(SingleChartInfo),
  indirectCashflow: z.array(ChartInfoSchema.or(z.null())),
  totalRevenuesSplit: z.array(SingleChartInfo),
  profitLossOverview: z.array(ChartInfoSchema),
  salariesSplit: z.array(z.unknown()),
  ManpowerOperatingExpenses: z.array(z.unknown()),
})

export const KpiSchema = z.object({
  name: z.string(),
  value: z.number(),
  mom: z.number(),
  prefix: z.string(),
})

export const TopKPISchema = z.object({
  name: z.string(),
  value: z.number(),
  date: z.string().optional(),
  mOm: z.number().optional(),
  type: z.string().optional(),
})

export const MainDashboardKPIs = z.object({
  topKPIs: z.array(TopKPISchema),
  KPIs: z.array(KpiSchema),
})

export const MainDashboardSchema = z.object({
  period: z.enum(periodValues),
  startDate: z.string(),
  endDate: z.string(),
  metricDate: z.string(),
  dateArray: z.array(z.string()),
  charts: ChartsSchema,
})

export const DashboardDataSchema = z.object({
  mainDashboard: MainDashboardSchema,
  mainDashboardKPIs: MainDashboardKPIs,
})
