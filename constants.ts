
import { Trip, Destination, Review } from './types';

export const TRIPS: Trip[] = [
  {
    id: 'bali-luxe-01',
    name: 'Bali Luxe Escape',
    destination: 'Bali',
    duration: '6 Nights / 7 Days',
    price: 89999,
    type: 'International',
    category: 'Luxe',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    description: 'A refined balance of exploration, comfort, and free time—designed for travellers who value quality experiences.',
    highlights: ['Luxury Villa with Private Pool', 'Sunset Dinner at Uluwatu', 'Guided Ubud Cultural Tour'],
    inclusions: ['Premium accommodation', 'Private transfers', 'Curated local experiences', 'Daily breakfast'],
    exclusions: ['International Flights', 'Personal expenses', 'Travel insurance'],
    itinerary: [
      { day: 1, title: 'Arrival in Bali', description: 'Meet and greet at Ngurah Rai International Airport and transfer to your private villa in Seminyak.', activities: ['Airport pickup', 'Check-in', 'Welcome Dinner'] },
      { day: 2, title: 'Seminyak Leisure', description: 'Enjoy a slow morning at the villa or explore the vibrant streets of Seminyak.', activities: ['Beach club visit', 'Spa session'] }
    ]
  },
  {
    id: 'kashmir-signature-02',
    name: 'Kashmir Signature Retreat',
    destination: 'Kashmir',
    duration: '5 Nights / 6 Days',
    price: 45000,
    type: 'Domestic',
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1598305312015-81216a69324e?auto=format&fit=crop&q=80&w=800',
    description: 'Experience the paradise on earth with luxury houseboat stays and private meadow tours.',
    highlights: ['Overnight Houseboat on Dal Lake', 'Pahalgam Meadow Picnic', 'Gulmarg Gondola Ride'],
    inclusions: ['Heritage stays', 'Private 4x4 transfers', 'All entry fees'],
    itinerary: [
      { day: 1, title: 'Srinagar Arrival', description: 'Arrive at Srinagar and check into a luxury houseboat.', activities: ['Shikara ride', 'Floating market visit'] }
    ],
    exclusions: ['Airfare', 'Personal laundry', 'Tips']
  },
  {
    id: 'himachal-trails-03',
    name: 'Himachal Mountain Trails',
    destination: 'Himachal Pradesh',
    duration: '7 Nights / 8 Days',
    price: 55000,
    type: 'Domestic',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800',
    description: 'A deep dive into the high-altitude landscapes of Spiti and Lahaul.',
    highlights: ['Key Monastery visit', 'Hikkim Post Office', 'Glamping in Chandra Tal'],
    inclusions: ['Boutique homestays', 'Oxygen cylinders', 'Expert mountain guides'],
    itinerary: [],
    exclusions: []
  },
  {
    id: 'dubai-urban-04',
    name: 'Dubai Urban Indulgence',
    destination: 'Dubai',
    duration: '4 Nights / 5 Days',
    price: 110000,
    type: 'International',
    category: 'Indulgence',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    description: 'Experience the zenith of urban luxury with sky-high dinners and desert safaris.',
    highlights: ['Burj Khalifa Sky access', 'Private Desert Safari', 'Yacht Cruise'],
    inclusions: ['5-star hotel', 'VIP visa processing', 'Limo transfers'],
    itinerary: [],
    exclusions: []
  }
];

export const DESTINATIONS: Destination[] = [
  { id: 'kash', name: 'Kashmir', type: 'Domestic', image: 'https://images.unsplash.com/photo-1598305312015-81216a69324e?auto=format&fit=crop&q=80&w=600', description: 'Heaven on earth with snowy peaks and serene lakes.' },
  { id: 'hima', name: 'Himachal Pradesh', type: 'Domestic', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=600', description: 'The land of gods and towering mountains.' },
  { id: 'goa', name: 'Goa', type: 'Domestic', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=600', description: 'Sun, sand, and vintage Portuguese charm.' },
  { id: 'bali', name: 'Bali', type: 'International', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600', description: 'Spiritual retreats and tropical paradise.' },
  { id: 'dubai', name: 'Dubai', type: 'International', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600', description: 'Modern marvels and golden deserts.' },
  { id: 'nepal', name: 'Nepal', type: 'International', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=600', description: 'The roof of the world.' }
];

export const REVIEWS: Review[] = [
  { id: 'r1', name: 'Aarav Mehta', rating: 5, comment: 'The Bali escape was perfectly curated. Every detail was taken care of.', trip: 'Bali Luxe Escape' },
  { id: 'r2', name: 'Sarah Jenkins', rating: 5, comment: 'Hands down the best travel agency for premium experiences. No mass tourism vibes!', trip: 'Kashmir Signature Retreat' }
];
