import Collapse from "@mui/material/Collapse"
import { FC, PropsWithChildren } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi2"
import { IconType } from "react-icons/lib"

import useDisclosure from "@/hooks/useDisclosure"

interface CollapseProps extends PropsWithChildren {
  togglerText: string
  togglerClass?: string
  togglerIcon?: IconType
  complementaryText?: string
  collapseProps?: React.HTMLProps<HTMLDivElement>
  disclosure?: {
    isOpen: boolean
    toggle: () => void
  }
  variant?: "blue" | "gray" | "bg-gray"
}

const Collapsible: FC<CollapseProps> = ({
  children,
  togglerText = "",
  togglerClass = "",
  togglerIcon: Icon,
  complementaryText = "",
  collapseProps,
  disclosure,
  variant = "gray",
}) => {
  const innerDisclosure = useDisclosure(`collapse:${togglerText}`)
  const { isOpen, toggle } = disclosure ?? innerDisclosure

  const variantClass =
    variant === "blue" ? "collapsible-blue" : variant === "bg-gray" ? "collapsible-bg-gray" : "collapsible-gray"

  return (
    <div className={`flex flex-col h-fit w-full rounded-lg bg-kudwa-light ${variantClass}`} {...collapseProps}>
      <button
        onClick={toggle}
        className={`collapsible-toggler flex justify-start items-center
                  text-center h-8 lg:h-10 w-full px-6 bg-gray-200
                  hover:bg-gray-300 rounded-t-lg
                  gap-4 text-base cursor-pointer ${togglerClass}
                  ${isOpen ? "rounded-b-none" : "rounded-b-lg"}
                  `}
      >
        <span>{isOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
        {Icon && <span className="text-lg md:text-2xl mr-2">{<Icon />}</span>}
        <span className="font-semibold">{togglerText}</span>
        {complementaryText && <span className="text-kudwa-brown-700 italic transform-none">{complementaryText}</span>}
      </button>
      <Collapse
        in={isOpen}
        timeout={{ enter: 600, exit: 600 }}
        unmountOnExit={true}
        easing={{ enter: "ease-in", exit: "ease-out" }}
      >
        <div className={`p-4 lg:p-6 relative w-full h-fit`} data-collapse-content>
          {children}
        </div>
      </Collapse>
    </div>
  )
}

export default Collapsible
