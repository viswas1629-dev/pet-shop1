import type { Pet } from '../types'

export const WHATSAPP_NUMBER = '6381793062'

export const createGeneralWhatsAppMessage = (): string => {
  return `Hello Paw & Palace Team! 🐾

I would like to enquire about visiting your pet shop / sanctuary.

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
Paw & Palace Customer`
}

export const createPetWhatsAppMessage = (pet: Pet): string => {
  return `Hello Paw & Palace Team! 🐾

I am interested in booking / visiting the following pet:

━━━━━━━━━━━━━━━━━━
PET DETAILS
━━━━━━━━━━━━━━━━━━

Pet Name: ${pet.name}
Category: ${pet.category}
Breed: ${pet.breed}
Age: ${pet.age}
Gender: ${pet.gender}
Price: $${pet.price}
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

Please let me know whether this pet is currently available and how I can proceed with the visit/booking.

Thank you!
Paw & Palace Customer`
}

export const getWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
