"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Search, Clock, TrendingUp } from "lucide-react"

interface MobileSearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const recentSearches = ["VIP Nightclub Package", "Private Boat Party", "Thai Boxing Experience", "Rooftop Bar Tour"]

const trendingSearches = [
  "Bachelor Party Packages",
  "Bangkok Nightlife",
  "Water Activities",
  "Group Dining",
  "Adventure Tours",
]

export function MobileSearchOverlay({ isOpen, onClose }: MobileSearchOverlayProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSearch = async (query: string) => {
    if (!query.trim()) return

    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 300))
      router.push(`/experiences?q=${encodeURIComponent(query)}`)
      onClose()
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch(searchQuery)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-200 safe-area-pt">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Search experiences..."
              className="pl-10 pr-4 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </form>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose} className="ml-2 p-2" aria-label="Close search">
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {searchQuery ? (
          <div className="space-y-4">
            <Button
              onClick={() => handleSearch(searchQuery)}
              className="w-full justify-start text-left h-auto p-4 bg-blue-50 hover:bg-blue-100 text-blue-700"
              disabled={isLoading}
            >
              <Search className="h-4 w-4 mr-3 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium">Search for "{searchQuery}"</div>
                <div className="text-sm opacity-75">Find experiences matching your search</div>
              </div>
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Recent Searches
                </h3>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900">{search}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Trending Searches */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Trending
              </h3>
              <div className="space-y-2">
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(search)}
                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{search}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Categories</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Nightlife", emoji: "🌙", category: "nightlife" },
                  { name: "Water Activities", emoji: "🌊", category: "water" },
                  { name: "Dining", emoji: "🍽️", category: "dining" },
                  { name: "Adventure", emoji: "🏔️", category: "adventure" },
                ].map((item) => (
                  <button
                    key={item.category}
                    onClick={() => router.push(`/experiences?category=${item.category}`)}
                    className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-center"
                  >
                    <div className="text-2xl mb-2">{item.emoji}</div>
                    <div className="font-medium text-gray-900">{item.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
