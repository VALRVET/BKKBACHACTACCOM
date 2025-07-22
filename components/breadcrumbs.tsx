"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrentPage?: boolean
}

const routeLabels: Record<string, string> = {
  "": "Home",
  experiences: "Experiences",
  packages: "Packages",
  "build-trip": "Build Your Trip",
  about: "About",
  contact: "Contact",
  auth: "Authentication",
  signin: "Sign In",
  signup: "Sign Up",
  profile: "Profile",
  favorites: "Favorites",
  booking: "Booking",
  search: "Search",
  blog: "Blog",
  help: "Help",
  reviews: "Reviews",
  terms: "Terms of Service",
  privacy: "Privacy Policy",
  cookies: "Cookie Policy",
}

export function Breadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname()

  // Don't show breadcrumbs on home page
  if (pathname === "/") {
    return null
  }

  const pathSegments = pathname.split("/").filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []

  // Add home
  breadcrumbs.push({
    label: "Home",
    href: "/",
  })

  // Build breadcrumb items from path segments
  let currentPath = ""
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === pathSegments.length - 1

    // Handle dynamic routes
    let label = routeLabels[segment] || segment

    // Special handling for dynamic routes
    if (segment.startsWith("[") && segment.endsWith("]")) {
      // This is a dynamic route parameter, use the actual value
      label = decodeURIComponent(segment)
    } else if (!routeLabels[segment]) {
      // Convert kebab-case to title case
      label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    }

    breadcrumbs.push({
      label,
      href: currentPath,
      isCurrentPage: isLast,
    })
  })

  return (
    <nav
      className={cn("flex items-center space-x-1 text-sm text-gray-600 py-2 px-4 sm:px-6 lg:px-8", className)}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}

            {item.isCurrentPage ? (
              <span className="font-medium text-gray-900" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-1 py-0.5"
              >
                {index === 0 ? (
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-1" />
                    <span className="sr-only sm:not-sr-only">{item.label}</span>
                  </div>
                ) : (
                  item.label
                )}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
