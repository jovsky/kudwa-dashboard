import { redirect } from "next/navigation"
import { usePathname } from "next/navigation"
import { FC, useCallback } from "react"
import { RiMenuLine } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"

import pageDefs from "@/app/pageDefs"
import { RootState } from "@/store"
import { toggleSidebar } from "@/store/slices/sideBarSlice"

import Button from "../Button"

const transition = "transition-all duration-300 ease-in-out"

const SideBar: FC = () => {
  const isOpen = useSelector((state: RootState) => state.sideBar.isOpen)
  const dispatch = useDispatch()

  const currentRoute = usePathname()

  const changeRoute = useCallback(
    (route: string) => {
      if (route !== currentRoute) {
        redirect(route)
      }
    },
    [currentRoute],
  )

  return (
    <div
      className={`flex flex-col p-4 shadow-soft h-full bg-foreground items-center ${transition} ${isOpen ? "w-52" : "w-[70px]"}`}
    >
      <div className="flex w-full justify-between items-center mb-10">
        <div
          className={`flex items-center h-10 text-lg font-semibold text-kudwa-dark ${transition} ${isOpen ? "opacity-100 max-w-full" : "opacity-0 max-w-0 pointer-events-none"}`}
        >
          Menu
        </div>
        <Button size="md" icon={RiMenuLine} onClick={() => dispatch(toggleSidebar())} />
      </div>
      <div className={`flex flex-col gap-3 items-start w-full justify-center`}>
        {Object.values(pageDefs).map((page) => (
          <Button
            key={page.route}
            icon={page.icon}
            text={
              <span
                className={`${transition} ${isOpen ? "opacity-100 max-w-[160px] ml-2" : "opacity-0 max-w-0 ml-0"}`}
                style={{
                  transitionProperty: "opacity, max-width, margin",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {isOpen ? page.name : ""}
              </span>
            }
            size={"md"}
            variant={!page.route.includes(currentRoute) ? "primary" : "secondary"}
            className={`border-transparent! ${isOpen ? "w-full gap-2" : "w-fit gap-0"}`}
            onClick={changeRoute.bind(null, page.route)}
          />
        ))}
      </div>
    </div>
  )
}

export default SideBar
