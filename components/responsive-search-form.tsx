"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, MapPin, Users } from "lucide-react"

export function ResponsiveSearchForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [groupSize, setGroupSize] = useState("")

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const params = new URLSearchParams()
      if (searchQuery) params.set("q", searchQuery)
      if (selectedCategory) params.set("category", selectedCategory)
      if (selectedDate) params.set("date", selectedDate)
      if (groupSize) params.set("size", groupSize)

      await new Promise((resolve) => setTimeout(resolve, 500))
      router.push(`/experiences?${params.toString()}`)
    } catch (error) {
      console.error("Search error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto shadow-xl">
      <form onSubmit={handleSearch} className="space-y-4">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search experiences..."
                className="h-12 pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Experience Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nightlife">🌙 Nightlife</SelectItem>
                <SelectItem value="water">🌊 Water Activities</SelectItem>
                <SelectItem value="dining">🍽️ Dining</SelectItem>
                <SelectItem value="adventure">🏔️ Adventure</SelectItem>
                <SelectItem value="cultural">🏛️ Cultural</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger className="h-12">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder="When?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="weekend">This Weekend</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
              </SelectContent>
            </Select>

            <Select value={groupSize} onValueChange={setGroupSize}>
              <SelectTrigger className="h-12">
                <Users className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Group Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2-4">2-4 People</SelectItem>
                <SelectItem value="5-8">5-8 People</SelectItem>
                <SelectItem value="9-12">9-12 People</SelectItem>
                <SelectItem value="13+">13+ People</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white text-base"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Searching...
              </div>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                Find Experiences
              </>
            )}
          </Button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search experiences..."
              className="h-12 pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nightlife">🌙 Nightlife</SelectItem>
                <SelectItem value="water">🌊 Water</SelectItem>
                <SelectItem value="dining">🍽️ Dining</SelectItem>
                <SelectItem value="adventure">🏔️ Adventure</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDate} onValueChange={setSelectedDate}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="When?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="weekend">Weekend</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select value={groupSize} onValueChange={setGroupSize}>
            <SelectTrigger className="h-12">
              <Users className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Group Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2-4">2-4 People</SelectItem>
              <SelectItem value="5-8">5-8 People</SelectItem>
              <SelectItem value="9-12">9-12 People</SelectItem>
              <SelectItem value="13+">13+ People</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="submit"
            size="lg"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Searching...
              </div>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                Search
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
