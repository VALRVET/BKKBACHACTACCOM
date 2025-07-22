"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, Search, User, Phone, Mail, MessageCircle } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const closeNav = () => setIsOpen(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">
            <Link href="/" onClick={closeNav} className="text-blue-600 hover:opacity-80 transition-opacity">
              Bangkok Bach
            </Link>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col space-y-2 mt-8" role="navigation" aria-label="Mobile navigation">
          <Link
            href="/"
            onClick={closeNav}
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-3 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Home
          </Link>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="experiences" className="border-none">
              <AccordionTrigger className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-3 px-2 hover:no-underline hover:bg-gray-50 rounded-md">
                Experiences
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <div className="pl-4 space-y-2">
                  <Link
                    href="/experiences"
                    onClick={closeNav}
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    All Experiences
                  </Link>
                  <Link
                    href="/experiences?category=nightlife"
                    onClick={closeNav}
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    🌙 Nightlife
                  </Link>
                  <Link
                    href="/experiences?category=water"
                    onClick={closeNav}
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    🌊 Water Activities
                  </Link>
                  <Link
                    href="/experiences?category=dining"
                    onClick={closeNav}
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    🍽️ Dining
                  </Link>
                  <Link
                    href="/experiences?category=adventure"
                    onClick={closeNav}
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    🏔️ Adventure
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="/packages"
            onClick={closeNav}
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-3 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Packages
          </Link>

          <Link
            href="/build-trip"
            onClick={closeNav}
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-3 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Build Your Trip
          </Link>

          <Link
            href="/about"
            onClick={closeNav}
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-3 px-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            About
          </Link>

          <div className="border-t pt-6 mt-6">
            <div className="space-y-3">
              <Link href="/search" onClick={closeNav}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  <Search className="h-4 w-4 mr-3" />
                  Search Experiences
                </Button>
              </Link>

              <Link href="/auth/signin" onClick={closeNav}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  <User className="h-4 w-4 mr-3" />
                  Sign In
                </Button>
              </Link>

              <Link href="/auth/signup" onClick={closeNav}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
              <div className="space-y-2">
                <a
                  href="tel:+66-2-123-4567"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-3" />
                  <span className="text-sm">+66 2 123 4567</span>
                </a>
                <a
                  href="mailto:info@bangkokbach.com"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-3" />
                  <span className="text-sm">info@bangkokbach.com</span>
                </a>
                <Link
                  href="/contact?tab=chat"
                  onClick={closeNav}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mr-3" />
                  <span className="text-sm">Live Chat</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
