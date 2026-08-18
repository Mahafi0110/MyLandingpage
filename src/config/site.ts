export const siteConfig = {
  businessName: 'GreenLeaf Nutrition',
  tagline: 'Personalized Nutrition for a Healthier You',

  contact: {
    phone: '+1 (555) 123-4567',
    phoneHref: '+15551234567',
    email: 'hello@greenleafnutrition.com',
    whatsapp: '15551234567',
    whatsappMessage: 'Hi! I would like to book a nutrition consultation.',
    address: '123 Wellness Avenue, Health City, HC 10001',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=123+Wellness+Avenue+Health+City',
  },

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Contact', href: '#contact' },
  ],
} as const

export const images = {
  hero: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
  about: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
  cta: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
} as const

export const services = [
  {
    title: 'Personalized Meal Plans',
    description:
      'Custom meal plans tailored to your goals, preferences, and lifestyle — designed for sustainable results.',
    icon: 'mealPlan' as const,
  },
  {
    title: 'Nutrition Planning',
    description:
      'Evidence-based nutrition strategies to optimize energy, manage weight, and support overall wellness.',
    icon: 'nutrition' as const,
  },
  {
    title: 'Healthy Lifestyle Guidance',
    description:
      'Practical coaching on habits, grocery shopping, and mindful eating for long-term health.',
    icon: 'lifestyle' as const,
  },
  {
    title: 'Dietary Consultations',
    description:
      'One-on-one sessions to address specific dietary needs, allergies, and health conditions.',
    icon: 'consultation' as const,
  },
  {
    title: 'Weight Management',
    description:
      'Balanced approaches to healthy weight loss or gain without restrictive fad diets.',
    icon: 'weight' as const,
  },
  {
    title: 'Family Nutrition',
    description:
      'Meal planning and nutrition education for families — making healthy eating enjoyable for everyone.',
    icon: 'family' as const,
  },
] as const

export const benefits = [
  {
    title: 'Certified Expertise',
    description:
      'Work with a certified nutritionist backed by years of clinical and coaching experience.',
    icon: 'certificate' as const,
  },
  {
    title: 'Fully Personalized',
    description:
      'Every plan is built around your unique body, goals, and daily routine — never one-size-fits-all.',
    icon: 'personalized' as const,
  },
  {
    title: 'Sustainable Results',
    description:
      'Focus on lasting habit change rather than quick fixes, so you feel great for the long run.',
    icon: 'sustainable' as const,
  },
  {
    title: 'Ongoing Support',
    description:
      'Regular check-ins and adjustments to keep you motivated and on track every step of the way.',
    icon: 'support' as const,
  },
] as const

export const aboutHighlights = [
  '10+ years of nutrition coaching experience',
  '500+ clients transformed their health',
  'Science-backed, personalized approach',
] as const
