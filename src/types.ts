export * from './types/index';

// Backwards-compatible aliases & specific types
export type { ProjectSpecification as Specification } from './types/index';
export type { ProjectGalleryImage as GalleryItem } from './types/index';
export type { ProjectFAQ as FAQ } from './types/index';

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

export interface AreaDetails {
  carpetArea?: string;
  superBuiltUpArea?: string;
  plotArea?: string;
  measurementNote: string;
}
