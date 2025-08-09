import { DashboardData, Period } from "@/types/dashboardTypes"
import { ReportData } from "@/types/reportTypes"

// Import JSON data
import monthlyData from "./staticData/dashboardData/monthly.json"
import quarterlyData from "./staticData/dashboardData/quarterly.json"
import yearlyData from "./staticData/dashboardData/yearly.json"
import reportData from "./staticData/reportData/report.json"

// API Response Types
export interface ApiResponse<T> {
  data: T
  status: "success" | "error"
  message: string
}

export interface ApiError {
  status: "error"
  message: string
  code?: number
}

/**
 * Simulate network delay
 */
const simulateDelay = (ms: number = 2000) => new Promise((resolve) => setTimeout(resolve, ms))

export default {
  /**
   * Fetch dashboard data for a specific period
   */
  async getDashboardData(period: Period): Promise<ApiResponse<DashboardData>> {
    try {
      await simulateDelay(2000)

      let data: DashboardData

      switch (period) {
        case "monthly":
          data = monthlyData as DashboardData
          break
        case "quarterly":
          data = quarterlyData as DashboardData
          break
        case "yearly":
          data = yearlyData as DashboardData
          break
        default:
          throw new Error(`Invalid period: ${period}`)
      }

      return {
        data,
        status: "success",
        message: `Dashboard data for ${period} period retrieved successfully`,
      }
    } catch (error) {
      return {
        data: {} as DashboardData,
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error occurred",
      }
    }
  },

  /**
   * Fetch all dashboard data (monthly, quarterly, yearly)
   */
  async getAllDashboardData(): Promise<
    ApiResponse<{
      monthly: DashboardData
      quarterly: DashboardData
      yearly: DashboardData
    }>
  > {
    try {
      await simulateDelay(2000)

      const [monthly, quarterly, yearly] = await Promise.all([
        this.getDashboardData("monthly"),
        this.getDashboardData("quarterly"),
        this.getDashboardData("yearly"),
      ])

      return {
        data: {
          monthly: monthly.data,
          quarterly: quarterly.data,
          yearly: yearly.data,
        },
        status: "success",
        message: "All dashboard data retrieved successfully",
      }
    } catch (error) {
      return {
        data: {
          monthly: {} as DashboardData,
          quarterly: {} as DashboardData,
          yearly: {} as DashboardData,
        },
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error occurred",
      }
    }
  },

  /**
   * Fetch report data
   */
  async getReportData(): Promise<ApiResponse<ReportData>> {
    try {
      await simulateDelay(2000)

      const data = reportData as ReportData

      return {
        data,
        status: "success",
        message: "Report data retrieved successfully",
      }
    } catch (error) {
      return {
        data: {} as ReportData,
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error occurred",
      }
    }
  },

  /**
   * Fetch dashboard metrics summary for a specific period
   */
  async getDashboardMetrics(period: Period): Promise<
    ApiResponse<{
      totalRevenue: number
      totalExpenses: number
      netProfit: number
      period: Period
      lastUpdated: string
    }>
  > {
    try {
      await simulateDelay(2000)

      const response = await this.getDashboardData(period)

      if (response.status === "error") {
        throw new Error(response.message)
      }

      const dashboardData = response.data

      // Calculate metrics from chart data
      const revenueData = dashboardData.mainDashboard.charts.totalRevenuesSplit || []
      const expenseData = dashboardData.mainDashboard.charts.expenseSplit || []

      const totalRevenue = revenueData.reduce((sum, item) => {
        return sum + (typeof item.values === "number" ? item.values : 0)
      }, 0)

      const totalExpenses = expenseData.reduce((sum, item) => {
        return sum + (typeof item.values === "number" ? item.values : 0)
      }, 0)

      const netProfit = totalRevenue - totalExpenses

      return {
        data: {
          totalRevenue,
          totalExpenses,
          netProfit,
          period,
          lastUpdated: new Date().toISOString(),
        },
        status: "success",
        message: `Dashboard metrics for ${period} period calculated successfully`,
      }
    } catch (error) {
      return {
        data: {
          totalRevenue: 0,
          totalExpenses: 0,
          netProfit: 0,
          period,
          lastUpdated: new Date().toISOString(),
        },
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error occurred",
      }
    }
  },
}
