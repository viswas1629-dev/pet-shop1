import type { FAQItem, TimelineEvent } from '../types'

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Pet Purchase',
    question: 'What health guarantees and paperwork accompany each companion pet?',
    answer: 'Every companion pet at Mr & Mrs undergoes a multi-point veterinary exam, DNA screening for hereditary conditions, full core vaccination suite, microchipping, and comes with a 1-Year Comprehensive Health Guarantee along with official pedigree certificates.'
  },
  {
    id: 'faq-2',
    category: 'Store Visits',
    question: 'Can I arrange a private store visit before deciding to choose a pet?',
    answer: 'Absolutely. We offer private showroom consultations by appointment. You will meet with our experienced pet specialists in a comfortable suite designed to allow natural interaction with your prospective companion.'
  },
  {
    id: 'faq-3',
    category: 'Shipping & Visits',
    question: 'How does Mr & Mrs transport pets safely across regions?',
    answer: 'We utilize climate-controlled, luxury Pet Chaperones. Your companion travels inside comfortable accommodations accompanied by a certified handler.'
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
    question: 'Does Mr & Mrs provide ongoing support after purchasing a pet?',
    answer: 'Yes! If you have any basic feeding, food quantity, or daily care questions after bringing your pet home, our team provides post-purchase pet care guidance via WhatsApp.'
  }
]

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2012',
    title: 'Pet Store Establishment',
    description: 'Founded with a singular vision: to revolutionize companion pet care with ethical, spacious, and premium living standards.',
    highlight: 'Strict Quality Care Established'
  },
  {
    year: '2016',
    title: 'Veterinary Excellence Center',
    description: 'Opened our flagship in-house diagnostic laboratory equipped with advanced DNA sequencing and holistic wellness care.',
    highlight: 'Top Pet Care Innovation Award'
  },
  {
    year: '2020',
    title: 'VIP Chaperone Transport Launch',
    description: 'Pioneered zero-stress climate-controlled cabin transport chaperones for long-distance companion deliveries.',
    highlight: '10,000+ Safe Journeys'
  },
  {
    year: '2025',
    title: 'Global Luxury Boutique',
    description: 'Recognized as a premier benchmark for luxury pet sales, organic nutrition, and ethical care standards.',
    highlight: 'Awwwards Design & Service Excellence'
  }
]
