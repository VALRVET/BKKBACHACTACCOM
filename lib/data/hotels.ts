export interface Hotel {
  id: string
  name: string
  brand: string
  category: string
  starRating: number
  description: string
  longDescription: string
  location: {
    address: string
    district: string
    nightlifeArea: string
    coordinates: {
      latitude: number
      longitude: number
    }
    nearbyAttractions: string[]
    distanceToNightlife: {
      walkingMinutes: number
      drivingMinutes: number
    }
  }
  pricing: {
    basePrice: number
    weekendPrice: number
    peakSeasonPrice: number
    currency: string
    taxes: number
    serviceFee: number
  }
  roomTypes: RoomType[]
  amenities: {
    general: string[]
    business: string[]
    recreation: string[]
    dining: string[]
    wellness: string[]
    connectivity: string[]
  }
  services: {
    concierge: boolean
    roomService: boolean
    laundry: boolean
    transportation: boolean
    valet: boolean
    tourDesk: boolean
    businessCenter: boolean
  }
  diningOptions: DiningOption[]
  nightlifeProximity: {
    nearbyClubs: NightlifeVenue[]
    nearbyBars: NightlifeVenue[]
    rooftopBars: NightlifeVenue[]
    walkingDistance: boolean
    transportationOptions: string[]
  }
  images: {
    hero: string
    gallery: string[]
    rooms: string[]
    amenities: string[]
    dining: string[]
    exterior: string[]
    lobby: string[]
  }
  reviews: {
    overallRating: number
    totalReviews: number
    ratingBreakdown: {
      cleanliness: number
      service: number
      location: number
      value: number
      amenities: number
    }
    recentReviews: Review[]
  }
  policies: {
    checkIn: string
    checkOut: string
    cancellation: string
    deposit: string
    petPolicy: string
    smokingPolicy: string
    ageRestrictions: string
    groupBookings: string
  }
  accessibility: {
    wheelchairAccessible: boolean
    accessibleRooms: number
    accessibleFacilities: string[]
    assistiveServices: string[]
  }
  sustainability: {
    certifications: string[]
    greenPractices: string[]
    sustainabilityRating: string
  }
  specialOffers: SpecialOffer[]
  bookingInfo: {
    instantBooking: boolean
    paymentMethods: string[]
    bookingFee: number
    minimumStay: number
    maximumStay: number
  }
  contactInfo: {
    phone: string
    email: string
    website: string
    socialMedia: {
      facebook?: string
      instagram?: string
      twitter?: string
    }
  }
  tags: string[]
  isPopular: boolean
  isBestseller: boolean
  isNewProperty: boolean
  lastUpdated: string
}

export interface RoomType {
  id: string
  name: string
  description: string
  size: number
  maxOccupancy: number
  bedConfiguration: string
  amenities: string[]
  price: number
  images: string[]
  availability: boolean
}

export interface DiningOption {
  name: string
  type: string
  description: string
  operatingHours: string
  priceRange: string
  reservationRequired: boolean
}

export interface NightlifeVenue {
  name: string
  distance: number
  walkingTime: number
  type: string
}

export interface Review {
  id: string
  guestName: string
  rating: number
  title: string
  comment: string
  date: string
  verified: boolean
  roomType: string
  stayDuration: string
}

export interface SpecialOffer {
  id: string
  title: string
  description: string
  discount: number
  validFrom: string
  validTo: string
  conditions: string[]
}

export interface HotelSearchParams {
  location?: string
  checkIn?: string
  checkOut?: string
  guests?: number
  rooms?: number
  priceRange?: [number, number]
  starRating?: number[]
  amenities?: string[]
  distanceToNightlife?: number
}

export interface HotelFilters {
  priceRange: [number, number]
  starRating: number[]
  amenities: string[]
  districts: string[]
  guestRating: number
  distanceToNightlife: number
  propertyType: string[]
  specialOffers: boolean
}

// Sample hotel data
export const hotels: Hotel[] = [
  {
    id: "westin-grande-sukhumvit",
    name: "The Westin Grande Sukhumvit",
    brand: "Westin Hotels & Resorts",
    category: "hotel",
    starRating: 5,
    description: "Luxury hotel in the heart of Bangkok's business and entertainment district",
    longDescription:
      "The Westin Grande Sukhumvit Bangkok offers sophisticated accommodations in the vibrant Asoke area. With direct access to Terminal 21 shopping center and proximity to Bangkok's premier nightlife venues, this luxury hotel provides the perfect base for your bachelor party adventure. Experience world-class amenities, exceptional service, and stunning city views from our elegantly appointed rooms and suites.",
    location: {
      address: "259 Sukhumvit Road, Asoke, Bangkok 10110, Thailand",
      district: "Sukhumvit",
      nightlifeArea: "Asoke/Terminal 21",
      coordinates: {
        latitude: 13.7563,
        longitude: 100.5602,
      },
      nearbyAttractions: [
        "Terminal 21 Shopping Mall",
        "Asoke BTS Station",
        "Sukhumvit MRT Station",
        "Benchakitti Park",
        "Queen Sirikit National Convention Center",
      ],
      distanceToNightlife: {
        walkingMinutes: 5,
        drivingMinutes: 2,
      },
    },
    pricing: {
      basePrice: 180,
      weekendPrice: 220,
      peakSeasonPrice: 280,
      currency: "USD",
      taxes: 17.7,
      serviceFee: 10,
    },
    roomTypes: [
      {
        id: "deluxe-room",
        name: "Deluxe Room",
        description: "Spacious room with city views and modern amenities",
        size: 42,
        maxOccupancy: 2,
        bedConfiguration: "1 King Bed or 2 Twin Beds",
        amenities: ["City View", "Free WiFi", "Mini Bar", "Safe", "Air Conditioning"],
        price: 180,
        images: [
          "/placeholder.svg?height=300&width=400&text=Deluxe+Room",
          "/placeholder.svg?height=300&width=400&text=Deluxe+Bathroom",
        ],
        availability: true,
      },
      {
        id: "executive-suite",
        name: "Executive Suite",
        description: "Luxurious suite with separate living area and premium amenities",
        size: 65,
        maxOccupancy: 4,
        bedConfiguration: "1 King Bed + Sofa Bed",
        amenities: ["City View", "Executive Lounge Access", "Free WiFi", "Mini Bar", "Safe", "Separate Living Area"],
        price: 320,
        images: [
          "/placeholder.svg?height=300&width=400&text=Executive+Suite",
          "/placeholder.svg?height=300&width=400&text=Suite+Living+Area",
        ],
        availability: true,
      },
    ],
    amenities: {
      general: ["24-hour Front Desk", "Concierge Service", "Luggage Storage", "Currency Exchange", "ATM"],
      business: ["Business Center", "Meeting Rooms", "Conference Facilities", "High-speed Internet"],
      recreation: ["Outdoor Pool", "Fitness Center", "Spa", "Sauna", "Steam Room"],
      dining: ["Restaurant", "Bar", "Room Service", "Coffee Shop"],
      wellness: ["Spa Services", "Massage", "Fitness Center", "Yoga Classes"],
      connectivity: ["Free WiFi", "High-speed Internet", "Business Center"],
    },
    services: {
      concierge: true,
      roomService: true,
      laundry: true,
      transportation: true,
      valet: true,
      tourDesk: true,
      businessCenter: true,
    },
    diningOptions: [
      {
        name: "Seasonal Tastes",
        type: "International Buffet",
        description: "All-day dining restaurant featuring international cuisine",
        operatingHours: "6:00 AM - 11:00 PM",
        priceRange: "$$$",
        reservationRequired: false,
      },
      {
        name: "Zest Bar & Terrace",
        type: "Rooftop Bar",
        description: "Stylish rooftop bar with panoramic city views",
        operatingHours: "5:00 PM - 1:00 AM",
        priceRange: "$$$$",
        reservationRequired: true,
      },
    ],
    nightlifeProximity: {
      nearbyClubs: [
        { name: "Levels Club", distance: 0.3, walkingTime: 4, type: "Nightclub" },
        { name: "Insanity Nightclub", distance: 0.5, walkingTime: 6, type: "Nightclub" },
        { name: "Route 66 Club", distance: 0.8, walkingTime: 10, type: "Nightclub" },
      ],
      nearbyBars: [
        { name: "Above Eleven", distance: 0.4, walkingTime: 5, type: "Rooftop Bar" },
        { name: "Octave Rooftop Bar", distance: 0.6, walkingTime: 8, type: "Rooftop Bar" },
        { name: "Red Sky Bar", distance: 1.2, walkingTime: 15, type: "Sky Bar" },
      ],
      rooftopBars: [
        { name: "Zest Bar & Terrace", distance: 0, walkingTime: 0, type: "Hotel Bar" },
        { name: "Above Eleven", distance: 0.4, walkingTime: 5, type: "Rooftop Bar" },
        { name: "Octave Rooftop Bar", distance: 0.6, walkingTime: 8, type: "Rooftop Bar" },
      ],
      walkingDistance: true,
      transportationOptions: ["BTS Skytrain", "MRT Subway", "Taxi", "Tuk-tuk", "Hotel Shuttle"],
    },
    images: {
      hero: "/placeholder.svg?height=400&width=600&text=Westin+Grande+Sukhumvit",
      gallery: [
        "/placeholder.svg?height=300&width=400&text=Hotel+Exterior",
        "/placeholder.svg?height=300&width=400&text=Lobby",
        "/placeholder.svg?height=300&width=400&text=Pool+Area",
        "/placeholder.svg?height=300&width=400&text=Fitness+Center",
      ],
      rooms: [
        "/placeholder.svg?height=300&width=400&text=Deluxe+Room",
        "/placeholder.svg?height=300&width=400&text=Executive+Suite",
        "/placeholder.svg?height=300&width=400&text=Bathroom",
      ],
      amenities: [
        "/placeholder.svg?height=300&width=400&text=Pool",
        "/placeholder.svg?height=300&width=400&text=Spa",
        "/placeholder.svg?height=300&width=400&text=Gym",
      ],
      dining: [
        "/placeholder.svg?height=300&width=400&text=Seasonal+Tastes",
        "/placeholder.svg?height=300&width=400&text=Zest+Bar",
      ],
      exterior: [
        "/placeholder.svg?height=300&width=400&text=Hotel+Building",
        "/placeholder.svg?height=300&width=400&text=Entrance",
      ],
      lobby: [
        "/placeholder.svg?height=300&width=400&text=Main+Lobby",
        "/placeholder.svg?height=300&width=400&text=Reception",
      ],
    },
    reviews: {
      overallRating: 4.6,
      totalReviews: 1247,
      ratingBreakdown: {
        cleanliness: 4.7,
        service: 4.6,
        location: 4.8,
        value: 4.3,
        amenities: 4.5,
      },
      recentReviews: [
        {
          id: "review-1",
          guestName: "Michael R.",
          rating: 5,
          title: "Perfect location for nightlife",
          comment:
            "Amazing hotel right in the heart of Bangkok's entertainment district. Walking distance to all the best clubs and bars. Staff was incredibly helpful with recommendations.",
          date: "2024-01-15",
          verified: true,
          roomType: "Executive Suite",
          stayDuration: "3 nights",
        },
        {
          id: "review-2",
          guestName: "James K.",
          rating: 4,
          title: "Great bachelor party base",
          comment:
            "Excellent facilities and service. The rooftop bar was perfect for pre-drinks before hitting the town. Rooms were spacious and comfortable.",
          date: "2024-01-10",
          verified: true,
          roomType: "Deluxe Room",
          stayDuration: "2 nights",
        },
      ],
    },
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 24 hours before check-in",
      deposit: "Credit card required for incidentals",
      petPolicy: "Pets not allowed",
      smokingPolicy: "Non-smoking property",
      ageRestrictions: "Minimum age 18 for check-in",
      groupBookings: "Special rates available for groups of 10+ rooms",
    },
    accessibility: {
      wheelchairAccessible: true,
      accessibleRooms: 12,
      accessibleFacilities: ["Elevator", "Accessible Parking", "Accessible Bathroom", "Accessible Pool"],
      assistiveServices: ["Hearing Impaired Services", "Visual Impaired Services"],
    },
    sustainability: {
      certifications: ["Green Key Certified", "EarthCheck Silver"],
      greenPractices: ["Energy Efficient Lighting", "Water Conservation", "Waste Reduction", "Local Sourcing"],
      sustainabilityRating: "Silver",
    },
    specialOffers: [
      {
        id: "bachelor-special",
        title: "Bachelor Party Package",
        description: "Special package including welcome drinks, late checkout, and nightlife recommendations",
        discount: 15,
        validFrom: "2024-01-01",
        validTo: "2024-12-31",
        conditions: ["Minimum 3 nights stay", "Group of 6+ people", "Advance booking required"],
      },
    ],
    bookingInfo: {
      instantBooking: true,
      paymentMethods: ["Credit Card", "PayPal", "Bank Transfer"],
      bookingFee: 0,
      minimumStay: 1,
      maximumStay: 30,
    },
    contactInfo: {
      phone: "+66 2 207 8000",
      email: "reservations.bangkok@westin.com",
      website: "https://www.marriott.com/hotels/travel/bkkwi-the-westin-grande-sukhumvit-bangkok/",
      socialMedia: {
        facebook: "https://facebook.com/westinbangkok",
        instagram: "https://instagram.com/westinbangkok",
      },
    },
    tags: ["luxury", "business", "nightlife", "shopping", "rooftop bar", "spa", "fitness"],
    isPopular: true,
    isBestseller: true,
    isNewProperty: false,
    lastUpdated: "2024-01-20T10:00:00Z",
  },
  {
    id: "conrad-bangkok",
    name: "Conrad Bangkok",
    brand: "Conrad Hotels & Resorts",
    category: "hotel",
    starRating: 5,
    description: "Ultra-luxury hotel with exceptional service and prime location",
    longDescription:
      "Conrad Bangkok stands as a beacon of luxury in the heart of the city's most prestigious district. Located in the All Seasons Place complex, this ultra-luxury hotel offers unparalleled access to Bangkok's finest shopping, dining, and nightlife venues. With its sophisticated design, world-class amenities, and legendary Conrad service, it provides the perfect setting for an unforgettable bachelor party experience.",
    location: {
      address: "87 Wireless Road, Lumpini, Pathumwan, Bangkok 10330, Thailand",
      district: "Sukhumvit",
      nightlifeArea: "Ploenchit",
      coordinates: {
        latitude: 13.744,
        longitude: 100.5416,
      },
      nearbyAttractions: [
        "Central Embassy",
        "Ploenchit BTS Station",
        "Lumpini Park",
        "Erawan Shrine",
        "Gaysorn Village",
      ],
      distanceToNightlife: {
        walkingMinutes: 8,
        drivingMinutes: 3,
      },
    },
    pricing: {
      basePrice: 220,
      weekendPrice: 270,
      peakSeasonPrice: 350,
      currency: "USD",
      taxes: 17.7,
      serviceFee: 10,
    },
    roomTypes: [
      {
        id: "king-room",
        name: "King Room",
        description: "Elegant room with panoramic city views",
        size: 48,
        maxOccupancy: 2,
        bedConfiguration: "1 King Bed",
        amenities: ["City View", "Executive Lounge Access", "Free WiFi", "Marble Bathroom", "Nespresso Machine"],
        price: 220,
        images: [
          "/placeholder.svg?height=300&width=400&text=Conrad+King+Room",
          "/placeholder.svg?height=300&width=400&text=Conrad+Bathroom",
        ],
        availability: true,
      },
      {
        id: "diplomatic-suite",
        name: "Diplomatic Suite",
        description: "Spacious suite with separate living and dining areas",
        size: 85,
        maxOccupancy: 4,
        bedConfiguration: "1 King Bed + Living Area",
        amenities: ["City View", "Executive Lounge Access", "Butler Service", "Separate Living Area", "Dining Area"],
        price: 450,
        images: [
          "/placeholder.svg?height=300&width=400&text=Diplomatic+Suite",
          "/placeholder.svg?height=300&width=400&text=Suite+Living+Room",
        ],
        availability: true,
      },
    ],
    amenities: {
      general: ["24-hour Concierge", "Butler Service", "Valet Parking", "Currency Exchange"],
      business: ["Executive Lounge", "Business Center", "Meeting Facilities", "Secretarial Services"],
      recreation: ["Outdoor Pool", "Fitness Center", "Spa", "Tennis Court"],
      dining: ["Fine Dining Restaurant", "Lobby Lounge", "Pool Bar", "In-room Dining"],
      wellness: ["Conrad Spa", "Fitness Center", "Personal Training", "Wellness Programs"],
      connectivity: ["Complimentary WiFi", "High-speed Internet", "Mobile Check-in"],
    },
    services: {
      concierge: true,
      roomService: true,
      laundry: true,
      transportation: true,
      valet: true,
      tourDesk: true,
      businessCenter: true,
    },
    diningOptions: [
      {
        name: "Liu",
        type: "Chinese Fine Dining",
        description: "Award-winning Chinese restaurant with contemporary cuisine",
        operatingHours: "12:00 PM - 2:30 PM, 6:00 PM - 10:30 PM",
        priceRange: "$$$$",
        reservationRequired: true,
      },
      {
        name: "Diplomat Bar",
        type: "Cocktail Bar",
        description: "Sophisticated cocktail bar with premium spirits",
        operatingHours: "5:00 PM - 1:00 AM",
        priceRange: "$$$$",
        reservationRequired: false,
      },
    ],
    nightlifeProximity: {
      nearbyClubs: [
        { name: "Octave Rooftop Bar", distance: 0.5, walkingTime: 6, type: "Rooftop Bar" },
        { name: "Sky Bar", distance: 1.0, walkingTime: 12, type: "Sky Bar" },
        { name: "Levels Club", distance: 1.2, walkingTime: 15, type: "Nightclub" },
      ],
      nearbyBars: [
        { name: "Diplomat Bar", distance: 0, walkingTime: 0, type: "Hotel Bar" },
        { name: "Hyde & Seek", distance: 0.3, walkingTime: 4, type: "Gastropub" },
        { name: "Bamboo Bar", distance: 0.8, walkingTime: 10, type: "Jazz Bar" },
      ],
      rooftopBars: [
        { name: "Octave Rooftop Bar", distance: 0.5, walkingTime: 6, type: "Rooftop Bar" },
        { name: "Red Sky Bar", distance: 1.0, walkingTime: 12, type: "Sky Bar" },
        { name: "Above Eleven", distance: 1.5, walkingTime: 18, type: "Rooftop Bar" },
      ],
      walkingDistance: true,
      transportationOptions: ["BTS Skytrain", "Taxi", "Hotel Limousine", "Tuk-tuk"],
    },
    images: {
      hero: "/placeholder.svg?height=400&width=600&text=Conrad+Bangkok",
      gallery: [
        "/placeholder.svg?height=300&width=400&text=Conrad+Exterior",
        "/placeholder.svg?height=300&width=400&text=Conrad+Lobby",
        "/placeholder.svg?height=300&width=400&text=Conrad+Pool",
        "/placeholder.svg?height=300&width=400&text=Conrad+Spa",
      ],
      rooms: [
        "/placeholder.svg?height=300&width=400&text=King+Room",
        "/placeholder.svg?height=300&width=400&text=Diplomatic+Suite",
        "/placeholder.svg?height=300&width=400&text=Suite+Bathroom",
      ],
      amenities: [
        "/placeholder.svg?height=300&width=400&text=Pool+Deck",
        "/placeholder.svg?height=300&width=400&text=Spa+Treatment",
        "/placeholder.svg?height=300&width=400&text=Fitness+Center",
      ],
      dining: [
        "/placeholder.svg?height=300&width=400&text=Liu+Restaurant",
        "/placeholder.svg?height=300&width=400&text=Diplomat+Bar",
      ],
      exterior: [
        "/placeholder.svg?height=300&width=400&text=Hotel+Tower",
        "/placeholder.svg?height=300&width=400&text=Main+Entrance",
      ],
      lobby: [
        "/placeholder.svg?height=300&width=400&text=Grand+Lobby",
        "/placeholder.svg?height=300&width=400&text=Reception+Area",
      ],
    },
    reviews: {
      overallRating: 4.8,
      totalReviews: 892,
      ratingBreakdown: {
        cleanliness: 4.9,
        service: 4.9,
        location: 4.7,
        value: 4.5,
        amenities: 4.8,
      },
      recentReviews: [
        {
          id: "review-3",
          guestName: "David L.",
          rating: 5,
          title: "Exceptional luxury experience",
          comment:
            "The Conrad Bangkok exceeded all expectations. The service was impeccable, rooms were stunning, and the location perfect for exploring Bangkok's nightlife.",
          date: "2024-01-18",
          verified: true,
          roomType: "Diplomatic Suite",
          stayDuration: "4 nights",
        },
      ],
    },
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours before check-in",
      deposit: "Credit card authorization required",
      petPolicy: "Pets allowed with restrictions",
      smokingPolicy: "Designated smoking areas only",
      ageRestrictions: "Minimum age 21 for check-in",
      groupBookings: "Group rates and amenities available",
    },
    accessibility: {
      wheelchairAccessible: true,
      accessibleRooms: 8,
      accessibleFacilities: ["Accessible Entrance", "Elevator", "Accessible Pool", "Accessible Spa"],
      assistiveServices: ["Sign Language Services", "Braille Materials"],
    },
    sustainability: {
      certifications: ["LEED Gold", "Green Globe Certified"],
      greenPractices: ["Solar Energy", "Water Recycling", "Organic Gardens", "Sustainable Sourcing"],
      sustainabilityRating: "Gold",
    },
    specialOffers: [
      {
        id: "luxury-bachelor",
        title: "Ultimate Bachelor Experience",
        description: "Luxury package with suite upgrade, spa credits, and VIP nightlife access",
        discount: 20,
        validFrom: "2024-01-01",
        validTo: "2024-12-31",
        conditions: ["Minimum 2 nights stay", "Suite booking required", "Group of 4+ people"],
      },
    ],
    bookingInfo: {
      instantBooking: true,
      paymentMethods: ["Credit Card", "PayPal", "Wire Transfer", "Cryptocurrency"],
      bookingFee: 0,
      minimumStay: 1,
      maximumStay: 30,
    },
    contactInfo: {
      phone: "+66 2 690 9999",
      email: "bangkok.reservations@conradhotels.com",
      website: "https://www.hilton.com/en/hotels/bkkcici-conrad-bangkok/",
      socialMedia: {
        facebook: "https://facebook.com/conradbangkok",
        instagram: "https://instagram.com/conradbangkok",
        twitter: "https://twitter.com/conradbangkok",
      },
    },
    tags: ["ultra-luxury", "business", "spa", "fine dining", "executive lounge", "butler service"],
    isPopular: true,
    isBestseller: false,
    isNewProperty: false,
    lastUpdated: "2024-01-20T10:00:00Z",
  },
]

// Helper functions
export function getHotel(id: string): Hotel | undefined {
  return hotels.find((hotel) => hotel.id === id)
}

export function searchHotels(params: HotelSearchParams): Hotel[] {
  let filtered = [...hotels]

  if (params.location) {
    filtered = filtered.filter(
      (hotel) =>
        hotel.location.district.toLowerCase().includes(params.location!.toLowerCase()) ||
        hotel.location.nightlifeArea.toLowerCase().includes(params.location!.toLowerCase()),
    )
  }

  if (params.priceRange) {
    filtered = filtered.filter(
      (hotel) => hotel.pricing.basePrice >= params.priceRange![0] && hotel.pricing.basePrice <= params.priceRange![1],
    )
  }

  if (params.starRating && params.starRating.length > 0) {
    filtered = filtered.filter((hotel) => params.starRating!.includes(hotel.starRating))
  }

  if (params.amenities && params.amenities.length > 0) {
    filtered = filtered.filter((hotel) => {
      const allAmenities = [
        ...hotel.amenities.general,
        ...hotel.amenities.business,
        ...hotel.amenities.recreation,
        ...hotel.amenities.dining,
        ...hotel.amenities.wellness,
        ...hotel.amenities.connectivity,
      ]
      return params.amenities!.some((amenity) =>
        allAmenities.some((hotelAmenity) => hotelAmenity.toLowerCase().includes(amenity.toLowerCase())),
      )
    })
  }

  return filtered
}

export function calculatePrice(hotel: Hotel, checkIn?: string, checkOut?: string, guests?: number): number {
  let price = hotel.pricing.basePrice

  // Weekend premium (simplified - would need proper date logic)
  if (checkIn && new Date(checkIn).getDay() >= 5) {
    price = hotel.pricing.weekendPrice
  }

  // Add taxes and service fees
  const taxes = price * (hotel.pricing.taxes / 100)
  const serviceFee = hotel.pricing.serviceFee

  return Math.round(price + taxes + serviceFee)
}

export function getDistanceToNightlife(hotel: Hotel): string {
  if (hotel.nightlifeProximity.walkingDistance) {
    return `${hotel.location.distanceToNightlife.walkingMinutes} min walk`
  }
  return `${hotel.location.distanceToNightlife.drivingMinutes} min drive`
}

export function getPopularHotels(): Hotel[] {
  return hotels.filter((hotel) => hotel.isPopular).slice(0, 6)
}

export function getBestsellerHotels(): Hotel[] {
  return hotels.filter((hotel) => hotel.isBestseller).slice(0, 3)
}

export function getHotelsByDistrict(district: string): Hotel[] {
  return hotels.filter((hotel) => hotel.location.district.toLowerCase() === district.toLowerCase())
}
