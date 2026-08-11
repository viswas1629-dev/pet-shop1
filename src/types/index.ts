export type PetCategory =
  | 'Dogs'
  | 'Cats'
  | 'Birds'
  | 'Fish'
  | 'Rabbits'
  | 'Hamsters'
  | 'Reptiles'
  | 'Exotic Pets'

export interface Pet {
  id: string
  name: string
  category: PetCategory
  breed: string
  age: string
  gender: 'Male' | 'Female'
  price: number
  availability: 'Available' | 'Reserved' | 'Adopted'
  isNewArrival: boolean
  isFeatured: boolean
  rating: number
  image: string
  galleryImages: string[]
  description: string
  temperament: string[]
  healthCheck: string
  vaccinationStatus: string
  weight: string
  origin: string
  careLevel: 'Easy' | 'Moderate' | 'Specialized'
}

export interface PetFood {
  id: string
  name: string
  brand: string
  targetCategory: PetCategory | 'All Pets'
  price: number
  originalPrice?: number
  rating: number
  reviewsCount: number
  weight: string
  image: string
  isPopular: boolean
  isOrganic: boolean
  dietaryTags: string[]
  description: string
  ingredients: string[]
  nutritionalBenefits: string[]
}

export interface Review {
  id: string
  author: string
  petName: string
  petBreed: string
  rating: number
  date: string
  avatar: string
  comment: string
  location: string
  verifiedBuyer: boolean
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'Pet Purchase' | 'Store Visits' | 'Adoption' | 'Health & Care' | 'Shipping & Visits' | 'Nutrition'
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  highlight: string
}
