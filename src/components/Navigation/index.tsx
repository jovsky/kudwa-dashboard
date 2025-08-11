import { FC, PropsWithChildren } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootState } from "@/store"
import { toggleSidebar } from "@/store/slices/sideBarSlice"

import SideBar from "./SideBar"
import TopBar from "./TopBar"

const Navigation: FC<PropsWithChildren> = ({ children }) => {
  const isOpen = useSelector((state: RootState) => state.sideBar.isOpen)
  const dispatch = useDispatch()

  return (
    <div className="flex h-screen w-screen overflow-hidden relative">
      <div
        id="sidebar-parent"
        className={`z-2 absolute md:relative h-full
          ${isOpen ? "bg-black/50 w-screen md:w-fit" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            // Only fires if the click is on the parent, not its children
            // Your logic here
            dispatch(toggleSidebar())
          }
        }}
      >
        <SideBar />
      </div>
      <div className="flex flex-col h-full w-full z-1 overflow-hidden">
        <TopBar />
        <div className="flex h-full w-full bg-background overflow-hidden">{children}</div>
      </div>
    </div>
  )
}

export default Navigation
