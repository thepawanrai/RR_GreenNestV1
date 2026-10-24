import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import {
  Star,
  ShieldCheck,
  Quote,
  TrendingUp,
  ExternalLink,
  MessageSquarePlus,
  Building2,
  Calendar,
  CheckCircle,
  Award,
  Sparkles,
} from 'lucide-react';
import {
  TESTIMONIALS,
  getStoredUserReviews,
  GOOGLE_REVIEW_URL,
  TRUSTPILOT_REVIEW_URL,
  Testimonial,
} from '../data/testimonials';
import { AGENT_NAME, AGENT_PHONE } from '../data/projects';
import { ReviewSubmissionModal } from '../components/common/ReviewSubmissionModal';

interface TestimonialsPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (projectSlug?: string, projectName?: string) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [allReviews, setAllReviews] = useState<Testimonial[]>(TESTIMONIALS);

  // Load dynamically persisted client reviews on mount
  useEffect(() => {
    const userReviews = getStoredUserReviews();
    if (userReviews.length > 0) {
      // Merge user reviews at top
      setAllReviews([...userReviews, ...TESTIMONIALS]);
    }
  }, []);

  const handleReviewSubmitted = (newReview: Testimonial) => {
    setAllReviews((prev) => [newReview, ...prev]);
  };

  const categories = [
    'All',
    'High ROI Investor',
    'Luxury Homeowner',
    'NRI Investor',
    'Medical Specialist',
    'Corporate Leader',
  ];

  const filteredReviews =
    selectedCategory === 'All'
      ? allReviews
      : allReviews.filter((t) => t.clientCategory === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Review Submission Modal */}
      <ReviewSubmissionModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Client Reviews & ROI' }]} onNavigate={onNavigate} />

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold flex-wrap">
            <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#305d3f]" />
              <span>Verified Homeowner & Investor Testimonials</span>
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>15 Years of Lucknow Advisory Excellence</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#305d3f] leading-tight">
              Client Endorsements & Realized Investment Returns
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
              Read firsthand accounts from senior medical specialists, corporate leaders, overseas NRI families, and real estate investors who leveraged Athar Mansoor's 15-year advisory expertise to acquire signature residences and high-growth property assets across Lucknow.
            </p>
          </div>

          {/* Social Proof Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 bg-slate-50 border border-slate-200 text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <span className="font-bold text-slate-900 text-base sm:text-lg block">4.9 / 5.0 Rating</span>
              <span className="text-slate-500">Across Google, Trustpilot & Direct</span>
            </div>

            <div className="space-y-1">
              <span className="font-serif font-bold text-[#305d3f] text-base sm:text-lg block">15+ Years</span>
              <span className="font-semibold text-slate-800 block">Personal Market Focus</span>
              <span className="text-slate-500">Led by Athar Mansoor</span>
            </div>

            <div className="space-y-1">
              <span className="font-serif font-bold text-[#C8AD78] text-base sm:text-lg block">+35% to +44%</span>
              <span className="font-semibold text-slate-800 block">Top Realized ROI</span>
              <span className="text-slate-500">Corridor Capital Growth</span>
            </div>

            <div className="space-y-1">
              <span className="font-serif font-bold text-emerald-700 text-base sm:text-lg block">Zero Brokerage</span>
              <span className="font-semibold text-slate-800 block">Direct Developer Terms</span>
              <span className="text-slate-500">100% UP-RERA Verified</span>
            </div>
          </div>
        </div>

        {/* The 3-Channel Review Hub Banner */}
        <div className="bg-[#305d3f] text-white p-6 sm:p-10 border border-[#23462f] shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-6">
            <div className="space-y-1.5">
              <span className="text-xs uppercase tracking-widest text-[#C8AD78] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Client Feedback & Review Portal</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                Share Your GreenNest Experience
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 font-light max-w-2xl leading-relaxed">
                Did Athar Mansoor help you acquire your dream home or achieve an awesome investment ROI? Help fellow homebuyers and investors by sharing your experience on Google, Trustpilot, or directly on our website.
              </p>
            </div>

            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-[#C8AD78] hover:bg-[#DFCDA6] text-[#23462f] text-xs font-semibold uppercase tracking-wider py-3.5 px-6 transition-all shadow-sm shrink-0 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Review Now</span>
            </button>
          </div>

          {/* 3 Review Channels Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-800">
            {/* Channel 1: Google My Business */}
            <div className="bg-white p-5 border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-sm border border-blue-200">
                      G
                    </span>
                    <h3 className="font-serif font-bold text-base text-slate-900">
                      Google Reviews
                    </h3>
                  </div>
                  <span className="text-[10px] bg-blue-100 text-blue-800 font-semibold px-2 py-0.5">
                    Public Discovery
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Post directly on GreenNest Realtors' official Google Business profile to help families and investors discover verified advisory in Lucknow.
                </p>
              </div>

              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 px-4 transition-colors shadow-xs"
              >
                <span>Review on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Channel 2: Trustpilot */}
            <div className="bg-white p-5 border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center text-sm border border-emerald-200">
                      ★
                    </span>
                    <h3 className="font-serif font-bold text-base text-slate-900">
                      Trustpilot Reviews
                    </h3>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5">
                    Global Rating
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rate your property search and legal due diligence experience on Trustpilot's independent consumer platform.
                </p>
              </div>

              <a
                href={TRUSTPILOT_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full bg-[#00b67a] hover:bg-[#009e6a] text-white text-xs font-semibold py-2.5 px-4 transition-colors shadow-xs"
              >
                <span>Review on Trustpilot</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Channel 3: Direct Website */}
            <div className="bg-white p-5 border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-50 text-[#305d3f] font-bold flex items-center justify-center text-sm border border-emerald-200">
                      ✓
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#305d3f]">
                      On-Site Review
                    </h3>
                  </div>
                  <span className="text-[10px] bg-[#305d3f]/10 text-[#305d3f] font-semibold px-2 py-0.5">
                    Instant Publish
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Submit your review right here with project details and investment ROI metrics to be featured directly in our client showcase.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsReviewModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 w-full bg-[#305d3f] hover:bg-[#23462f] text-white text-xs font-semibold py-2.5 px-4 transition-colors shadow-xs cursor-pointer"
              >
                <MessageSquarePlus className="w-3.5 h-3.5 text-[#C8AD78]" />
                <span>Write Website Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-[#305d3f]">
              Verified Client Testimonials ({filteredReviews.length})
            </h2>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Showing:</span>
              <span className="font-semibold text-slate-800">{selectedCategory}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-wider px-3.5 py-2 transition-all border cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#305d3f] text-white border-[#305d3f] font-semibold shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Reviews' : `${cat}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredReviews.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-slate-200 hover:border-[#305d3f]/40 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all space-y-5"
            >
              <div className="space-y-4">
                {/* Header: Stars & Platform / ROI Badge */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {item.roiMetric && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5">
                        <TrendingUp className="w-3 h-3 text-emerald-700" />
                        <span>{item.roiMetric}</span>
                      </span>
                    )}

                    {item.platform && (
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 border ${
                          item.platform === 'Google'
                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                            : item.platform === 'Trustpilot'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        {item.platform}
                      </span>
                    )}
                  </div>
                </div>

                {/* Headline */}
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#305d3f] leading-snug">
                  "{item.headline}"
                </h3>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {item.quote}
                </p>
              </div>

              {/* Client Profile Info & Project */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#305d3f] text-[#C8AD78] font-serif font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                    {item.avatarInitial}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm text-slate-900 truncate">
                      {item.clientName}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">
                      {item.designation}
                    </p>
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 space-y-1 bg-slate-50 p-2.5 border border-slate-200/80">
                  <div className="flex items-start gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#305d3f] shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800 truncate">
                      {item.projectPurchased}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 flex items-center justify-between">
                    <span>{item.location}</span>
                    <span className="text-emerald-800 font-medium">{item.verifiedDetails}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-slate-50 border border-slate-200 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#305d3f]">
              Experience Lucknow’s Most Trusted Real Estate Advisory
            </h3>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              Whether you are an overseas NRI looking for remote due diligence or a local resident upgrading to low-density luxury, consult directly with Athar Mansoor.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => onOpenConsultation()}
              className="bg-[#305d3f] hover:bg-[#23462f] text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-6 transition-colors shadow-sm cursor-pointer"
            >
              Book Private Consultation
            </button>
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="border border-[#305d3f] text-[#305d3f] hover:bg-[#305d3f]/5 text-xs font-semibold uppercase tracking-wider py-3.5 px-6 transition-colors cursor-pointer"
            >
              Add Your Client Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
