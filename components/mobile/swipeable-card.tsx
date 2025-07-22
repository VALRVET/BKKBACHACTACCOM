"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Share2, Archive } from "lucide-react"
import { useMobileGestures } from "@/hooks/use-mobile-gestures"
import { cn } from "@/lib/utils"

interface SwipeAction {
  icon: React.ReactNode
  label: string
  color: string
  action: () => void
}

interface SwipeableCardProps {
  children: React.ReactNode
  leftActions?: SwipeAction[]
  rightActions?: SwipeAction[]
  onSwipe?: (direction: "left" | "right") => void
  className?: string
  disabled?: boolean
}

export function SwipeableCard({
  children,
  leftActions = [],
  rightActions = [],
  onSwipe,
  className,
  disabled = false,
}: SwipeableCardProps) {
  const [swipeOffset, setSwipeOffset] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showActions, setShowActions] = useState<"left" | "right" | null>(null)

  const { elementRef } = useMobileGestures({
    onSwipe: (gesture) => {
      if (disabled) return

      const { direction, distance } = gesture

      if (direction === "left" && rightActions.length > 0) {
        setShowActions("right")
        setSwipeOffset(-Math.min(distance, 120))
        onSwipe?.("left")
      } else if (direction === "right" && leftActions.length > 0) {
        setShowActions("left")
        setSwipeOffset(Math.min(distance, 120))
        onSwipe?.("right")
      }

      // Auto-reset after a delay
      setTimeout(() => {
        resetPosition()
      }, 3000)
    },
    swipeThreshold: 30,
  })

  const resetPosition = () => {
    setIsAnimating(true)
    setSwipeOffset(0)
    setShowActions(null)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const executeAction = (action: SwipeAction) => {
    action.action()
    resetPosition()
  }

  return (
    <div className="relative overflow-hidden" ref={elementRef}>
      {/* Left Actions */}
      {leftActions.length > 0 && (
        <div
          className={cn(
            "absolute left-0 top-0 bottom-0 flex items-center transition-all duration-300",
            showActions === "left" ? "opacity-100" : "opacity-0",
          )}
          style={{ transform: `translateX(${Math.max(0, swipeOffset - 120)}px)` }}
        >
          {leftActions.map((action, index) => (
            <Button
              key={index}
              size="sm"
              className={cn("mx-1 h-full rounded-none", action.color)}
              onClick={() => executeAction(action)}
            >
              <div className="flex flex-col items-center">
                {action.icon}
                <span className="text-xs mt-1">{action.label}</span>
              </div>
            </Button>
          ))}
        </div>
      )}

      {/* Right Actions */}
      {rightActions.length > 0 && (
        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 flex items-center transition-all duration-300",
            showActions === "right" ? "opacity-100" : "opacity-0",
          )}
          style={{ transform: `translateX(${Math.min(0, swipeOffset + 120)}px)` }}
        >
          {rightActions.map((action, index) => (
            <Button
              key={index}
              size="sm"
              className={cn("mx-1 h-full rounded-none", action.color)}
              onClick={() => executeAction(action)}
            >
              <div className="flex flex-col items-center">
                {action.icon}
                <span className="text-xs mt-1">{action.label}</span>
              </div>
            </Button>
          ))}
        </div>
      )}

      {/* Main Card */}
      <Card
        className={cn(
          "transition-transform duration-300 relative z-10",
          isAnimating && "transition-transform",
          className,
        )}
        style={{
          transform: `translateX(${swipeOffset}px)`,
        }}
      >
        {children}
      </Card>

      {/* Reset overlay */}
      {showActions && (
        <div className="absolute inset-0 z-20 bg-transparent" onClick={resetPosition} onTouchStart={resetPosition} />
      )}
    </div>
  )
}

// Example usage component
export function SwipeableExperienceCard({ experience }: { experience: any }) {
  const leftActions: SwipeAction[] = [
    {
      icon: <Heart className="h-4 w-4" />,
      label: "Like",
      color: "bg-red-500 hover:bg-red-600 text-white",
      action: () => console.log("Liked", experience.id),
    },
  ]

  const rightActions: SwipeAction[] = [
    {
      icon: <Share2 className="h-4 w-4" />,
      label: "Share",
      color: "bg-blue-500 hover:bg-blue-600 text-white",
      action: () => console.log("Shared", experience.id),
    },
    {
      icon: <Archive className="h-4 w-4" />,
      label: "Save",
      color: "bg-green-500 hover:bg-green-600 text-white",
      action: () => console.log("Saved", experience.id),
    },
  ]

  return (
    <SwipeableCard
      leftActions={leftActions}
      rightActions={rightActions}
      onSwipe={(direction) => console.log("Swiped", direction)}
    >
      <div className="p-4">
        <h3 className="font-semibold">{experience.title}</h3>
        <p className="text-gray-600">{experience.description}</p>
        <div className="mt-2 text-lg font-bold">${experience.price}</div>
      </div>
    </SwipeableCard>
  )
}
