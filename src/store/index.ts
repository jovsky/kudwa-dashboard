import { configureStore } from "@reduxjs/toolkit"

import { sideBarReducer } from "./slices/sideBarSlice"

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
