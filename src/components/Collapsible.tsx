import { FC, PropsWithChildren } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi2"
import { IconType } from "react-icons/lib"

import useDisclosure from "@/hooks/useDisclosure"

interface CollapseProps extends PropsWithChildren {
  togglerText: string
  togglerClass?: string
  togglerIcon?: IconType
  complementaryText?: string
  collapseProps?: React.HTMLAttributes<HTMLDivElement>
  disclosure?: {
    isOpen: boolean
    toggle: () => void
  }
}

const Collapsible: FC<CollapseProps> = ({
  children,
  togglerText,
  togglerClass,
  togglerIcon: Icon,
  complementaryText,
  collapseProps,
  disclosure,
}) => {
  const innerDisclosure = useDisclosure(`collapse:${togglerText}`)
  const { isOpen, toggle } = disclosure ?? innerDisclosure

  return (
    <div className="flex flex-col h-fit w-full bg-kudwa-light shadow-soft-left rounded-lg ">
      <button
        onClick={toggle}
        className={`flex justify-start items-center
                  text-center h-10 w-full px-6 bg-gray-200
                  hover:bg-gray-300 rounded-t-lg
                  gap-4 text-xs md:text-base cursor-pointer ${togglerClass}
                  ${isOpen ? "rounded-b-none" : "rounded-b-lg"}
                  `}
      >
        {Icon && <span className="text-lg md:text-2xl mr-2">{<Icon />}</span>}
        <span className="font-semibold">{togglerText}</span>
        {complementaryText && <span className="text-kudwa-brown-700 italic transform-none">{complementaryText}</span>}
        <span className="ml-auto">{isOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
      </button>
      {isOpen && (
        <div
          className={`flex
            p-6 pr-0 relative w-full h-fit
            ${isOpen ? "h-fit opacity-100" : "max-h-0 opacity-0"}`}
          style={{ overflow: isOpen ? "visible" : "hidden" }}
          {...collapseProps}
          data-collapse-content
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default Collapsible
