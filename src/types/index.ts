export type VerificationStatus = 
  | 'VERIFIED' 
  | 'SEED_DATA_NEEDS_CONFIRMATION' 
  | 'NEEDS_HUMAN_REVIEW';

export type PropertyCategory = 
  | 'Luxury Apartments'
  | 'Private Enclaves & Villas'
  | 'Commercial & Corporate'
  | 'High-Rise Residences';

export interface ProjectSpecification {
  label: string;
  value: string;
  isVerified?: boolean;
}

export interface ProjectGalleryImage {
  url: string;
  caption: string;
  tag: string;
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
  propertyType: PropertyCategory;
  summary: string;
  editorialOverview: string[];
  startingPrice: string | null;
  priceNote: string;
  priceCheckedAt: string | null;
  configurations: string[];
  areaDetails: {
    carpetArea?: string;
    superBuiltUpArea?: string;
    plotArea?: string;
    measurementNote: string;
  };
  specifications: ProjectSpecification[];
  amenitiesProject: string[];
  amenitiesTownship: string[];
  lifestyleHighlights: string[];
  status: string;
  possessionInfo: string | null;
  reraNumber: string | null;
  reraVerificationUrl: string | null;
  officialSourceUrls: string[];
  imageHero: string;
  gallery: ProjectGalleryImage[];
  faq: ProjectFAQ[];
  lastVerifiedAt: string;
  verificationStatus: VerificationStatus;
  reviewerNotes: string;
  leadFormEnabled: boolean;
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  authorRole: string;
  readTime: string;
  category: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bulletPoints?: string[];
    callout?: string;
  }[];
  relatedArticles?: string[];
  relatedProjects?: string[];
}

export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export interface LeadSubmissionPayload {
  name: string;
  phone: string;
  email?: string;
  projectSlug?: string;
  projectName?: string;
  timeline?: string;
  budgetRange?: string;
  userCityCountry?: string;
  preferredContactMethod?: 'WhatsApp' | 'Phone Call' | 'Email';
  requestedNextStep?: 'Project Details & Pricing' | 'Schedule Private Site Visit' | 'Arrange Virtual Consultation' | 'Request Brochure';
  notes?: string;
  consentGiven: boolean;
  honeypot?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  sourceUrl?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  message: string;
  leadId?: string;
  status: 'DELIVERED_CRM' | 'QUEUED_LOCALLY_PENDING_CREDENTIALS' | 'REJECTED_VALIDATION';
  timestamp: string;
  whatsAppDirectUrl?: string;
}
