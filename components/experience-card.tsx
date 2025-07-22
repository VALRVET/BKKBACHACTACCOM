"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, Share2, MapPin, Clock, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExperienceCardProps {
  id: string
  title: string
  description: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  isPopular?: boolean
  imageUrl?: string
  location?: string
  duration?: string
  groupSize?: string
  category?: string
  className?: string
}

export function ExperienceCard({
  id,
  title,
  description,
  price,
  originalPrice,
  rating,
  reviewCount,
  isPopular = false,
  imageUrl = "/placeholder.svg?height=200&width=300&text=Experience",
  location = "Bangkok",
  duration = "3-4 hours",
  groupSize = "2-12 people",
  category = "Experience",
  className,
}: ExperienceCardProps) {
  const router = useRouter()
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleCardClick = () => {
    router.push(`/experiences/${id}`)
  }

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: `/experiences/${id}`,
        })
      } catch (error) {
        console.log("Share cancelled")
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/experiences/${id}`)
    }
  }

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/experiences/${id}`)
  }

  return (
    <Card
      className={cn(
        "overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer",
        className,
      )}
      onClick={handleCardClick}
    >
      <div className="relative">
        {/* Image */}
        <div className="relative h-48 sm:h-56 bg-gray-200 overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-all duration-300 group-hover:scale-110",
              imageLoaded ? "opacity-100" : "opacity-0",
            )}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {isPopular && (
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold">🔥 Popular</Badge>
            )}
            <Badge variant="secondary" className="bg-white/90 text-gray-800 text-xs">
              {category}
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleLike}
              className={cn(
                "p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110",
                isLiked ? "bg-red-500 text-white" : "bg-white/90 text-gray-700 hover:bg-white",
              )}
              aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white/90 text-gray-700 hover:bg-white backdrop-blur-sm transition-all duration-200 hover:scale-110"
              aria-label="Share experience"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>

          {/* Price Badge */}
          <div className="absolute bottom-3 right-3">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
              {originalPrice && <div className="text-xs text-gray-500 line-through">${originalPrice}</div>}
              <div className="text-lg font-bold text-gray-900">${price}</div>
              <div className="text-xs text-gray-600">per person</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-4 sm:p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 flex-1 mr-2">{title}</h3>
          </div>

          <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 leading-relaxed">{description}</p>

          {/* Details */}
          <div className="flex flex-wrap gap-3 mb-4 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              {location}
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              {duration}
            </div>
            <div className="flex items-center">
              <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              {groupSize}
            </div>
          </div>

          {/* Rating and CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-3 w-3 sm:h-4 sm:w-4",
                      i < Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : i < rating
                          ? "fill-yellow-400/50 text-yellow-400"
                          : "text-gray-300",
                    )}
                  />
                ))}
              </div>
              <span className="font-semibold text-sm sm:text-base">{rating}</span>
              <span className="text-gray-500 text-xs sm:text-sm">({reviewCount})</span>
            </div>

            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleViewDetails}>
              View Details
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
