"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, MapPin, Heart, Phone, Share2, ChevronLeft, ChevronRight, Clock, Users, Bed } from "lucide-react"
import { type Hotel, calculatePrice, getDistanceToNightlife } from "@/lib/data/hotels"
import { getAmenityIcon } from "@/lib/data/hotel-amenities"
import { cn } from "@/lib/utils"

interface HotelCardProps {
  hotel: Hotel
  checkIn?: string
  checkOut?: string
  guests?: number
  showPricing?: boolean
  compact?: boolean
  className?: string
}

export function HotelCard({
  hotel,
  checkIn,
  checkOut,
  guests = 2,
  showPricing = true,
  compact = false,
  className,
}: HotelCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageError, setImageError] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const images = hotel.images.gallery.length > 0 ? hotel.images.gallery : [hotel.images.hero]
  const totalPrice = calculatePrice(hotel, checkIn, checkOut, guests)
  const distanceToNightlife = getDistanceToNightlife(hotel)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: hotel.name,
          text: hotel.description,
          url: `/hotels/${hotel.id}`,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/hotels/${hotel.id}`)
    }
  }

  const handleCall = () => {
    window.location.href = `tel:${hotel.contactInfo.phone}`
  }

  const keyAmenities = [
    ...hotel.amenities.general.slice(0, 2),
    ...hotel.amenities.recreation.slice(0, 1),
    ...hotel.amenities.dining.slice(0, 1),
  ].slice(0, 4)

  if (compact) {
    return (
      <Card className={cn("overflow-hidden hover:shadow-lg transition-shadow duration-300", className)}>
        <div className="flex">
          <div className="relative w-32 h-24 flex-shrink-0">
            <Image
              src={imageError ? "/placeholder.svg?height=96&width=128&text=Hotel" : images[0]}
              alt={hotel.name}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
            {hotel.isPopular && (
              <Badge className="absolute top-1 left-1 bg-blue-600 text-white text-xs px-1 py-0.5">Popular</Badge>
            )}
          </div>
          <div className="flex-1 p-3">
            <div className="flex items-start justify-between mb-1">
              <div>
                <h3 className="font-semibold text-sm line-clamp-1">{hotel.name}</h3>
                <div className="flex items-center gap-1 text-xs text-gray-600">
                  <div className="flex items-center">
                    {[...Array(hotel.starRating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span>•</span>
                  <span>{hotel.location.district}</span>
                </div>
              </div>
              {showPricing && (
                <div className="text-right">
                  <div className="text-sm font-semibold">${totalPrice}</div>
                  <div className="text-xs text-gray-500">per night</div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{hotel.reviews.overallRating}</span>
              </div>
              <span>•</span>
              <span>{distanceToNightlife} to nightlife</span>
            </div>
            <div className="flex gap-1">
              <Link href={`/hotels/${hotel.id}`}>
                <Button size="sm" className="text-xs px-2 py-1 h-6">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className={cn("overflow-hidden hover:shadow-xl transition-all duration-300 group", className)}>
      <div className="relative">
        {/* Image Carousel */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <Image
            src={imageError ? "/placeholder.svg?height=224&width=400&text=Hotel+Image" : images[currentImageIndex]}
            alt={`${hotel.name} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />

          {/* Image Navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      index === currentImageIndex ? "bg-white" : "bg-white/50",
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {hotel.isPopular && <Badge className="bg-blue-600 text-white">Popular</Badge>}
            {hotel.isBestseller && <Badge className="bg-green-600 text-white">Bestseller</Badge>}
            {hotel.isNewProperty && <Badge className="bg-purple-600 text-white">New</Badge>}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={cn(
                "p-2 rounded-full transition-colors",
                isFavorite ? "bg-red-500 text-white" : "bg-white/80 text-gray-700 hover:bg-white",
              )}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white transition-colors"
              aria-label="Share hotel"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Special Offers */}
        {hotel.specialOffers.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <Badge className="bg-orange-500 text-white">
              {hotel.specialOffers[0].discount}% OFF - {hotel.specialOffers[0].title}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        {/* Hotel Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg line-clamp-1">{hotel.name}</h3>
              <div className="flex items-center">
                {[...Array(hotel.starRating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{hotel.description}</p>
          </div>
          {showPricing && (
            <div className="text-right ml-4">
              <div className="text-2xl font-bold text-blue-600">${totalPrice}</div>
              <div className="text-sm text-gray-500">per night</div>
              {hotel.pricing.taxes > 0 && <div className="text-xs text-gray-400">+{hotel.pricing.taxes}% taxes</div>}
            </div>
          )}
        </div>

        {/* Location and Rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{hotel.location.district}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{distanceToNightlife} to nightlife</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{hotel.reviews.overallRating}</span>
            <span className="text-sm text-gray-500">({hotel.reviews.totalReviews})</span>
          </div>
        </div>

        {/* Key Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {keyAmenities.map((amenity, index) => {
            const IconComponent = getAmenityIcon(amenity.toLowerCase().replace(/\s+/g, "-"))
            return (
              <div key={index} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                <IconComponent className="h-3 w-3" />
                <span>{amenity}</span>
              </div>
            )
          })}
        </div>

        {/* Room Types Preview */}
        {hotel.roomTypes.length > 0 && (
          <div className="border-t pt-3 mb-4">
            <div className="text-sm font-medium mb-2">Available Rooms</div>
            <div className="space-y-1">
              {hotel.roomTypes.slice(0, 2).map((room) => (
                <div key={room.id} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Bed className="h-3 w-3 text-gray-400" />
                    <span>{room.name}</span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Users className="h-3 w-3" />
                      <span>{room.maxOccupancy}</span>
                    </div>
                  </div>
                  <span className="font-medium">${room.price}</span>
                </div>
              ))}
              {hotel.roomTypes.length > 2 && (
                <div className="text-xs text-blue-600">+{hotel.roomTypes.length - 2} more room types</div>
              )}
            </div>
          </div>
        )}

        {/* Nightlife Proximity */}
        {hotel.nightlifeProximity.walkingDistance && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <div className="text-sm font-medium text-blue-800 mb-1">Perfect for Nightlife</div>
            <div className="text-xs text-blue-600">
              Walking distance to {hotel.nightlifeProximity.nearbyClubs.length} clubs and{" "}
              {hotel.nightlifeProximity.nearbyBars.length} bars
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link href={`/hotels/${hotel.id}`} className="flex-1">
          <Button variant="outline" className="w-full bg-transparent">
            View Details
          </Button>
        </Link>
        <Link href={`/hotels/${hotel.id}/book`} className="flex-1">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
        </Link>
        <div className="flex gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={handleCall}
            className="h-10 w-10 bg-transparent"
            aria-label="Call hotel"
          >
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Mobile-optimized version
export function MobileHotelCard({ hotel, checkIn, checkOut, guests, showPricing = true }: HotelCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageError, setImageError] = useState(false)

  const images = hotel.images.gallery.length > 0 ? hotel.images.gallery : [hotel.images.hero]
  const totalPrice = calculatePrice(hotel, checkIn, checkOut, guests)
  const distanceToNightlife = getDistanceToNightlife(hotel)

  return (
    <Card className="overflow-hidden">
      <div className="relative h-40">
        <Image
          src={imageError ? "/placeholder.svg?height=160&width=400&text=Hotel" : images[currentImageIndex]}
          alt={hotel.name}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
        />

        {/* Swipe indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={cn("w-1.5 h-1.5 rounded-full", index === currentImageIndex ? "bg-white" : "bg-white/50")}
              />
            ))}
          </div>
        )}

        {/* Badges */}
        {hotel.isPopular && <Badge className="absolute top-2 left-2 bg-blue-600 text-white text-xs">Popular</Badge>}

        {showPricing && (
          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-semibold">
            ${totalPrice}
          </div>
        )}
      </div>

      <CardContent className="p-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-base line-clamp-1 mb-1">{hotel.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
              <div className="flex items-center">
                {[...Array(hotel.starRating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>•</span>
              <span>{hotel.location.district}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{hotel.reviews.overallRating}</span>
            <span className="text-gray-500">({hotel.reviews.totalReviews})</span>
          </div>
          <div className="text-sm text-gray-600">{distanceToNightlife} to nightlife</div>
        </div>

        <div className="flex gap-2">
          <Link href={`/hotels/${hotel.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Details
            </Button>
          </Link>
          <Link href={`/hotels/${hotel.id}/book`} className="flex-1">
            <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
              Book
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={() => (window.location.href = `tel:${hotel.contactInfo.phone}`)}
            className="px-3"
          >
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
