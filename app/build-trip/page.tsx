"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Users, Plus, Minus } from "lucide-react"

const experienceCategories = [
  { id: "nightlife", name: "Nightlife", icon: "🌙" },
  { id: "water", name: "Water Activities", icon: "🌊" },
  { id: "dining", name: "Dining", icon: "🍽️" },
  { id: "adventure", name: "Adventure", icon: "🏔️" },
  { id: "cultural", name: "Cultural", icon: "🏛️" },
  { id: "wellness", name: "Wellness", icon: "🧘" },
]

const accommodationOptions = [
  { id: "luxury", name: "Luxury Hotels", price: 200, description: "5-star hotels with premium amenities" },
  { id: "boutique", name: "Boutique Hotels", price: 150, description: "Stylish and unique accommodations" },
  { id: "standard", name: "Standard Hotels", price: 100, description: "Comfortable 3-4 star hotels" },
]

const transportationOptions = [
  { id: "private", name: "Private Transportation", price: 80, description: "Dedicated vehicle and driver" },
  { id: "shared", name: "Shared Transportation", price: 40, description: "Shared rides between venues" },
  { id: "public", name: "Public Transport Passes", price: 20, description: "BTS/MRT passes and taxi vouchers" },
]

export default function BuildTripPage() {
  const [step, setStep] = useState(1)
  const [tripData, setTripData] = useState({
    groupSize: 6,
    duration: 3,
    budget: 1000,
    interests: [] as string[],
    accommodation: "",
    transportation: "",
    specialRequests: "",
    contactInfo: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const totalSteps = 5

  const handleInterestToggle = (interest: string) => {
    setTripData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const calculateEstimatedCost = () => {
    let baseCost = tripData.groupSize * tripData.duration * 100 // Base cost per person per day

    // Add accommodation cost
    const accommodation = accommodationOptions.find((a) => a.id === tripData.accommodation)
    if (accommodation) {
      baseCost += accommodation.price * tripData.duration
    }

    // Add transportation cost
    const transportation = transportationOptions.find((t) => t.id === tripData.transportation)
    if (transportation) {
      baseCost += transportation.price * tripData.duration
    }

    // Add interest-based costs
    baseCost += tripData.interests.length * 50 * tripData.duration

    return baseCost
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Trip Basics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="groupSize">Group Size</Label>
                <div className="flex items-center space-x-4 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTripData((prev) => ({ ...prev, groupSize: Math.max(2, prev.groupSize - 1) }))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-2xl font-semibold w-12 text-center">{tripData.groupSize}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTripData((prev) => ({ ...prev, groupSize: Math.min(20, prev.groupSize + 1) }))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-1">Number of people in your group</p>
              </div>

              <div>
                <Label htmlFor="duration">Trip Duration (Days)</Label>
                <div className="flex items-center space-x-4 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTripData((prev) => ({ ...prev, duration: Math.max(1, prev.duration - 1) }))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-2xl font-semibold w-12 text-center">{tripData.duration}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTripData((prev) => ({ ...prev, duration: Math.min(7, prev.duration + 1) }))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-1">How many days will you be in Bangkok?</p>
              </div>

              <div>
                <Label htmlFor="budget">Budget per Person (USD)</Label>
                <Select
                  value={tripData.budget.toString()}
                  onValueChange={(value) => setTripData((prev) => ({ ...prev, budget: Number.parseInt(value) }))}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500">$500 - Budget Friendly</SelectItem>
                    <SelectItem value="1000">$1,000 - Standard</SelectItem>
                    <SelectItem value="1500">$1,500 - Premium</SelectItem>
                    <SelectItem value="2500">$2,500+ - Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>What interests your group?</CardTitle>
              <p className="text-gray-600">Select all activities that appeal to your group</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experienceCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      tripData.interests.includes(category.id)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleInterestToggle(category.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <div className="font-semibold">{category.name}</div>
                        <Checkbox
                          checked={tripData.interests.includes(category.id)}
                          onChange={() => handleInterestToggle(category.id)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Accommodation Preferences</CardTitle>
              <p className="text-gray-600">Choose your preferred accommodation style</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {accommodationOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    tripData.accommodation === option.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setTripData((prev) => ({ ...prev, accommodation: option.id }))}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold">{option.name}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${option.price}</div>
                      <div className="text-sm text-gray-500">per night</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Transportation & Special Requests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-semibold">Transportation Preferences</Label>
                <div className="space-y-3 mt-3">
                  {transportationOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        tripData.transportation === option.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setTripData((prev) => ({ ...prev, transportation: option.id }))}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold">{option.name}</div>
                          <div className="text-sm text-gray-600">{option.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${option.price}</div>
                          <div className="text-sm text-gray-500">per day</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="specialRequests">Special Requests or Requirements</Label>
                <Textarea
                  id="specialRequests"
                  placeholder="Any dietary restrictions, accessibility needs, specific venues you want to visit, or other special requests..."
                  value={tripData.specialRequests}
                  onChange={(e) => setTripData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                  className="mt-2"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        )

      case 5:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={tripData.contactInfo.name}
                    onChange={(e) =>
                      setTripData((prev) => ({
                        ...prev,
                        contactInfo: { ...prev.contactInfo, name: e.target.value },
                      }))
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={tripData.contactInfo.email}
                    onChange={(e) =>
                      setTripData((prev) => ({
                        ...prev,
                        contactInfo: { ...prev.contactInfo, email: e.target.value },
                      }))
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={tripData.contactInfo.phone}
                    onChange={(e) =>
                      setTripData((prev) => ({
                        ...prev,
                        contactInfo: { ...prev.contactInfo, phone: e.target.value },
                      }))
                    }
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trip Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Group Size:</span>
                    <span className="ml-2 font-semibold">{tripData.groupSize} people</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <span className="ml-2 font-semibold">{tripData.duration} days</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Budget:</span>
                    <span className="ml-2 font-semibold">${tripData.budget} per person</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Estimated Cost:</span>
                    <span className="ml-2 font-semibold">${calculateEstimatedCost()}</span>
                  </div>
                </div>

                <div>
                  <span className="text-gray-600">Interests:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tripData.interests.map((interest) => {
                      const category = experienceCategories.find((c) => c.id === interest)
                      return (
                        <Badge key={interest} variant="secondary">
                          {category?.icon} {category?.name}
                        </Badge>
                      )
                    })}
                  </div>
                </div>

                {tripData.accommodation && (
                  <div>
                    <span className="text-gray-600">Accommodation:</span>
                    <span className="ml-2 font-semibold">
                      {accommodationOptions.find((a) => a.id === tripData.accommodation)?.name}
                    </span>
                  </div>
                )}

                {tripData.transportation && (
                  <div>
                    <span className="text-gray-600">Transportation:</span>
                    <span className="ml-2 font-semibold">
                      {transportationOptions.find((t) => t.id === tripData.transportation)?.name}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Build Your Custom Trip</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your group and preferences, and we'll create the perfect Bangkok bachelor party experience.
          </p>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between mb-2">
              <span className="text-blue-100 text-sm">
                Step {step} of {totalSteps}
              </span>
              <span className="text-blue-100 text-sm">{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full bg-blue-700 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          {renderStep()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={() => setStep(step - 1)} disabled={step === 1}>
              Previous
            </Button>

            {step < totalSteps ? (
              <Button onClick={() => setStep(step + 1)} className="bg-blue-600 hover:bg-blue-700">
                Next
              </Button>
            ) : (
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  // Handle form submission
                  console.log("Trip data:", tripData)
                  alert("Thank you! We'll contact you within 24 hours with your custom itinerary.")
                }}
              >
                Submit Request
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
