import { createSlice } from "@reduxjs/toolkit"

interface UIState {
  isOpen: boolean
}

const initialState: UIState = {
  isOpen: false,
}

const sideBarSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpen = true
    },
    closeSidebar: (state) => {
      state.isOpen = false
    },
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { openSidebar, closeSidebar, toggleSidebar } = sideBarSlice.actions

export const sideBarReducer = sideBarSlice.reducer
