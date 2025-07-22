"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Star,
  Search,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
  Users,
  Shield,
  Award,
  Phone,
  Mail,
  MessageCircle,
  Check,
} from "lucide-react"
import { ExperienceCard } from "@/components/experience-card"
import { MobileBottomNav } from "@/components/mobile/mobile-bottom-nav"
import { MobileFAB } from "@/components/mobile/mobile-fab"
import { MobilePullRefresh } from "@/components/mobile/mobile-pull-refresh"
import { useToast } from "@/components/mobile/mobile-toast"

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Bangkok Bach",
  description: "Bangkok's premier bachelor party planning service",
  url: "https://bangkokbach.com",
  telephone: "+66-2-123-4567",
  email: "info@bangkokbach.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "TH",
    addressLocality: "Bangkok",
    addressRegion: "Bangkok",
  },
  sameAs: ["https://facebook.com/bangkokbach", "https://instagram.com/bangkokbach", "https://twitter.com/bangkokbach"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
}

export default function HomePage() {
  const router = useRouter()
  const { addToast, ToastContainer } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedDate, setSelectedDate] = useState("")

  // Handle search functionality
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const params = new URLSearchParams()
      if (searchQuery) params.set("q", searchQuery)
      if (selectedCategory) params.set("category", selectedCategory)
      if (selectedDate) params.set("date", selectedDate)

      await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate API call
      router.push(`/experiences?${params.toString()}`)
    } catch (error) {
      addToast({
        type: "error",
        title: "Search Error",
        message: "Unable to perform search. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Handle newsletter signup
  const handleNewsletterSignup = async (email: string) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      addToast({
        type: "success",
        title: "Subscribed!",
        message: "You've been added to our newsletter.",
      })
    } catch (error) {
      addToast({
        type: "error",
        title: "Subscription Failed",
        message: "Please try again later.",
      })
    }
  }

  // Handle refresh
  const handleRefresh = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    addToast({
      type: "success",
      title: "Refreshed",
      message: "Content has been updated",
    })
  }

  useEffect(() => {
    // Add structured data to head
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <>
      <MobilePullRefresh onRefresh={handleRefresh}>
        <div className="min-h-screen bg-white pb-16 md:pb-0">
          {/* Enhanced Hero Section */}
          <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] bg-repeat opacity-20"></div>
            </div>

            <div className="container mx-auto text-center relative z-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight px-4 md:px-0 animate-fade-in">
                Your Ultimate Bangkok <span className="text-blue-400">Bachelor Party</span>
                <br className="hidden sm:block" />
                <span className="block sm:inline"> Awaits</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-10 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 animate-fade-in-delay">
                Discover exclusive venues, thrilling activities, and personalized itineraries for an unforgettable
                celebration in the heart of Thailand.
              </p>

              {/* Enhanced Search Form */}
              <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto shadow-xl animate-slide-up">
                <form onSubmit={handleSearch} className="space-y-4">
                  {/* Desktop/Tablet Layout */}
                  <div className="hidden md:block">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
                          <SelectValue placeholder="Select date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="tomorrow">Tomorrow</SelectItem>
                          <SelectItem value="weekend">This Weekend</SelectItem>
                          <SelectItem value="next-week">Next Week</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="relative">
                        <Input
                          placeholder="Search experiences..."
                          className="h-12 pr-12"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button
                          type="submit"
                          size="sm"
                          className="absolute right-1 top-1 h-10 bg-blue-600 hover:bg-blue-700"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          ) : (
                            <Search className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {[
                        { id: "nightlife", label: "🌙 Nightlife", count: 15 },
                        { id: "water", label: "🌊 Water Activities", count: 8 },
                        { id: "dining", label: "🍽️ Dining", count: 12 },
                        { id: "accommodation", label: "🏨 Accommodations", count: 6 },
                        { id: "party", label: "🎉 Party Services", count: 10 },
                        { id: "transport", label: "🚗 Transportation", count: 5 },
                        { id: "special", label: "⭐ Special", count: 3 },
                      ].map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(category.id)
                            router.push(`/experiences?category=${category.id}`)
                          }}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          {category.label}
                          <span className="ml-1 text-xs text-gray-500">({category.count})</span>
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white text-base"
                        disabled={isLoading}
                      >
                        {isLoading ? "Searching..." : "Start Planning"}
                      </Button>
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        className="flex-1 h-12 bg-transparent text-base hover:bg-gray-50"
                        onClick={() => router.push("/experiences")}
                      >
                        Browse Experiences
                      </Button>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden space-y-4">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Experience Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nightlife">🌙 Nightlife</SelectItem>
                        <SelectItem value="water">🌊 Water Activities</SelectItem>
                        <SelectItem value="dining">🍽️ Dining</SelectItem>
                        <SelectItem value="adventure">🏔️ Adventure</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={selectedDate} onValueChange={setSelectedDate}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="tomorrow">Tomorrow</SelectItem>
                        <SelectItem value="weekend">This Weekend</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="relative">
                      <Input
                        placeholder="Search experiences..."
                        className="h-12 pr-12"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Button
                        type="submit"
                        size="sm"
                        className="absolute right-1 top-1 h-10 bg-blue-600 hover:bg-blue-700"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                          <Search className="h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "nightlife", label: "🌙 Nightlife" },
                        { id: "water", label: "🌊 Water" },
                        { id: "dining", label: "🍽️ Dining" },
                        { id: "accommodation", label: "🏨 Hotels" },
                      ].map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(category.id)
                            router.push(`/experiences?category=${category.id}`)
                          }}
                          className="flex items-center justify-center px-2 py-2 text-xs bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          {category.label}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? "Searching..." : "Start Planning"}
                      </Button>
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        className="w-full h-12 bg-transparent hover:bg-gray-50"
                        onClick={() => router.push("/experiences")}
                      >
                        Browse Experiences
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Enhanced Top Experiences - FIXED NESTED LINK ISSUE */}
          <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container mx-auto">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Top Experiences</h2>
                  <p className="text-gray-600">Handpicked experiences for unforgettable bachelor parties</p>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 sm:mt-0 bg-transparent hover:bg-white group"
                  onClick={() => router.push("/experiences")}
                >
                  View All
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Mobile: Horizontal Scroll - REMOVED NESTED LINKS */}
              <div className="md:hidden">
                <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                  {[
                    {
                      id: "vip-nightclub-package",
                      title: "VIP Nightclub Package",
                      description: "Skip the lines and enjoy bottle service at Bangkok's hottest nightclubs.",
                      price: 299,
                      rating: 4.9,
                      reviewCount: 124,
                      isPopular: true,
                      imageUrl: "/placeholder.svg?height=200&width=300&text=VIP+Nightclub",
                    },
                    {
                      id: "private-boat-party",
                      title: "Private Boat Party",
                      description: "Cruise along the Chao Phraya River with drinks, music, and stunning views.",
                      price: 349,
                      rating: 4.8,
                      reviewCount: 89,
                      isPopular: true,
                      imageUrl: "/placeholder.svg?height=200&width=300&text=Boat+Party",
                    },
                    {
                      id: "thai-boxing-experience",
                      title: "Thai Boxing Experience",
                      description: "Learn Muay Thai basics from professional fighters in authentic training.",
                      price: 129,
                      rating: 4.7,
                      reviewCount: 156,
                      isPopular: true,
                      imageUrl: "/placeholder.svg?height=200&width=300&text=Muay+Thai",
                    },
                  ].map((experience) => (
                    <div key={experience.id} className="flex-shrink-0 w-72">
                      <ExperienceCard {...experience} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid - REMOVED NESTED LINKS */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    id: "vip-nightclub-package",
                    title: "VIP Nightclub Package",
                    description: "Skip the lines and enjoy bottle service at Bangkok's hottest nightclubs.",
                    price: 299,
                    rating: 4.9,
                    reviewCount: 124,
                    isPopular: true,
                    imageUrl: "/placeholder.svg?height=200&width=300&text=VIP+Nightclub",
                  },
                  {
                    id: "private-boat-party",
                    title: "Private Boat Party",
                    description: "Cruise along the Chao Phraya River with drinks, music, and stunning views.",
                    price: 349,
                    rating: 4.8,
                    reviewCount: 89,
                    isPopular: true,
                    imageUrl: "/placeholder.svg?height=200&width=300&text=Boat+Party",
                  },
                  {
                    id: "thai-boxing-experience",
                    title: "Thai Boxing Experience",
                    description: "Learn Muay Thai basics from professional fighters in authentic training.",
                    price: 129,
                    rating: 4.7,
                    reviewCount: 156,
                    isPopular: true,
                    imageUrl: "/placeholder.svg?height=200&width=300&text=Muay+Thai",
                  },
                ].map((experience) => (
                  <ExperienceCard key={experience.id} {...experience} />
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced How It Works */}
          <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container mx-auto">
              <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">How It Works</h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Planning the ultimate bachelor party in Bangkok has never been easier.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {[
                  {
                    step: 1,
                    title: "Browse Experiences",
                    description: "Explore our curated selection of the best bachelor party experiences and venues.",
                    icon: "🔍",
                    action: "Browse Now",
                    link: "/experiences",
                  },
                  {
                    step: 2,
                    title: "Customize Your Package",
                    description: "Build your perfect itinerary by selecting activities, venues, and accommodations.",
                    icon: "🎯",
                    action: "Build Trip",
                    link: "/build-trip",
                  },
                  {
                    step: 3,
                    title: "Enjoy Your Party",
                    description: "We handle all the details so you can focus on creating unforgettable memories.",
                    icon: "🎉",
                    action: "Get Started",
                    link: "/auth/signup",
                  },
                ].map((step, index) => (
                  <div
                    key={step.step}
                    className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="relative mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold mx-auto mb-4 group-hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                        {step.step}
                      </div>
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">{step.icon}</div>
                      {index < 2 && (
                        <div className="hidden md:block absolute top-10 left-full w-full">
                          <ArrowRight className="h-6 w-6 text-blue-300 mx-auto" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm mx-auto mb-4">
                      {step.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300"
                      onClick={() => router.push(step.link)}
                    >
                      {step.action}
                    </Button>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8 lg:mt-12">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base w-full sm:w-auto group"
                  onClick={() => router.push("/packages")}
                >
                  Start Planning Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </section>

          {/* Enhanced Popular Packages */}
          <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container mx-auto">
              <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Popular Packages
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  All-inclusive bachelor party packages designed for unforgettable experiences.
                </p>
              </div>

              {/* Mobile: Vertical Stack */}
              <div className="md:hidden space-y-4">
                {[
                  {
                    id: "ultimate-weekend",
                    title: "Ultimate Weekend",
                    duration: "3 Days",
                    description:
                      "A 3-day action-packed itinerary with luxury accommodations and private transportation.",
                    features: [
                      "VIP Club Access",
                      "Luxury Accommodation",
                      "Private Transportation",
                      "Personal Concierge",
                    ],
                    price: 899,
                    originalPrice: 1199,
                    rating: 4.9,
                    reviews: 156,
                    isPopular: true,
                  },
                  {
                    id: "party-hopper",
                    title: "Party Hopper",
                    duration: "2 Days",
                    description:
                      "Experience Bangkok's best nightlife with club hopping, rooftop bars and exclusive venues.",
                    features: ["Rooftop Experience", "VIP Entry", "Club Transport"],
                    price: 599,
                    originalPrice: 799,
                    rating: 4.8,
                    reviews: 124,
                  },
                  {
                    id: "adventure-seeker",
                    title: "Adventure Seeker",
                    duration: "3 Days",
                    description: "Combine daytime activities with exciting nightlife for an action-packed experience.",
                    features: ["ATV Adventure", "Boat Cruise Party", "Thai Boxing"],
                    price: 749,
                    originalPrice: 999,
                    rating: 4.7,
                    reviews: 98,
                  },
                ].map((pkg, index) => (
                  <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 relative">
                        <div className="text-white text-center">
                          <div className="text-lg font-bold">{pkg.duration}</div>
                          <div className="text-xs opacity-90">Package</div>
                        </div>
                        {pkg.isPopular && <Badge className="absolute -top-1 -right-1 bg-orange-500 text-xs">Hot</Badge>}
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-gray-900">{pkg.title}</h4>
                          <div className="text-right">
                            {pkg.originalPrice && (
                              <div className="text-sm text-gray-500 line-through">${pkg.originalPrice}</div>
                            )}
                            <div className="text-xl font-bold text-gray-900">${pkg.price}</div>
                            <div className="text-xs text-gray-500">/person</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{pkg.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            {[...Array(Math.floor(pkg.rating))].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="text-sm font-medium">{pkg.rating}</span>
                            <span className="text-xs text-gray-500">({pkg.reviews})</span>
                          </div>
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => router.push(`/packages/${pkg.id}`)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    id: "ultimate-weekend",
                    title: "Ultimate Weekend",
                    duration: "3 Days",
                    description:
                      "A 3-day action-packed itinerary with luxury accommodations and private transportation.",
                    features: [
                      "VIP Club Access",
                      "Luxury Accommodation",
                      "Private Transportation",
                      "Personal Concierge",
                    ],
                    price: 899,
                    originalPrice: 1199,
                    rating: 4.9,
                    reviews: 156,
                    isPopular: true,
                  },
                  {
                    id: "party-hopper",
                    title: "Party Hopper",
                    duration: "2 Days",
                    description:
                      "Experience Bangkok's best nightlife with club hopping, rooftop bars and exclusive venues.",
                    features: ["Rooftop Experience", "VIP Entry", "Club Transport"],
                    price: 599,
                    originalPrice: 799,
                    rating: 4.8,
                    reviews: 124,
                  },
                  {
                    id: "adventure-seeker",
                    title: "Adventure Seeker",
                    duration: "3 Days",
                    description: "Combine daytime activities with exciting nightlife for an action-packed experience.",
                    features: ["ATV Adventure", "Boat Cruise Party", "Thai Boxing"],
                    price: 749,
                    originalPrice: 999,
                    rating: 4.7,
                    reviews: 98,
                  },
                ].map((pkg, index) => (
                  <Card
                    key={pkg.id}
                    className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer ${
                      index === 0 ? "ring-2 ring-blue-500 scale-105" : ""
                    }`}
                    onClick={() => router.push(`/packages/${pkg.id}`)}
                  >
                    {pkg.isPopular && (
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 text-sm font-semibold">
                        🔥 MOST POPULAR
                      </div>
                    )}

                    <div className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                      <div className="relative text-white text-center">
                        <div className="text-2xl sm:text-3xl font-bold mb-2">{pkg.duration}</div>
                        <div className="text-sm sm:text-base opacity-90">Package</div>
                      </div>
                      {pkg.originalPrice && (
                        <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-red-500">
                          Save ${pkg.originalPrice - pkg.price}
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4 sm:p-5 lg:p-6">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{pkg.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{pkg.description}</p>
                      <ul className="text-xs sm:text-sm text-gray-600 mb-4 space-y-1">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(Math.floor(pkg.rating))].map((_, i) => (
                              <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            {pkg.rating % 1 !== 0 && (
                              <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400/50 text-yellow-400" />
                            )}
                          </div>
                          <span className="font-semibold text-sm sm:text-base">{pkg.rating}</span>
                          <span className="text-gray-500 text-xs sm:text-sm">({pkg.reviews})</span>
                        </div>
                        <div className="text-right">
                          {pkg.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">${pkg.originalPrice}</div>
                          )}
                          <div className="text-xl sm:text-2xl font-bold text-gray-900">${pkg.price}</div>
                          <div className="text-gray-500 text-xs sm:text-sm">/person</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button
                          size="lg"
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          onClick={(e) => {
                            e.stopPropagation()
                            router.push(`/packages/${pkg.id}`)
                          }}
                        >
                          View Details
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full bg-transparent hover:bg-gray-50"
                          onClick={(e) => {
                            e.stopPropagation()
                            router.push(`/booking/${pkg.id}`)
                          }}
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8 lg:mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent hover:bg-white group"
                  onClick={() => router.push("/packages")}
                >
                  View All Packages
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </section>

          {/* Enhanced Customer Testimonials */}
          <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container mx-auto">
              <div className="text-center mb-6 sm:mb-8 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                  What Our Customers Say
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Hear from bachelor parties who had the time of their lives in Bangkok.
                </p>
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">4.9/5</span>
                  <span className="text-gray-600">from 500+ reviews</span>
                </div>
              </div>

              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden">
                <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                  {[
                    {
                      text: "Bangkok Bach made planning my bachelor party effortless. The VIP package was worth every penny! Everything was perfectly organized.",
                      name: "Mike S.",
                      location: "Los Angeles, CA",
                      rating: 5,
                      experience: "VIP Nightclub Package",
                    },
                    {
                      text: "Our custom itinerary was perfect. From the boat party to the activities, everything was top-notch and exactly what we wanted.",
                      name: "James T.",
                      location: "New York, NY",
                      rating: 5,
                      experience: "Custom Package",
                    },
                    {
                      text: "The boat cruise was amazing and showed us a side of Bangkok we never would have found on our own. Best bachelor party ever!",
                      name: "Ryan K.",
                      location: "Chicago, IL",
                      rating: 5,
                      experience: "Private Boat Party",
                    },
                  ].map((testimonial, index) => (
                    <Card key={index} className="flex-shrink-0 w-80 p-4 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-center mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed italic line-clamp-3">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                            <div className="text-gray-500 text-xs">{testimonial.location}</div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {testimonial.experience}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    text: "Bangkok Bach made planning my bachelor party effortless. The VIP package was worth every penny! Everything was perfectly organized.",
                    name: "Mike S.",
                    location: "Los Angeles, CA",
                    rating: 5,
                    experience: "VIP Nightclub Package",
                  },
                  {
                    text: "Our custom itinerary was perfect. From the boat party to the activities, everything was top-notch and exactly what we wanted.",
                    name: "James T.",
                    location: "New York, NY",
                    rating: 5,
                    experience: "Custom Package",
                  },
                  {
                    text: "The boat cruise was amazing and showed us a side of Bangkok we never would have found on our own. Best bachelor party ever!",
                    name: "Ryan K.",
                    location: "Chicago, IL",
                    rating: 5,
                    experience: "Private Boat Party",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 group">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                          <div className="text-gray-500 text-xs sm:text-sm">{testimonial.location}</div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {testimonial.experience}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8 lg:mt-12">
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-gray-50 group"
                  onClick={() => router.push("/reviews")}
                >
                  Read More Reviews
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] bg-repeat"></div>
            </div>

            <div className="container mx-auto text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                Ready to Plan the Ultimate Bachelor Party?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Get started today and create memories that will last a lifetime. Join 500+ satisfied customers.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-blue-100">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">100% Secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span className="text-sm">4.9★ Rated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span className="text-sm">500+ Happy Customers</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 text-base font-semibold w-full sm:w-auto group shadow-lg"
                  onClick={() => router.push("/packages")}
                >
                  Start Planning
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 text-base font-semibold bg-transparent w-full sm:w-auto"
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-blue-100 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+66 2 123 4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@bangkokbach.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Footer */}
          <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
                <div className="sm:col-span-2 lg:col-span-2">
                  <button
                    onClick={() => router.push("/")}
                    className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 block hover:opacity-80 transition-opacity text-left"
                  >
                    <span className="text-blue-400">Bangkok Bach</span>
                  </button>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed max-w-md">
                    Your premier bachelor party planning service in Bangkok. Creating unforgettable experiences since
                    2019.
                  </p>
                  <div className="flex space-x-4 mb-6">
                    <a
                      href="https://facebook.com/bangkokbach"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                    <a
                      href="https://instagram.com/bangkokbach"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                    <a
                      href="https://twitter.com/bangkokbach"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                  </div>

                  {/* Newsletter Signup */}
                  <div>
                    <h4 className="font-semibold mb-2 text-base sm:text-lg">Stay Updated</h4>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        const email = (e.target as HTMLFormElement).email.value
                        handleNewsletterSignup(email)
                      }}
                      className="flex gap-2"
                    >
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
                        required
                      />
                      <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700 flex-shrink-0">
                        Subscribe
                      </Button>
                    </form>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Experiences</h4>
                  <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                    <li>
                      <button
                        onClick={() => router.push("/experiences?category=nightlife")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Nightlife
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push("/experiences?category=water")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Water Activities
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push("/experiences?category=dining")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Dining
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push("/experiences?category=adventure")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Adventure
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push("/experiences?category=cultural")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Cultural
                      </button>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Company</h4>
                  <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                    <li>
                      <button
                        onClick={() => router.push("/about")}
                        className="hover:text-white transition-colors text-left"
                      >
                        About Us
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push("/blog")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Blog
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push("/careers")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Careers
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push("/contact")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Contact
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push("/reviews")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Support</h4>
                  <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                    <li>
                      <button
                        onClick={() => router.push("/help")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Help Center
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push("/terms")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Terms of Service
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push("/privacy")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Privacy Policy
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => router.push("/cookies")}
                        className="hover:text-white transition-colors text-left"
                      >
                        Cookie Policy
                      </button>
                    </li>
                    <li>
                      <a href="tel:+66-2-123-4567" className="hover:text-white transition-colors">
                        Emergency: +66 2 123 4567
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
                <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm sm:text-base">
                  <p>&copy; 2024 Bangkok Bach. All rights reserved.</p>
                  <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <span className="flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      SSL Secured
                    </span>
                    <span className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      Licensed Tour Operator
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          {/* Mobile-Only Components */}
          <MobileBottomNav />
          <MobileFAB />
        </div>
      </MobilePullRefresh>

      {/* Toast Container */}
      <ToastContainer />
    </>
  )
}
