import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Shield, Clock } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    bio: "Former expat living in Bangkok for 8 years. Expert in Thai culture and nightlife scene.",
    image: "/placeholder.svg?height=300&width=300&text=Alex",
  },
  {
    name: "Siriporn 'Siri' Nakamura",
    role: "Local Experience Director",
    bio: "Bangkok native with extensive connections in hospitality and entertainment industry.",
    image: "/placeholder.svg?height=300&width=300&text=Siri",
  },
  {
    name: "Marcus Rodriguez",
    role: "Operations Manager",
    bio: "Logistics expert ensuring seamless experiences for every bachelor party group.",
    image: "/placeholder.svg?height=300&width=300&text=Marcus",
  },
]

const stats = [
  { number: "500+", label: "Bachelor Parties Planned" },
  { number: "4.9", label: "Average Rating" },
  { number: "50+", label: "Partner Venues" },
  { number: "24/7", label: "Customer Support" },
]

const values = [
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Safety First",
    description: "Your safety and security are our top priorities. All venues are vetted and we provide 24/7 support.",
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: "Premium Quality",
    description: "We partner only with the best venues and service providers to ensure exceptional experiences.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Local Expertise",
    description: "Our team combines local knowledge with international standards to create unforgettable experiences.",
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Seamless Planning",
    description: "We handle every detail so you can focus on celebrating with your friends.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Bangkok Bach</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're Bangkok's premier bachelor party planning service, dedicated to creating unforgettable experiences
            that celebrate friendship and adventure.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              Bangkok Bach was born from a simple idea: bachelor parties should be legendary, not stressful. After
              planning countless trips for friends and experiencing the challenges of organizing group travel in a
              foreign city, our founder Alex realized there had to be a better way.
            </p>

            <p className="leading-relaxed mb-6">
              In 2019, we started as a small team of expats and locals who shared a passion for Bangkok's incredible
              nightlife, culture, and hospitality. We knew the city's hidden gems, the best venues, and most
              importantly, how to navigate the complexities of planning group experiences in Thailand.
            </p>

            <p className="leading-relaxed mb-6">
              Today, we've grown into Bangkok's most trusted bachelor party planning service, having organized over 500
              unforgettable celebrations. Our team combines international standards with local expertise to deliver
              experiences that exceed expectations while ensuring safety, quality, and seamless execution.
            </p>

            <p className="leading-relaxed">
              Every bachelor party is unique, and we pride ourselves on creating personalized experiences that reflect
              your group's personality and preferences. From wild nights out to cultural adventures, we make sure your
              Bangkok bachelor party becomes the stuff of legends.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure every bachelor party we plan meets our high standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team brings together international experience and local expertise to create exceptional
              bachelor party experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Bangkok Bach?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-white">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="text-blue-100">500+ successful bachelor parties with a 4.9-star average rating</p>
            </div>
            <div className="text-white">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Access</h3>
              <p className="text-blue-100">VIP access to Bangkok's best venues and experiences</p>
            </div>
            <div className="text-white">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Complete Peace of Mind</h3>
              <p className="text-blue-100">24/7 support, safety protocols, and comprehensive insurance</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                View Our Packages
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
