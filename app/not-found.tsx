"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Search, Phone } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        <Card className="shadow-lg">
          <CardContent className="p-8 sm:p-12">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="text-8xl sm:text-9xl font-bold text-blue-600 mb-4">404</div>
              <div className="text-4xl mb-4">🏖️</div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Looks like this page went on its own bachelor party adventure! Don't worry, we'll help you get back on
              track to planning the ultimate Bangkok experience.
            </p>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={() => router.back()} variant="outline" className="flex-1 bg-white hover:bg-gray-50">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>

                <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Link href="/">
                    <Home className="h-4 w-4 mr-2" />
                    Home Page
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="flex-1 bg-white hover:bg-gray-50">
                  <Link href="/experiences">
                    <Search className="h-4 w-4 mr-2" />
                    Browse Experiences
                  </Link>
                </Button>

                <Button asChild variant="outline" className="flex-1 bg-white hover:bg-gray-50">
                  <Link href="/contact">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>

            {/* Popular Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Popular Pages</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="/packages" className="text-blue-600 hover:text-blue-700 hover:underline">
                  Packages
                </Link>
                <Link href="/about" className="text-blue-600 hover:text-blue-700 hover:underline">
                  About Us
                </Link>
                <Link href="/build-trip" className="text-blue-600 hover:text-blue-700 hover:underline">
                  Build Your Trip
                </Link>
                <Link href="/help" className="text-blue-600 hover:text-blue-700 hover:underline">
                  Help Center
                </Link>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Need immediate help?</strong>
                <br />
                Call our 24/7 support line:{" "}
                <a href="tel:+66-2-123-4567" className="font-semibold hover:underline">
                  +66 2 123 4567
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
