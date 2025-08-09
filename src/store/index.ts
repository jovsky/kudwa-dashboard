import { configureStore } from "@reduxjs/toolkit"

import { dashboardReducer } from "./slices/dashboardSlice"
import { sideBarReducer } from "./slices/sideBarSlice"

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    dashboard: dashboardReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
