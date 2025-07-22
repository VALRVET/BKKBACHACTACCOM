"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, Star, MapPin, Clock, Users } from "lucide-react"
import { experiences } from "@/lib/data/experiences"

const categories = [
  { id: "all", name: "All Experiences", count: 24 },
  { id: "nightlife", name: "Nightlife", count: 8 },
  { id: "water", name: "Water Activities", count: 6 },
  { id: "dining", name: "Dining", count: 5 },
  { id: "adventure", name: "Adventure", count: 5 },
]

export default function ExperiencesPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [filteredExperiences, setFilteredExperiences] = useState(experiences)

  useEffect(() => {
    const category = searchParams.get("category") || "all"
    setSelectedCategory(category)
  }, [searchParams])

  useEffect(() => {
    let filtered = experiences

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((exp) => exp.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (exp) =>
          exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exp.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase())),
      )
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
      default:
        filtered.sort((a, b) => b.reviewCount - a.reviewCount)
        break
    }

    setFilteredExperiences(filtered)
  }, [selectedCategory, searchQuery, sortBy])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Discover Amazing Experiences</h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            From wild nightlife to cultural adventures, find the perfect activities for your Bangkok bachelor party.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search experiences, activities, venues..."
                className="pl-12 pr-4 h-14 text-base bg-white border-0 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedCategory === "all"
                    ? "All Experiences"
                    : categories.find((c) => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-gray-600">
                  {filteredExperiences.length} experience{filteredExperiences.length !== 1 ? "s" : ""} found
                </p>
              </div>

              {/* Mobile Filter Button */}
              <Button variant="outline" className="lg:hidden mt-4 sm:mt-0 bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Experience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredExperiences.map((experience) => (
                <Link key={experience.id} href={`/experiences/${experience.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group h-full">
                    <div className="relative h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600" />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                      {experience.isPopular && <Badge className="absolute top-3 left-3 bg-orange-500">Popular</Badge>}
                      <div className="absolute bottom-3 left-3 flex items-center space-x-2 text-white text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {experience.groupSize}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-900 line-clamp-1">{experience.title}</h4>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{experience.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {experience.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {experience.features.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{experience.features.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(Math.floor(experience.rating))].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            {experience.rating % 1 !== 0 && (
                              <Star className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />
                            )}
                          </div>
                          <span className="font-semibold">{experience.rating}</span>
                          <span className="text-gray-500 text-sm">({experience.reviewCount})</span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">${experience.price}</div>
                          <div className="text-gray-500 text-sm">/person</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredExperiences.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No experiences found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or browse all experiences.</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
