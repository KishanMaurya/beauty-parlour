export const SITE = {
  name: "Glow & Shine Beauty Parlour",
  url: "https://sonypalour.com",
  phone: "+919519025223",
  phoneDisplay: "+91 95190 25223",
  email: "glowshine@gmail.com",
  address:
    "Kharhatti Mohal Ward No.1, Link Marg Road, Gopiganj, UP 221303",
} as const;

export const services = [
  {
    emoji: "💄",
    icon: "🌸",
    gradient: "linear-gradient(135deg, #f4a7b9 0%, #d4547e 40%, #9b3060 100%)",
    name: "Bridal Makeup",
    desc: "Flawless HD, airbrush & signature bridal looks by Priya Ma'am and our senior artists. Your dream wedding look, perfected.",
    tags: ["HD Makeup", "Airbrush", "Signature Look"],
  },
  {
    emoji: "✨",
    icon: "💎",
    gradient: "linear-gradient(135deg, #ede0f8 0%, #9b50c0 50%, #4d1575 100%)",
    name: "Advanced Skincare",
    desc: "Facials, chemical peels, hydrating masks & full-body treatments by certified skincare specialists for radiant, healthy skin.",
    tags: ["Facials", "Peels", "Body Treatments"],
  },
  {
    emoji: "💇",
    icon: "✂️",
    gradient: "linear-gradient(135deg, #f5e6d8 0%, #c9a84c 50%, #8b6010 100%)",
    name: "Hair Care & Styling",
    desc: "Expert cuts, colouring, keratin treatments, hair spas & pre-wedding styling by our seasoned hairstylists.",
    tags: ["Cut & Color", "Keratin", "Hair Spa"],
  },
  {
    emoji: "💅",
    icon: "🌺",
    gradient: "linear-gradient(135deg, #fde8ef 0%, #f4a7b9 50%, #d4547e 100%)",
    name: "Nail Art & Spa",
    desc: "Classic manicures, luxury pedicures, bomb spa treatments and intricate nail art for beautifully groomed hands and feet.",
    tags: ["Manicure", "Pedicure", "Nail Art"],
  },
  {
    emoji: "🪷",
    icon: "🌸",
    gradient: "linear-gradient(135deg, #3d1030 0%, #7b2d50 40%, #c9a84c 100%)",
    name: "Mehndi Art",
    desc: "Exquisite bridal and party mehndi designs — from traditional rajasthani patterns to modern arabic and fusion styles crafted by expert mehndi artists.",
    tags: ["Bridal Mehndi", "Arabic Design", "Rajasthani"],
  },
  {
    emoji: "🎓",
    icon: "⭐",
    gradient: "linear-gradient(135deg, #c9a84c 0%, #d4547e 50%, #9b3060 100%)",
    name: "Party & Event Makeup",
    desc: "High-definition makeup for every occasion — from intimate gatherings to grand celebrations, tailored to every budget.",
    tags: ["Party Makeup", "HD Looks", "All Budgets"],
  },
] as const;

export const signatureServices = [
  {
    title: "Hair Studio",
    description: "Haircuts, color, keratin, hair spa",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=80",
    icon: "scissors" as const,
  },
  {
    title: "Skin Therapy",
    description: "Facials, detox, glow treatment, acne care",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80",
    icon: "leaf" as const,
  },
  {
    title: "Nail Artistry",
    description: "Manicure, pedicure, gel extensions",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&auto=format&fit=crop&q=80",
    icon: "hand" as const,
  },
  {
    title: "Makeup & Body",
    description: "Bridal, party makeup, body polishing",
    image: "/hero.jpg",
    icon: "makeup" as const,
  },
] as const;

export const pricingPlans = [
  {
    tier: "Essential Glow",
    name: "Basic Radiance",
    price: "1,999",
    period: "per session",
    featured: false,
    features: [
      "Party Makeup by Sony Ma'am",
      "Basic Facial Treatment",
      "Hair Wash & Blowdry",
      "Eyebrow Shaping",
    ],
    cta: "📞 Book This Package",
  },
  {
    tier: "Bridal Bliss",
    name: "Signature Bridal",
    price: "9,999",
    period: "complete package",
    featured: true,
    badge: "Most Popular",
    features: [
      "Signature Makeup by Sony Ma'am",
      "Airbrush Foundation",
      "Bridal Hair Styling",
      "Luxury Pedicure & Manicure",
      "Advanced Bridal Facial",
      "Saree / Lehenga Draping",
      "Pre-bridal Skin Prep Session",
    ],
    cta: "📞 Book Bridal Package",
  },
  {
    tier: "Premium Care",
    name: "Glow Monthly",
    price: "3,999",
    period: "per month",
    featured: false,
    features: [
      "2 Facial Treatments / Month",
      "Unlimited Hair Washes",
      "Monthly Nail Appointment",
      "Waxing Services (2x)",
      "Hair Spa Massage Sessions (1x)",
      "Skincare Product Consultation",
    ],
    cta: "📞 Subscribe & Save",
  },
] as const;

export const galleryItems = [
  {
    image: "/gallery/gallery-1.jpg",
    label: "Traditional Bridal Look",
  },
  {
    image: "/gallery/gallery-2.jpg",
    label: "Signature Bridal Makeup",
  },
  {
    image: "/gallery/gallery-3.jpg",
    label: "Airbrush Bridal Look",
  },
  {
    image: "/gallery/gallery-4.jpg",
    label: "Royal Bridal Makeup",
  },
  {
    image: "/gallery/gallery-5.jpg",
    label: "Party Glam Makeup",
  },
  {
    image: "/gallery/gallery-6.jpg",
    label: "Classic Bridal Makeup",
  },
] as const;

export const testimonials = [
  {
    text: "Sony Ma'am made me look absolutely stunning on my wedding day. The airbrush makeup lasted all 12 hours without a touch-up. I felt like a queen!",
    initials: "AN",
    name: "Anjali Narayan",
    service: "Signature Bridal Makeup",
  },
  {
    text: "The skincare course at Glow & Shine completely transformed my career. Small batches, personal attention, and international certification — worth every penny!",
    initials: "PS",
    name: "Pooja Shukla",
    service: "Skincare Academy Course",
  },
  {
    text: "My pre-bridal sessions here gave me the most glowing skin I've ever had. The luxury spa pedicure is now my monthly guilty pleasure. Highly recommend!",
    initials: "RM",
    name: "Riya Mishra",
    service: "Monthly Glow Package",
  },
  {
    text: "Couldn't believe how affordable HD bridal makeup could be! The Sr. Artist did an incredible job — all my wedding photos are magazine-worthy. Thank you!",
    initials: "SK",
    name: "Sunita Kashyap",
    service: "HD Bridal Package",
  },
  {
    text: "I did the Complete Makeup Artistry Course here and got placed within two months of graduating. The hands-on training is exceptional and the faculty is world-class!",
    initials: "VT",
    name: "Vaishnavi Tripathi",
    service: "Complete Makeup Artistry",
  },
] as const;

export const courses = [
  "Basic Makeup Course",
  "Advance Makeup",
  "Skin & Hair (Short)",
  "Skin & Hair (Long)",
  "Hairstyling — Basic",
  "Hairstyling — Advance",
  "Personality Development",
  "Complete Beautician",
  "Hair Technician",
  "Makeup Artistry",
] as const;

export const stats = [
  { count: 1200, label: "Happy Brides", suffix: "+" },
  { count: 8, label: "Years Experience", suffix: "" },
  { count: 500, label: "Students Trained", suffix: "+" },
  { count: 15, label: "Expert Artists", suffix: "+" },
  { count: 4.9, label: "Google Rating ★", suffix: "", decimal: true },
] as const;

export const bookingServices = [
  "Hair Services",
  "Skin Therapy",
  "Nail Artistry",
  "Makeup & Body",
  "Bridal Makeup",
  "Party / Event Makeup",
  "Academy Enquiry",
] as const;

export const bookingBranches = [
  "Gopiganj – Main Branch (Link Marg Road)",
] as const;

export const bookingTimes = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
] as const;

export const INSTAGRAM_URL =
  "https://www.instagram.com/glow_shine_beauty_makeover?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BeautySalon",
      "@id": "https://sonypalour.com/#salon",
      name: "Glow & Shine Beauty Parlour",
      alternateName: "Glow and Shine Beauty Parlour Gopiganj",
      description:
        "Premier beauty parlour in Gopiganj offering bridal makeup, HD & airbrush makeup, skincare facials, hair care, mehndi, nail art, spa and certified beauty academy courses.",
      url: "https://sonypalour.com/",
      telephone: "+919519025223",
      priceRange: "₹₹",
      image: "https://sonypalour.com/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kharhatti Mohal Ward No.1, Link Marg Road",
        addressLocality: "Gopiganj",
        addressRegion: "Uttar Pradesh",
        postalCode: "221303",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.3517,
        longitude: 82.4786,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "18:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "200",
        bestRating: "5",
      },
    },
  ],
};
