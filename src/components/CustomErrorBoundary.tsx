import React from "react"

class CustomErrorBoundary extends React.Component<
  { children: React.ReactNode; onRetry?: () => void },
  { pageName: string; hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; onRetry?: () => void }) {
    super(props)
    this.state = { hasError: false, pageName: "" }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`${this.state.pageName} Error:`, error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center bg-red-50 p-6 rounded-lg border border-red-200">
            <h2 className="text-xl font-semibold text-red-600 mb-2">Failed to Load {this.state.pageName}</h2>
            <p className="text-red-500 mb-4">{this.state.error?.message || "An unexpected error occurred"}</p>
            {this.props.onRetry && (
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: undefined })
                  this.props.onRetry?.()
                }}
                className="px-4 py-2 bg-kudwa-brown text-white rounded hover:bg-kudwa-brown/80"
              >
                Try Again
              </button>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default CustomErrorBoundary
