import type { PetFood } from '../types'
import catFood1 from '../assets/pet-food/cat-food.webp'
import birdFood1 from '../assets/pet-food/bird-food.webp'
import fishFood1 from '../assets/pet-food/fish-food.webp'
import rabbitFood1 from '../assets/pet-food/rabbit-food.webp'
import hamsterFood1 from '../assets/pet-food/hamster-food.webp'

export const foodData: PetFood[] = [
  {
    id: 'food-1',
    name: 'Royal Heritage Canine Raw Feast',
    brand: 'Aura Nectar Premium',
    targetCategory: 'Dogs',
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviewsCount: 142,
    weight: '5.0 kg',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=1000',
    isPopular: true,
    isOrganic: true,
    dietaryTags: ['Grain-Free', 'High-Protein', 'Raw Freeze-Dried', 'Human-Grade'],
    description: 'Ultra-premium freeze-dried raw canine nutrition featuring grass-fed venison, wild salmon oil, organic blueberries, and probiotics.',
    ingredients: ['Grass-Fed Venison', 'Wild Alaskan Salmon Oil', 'Organic Blueberries', 'Organic Kelp', 'Live Probiotics'],
    nutritionalBenefits: [
      'Promotes radiant silky coat & healthy skin',
      'Supports joint mobility & bone density',
      'Optimizes digestion & nutrient absorption',
      'Boosts immune resistance'
    ]
  },
  {
    id: 'food-2',
    name: 'Crown Feline Salmon & Duck Pâté',
    brand: 'Palace Gourmet',
    targetCategory: 'Cats',
    price: 1799,
    originalPrice: 2199,
    rating: 5.0,
    reviewsCount: 98,
    weight: '2.4 kg (12 Cans)',
    image: catFood1,
    isPopular: true,
    isOrganic: true,
    dietaryTags: ['High Taurine', 'Grain-Free', 'Hydration Rich', 'No Artificial Preservatives'],
    description: 'Decadent slow-cooked duck breast paired with wild Pacific king salmon, infused with bone broth and essential taurine.',
    ingredients: ['Wild King Salmon', 'French Duck Breast', 'Simmered Bone Broth', 'Taurine Blend', 'Vitamin E'],
    nutritionalBenefits: [
      'Protects urinary tract health',
      'High protein ratio for sleek muscle',
      'Maximum hydration support',
      'Zero fillers, corn, or soy'
    ]
  },
  {
    id: 'food-3',
    name: 'Celestial Organic Nectar & Seed Blend',
    brand: 'Aura Avian Supreme',
    targetCategory: 'Birds',
    price: 899,
    rating: 4.8,
    reviewsCount: 64,
    weight: '1.8 kg',
    image: birdFood1,
    isPopular: false,
    isOrganic: true,
    dietaryTags: ['Organic Seed', 'Enriched Nectar', 'Feather Shine Formula'],
    description: 'Artisanal seed, berry, and flower blend specifically formulated for Conures, Parrots, and Macaws.',
    ingredients: ['Organic Sunflower Seeds', 'Dried Papaya Bits', 'Marigold Petals', 'Bee Pollen Powder', 'Chia Seeds'],
    nutritionalBenefits: [
      'Vibrant feather pigmentation',
      'Strengthens beak & claw density',
      'High antioxidant defense'
    ]
  },
  {
    id: 'food-4',
    name: 'Reef Monarch Micro-Pellets & Phytoplankton',
    brand: 'Oceanic Elite',
    targetCategory: 'Fish',
    price: 699,
    rating: 4.9,
    reviewsCount: 87,
    weight: '500 g',
    image: fishFood1,
    isPopular: true,
    isOrganic: false,
    dietaryTags: ['Color Enhancer', 'Slow Sinking', 'Reef Safe'],
    description: 'Cold-pressed marine micro-pellets packed with spirulina, krill, and astaxanthin to enhance aquatic brilliance.',
    ingredients: ['Antarctic Krill', 'Spirulina Algae', 'Astaxanthin', 'Marine Fish Meal', 'Omega 3 fatty acids'],
    nutritionalBenefits: [
      'Intensifies natural iridescence',
      'Keeps aquarium water crystal clear',
      'Rapid digestibility'
    ]
  },
  {
    id: 'food-5',
    name: 'Meadow Gold Timothy Hay & Botanical Crunch',
    brand: 'Velvet Burrow',
    targetCategory: 'Rabbits',
    price: 899,
    originalPrice: 1099,
    rating: 4.9,
    reviewsCount: 112,
    weight: '3.5 kg',
    image: rabbitFood1,
    isPopular: false,
    isOrganic: true,
    dietaryTags: ['1st Cut Hand Selected', 'High Fiber', 'Dental Care'],
    description: 'Hand-harvested sun-cured Timothy Hay enriched with dried chamomile, dandelion greens, and rose petals.',
    ingredients: ['100% Organic Timothy Grass', 'Dried Dandelion Leaf', 'Chamomile Flowers', 'Rose Petals'],
    nutritionalBenefits: [
      'Essential for natural tooth wear',
      'Promotes healthy gastrointestinal motility',
      'Calming aromatic effect'
    ]
  },
  {
    id: 'food-6',
    name: 'Gourmet Hamster Harvest Mix',
    brand: 'Tiny Feast',
    targetCategory: 'Hamsters',
    price: 599,
    rating: 4.7,
    reviewsCount: 52,
    weight: '1.0 kg',
    image: hamsterFood1,
    isPopular: false,
    isOrganic: true,
    dietaryTags: ['Foraging Delight', 'Insect Protein Added', 'Sugar-Free'],
    description: 'Multi-grain foraging blend enriched with dried mealworms, pumpkin seeds, and freeze-dried strawberries.',
    ingredients: ['Millet', 'Oats', 'Dried Mealworms', 'Pumpkin Seeds', 'Freeze-Dried Strawberries'],
    nutritionalBenefits: [
      'Satisfies natural foraging instincts',
      'Balanced animal protein',
      'Zero added sugars or syrups'
    ]
  }
]
