import { FC, PropsWithChildren } from "react"

import TopBar from "./TopBar"

const Navigation: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col h-full w-full z-1">
      <TopBar />
      <div className="flex h-full w-full bg-background">{children}</div>
    </div>
  )
}

export default Navigation
