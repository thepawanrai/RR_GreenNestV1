import React, { useState, useEffect } from 'react';
import {
  Star,
  ShieldCheck,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  MessageSquarePlus,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import {
  TESTIMONIALS,
  getStoredUserReviews,
  GOOGLE_REVIEW_URL,
  TRUSTPILOT_REVIEW_URL,
  Testimonial,
} from '../../data/testimonials';
import { ReviewSubmissionModal } from './ReviewSubmissionModal';

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
  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);

  // Sync user reviews from localStorage
  useEffect(() => {
    const userReviews = getStoredUserReviews();
    if (userReviews.length > 0) {
      setReviewsList([...userReviews, ...TESTIMONIALS]);
    }
  }, []);

  const handleReviewAdded = (newRev: Testimonial) => {
    setReviewsList((prev) => [newRev, ...prev]);
    setCurrentIndex(0);
  };

  const categories = [
    'All',
    'High ROI Investor',
    'Luxury Homeowner',
    'Medical Specialist',
    'Corporate Leader',
    'NRI Investor',
  ];

  const filtered =
    selectedCategory === 'All'
      ? reviewsList
      : reviewsList.filter((t) => t.clientCategory === selectedCategory);

  const current = filtered[currentIndex % (filtered.length || 1)] || reviewsList[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  return (
    <section id="testimonials" className="scroll-mt-24 py-16 sm:py-24 bg-white border-t border-b border-slate-200">
      <ReviewSubmissionModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onReviewSubmitted={handleReviewAdded}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
              <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#305d3f]" />
                <span>Verified Homeowner & Investor Experiences</span>
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#305d3f] tracking-tight leading-tight">
              Client Trust & Investment ROI
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
              Read firsthand accounts from doctors, corporate executives, entrepreneurs, and overseas NRI families who partnered with Athar Mansoor for prime residential acquisitions and high-yield property investments in Lucknow.
            </p>
          </div>

          {/* Action Hub Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-[#305d3f] hover:bg-[#23462f] text-white text-xs font-semibold uppercase tracking-wider py-3 px-5 transition-all shadow-xs cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#C8AD78]" />
              <span>Write a Review</span>
            </button>

            {onNavigate && (
              <button
                onClick={() => onNavigate('/testimonials')}
                className="inline-flex items-center justify-center gap-1.5 border border-slate-300 hover:border-[#305d3f] text-slate-800 hover:text-[#305d3f] text-xs font-semibold uppercase tracking-wider py-3 px-5 transition-all bg-white cursor-pointer"
              >
                <span>All Reviews & ROI</span>
                <ArrowUpRight className="w-4 h-4 text-[#C8AD78]" />
              </button>
            )}
          </div>
        </div>

        {/* 3 Review Platforms Direct Bar */}
        <div className="mb-10 p-4 sm:p-5 bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#305d3f]/10 text-[#305d3f] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#305d3f]" />
            </div>
            <div>
              <span className="font-serif font-bold text-sm text-slate-900 block">
                Have you consulted or purchased with GreenNest?
              </span>
              <span className="text-xs text-slate-500">
                Rate your experience on Google, Trustpilot, or directly on our site.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-white border border-slate-200 hover:border-blue-400 text-slate-800 shadow-2xs transition-colors"
            >
              <span className="text-blue-600 font-bold">G</span>
              <span>Review on Google</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={TRUSTPILOT_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-white border border-slate-200 hover:border-emerald-400 text-slate-800 shadow-2xs transition-colors"
            >
              <Star className="w-3 h-3 text-emerald-600 fill-emerald-600" />
              <span>Review on Trustpilot</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-[#305d3f] text-white hover:bg-[#23462f] shadow-2xs transition-colors cursor-pointer"
            >
              <MessageSquarePlus className="w-3 h-3 text-[#C8AD78]" />
              <span>Submit on Website</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
              className={`text-xs uppercase tracking-wider px-3.5 py-2 transition-all border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#305d3f] text-white border-[#305d3f] font-semibold shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Endorsements' : `${cat}s`}
            </button>
          ))}
        </div>

        {/* Featured Testimonial Hero Showcase */}
        {current && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Main Card */}
            <div className="lg:col-span-8 bg-slate-50 border border-slate-200 p-8 sm:p-12 relative flex flex-col justify-between shadow-xs">
              <div className="absolute top-6 right-8 text-slate-200 pointer-events-none">
                <Quote className="w-20 h-20 opacity-30 text-[#305d3f]" />
              </div>

              <div className="relative z-10 space-y-6">
                {/* Rating stars & verified badge & ROI */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {current.roiMetric && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-emerald-100/70 border border-emerald-300 px-2.5 py-0.5">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{current.roiMetric}</span>
                      </span>
                    )}

                    {current.platform && (
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 border ${
                          current.platform === 'Google'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : current.platform === 'Trustpilot'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        {current.platform}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#305d3f] leading-snug">
                    "{current.headline}"
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                    {current.quote}
                  </p>
                </div>
              </div>

              {/* Client Profile and Controls */}
              <div className="relative z-10 pt-8 mt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#305d3f] text-[#C8AD78] font-serif font-bold flex items-center justify-center text-base shadow-sm shrink-0">
                    {current.avatarInitial}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-slate-900">
                      {current.clientName}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium">{current.designation}</p>
                    <p className="text-[11px] text-[#305d3f] mt-0.5 font-medium">
                      {current.projectPurchased} · {current.location}
                    </p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-xs text-slate-500 font-mono mr-2">
                    {((currentIndex % filtered.length) + 1).toString().padStart(2, '0')} / {filtered.length.toString().padStart(2, '0')}
                  </span>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous review"
                    className="p-2 border border-slate-300 hover:border-[#305d3f] hover:text-[#305d3f] text-slate-600 transition-colors bg-white shadow-2xs cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next review"
                    className="p-2 border border-slate-300 hover:border-[#305d3f] hover:text-[#305d3f] text-slate-600 transition-colors bg-white shadow-2xs cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Side Trust Column */}
            <div className="lg:col-span-4 bg-[#305d3f] text-white p-8 flex flex-col justify-between shadow-xs">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C8AD78] font-semibold block mb-1">
                    Advisory Principles
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-white leading-snug">
                    Why Lucknow Families & Investors Trust GreenNest
                  </h4>
                </div>

                <div className="space-y-4 text-xs text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Direct Developer Terms:</strong> Direct liaison with official project sales and executive desks.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Zero Buyer Brokerage:</strong> Complete advisory, tour coordination, and allotment support at zero advisory fee.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Verifiable ROI Calculations:</strong> Objective price-trend evaluation based on corridor growth, not hyperbole.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>15 Years Experience:</strong> Dedicated Lucknow market focus led personally by Athar Mansoor.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/15 mt-8 space-y-2">
                {onOpenConsultation && (
                  <button
                    onClick={() => onOpenConsultation()}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#305d3f] hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider py-3.5 px-4 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Book Private Advisory</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C8AD78]" />
                  </button>
                )}
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('/testimonials')}
                    className="w-full text-center text-xs text-[#C8AD78] hover:text-white py-1.5 transition-colors cursor-pointer"
                  >
                    View All Client Reviews & Testimonials →
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Client Endorsement Grid (Additional Proof Cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white border border-slate-200 hover:border-[#305d3f] transition-all flex flex-col justify-between space-y-4 shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  {item.roiMetric && (
                    <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 font-semibold border border-emerald-100 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-600" />
                      <span>{item.roiMetric}</span>
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  “{item.quote.slice(0, 160)}...”
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-serif font-bold text-slate-900">{item.clientName}</p>
                  <p className="text-[11px] text-slate-500">{item.designation.split(',')[0]}</p>
                </div>
                <span className="text-[10px] text-[#305d3f] bg-slate-50 px-2 py-0.5 font-medium border border-slate-200">
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
