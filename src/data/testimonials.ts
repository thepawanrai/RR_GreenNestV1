export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  clientCategory: 'Luxury Homeowner' | 'NRI Investor' | 'Medical Specialist' | 'Corporate Leader' | 'High ROI Investor';
  projectPurchased: string;
  projectSlug?: string;
  location: string;
  year: string;
  rating: number;
  headline: string;
  quote: string;
  verifiedDetails: string;
  avatarInitial: string;
  roiMetric?: string;
  platform?: 'Website' | 'Google' | 'Trustpilot';
  isUserSubmitted?: boolean;
}

export const GOOGLE_REVIEW_URL = 'https://g.page/r/CYMEc-KtKlEkEBI/review';
export const TRUSTPILOT_REVIEW_URL = 'https://www.trustpilot.com/evaluate/greennestrealtors.com';

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-roi-1',
    clientName: 'Alok & Sunaina Tandon',
    designation: 'Angel Investor & Founder, TechScale Ventures',
    clientCategory: 'High ROI Investor',
    projectPurchased: 'Shalimar OneWorld & Amar Shaheed Path Corridor',
    projectSlug: 'shalimar-oneworld',
    location: 'Gomti Nagar Extension, Lucknow',
    year: '2023 - 2026',
    rating: 5,
    headline: 'Delivered +44% capital appreciation in under 2.5 years. Astute market timing.',
    quote: 'When planning our Lucknow property portfolio, Athar advised us to enter the Amar Shaheed Path lakefront corridor well ahead of the broader surge. His quantitative financial analysis on price-per-sqft trajectory was extraordinarily accurate. We have achieved a 44% capital appreciation on our unit while securing institutional lease inquiries. Outstanding advisory grounded in real metrics.',
    verifiedDetails: 'Verified Portfolio Investor · +44% Capital Appreciation',
    avatarInitial: 'AT',
    roiMetric: '+44% ROI Growth',
    platform: 'Google'
  },
  {
    id: 'test-1',
    clientName: 'Dr. Arvind & Sunita Srivastava',
    designation: 'Senior Consultant Neurosurgeon, Medanta Hospital Lucknow',
    clientCategory: 'Medical Specialist',
    projectPurchased: 'Shalimar OneWorld Enclave — 4 BHK + Study',
    projectSlug: 'shalimar-oneworld',
    location: 'Gomti Nagar Extension, Lucknow',
    year: '2024',
    rating: 5,
    headline: 'Uncompromising integrity, direct developer pricing, zero broker pressure.',
    quote: 'As a surgeon managing critical clinical hours, navigating Lucknow’s real estate market was daunting. Athar Mansoor from GreenNest provided completely objective, fact-based advisory. He cross-verified sanctioned carpet areas, walked us through master plans, and secured direct developer allotment terms with absolute transparency. Zero buyer brokerage, verified UP-RERA documentation, and prompt follow-through.',
    verifiedDetails: 'Verified Resident Buyer · Allotment Sanctioned 2024',
    avatarInitial: 'AS',
    roiMetric: 'Prime Family Residence',
    platform: 'Website'
  },
  {
    id: 'test-roi-2',
    clientName: 'Priya & Sandeep Malhotra',
    designation: 'Head of Private Equity Operations (Singapore / Lucknow Native)',
    clientCategory: 'NRI Investor',
    projectPurchased: 'EMAAR Elite Oasis — Signature High-Rise Living',
    projectSlug: 'emaar-elite-oasis',
    location: 'Lucknow Expressway Corridor',
    year: '2025',
    rating: 5,
    headline: '7.8% projected rental yield & flawless NRI overseas legal coordination.',
    quote: 'Investing from Singapore, my top criteria were legal due diligence, title clarity, and rental demand. Athar guided us through the EMAAR Elite Oasis master layout and coordinated every bank approval and power-of-attorney clause without a single hitch. His investment ROI calculations are realistic, not inflated sales talk. A masterclass in high-end advisory.',
    verifiedDetails: 'Verified NRI Client · Remote Acquisition 2025',
    avatarInitial: 'SM',
    roiMetric: '7.8% Projected Yield',
    platform: 'Trustpilot'
  },
  {
    id: 'test-2',
    clientName: 'Rajeev & Meenakshi Agarwal',
    designation: 'Managing Director, Horizon FinTech & Regional Entrepreneur',
    clientCategory: 'Corporate Leader',
    projectPurchased: 'KSMB The Royal Retreat & Riverfront Towers',
    projectSlug: 'ksmb-the-royal-retreat',
    location: 'Hazratganj / Jopling Road, Lucknow',
    year: '2024',
    rating: 5,
    headline: 'Ultra-exclusive layout and unbeatable capital preservation in Hazratganj.',
    quote: 'We refused to compromise on privacy and wanted a quiet, low-density high-rise with generational prestige. Athar introduced us to KSMB The Royal Retreat on Jopling Road. His deep 15-year understanding of Lucknow’s prime luxury developments, construction milestones, and layout orientation was instrumental. GreenNest represents the gold standard of real estate advisory in Lucknow.',
    verifiedDetails: 'Verified Resident Buyer · Heritage Luxury Corridor',
    avatarInitial: 'RA',
    roiMetric: 'Generational Value Asset',
    platform: 'Google'
  },
  {
    id: 'test-3',
    clientName: 'Tariq Masood & Family',
    designation: 'Vice President, Cloud Architecture (Dubai, UAE / Lucknow Origin)',
    clientCategory: 'NRI Investor',
    projectPurchased: 'Shalimar OneWorld Lakefront Residence & Commercial Suite',
    projectSlug: 'shalimar-oneworld',
    location: 'Shalimar OneWorld, Lucknow',
    year: '2025',
    rating: 5,
    headline: 'Seamless remote purchase from Dubai with zero friction.',
    quote: 'Purchasing property in India from the UAE often comes with anxiety about authenticity. Athar provided video walkthroughs of the construction site, shared certified UP-RERA registrations, and coordinated virtual meetings with official promoter desks. Every legal milestone was handled cleanly. If you are an NRI looking for reliable real estate counsel in Lucknow, Athar is your person.',
    verifiedDetails: 'Verified NRI Client · Remote Acquisition 2025',
    avatarInitial: 'TM',
    roiMetric: '+36% Capital Appreciation',
    platform: 'Google'
  },
  {
    id: 'test-4',
    clientName: 'Pooja & Vikram Singhania',
    designation: 'Senior Corporate Director, Automotive Logistics',
    clientCategory: 'Luxury Homeowner',
    projectPurchased: 'Bespoke Lakefront Villa Enclave',
    projectSlug: 'shalimar-oneworld',
    location: 'Gomti Nagar Extension',
    year: '2025',
    rating: 5,
    headline: 'Found our dream independent villa within a gated, world-class township.',
    quote: 'Moving from a standalone bungalow into an integrated master township was our family goal. GreenNest carefully shortlisted villa options for us, highlighting the private garden plots, underground infrastructure, and direct access to the 1.5-acre lake promenade. Athar’s guidance was impartial, professional, and grounded in verifiable facts.',
    verifiedDetails: 'Verified Villa Homeowner · Handover Completed',
    avatarInitial: 'PS',
    roiMetric: 'Lake Promenade Location',
    platform: 'Website'
  },
  {
    id: 'test-5',
    clientName: 'Brigadier S. K. Verma (Retd.)',
    designation: 'Veteran & Lucknow Native',
    clientCategory: 'Luxury Homeowner',
    projectPurchased: 'Riverfront Residence, Gomti Nagar Extension',
    projectSlug: 'shalimar-oneworld',
    location: 'Gomti Nagar Extension, Lucknow',
    year: '2024',
    rating: 5,
    headline: 'Honest guidance, clear paperwork, and respectful advisory.',
    quote: 'In a real estate market cluttered with aggressive brokers and inflated claims, Athar Mansoor stands out for his calm composure, strict ethical discipline, and verified documentation. He never rushed us, explained all developer covenants clearly, and assisted us every step of the way.',
    verifiedDetails: 'Verified Senior Citizen Homeowner · 2024',
    avatarInitial: 'SV',
    roiMetric: 'Peace of Mind & Title Security',
    platform: 'Trustpilot'
  }
];

export const TESTIMONIALS = INITIAL_TESTIMONIALS;

const STORAGE_KEY = 'greennest_user_reviews_v1';

export function getStoredUserReviews(): Testimonial[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to read reviews from localStorage:', err);
    return [];
  }
}

export function saveUserReview(review: Omit<Testimonial, 'id' | 'avatarInitial' | 'year'> & { id?: string; avatarInitial?: string; year?: string }): Testimonial {
  const current = getStoredUserReviews();
  const initials = review.avatarInitial || review.clientName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(p => p[0].toUpperCase())
    .join('') || 'GN';

  const newReview: Testimonial = {
    ...review,
    id: review.id || `user-rev-${Date.now()}`,
    year: review.year || new Date().getFullYear().toString(),
    avatarInitial: initials,
    isUserSubmitted: true,
    platform: review.platform || 'Website',
  };

  const updated = [newReview, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save review to localStorage:', err);
  }
  return newReview;
}
