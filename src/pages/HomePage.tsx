import React, { useState, useEffect } from 'react';
import { PROJECTS, AGENT_RERA_NUMBER, AGENT_NAME, AGENT_PHONE } from '../data/projects';
import { ARTICLES } from '../data/articles';
import { FAQS } from '../data/faqs';
import { ProjectCard } from '../components/common/ProjectCard';
import { AdvisorCard } from '../components/common/AdvisorCard';
import { LeadForm } from '../components/common/LeadForm';
import { TestimonialsSection } from '../components/common/TestimonialsSection';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  FileCheck2, 
  Compass, 
  Building, 
  Globe2, 
  CheckCircle2, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (projectSlug?: string, projectName?: string) => void;
}

const HERO_SLIDES = [
  {
    id: 'shalimar-21',
    slug: 'shalimar-21',
    projectName: 'Shalimar 21 (Twenty One)',
    tagline: 'Ultra-Private 3 & 4 BHK Riverfront Residences',
    highlight: 'Strictly 2 Residences Per Floor · 4 Signature Towers (G+28)',
    rera: 'UPRERAPRJ858081/05/2024',
    price: 'Starting ₹2.35 Crore*',
    image: '/images/projects/shalimar-21-banner.jpg',
    location: 'Sector 6, Shalimar OneWorld, Gomti Nagar Extension',
    counter: '01 / 03',
    badge: 'Signature Riverfront Enclave',
    ctaText: 'Explore Shalimar 21'
  },
  {
    id: 'shalimar-marbella',
    slug: 'shalimar-marbella',
    projectName: 'Shalimar Marbella',
    tagline: 'Mediterranean Grandeur & Riverfront Coastal Living',
    highlight: '33 Storey Towers · 2, 2+Study & 3 BHK + Servant · 18+ Amenities',
    rera: 'UPRERAPRJ460592/05/2024',
    price: 'Indicative ₹1.30 – ₹1.60 Cr*',
    image: '/images/projects/shalimar-marbella-banner.jpg',
    location: 'Shalimar OneWorld, Gomti Nagar Extension',
    counter: '02 / 03',
    badge: 'Spanish & Mediterranean Architecture',
    ctaText: 'Explore Shalimar Marbella'
  },
  {
    id: 'shalimar-valencia-towers-phase-2',
    slug: 'shalimar-valencia-towers-phase-2',
    projectName: 'Shalimar Valencia Towers (Phase 2)',
    tagline: 'Palatial 4 BHK + Study Residences Overlooking the Lake',
    highlight: 'Approx. 1,900 sq ft Carpet Area · Only 132 Units/Tower · 26+ Amenities',
    rera: 'UPRERAPRJ944626/09/2024',
    price: 'Starting ₹2.75 Crore*',
    image: '/images/projects/shalimar-valencia-towers-phase-2-banner.jpg',
    location: 'Sector 5, Shalimar OneWorld, Gomti Nagar Extension',
    counter: '03 / 03',
    badge: 'Lake Promenade Luxury',
    ctaText: 'Explore Valencia Towers'
  }
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-play timer for hero slider
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <div className="space-y-20 sm:space-y-28 bg-white">
      {/* 1. HERO SECTION (Polar White Canvas with 3-Slide Interactive Showcase) */}
      <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold flex-wrap">
                <span className="text-slate-600">Curated Real Estate Advisory · Lucknow</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-5.5xl font-bold text-[#305d3f] leading-[1.14] tracking-tight">
                The Right Home Isn’t Found in Endless Listings.{' '}
                <span className="italic font-normal text-[#9E8043]">
                  It’s Found Through Better Selection.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-light">
                Explore a carefully selected portfolio of residential and investment opportunities in Lucknow, with clear project information and personal guidance from GreenNest Realtors.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('/projects')}
                  className="inline-flex items-center justify-center gap-2 bg-[#305d3f] hover:bg-[#23462f] text-white text-base font-medium py-3.5 px-7 transition-all shadow-sm"
                >
                  <span>Explore Selected Projects</span>
                  <ArrowRight className="w-4 h-4 text-[#C8AD78]" />
                </button>

                <button
                  onClick={() => onOpenConsultation()}
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-800 hover:text-[#305d3f] hover:border-[#305d3f] text-base font-medium py-3.5 px-6 transition-colors bg-white shadow-sm"
                >
                  <span>Book a Private Consultation</span>
                </button>
              </div>

              {/* Verified Trust Strip under CTAs */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#305d3f]" />
                  <span>100% RERA Registered Projects</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium text-slate-800">
                  <FileCheck2 className="w-4 h-4 text-[#305d3f]" />
                  <span>Direct Developer Price Sheets</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium text-slate-800">
                  <Building className="w-4 h-4 text-[#305d3f]" />
                  <span>Zero Buyer Brokerage Fee</span>
                </div>
              </div>
            </div>

            {/* Right Hero: Three-Slide Hero Slider with Large Uncovered Official Shalimar Assets */}
            <div 
              className="lg:col-span-6 relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative mx-auto max-w-xl lg:max-w-none shadow-xl border border-slate-200 bg-white">
                {/* Large Uncovered Image Container (No dark overlays covering the architecture) */}
                <div className="h-[360px] sm:h-[420px] lg:h-[450px] overflow-hidden bg-slate-50 relative border-b border-slate-100">
                  <img
                    key={activeSlide.id}
                    src={activeSlide.image}
                    alt={`${activeSlide.projectName} - ${activeSlide.tagline}`}
                    className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
                  />
                  {/* Minimal top badges that do not obscure the building */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="bg-[#305d3f]/95 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 tracking-wider uppercase border border-white/20 shadow-xs">
                      {activeSlide.badge}
                    </span>
                    <span className="bg-white/95 text-[#305d3f] text-xs font-mono font-bold px-2 py-0.5 border border-slate-200 shadow-xs">
                      {activeSlide.counter}
                    </span>
                  </div>
                </div>

                {/* Dedicated Polar White Details Tray completely below the image */}
                <div className="p-5 bg-white space-y-3.5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <span className="text-[#305d3f] font-semibold">Shalimar Corp.</span>
                        <span>·</span>
                        <span>{activeSlide.location}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-[#305d3f] leading-snug pt-0.5">
                        {activeSlide.projectName}
                      </h3>
                      <p className="text-xs text-slate-600 font-light mt-0.5">
                        {activeSlide.highlight}
                      </p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-sm sm:text-base font-bold text-[#305d3f] block">{activeSlide.price}</span>
                      <span className="text-[10px] font-mono text-slate-500 block">RERA: {activeSlide.rera}</span>
                    </div>
                  </div>

                  {/* Slider Controls & Direct Actions */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    {/* Slide Selector Indicators (01, 02, 03) */}
                    <div className="flex items-center gap-1.5 w-full sm:w-auto">
                      {HERO_SLIDES.map((slide, idx) => (
                        <button
                          key={slide.id}
                          onClick={() => setCurrentSlide(idx)}
                          className={`px-3 py-1 text-xs font-mono transition-all border cursor-pointer ${
                            currentSlide === idx
                              ? 'bg-[#305d3f] text-white border-[#305d3f] font-bold shadow-xs'
                              : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                          }`}
                          title={slide.projectName}
                        >
                          0{idx + 1}
                        </button>
                      ))}

                      <div className="flex items-center ml-2 border border-slate-200 divide-x divide-slate-200">
                        <button
                          onClick={() =>
                            setCurrentSlide((prev) =>
                              prev === 0 ? HERO_SLIDES.length - 1 : prev - 1
                            )
                          }
                          className="p-1.5 text-slate-600 hover:text-[#305d3f] hover:bg-slate-50 transition-colors cursor-pointer"
                          aria-label="Previous Slide"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
                          }
                          className="p-1.5 text-slate-600 hover:text-[#305d3f] hover:bg-slate-50 transition-colors cursor-pointer"
                          aria-label="Next Slide"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Actions for current slide */}
                    <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                      <button
                        onClick={() => onNavigate(`/projects/${activeSlide.slug}`)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#305d3f] hover:text-[#23462f] hover:underline cursor-pointer"
                      >
                        <span>{activeSlide.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#9E8043]" />
                      </button>
                      <span className="text-slate-300">|</span>
                      <a
                        href={`https://wa.me/919235621921?text=${encodeURIComponent(
                          `Hello Athar, I would like to enquire about ${activeSlide.projectName} (${activeSlide.rera}) in Gomti Nagar Extension.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUBSTANTIATED PROOF STRIP (Polar White with Deep Emerald Accent) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#305d3f] text-white p-8 sm:p-10 border border-[#23462f] shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="space-y-1 md:pr-6 pt-4 md:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C8AD78]">10 Years</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Advisory Experience</p>
              <p className="text-xs text-slate-200">Led by {AGENT_NAME} in Lucknow luxury developments.</p>
            </div>

            <div className="space-y-1 md:px-6 pt-4 md:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C8AD78]">100%</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold">RERA-Registered</p>
              <p className="text-xs text-slate-200">Only legally vetted residential developments in Gomti Nagar Ext.</p>
            </div>

            <div className="space-y-1 md:px-6 pt-4 md:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C8AD78]">Direct</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold">Developer Pricing</p>
              <p className="text-xs text-slate-200">Transparent builder price sheets and sanctioned floor layouts.</p>
            </div>

            <div className="space-y-1 md:pl-6 pt-4 md:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C8AD78]">Zero Fee</span>
              <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold">For Homebuyers</p>
              <p className="text-xs text-slate-200">Advisory, site visits, and booking coordination provided at no brokerage cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHALIMAR ONEWORLD TOWNSHIP SPOTLIGHT (from shalimarcorp.com) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-slate-50 border border-slate-200 p-8 sm:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
                <span>Integrated Master-Planned Township</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Gomti Nagar Extension, Lucknow</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f]">
                Shalimar OneWorld: A 212+ Acre Masterpiece
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Designed by international master architects <strong>JT+Partners</strong> and <strong>42MM Architecture</strong>, Shalimar OneWorld is an LDA-approved self-sustained riverfront township combining premier residences, waterfront promenade, sports academies, and academic institutions.
              </p>
            </div>

            <a
              href="http://shalimarcorp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#305d3f] hover:underline flex-shrink-0"
            >
              <span>Explore on shalimarcorp.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-white border border-slate-200 space-y-1.5 shadow-sm">
              <span className="font-semibold text-[#305d3f] text-sm block">1.5-Acre Lake Promenade</span>
              <p className="text-slate-600 leading-relaxed">
                French-style cafés, water-facing bistros, and pedestrian promenade along the central lake.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 space-y-1.5 shadow-sm">
              <span className="font-semibold text-[#305d3f] text-sm block">Club One & Sports Academy</span>
              <p className="text-slate-600 leading-relaxed">
                Olympic swimming pool, wellness spa, tennis, squash, badminton, cricket nets, and putting green.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 space-y-1.5 shadow-sm">
              <span className="font-semibold text-[#305d3f] text-sm block">City Montessori School</span>
              <p className="text-slate-600 leading-relaxed">
                World-renowned educational institution located inside the secure township grounds.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 space-y-1.5 shadow-sm">
              <span className="font-semibold text-[#305d3f] text-sm block">24/7 Security Command</span>
              <p className="text-slate-600 leading-relaxed">
                Centralized automated surveillance, barrier control, and dedicated gated security checkpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SHALIMAR PROJECTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
              Curated Portfolio
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f]">
              Selected Shalimar Corp. Projects
            </h2>
            <p className="text-sm text-slate-600">
              A carefully selected portfolio of luxury apartments, private villa enclaves, and commercial suites in Gomti Nagar Extension and prime Lucknow corridors.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/projects')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#305d3f] hover:text-[#23462f] transition-colors group"
          >
            <span>View All Curated Projects</span>
            <ArrowRight className="w-4 h-4 text-[#C8AD78] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 6).map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onViewProject={(slug) => onNavigate(`/projects/${slug}`)}
              onEnquireProject={(slug, name) => onOpenConsultation(slug, name)}
            />
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('/projects')}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-medium py-3 px-8 transition-colors shadow-sm"
          >
            <span>Explore All 8 Selected Projects & Detailed RERA Disclosures</span>
            <ArrowRight className="w-4 h-4 text-[#305d3f]" />
          </button>
        </div>
      </section>

      {/* 5. VERIFIED CLIENT TESTIMONIALS & ENDORSEMENTS */}
      <TestimonialsSection 
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 6. WHY GREENNEST (Curated Model Philosophy) */}
      <section className="bg-slate-50 py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
                Selection Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f] leading-tight">
                A Select Portfolio.{' '}
                <span className="italic font-normal">A More Personal Approach.</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe choosing a property should feel considered—not overwhelming. GreenNest focuses on a select portfolio of projects and helps you compare the details that matter, understand the next steps and arrange a site or virtual visit.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#305d3f] uppercase tracking-wider hover:underline"
                >
                  <span>Read About Our Selection Standards</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8AD78]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-slate-200 space-y-2.5 shadow-sm">
                <div className="w-9 h-9 bg-[#305d3f] text-[#C8AD78] flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="font-serif text-lg font-bold text-[#305d3f]">
                  Curated Project Portfolio
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Instead of indexing hundreds of speculative developments, we deliberately shortlist verified projects with strong developer execution records.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200 space-y-2.5 shadow-sm">
                <div className="w-9 h-9 bg-[#305d3f] text-[#C8AD78] flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="font-serif text-lg font-bold text-[#305d3f]">
                  Verification-First Communication
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every project fact, carpet area measurement, and RERA registration is verified before publication. We never fabricate pricing or inventory scarcity.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200 space-y-2.5 shadow-sm">
                <div className="w-9 h-9 bg-[#305d3f] text-[#C8AD78] flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="font-serif text-lg font-bold text-[#305d3f]">
                  Personal Guidance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct engagement with senior advisor Athar Mansoor, aligning choices with your family size, budget band, and long-term residency requirements.
                </p>
              </div>

              <div className="p-6 bg-white border border-slate-200 space-y-2.5 shadow-sm">
                <div className="w-9 h-9 bg-[#305d3f] text-[#C8AD78] flex items-center justify-center font-bold text-sm">
                  04
                </div>
                <h3 className="font-serif text-lg font-bold text-[#305d3f]">
                  Site & Virtual Visit Coordination
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Seamless site arrangements at Shalimar OneWorld with private briefings, or live video walkthroughs for out-of-city and NRI buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "A MORE CONSIDERED WAY TO BUY" PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
            Advisory Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f]">
            A More Considered Way to Buy
          </h2>
          <p className="text-sm text-slate-600">
            A step-by-step advisory process designed to replace sales pressure with clarity, due diligence, and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="p-5 bg-white border border-slate-200 space-y-2 shadow-sm">
            <span className="text-xs font-mono text-[#9E8043] font-bold">Step 1</span>
            <h4 className="font-serif text-base font-bold text-[#305d3f]">Share Your Goals</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We discuss your family lifestyle, layout needs, budget preference, and timeline.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 space-y-2 shadow-sm">
            <span className="text-xs font-mono text-[#9E8043] font-bold">Step 2</span>
            <h4 className="font-serif text-base font-bold text-[#305d3f]">Shortlist Relevant Projects</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We filter down to 2 or 3 curated developments that genuinely fit your criteria.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 space-y-2 shadow-sm">
            <span className="text-xs font-mono text-[#9E8043] font-bold">Step 3</span>
            <h4 className="font-serif text-base font-bold text-[#305d3f]">Review Facts & Costs</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Detailed inspection of RERA filings, true carpet area, floor rise, and all-inclusive costs.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 space-y-2 shadow-sm">
            <span className="text-xs font-mono text-[#9E8043] font-bold">Step 4</span>
            <h4 className="font-serif text-base font-bold text-[#305d3f]">Arrange Site / Virtual Visit</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              In-person guided walkthrough or live video session with the advisor.
            </p>
          </div>

          <div className="p-5 bg-white border border-slate-200 space-y-2 shadow-sm">
            <span className="text-xs font-mono text-[#9E8043] font-bold">Step 5</span>
            <h4 className="font-serif text-base font-bold text-[#305d3f]">Support with Next Steps</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent developer paperwork liaison, bank loan assistance, and booking facilitation.
            </p>
          </div>
        </div>
      </section>

      {/* 7. ADVISOR PROFILE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AdvisorCard onBookConsultation={() => onOpenConsultation()} />

        {/* Shalimar Excellence Summit Award Highlight */}
        <div className="bg-gradient-to-br from-[#122318] via-[#1a3323] to-[#0f1f15] text-white p-6 sm:p-8 border border-[#305d3f] shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="md:col-span-5">
              <div className="relative group overflow-hidden border-2 border-[#C8AD78]/60 shadow-xl bg-black">
                <img
                  src="/images/advisor/shalimar-award-ceremony.jpg"
                  alt="Athar Mansoor receiving award from Khalid Masood, MD Shalimar Corp Ltd at Shalimar Excellence Summit"
                  className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 bg-[#C8AD78]/20 border border-[#C8AD78]/40 px-2.5 py-0.5 text-xs text-[#EAD8B2] font-semibold uppercase tracking-wider">
                <span>Official Channel Partner Honour</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Awarded by Khalid Masood (MD, Shalimar Corp Ltd) at Shalimar Excellence Summit
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                Celebrating outstanding advisory commitment, verified UP-RERA compliance, and dedicated client service across flagship developments in Lucknow.
              </p>
              <div className="pt-1">
                <button
                  onClick={() => onNavigate('/about')}
                  className="text-xs text-[#C8AD78] hover:text-[#DFCDA6] font-semibold inline-flex items-center gap-1 underline underline-offset-4 cursor-pointer"
                >
                  <span>Read our story & advisory standards</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NRI & OUT-OF-CITY BUYER BLOCK */}
      <section className="bg-[#305d3f] text-white py-16 sm:py-20 border-y border-[#23462f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8AD78] font-semibold">
                <Globe2 className="w-4 h-4" />
                <span>NRI & Out-Of-City Buyers</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Investing in Lucknow from the Gulf, US, UK, or Another Indian Metro?
              </h2>

              <p className="text-sm text-slate-200 leading-relaxed">
                Overseas and out-of-city buyers face unique challenges: limited time for site inspections, time zone differences, and complex documentation. GreenNest bridges this distance with high-touch remote coordination under UP-RERA Agent Registration <strong>{AGENT_RERA_NUMBER}</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-slate-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                  <span>1-on-1 scheduled virtual video consultations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                  <span>Live HD video walkthroughs of construction</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                  <span>NRE / NRO banking channel document checklist</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                  <span>Power of Attorney (PoA) guidance coordination</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('/nri-corner')}
                  className="bg-[#C8AD78] hover:bg-[#DFCDA6] text-[#23462f] text-xs font-semibold uppercase tracking-wider py-3 px-6 transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Explore NRI Assistance Corner</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://wa.me/919235621921?text=Hello%20Athar,%20I%20am%20an%20NRI%20buyer%20interested%20in%20Lucknow%20property%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#C8AD78] text-[#C8AD78] hover:bg-white/5 text-xs font-semibold uppercase tracking-wider py-3 px-5 transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp NRI Desk</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#23462f] p-6 sm:p-8 border border-[#3d7350] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#C8AD78]">
                Clear Compliance Boundary
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                GreenNest coordinates project selection, developer liaison, and on-ground verification. Please note that formal legal title searches, FEMA tax compliance, and DTAA structuring must be executed by qualified legal and tax practitioners. We provide the coordination checklist to discuss with your professional advisors.
              </p>
              <div className="pt-2 text-xs text-slate-400 border-t border-white/10 font-mono">
                Agent RERA: {AGENT_RERA_NUMBER}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BUYER RESOURCES & INSIGHTS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-1.5">
            <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
              Buyer Resources
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f]">
              Knowledge Before Capital
            </h2>
            <p className="text-sm text-slate-600">
              Clear, practical guides to help you make an informed property decision in Lucknow.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/insights')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#305d3f] hover:underline"
          >
            <span>View All Insights & Guides</span>
            <ArrowRight className="w-4 h-4 text-[#C8AD78]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.slice(0, 3).map((article) => (
            <article
              key={article.slug}
              className="bg-white border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:border-[#305d3f]/40 transition-colors shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#305d3f] leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => onNavigate(`/insights/${article.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#305d3f] hover:text-[#23462f] focus:outline-none"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8AD78]" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Transparent answers regarding project selection, RERA compliance, channel partner status, and pricing.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.slice(0, 5).map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 transition-colors shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#305d3f]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C8AD78] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('/faqs')}
            className="text-xs font-semibold text-[#305d3f] hover:underline"
          >
            Have more questions? View Complete FAQ Hub →
          </button>
        </div>
      </section>

      {/* 11. FINAL CONSULTATION & LEAD SECTION */}
      <section id="consultation-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
              Get Started
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f] leading-tight">
              Let’s Narrow the Search to the Projects That Fit You.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              Tell us what you’re looking for. We’ll help you explore the relevant options, review verified all-inclusive cost sheets, and arrange the next step.
            </p>

            <div className="pt-4 space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Direct consultation with {AGENT_NAME} ({AGENT_PHONE}).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>UP-RERA Registered Agent Reference: <strong>{AGENT_RERA_NUMBER}</strong>.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Zero buyer brokerage or consulting charges.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Verified RERA documentation and sanctioned layout review.</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 mt-6 space-y-2">
              <p className="text-xs font-semibold text-[#305d3f] uppercase tracking-wider">
                Prefer immediate messaging?
              </p>
              <a
                href="https://wa.me/919235621921?text=Hello%20GreenNest%20Realtors,%20I%20would%20like%20to%20connect%20regarding%20Lucknow%20property%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#305d3f] hover:text-[#23462f]"
              >
                <MessageCircle className="w-4 h-4 text-[#305d3f]" />
                <span>Message on WhatsApp: +91 92356 21921</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadForm
              title="Book a Private Consultation"
              subtitle="Share your goals and receive curated, verified project recommendations."
            />
          </div>
        </div>
      </section>
    </div>
  );
};
