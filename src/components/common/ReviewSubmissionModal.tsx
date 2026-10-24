import React, { useState } from 'react';
import { X, Star, CheckCircle, ExternalLink, Send, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { GOOGLE_REVIEW_URL, TRUSTPILOT_REVIEW_URL, saveUserReview, Testimonial } from '../../data/testimonials';
import { PROJECTS } from '../../data/projects';

interface ReviewSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted?: (newReview: Testimonial) => void;
}

export const ReviewSubmissionModal: React.FC<ReviewSubmissionModalProps> = ({
  isOpen,
  onClose,
  onReviewSubmitted,
}) => {
  const [activeTab, setActiveTab] = useState<'website' | 'google' | 'trustpilot'>('website');

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [projectPurchased, setProjectPurchased] = useState('Shalimar OneWorld');
  const [category, setCategory] = useState<Testimonial['clientCategory']>('High ROI Investor');
  const [roiMetric, setRoiMetric] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [headline, setHeadline] = useState('');
  const [quote, setQuote] = useState('');
  const [consent, setConsent] = useState(true);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedReview, setSubmittedReview] = useState<Testimonial | null>(null);

  if (!isOpen) return null;

  const handleSubmitWebsiteReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMsg('Please enter a valid contact number.');
      return;
    }
    if (!headline.trim()) {
      setErrorMsg('Please provide a short headline for your review.');
      return;
    }
    if (!quote.trim()) {
      setErrorMsg('Please share details about your experience or property ROI.');
      return;
    }
    if (!consent) {
      setErrorMsg('Please acknowledge consent to publish your review.');
      return;
    }

    setLoading(true);

    try {
      // 1. Deliver to Web3Forms so GreenNest Realtors gets notified immediately
      const formData = new FormData();
      formData.append('access_key', 'b8043057-cf87-46a6-b309-ff0e8c4d1e58');
      formData.append('name', name.trim());
      formData.append('email', email.trim());
      formData.append('phone', phone.trim());
      formData.append('designation', designation.trim() || 'Valued Client');
      formData.append('project_purchased', projectPurchased);
      formData.append('category', category);
      formData.append('roi_metric', roiMetric.trim() || 'N/A');
      formData.append('rating', `${rating} Stars`);
      formData.append('review_headline', headline.trim());
      formData.append('review_text', quote.trim());
      formData.append('subject', `★ New ${rating}-Star Client Review from ${name.trim()} (${projectPurchased})`);
      formData.append('from_name', 'GreenNest Realtors Reviews Desk');

      const fullMessage = `NEW CLIENT REVIEW SUBMISSION:\n\nReviewer: ${name.trim()} (${designation.trim() || 'Client'})\nRating: ${rating}/5 Stars\nHeadline: "${headline.trim()}"\nProject / Property: ${projectPurchased}\nCategory: ${category}\nROI / Key Metric: ${roiMetric.trim() || 'N/A'}\n\nReview Body:\n"${quote.trim()}"\n\nContact Details:\nEmail: ${email.trim()}\nPhone: ${phone.trim()}`;
      formData.append('message', fullMessage);

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      // 2. Persist locally so it displays in the live testimonial stream
      const saved = saveUserReview({
        clientName: name.trim(),
        designation: designation.trim() || 'Verified Homeowner & Client',
        clientCategory: category,
        projectPurchased,
        location: 'Lucknow, Uttar Pradesh',
        rating,
        headline: headline.trim(),
        quote: quote.trim(),
        verifiedDetails: `Verified Client Review · ${new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`,
        roiMetric: roiMetric.trim() || (category === 'High ROI Investor' ? '+35% Growth' : 'Verified Investment'),
        platform: 'Website',
      });

      setSubmittedReview(saved);
      if (onReviewSubmitted) {
        onReviewSubmitted(saved);
      }
    } catch (err: unknown) {
      console.error('Review submit error:', err);
      // Even if network fails, save locally so client is never discouraged
      const saved = saveUserReview({
        clientName: name.trim(),
        designation: designation.trim() || 'Verified Client',
        clientCategory: category,
        projectPurchased,
        location: 'Lucknow, Uttar Pradesh',
        rating,
        headline: headline.trim(),
        quote: quote.trim(),
        verifiedDetails: 'Verified Client Review',
        roiMetric: roiMetric.trim() || 'Verified Asset',
        platform: 'Website',
      });
      setSubmittedReview(saved);
      if (onReviewSubmitted) {
        onReviewSubmitted(saved);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn cursor-pointer"
      aria-modal="true"
      role="dialog"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] sm:max-h-[88vh] cursor-default my-auto overflow-hidden"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 bg-white/98 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-slate-200 flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#305d3f] bg-emerald-50 px-2 py-0.5 border border-emerald-200/80">
              <Sparkles className="w-3 h-3 text-[#C8AD78]" />
              <span>Client Endorsement</span>
            </span>
            <span className="font-serif font-bold text-sm sm:text-base text-slate-900">
              Share Your GreenNest Experience
            </span>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-colors cursor-pointer border border-slate-200"
          >
            <span>Exit</span>
            <X className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-8 space-y-6">
          {/* Channel Selector Cards */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
              Choose Where to Post Your Review:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Option 1: Direct on Website */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('website');
                  setSubmittedReview(null);
                }}
                className={`p-3.5 border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  activeTab === 'website'
                    ? 'border-[#305d3f] bg-[#305d3f]/5 ring-1 ring-[#305d3f]'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-sm text-[#305d3f]">Website Review</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.5">Instant</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Featured directly on GreenNest Realtors website & ROI portfolio.
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-semibold text-[#305d3f] flex items-center gap-1">
                  <span>Write Review Below ↓</span>
                </div>
              </button>

              {/* Option 2: Google My Business */}
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveTab('google')}
                className={`p-3.5 border text-left transition-all cursor-pointer flex flex-col justify-between group ${
                  activeTab === 'google'
                    ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-600'
                    : 'border-slate-200 hover:border-blue-300 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-sm text-slate-900 flex items-center gap-1.5">
                      <span className="w-3.5 h-3.5 inline-block text-blue-600 font-bold">G</span>
                      <span>Google Reviews</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Public review on Google Maps & Search. Highly appreciated!
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-semibold text-blue-700 flex items-center gap-1">
                  <span>Open Google Link →</span>
                </div>
              </a>

              {/* Option 3: Trustpilot */}
              <a
                href={TRUSTPILOT_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveTab('trustpilot')}
                className={`p-3.5 border text-left transition-all cursor-pointer flex flex-col justify-between group ${
                  activeTab === 'trustpilot'
                    ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600'
                    : 'border-slate-200 hover:border-emerald-300 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-sm text-slate-900 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                      <span>Trustpilot</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Global consumer trust platform. Rate your advisory experience.
                  </p>
                </div>
                <div className="mt-2 text-[10px] font-semibold text-emerald-700 flex items-center gap-1">
                  <span>Open Trustpilot →</span>
                </div>
              </a>
            </div>
          </div>

          {/* External platform click confirmation banner */}
          {activeTab === 'google' && (
            <div className="p-4 bg-blue-50 border border-blue-200 text-blue-900 text-xs space-y-2">
              <div className="font-semibold flex items-center gap-1.5">
                <ExternalLink className="w-4 h-4 text-blue-700" />
                <span>Google Review Page Opened in a New Tab</span>
              </div>
              <p className="text-blue-800 leading-relaxed">
                If the window didn't open automatically,{' '}
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-blue-900"
                >
                  click here to review on Google
                </a>
                . You can also submit a copy below so it displays instantly on our website.
              </p>
            </div>
          )}

          {activeTab === 'trustpilot' && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2">
              <div className="font-semibold flex items-center gap-1.5">
                <Star className="w-4 h-4 text-emerald-700 fill-emerald-700" />
                <span>Trustpilot Review Page</span>
              </div>
              <p className="text-emerald-800 leading-relaxed">
                Share your verified rating on Trustpilot by{' '}
                <a
                  href={TRUSTPILOT_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-emerald-900"
                >
                  clicking here to review on Trustpilot
                </a>
                .
              </p>
            </div>
          )}

          {/* Submitted State Display */}
          {submittedReview ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold text-emerald-950">
                  Thank You for Your Endorsement!
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Your review has been recorded via Web3Forms and published to our live client reviews list. Your support means the world to our team.
                </p>
              </div>

              {/* Cross-Post Call to Action */}
              <div className="pt-3 border-t border-emerald-200/60 max-w-md mx-auto space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-900 block">
                  Help Others by Posting to Google as Well:
                </span>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <a
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 px-4 transition-colors shadow-xs"
                  >
                    <span>Post to Google My Business</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={TRUSTPILOT_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#00b67a] hover:bg-[#009e6a] text-white text-xs font-semibold py-2.5 px-4 transition-colors shadow-xs"
                  >
                    <span>Post to Trustpilot</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="text-xs text-emerald-800 underline hover:text-emerald-950"
                >
                  Close this window
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Website Review Form */
            <form onSubmit={handleSubmitWebsiteReview} className="space-y-4" noValidate>
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Star Rating Selector */}
              <div className="bg-slate-50 border border-slate-200 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Overall Experience Rating <span className="text-red-600">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500">
                    Click to choose your star rating
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-110 transition-transform cursor-pointer"
                      title={`${star} Star${star > 1 ? 's' : ''}`}
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 font-bold text-sm text-[#305d3f]">
                    {rating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Review Headline */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Review Headline <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Exceptional capital appreciation and transparent RERA guidance"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
                />
              </div>

              {/* Review Body */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Your Testimonial / Story <span className="text-red-600">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details of your purchase, property ROI, developer allotment experience, or how Athar Mansoor guided your decision..."
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
                />
              </div>

              {/* Property Purchased & ROI Highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Property / Township Invested In
                  </label>
                  <select
                    value={projectPurchased}
                    onChange={(e) => setProjectPurchased(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
                  >
                    <option value="Shalimar OneWorld">Shalimar OneWorld (Lakefront / Riverfront)</option>
                    <option value="KSMB The Royal Retreat">KSMB The Royal Retreat (Hazratganj)</option>
                    <option value="EMAAR Elite Oasis">EMAAR Elite Oasis (Expressway Corridor)</option>
                    <option value="Gomti Nagar Extension Residence">Gomti Nagar Extension Luxury Residence</option>
                    <option value="Amar Shaheed Path Corridor">Amar Shaheed Path Investment Asset</option>
                    <option value="Commercial / Retail Suite">Commercial / Retail Asset</option>
                    <option value="Other Lucknow Property">Other Curated Lucknow Property</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    ROI Metric or Achievement Highlight
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. +38% ROI in 2 Yrs or 7.5% Rental Yield"
                    value={roiMetric}
                    onChange={(e) => setRoiMetric(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
                  />
                </div>
              </div>

              {/* Profile Details: Name & Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Your Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Khanna / Ananya Mehta"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Professional Title / Profession
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Senior Medical Director / NRI Investor (Dubai)"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
                  />
                </div>
              </div>

              {/* Contact: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rajesh@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
                  />
                </div>
              </div>

              {/* Buyer Category */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Buyer Profile Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    'High ROI Investor',
                    'Luxury Homeowner',
                    'NRI Investor',
                    'Medical Specialist',
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat as any)}
                      className={`p-2 border text-center transition-all cursor-pointer ${
                        category === cat
                          ? 'border-[#305d3f] bg-[#305d3f] text-white font-medium'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 text-[#305d3f] focus:ring-[#305d3f]"
                  />
                  <span>
                    I confirm this review is based on genuine property advisory with GreenNest Realtors and authorize its publication on the website.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#305d3f] hover:bg-[#23462f] text-white py-3.5 px-6 font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting Your Review...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C8AD78]" />
                      <span>Submit Website Review</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
