import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { MobileBottomNav } from "@/components/mobile/mobile-bottom-nav"
import { MobileFAB } from "@/components/mobile/mobile-fab"
import { Breadcrumbs } from "@/components/breadcrumbs"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bangkok Bach - Ultimate Bachelor Party Planning",
  description:
    "Discover exclusive venues, thrilling activities, and personalized itineraries for an unforgettable bachelor party celebration in Bangkok.",
  keywords: "Bangkok bachelor party, nightlife, activities, venues, party planning",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <Breadcrumbs />
        <main className="min-h-screen pb-16 md:pb-0">{children}</main>
        <MobileBottomNav />
        <MobileFAB />
      </body>
    </html>
  )
}
