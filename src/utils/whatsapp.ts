import type { Pet, PetFood } from '../types'
import { formatCurrency } from './formatCurrency'

export const WHATSAPP_NUMBER = '6381793062'

export interface ContactFormInput {
  name: string
  email: string
  phone?: string
  interest: string
  message: string
}

export const createGeneralWhatsAppMessage = (): string => {
  return `Hello Mr & Mrs Team! 🐾

I would like to enquire about visiting your pet shop.

Customer Details:
Full Name: ____________________
Phone / WhatsApp: ____________________
Address: ____________________
City: ____________________
State: ____________________
PIN / ZIP Code: ____________________

Preferred Visit Date: ____________________
Preferred Visit Time: ____________________

What I am looking for:
____________________

Additional Message:
____________________

Please share the available options and further details.

Thank you!
Mr & Mrs Customer`
}

export const createPetWhatsAppMessage = (pet: Pet): string => {
  return `Hello Mr & Mrs Team! 🐾

I am interested in visiting / enquiring about the following pet:

━━━━━━━━━━━━━━━━━━
PET DETAILS
━━━━━━━━━━━━━━━━━━

Pet Name: ${pet.name}
Category: ${pet.category}
Breed: ${pet.breed}
Age: ${pet.age}
Gender: ${pet.gender}
Price: ${formatCurrency(pet.price)}
Availability: ${pet.availability}
Pet ID: ${pet.id}

━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━

Full Name: ____________________
Phone / WhatsApp: ____________________
Address: ____________________
City: ____________________
State: ____________________
PIN / ZIP Code: ____________________

Preferred Visit Date: ____________________
Preferred Visit Time: ____________________

━━━━━━━━━━━━━━━━━━
ADDITIONAL INFORMATION
━━━━━━━━━━━━━━━━━━

How would you like to proceed?
____________________

Additional Notes:
____________________

Please let me know whether this pet is currently available and how I can proceed with the visit/enquiry.

Thank you!
Mr & Mrs Customer`
}

export const createFoodWhatsAppMessage = (food: PetFood): string => {
  return `Hello Mr & Mrs Team! 🐾

I am interested in this pet food product and would like to enquire about availability and purchase details.

━━━━━━━━━━━━━━━━━━
FOOD PRODUCT DETAILS
━━━━━━━━━━━━━━━━━━

Product Name: ${food.name}
Brand: ${food.brand}
Category: ${food.targetCategory}
Suitable For: ${food.targetCategory}
Weight: ${food.weight}
Price: ${formatCurrency(food.price)}
Availability: In Stock

Key Ingredients:
${food.ingredients.join(', ')}

Features:
${food.dietaryTags.join(', ')}

━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━

Full Name: ____________________

Phone / WhatsApp: ____________________

Address: ____________________

City: ____________________

State: ____________________

PIN / ZIP Code: ____________________

━━━━━━━━━━━━━━━━━━
REQUEST DETAILS
━━━━━━━━━━━━━━━━━━

Quantity Required: ____________________

Preferred Delivery / Pickup: ____________________

Preferred Date: ____________________

Additional Notes:
____________________

Please confirm the product availability, final price, and next steps.

Thank you!
Mr & Mrs Customer`
}

export const createPetCareSupportWhatsAppMessage = (): string => {
  return `Hello, I recently purchased a pet from your shop and I would like some guidance on how to care for it.

Pet Details:
Pet Name: [Please enter pet name]
Pet Type/Breed: [Please enter pet type or breed]

I would like to know about:
• Recommended food
• Feeding quantity
• Feeding frequency
• Basic daily care
• Other important care instructions

Please guide me on the proper basic care for this pet.

Thank you.`
}

export const createContactWhatsAppMessage = (formData: ContactFormInput): string => {
  const customerName = formData.name.trim()
  const customerEmail = formData.email.trim()
  const customerPhone = (formData.phone || '').trim() || 'N/A'
  const primaryInterest = formData.interest
  const customerMessage = formData.message.trim()

  return `Hello Mr & Mrs Pet Shop Team! 👋

I would like to make an enquiry about your pet shop.

Customer Details
----------------
Full Name: ${customerName}
Email: ${customerEmail}
Phone / WhatsApp: ${customerPhone}

Enquiry Type
------------
Primary Interest: ${primaryInterest}

Message / Special Request
-------------------------
${customerMessage}

I would like to know more details regarding my enquiry.

Thank you.`
}

export const getWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
