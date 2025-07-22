export interface Experience {
  id: string
  title: string
  description: string
  longDescription: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  category: string
  duration: string
  groupSize: string
  location: string
  meetingPoint: string
  isPopular?: boolean
  isBestseller?: boolean
  isNewExperience?: boolean
  features: string[]
  included: string[]
  notIncluded: string[]
  itinerary: { time: string; activity: string; description: string; location?: string }[]
  reviews: { name: string; rating: number; date: string; comment: string; avatar?: string; verified?: boolean }[]
  gallery: string[]
  videoUrl?: string
  highlights: string[]
  whatToBring: string[]
  importantInfo: string[]
  cancellationPolicy: string
  ageRestriction: string
  weatherPolicy: string
  accessibility: string[]
  languages: string[]
  groupDiscounts?: { minSize: number; discount: number }[]
  addOns?: { name: string; price: number; description: string }[]
  faqs: { question: string; answer: string }[]
  safetyMeasures: string[]
  tags: string[]
  difficulty: "Easy" | "Moderate" | "Challenging"
  physicalRequirements: string
  dressCode: string
  seasonality: string
  bestTimeToVisit: string
  relatedExperiences: string[]
}

export const experiences: Experience[] = [
  {
    id: "vip-nightclub-package",
    title: "VIP Nightclub Package",
    description: "Skip the lines and enjoy bottle service at Bangkok's hottest nightclubs.",
    longDescription:
      "Our VIP Nightclub Package is designed for groups who want to experience Bangkok's legendary nightlife scene without any hassles. We've partnered with the city's most exclusive venues to provide you with seamless entry, premium bottle service, and dedicated hosts who ensure your night is unforgettable. From rooftop bars with stunning city views to underground clubs with world-class DJs, this package covers it all. Experience the ultimate in luxury nightlife with private tables, premium spirits, and VIP treatment that will make your bachelor party legendary.",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 124,
    category: "nightlife",
    duration: "4-6 hours",
    groupSize: "4-12 people",
    location: "Sukhumvit District",
    meetingPoint: "Hotel lobby pickup or designated meeting point in Sukhumvit",
    isPopular: true,
    isBestseller: true,
    features: [
      "VIP Entry to 3 Premium Clubs",
      "Bottle Service at Each Venue",
      "Private Table Reservations",
      "Dedicated Host/Guide",
      "Transportation Between Venues",
      "Welcome Drinks",
      "Skip-the-Line Access",
      "Professional Photography",
    ],
    included: [
      "Entry fees to all venues",
      "1 bottle per 4 people at each club",
      "Private transportation",
      "English-speaking guide",
      "Welcome shots",
      "VIP table reservations",
      "Professional photos",
      "24/7 support hotline",
    ],
    notIncluded: [
      "Additional drinks beyond included bottles",
      "Food and snacks",
      "Tips and gratuities",
      "Personal expenses",
      "Hotel accommodation",
      "Travel insurance",
    ],
    itinerary: [
      {
        time: "9:00 PM",
        activity: "Hotel Pickup & Welcome",
        description: "Meet your guide and enjoy welcome shots before heading out",
        location: "Your hotel lobby",
      },
      {
        time: "9:30 PM",
        activity: "Rooftop Bar Experience",
        description: "Start with panoramic city views and premium cocktails at Sky Bar",
        location: "Lebua State Tower",
      },
      {
        time: "11:00 PM",
        activity: "Main Nightclub",
        description: "Dance the night away at Bangkok's hottest club with bottle service",
        location: "Levels Club & Lounge",
      },
      {
        time: "1:00 AM",
        activity: "Underground Venue",
        description: "Experience the underground scene with local DJs and craft cocktails",
        location: "Sing Sing Theater",
      },
      {
        time: "3:00 AM",
        activity: "Return to Hotel",
        description: "Safe transportation back to your accommodation",
        location: "Your hotel",
      },
    ],
    reviews: [
      {
        name: "Mike Johnson",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Absolutely incredible night! The VIP treatment was worth every penny. Our guide knew all the best spots and we never waited in line once. The bottle service was generous and the venues were top-notch.",
        verified: true,
      },
      {
        name: "David Chen",
        rating: 5,
        date: "1 month ago",
        comment:
          "Best bachelor party experience ever! The bottle service was generous and the venues were top-notch. Our host was amazing and made sure we had everything we needed. Highly recommend!",
        verified: true,
      },
      {
        name: "Alex Rodriguez",
        rating: 4,
        date: "2 months ago",
        comment:
          "Great experience overall. The clubs were amazing and our host was fantastic. Only minor issue was the transportation timing between venues, but everything else was perfect.",
        verified: true,
      },
      {
        name: "James Wilson",
        rating: 5,
        date: "3 months ago",
        comment:
          "This package exceeded all expectations! The VIP access made us feel like celebrities. The photography service was a nice touch - we got amazing shots throughout the night.",
        verified: true,
      },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=VIP+Club+Interior",
      "/placeholder.svg?height=400&width=600&text=Bottle+Service",
      "/placeholder.svg?height=400&width=600&text=Rooftop+Views",
      "/placeholder.svg?height=400&width=600&text=Group+Photo",
      "/placeholder.svg?height=400&width=600&text=DJ+Performance",
      "/placeholder.svg?height=400&width=600&text=VIP+Table",
    ],
    videoUrl: "https://example.com/vip-nightclub-video",
    highlights: [
      "Skip all lines with VIP access",
      "Premium bottle service included",
      "Professional photography",
      "Dedicated English-speaking host",
      "3 exclusive venues in one night",
      "Private transportation",
    ],
    whatToBring: [
      "Valid ID or passport",
      "Smart casual attire (no shorts/flip-flops)",
      "Cash for tips and additional drinks",
      "Comfortable walking shoes",
      "Phone charger/power bank",
    ],
    importantInfo: [
      "Minimum age 21 years",
      "Smart dress code enforced at all venues",
      "No refunds for denied entry due to dress code violations",
      "Venues subject to change based on availability",
      "Photography service includes 20+ edited photos",
      "Transportation provided between venues only",
    ],
    cancellationPolicy:
      "Free cancellation up to 24 hours before the experience. 50% refund for cancellations within 24 hours.",
    ageRestriction: "21+ years old with valid ID required",
    weatherPolicy: "Experience runs rain or shine as venues are indoor",
    accessibility: [
      "Wheelchair accessible venues available upon request",
      "Elevator access to rooftop venues",
      "Accessible restrooms at all locations",
    ],
    languages: ["English", "Thai"],
    groupDiscounts: [
      { minSize: 8, discount: 10 },
      { minSize: 12, discount: 15 },
    ],
    addOns: [
      {
        name: "Premium Photography Package",
        price: 150,
        description: "Professional photographer for the entire night with 50+ edited photos",
      },
      {
        name: "Luxury Transportation Upgrade",
        price: 200,
        description: "Upgrade to luxury van with mini-bar and mood lighting",
      },
      {
        name: "VIP Host Extension",
        price: 100,
        description: "Extend your VIP host service until 4 AM",
      },
    ],
    faqs: [
      {
        question: "What happens if we're denied entry to a venue?",
        answer:
          "We work with multiple backup venues and will ensure you get into premium clubs. Entry denial is rare with our VIP partnerships.",
      },
      {
        question: "Can we customize the venues?",
        answer:
          "Yes! We can customize the itinerary based on your preferences. Additional fees may apply for specific venue requests.",
      },
      {
        question: "Is food included?",
        answer:
          "Light snacks are available at venues, but full meals are not included. We can arrange dinner reservations for an additional fee.",
      },
      {
        question: "What if someone in our group doesn't drink alcohol?",
        answer: "Non-alcoholic beverages are available at all venues. We can also arrange mocktails and soft drinks.",
      },
    ],
    safetyMeasures: [
      "Licensed and insured transportation",
      "24/7 emergency support hotline",
      "Experienced local guides",
      "First aid trained staff",
      "Venue safety protocols followed",
      "Emergency contact information provided",
    ],
    tags: ["nightlife", "vip", "clubs", "bachelor party", "bottle service", "rooftop bars"],
    difficulty: "Easy",
    physicalRequirements: "Ability to walk between venues and stand for extended periods",
    dressCode: "Smart casual to formal. No shorts, flip-flops, or athletic wear",
    seasonality: "Available year-round",
    bestTimeToVisit: "Thursday to Saturday nights for the best atmosphere",
    relatedExperiences: ["rooftop-bar-crawl", "private-boat-party", "street-food-tour"],
  },
  {
    id: "thai-boxing-experience",
    title: "Thai Boxing Experience",
    description: "Learn Muay Thai basics from professional fighters in authentic training.",
    longDescription:
      "Immerse yourself in Thailand's national sport with our authentic Muay Thai experience. Train with professional fighters at a traditional gym, learn the ancient art of eight limbs, and understand the cultural significance of this martial art. This isn't just a workout - it's a journey into Thai culture, discipline, and tradition. Our experienced trainers will teach you proper techniques, from basic stances to advanced combinations, while sharing the rich history and philosophy behind Muay Thai. Perfect for all fitness levels, this experience combines physical challenge with cultural education.",
    price: 129,
    originalPrice: 179,
    rating: 4.7,
    reviewCount: 156,
    category: "adventure",
    duration: "2-3 hours",
    groupSize: "4-15 people",
    location: "Lumpinee Boxing Stadium Area",
    meetingPoint: "Lumpinee Boxing Stadium main entrance",
    isPopular: true,
    features: [
      "Professional Muay Thai Training",
      "Traditional Boxing Equipment",
      "Cultural History Lesson",
      "Certificate of Completion",
      "Professional Photos",
      "Traditional Thai Blessing Ceremony",
    ],
    included: [
      "Professional Muay Thai instructor",
      "All boxing equipment (gloves, pads, wraps)",
      "Traditional Mongkol headband ceremony",
      "Certificate of completion",
      "Professional photos during training",
      "Bottled water and towels",
      "Cultural history presentation",
      "Traditional Thai blessing",
    ],
    notIncluded: [
      "Transportation to/from venue",
      "Personal training gear",
      "Medical insurance",
      "Food and beverages (except water)",
      "Gratuities for instructors",
    ],
    itinerary: [
      {
        time: "2:00 PM",
        activity: "Welcome & Introduction",
        description: "Meet your instructor and learn about Muay Thai history and culture",
        location: "Training gym reception",
      },
      {
        time: "2:15 PM",
        activity: "Traditional Blessing Ceremony",
        description: "Receive traditional Mongkol headband and blessing from instructor",
        location: "Main training area",
      },
      {
        time: "2:30 PM",
        activity: "Warm-up & Basic Techniques",
        description: "Learn proper stance, footwork, and basic punches",
        location: "Training ring",
      },
      {
        time: "3:15 PM",
        activity: "Pad Work Training",
        description: "Practice combinations on Thai pads with instructor",
        location: "Training ring",
      },
      {
        time: "4:00 PM",
        activity: "Sparring Demonstration",
        description: "Watch professional fighters demonstrate techniques",
        location: "Main ring",
      },
      {
        time: "4:30 PM",
        activity: "Certificate Ceremony",
        description: "Receive completion certificate and group photos",
        location: "Training gym",
      },
    ],
    reviews: [
      {
        name: "Tom Anderson",
        rating: 5,
        date: "1 week ago",
        comment:
          "Incredible experience! The instructor was patient and knowledgeable. Learned so much about Thai culture and got a great workout. The traditional ceremony was very meaningful.",
        verified: true,
      },
      {
        name: "Sarah Mitchell",
        rating: 5,
        date: "3 weeks ago",
        comment:
          "Best cultural experience in Bangkok! The training was challenging but fun, and the instructor made sure everyone felt comfortable regardless of fitness level.",
        verified: true,
      },
      {
        name: "Carlos Mendez",
        rating: 4,
        date: "1 month ago",
        comment:
          "Great introduction to Muay Thai. The gym was authentic and the instructor was excellent. Would have liked a bit more hands-on training time.",
        verified: true,
      },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Muay+Thai+Training",
      "/placeholder.svg?height=400&width=600&text=Traditional+Ceremony",
      "/placeholder.svg?height=400&width=600&text=Pad+Work",
      "/placeholder.svg?height=400&width=600&text=Group+Training",
      "/placeholder.svg?height=400&width=600&text=Certificate+Ceremony",
      "/placeholder.svg?height=400&width=600&text=Professional+Demo",
    ],
    highlights: [
      "Train with professional Muay Thai fighters",
      "Learn authentic techniques and traditions",
      "Traditional Mongkol blessing ceremony",
      "All equipment provided",
      "Suitable for all fitness levels",
      "Cultural education included",
    ],
    whatToBring: [
      "Comfortable workout clothes",
      "Athletic shoes or bare feet",
      "Water bottle",
      "Towel",
      "Camera for photos",
    ],
    importantInfo: [
      "No prior experience necessary",
      "All fitness levels welcome",
      "Traditional respect customs observed",
      "Photography allowed during training",
      "Shower facilities available",
      "Equipment sanitized between sessions",
    ],
    cancellationPolicy: "Free cancellation up to 12 hours before the experience. No refund for no-shows.",
    ageRestriction: "16+ years old (minors require adult supervision)",
    weatherPolicy: "Indoor activity - not affected by weather",
    accessibility: [
      "Ground floor access available",
      "Accessible restrooms",
      "Modified training for mobility limitations",
    ],
    languages: ["English", "Thai"],
    groupDiscounts: [
      { minSize: 8, discount: 15 },
      { minSize: 12, discount: 20 },
    ],
    addOns: [
      {
        name: "Private Training Session",
        price: 80,
        description: "One-on-one training with professional fighter",
      },
      {
        name: "Traditional Thai Massage",
        price: 60,
        description: "30-minute post-training massage",
      },
    ],
    faqs: [
      {
        question: "Do I need to be in good shape?",
        answer:
          "No! Our instructors adapt the training to all fitness levels. The focus is on learning technique and culture.",
      },
      {
        question: "Is it safe for beginners?",
        answer: "Absolutely. Safety is our priority. All training is supervised and we start with basics.",
      },
      {
        question: "Can women participate?",
        answer: "Yes! Muay Thai is for everyone. We have female instructors available upon request.",
      },
    ],
    safetyMeasures: [
      "Professional medical supervision",
      "First aid kit on site",
      "Sanitized equipment",
      "Qualified instructors only",
      "Safety briefing before training",
    ],
    tags: ["muay thai", "martial arts", "culture", "fitness", "traditional", "training"],
    difficulty: "Moderate",
    physicalRequirements: "Basic fitness level recommended but not required",
    dressCode: "Comfortable athletic wear, no jewelry",
    seasonality: "Available year-round",
    bestTimeToVisit: "Afternoon sessions recommended to avoid morning heat",
    relatedExperiences: ["street-food-tour", "private-boat-party", "jet-ski-adventure"],
  },
  {
    id: "private-boat-party",
    title: "Private Boat Party",
    description: "Cruise along the Chao Phraya River with drinks, music, and stunning views.",
    longDescription:
      "Set sail on the legendary Chao Phraya River for the ultimate floating party experience. Our luxury boat comes equipped with a professional sound system, open bar, and stunning panoramic views of Bangkok's iconic skyline. Watch the sunset over ancient temples while enjoying premium cocktails, then dance under the stars as the city lights up around you. This isn't just a boat ride - it's a floating nightclub with Bangkok's most beautiful backdrop. Perfect for bachelor parties, our experienced crew ensures your celebration is unforgettable while you cruise past landmarks like Wat Arun, the Grand Palace, and modern skyscrapers.",
    price: 349,
    originalPrice: 449,
    rating: 4.8,
    reviewCount: 89,
    category: "water",
    duration: "3-4 hours",
    groupSize: "6-20 people",
    location: "Chao Phraya River",
    meetingPoint: "Saphan Taksin Pier, Exit 2",
    isPopular: true,
    isBestseller: true,
    features: [
      "Private Luxury Boat Charter",
      "Professional DJ & Sound System",
      "Open Bar Package",
      "Gourmet Catering Service",
      "Sunset Cruise Experience",
      "Professional Photography",
    ],
    included: [
      "3-hour private boat charter",
      "Professional DJ and sound system",
      "Open bar (beer, wine, cocktails)",
      "Gourmet appetizers and snacks",
      "Professional photographer",
      "Life jackets and safety equipment",
      "Fuel and crew services",
      "Sunset timing coordination",
    ],
    notIncluded: [
      "Transportation to/from pier",
      "Full dinner service",
      "Premium alcohol upgrades",
      "Gratuities for crew",
      "Personal items",
    ],
    itinerary: [
      {
        time: "5:00 PM",
        activity: "Boarding & Welcome Drinks",
        description: "Board your private boat and enjoy welcome cocktails",
        location: "Saphan Taksin Pier",
      },
      {
        time: "5:30 PM",
        activity: "Sunset Cruise Begins",
        description: "Cruise past Wat Arun and Grand Palace during golden hour",
        location: "Chao Phraya River",
      },
      {
        time: "6:30 PM",
        activity: "Dinner Service",
        description: "Enjoy gourmet appetizers while cruising",
        location: "On board",
      },
      {
        time: "7:30 PM",
        activity: "Party Time",
        description: "DJ starts the party as city lights illuminate",
        location: "On board",
      },
      {
        time: "8:30 PM",
        activity: "Return to Pier",
        description: "Final drinks and photos as we return",
        location: "Saphan Taksin Pier",
      },
    ],
    reviews: [
      {
        name: "Mark Thompson",
        rating: 5,
        date: "5 days ago",
        comment:
          "Absolutely amazing experience! The boat was beautiful, the crew was fantastic, and the views were incredible. The DJ kept the party going all night. Perfect for our bachelor party!",
        verified: true,
      },
      {
        name: "Jennifer Lee",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Best sunset cruise ever! The open bar was generous, food was delicious, and the photographer captured amazing moments. Highly recommend for special celebrations.",
        verified: true,
      },
      {
        name: "Robert Garcia",
        rating: 4,
        date: "1 month ago",
        comment:
          "Great experience overall. The boat was spacious and well-equipped. Only minor issue was the music volume - could have been louder for our party group.",
        verified: true,
      },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Luxury+Boat+Deck",
      "/placeholder.svg?height=400&width=600&text=Sunset+Views",
      "/placeholder.svg?height=400&width=600&text=Party+Dancing",
      "/placeholder.svg?height=400&width=600&text=Bangkok+Skyline",
      "/placeholder.svg?height=400&width=600&text=Group+Celebration",
      "/placeholder.svg?height=400&width=600&text=Gourmet+Catering",
    ],
    highlights: [
      "Private luxury boat for your group",
      "Stunning sunset views of Bangkok",
      "Professional DJ and sound system",
      "Open bar with premium cocktails",
      "Gourmet catering included",
      "Professional photography service",
    ],
    whatToBring: [
      "Sunscreen and sunglasses",
      "Light jacket for evening",
      "Camera or phone for photos",
      "Comfortable shoes (non-slip)",
      "Cash for crew tips",
    ],
    importantInfo: [
      "Weather dependent - may be rescheduled",
      "Life jackets provided and required",
      "No swimming allowed during cruise",
      "Alcohol service stops 30 minutes before docking",
      "Maximum capacity strictly enforced",
      "Smoking allowed on designated deck areas only",
    ],
    cancellationPolicy: "Free cancellation up to 48 hours before departure. Weather cancellations receive full refund.",
    ageRestriction: "18+ for alcohol service, all ages welcome with adult supervision",
    weatherPolicy: "Cancelled for severe weather with full refund or reschedule option",
    accessibility: [
      "Wheelchair accessible with advance notice",
      "Accessible restroom on board",
      "Assistance available for boarding",
    ],
    languages: ["English", "Thai"],
    groupDiscounts: [
      { minSize: 12, discount: 10 },
      { minSize: 16, discount: 15 },
    ],
    addOns: [
      {
        name: "Premium Bar Upgrade",
        price: 120,
        description: "Top-shelf spirits and champagne service",
      },
      {
        name: "Full Dinner Service",
        price: 200,
        description: "3-course Thai and international dinner",
      },
      {
        name: "Extended Cruise",
        price: 150,
        description: "Add extra hour to your cruise",
      },
    ],
    faqs: [
      {
        question: "What happens if it rains?",
        answer:
          "Our boat has covered areas. Light rain doesn't stop the cruise, but severe weather may require rescheduling.",
      },
      {
        question: "Can we bring our own music?",
        answer: "Yes! Our DJ can play your playlist. Just bring a USB drive or connect via Bluetooth.",
      },
      {
        question: "Is food included?",
        answer: "Gourmet appetizers and snacks are included. Full dinner service available as add-on.",
      },
    ],
    safetyMeasures: [
      "Licensed boat operator",
      "Life jackets for all passengers",
      "Emergency communication equipment",
      "First aid kit on board",
      "Weather monitoring system",
      "Insurance coverage included",
    ],
    tags: ["boat party", "sunset cruise", "chao phraya", "open bar", "bachelor party", "luxury"],
    difficulty: "Easy",
    physicalRequirements: "Ability to board boat safely",
    dressCode: "Smart casual, comfortable shoes recommended",
    seasonality: "Best during dry season (Nov-Apr), available year-round",
    bestTimeToVisit: "Sunset cruises for best views and photos",
    relatedExperiences: ["vip-nightclub-package", "rooftop-bar-crawl", "street-food-tour"],
  },
  {
    id: "rooftop-bar-crawl",
    title: "Rooftop Bar Crawl",
    description: "Experience Bangkok's best rooftop bars with stunning city views.",
    longDescription:
      "Elevate your Bangkok experience with our exclusive rooftop bar crawl featuring the city's most spectacular sky-high venues. From the world-famous Sky Bar to hidden gems known only to locals, this tour takes you to 4 premium rooftop locations offering breathtaking 360-degree views of the Bangkok skyline. Each venue offers a unique atmosphere, from sophisticated cocktail lounges to vibrant party spots, all while you're suspended high above the bustling city below. Our expert guide ensures VIP treatment at each location, sharing insider stories about Bangkok's evolution and the best photo spots for those Instagram-worthy shots.",
    price: 199,
    rating: 4.6,
    reviewCount: 203,
    category: "nightlife",
    duration: "5-6 hours",
    groupSize: "4-10 people",
    location: "Central Bangkok",
    meetingPoint: "BTS Sala Daeng Station, Exit 1",
    features: ["4 Rooftop Bars", "Welcome Drinks", "Transportation", "Local Guide"],
    included: [
      "Entry to 4 premium rooftop bars",
      "Welcome drink at each venue",
      "Professional local guide",
      "Transportation between venues",
      "VIP reservations",
      "Photography assistance",
    ],
    notIncluded: ["Additional drinks beyond welcome drinks", "Food and snacks", "Hotel pickup/drop-off", "Gratuities"],
    itinerary: [
      {
        time: "6:00 PM",
        activity: "Meet & Greet",
        description: "Meet your guide and fellow bar crawlers",
        location: "BTS Sala Daeng Station",
      },
      {
        time: "6:30 PM",
        activity: "First Rooftop - Sky Bar",
        description: "World-famous Sky Bar with panoramic city views",
        location: "Lebua State Tower",
      },
      {
        time: "8:00 PM",
        activity: "Second Stop - Vertigo",
        description: "Open-air rooftop with 360-degree views",
        location: "Banyan Tree Hotel",
      },
      {
        time: "9:30 PM",
        activity: "Third Stop - Octave",
        description: "Three-level rooftop with different vibes",
        location: "Marriott Hotel Sukhumvit",
      },
      {
        time: "11:00 PM",
        activity: "Final Stop - CRU Champagne Bar",
        description: "Sophisticated champagne bar to end the night",
        location: "Red Sky Hotel",
      },
    ],
    reviews: [
      {
        name: "Emma Wilson",
        rating: 5,
        date: "1 week ago",
        comment:
          "Incredible views and amazing atmosphere at every stop! Our guide was knowledgeable and got us great spots for photos.",
        verified: true,
      },
      {
        name: "Jake Morrison",
        rating: 4,
        date: "2 weeks ago",
        comment:
          "Great tour of Bangkok's rooftop scene. Each bar had its own character. Wish we had more time at each location.",
        verified: true,
      },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Sky+Bar+Views",
      "/placeholder.svg?height=400&width=600&text=Rooftop+Cocktails",
      "/placeholder.svg?height=400&width=600&text=City+Skyline",
      "/placeholder.svg?height=400&width=600&text=Group+Photos",
    ],
    highlights: [
      "4 world-class rooftop venues",
      "Stunning 360-degree city views",
      "VIP reservations included",
      "Expert local guide",
      "Perfect for photos",
      "Transportation included",
    ],
    whatToBring: [
      "Smart casual attire",
      "Comfortable walking shoes",
      "Camera for photos",
      "Cash for additional drinks",
      "Light jacket for evening",
    ],
    importantInfo: [
      "Dress code strictly enforced",
      "Weather dependent",
      "Advance reservations required",
      "ID required at all venues",
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before tour",
    ageRestriction: "21+ years old",
    weatherPolicy: "Tour may be modified for weather conditions",
    accessibility: ["Elevator access to all venues", "Wheelchair accessible"],
    languages: ["English", "Thai"],
    faqs: [
      {
        question: "What's the dress code?",
        answer: "Smart casual required. No shorts, flip-flops, or athletic wear.",
      },
    ],
    safetyMeasures: ["Licensed transportation", "Emergency contacts", "First aid trained guide"],
    tags: ["rooftop bars", "skyline views", "cocktails", "nightlife"],
    difficulty: "Easy",
    physicalRequirements: "Ability to walk between venues",
    dressCode: "Smart casual required",
    seasonality: "Available year-round",
    bestTimeToVisit: "Sunset timing for best views",
    relatedExperiences: ["vip-nightclub-package", "private-boat-party"],
  },
  {
    id: "street-food-tour",
    title: "Street Food Tour",
    description: "Discover authentic Thai street food with a local foodie guide.",
    longDescription:
      "Embark on a culinary adventure through Bangkok's vibrant street food scene with our expert local foodie guide. This isn't just a food tour - it's a cultural immersion into the heart of Thai cuisine and local life. Navigate bustling markets, hidden alleyways, and local favorites known only to Bangkok natives. Taste over 15 different dishes from legendary vendors, learn about ingredients and cooking techniques, and discover the stories behind each dish. From spicy som tam to sweet mango sticky rice, experience the full spectrum of Thai flavors while exploring neighborhoods tourists rarely see.",
    price: 89,
    rating: 4.8,
    reviewCount: 167,
    category: "dining",
    duration: "3-4 hours",
    groupSize: "4-12 people",
    location: "Chinatown",
    meetingPoint: "MRT Wat Mangkon Station, Exit 1",
    features: ["10+ Food Stops", "Local Guide", "Drinks Included", "Cultural Insights"],
    included: [
      "Expert local food guide",
      "15+ food tastings",
      "Traditional Thai desserts",
      "Local beverages",
      "Cultural explanations",
      "Market exploration",
    ],
    notIncluded: ["Hotel pickup/drop-off", "Additional food purchases", "Alcoholic beverages", "Souvenirs"],
    itinerary: [
      {
        time: "10:00 AM",
        activity: "Market Introduction",
        description: "Meet guide and explore traditional wet market",
        location: "Khlong Toei Market",
      },
      {
        time: "10:30 AM",
        activity: "Street Food Tastings Begin",
        description: "Start with traditional Thai breakfast dishes",
        location: "Various street stalls",
      },
      {
        time: "12:00 PM",
        activity: "Lunch Specialties",
        description: "Sample famous Thai lunch dishes and regional specialties",
        location: "Local restaurants",
      },
      {
        time: "1:30 PM",
        activity: "Dessert & Drinks",
        description: "Traditional sweets and Thai beverages",
        location: "Dessert vendors",
      },
    ],
    reviews: [
      {
        name: "Lisa Chen",
        rating: 5,
        date: "3 days ago",
        comment:
          "Amazing food tour! Our guide was incredibly knowledgeable and took us to places we never would have found. Every dish was delicious!",
        verified: true,
      },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Street+Food+Stalls",
      "/placeholder.svg?height=400&width=600&text=Thai+Dishes",
      "/placeholder.svg?height=400&width=600&text=Market+Scene",
      "/placeholder.svg?height=400&width=600&text=Food+Tasting",
    ],
    highlights: [
      "15+ authentic food tastings",
      "Expert local foodie guide",
      "Hidden local gems",
      "Cultural food education",
      "Traditional markets",
      "Vegetarian options available",
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Appetite for adventure",
      "Camera for food photos",
      "Cash for additional purchases",
      "Open mind for new flavors",
    ],
    importantInfo: [
      "Dietary restrictions accommodated",
      "Vegetarian options available",
      "Spice levels can be adjusted",
      "Food safety standards maintained",
    ],
    cancellationPolicy: "Free cancellation up to 12 hours before tour",
    ageRestriction: "All ages welcome",
    weatherPolicy: "Tour continues in light rain with covered areas",
    accessibility: ["Some walking required", "Not fully wheelchair accessible"],
    languages: ["English", "Thai"],
    faqs: [
      {
        question: "Is the food safe to eat?",
        answer: "Yes! We only visit vendors with high turnover and good hygiene practices.",
      },
    ],
    safetyMeasures: ["Vetted food vendors", "Hygiene standards", "Emergency contacts"],
    tags: ["street food", "thai cuisine", "cultural tour", "local experience"],
    difficulty: "Easy",
    physicalRequirements: "Moderate walking required",
    dressCode: "Casual comfortable clothing",
    seasonality: "Available year-round",
    bestTimeToVisit: "Morning tours recommended",
    relatedExperiences: ["thai-boxing-experience", "private-boat-party"],
  },
  {
    id: "jet-ski-adventure",
    title: "Jet Ski Adventure",
    description: "High-speed jet ski adventure through Bangkok's waterways.",
    longDescription:
      "Feel the adrenaline rush as you navigate Bangkok's intricate network of canals and waterways on a high-powered jet ski. This thrilling adventure takes you away from the crowded streets into a different side of Bangkok - the Venice of the East. Race through narrow klongs (canals), past traditional stilt houses, floating markets, and lush tropical vegetation. Our experienced guides lead you on safe routes while ensuring maximum excitement. Perfect for thrill-seekers who want to combine adventure with sightseeing, this unique perspective of Bangkok offers photo opportunities and memories that will last a lifetime.",
    price: 159,
    rating: 4.5,
    reviewCount: 92,
    category: "water",
    duration: "2-3 hours",
    groupSize: "2-8 people",
    location: "Pattaya",
    meetingPoint: "Pattaya Beach Jet Ski Center",
    features: ["Jet Ski Rental", "Safety Equipment", "Instructor", "Photos"],
    included: [
      "Jet ski rental for full duration",
      "Professional safety briefing",
      "Life jackets and safety equipment",
      "Experienced guide/instructor",
      "Waterproof phone case",
      "Action photos during ride",
    ],
    notIncluded: ["Transportation to Pattaya", "Food and beverages", "Insurance coverage", "Fuel surcharge"],
    itinerary: [
      {
        time: "9:00 AM",
        activity: "Safety Briefing",
        description: "Learn jet ski operation and safety procedures",
        location: "Jet Ski Center",
      },
      {
        time: "9:30 AM",
        activity: "Practice Session",
        description: "Get comfortable with jet ski controls in safe area",
        location: "Practice zone",
      },
      {
        time: "10:00 AM",
        activity: "Canal Adventure",
        description: "Navigate through Bangkok's historic waterways",
        location: "Various canals",
      },
      {
        time: "11:30 AM",
        activity: "Photo Stop",
        description: "Stop for photos and refreshments",
        location: "Scenic viewpoint",
      },
      {
        time: "12:00 PM",
        activity: "Return Journey",
        description: "High-speed return to base",
        location: "Back to center",
      },
    ],
    reviews: [
      {
        name: "Chris Taylor",
        rating: 5,
        date: "1 week ago",
        comment:
          "Incredible adrenaline rush! The guide was excellent and the routes were amazing. Saw parts of Bangkok I never knew existed.",
        verified: true,
      },
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Jet+Ski+Action",
      "/placeholder.svg?height=400&width=600&text=Canal+Views",
      "/placeholder.svg?height=400&width=600&text=Group+Adventure",
      "/placeholder.svg?height=400&width=600&text=Safety+Briefing",
    ],
    highlights: [
      "High-speed jet ski adventure",
      "Explore Bangkok's hidden canals",
      "Professional instruction included",
      "All safety equipment provided",
      "Unique city perspective",
      "Action photography included",
    ],
    whatToBring: [
      "Swimwear and change of clothes",
      "Waterproof sunscreen",
      "Towel",
      "Sunglasses with strap",
      "Cash for deposits",
    ],
    importantInfo: [
      "Swimming ability required",
      "Weather dependent activity",
      "Age and weight restrictions apply",
      "Valid ID required",
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before activity",
    ageRestriction: "16+ years old, under 18 requires adult supervision",
    weatherPolicy: "Cancelled for unsafe weather conditions",
    accessibility: ["Not suitable for mobility limitations", "Swimming ability required"],
    languages: ["English", "Thai"],
    faqs: [
      {
        question: "Do I need experience?",
        answer: "No experience necessary! Full instruction and practice session included.",
      },
    ],
    safetyMeasures: ["Professional instruction", "Safety equipment", "Emergency procedures", "Insurance coverage"],
    tags: ["jet ski", "water sports", "adventure", "canals", "adrenaline"],
    difficulty: "Moderate",
    physicalRequirements: "Swimming ability and basic fitness required",
    dressCode: "Swimwear required, casual clothes for briefing",
    seasonality: "Best during dry season, weather dependent",
    bestTimeToVisit: "Morning sessions recommended",
    relatedExperiences: ["private-boat-party", "thai-boxing-experience"],
  },
]

export function getExperience(id: string): Experience | undefined {
  return experiences.find((e) => e.id === id)
}

export function getRelatedExperiences(currentId: string, relatedIds: string[]): Experience[] {
  return experiences.filter((e) => relatedIds.includes(e.id) && e.id !== currentId)
}
