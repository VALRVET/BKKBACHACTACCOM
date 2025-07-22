"use client"

import type React from "react"

import { usePullToRefresh } from "@/hooks/use-pull-to-refresh"
import { RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobilePullRefreshProps {
  onRefresh: () => Promise<void>
  children: React.ReactNode
  disabled?: boolean
}

export function MobilePullRefresh({ onRefresh, children, disabled = false }: MobilePullRefreshProps) {
  const { isPulling, isRefreshing, pullDistance, shouldRefresh } = usePullToRefresh({
    onRefresh,
    disabled,
  })

  return (
    <div className="relative">
      {/* Pull to refresh indicator */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-40 bg-blue-50 border-b border-blue-200 transition-all duration-200 overflow-hidden",
          isPulling || isRefreshing ? "opacity-100" : "opacity-0",
        )}
        style={{
          height: Math.min(pullDistance, 80),
          transform: `translateY(${isPulling || isRefreshing ? 0 : -100}px)`,
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="flex items-center space-x-2 text-blue-600">
            <RefreshCw
              className={cn(
                "h-5 w-5 transition-transform duration-200",
                isRefreshing && "animate-spin",
                shouldRefresh && !isRefreshing && "rotate-180",
              )}
            />
            <span className="text-sm font-medium">
              {isRefreshing ? "Refreshing..." : shouldRefresh ? "Release to refresh" : "Pull to refresh"}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          transform: `translateY(${isPulling || isRefreshing ? Math.min(pullDistance, 80) : 0}px)`,
          transition: isPulling ? "none" : "transform 0.2s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  )
}
