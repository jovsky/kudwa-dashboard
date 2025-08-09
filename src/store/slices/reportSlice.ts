import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import api from "@/data/api"
import { ReportDataSchema } from "@/schemas/reportSchemas"
import { ReportData } from "@/types/reportTypes"

interface ReportState {
  data: ReportData | null
  loading: boolean
  error: string | null
}

const initialState: ReportState = {
  data: null,
  loading: false,
  error: null,
}

export const fetchReportData = createAsyncThunk<ReportData, void, { rejectValue: string }>(
  "report/fetchReportData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getReportData()
      const parsed = ReportDataSchema.safeParse(response.data)

      if (!parsed.success) {
        return rejectWithValue(`Invalid data format from API: ${parsed.error.message}`)
      }

      return parsed.data
    } catch (err) {
      return rejectWithValue((err as Error).message || "Failed to fetch report data")
    }
  },
)

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReportData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchReportData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchReportData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "Unknown error"
      })
  },
})

export const reportReducer = reportSlice.reducer
