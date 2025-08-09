import { memo } from "react"

const LoadingScreen: React.FC = () => (
  <div className="flex h-full text-center justify-center items-center flex-col">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kudwa-brown mx-auto mb-4"></div>
    <p className="text-lg text-kudwa-dark">Loading data...</p>
  </div>
)

export default memo(LoadingScreen, () => true)
