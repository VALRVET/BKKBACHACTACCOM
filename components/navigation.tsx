"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { MobileSearchOverlay } from "@/components/mobile/mobile-search-overlay"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    name: "Home",
    href: "/",
    mobile: true,
  },
  {
    name: "Experiences",
    href: "/experiences",
    mobile: true,
    children: [
      { name: "All Experiences", href: "/experiences" },
      { name: "Nightlife", href: "/experiences?category=nightlife" },
      { name: "Water Activities", href: "/experiences?category=water" },
      { name: "Dining", href: "/experiences?category=dining" },
      { name: "Adventure", href: "/experiences?category=adventure" },
    ],
  },
  {
    name: "Packages",
    href: "/packages",
    mobile: true,
  },
  {
    name: "Build Your Trip",
    href: "/build-trip",
    mobile: true,
  },
  {
    name: "About",
    href: "/about",
    mobile: false,
  },
  {
    name: "Blog",
    href: "/blog",
    mobile: false,
  },
]

export function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 safe-area-pt">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 lg:space-x-8">
              <Link href="/" className="text-xl sm:text-2xl font-bold">
                <span className="text-blue-600">Bangkok Bach</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.children ? (
                      <div className="flex items-center space-x-1 text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                        <Link href={item.href}>{item.name}</Link>
                        <ChevronDown className="h-4 w-4" />
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          <div className="py-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "text-sm lg:text-base font-medium transition-colors",
                          pathname === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600",
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 cursor-pointer hover:text-blue-600 transition-colors"
              >
                <Search className="h-full w-full" />
              </button>
              <Link href="/auth/signin">
                <Button
                  variant="ghost"
                  className="hidden sm:inline-flex text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm lg:text-base px-3 sm:px-4 lg:px-6">
                  Get Started
                </Button>
              </Link>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      <MobileSearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
