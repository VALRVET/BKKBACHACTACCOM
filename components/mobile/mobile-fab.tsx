"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Phone, MessageCircle, Calendar, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { MobileBottomSheet } from "./mobile-bottom-sheet"

export function MobileFAB() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showContactSheet, setShowContactSheet] = useState(false)

  const fabActions = [
    {
      icon: Phone,
      label: "Call Us",
      action: () => window.open("tel:+66-2-123-4567", "_self"),
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: MessageCircle,
      label: "Live Chat",
      action: () => setShowContactSheet(true),
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: Calendar,
      label: "Book Now",
      action: () => window.open("/packages", "_self"),
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ]

  return (
    <>
      <div className="md:hidden fixed bottom-20 right-4 z-30">
        {/* Expanded Actions */}
        <div
          className={cn(
            "flex flex-col-reverse space-y-reverse space-y-3 mb-3 transition-all duration-300",
            isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
          )}
        >
          {fabActions.map((action, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-black/80 text-white text-sm px-3 py-2 rounded-lg mr-3 whitespace-nowrap">
                {action.label}
              </div>
              <Button
                size="sm"
                className={cn("w-12 h-12 rounded-full shadow-lg", action.color)}
                onClick={() => {
                  action.action()
                  setIsExpanded(false)
                }}
              >
                <action.icon className="h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>

        {/* Main FAB */}
        <Button
          size="lg"
          className={cn(
            "w-14 h-14 rounded-full shadow-lg transition-all duration-300",
            isExpanded ? "bg-red-500 hover:bg-red-600 rotate-45" : "bg-blue-600 hover:bg-blue-700",
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
        </Button>
      </div>

      {/* Contact Bottom Sheet */}
      <MobileBottomSheet isOpen={showContactSheet} onClose={() => setShowContactSheet(false)} title="Contact Us">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-600">We're here to help plan your perfect bachelor party!</p>
          </div>

          <div className="space-y-3">
            <a
              href="tel:+66-2-123-4567"
              className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <Phone className="h-5 w-5 text-green-600 mr-3" />
              <div>
                <div className="font-medium">Call Us</div>
                <div className="text-sm text-gray-600">+66 2 123 4567</div>
              </div>
            </a>

            <a
              href="mailto:info@bangkokbach.com"
              className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <MessageCircle className="h-5 w-5 text-blue-600 mr-3" />
              <div>
                <div className="font-medium">Email Us</div>
                <div className="text-sm text-gray-600">info@bangkokbach.com</div>
              </div>
            </a>

            <button
              onClick={() => {
                // Simulate opening chat widget
                alert("Chat widget would open here")
                setShowContactSheet(false)
              }}
              className="w-full flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <MessageCircle className="h-5 w-5 text-purple-600 mr-3" />
              <div>
                <div className="font-medium">Live Chat</div>
                <div className="text-sm text-gray-600">Available 24/7</div>
              </div>
            </button>
          </div>
        </div>
      </MobileBottomSheet>
    </>
  )
}
