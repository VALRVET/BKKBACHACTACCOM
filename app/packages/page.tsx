import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Check } from "lucide-react"

const packages = [
  {
    id: "ultimate-weekend",
    title: "Ultimate Weekend",
    subtitle: "The Complete Bangkok Experience",
    duration: "3 Days / 2 Nights",
    price: 899,
    originalPrice: 1199,
    rating: 4.9,
    reviewCount: 156,
    groupSize: "4-12 people",
    isPopular: true,
    description:
      "A 3-day action-packed itinerary with luxury accommodations, VIP nightlife access, and unforgettable experiences.",
    features: [
      "Luxury 5-star hotel accommodation",
      "VIP nightclub access with bottle service",
      "Private boat party on Chao Phraya River",
      "Thai boxing experience with professionals",
      "Gourmet street food tour",
      "Private transportation throughout",
      "Dedicated concierge service",
      "Professional photography session",
    ],
    highlights: [
      "2 nights luxury accommodation",
      "All meals and drinks included",
      "VIP treatment at all venues",
      "24/7 concierge support",
    ],
  },
  {
    id: "party-hopper",
    title: "Party Hopper",
    subtitle: "Bangkok's Best Nightlife",
    duration: "2 Days / 1 Night",
    price: 599,
    originalPrice: 799,
    rating: 4.8,
    reviewCount: 124,
    groupSize: "4-10 people",
    isPopular: true,
    description: "Experience Bangkok's legendary nightlife with exclusive access to the city's hottest venues.",
    features: [
      "Boutique hotel accommodation",
      "Rooftop bar crawl experience",
      "VIP entry to 4 premium clubs",
      "Private transportation",
      "Welcome drinks and shots",
      "Local nightlife guide",
    ],
    highlights: [
      "1 night boutique accommodation",
      "4 premium venues included",
      "Skip-the-line access",
      "Professional guide",
    ],
  },
  {
    id: "adventure-seeker",
    title: "Adventure Seeker",
    subtitle: "Thrills by Day, Party by Night",
    duration: "3 Days / 2 Nights",
    price: 749,
    originalPrice: 999,
    rating: 4.7,
    reviewCount: 98,
    groupSize: "4-15 people",
    description: "Perfect blend of adrenaline-pumping activities and exciting nightlife experiences.",
    features: [
      "Comfortable 4-star accommodation",
      "Jet ski adventure in Pattaya",
      "ATV jungle expedition",
      "Thai boxing training session",
      "Nightclub VIP experience",
      "Cultural temple tour",
      "All transportation included",
    ],
    highlights: [
      "2 nights accommodation",
      "Adventure + nightlife combo",
      "Cultural experiences",
      "All equipment provided",
    ],
  },
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Bachelor Party Packages</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            All-inclusive packages designed for unforgettable bachelor party experiences. Everything planned, nothing to
            worry about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              View All Packages
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Custom Package
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Adventure</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each package is carefully crafted to deliver maximum fun with minimum hassle. All logistics handled, all
              experiences premium.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? "ring-2 ring-blue-500 scale-105" : "hover:scale-105"
                }`}
              >
                {pkg.isPopular && (
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 text-sm font-semibold">
                    🔥 MOST POPULAR
                  </div>
                )}

                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold mb-2">{pkg.duration.split(" ")[0]}</div>
                    <div className="text-sm opacity-90">{pkg.duration.split(" ").slice(1).join(" ")}</div>
                  </div>
                  {pkg.originalPrice > pkg.price && (
                    <Badge className="absolute top-4 right-4 bg-red-500">Save ${pkg.originalPrice - pkg.price}</Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                    <p className="text-gray-600 mb-4">{pkg.subtitle}</p>

                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(Math.floor(pkg.rating))].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-semibold">{pkg.rating}</span>
                      <span className="text-gray-500 text-sm">({pkg.reviewCount})</span>
                    </div>

                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {pkg.groupSize}
                      </div>
                    </div>

                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center space-x-2">
                        {pkg.originalPrice > pkg.price && (
                          <span className="text-lg text-gray-500 line-through">${pkg.originalPrice}</span>
                        )}
                        <span className="text-4xl font-bold text-gray-900">${pkg.price}</span>
                      </div>
                      <div className="text-gray-500">per person</div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Package Highlights</h4>
                      <div className="space-y-2">
                        {pkg.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link href={`/packages/${pkg.id}`}>
                      <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                        View Details
                      </Button>
                    </Link>
                    <Link href={`/booking/${pkg.id}`}>
                      <Button size="lg" variant="outline" className="w-full bg-transparent">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Packages?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We handle every detail so you can focus on having the time of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "All-Inclusive",
                description: "Everything included - no hidden costs or surprise fees",
              },
              {
                icon: "🏆",
                title: "Premium Venues",
                description: "Access to Bangkok's most exclusive and highly-rated venues",
              },
              {
                icon: "🚗",
                title: "Transportation",
                description: "Private transportation between all venues and activities",
              },
              {
                icon: "📞",
                title: "24/7 Support",
                description: "Dedicated concierge available around the clock",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Package?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Have specific requirements or a unique vision? Let us create a personalized package just for your group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/build-trip">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Build Custom Package
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
