"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"
import { useToast } from "@/components/mobile/mobile-toast"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us for immediate assistance",
    value: "+66 2 123 4567",
    action: "tel:+6621234567",
    available: "24/7 Emergency Line",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a detailed message",
    value: "info@bangkokbach.com",
    action: "mailto:info@bangkokbach.com",
    available: "Response within 2 hours",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    value: "Start Chat",
    action: "#",
    available: "Available 9 AM - 11 PM",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit our Bangkok office",
    value: "123 Sukhumvit Road, Bangkok",
    action: "https://maps.google.com",
    available: "Mon-Fri 9 AM - 6 PM",
  },
]

const inquiryTypes = [
  "General Inquiry",
  "Booking Question",
  "Custom Package",
  "Group Booking (10+ people)",
  "Partnership Opportunity",
  "Media Inquiry",
  "Complaint or Feedback",
  "Emergency Support",
]

export default function ContactPage() {
  const { addToast, ToastContainer } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
    groupSize: "",
    travelDate: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      addToast({
        type: "success",
        title: "Message sent!",
        message: "We'll get back to you within 2 hours.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        subject: "",
        message: "",
        groupSize: "",
        travelDate: "",
      })
    } catch (error) {
      addToast({
        type: "error",
        title: "Failed to send",
        message: "Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Have questions about planning your bachelor party? Our expert team is here to help you create the perfect
              experience.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-600 mb-6">
                    Choose the best way to reach us. We're available 24/7 for emergencies and respond to all inquiries
                    promptly.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <method.icon className="h-5 w-5 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-gray-900">{method.title}</h3>
                            <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                            <a
                              href={method.action}
                              className="text-sm font-medium text-blue-600 hover:text-blue-700 block"
                            >
                              {method.value}
                            </a>
                            <Badge variant="secondary" className="mt-2 text-xs">
                              {method.available}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Business Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 mt-2">
                        <span className="text-gray-600">Emergency Line</span>
                        <span className="font-medium text-blue-600">24/7 Available</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="groupSize">Group Size</Label>
                        <Select
                          value={formData.groupSize}
                          onValueChange={(value) => setFormData({ ...formData, groupSize: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select group size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2-4">2-4 people</SelectItem>
                            <SelectItem value="5-8">5-8 people</SelectItem>
                            <SelectItem value="9-12">9-12 people</SelectItem>
                            <SelectItem value="13-20">13-20 people</SelectItem>
                            <SelectItem value="20+">20+ people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="travelDate">Preferred Travel Date</Label>
                        <Input
                          id="travelDate"
                          type="date"
                          value={formData.travelDate}
                          onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Brief subject of your inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your bachelor party plans, preferences, budget, or any specific questions you have..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        id="consent"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-gray-700">
                        I agree to receive communications from Bangkok Bach and understand that I can unsubscribe at any
                        time.
                      </label>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Quick answers to common questions about our services.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "How far in advance should I book?",
                  answer:
                    "We recommend booking at least 2-4 weeks in advance, especially for weekends and peak seasons. However, we can accommodate last-minute bookings based on availability.",
                },
                {
                  question: "What's included in your packages?",
                  answer:
                    "Our packages typically include venue reservations, transportation, activity bookings, and a dedicated concierge. Specific inclusions vary by package - contact us for detailed information.",
                },
                {
                  question: "Do you handle group accommodations?",
                  answer:
                    "Yes! We can arrange accommodations for groups of all sizes, from luxury hotels to private villas. We'll find options that fit your budget and preferences.",
                },
                {
                  question: "What if someone in our group cancels?",
                  answer:
                    "We understand plans change. Our flexible cancellation policy allows for adjustments up to 48 hours before your event. Contact us to discuss your specific situation.",
                },
                {
                  question: "Are your services available 24/7?",
                  answer:
                    "Our emergency support line is available 24/7. Regular customer service operates 9 AM - 11 PM Bangkok time. We also provide on-ground support during your events.",
                },
                {
                  question: "Can you customize packages for dietary restrictions?",
                  answer:
                    "We work with venues and restaurants to accommodate all dietary needs including vegetarian, vegan, halal, kosher, and allergy-specific requirements.",
                },
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed ml-7">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
