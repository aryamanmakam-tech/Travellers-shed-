
export interface Trip {
  id: string;
  name: string;
  destination: string;
  duration: string;
  price: number;
  image: string;
  type: 'Domestic' | 'International';
  description: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: DayPlan[];
  highlights: string[];
  category: 'Luxe' | 'Adventure' | 'Signature' | 'Indulgence';
}

export interface DayPlan {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Destination {
  id: string;
  name: string;
  type: 'Domestic' | 'International';
  image: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  trip: string;
}

export interface CustomizationState {
  hotelUpgrade: boolean;
  privateExperience: boolean;
  adventureActivities: boolean;
  visaAssistance: boolean;
  flightInclusion: boolean;
  travellers: number;
  startDate: string;
}
