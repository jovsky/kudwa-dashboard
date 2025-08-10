import { useSelector } from "react-redux"

import { RootState } from "@/store"
import { TopKPI } from "@/types/dashboardTypes"
import formatCurrency from "@/utils/formatCurrency"
import formatNumber from "@/utils/formatNumber"
import formatPercent from "@/utils/formatPercent"

const TopKPICard: React.FC<{ kpi: TopKPI }> = ({ kpi }) => {
  const { period } = useSelector((state: RootState) => state.dashboard)

  const key = period === "monthly" ? "MoM" : period === "quarterly" ? "QoQ" : "YoY"

  let fnFormat = (v: number) => `${formatCurrency(v, 2)}`
  switch (kpi.name) {
    case "Burn rate":
      fnFormat = (v: number) => `${formatCurrency(v, 2)}/month`
      break
    case "Runway":
      fnFormat = (v: number) => `${formatNumber(v, 2)}`
      break
    default:
      break
  }

  return (
    <div className="bg-white rounded-lg shadow-soft p-6 flex flex-col gap-2 border border-kudwa-brown-100 hover:scale-103 transition-transform duration-200 ease-in-out">
      <span className="text-sm text-kudwa-brown-700 font-semibold">{kpi.name}</span>
      <span className="text-2xl font-bold text-kudwa-blue">{fnFormat(kpi.value)}</span>
      {kpi.date && <span className="text-xs text-gray-500">{kpi.date}</span>}
      {typeof kpi.mOm === "number" && (
        <span
          className={`text-xs font-semibold ${kpi.mOm > 0 ? "text-green-600" : kpi.mOm < 0 ? "text-red-600" : "text-gray-600"}`}
        >
          {key}: {formatPercent(kpi.mOm)}
        </span>
      )}
      {kpi.type && <span className="text-xs text-gray-400 italic">{kpi.type}</span>}
    </div>
  )
}
export default TopKPICard
