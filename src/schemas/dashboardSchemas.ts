import { z } from "zod"

import { Period } from "@/types/globalTypes"

const periodValues: Period[] = ["monthly", "quarterly", "yearly"] as const

export const LineChartInfoSchema = z.object({
  chartType: z.literal("line"),
  name: z.string(),
  values: z.array(z.number()),
})
export const DonutChartInfoSchema = z.object({
  chartType: z.literal("donut"),
  name: z.string(),
  values: z.number(),
})
export const BarChartInfoSchema = z.object({
  chartType: z.literal("bar"),
  name: z.string(),
  values: z.array(z.number()),
})
export const PieChartInfoSchema = z.object({
  chartType: z.literal("pie"),
  name: z.string(),
  values: z.number(),
})
export const ColumnStackedChartInfoSchema = z.object({
  chartType: z.literal("columnStacked"),
  name: z.string(),
  values: z.array(z.number()),
})

const ChartInfoUnionSchema = z.union([
  LineChartInfoSchema,
  DonutChartInfoSchema,
  BarChartInfoSchema,
  PieChartInfoSchema,
  ColumnStackedChartInfoSchema,
])

export const ChartsSchema = z.object({
  cashAtBank: z.array(LineChartInfoSchema.or(z.null())),
  expenseSplit: z.array(DonutChartInfoSchema.or(z.null())),
  indirectCashflow: z.array(BarChartInfoSchema.or(z.null())),
  totalRevenuesSplit: z.array(PieChartInfoSchema.or(z.null())),
  profitLossOverview: z.array(LineChartInfoSchema.or(ColumnStackedChartInfoSchema).or(z.null())),
  salariesSplit: z.array(ChartInfoUnionSchema.or(z.null())),
  ManpowerOperatingExpenses: z.array(ChartInfoUnionSchema.or(z.null())),
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
