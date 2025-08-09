"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

import CustomErrorBoundary from "@/components/CustomErrorBoundary"

const queryClient = new QueryClient()

export default function Provedor({ children }: { children: React.ReactNode }) {
  return (
    <CustomErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <div className="container flex flex-col mx-auto p-4 h-screen overflow-hidden">{children}</div>
      </QueryClientProvider>
    </CustomErrorBoundary>
  )
}
