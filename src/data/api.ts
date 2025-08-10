import { DashboardData } from "@/types/dashboardTypes"
import { Period } from "@/types/globalTypes"
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
}
