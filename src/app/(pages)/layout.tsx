"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

import CustomErrorBoundary from "@/components/CustomErrorBoundary"
import Navigation from "@/components/Navigation"

const queryClient = new QueryClient()

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <CustomErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Navigation>
          <div className="container flex flex-col mx-auto p-4 h-screen overflow-hidden">{children}</div>
        </Navigation>
      </QueryClientProvider>
    </CustomErrorBoundary>
  )
}
