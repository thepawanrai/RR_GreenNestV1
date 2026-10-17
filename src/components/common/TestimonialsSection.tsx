import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../../data/testimonials';

interface TestimonialsSectionProps {
  onNavigate?: (path: string) => void;
  onOpenConsultation?: (projectSlug?: string, projectName?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories = [
    'All',
    'Luxury Homeowner',
    'Medical Specialist',
    'Corporate Leader',
    'NRI Investor',
  ];

  const filtered = selectedCategory === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.clientCategory === selectedCategory);

  const current = filtered[currentIndex % filtered.length] || TESTIMONIALS[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  return (
    <section id="testimonials" className="scroll-mt-24 py-16 sm:py-24 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold mb-3">
            <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#305d3f]" />
              <span>Verified Homeowner & Investor Experiences</span>
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#305d3f] tracking-tight leading-tight">
            Client Trust & Endorsements
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            Read firsthand accounts from senior medical practitioners, corporate leaders, entrepreneurs, and overseas NRI families who partnered with Athar Mansoor to acquire homes in Shalimar OneWorld and Lucknow’s premier developments.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`text-xs uppercase tracking-wider px-3.5 py-2 transition-all border ${
                  selectedCategory === cat
                    ? 'bg-[#305d3f] text-white border-[#305d3f] font-semibold shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Endorsements' : `${cat}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Card */}
          <div className="lg:col-span-8 bg-slate-50 border border-slate-200 p-8 sm:p-12 relative flex flex-col justify-between shadow-xs">
            <div className="absolute top-6 right-8 text-slate-200 pointer-events-none">
              <Quote className="w-20 h-20 opacity-40 text-[#305d3f]" />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Rating stars & verified badge */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1 text-[#C8AD78]">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#C8AD78]" />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-700">5.0 / 5.0 Experience</span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs text-[#305d3f] bg-white border border-slate-200 px-3 py-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f]" />
                  <span>{current.verifiedDetails}</span>
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                “{current.headline}”
              </h3>

              {/* Quote Body */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-light">
                {current.quote}
              </p>

              {/* Property Tag */}
              <div className="pt-2 flex items-center gap-2 flex-wrap">
                <span className="text-xs text-slate-500 font-medium">Acquired Property:</span>
                {onNavigate ? (
                  <button
                    onClick={() => onNavigate(`/projects/${current.projectSlug}`)}
                    className="text-xs font-semibold text-[#305d3f] hover:underline flex items-center gap-1"
                  >
                    <span>{current.projectPurchased}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C8AD78]" />
                  </button>
                ) : (
                  <span className="text-xs font-semibold text-[#305d3f]">{current.projectPurchased}</span>
                )}
              </div>
            </div>

            {/* Author Footer with Navigation */}
            <div className="pt-8 mt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[#305d3f] text-[#C8AD78] flex items-center justify-center font-serif font-bold text-lg border border-white/20 shadow-xs flex-shrink-0">
                  {current.avatarInitial}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-base">{current.clientName}</h4>
                  <p className="text-xs text-slate-600">{current.designation}</p>
                  <p className="text-[11px] text-slate-500">{current.location} · {current.year}</p>
                </div>
              </div>

              {/* Carousel Next / Prev Controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <span className="text-xs font-mono text-slate-500 mr-2">
                  0{((currentIndex % filtered.length) + 1)} / 0{filtered.length}
                </span>
                <button
                  onClick={handlePrev}
                  className="p-2 border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Trust Column */}
          <div className="lg:col-span-4 bg-[#305d3f] text-white p-8 sm:p-10 flex flex-col justify-between border border-[#23462f] shadow-md">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C8AD78] font-semibold">
                Why Discerning Buyers Choose Us
              </span>

              <h4 className="font-serif text-2xl font-bold leading-tight">
                Private Advisory Grounded in UP-RERA Compliance
              </h4>

              <div className="space-y-4 text-xs text-slate-200 leading-relaxed border-t border-white/15 pt-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Authorised Channel Partner:</strong> Direct liaison with Shalimar Corp. management desk.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Developer Pricing:</strong> Zero brokerage fee charged to residential homebuyers.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Verified Paperwork:</strong> Title sanction numbers, carpet area verification, and phased possession timelines.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>10 Years Experience:</strong> Dedicated Lucknow market focus led personally by Athar Mansoor.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/15 mt-8">
              {onOpenConsultation ? (
                <button
                  onClick={() => onOpenConsultation()}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#305d3f] hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider py-3.5 px-4 transition-all shadow-sm cursor-pointer"
                >
                  <span>Book Private Advisory</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C8AD78]" />
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {/* Client Endorsement Grid (Additional Proof Cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white border border-slate-200 hover:border-[#305d3f] transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#C8AD78]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  “{item.quote.slice(0, 150)}...”
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-serif font-bold text-slate-900">{item.clientName}</p>
                  <p className="text-[11px] text-slate-500">{item.designation.split(',')[0]}</p>
                </div>
                <span className="text-[10px] text-[#305d3f] bg-emerald-50 px-2 py-0.5 font-medium border border-emerald-100">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
