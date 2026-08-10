import type { FAQItem, Service, TimelineEvent } from '../types'

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Adoption',
    question: 'What health guarantees and paperwork accompany each companion pet?',
    answer: 'Every companion pet at Paw & Palace undergoes a multi-point veterinary exam, DNA screening for hereditary conditions, full core vaccination suite, microchipping, and comes with a 1-Year Comprehensive Health Guarantee along with official pedigree certificates.'
  },
  {
    id: 'faq-2',
    category: 'Adoption',
    question: 'Can I arrange a private sanctuary visit before deciding to adopt?',
    answer: 'Absolutely. We offer private white-glove showroom consultations by appointment. You will meet with our senior pet behaviorists in a peaceful, luxury suite designed to allow natural interaction with your prospective companion.'
  },
  {
    id: 'faq-3',
    category: 'Shipping & Visits',
    question: 'How does Paw & Palace transport pets safely across regions or internationally?',
    answer: 'We utilize climate-controlled, luxury Pet Nanny chaperones. Your companion travels inside VIP cabin accommodations accompanied by a certified veterinary handler, never in cargo holds.'
  },
  {
    id: 'faq-4',
    category: 'Nutrition',
    question: 'Are all food products organic and veterinary nutritionist certified?',
    answer: 'Yes, 100% of our dietary inventory is strictly curated. We reject synthetic fillers, chemical preservatives, corn, and sub-standard meat meals. Every brand is formulated by board-certified veterinary nutritionists.'
  },
  {
    id: 'faq-5',
    category: 'Health & Care',
    question: 'Does Paw & Palace provide ongoing support after adoption?',
    answer: 'Yes! Every adoption includes 24/7 VIP Tele-Vet Concierge access, behavioral consults, and lifetime dietary guidance for the entire life of your companion.'
  }
]

export const servicesData: Service[] = [
  {
    id: 'srv-1',
    title: 'Aura Luxury Spa & Grooming',
    tagline: 'Hydrotherapy, Silk Fur Mask & Botanical Aromatherapy',
    description: 'An indulgent pampering experience tailored to your pet’s coat texture. Includes warm ozone bubble baths, claw trimming, ear sanitation, and coat conditioning.',
    iconName: 'Sparkles',
    features: ['Ozone Bubble Therapy', 'Hand Blow-Drying & Styling', 'Blueberry Facial Scrub', 'Organic Paw Balm'],
    badge: 'Most Popular',
    priceStarting: '$95',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'srv-2',
    title: 'Concierge Veterinary Care',
    tagline: 'Preventative Wellness & 24/7 VIP Tele-Health',
    description: 'On-demand wellness checkups, custom vaccination suites, pediatric nutrition planning, and instant tele-health access with top-tier veterinary surgeons.',
    iconName: 'Stethoscope',
    features: ['Comprehensive Diagnostics', 'Genetic DNA Panels', 'Nutritional Blueprint', 'Priority Tele-Vet Access'],
    badge: 'Essential',
    priceStarting: '$150',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'srv-3',
    title: 'Palace Resort & Suites',
    tagline: '5-Star Overnight Accommodations & Play Havens',
    description: 'Luxury climate-controlled private suites with orthopedic memory foam beds, live HD webcam access for owners, gourmet meal prep, and daily play sessions.',
    iconName: 'Hotel',
    features: ['24/7 HD Camera Access', 'Orthopedic Bedding', 'Individual Play Havens', 'Gourmet Chef Meals'],
    badge: '5-Star Luxury',
    priceStarting: '$120 / night',
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'srv-4',
    title: 'Puppy & Kitten Academy',
    tagline: 'Positive Reinforcement & Social Harmony',
    description: 'Private 1-on-1 behavior modification, litter/house training mastery, leash walk protocol, and gentle socialization guided by certified behavioral experts.',
    iconName: 'GraduationCap',
    features: ['Custom Behavior Plan', 'House Training Guarantee', 'Socialization Labs', 'Owner Handover Manual'],
    badge: 'Expert Led',
    priceStarting: '$210',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=1000'
  }
]

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2012',
    title: 'Sanctuary Founding',
    description: 'Founded with a singular vision: to revolutionize companion pet breeding with ethical 100% cage-free sanctuary living.',
    highlight: 'Zero Cage Policy Established'
  },
  {
    year: '2016',
    title: 'Veterinary Excellence Center',
    description: 'Opened our flagship in-house diagnostic laboratory equipped with advanced DNA sequencing and holistic wellness care.',
    highlight: 'Top Pet Care Innovation Award'
  },
  {
    year: '2020',
    title: 'VIP Nanny Transport Launch',
    description: 'Pioneered zero-stress climate-controlled cabin transport chaperones for long-distance companion deliveries worldwide.',
    highlight: '10,000+ Safe Journeys'
  },
  {
    year: '2025',
    title: 'Global Luxury Boutique',
    description: 'Recognized as an international benchmark for luxury pet care, organic nutrition, and ethical breeding standards.',
    highlight: 'Awwwards Design & Service Excellence'
  }
]
