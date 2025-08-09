import { FC } from "react"

import { Profile } from "../Profile"
import Logo from "./Logo"

const TopBar: FC = () => {
  return (
    <div className="flex w-full h-20 items-center px-6 py-2 gap-4 shadow-md bg-foreground">
      <Logo />
      <div className="ml-auto pl-8">
        <Profile />
      </div>
    </div>
  )
}

export default TopBar
