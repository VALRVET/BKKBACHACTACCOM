"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, SlidersHorizontal, Star, X } from "lucide-react"
import { ExperienceCard } from "@/components/experience-card"
import { experiences } from "@/lib/data/experiences"

const categories = [
  { id: "all", name: "All Categories", count: 24 },
  { id: "nightlife", name: "Nightlife", count: 8 },
  { id: "water", name: "Water Activities", count: 6 },
  { id: "dining", name: "Dining", count: 5 },
  { id: "adventure", name: "Adventure", count: 5 },
]

const sortOptions = [
  { value: "relevance", label: "Most Relevant" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest First" },
]

const locations = ["All Locations", "Sukhumvit", "Silom", "Khao San Road", "Thonglor", "Asoke"]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [sortBy, setSortBy] = useState("relevance")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [ratingFilter, setRatingFilter] = useState(0)
  const [durationFilters, setDurationFilters] = useState<string[]>([])
  const [groupSizeFilters, setGroupSizeFilters] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [filteredExperiences, setFilteredExperiences] = useState(experiences)
  const [isLoading, setIsLoading] = useState(false)

  const durationOptions = [
    { id: "1-2", label: "1-2 hours" },
    { id: "3-4", label: "3-4 hours" },
    { id: "5-8", label: "5-8 hours" },
    { id: "full-day", label: "Full day" },
  ]

  const groupSizeOptions = [
    { id: "2-4", label: "2-4 people" },
    { id: "5-8", label: "5-8 people" },
    { id: "9-12", label: "9-12 people" },
    { id: "13+", label: "13+ people" },
  ]

  useEffect(() => {
    filterExperiences()
  }, [
    searchQuery,
    selectedCategory,
    selectedLocation,
    sortBy,
    priceRange,
    ratingFilter,
    durationFilters,
    groupSizeFilters,
  ])

  const filterExperiences = async () => {
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    let filtered = [...experiences]

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (exp) =>
          exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((exp) => exp.category === selectedCategory)
    }

    // Filter by price range
    filtered = filtered.filter((exp) => exp.price >= priceRange[0] && exp.price <= priceRange[1])

    // Filter by rating
    if (ratingFilter > 0) {
      filtered = filtered.filter((exp) => exp.rating >= ratingFilter)
    }

    // Sort experiences
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "popular":
        filtered.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      case "newest":
        filtered.sort((a, b) => (b.isNewExperience ? 1 : 0) - (a.isNewExperience ? 1 : 0))
        break
      default:
        // Relevance - keep original order or implement relevance scoring
        break
    }

    setFilteredExperiences(filtered)
    setIsLoading(false)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedLocation("All Locations")
    setSortBy("relevance")
    setPriceRange([0, 1000])
    setRatingFilter(0)
    setDurationFilters([])
    setGroupSizeFilters([])
  }

  const activeFiltersCount = [
    searchQuery ? 1 : 0,
    selectedCategory !== "all" ? 1 : 0,
    selectedLocation !== "All Locations" ? 1 : 0,
    priceRange[0] > 0 || priceRange[1] < 1000 ? 1 : 0,
    ratingFilter > 0 ? 1 : 0,
    durationFilters.length,
    groupSizeFilters.length,
  ].reduce((sum, count) => sum + count, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search experiences, activities, venues..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Quick Filters */}
            <div className="flex gap-2 lg:gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                className="h-12 px-4 lg:hidden bg-transparent"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge className="ml-2 bg-blue-600 text-white text-xs">{activeFiltersCount}</Badge>
                )}
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {searchQuery && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Search: "{searchQuery}"
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {categories.find((c) => c.id === selectedCategory)?.name}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("all")} />
                </Badge>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-blue-600 hover:text-blue-700">
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-80 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                {activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Clear all
                  </Button>
                )}
              </div>

              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={10} className="mb-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}+</span>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Minimum Rating</h4>
                  <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                      <label key={rating} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          value={rating}
                          checked={ratingFilter === rating}
                          onChange={(e) => setRatingFilter(Number(e.target.value))}
                          className="mr-2"
                        />
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">& up</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Duration</h4>
                  <div className="space-y-2">
                    {durationOptions.map((option) => (
                      <label key={option.id} className="flex items-center cursor-pointer">
                        <Checkbox
                          checked={durationFilters.includes(option.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setDurationFilters([...durationFilters, option.id])
                            } else {
                              setDurationFilters(durationFilters.filter((d) => d !== option.id))
                            }
                          }}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Group Size */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Group Size</h4>
                  <div className="space-y-2">
                    {groupSizeOptions.map((option) => (
                      <label key={option.id} className="flex items-center cursor-pointer">
                        <Checkbox
                          checked={groupSizeFilters.includes(option.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setGroupSizeFilters([...groupSizeFilters, option.id])
                            } else {
                              setGroupSizeFilters(groupSizeFilters.filter((g) => g !== option.id))
                            }
                          }}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Location</h4>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {searchQuery ? `Search results for "${searchQuery}"` : "All Experiences"}
                </h1>
                <p className="text-gray-600">
                  {isLoading
                    ? "Searching..."
                    : `${filteredExperiences.length} experience${filteredExperiences.length !== 1 ? "s" : ""} found`}
                </p>
              </div>
            </div>

            {/* Results */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-48 bg-gray-200 animate-pulse" />
                    <CardContent className="p-4">
                      <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mb-4" />
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : filteredExperiences.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredExperiences.map((experience) => (
                  <ExperienceCard key={experience.id} {...experience} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No experiences found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all experiences.</p>
                <Button onClick={clearFilters} className="bg-blue-600 hover:bg-blue-700">
                  Clear filters and browse all
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredExperiences.length > 0 && filteredExperiences.length >= 12 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="bg-white hover:bg-gray-50">
                  Load more experiences
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
