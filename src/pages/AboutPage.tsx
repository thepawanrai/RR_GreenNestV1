import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AdvisorCard } from '../components/common/AdvisorCard';
import { TestimonialsSection } from '../components/common/TestimonialsSection';
import { ShieldCheck, Target, Eye, Building2 } from 'lucide-react';
import { AGENT_RERA_NUMBER, AGENT_NAME } from '../data/projects';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 bg-white">
      <Breadcrumbs items={[{ label: 'About GreenNest' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold flex-wrap">
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Agent RERA: {AGENT_RERA_NUMBER}</span>
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Our Story & Philosophy</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#305d3f] leading-tight">
          Selective Homes. Exclusive Living.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
          GreenNest Realtors was founded on a simple conviction: finding the right home in Lucknow should not require sifting through hundreds of unverified portal listings and high-pressure sales pitches.
        </p>
      </div>

      {/* Philosophy Section (Polar White) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4 text-sm text-slate-700 leading-relaxed font-light">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#305d3f]">
            Why Selectivity Matters in Lucknow Real Estate
          </h2>
          <p>
            The Lucknow property market has expanded rapidly across Gomti Nagar Extension, Amar Shaheed Path, and Sultanpur Road. With scores of projects launching every year, buyers are often inundated with speculative marketing claims, ambiguous floor areas, and uncertain possession timelines.
          </p>
          <p>
            GreenNest deliberately operates differently. We are an advisory firm, not a high-volume directory. We inspect land titles, statutory UP-RERA approvals, construction milestones, and architectural density before introducing a project to our portfolio.
          </p>
          <p>
            When you consult with GreenNest, our focus is on finding the single home that aligns with your lifestyle, family needs, and long-term security—not on selling whatever inventory happens to be on the board.
          </p>
        </div>

        <div className="lg:col-span-6 bg-slate-50 border border-slate-200 p-8 space-y-6 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#305d3f]">
            Our Four Advisory Standards
          </h3>
          <div className="space-y-4 text-xs text-slate-700">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#305d3f] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#305d3f] block font-sans text-sm">1. Statutory RERA Compliance</strong>
                Operating under UP-RERA Agent Registration <strong>{AGENT_RERA_NUMBER}</strong>, we market only verified, registered projects with official links.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Eye className="w-5 h-5 text-[#305d3f] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#305d3f] block font-sans text-sm">2. Truth in Architectural Dimensions</strong>
                We present sanctioned RERA carpet areas and clearly separate project-specific amenities from wider township facilities.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-[#305d3f] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#305d3f] block font-sans text-sm">3. Zero-Pressure Alignment</strong>
                We believe in objective guidance: if a project does not meet your family's requirements or budget fit, we will advise against it.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-[#305d3f] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#305d3f] block font-sans text-sm">4. Direct Promoter Inventory & Transparent Pricing</strong>
                We work directly with leading developers to provide direct inventory pricing with zero buyer brokerage fees.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advisor Profile & Bio */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
            Leadership & Advisory
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f]">
            Meet Athar Mansoor
          </h2>
          <p className="text-xs text-slate-500">
            Founder & Lead Consultant · 15 Years Lucknow Advisory Excellence
          </p>
        </div>

        {/* Detailed Advisor Bio Grid */}
        <div className="bg-slate-50 border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            {/* Athar Mansoor Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group max-w-xs w-full">
                <div className="aspect-square overflow-hidden border-4 border-[#C8AD78]/60 shadow-lg bg-slate-50">
                  <img
                    src="/images/advisor/athar-mansoor.png"
                    alt="Athar Mansoor - Founder & Lead Advisor, GreenNest Realtors Lucknow"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h4 className="font-serif text-xl font-bold text-[#305d3f]">{AGENT_NAME}</h4>
                  <p className="text-xs font-medium text-slate-600">Founder & Senior Property Consultant</p>
                  <p className="text-[11px] text-[#C8AD78] font-medium mt-0.5">15 Years Dedicated Lucknow Advisory</p>
                </div>
              </div>
            </div>

            {/* Biography Details */}
            <div className="lg:col-span-8 space-y-5 text-sm text-slate-700 leading-relaxed font-light">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#305d3f]">
                  15 Years of Advisory Excellence
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#305d3f]">
                  Dedicated to Client Trust & Objective Lucknow Real Estate Guidance
                </h3>
              </div>

              <p>
                Athar Mansoor is the founder and lead consultant of GreenNest Realtors, bringing 15 years of dedicated, on-ground real estate advisory experience across Lucknow’s most prestigious residential corridors, including Gomti Nagar Extension, Amar Shaheed Path, and Sultanpur Road.
              </p>

              <p>
                Recognizing how overwhelming and fragmented conventional real estate classifieds can be, Athar established GreenNest with a foundational principle: provide high-net-worth individuals, medical practitioners, corporate executives, and overseas NRIs with clear, unvarnished property counsel backed by statutory UP-RERA cross-verification.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="bg-white p-4 border border-slate-200">
                  <strong className="text-[#305d3f] block text-sm font-sans mb-1">Zero Buyer Brokerage</strong>
                  Clients receive direct developer inventory and transparent pricing without broker commissions.
                </div>
                <div className="bg-white p-4 border border-slate-200">
                  <strong className="text-[#305d3f] block text-sm font-sans mb-1">End-to-End Due Diligence</strong>
                  From verifying sanctioned carpet areas and encumbrance certificates to coordinating site visits and builder allotment terms, Athar personally oversees every advisory phase.
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="bg-[#305d3f] hover:bg-[#23462f] text-white text-xs font-medium py-3 px-6 transition-colors shadow-sm cursor-pointer"
                >
                  Schedule Private Advisory with Athar
                </button>
                <a
                  href={`https://wa.me/919235621921?text=${encodeURIComponent(
                    'Hello Athar, I would like to consult with you regarding curated luxury residential projects in Lucknow (including Shalimar OneWorld, KSMB The Royal Retreat, and EMAAR Elite Oasis).'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#305d3f] text-[#305d3f] hover:bg-[#305d3f]/5 text-xs font-medium py-3 px-5 transition-colors"
                >
                  WhatsApp Direct Desk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Advisor quick action card */}
        <AdvisorCard onBookConsultation={onOpenConsultation} />
      </div>

      {/* Prestigious Recognition: Shalimar Excellence Summit Award Section */}
      <section className="bg-gradient-to-br from-[#122318] via-[#1a3323] to-[#0f1f15] text-white p-8 sm:p-12 border border-[#305d3f] relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8AD78]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Award Presentation Photo */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden border-2 border-[#C8AD78]/60 shadow-2xl bg-black">
              <img
                src="/images/advisor/shalimar-award-ceremony.jpg"
                alt="Athar Mansoor receiving prestigious award from Khalid Masood, Managing Director of Shalimar Corp Ltd at Shalimar Excellence Summit"
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 text-xs text-slate-200">
                <span className="text-[#C8AD78] font-semibold block text-sm">Shalimar Excellence Summit</span>
                <span className="text-slate-300 text-[11px]">
                  Award presented by Mr. Khalid Masood, Managing Director — Shalimar Corp Ltd
                </span>
              </div>
            </div>
          </div>

          {/* Award Context & Significance */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#C8AD78]/20 border border-[#C8AD78]/40 px-3 py-1 text-xs text-[#EAD8B2] font-semibold tracking-wide uppercase">
              <span>Industry Milestone & Official Recognition</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
              Awarded by Khalid Masood (Managing Director, Shalimar Corp Ltd)
            </h3>

            <div className="space-y-3 text-sm sm:text-base text-slate-200 font-light leading-relaxed">
              <p>
                In recognition of outstanding advisory performance, unwavering ethical standards, and sustained client satisfaction, <strong className="text-white font-medium">Athar Mansoor</strong> was officially honoured on stage by <strong className="text-[#C8AD78] font-medium">Mr. Khalid Masood, Managing Director | Shalimar Corp Ltd</strong> at the landmark <strong className="text-white font-medium">Shalimar Excellence Summit</strong>.
              </p>
              <p className="text-xs sm:text-sm text-slate-300">
                This recognition underscores GreenNest Realtors' position as a premier, trusted real estate consultancy for signature landmark developments across Lucknow.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
              <div className="space-y-1">
                <span className="text-[#C8AD78] font-serif text-xl sm:text-2xl font-bold block">Curated</span>
                <span className="text-slate-300">Portfolio Focus</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#C8AD78] font-serif text-xl sm:text-2xl font-bold block">15+ Years</span>
                <span className="text-slate-300">Lucknow Advisory Experience</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#C8AD78] font-serif text-xl sm:text-2xl font-bold block">Excellence</span>
                <span className="text-slate-300">Summit Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials feature on About page */}
      <TestimonialsSection onNavigate={onNavigate} onOpenConsultation={onOpenConsultation} />

      {/* Regulatory Disclosure */}
      <div className="bg-[#305d3f] text-white p-8 border border-[#23462f] space-y-3 shadow-sm">
        <h3 className="font-serif text-xl font-bold text-[#C8AD78]">
          Transparent Regulatory Notice
        </h3>
        <p className="text-xs text-slate-200 leading-relaxed">
          GreenNest Realtors operates as an independent property consultancy. All final legal agreements, allotment letters, and payment transactions are executed directly between the buyer and the respective developer entity in compliance with UP-RERA guidelines.
        </p>
      </div>
    </div>
  );
};
