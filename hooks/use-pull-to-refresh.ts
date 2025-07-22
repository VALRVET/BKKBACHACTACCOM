"use client"

import { useEffect, useState, useRef, useCallback } from "react"

interface UsePullToRefreshOptions {
  onRefresh: () => Promise<void>
  threshold?: number
  disabled?: boolean
}

interface PullToRefreshState {
  isPulling: boolean
  isRefreshing: boolean
  pullDistance: number
  shouldRefresh: boolean
}

export function usePullToRefresh({
  onRefresh,
  threshold = 80,
  disabled = false,
}: UsePullToRefreshOptions): PullToRefreshState {
  const [isPulling, setIsPulling] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [pullDistance, setPullDistance] = useState(0)
  const [shouldRefresh, setShouldRefresh] = useState(false)

  const startY = useRef<number>(0)
  const currentY = useRef<number>(0)
  const isAtTop = useRef<boolean>(true)

  const checkIfAtTop = useCallback(() => {
    return window.scrollY === 0
  }, [])

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (disabled || isRefreshing) return

      isAtTop.current = checkIfAtTop()
      if (!isAtTop.current) return

      startY.current = e.touches[0].clientY
      setIsPulling(true)
    },
    [disabled, isRefreshing, checkIfAtTop],
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (disabled || isRefreshing || !isPulling || !isAtTop.current) return

      currentY.current = e.touches[0].clientY
      const distance = Math.max(0, currentY.current - startY.current)

      // Apply resistance to make pulling feel more natural
      const resistance = 0.5
      const adjustedDistance = distance * resistance

      setPullDistance(adjustedDistance)
      setShouldRefresh(adjustedDistance >= threshold)

      // Prevent default scrolling when pulling
      if (distance > 0) {
        e.preventDefault()
      }
    },
    [disabled, isRefreshing, isPulling, threshold],
  )

  const handleTouchEnd = useCallback(async () => {
    if (disabled || isRefreshing || !isPulling) return

    setIsPulling(false)

    if (shouldRefresh) {
      setIsRefreshing(true)
      try {
        await onRefresh()
      } catch (error) {
        console.error("Refresh failed:", error)
      } finally {
        setIsRefreshing(false)
        setShouldRefresh(false)
        setPullDistance(0)
      }
    } else {
      setPullDistance(0)
      setShouldRefresh(false)
    }
  }, [disabled, isRefreshing, isPulling, shouldRefresh, onRefresh])

  useEffect(() => {
    if (disabled) return

    const handleScroll = () => {
      isAtTop.current = checkIfAtTop()
    }

    document.addEventListener("touchstart", handleTouchStart, { passive: false })
    document.addEventListener("touchmove", handleTouchMove, { passive: false })
    document.addEventListener("touchend", handleTouchEnd, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [disabled, handleTouchStart, handleTouchMove, handleTouchEnd, checkIfAtTop])

  return {
    isPulling,
    isRefreshing,
    pullDistance,
    shouldRefresh,
  }
}
