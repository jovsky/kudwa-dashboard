import { FC, PropsWithChildren } from "react"

import SideMenu from "./SideMenu"
import TopBar from "./TopBar"

const Navigation: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="z-2">
        <SideMenu />
      </div>
      <div className="flex flex-col h-full w-full z-1">
        <TopBar />
        <div className="flex h-full w-full bg-background">{children}</div>
      </div>
    </div>
  )
}

export default Navigation
