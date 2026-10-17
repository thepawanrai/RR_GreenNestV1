export interface Specification {
  label: string;
  value: string;
  isVerified?: boolean;
}

export interface GalleryItem {
  url: string;
  caption: string;
  tag?: string;
}

export interface AreaDetails {
  carpetArea?: string;
  superBuiltUpArea?: string;
  plotArea?: string;
  measurementNote?: string;
}

export interface ProjectFAQ {
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  slug: string;
  officialName: string;
  displayName: string;
  tagline: string;
  developer: string;
  developerRelationship: string;
  location: string;
  localityHub: string;
  propertyType: 'Luxury Apartments' | 'Luxury Villas' | 'Commercial & Retail' | 'Township Plots' | string;
  summary: string;
  editorialOverview: string[];
  startingPrice: string;
  priceNote: string;
  priceCheckedAt: string;
  configurations: string[];
  areaDetails: AreaDetails;
  specifications: Specification[];
  amenitiesProject: string[];
  amenitiesTownship: string[];
  lifestyleHighlights: string[];
  status: string;
  possessionInfo: string;
  reraNumber: string;
  reraVerificationUrl: string;
  officialSourceUrls: string[];
  imageHero: string;
  gallery: GalleryItem[];
  faq?: ProjectFAQ[];
  lastVerifiedAt?: string;
  verificationStatus?: string;
  reviewerNotes?: string;
  leadFormEnabled?: boolean;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  content: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  projectAcquired: string;
  category: 'Luxury Homeowners' | 'Medical Specialists' | 'Corporate Leaders' | 'NRI Investors';
  quote: string;
  verifiedBuyer: boolean;
  avatarInitials: string;
  year: string;
}
