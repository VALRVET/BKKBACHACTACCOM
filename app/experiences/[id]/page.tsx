import { notFound } from "next/navigation"
import { getExperience, getRelatedExperiences } from "@/lib/data/experiences"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Star,
  Clock,
  Users,
  MapPin,
  Calendar,
  Shield,
  Award,
  Heart,
  Share2,
  Check,
  X,
  Camera,
  Play,
  Gift,
  PrinterIcon as Print,
  MessageCircle,
  Phone,
  Mail,
  Zap,
  Globe,
  Accessibility,
  ThermometerSun,
  AlertTriangle,
  Info,
  DollarSign,
  Plus,
} from "lucide-react"
import { ExperienceCard } from "@/components/experience-card"

interface ExperiencePageProps {
  params: {
    id: string
  }
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  const experience = getExperience(params.id)

  if (!experience) {
    notFound()
  }

  const relatedExperiences = getRelatedExperiences(experience.id, experience.relatedExperiences)

  return (
    <div className="min-h-screen bg-white">
      {/* Image Gallery Hero */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-64 md:h-96">
          <div className="md:col-span-2 relative overflow-hidden rounded-lg">
            <img
              src={experience.gallery[0] || "/placeholder.svg"}
              alt={experience.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            {experience.videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Video
                </Button>
              </div>
            )}
          </div>
          <div className="hidden md:grid grid-rows-2 gap-2">
            {experience.gallery.slice(1, 3).map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${experience.title} ${index + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="hidden md:grid grid-rows-2 gap-2">
            {experience.gallery.slice(3, 5).map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${experience.title} ${index + 4}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {index === 1 && experience.gallery.length > 5 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Button variant="outline" className="bg-white text-black">
                      <Camera className="h-4 w-4 mr-2" />+{experience.gallery.length - 5} Photos
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute bottom-4 left-4 flex space-x-2">
          {experience.isPopular && <Badge className="bg-orange-500">Popular</Badge>}
          {experience.isBestseller && <Badge className="bg-red-500">Bestseller</Badge>}
          {experience.isNewExperience && <Badge className="bg-green-500">New</Badge>}
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header Info */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Badge variant="secondary">{experience.category}</Badge>
                <Badge variant="outline" className="capitalize">
                  {experience.difficulty}
                </Badge>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  {experience.duration}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  {experience.groupSize}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{experience.title}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(Math.floor(experience.rating))].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  {experience.rating % 1 !== 0 && <Star className="h-5 w-5 fill-yellow-400/50 text-yellow-400" />}
                  <span className="ml-2 font-semibold">{experience.rating}</span>
                  <span className="ml-1 text-gray-600">({experience.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {experience.location}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {experience.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-blue-600" />
                Experience Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {experience.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tabs Content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="info">Info</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Experience</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{experience.description}</p>
                  <p className="text-gray-600 leading-relaxed">{experience.longDescription}</p>
                </div>

                {/* What's Included/Not Included */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center text-green-700">
                      <Check className="h-5 w-5 mr-2" />
                      What's Included
                    </h3>
                    <div className="space-y-2">
                      {experience.included.map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center text-red-700">
                      <X className="h-5 w-5 mr-2" />
                      Not Included
                    </h3>
                    <div className="space-y-2">
                      {experience.notIncluded.map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <X className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Add-ons */}
                {experience.addOns && experience.addOns.length > 0 && (
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Add-ons</h3>
                    <div className="space-y-4">
                      {experience.addOns.map((addon, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{addon.name}</div>
                            <div className="text-sm text-gray-600">{addon.description}</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="font-semibold text-gray-900">+${addon.price}</span>
                            <Button size="sm" variant="outline">
                              <Plus className="h-4 w-4 mr-1" />
                              Add
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="itinerary" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary</h2>
                  <div className="space-y-6">
                    {experience.itinerary.map((item, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-blue-600">{item.time}</span>
                            {item.location && <span className="text-sm text-gray-500">• {item.location}</span>}
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{item.activity}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Reviews & Ratings</h2>
                    <Button variant="outline">Write a Review</Button>
                  </div>

                  {/* Rating Summary */}
                  <Card className="p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 mb-2">{experience.rating}</div>
                        <div className="flex items-center justify-center mb-2">
                          {[...Array(Math.floor(experience.rating))].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div className="text-gray-600">{experience.reviewCount} reviews</div>
                      </div>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center space-x-2">
                            <span className="text-sm w-8">{rating}★</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: `${Math.random() * 80 + 10}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600 w-8">{Math.floor(Math.random() * 50)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  {/* Individual Reviews */}
                  <div className="space-y-6">
                    {experience.reviews.map((review, index) => (
                      <Card key={index} className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {review.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="font-semibold text-gray-900 flex items-center">
                                  {review.name}
                                  {review.verified && (
                                    <Badge variant="outline" className="ml-2 text-xs">
                                      <Check className="h-3 w-3 mr-1" />
                                      Verified
                                    </Badge>
                                  )}
                                </div>
                                <div className="text-sm text-gray-500">{review.date}</div>
                              </div>
                              <div className="flex items-center">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="info" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Important Information */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-blue-600" />
                      Important Information
                    </h3>
                    <div className="space-y-3">
                      {experience.importantInfo.map((info, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{info}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* What to Bring */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Bring</h3>
                    <div className="space-y-2">
                      {experience.whatToBring.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Meeting Point */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-red-600" />
                      Meeting Point
                    </h3>
                    <p className="text-gray-700 mb-4">{experience.meetingPoint}</p>
                    <Button variant="outline" size="sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      View on Map
                    </Button>
                  </Card>

                  {/* Languages */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-blue-600" />
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.languages.map((language, index) => (
                        <Badge key={index} variant="outline">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  {/* Accessibility */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Accessibility className="h-5 w-5 mr-2 text-purple-600" />
                      Accessibility
                    </h3>
                    <div className="space-y-2">
                      {experience.accessibility.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Weather Policy */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <ThermometerSun className="h-5 w-5 mr-2 text-orange-600" />
                      Weather Policy
                    </h3>
                    <p className="text-gray-700 text-sm">{experience.weatherPolicy}</p>
                  </Card>
                </div>

                {/* Cancellation Policy */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-600" />
                    Cancellation Policy
                  </h3>
                  <p className="text-gray-700">{experience.cancellationPolicy}</p>
                </Card>

                {/* Safety Measures */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-600" />
                    Safety Measures
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {experience.safetyMeasures.map((measure, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{measure}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="faqs" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {experience.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Contact for More Questions */}
                <Card className="p-6 bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Still have questions?</h3>
                  <p className="text-gray-600 mb-4">Our team is here to help you plan the perfect experience.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Live Chat
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Main Booking Card */}
              <Card className="p-6 shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {experience.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${experience.originalPrice}</span>
                    )}
                    <div className="text-3xl font-bold text-gray-900">${experience.price}</div>
                  </div>
                  <div className="text-gray-500">per person</div>
                  {experience.originalPrice && (
                    <Badge className="bg-red-500 mt-2">Save ${experience.originalPrice - experience.price}</Badge>
                  )}
                </div>

                {/* Quick Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{experience.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Group Size:</span>
                    <span className="font-medium">{experience.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{experience.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Age Restriction:</span>
                    <span className="font-medium">{experience.ageRestriction}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Group Discounts */}
                {experience.groupDiscounts && experience.groupDiscounts.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                      Group Discounts
                    </h4>
                    <div className="space-y-2">
                      {experience.groupDiscounts.map((discount, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{discount.minSize}+ people:</span>
                          <Badge variant="outline" className="text-green-600">
                            {discount.discount}% off
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Booking Actions */}
                <div className="space-y-3">
                  <Link href={`/booking/${experience.id}`}>
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                  </Link>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Gift className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Print className="h-4 w-4 mr-2" />
                    Print Itinerary
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2 text-green-700 mb-2">
                      <Shield className="h-4 w-4" />
                      <span className="font-medium text-sm">Free Cancellation</span>
                    </div>
                    <p className="text-green-600 text-xs">{experience.cancellationPolicy}</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2 text-blue-700 mb-2">
                      <Award className="h-4 w-4" />
                      <span className="font-medium text-sm">Highly Rated</span>
                    </div>
                    <p className="text-blue-600 text-xs">
                      This experience has a {experience.rating} star rating from {experience.reviewCount} reviews.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-2 text-purple-700 mb-2">
                      <MessageCircle className="h-4 w-4" />
                      <span className="font-medium text-sm">24/7 Support</span>
                    </div>
                    <p className="text-purple-600 text-xs">
                      Get help anytime with our dedicated customer support team.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contact Card */}
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Live Chat
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <Phone className="h-4 w-4 mr-2" />
                    +66 2 123 4567
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <Mail className="h-4 w-4 mr-2" />
                    support@bangkokbach.com
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Experiences */}
        {relatedExperiences.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">You Might Also Like</h2>
              <Link href="/experiences">
                <Button variant="outline">View All Experiences</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedExperiences.map((relatedExp) => (
                <ExperienceCard
                  key={relatedExp.id}
                  title={relatedExp.title}
                  description={relatedExp.description}
                  price={relatedExp.price}
                  rating={relatedExp.rating}
                  reviewCount={relatedExp.reviewCount}
                  isPopular={relatedExp.isPopular}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
