import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import api from "@/data/api"
import { DashboardDataSchema } from "@/schemas/dashboardSchemas"
import { DashboardData, Period } from "@/types/dashboardTypes"

interface DashboardState {
  data: DashboardData | null
  loading: boolean
  error: string | null
}

const initialState: DashboardState = {
  data: null,
  loading: false,
  error: null,
}

export const fetchDashboardData = createAsyncThunk<DashboardData, Period, { rejectValue: string }>(
  "dashboard/fetchDashboardData",
  async (period, { rejectWithValue }) => {
    try {
      const response = await api.getDashboardData(period)
      const parsed = DashboardDataSchema.safeParse(response.data)

      if (!parsed.success) {
        return rejectWithValue(`Invalid data format from API: ${parsed.error.message}`)
      }

      return parsed.data
    } catch (err) {
      return rejectWithValue((err as Error).message || "Failed to fetch dashboard data")
    }
  },
)

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "Unknown error"
      })
  },
})

export const dashboardReducer = dashboardSlice.reducer
