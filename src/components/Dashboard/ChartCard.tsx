import { IconType } from "react-icons"

interface ChartCardProps {
  name: string
  metricsCount: number
  Icon: IconType
  color: "blue" | "yellow"
  onClick: () => void
}

const paletteOptions = {
  yellow: {
    bgColor: "bg-kudwa-yellow-100",
    borderColor: "border-kudwa-yellow",
    iconColor: "text-kudwa-yellow-600",
  },
  blue: {
    bgColor: "bg-kudwa-blue-100",
    borderColor: "border-kudwa-blue-400",
    iconColor: "text-kudwa-blue-600",
  },
} as const

const ChartCard: React.FC<ChartCardProps> = ({ name, metricsCount, Icon, color, onClick }) => {
  const { bgColor, borderColor, iconColor } = paletteOptions[color]

  return (
    <button
      className={`flex ${bgColor} shadow-soft-left px-4 py-2 rounded-lg border-l-2 border-b-2 ${borderColor} items-center select-none 
      hover:scale-103 transition-transform duration-200 ease-in-out cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex flex-col">
        <h3 className="font-semibold mb-2">{name}</h3>
        <p>{metricsCount} metrics</p>
      </div>
      <div className="flex ml-auto">
        <Icon size={30} className={iconColor} />
      </div>
    </button>
  )
}

export default ChartCard
