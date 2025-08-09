import { FC } from "react"

import Logo from "../Logo"
import { Profile } from "../Profile"

const TopBar: FC = () => {
  return (
    <div className="flex w-full h-20 items-center px-6 py-2 gap-4 shadow-md bg-kudwa-brown-100">
      <Logo />
      <div className="ml-auto pl-8">
        <Profile />
      </div>
    </div>
  )
}

export default TopBar
