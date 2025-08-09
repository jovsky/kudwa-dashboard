import { FC, PropsWithChildren, useEffect, useState } from "react"
import { HiChevronDown, HiChevronUp } from "react-icons/hi2"
import { IconType } from "react-icons/lib"

interface CollapseProps extends PropsWithChildren {
  togglerText: string
  togglerClass?: string
  togglerIcon?: IconType
  complementaryText?: string
  collapseProps?: React.HTMLAttributes<HTMLDivElement>
}

const Collapsible: FC<CollapseProps> = ({
  children,
  togglerText,
  togglerClass,
  togglerIcon: Icon,
  complementaryText,
  collapseProps,
}) => {
  const [isOpen, setIsOpen] = useState(
    typeof window !== "undefined" ? localStorage.getItem(`collapse:${togglerText}`) === "true" : false,
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(`collapse:${togglerText}`, String(isOpen))
    }
  }, [isOpen, togglerText])

  return (
    <div className="bg-kudwa-light shadow-soft-left rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex justify-start items-center
                  text-center h-10 w-full px-6 bg-gray-200
                  hover:bg-gray-300 transition-colors duration-200 ease-in-out
                  gap-4 text-xs md:text-base cursor-pointer ${togglerClass}`}
      >
        {Icon && <span className="text-lg md:text-2xl mr-2">{<Icon />}</span>}
        <span className="font-semibold">{togglerText}</span>
        {complementaryText && <span className="text-kudwa-brown-700 italic transform-none">{complementaryText}</span>}
        <span className="ml-auto">{isOpen ? <HiChevronUp /> : <HiChevronDown />}</span>
      </button>
      <div
        className={`transition-all duration-300 ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"} flex flex-col`}
        style={{ overflow: isOpen ? "visible" : "hidden" }}
        {...collapseProps}
        data-collapse-content
      >
        {isOpen && (
          <div className="p-3 md:p-6 overflow-auto relative" data-collapse-content-box>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default Collapsible
