import { configureStore } from "@reduxjs/toolkit"

import { dashboardReducer } from "./slices/dashboardSlice"
import { reportReducer } from "./slices/reportSlice"
import { sideBarReducer } from "./slices/sideBarSlice"

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    dashboard: dashboardReducer,
    report: reportReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
