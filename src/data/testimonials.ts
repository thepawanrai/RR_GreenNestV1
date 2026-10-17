export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  clientCategory: 'Luxury Homeowner' | 'NRI Investor' | 'Medical Specialist' | 'Corporate Leader';
  projectPurchased: string;
  projectSlug: string;
  location: string;
  year: string;
  rating: number;
  headline: string;
  quote: string;
  verifiedDetails: string;
  avatarInitial: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Dr. Arvind & Sunita Srivastava',
    designation: 'Senior Consultant Neurosurgeon, Medanta Hospital Lucknow',
    clientCategory: 'Medical Specialist',
    projectPurchased: 'Shalimar Valencia Towers (Phase 2) — 4 BHK + Study',
    projectSlug: 'shalimar-valencia-towers-phase-2',
    location: 'Gomti Nagar Extension, Lucknow',
    year: '2024',
    rating: 5,
    headline: 'Uncompromising integrity, direct developer pricing, zero broker pressure.',
    quote: 'As a surgeon managing critical clinical hours, navigating Lucknow’s real estate market was daunting. Athar Mansoor from GreenNest provided completely objective, fact-based advisory. He cross-verified sanctioned carpet areas, walked us through the Shalimar OneWorld master plan, and secured direct developer allotment terms with absolute transparency. Zero buyer brokerage, verified UP-RERA documentation, and prompt follow-through.',
    verifiedDetails: 'Verified Resident Buyer · Allotment Sanctioned 2024',
    avatarInitial: 'AS'
  },
  {
    id: 'test-2',
    clientName: 'Rajeev & Meenakshi Agarwal',
    designation: 'Managing Director, Horizon FinTech & Regional Entrepreneur',
    clientCategory: 'Corporate Leader',
    projectPurchased: 'Shalimar 21 (Twenty One) — Sprawling 4 BHK Riverfront',
    projectSlug: 'shalimar-21',
    location: 'Sector 6, Shalimar OneWorld, Lucknow',
    year: '2024',
    rating: 5,
    headline: 'Found the ultra-private layout we wanted: strictly 2 residences per floor.',
    quote: 'We refused to compromise on privacy and wanted a quiet, low-density high-rise overlooking the Gomti riverfront. Athar introduced us to Shalimar 21 before public launch. His deep ten-year understanding of Shalimar Corp developments, construction timelines, and tower orientation was instrumental. GreenNest represents the gold standard of real estate advisory in Lucknow.',
    verifiedDetails: 'Verified Resident Buyer · Project RERA: UPRERAPRJ858081/05/2024',
    avatarInitial: 'RA'
  },
  {
    id: 'test-3',
    clientName: 'Tariq Masood & Family',
    designation: 'Vice President, Cloud Architecture (Dubai, UAE / Lucknow Origin)',
    clientCategory: 'NRI Investor',
    projectPurchased: 'Shalimar Marbella (3 BHK + Servant) & Commercial Suite',
    projectSlug: 'shalimar-marbella',
    location: 'Shalimar OneWorld, Lucknow',
    year: '2025',
    rating: 5,
    headline: 'Seamless remote purchase from Dubai with zero friction.',
    quote: 'Purchasing property in India from the UAE often comes with anxiety about authenticity. Athar provided video walkthroughs of the construction site, shared certified UP-RERA registrations, and coordinated virtual meetings with Shalimar Corp’s official sales desk. Every legal milestone was handled cleanly. If you are an NRI looking for reliable real estate counsel in Lucknow, Athar is your person.',
    verifiedDetails: 'Verified NRI Client · Remote Acquisition 2025',
    avatarInitial: 'TM'
  },
  {
    id: 'test-4',
    clientName: 'Pooja & Vikram Singhania',
    designation: 'Senior Corporate Director, Automotive Logistics',
    clientCategory: 'Luxury Homeowner',
    projectPurchased: 'Shalimar Valencia Villas (Valencia County) — Spanish Villa',
    projectSlug: 'shalimar-valencia-villas',
    location: 'Shalimar OneWorld, Gomti Nagar Extension',
    year: '2025',
    rating: 5,
    headline: 'Found our dream independent villa within a gated, world-class township.',
    quote: 'Moving from a standalone bungalow into an integrated master township was our family goal. GreenNest carefully shortlisted Valencia Villas for us, highlighting the private garden plots, underground infrastructure, and direct access to the 1.5-acre lake promenade. Athar’s guidance was impartial, professional, and grounded in verifiable facts.',
    verifiedDetails: 'Verified Villa Homeowner · Handover Completed',
    avatarInitial: 'PS'
  },
  {
    id: 'test-5',
    clientName: 'Brigadier S. K. Verma (Retd.)',
    designation: 'Veteran & Lucknow Native',
    clientCategory: 'Luxury Homeowner',
    projectPurchased: 'Shalimar OneWorld Riverfront Residence',
    projectSlug: 'shalimar-21',
    location: 'Gomti Nagar Extension, Lucknow',
    year: '2024',
    rating: 5,
    headline: 'Honest guidance, clear paperwork, and respectful advisory.',
    quote: 'In a real estate market cluttered with aggressive brokers and inflated claims, Athar Mansoor stands out for his calm composure, strict ethical discipline, and verified documentation. He never rushed us, explained all developer covenants clearly, and assisted us every step of the way.',
    verifiedDetails: 'Verified Senior Citizen Homeowner · 2024',
    avatarInitial: 'SV'
  }
];
