"use client"

import { useEffect, useRef, useState } from "react"

interface TouchPosition {
  x: number
  y: number
}

interface SwipeGesture {
  direction: "left" | "right" | "up" | "down" | null
  distance: number
  velocity: number
}

interface UseMobileGesturesOptions {
  onSwipe?: (gesture: SwipeGesture) => void
  onTap?: (position: TouchPosition) => void
  onLongPress?: (position: TouchPosition) => void
  swipeThreshold?: number
  longPressDelay?: number
}

export function useMobileGestures({
  onSwipe,
  onTap,
  onLongPress,
  swipeThreshold = 50,
  longPressDelay = 500,
}: UseMobileGesturesOptions = {}) {
  const elementRef = useRef<HTMLElement>(null)
  const [touchStart, setTouchStart] = useState<TouchPosition | null>(null)
  const [touchEnd, setTouchEnd] = useState<TouchPosition | null>(null)
  const [isLongPress, setIsLongPress] = useState(false)
  const longPressTimer = useRef<NodeJS.Timeout>()

  const calculateSwipe = (start: TouchPosition, end: TouchPosition): SwipeGesture => {
    const deltaX = end.x - start.x
    const deltaY = end.y - start.y
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    const velocity = distance / 100 // Simplified velocity calculation

    let direction: SwipeGesture["direction"] = null

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > swipeThreshold) {
        direction = deltaX > 0 ? "right" : "left"
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > swipeThreshold) {
        direction = deltaY > 0 ? "down" : "up"
      }
    }

    return { direction, distance, velocity }
  }

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      const position = { x: touch.clientX, y: touch.clientY }
      setTouchStart(position)
      setTouchEnd(null)
      setIsLongPress(false)

      // Start long press timer
      if (onLongPress) {
        longPressTimer.current = setTimeout(() => {
          setIsLongPress(true)
          onLongPress(position)
        }, longPressDelay)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      setTouchEnd({ x: touch.clientX, y: touch.clientY })

      // Cancel long press if user moves finger
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
      }

      if (!touchStart) return

      const touch = e.changedTouches[0]
      const endPosition = { x: touch.clientX, y: touch.clientY }

      if (isLongPress) {
        // Long press already handled
        return
      }

      if (touchEnd) {
        // Swipe gesture
        const swipe = calculateSwipe(touchStart, endPosition)
        if (swipe.direction && onSwipe) {
          onSwipe(swipe)
        }
      } else {
        // Tap gesture
        if (onTap) {
          onTap(endPosition)
        }
      }

      setTouchStart(null)
      setTouchEnd(null)
    }

    element.addEventListener("touchstart", handleTouchStart, { passive: true })
    element.addEventListener("touchmove", handleTouchMove, { passive: true })
    element.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      element.removeEventListener("touchstart", handleTouchStart)
      element.removeEventListener("touchmove", handleTouchMove)
      element.removeEventListener("touchend", handleTouchEnd)
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
      }
    }
  }, [touchStart, touchEnd, onSwipe, onTap, onLongPress, swipeThreshold, longPressDelay, isLongPress])

  return {
    elementRef,
    isGesturing: touchStart !== null,
    currentSwipe: touchStart && touchEnd ? calculateSwipe(touchStart, touchEnd) : null,
  }
}
