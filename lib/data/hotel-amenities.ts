import {
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Waves,
  Coffee,
  Phone,
  Shield,
  Users,
  Briefcase,
  Heart,
  Zap,
  MapPin,
  Clock,
  CreditCard,
  Baby,
  ShipWheelIcon as Wheelchair,
  CigaretteIcon as Smoking,
  PawPrint,
  Bed,
  Bath,
  AirVent,
  Tv,
  Volume2,
  Refrigerator,
  Shirt,
  Plane,
  ShoppingBag,
  Sparkles,
  Award,
  Star,
  CigaretteIcon as Smoking,
} from "lucide-react"

export interface AmenityCategory {
  id: string
  name: string
  description: string
  icon: any
  amenities: Amenity[]
}

export interface Amenity {
  id: string
  name: string
  description: string
  icon: any
  category: string
  isPopular: boolean
  isPremium: boolean
  searchTerms: string[]
}

// General Amenities
export const generalAmenities: Amenity[] = [
  {
    id: "wifi",
    name: "Free WiFi",
    description: "Complimentary high-speed wireless internet throughout the property",
    icon: Wifi,
    category: "general",
    isPopular: true,
    isPremium: false,
    searchTerms: ["wifi", "internet", "wireless", "connection"],
  },
  {
    id: "24-hour-front-desk",
    name: "24-Hour Front Desk",
    description: "Round-the-clock reception and guest services",
    icon: Clock,
    category: "general",
    isPopular: true,
    isPremium: false,
    searchTerms: ["front desk", "24 hour", "reception", "check-in"],
  },
  {
    id: "concierge",
    name: "Concierge Service",
    description: "Professional concierge assistance for reservations and recommendations",
    icon: Users,
    category: "general",
    isPopular: true,
    isPremium: true,
    searchTerms: ["concierge", "assistance", "recommendations", "bookings"],
  },
  {
    id: "luggage-storage",
    name: "Luggage Storage",
    description: "Secure luggage storage before check-in and after check-out",
    icon: ShoppingBag,
    category: "general",
    isPopular: false,
    isPremium: false,
    searchTerms: ["luggage", "storage", "bags", "secure"],
  },
  {
    id: "currency-exchange",
    name: "Currency Exchange",
    description: "On-site currency exchange services",
    icon: CreditCard,
    category: "general",
    isPopular: false,
    isPremium: false,
    searchTerms: ["currency", "exchange", "money", "forex"],
  },
  {
    id: "atm",
    name: "ATM",
    description: "Automated teller machine on property",
    icon: CreditCard,
    category: "general",
    isPopular: false,
    isPremium: false,
    searchTerms: ["atm", "cash", "money", "withdrawal"],
  },
]

// Connectivity Amenities
export const connectivityAmenities: Amenity[] = [
  {
    id: "high-speed-internet",
    name: "High-Speed Internet",
    description: "Premium high-speed internet connection",
    icon: Zap,
    category: "connectivity",
    isPopular: true,
    isPremium: true,
    searchTerms: ["high speed", "internet", "fast", "broadband"],
  },
  {
    id: "business-center",
    name: "Business Center",
    description: "Fully equipped business center with computers and printing",
    icon: Briefcase,
    category: "connectivity",
    isPopular: false,
    isPremium: false,
    searchTerms: ["business center", "computers", "printing", "office"],
  },
  {
    id: "mobile-check-in",
    name: "Mobile Check-in",
    description: "Convenient mobile check-in and check-out",
    icon: Phone,
    category: "connectivity",
    isPopular: true,
    isPremium: false,
    searchTerms: ["mobile", "check-in", "app", "digital"],
  },
]

// Recreation & Wellness Amenities
export const recreationWellnessAmenities: Amenity[] = [
  {
    id: "outdoor-pool",
    name: "Outdoor Pool",
    description: "Beautiful outdoor swimming pool with city views",
    icon: Waves,
    category: "recreation",
    isPopular: true,
    isPremium: false,
    searchTerms: ["pool", "swimming", "outdoor", "water"],
  },
  {
    id: "fitness-center",
    name: "Fitness Center",
    description: "Modern fitness center with state-of-the-art equipment",
    icon: Dumbbell,
    category: "recreation",
    isPopular: true,
    isPremium: false,
    searchTerms: ["fitness", "gym", "exercise", "workout"],
  },
  {
    id: "spa",
    name: "Spa Services",
    description: "Full-service spa with massage and wellness treatments",
    icon: Heart,
    category: "wellness",
    isPopular: true,
    isPremium: true,
    searchTerms: ["spa", "massage", "wellness", "relaxation"],
  },
  {
    id: "sauna",
    name: "Sauna",
    description: "Traditional sauna for relaxation and wellness",
    icon: Sparkles,
    category: "wellness",
    isPopular: false,
    isPremium: true,
    searchTerms: ["sauna", "steam", "wellness", "relaxation"],
  },
  {
    id: "steam-room",
    name: "Steam Room",
    description: "Rejuvenating steam room facilities",
    icon: Sparkles,
    category: "wellness",
    isPopular: false,
    isPremium: true,
    searchTerms: ["steam room", "steam", "wellness", "spa"],
  },
  {
    id: "yoga-classes",
    name: "Yoga Classes",
    description: "Regular yoga and meditation classes",
    icon: Heart,
    category: "wellness",
    isPopular: false,
    isPremium: true,
    searchTerms: ["yoga", "meditation", "classes", "wellness"],
  },
  {
    id: "tennis-court",
    name: "Tennis Court",
    description: "Professional tennis court facilities",
    icon: Award,
    category: "recreation",
    isPopular: false,
    isPremium: true,
    searchTerms: ["tennis", "court", "sports", "recreation"],
  },
]

// Dining & Bar Amenities
export const diningBarAmenities: Amenity[] = [
  {
    id: "restaurant",
    name: "Restaurant",
    description: "On-site restaurant with international cuisine",
    icon: Utensils,
    category: "dining",
    isPopular: true,
    isPremium: false,
    searchTerms: ["restaurant", "dining", "food", "cuisine"],
  },
  {
    id: "bar",
    name: "Bar",
    description: "Stylish bar with premium cocktails and beverages",
    icon: Coffee,
    category: "dining",
    isPopular: true,
    isPremium: false,
    searchTerms: ["bar", "cocktails", "drinks", "beverages"],
  },
  {
    id: "room-service",
    name: "24-Hour Room Service",
    description: "Round-the-clock in-room dining service",
    icon: Utensils,
    category: "dining",
    isPopular: true,
    isPremium: true,
    searchTerms: ["room service", "24 hour", "dining", "food delivery"],
  },
  {
    id: "coffee-shop",
    name: "Coffee Shop",
    description: "Casual coffee shop with light meals and beverages",
    icon: Coffee,
    category: "dining",
    isPopular: false,
    isPremium: false,
    searchTerms: ["coffee", "cafe", "light meals", "beverages"],
  },
  {
    id: "rooftop-bar",
    name: "Rooftop Bar",
    description: "Spectacular rooftop bar with panoramic city views",
    icon: Star,
    category: "dining",
    isPopular: true,
    isPremium: true,
    searchTerms: ["rooftop", "bar", "views", "skyline", "cocktails"],
  },
]

// Business Services Amenities
export const businessServicesAmenities: Amenity[] = [
  {
    id: "meeting-rooms",
    name: "Meeting Rooms",
    description: "Professional meeting rooms with AV equipment",
    icon: Briefcase,
    category: "business",
    isPopular: false,
    isPremium: false,
    searchTerms: ["meeting rooms", "conference", "business", "events"],
  },
  {
    id: "conference-facilities",
    name: "Conference Facilities",
    description: "Large conference facilities for events and meetings",
    icon: Users,
    category: "business",
    isPopular: false,
    isPremium: true,
    searchTerms: ["conference", "events", "meetings", "facilities"],
  },
  {
    id: "secretarial-services",
    name: "Secretarial Services",
    description: "Professional secretarial and administrative support",
    icon: Briefcase,
    category: "business",
    isPopular: false,
    isPremium: true,
    searchTerms: ["secretarial", "administrative", "support", "business"],
  },
  {
    id: "executive-lounge",
    name: "Executive Lounge",
    description: "Exclusive lounge for business travelers with complimentary refreshments",
    icon: Star,
    category: "business",
    isPopular: true,
    isPremium: true,
    searchTerms: ["executive lounge", "business", "exclusive", "refreshments"],
  },
]

// Transportation Amenities
export const transportationAmenities: Amenity[] = [
  {
    id: "airport-shuttle",
    name: "Airport Shuttle",
    description: "Complimentary shuttle service to and from the airport",
    icon: Plane,
    category: "transportation",
    isPopular: true,
    isPremium: false,
    searchTerms: ["airport shuttle", "transportation", "transfer", "pickup"],
  },
  {
    id: "valet-parking",
    name: "Valet Parking",
    description: "Professional valet parking service",
    icon: Car,
    category: "transportation",
    isPopular: false,
    isPremium: true,
    searchTerms: ["valet", "parking", "car", "service"],
  },
  {
    id: "car-rental",
    name: "Car Rental",
    description: "On-site car rental services",
    icon: Car,
    category: "transportation",
    isPopular: false,
    isPremium: false,
    searchTerms: ["car rental", "vehicle", "transportation", "hire"],
  },
  {
    id: "limousine-service",
    name: "Limousine Service",
    description: "Luxury limousine transportation service",
    icon: Car,
    category: "transportation",
    isPopular: false,
    isPremium: true,
    searchTerms: ["limousine", "luxury", "transportation", "chauffeur"],
  },
]

// Room Amenities
export const roomAmenities: Amenity[] = [
  {
    id: "air-conditioning",
    name: "Air Conditioning",
    description: "Individual climate control in all rooms",
    icon: AirVent,
    category: "room",
    isPopular: true,
    isPremium: false,
    searchTerms: ["air conditioning", "ac", "climate", "cooling"],
  },
  {
    id: "flat-screen-tv",
    name: "Flat-Screen TV",
    description: "Large flat-screen television with cable channels",
    icon: Tv,
    category: "room",
    isPopular: true,
    isPremium: false,
    searchTerms: ["tv", "television", "flat screen", "cable"],
  },
  {
    id: "mini-bar",
    name: "Mini Bar",
    description: "Well-stocked mini bar with beverages and snacks",
    icon: Refrigerator,
    category: "room",
    isPopular: true,
    isPremium: false,
    searchTerms: ["mini bar", "minibar", "drinks", "snacks"],
  },
  {
    id: "safe",
    name: "In-Room Safe",
    description: "Electronic safe for valuables",
    icon: Shield,
    category: "room",
    isPopular: true,
    isPremium: false,
    searchTerms: ["safe", "security", "valuables", "electronic"],
  },
  {
    id: "bathrobe",
    name: "Bathrobes",
    description: "Luxury bathrobes and slippers",
    icon: Shirt,
    category: "room",
    isPopular: false,
    isPremium: true,
    searchTerms: ["bathrobe", "robe", "slippers", "luxury"],
  },
  {
    id: "marble-bathroom",
    name: "Marble Bathroom",
    description: "Elegant marble bathroom with premium fixtures",
    icon: Bath,
    category: "room",
    isPopular: false,
    isPremium: true,
    searchTerms: ["marble", "bathroom", "luxury", "premium"],
  },
  {
    id: "nespresso-machine",
    name: "Nespresso Machine",
    description: "In-room Nespresso coffee machine",
    icon: Coffee,
    category: "room",
    isPopular: false,
    isPremium: true,
    searchTerms: ["nespresso", "coffee", "machine", "premium"],
  },
  {
    id: "sound-system",
    name: "Premium Sound System",
    description: "High-quality audio system with Bluetooth connectivity",
    icon: Volume2,
    category: "room",
    isPopular: false,
    isPremium: true,
    searchTerms: ["sound system", "audio", "bluetooth", "music"],
  },
]

// Family Services Amenities
export const familyServicesAmenities: Amenity[] = [
  {
    id: "babysitting",
    name: "Babysitting Service",
    description: "Professional babysitting services available",
    icon: Baby,
    category: "family",
    isPopular: false,
    isPremium: true,
    searchTerms: ["babysitting", "childcare", "kids", "family"],
  },
  {
    id: "kids-club",
    name: "Kids Club",
    description: "Supervised activities and entertainment for children",
    icon: Baby,
    category: "family",
    isPopular: false,
    isPremium: false,
    searchTerms: ["kids club", "children", "activities", "family"],
  },
  {
    id: "family-rooms",
    name: "Family Rooms",
    description: "Spacious rooms designed for families",
    icon: Users,
    category: "family",
    isPopular: false,
    isPremium: false,
    searchTerms: ["family rooms", "spacious", "children", "family"],
  },
]

// Accessibility Amenities
export const accessibilityAmenities: Amenity[] = [
  {
    id: "wheelchair-accessible",
    name: "Wheelchair Accessible",
    description: "Fully wheelchair accessible facilities",
    icon: Wheelchair,
    category: "accessibility",
    isPopular: false,
    isPremium: false,
    searchTerms: ["wheelchair", "accessible", "disability", "mobility"],
  },
  {
    id: "accessible-parking",
    name: "Accessible Parking",
    description: "Designated accessible parking spaces",
    icon: Car,
    category: "accessibility",
    isPopular: false,
    isPremium: false,
    searchTerms: ["accessible parking", "disability", "parking", "mobility"],
  },
  {
    id: "hearing-impaired-services",
    name: "Hearing Impaired Services",
    description: "Services and facilities for hearing impaired guests",
    icon: Volume2,
    category: "accessibility",
    isPopular: false,
    isPremium: false,
    searchTerms: ["hearing impaired", "deaf", "accessibility", "services"],
  },
  {
    id: "visual-impaired-services",
    name: "Visual Impaired Services",
    description: "Services and facilities for visually impaired guests",
    icon: MapPin,
    category: "accessibility",
    isPopular: false,
    isPremium: false,
    searchTerms: ["visual impaired", "blind", "accessibility", "services"],
  },
]

// Policies Amenities
export const policiesAmenities: Amenity[] = [
  {
    id: "smoking-rooms",
    name: "Smoking Rooms",
    description: "Designated smoking rooms available",
    icon: Smoking,
    category: "policies",
    isPopular: false,
    isPremium: false,
    searchTerms: ["smoking", "cigarettes", "tobacco", "designated"],
  },
  {
    id: "non-smoking",
    name: "Non-Smoking Property",
    description: "Completely smoke-free environment",
    icon: SmokingBan,
    category: "policies",
    isPopular: true,
    isPremium: false,
    searchTerms: ["non-smoking", "smoke-free", "no smoking", "clean air"],
  },
  {
    id: "pet-friendly",
    name: "Pet Friendly",
    description: "Pets welcome with restrictions",
    icon: PawPrint,
    category: "policies",
    isPopular: false,
    isPremium: false,
    searchTerms: ["pet friendly", "pets", "dogs", "cats", "animals"],
  },
  {
    id: "no-pets",
    name: "No Pets Allowed",
    description: "Pets are not permitted",
    icon: PawPrint,
    category: "policies",
    isPopular: false,
    isPremium: false,
    searchTerms: ["no pets", "pets not allowed", "no animals"],
  },
]

// Combine all amenities
export const allAmenities: Amenity[] = [
  ...generalAmenities,
  ...connectivityAmenities,
  ...recreationWellnessAmenities,
  ...diningBarAmenities,
  ...businessServicesAmenities,
  ...transportationAmenities,
  ...roomAmenities,
  ...familyServicesAmenities,
  ...accessibilityAmenities,
  ...policiesAmenities,
]

// Amenity categories
export const amenityCategories: AmenityCategory[] = [
  {
    id: "general",
    name: "General",
    description: "Basic hotel services and facilities",
    icon: Star,
    amenities: generalAmenities,
  },
  {
    id: "connectivity",
    name: "Connectivity",
    description: "Internet and business connectivity",
    icon: Wifi,
    amenities: connectivityAmenities,
  },
  {
    id: "recreation",
    name: "Recreation & Wellness",
    description: "Fitness, spa, and recreational facilities",
    icon: Dumbbell,
    amenities: recreationWellnessAmenities,
  },
  {
    id: "dining",
    name: "Dining & Bar",
    description: "Restaurant, bar, and food services",
    icon: Utensils,
    amenities: diningBarAmenities,
  },
  {
    id: "business",
    name: "Business Services",
    description: "Meeting rooms and business facilities",
    icon: Briefcase,
    amenities: businessServicesAmenities,
  },
  {
    id: "transportation",
    name: "Transportation",
    description: "Airport transfers and parking",
    icon: Car,
    amenities: transportationAmenities,
  },
  {
    id: "room",
    name: "Room Amenities",
    description: "In-room facilities and features",
    icon: Bed,
    amenities: roomAmenities,
  },
  {
    id: "family",
    name: "Family Services",
    description: "Services for families with children",
    icon: Baby,
    amenities: familyServicesAmenities,
  },
  {
    id: "accessibility",
    name: "Accessibility",
    description: "Accessible facilities and services",
    icon: Wheelchair,
    amenities: accessibilityAmenities,
  },
  {
    id: "policies",
    name: "Policies",
    description: "Hotel policies and restrictions",
    icon: Shield,
    amenities: policiesAmenities,
  },
]

// Helper functions
export function getAmenityById(id: string): Amenity | undefined {
  return allAmenities.find((amenity) => amenity.id === id)
}

export function getAmenitiesByCategory(categoryId: string): Amenity[] {
  return allAmenities.filter((amenity) => amenity.category === categoryId)
}

export function getPopularAmenities(): Amenity[] {
  return allAmenities.filter((amenity) => amenity.isPopular)
}

export function getPremiumAmenities(): Amenity[] {
  return allAmenities.filter((amenity) => amenity.isPremium)
}

export function searchAmenities(query: string): Amenity[] {
  const lowercaseQuery = query.toLowerCase()
  return allAmenities.filter(
    (amenity) =>
      amenity.name.toLowerCase().includes(lowercaseQuery) ||
      amenity.description.toLowerCase().includes(lowercaseQuery) ||
      amenity.searchTerms.some((term) => term.toLowerCase().includes(lowercaseQuery)),
  )
}

export function getAmenityIcon(amenityId: string): any {
  const amenity = getAmenityById(amenityId)
  return amenity?.icon || Star
}

export function formatAmenityList(amenityIds: string[]): string[] {
  return amenityIds
    .map((id) => getAmenityById(id))
    .filter(Boolean)
    .map((amenity) => amenity!.name)
}

export function getAmenityFilters(): { [key: string]: string[] } {
  const filters: { [key: string]: string[] } = {}

  amenityCategories.forEach((category) => {
    filters[category.name] = category.amenities.map((amenity) => amenity.id)
  })

  return filters
}

// Export default amenity mapping for easy use
export const amenityIconMap: { [key: string]: any } = {
  wifi: Wifi,
  pool: Waves,
  gym: Dumbbell,
  spa: Heart,
  restaurant: Utensils,
  bar: Coffee,
  parking: Car,
  "airport-shuttle": Plane,
  "business-center": Briefcase,
  concierge: Users,
  "room-service": Utensils,
  "air-conditioning": AirVent,
  tv: Tv,
  "mini-bar": Refrigerator,
  safe: Shield,
  laundry: Shirt,
  "wheelchair-accessible": Wheelchair,
  "pet-friendly": PawPrint,
  "non-smoking": SmokingBan,
}
