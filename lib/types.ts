export type ToiletCategory =
  | 'VIP Luxury Trailer'
  | 'Standard Construction Loo'
  | 'Accessible VIP Unit'
  | 'Single Executive Loo';

export interface ToiletUnit {
  _id: string;
  title: string;
  slug: string;
  category: ToiletCategory;
  dailyRateKSh: number;
  capacity: string;
  features: string[];
  images: {
    url: string;
    alt?: string;
  }[];
  isAvailable: boolean;
  internalVendorInfo?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  mainImage: {
    url: string;
    alt?: string;
  };
  body?: any;
  readTimeMinutes?: number;
  category?: string;
  contentHtml?: string[];
}

export interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  eventType: 'Wedding' | 'Corporate' | 'Construction Site' | 'Private Party' | 'Funeral' | 'Festival / Sports';
  location: string;
  guestCount: number;
  startDate: string;
  endDate: string;
  selectedUnits: string[];
  needAttendants: boolean;
  notes?: string;
}
