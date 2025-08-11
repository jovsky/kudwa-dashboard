import { FC } from "react"
import { RiMenuLine } from "react-icons/ri"
import { useDispatch } from "react-redux"

import { toggleSidebar } from "@/store/slices/sideBarSlice"

import Button from "../Button"
import Logo from "../Logo"
import { Profile } from "../Profile"

const TopBar: FC = () => {
  const dispatch = useDispatch()

  return (
    <div className="flex w-full h-16 md:h-20 items-center px-4 md:px-6 py-2 gap-4 shadow-md bg-kudwa-brown-100">
      <Button
        size="md"
        icon={RiMenuLine}
        onClick={() => dispatch(toggleSidebar())}
        className="border-kudwa-brown-200 mr-4 visible md:hidden!"
      />
      <Logo />
      <div className="ml-auto pl-8">
        <Profile />
      </div>
    </div>
  )
}

export default TopBar
