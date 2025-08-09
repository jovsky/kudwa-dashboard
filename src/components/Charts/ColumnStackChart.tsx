// import { FC, useMemo } from "react"
// import { Bar, BarChart as RBarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// import { ChartInfo } from "@/types/dashboardTypes"

// interface BarChartProps {
//   titleDescription: string
//   chartData: ChartInfo
//   chartXAxis: string[]
//   keys: string[]
//   totalItems: number
//   responsiveContainerHeight?: number | string
//   getColorByKey: (key: string) => string
// }

// const BarChart: FC<BarChartProps> = ({
//   titleDescription,
//   chartData,
//   keys,
//   totalItems,
//   responsiveContainerHeight,
//   getColorByKey,
// }) => {
//   const maxYValue = useMemo(() => {
//     let maxValue = 80
//     chartData.values.forEach((value) => {
//       const itemTotal = Math.ceil((value as number) / 10) * 10
//       maxValue = Math.max(maxValue, itemTotal)
//     })
//     return maxValue
//   }, [chartData])

//   return (
//     <div>
//       <div className="flex items-center">
//         <h3 className="mt-2 items-center text-center">{titleDescription}</h3>
//         <p className="mt-1 mb-4">Total: {totalItems}</p>
//       </div>
//       <ResponsiveContainer width="100%" height={responsiveContainerHeight}>
//         <RBarChart data={chartData.values} margin={{ top: 30 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="timeLabel" tick={{ fontSize: 12 }} />
//           <YAxis
//             allowDecimals={false}
//             domain={[0, maxYValue]}
//             tick={{ fontSize: 12 }}
//             label={{
//               value: "Pedidos",
//               position: "top",
//               offset: 15,
//               style: { textAnchor: "start", fontSize: 12 },
//             }}
//           />
//           <Tooltip />
//           {keys.map((key, i) => {
//             const index = keys.length - 1

//             return (
//               <Bar
//                 key={key}
//                 dataKey={key}
//                 fill={getColorByKey(key)}
//                 stackId="a"
//                 label={({ x, y, width, value }: { x: number; y: number; width: number; value: number }) =>
//                   i === index ? (
//                     <text x={x + width / 2} y={y - 4} fill="#111" fontSize={14} textAnchor="middle" fontWeight="bold">
//                       {value}
//                     </text>
//                   ) : (
//                     <></>
//                   )
//                 }
//                 isAnimationActive={false}
//               />
//             )
//           })}
//           <Legend wrapperStyle={{ fontSize: "12px" }} />
//         </RBarChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }

// export default BarChart
