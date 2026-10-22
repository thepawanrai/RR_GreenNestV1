import React, { useState, useEffect } from 'react';
import { PROJECTS, AGENT_NAME, AGENT_PHONE } from '../data/projects';
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
  Calendar,
  Sparkles,
  MapPin
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (projectSlug?: string, projectName?: string) => void;
}

// 3 Main Flagship Projects as explicitly instructed by the user
const HERO_SLIDES = [
  {
    id: 'shalimar-oneworld',
    slug: 'shalimar-oneworld',
    projectName: 'Shalimar OneWorld',
    tagline: '212-Acre Master-Planned Lakefront & Riverfront Township',
    highlight: '1.5-Acre Lake Promenade · Club One Grand Clubhouse · Luxury Towers & Villas',
    rera: 'UPRERAPRJ858081/05/2024',
    price: 'Starting ₹1.45 Crore*',
    image: '/images/projects/shalimar-21-banner.jpg',
    location: 'Sector 6, Amar Shaheed Path, Gomti Nagar Extension, Lucknow',
    counter: '01 / 03',
    badge: '212-Acre Riverfront Township',
    developer: 'Shalimar Group'
  },
  {
    id: 'ksmb-the-royal-retreat',
    slug: 'ksmb-the-royal-retreat',
    projectName: 'KSMB The Royal Retreat',
    tagline: 'Epitome of Luxury · Crafted Exclusively for You',
    highlight: '4 Exclusive Blocks · 162 Residences & 6 Sky Villas · 2 Grand Clubhouses',
    rera: 'UP-RERA Registered / Sanctioned',
    price: 'Starting ₹1.95 Crore*',
    image: '/images/projects/ksmb-royal-retreat-hero.jpg',
    location: 'Just off Amar Shaheed Path, Gomti Nagar Extension, Lucknow',
    counter: '02 / 03',
    badge: 'Royal Architectural Sanctuary',
    developer: 'KSMB Group'
  },
  {
    id: 'emaar-elite-oasis',
    slug: 'emaar-elite-oasis',
    projectName: 'EMAAR Elite Oasis',
    tagline: 'An Oasis of Serenity · Global Luxury Living in Gomti Nagar Extension',
    highlight: '3 & 4 BHK Luxury Residences & Penthouses · World-Class Master Community',
    rera: 'UP-RERA Registered',
    price: 'Starting ₹2.10 Crore*',
    image: '/images/projects/emaar-elite-oasis-hero.jpg',
    location: 'Gomti Nagar Extension, Lucknow',
    counter: '03 / 03',
    badge: 'Global Luxury Benchmark',
    developer: 'Emaar India'
  }
];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-play timer for hero slider (6 seconds, pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <div className="space-y-16 sm:space-y-24 bg-white">
      {/* 1. CINEMATIC FULL-SECTION HERO SLIDER (Whole Image + Full Details) */}
      <section 
        className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-end overflow-hidden bg-slate-950 text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Full-width Background Image Slides with Crossfade */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <img
              src={slide.image}
              alt={`${slide.projectName} - ${slide.tagline}`}
              className="w-full h-full object-cover object-center"
            />
            {/* Multi-tier luxury scrims for maximum legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30" />
            <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/40" />
          </div>
        ))}

        {/* Content Container Overlaid at the Bottom of the Full Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 pt-28">
          <div className="space-y-4 max-w-4xl">
            {/* Badges: Category, RERA, Developer */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="bg-[#305d3f] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider shadow-sm">
                {activeSlide.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white border border-white/25 text-xs font-medium px-3 py-1 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8AD78]" />
                <span>RERA: {activeSlide.rera}</span>
              </span>
              <span className="text-xs text-[#EAD8B2] font-semibold tracking-wider uppercase">
                {activeSlide.developer}
              </span>
            </div>

            {/* Monumental Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              {activeSlide.projectName}
            </h1>

            {/* Subtitle / Tagline */}
            <p className="text-base sm:text-xl text-[#EAD8B2] font-light leading-relaxed max-w-3xl">
              {activeSlide.tagline}
            </p>

            {/* Key Highlight & Location */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-200 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C8AD78] shrink-0" />
                <span>{activeSlide.location}</span>
              </div>
              <span className="text-white/40 hidden sm:inline">·</span>
              <span className="text-slate-300 hidden sm:inline">{activeSlide.highlight}</span>
            </div>

            {/* Benchmark Price and Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/20">
              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-wider text-slate-300 font-semibold block">
                  Indicative Starting Benchmark
                </span>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C8AD78]">
                  {activeSlide.price}
                </div>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => onNavigate(`/projects/${activeSlide.slug}`)}
                  className="inline-flex items-center justify-center gap-2 bg-[#305d3f] hover:bg-[#23462f] text-white text-sm font-semibold py-3 px-6 transition-all shadow-md cursor-pointer border border-[#C8AD78]/30"
                >
                  <span>Explore Project</span>
                  <ArrowRight className="w-4 h-4 text-[#C8AD78]" />
                </button>

                <button
                  onClick={() => onOpenConsultation(activeSlide.slug, activeSlide.projectName)}
                  className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-medium py-3 px-5 transition-all border border-white/30 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#C8AD78]" />
                  <span>Enquire Now</span>
                </button>

                <a
                  href={`https://wa.me/919235621921?text=${encodeURIComponent(
                    `Hello ${AGENT_NAME}, I would like to know more about ${activeSlide.projectName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600/80 hover:bg-emerald-600 text-white text-sm font-medium py-3 px-4 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Bottom Slider Navigation Tabs (01 Shalimar OneWorld, 02 The Royal Retreat, 03 Emaar Elite Oasis) */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`px-3.5 py-2 text-xs transition-all text-left border cursor-pointer shrink-0 ${
                      currentSlide === idx
                        ? 'bg-white/25 border-[#C8AD78] text-white shadow-sm'
                        : 'bg-black/30 hover:bg-black/50 border-white/10 text-white/70'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-[#C8AD78] block font-bold">0{idx + 1}</span>
                    <span className="font-medium whitespace-nowrap">{slide.projectName}</span>
                  </button>
                ))}
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                  className="p-2 bg-black/40 hover:bg-black/70 border border-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  className="p-2 bg-black/40 hover:bg-black/70 border border-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION STRIP BELOW HERO */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-slate-700">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#305d3f] shrink-0" />
              <div>
                <strong className="text-slate-900 block font-semibold">100% RERA Registered</strong>
                <span className="text-slate-500">Only legally vetted developments</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileCheck2 className="w-5 h-5 text-[#305d3f] shrink-0" />
              <div>
                <strong className="text-slate-900 block font-semibold">Direct Promoter Pricing</strong>
                <span className="text-slate-500">Transparent builder price sheets</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-[#305d3f] shrink-0" />
              <div>
                <strong className="text-slate-900 block font-semibold">Curated Luxury Selection</strong>
                <span className="text-slate-500">Hand-picked flagship projects</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building className="w-5 h-5 text-[#305d3f] shrink-0" />
              <div>
                <strong className="text-slate-900 block font-semibold">Zero Buyer Brokerage</strong>
                <span className="text-slate-500">Unbiased advisory consultations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHALIMAR ONEWORLD TOWNSHIP SPOTLIGHT */}
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
                Shalimar OneWorld: A 212+ Acre Landmark
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Designed by international master architects <strong>JT+Partners</strong> and <strong>42MM Architecture</strong>, Shalimar OneWorld is an LDA-approved self-sustained riverfront township combining premier residences, waterfront promenade, sports academies, and academic institutions.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/projects/shalimar-oneworld')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#305d3f] hover:underline flex-shrink-0 cursor-pointer"
            >
              <span>View Shalimar OneWorld Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C8AD78]" />
            </button>
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

      {/* 4. CURATED PROJECTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-1.5">
            <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Selected Landmark Developments
            </h2>
          </div>

          <button
            onClick={() => onNavigate('/projects')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#305d3f] hover:text-[#23462f] transition-colors cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-[#C8AD78]" />
          </button>
        </div>

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
      </section>

      {/* 5. WHY GREENNEST (Curated Advisory Philosophy) */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
                Our Advisory Standard
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Why Selective Real Estate Beats Endless Listings
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Generic real estate aggregators drown buyers in thousands of unvetted options. At GreenNest, we intentionally limit our portfolio to hand-picked developments with clear legal titles and superior architectural execution.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#305d3f] hover:underline cursor-pointer"
                >
                  <span>Learn about our selection criteria</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8AD78]" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-5 bg-white border border-slate-200 space-y-2 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#305d3f]" />
                <h3 className="font-serif text-base font-bold text-slate-900">100% RERA Diligence</h3>
                <p className="text-slate-600 leading-relaxed">
                  We check sanctioned layout blueprints, promoter encumbrance certificates, and escrow accounts before recommending any enclave.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200 space-y-2 shadow-xs">
                <FileCheck2 className="w-5 h-5 text-[#305d3f]" />
                <h3 className="font-serif text-base font-bold text-slate-900">Direct Promoter Pricing</h3>
                <p className="text-slate-600 leading-relaxed">
                  Zero hidden broker commissions. Buyers receive direct developer price sheets with transparent installment schedules.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200 space-y-2 shadow-xs">
                <Compass className="w-5 h-5 text-[#305d3f]" />
                <h3 className="font-serif text-base font-bold text-slate-900">Sunlight & Floorplate Analysis</h3>
                <p className="text-slate-600 leading-relaxed">
                  We evaluate apartment orientation, cross-ventilation, and view corridors to ensure long-term livability.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200 space-y-2 shadow-xs">
                <Building className="w-5 h-5 text-[#305d3f]" />
                <h3 className="font-serif text-base font-bold text-slate-900">Personalized End-to-End Escort</h3>
                <p className="text-slate-600 leading-relaxed">
                  Direct liaison with lead advisor Athar Mansoor from first site visit through allotment paperwork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SHALIMAR EXCELLENCE SUMMIT AWARD SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1e3e2b] text-white p-8 sm:p-12 border border-[#305d3f] shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
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
                <span>Advisory Excellence Recognition</span>
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

      {/* 7. NRI & OUT-OF-CITY BUYER BLOCK */}
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
                Overseas and out-of-city buyers face unique challenges: limited time for site inspections, time zone differences, and complex documentation. GreenNest bridges this distance with high-touch remote coordination and verified property advisory.
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
                  <span>NRE/NRO banking & repatriation assistance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                  <span>Direct promoter allotment paperwork dispatch</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/nri-corner')}
                  className="inline-flex items-center gap-2 bg-[#C8AD78] hover:bg-[#b59a67] text-slate-950 text-xs font-semibold py-3 px-5 transition-colors cursor-pointer shadow-sm"
                >
                  <span>Visit NRI Advisory Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#23462f] p-6 sm:p-8 border border-[#3d7350] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#C8AD78]">
                Clear Compliance Boundary
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                GreenNest coordinates project selection, promoter liaison, and on-ground verification. Please note that formal legal title searches, FEMA tax compliance, and DTAA structuring must be executed by qualified legal and tax practitioners. We provide the coordination checklist to discuss with your professional advisors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <TestimonialsSection onOpenConsultation={onOpenConsultation} />

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
            Clear Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 pt-4">
          {FAQS.slice(0, 5).map((faq, idx) => (
            <div key={idx} className="border border-slate-200 bg-white">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-semibold text-slate-900 hover:text-[#305d3f] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openFaqIndex === idx ? 'rotate-180 text-[#305d3f]' : ''}`} />
              </button>
              {openFaqIndex === idx && (
                <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 10. LEAD CONSULTATION FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <LeadForm
          title="Schedule a Private Consultation"
          subtitle="Speak with lead advisor Athar Mansoor for curated Lucknow property shortlisting."
          onSuccess={() => {}}
        />
      </section>

      {/* 11. ADVISOR PROFILE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AdvisorCard
          onOpenConsultation={() => onOpenConsultation()}
          onViewProjects={() => onNavigate('/projects')}
        />
      </section>
    </div>
  );
};
