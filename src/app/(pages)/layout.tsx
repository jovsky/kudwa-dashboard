"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { Provider } from "react-redux"

import CustomErrorBoundary from "@/components/CustomErrorBoundary"
import Navigation from "@/components/Navigation"
import { store } from "@/store"

const queryClient = new QueryClient()

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <CustomErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Navigation>
            <div className="flex flex-col mx-auto h-full w-full overflow-hidden px-4 md:px-10 pt-6">{children}</div>
          </Navigation>
        </QueryClientProvider>
      </CustomErrorBoundary>
    </Provider>
  )
}
