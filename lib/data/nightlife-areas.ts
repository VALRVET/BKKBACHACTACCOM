export interface NightlifeVenue {
  id: string
  name: string
  type:
    | "nightclub"
    | "rooftop_bar"
    | "sports_bar"
    | "cocktail_bar"
    | "beer_bar"
    | "wine_bar"
    | "karaoke"
    | "strip_club"
    | "go_go_bar"
    | "massage_parlor"
    | "live_music"
    | "dance_club"
    | "lounge"
  description: string
  address: string
  coordinates: {
    latitude: number
    longitude: number
  }
  openingHours: {
    monday?: string
    tuesday?: string
    wednesday?: string
    thursday?: string
    friday?: string
    saturday?: string
    sunday?: string
  }
  priceRange: "$" | "$$" | "$$$" | "$$$$"
  rating: number
  totalReviews: number
  features: string[]
  musicGenre?: string[]
  dressCode: string
  ageRestriction: string
  coverCharge?: {
    weekday: number
    weekend: number
    currency: string
  }
  specialties: string[]
  atmosphere: string[]
  bestTimeToVisit: string
  phoneNumber?: string
  website?: string
  socialMedia?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
  images: string[]
  isPopular: boolean
  isTouristFriendly: boolean
  hasEnglishSpeakingStaff: boolean
  acceptsCreditCards: boolean
  hasVipArea: boolean
  hasPrivateRooms: boolean
  hasOutdoorSeating: boolean
  smokingAllowed: boolean
  lastUpdated: string
}

export interface NightlifeArea {
  id: string
  name: string
  description: string
  district: string
  coordinates: {
    latitude: number
    longitude: number
  }
  characteristics: string[]
  bestFor: string[]
  transportationOptions: string[]
  safetyRating: number
  touristFriendliness: number
  priceLevel: "$" | "$$" | "$$$" | "$$$$"
  peakHours: string
  venues: NightlifeVenue[]
  nearbyHotels: string[]
  walkingRadius: number // in meters
  averageUberCost: {
    fromSukhumvit: number
    fromSilom: number
    fromKhaoSan: number
    currency: string
  }
}

// Sukhumvit-Asoke Area
export const sukhumvitAsoke: NightlifeArea = {
  id: "sukhumvit-asoke",
  name: "Sukhumvit-Asoke",
  description:
    "The heart of Bangkok's upscale nightlife scene with world-class rooftop bars, exclusive nightclubs, and sophisticated lounges.",
  district: "Sukhumvit",
  coordinates: {
    latitude: 13.7563,
    longitude: 100.5602,
  },
  characteristics: ["Upscale", "International crowd", "High-end venues", "Rooftop bars", "Late night dining"],
  bestFor: ["Bachelor parties", "VIP experiences", "Rooftop cocktails", "International nightlife", "Luxury venues"],
  transportationOptions: ["BTS Asoke", "MRT Sukhumvit", "Taxi", "Grab", "Tuk-tuk"],
  safetyRating: 9,
  touristFriendliness: 9,
  priceLevel: "$$$",
  peakHours: "10:00 PM - 2:00 AM",
  venues: [
    {
      id: "levels-club",
      name: "Levels Club & Lounge",
      type: "nightclub",
      description: "Bangkok's premier nightclub with multiple floors, international DJs, and VIP bottle service.",
      address: "Aloft Bangkok Sukhumvit 11, 35 Sukhumvit Soi 11",
      coordinates: { latitude: 13.7547, longitude: 100.5588 },
      openingHours: {
        wednesday: "9:00 PM - 2:00 AM",
        thursday: "9:00 PM - 2:00 AM",
        friday: "9:00 PM - 3:00 AM",
        saturday: "9:00 PM - 3:00 AM",
        sunday: "9:00 PM - 2:00 AM",
      },
      priceRange: "$$$",
      rating: 4.3,
      totalReviews: 1247,
      features: ["VIP Tables", "International DJs", "Multiple Floors", "Bottle Service", "Dance Floor"],
      musicGenre: ["EDM", "House", "Hip Hop", "Commercial"],
      dressCode: "Smart Casual - No shorts, flip-flops, or tank tops",
      ageRestriction: "20+",
      coverCharge: { weekday: 500, weekend: 800, currency: "THB" },
      specialties: ["Bottle service packages", "VIP table bookings", "International DJ sets"],
      atmosphere: ["Energetic", "International", "Upscale", "Party"],
      bestTimeToVisit: "Friday and Saturday after 11 PM",
      phoneNumber: "+66 2 207 7000",
      website: "https://levelsclub.com",
      socialMedia: {
        facebook: "https://facebook.com/levelsclub",
        instagram: "https://instagram.com/levelsclub",
      },
      images: [
        "/placeholder.svg?height=300&width=400&text=Levels+Club+Interior",
        "/placeholder.svg?height=300&width=400&text=Levels+Dance+Floor",
        "/placeholder.svg?height=300&width=400&text=Levels+VIP+Area",
      ],
      isPopular: true,
      isTouristFriendly: true,
      hasEnglishSpeakingStaff: true,
      acceptsCreditCards: true,
      hasVipArea: true,
      hasPrivateRooms: true,
      hasOutdoorSeating: false,
      smokingAllowed: false,
      lastUpdated: "2024-01-20T10:00:00Z",
    },
    {
      id: "octave-rooftop-bar",
      name: "Octave Rooftop Lounge & Bar",
      type: "rooftop_bar",
      description: "Stunning 360-degree views of Bangkok skyline from the 45th-49th floors with premium cocktails.",
      address: "Marriott Hotel Sukhumvit, 2 Sukhumvit Soi 57",
      coordinates: { latitude: 13.7308, longitude: 100.5693 },
      openingHours: {
        monday: "5:00 PM - 1:00 AM",
        tuesday: "5:00 PM - 1:00 AM",
        wednesday: "5:00 PM - 1:00 AM",
        thursday: "5:00 PM - 1:00 AM",
        friday: "5:00 PM - 2:00 AM",
        saturday: "5:00 PM - 2:00 AM",
        sunday: "5:00 PM - 1:00 AM",
      },
      priceRange: "$$$$",
      rating: 4.6,
      totalReviews: 2156,
      features: ["360° City Views", "Premium Cocktails", "Multiple Levels", "Outdoor Terrace", "Live DJ"],
      musicGenre: ["Lounge", "Deep House", "Chill Out"],
      dressCode: "Smart Casual - No shorts or flip-flops",
      ageRestriction: "21+",
      specialties: ["Signature cocktails", "Sunset views", "Private events"],
      atmosphere: ["Sophisticated", "Romantic", "Upscale", "Scenic"],
      bestTimeToVisit: "Sunset hours (6-8 PM) and weekends",
      phoneNumber: "+66 2 797 0000",
      website: "https://octavebangkok.com",
      socialMedia: {
        facebook: "https://facebook.com/octavebangkok",
        instagram: "https://instagram.com/octavebangkok",
      },
      images: [
        "/placeholder.svg?height=300&width=400&text=Octave+Skyline+View",
        "/placeholder.svg?height=300&width=400&text=Octave+Cocktails",
        "/placeholder.svg?height=300&width=400&text=Octave+Terrace",
      ],
      isPopular: true,
      isTouristFriendly: true,
      hasEnglishSpeakingStaff: true,
      acceptsCreditCards: true,
      hasVipArea: true,
      hasPrivateRooms: false,
      hasOutdoorSeating: true,
      smokingAllowed: true,
      lastUpdated: "2024-01-20T10:00:00Z",
    },
    {
      id: "insanity-nightclub",
      name: "Insanity Nightclub",
      type: "nightclub",
      description:
        "High-energy nightclub with world-renowned DJs, state-of-the-art sound system, and spectacular light shows.",
      address: "9/4-5 Sukhumvit Soi 11",
      coordinates: { latitude: 13.7545, longitude: 100.559 },
      openingHours: {
        wednesday: "10:00 PM - 3:00 AM",
        thursday: "10:00 PM - 3:00 AM",
        friday: "10:00 PM - 4:00 AM",
        saturday: "10:00 PM - 4:00 AM",
      },
      priceRange: "$$$",
      rating: 4.2,
      totalReviews: 987,
      features: ["International DJs", "LED Light Shows", "VIP Booths", "Premium Sound System", "Dance Podiums"],
      musicGenre: ["EDM", "Progressive House", "Trance", "Techno"],
      dressCode: "Upscale - No shorts, sandals, or sportswear",
      ageRestriction: "20+",
      coverCharge: { weekday: 600, weekend: 1000, currency: "THB" },
      specialties: ["International DJ performances", "VIP bottle service", "Private booth reservations"],
      atmosphere: ["High-energy", "Electronic", "International", "Party"],
      bestTimeToVisit: "Friday and Saturday after midnight",
      phoneNumber: "+66 2 651 0111",
      images: [
        "/placeholder.svg?height=300&width=400&text=Insanity+Dance+Floor",
        "/placeholder.svg?height=300&width=400&text=Insanity+Light+Show",
        "/placeholder.svg?height=300&width=400&text=Insanity+VIP+Area",
      ],
      isPopular: true,
      isTouristFriendly: true,
      hasEnglishSpeakingStaff: true,
      acceptsCreditCards: true,
      hasVipArea: true,
      hasPrivateRooms: false,
      hasOutdoorSeating: false,
      smokingAllowed: false,
      lastUpdated: "2024-01-20T10:00:00Z",
    },
  ],
  nearbyHotels: ["westin-grande-sukhumvit", "conrad-bangkok", "marriott-marquis"],
  walkingRadius: 800,
  averageUberCost: {
    fromSukhumvit: 0,
    fromSilom: 120,
    fromKhaoSan: 180,
    currency: "THB",
  },
}

// Silom-Sathorn Area
export const silomSathorn: NightlifeArea = {
  id: "silom-sathorn",
  name: "Silom-Sathorn",
  description:
    "Bangkok's financial district transforms into a sophisticated nightlife destination with world-famous sky bars and upscale venues.",
  district: "Silom",
  coordinates: {
    latitude: 13.7248,
    longitude: 100.5291,
  },
  characteristics: ["Sky bars", "Sophisticated venues", "Business crowd", "High-end cocktails", "Scenic views"],
  bestFor: [
    "Sky bar experiences",
    "Business entertainment",
    "Sophisticated dining",
    "Cocktail culture",
    "Scenic nightlife",
  ],
  transportationOptions: ["BTS Sala Daeng", "MRT Silom", "BTS Saphan Taksin", "Taxi", "Grab"],
  safetyRating: 9,
  touristFriendliness: 8,
  priceLevel: "$$$$",
  peakHours: "7:00 PM - 1:00 AM",
  venues: [
    {
      id: "sky-bar-lebua",
      name: "Sky Bar at lebua",
      type: "rooftop_bar",
      description: "World-famous rooftop bar on the 63rd floor, featured in The Hangover Part II movie.",
      address: "lebua at State Tower, 1055 Silom Road",
      coordinates: { latitude: 13.7196, longitude: 100.5157 },
      openingHours: {
        monday: "6:00 PM - 1:00 AM",
        tuesday: "6:00 PM - 1:00 AM",
        wednesday: "6:00 PM - 1:00 AM",
        thursday: "6:00 PM - 1:00 AM",
        friday: "6:00 PM - 1:00 AM",
        saturday: "6:00 PM - 1:00 AM",
        sunday: "6:00 PM - 1:00 AM",
      },
      priceRange: "$$$$",
      rating: 4.8,
      totalReviews: 3421,
      features: ["63rd Floor Views", "Hangover Movie Fame", "Premium Cocktails", "Open-air Bar", "Dress Code Enforced"],
      dressCode: "Smart Casual - Long pants and closed shoes required",
      ageRestriction: "21+",
      specialties: ["Hangovertini cocktail", "Sunset views", "Movie location"],
      atmosphere: ["Iconic", "Sophisticated", "Romantic", "World-famous"],
      bestTimeToVisit: "Sunset hours and early evening",
      phoneNumber: "+66 2 624 9999",
      website: "https://lebua.com/sky-bar",
      socialMedia: {
        facebook: "https://facebook.com/lebuahotels",
        instagram: "https://instagram.com/lebuahotels",
      },
      images: [
        "/placeholder.svg?height=300&width=400&text=Sky+Bar+View",
        "/placeholder.svg?height=300&width=400&text=Sky+Bar+Cocktails",
        "/placeholder.svg?height=300&width=400&text=Sky+Bar+Sunset",
      ],
      isPopular: true,
      isTouristFriendly: true,
      hasEnglishSpeakingStaff: true,
      acceptsCreditCards: true,
      hasVipArea: false,
      hasPrivateRooms: false,
      hasOutdoorSeating: true,
      smokingAllowed: false,
      lastUpdated: "2024-01-20T10:00:00Z",
    },
    {
      id: "vertigo-moon-bar",
      name: "Vertigo & Moon Bar",
      type: "rooftop_bar",
      description:
        "Stunning rooftop restaurant and bar on the 61st floor of Banyan Tree Bangkok with panoramic city views.",
      address: "Banyan Tree Bangkok, 21/100 South Sathorn Road",
      coordinates: { latitude: 13.7196, longitude: 100.5267 },
      openingHours: {
        monday: "5:00 PM - 1:00 AM",
        tuesday: "5:00 PM - 1:00 AM",
        wednesday: "5:00 PM - 1:00 AM",
        thursday: "5:00 PM - 1:00 AM",
        friday: "5:00 PM - 1:00 AM",
        saturday: "5:00 PM - 1:00 AM",
        sunday: "5:00 PM - 1:00 AM",
      },
      priceRange: "$$$$",
      rating: 4.7,
      totalReviews: 2876,
      features: ["61st Floor Views", "Fine Dining", "Premium Cocktails", "Open-air Setting", "Romantic Atmosphere"],
      dressCode: "Smart Casual - No shorts, flip-flops, or sleeveless shirts",
      ageRestriction: "18+",
      specialties: ["Gourmet dining", "Craft cocktails", "Romantic setting"],
      atmosphere: ["Romantic", "Upscale", "Intimate", "Scenic"],
      bestTimeToVisit: "Dinner time and sunset hours",
      phoneNumber: "+66 2 679 1200",
      website: "https://banyantree.com/thailand/bangkok/dining/vertigo-moon-bar",
      images: [
        "/placeholder.svg?height=300&width=400&text=Vertigo+Dining",
        "/placeholder.svg?height=300&width=400&text=Moon+Bar+View",
        "/placeholder.svg?height=300&width=400&text=Vertigo+Sunset",
      ],
      isPopular: true,
      isTouristFriendly: true,
      hasEnglishSpeakingStaff: true,
      acceptsCreditCards: true,
      hasVipArea: true,
      hasPrivateRooms: false,
      hasOutdoorSeating: true,
      smokingAllowed: false,
      lastUpdated: "2024-01-20T10:00:00Z",
    },
  ],
  nearbyHotels: ["lebua-state-tower", "banyan-tree-bangkok", "pullman-bangkok-king-power"],
  walkingRadius: 600,
  averageUberCost: {
    fromSukhumvit: 120,
    fromSilom: 0,
    fromKhaoSan: 150,
    currency: "THB",
  },
}

// Thonglor Area
export const thonglor: NightlifeArea = {
  id: "thonglor",
  name: "Thonglor",
  description: "Bangkok's trendy neighborhood known for its hip bars, craft cocktails, and local celebrity hangouts.",
  district: "Sukhumvit",
  coordinates: {
    latitude: 13.7308,
    longitude: 100.5693,
  },
  characteristics: ["Trendy", "Local celebrities", "Craft cocktails", "Hip venues", "Late night dining"],
  bestFor: ["Trendy nightlife", "Craft cocktails", "Local scene", "Hip bars", "Celebrity spotting"],
  transportationOptions: ["BTS Thong Lo", "Taxi", "Grab", "Motorcycle taxi"],
  safetyRating: 8,
  touristFriendliness: 7,
  priceLevel: "$$$",
  peakHours: "9:00 PM - 2:00 AM",
  venues: [
    {
      id: "beam-club",
      name: "Beam Club",
      type: "nightclub",
      description:
        "Exclusive nightclub popular with Thai celebrities and socialites, known for its sophisticated atmosphere.",
      address: "72 Sukhumvit Soi 55 (Thonglor)",
      coordinates: { latitude: 13.7308, longitude: 100.5693 },
      openingHours: {
        wednesday: "9:00 PM - 2:00 AM",
        thursday: "9:00 PM - 2:00 AM",
        friday: "9:00 PM - 3:00 AM",
        saturday: "9:00 PM - 3:00 AM",
      },
      priceRange: "$$$$",
      rating: 4.4,
      totalReviews: 756,
      features: ["Celebrity Hangout", "VIP Tables", "Premium Bottles", "Exclusive Atmosphere", "Thai Socialites"],
      musicGenre: ["Hip Hop", "R&B", "Commercial", "Thai Pop"],
      dressCode: "Upscale - Designer clothing preferred",
      ageRestriction: "25+",
      specialties: ["Celebrity spotting", "Premium bottle service", "Exclusive events"],
      atmosphere: ["Exclusive", "Sophisticated", "Celebrity", "Upscale"],
      bestTimeToVisit: "Friday and Saturday nights",
      phoneNumber: "+66 2 712 5555",
      images: [
        "/placeholder.svg?height=300&width=400&text=Beam+Club+Interior",
        "/placeholder.svg?height=300&width=400&text=Beam+VIP+Area",
        "/placeholder.svg?height=300&width=400&text=Beam+Bar",
      ],
      isPopular: true,
      isTouristFriendly: false,
      hasEnglishSpeakingStaff: true,
      acceptsCreditCards: true,
      hasVipArea: true,
      hasPrivateRooms: true,
      hasOutdoorSeating: false,
      smokingAllowed: true,
      lastUpdated: "2024-01-20T10:00:00Z",
    },
  ],
  nearbyHotels: ["sukhothai-bangkok", "w-bangkok", "emporium-suites"],
  walkingRadius: 500,
  averageUberCost: {
    fromSukhumvit: 80,
    fromSilom: 150,
    fromKhaoSan: 200,
    currency: "THB",
  },
}

// RCA (Royal City Avenue) Area
export const rca: NightlifeArea = {
  id: "rca",
  name: "RCA (Royal City Avenue)",
  description:
    "Bangkok's club district with massive nightclubs, live music venues, and the city's biggest dance floors.",
  district: "Huai Khwang",
  coordinates: {
    latitude: 13.7563,
    longitude: 100.5602,
  },
  characteristics: ["Massive clubs", "Live music", "Young crowd", "Affordable drinks", "Late night scene"],
  bestFor: ["Big club experiences", "Live music", "Dancing", "Young nightlife", "Budget-friendly"],
  transportationOptions: ["MRT Phetchaburi", "Taxi", "Grab", "Songthaew"],
  safetyRating: 7,
  touristFriendliness: 6,
  priceLevel: "$$",
  peakHours: "11:00 PM - 4:00 AM",
  venues: [
    {
      id: "route-66-club",
      name: "Route 66 Club",
      type: "nightclub",
      description: "One of Bangkok's largest nightclubs with multiple rooms, live bands, and diverse music styles.",
      address: "29/33-48 Royal City Avenue",
      coordinates: { latitude: 13.7563, longitude: 100.5602 },
      openingHours: {
        wednesday: "8:00 PM - 2:00 AM",
        thursday: "8:00 PM - 2:00 AM",
        friday: "8:00 PM - 3:00 AM",
        saturday: "8:00 PM - 3:00 AM",
        sunday: "8:00 PM - 2:00 AM",
      },
      priceRange: "$$",
      rating: 4.1,
      totalReviews: 1543,
      features: ["Multiple Rooms", "Live Bands", "Huge Dance Floor", "Affordable Drinks", "Local Crowd"],
      musicGenre: ["Thai Pop", "Rock", "EDM", "Hip Hop", "Live Music"],
      dressCode: "Casual - No specific dress code",
      ageRestriction: "18+",
      coverCharge: { weekday: 200, weekend: 300, currency: "THB" },
      specialties: ["Live Thai bands", "Large dance floor", "Affordable nightlife"],
      atmosphere: ["Energetic", "Local", "Casual", "Fun"],
      bestTimeToVisit: "Friday and Saturday after 10 PM",
      phoneNumber: "+66 2 203 0406",
      images: [
        "/placeholder.svg?height=300&width=400&text=Route+66+Dance+Floor",
        "/placeholder.svg?height=300&width=400&text=Route+66+Live+Band",
        "/placeholder.svg?height=300&width=400&text=Route+66+Crowd",
      ],
      isPopular: true,
      isTouristFriendly: true,
      hasEnglishSpeakingStaff: false,
      acceptsCreditCards: false,
      hasVipArea: true,
      hasPrivateRooms: false,
      hasOutdoorSeating: false,
      smokingAllowed: true,
      lastUpdated: "2024-01-20T10:00:00Z",
    },
  ],
  nearbyHotels: ["grand-mercure-fortune", "novotel-bangkok-platinum"],
  walkingRadius: 400,
  averageUberCost: {
    fromSukhumvit: 100,
    fromSilom: 120,
    fromKhaoSan: 160,
    currency: "THB",
  },
}

// Khao San Road Area
export const khaoSanRoad: NightlifeArea = {
  id: "khao-san-road",
  name: "Khao San Road",
  description: "The legendary backpacker street with budget bars, street food, and a vibrant international atmosphere.",
  district: "Phra Nakhon",
  coordinates: {
    latitude: 13.759,
    longitude: 100.4977,
  },
  characteristics: ["Backpacker scene", "Budget-friendly", "Street bars", "International crowd", "Casual atmosphere"],
  bestFor: ["Budget nightlife", "Backpacker experience", "Street food", "Casual drinks", "Meeting travelers"],
  transportationOptions: ["Taxi", "Grab", "Tuk-tuk", "Bus", "Walking"],
  safetyRating: 6,
  touristFriendliness: 10,
  priceLevel: "$",
  peakHours: "8:00 PM - 2:00 AM",
  venues: [
    {
      id: "the-club-khao-san",
      name: "The Club Khaosan",
      type: "nightclub",
      description: "Popular nightclub on Khao San Road with affordable drinks and international crowd.",
      address: "123 Khaosan Road",
      coordinates: { latitude: 13.759, longitude: 100.4977 },
      openingHours: {
        monday: "8:00 PM - 2:00 AM",
        tuesday: "8:00 PM - 2:00 AM",
        wednesday: "8:00 PM - 2:00 AM",
        thursday: "8:00 PM - 2:00 AM",
        friday: "8:00 PM - 3:00 AM",
        saturday: "8:00 PM - 3:00 AM",
        sunday: "8:00 PM - 2:00 AM",
      },
      priceRange: "$",
      rating: 3.8,
      totalReviews: 892,
      features: ["Budget Drinks", "International Crowd", "Backpacker Scene", "Casual Atmosphere", "Central Location"],
      musicGenre: ["Pop", "Rock", "Dance", "International Hits"],
      dressCode: "Very Casual - Anything goes",
      ageRestriction: "18+",
      coverCharge: { weekday: 100, weekend: 150, currency: "THB" },
      specialties: ["Bucket drinks", "Backpacker atmosphere", "Budget nightlife"],
      atmosphere: ["Casual", "International", "Budget", "Backpacker"],
      bestTimeToVisit: "Every night after 9 PM",
      images: [
        "/placeholder.svg?height=300&width=400&text=Khao+San+Club",
        "/placeholder.svg?height=300&width=400&text=Khao+San+Bar",
        "/placeholder.svg?height=300&width=400&text=Khao+San+Street",
      ],
      isPopular: true,
      isTouristFriendly: true,
      hasEnglishSpeakingStaff: true,
      acceptsCreditCards: false,
      hasVipArea: false,
      hasPrivateRooms: false,
      hasOutdoorSeating: true,
      smokingAllowed: true,
      lastUpdated: "2024-01-20T10:00:00Z",
    },
  ],
  nearbyHotels: ["buddy-lodge", "villa-cha-cha", "new-siam-riverside"],
  walkingRadius: 300,
  averageUberCost: {
    fromSukhumvit: 180,
    fromSilom: 150,
    fromKhaoSan: 0,
    currency: "THB",
  },
}

// Export all areas
export const nightlifeAreas: NightlifeArea[] = [sukhumvitAsoke, silomSathorn, thonglor, rca, khaoSanRoad]

// Helper functions
export function getNightlifeArea(id: string): NightlifeArea | undefined {
  return nightlifeAreas.find((area) => area.id === id)
}

export function getVenuesByType(type: NightlifeVenue["type"]): NightlifeVenue[] {
  return nightlifeAreas.flatMap((area) => area.venues.filter((venue) => venue.type === type))
}

export function getVenuesNearHotel(
  hotelCoordinates: { latitude: number; longitude: number },
  radiusKm = 1,
): NightlifeVenue[] {
  const venues: NightlifeVenue[] = []

  nightlifeAreas.forEach((area) => {
    area.venues.forEach((venue) => {
      const distance = calculateDistance(
        hotelCoordinates.latitude,
        hotelCoordinates.longitude,
        venue.coordinates.latitude,
        venue.coordinates.longitude,
      )

      if (distance <= radiusKm) {
        venues.push(venue)
      }
    })
  })

  return venues.sort((a, b) => {
    const distanceA = calculateDistance(
      hotelCoordinates.latitude,
      hotelCoordinates.longitude,
      a.coordinates.latitude,
      a.coordinates.longitude,
    )
    const distanceB = calculateDistance(
      hotelCoordinates.latitude,
      hotelCoordinates.longitude,
      b.coordinates.latitude,
      b.coordinates.longitude,
    )
    return distanceA - distanceB
  })
}

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

export function calculateWalkingTime(distanceKm: number): number {
  // Average walking speed: 5 km/h
  return Math.round((distanceKm / 5) * 60)
}

export function calculateDrivingTime(distanceKm: number): number {
  // Average city driving speed: 20 km/h (Bangkok traffic)
  return Math.round((distanceKm / 20) * 60)
}

export function getPopularVenues(): NightlifeVenue[] {
  return nightlifeAreas
    .flatMap((area) => area.venues)
    .filter((venue) => venue.isPopular)
    .sort((a, b) => b.rating - a.rating)
}

export function getTouristFriendlyVenues(): NightlifeVenue[] {
  return nightlifeAreas
    .flatMap((area) => area.venues)
    .filter((venue) => venue.isTouristFriendly)
    .sort((a, b) => b.rating - a.rating)
}

export function getVenuesByPriceRange(priceRange: "$" | "$$" | "$$$" | "$$$$"): NightlifeVenue[] {
  return nightlifeAreas.flatMap((area) => area.venues).filter((venue) => venue.priceRange === priceRange)
}

export function searchVenues(query: string): NightlifeVenue[] {
  const lowercaseQuery = query.toLowerCase()
  return nightlifeAreas
    .flatMap((area) => area.venues)
    .filter(
      (venue) =>
        venue.name.toLowerCase().includes(lowercaseQuery) ||
        venue.description.toLowerCase().includes(lowercaseQuery) ||
        venue.type.toLowerCase().includes(lowercaseQuery) ||
        venue.features.some((feature) => feature.toLowerCase().includes(lowercaseQuery)),
    )
}
