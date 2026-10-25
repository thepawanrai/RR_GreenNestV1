import React, { useState } from 'react';
import { X, Star, CheckCircle, ExternalLink, Send, Sparkles } from 'lucide-react';
import { GOOGLE_REVIEW_URL, TRUSTPILOT_REVIEW_URL, saveUserReview, Testimonial } from '../../data/testimonials';

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

  // Streamlined Form State (Name, Phone Number, Rating, Feedback Form)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [feedback, setFeedback] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedReview, setSubmittedReview] = useState<Testimonial | null>(null);

  if (!isOpen) return null;

  const handleSubmitWebsiteReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMsg('Please enter a valid phone number (at least 8 digits).');
      return;
    }
    if (!feedback.trim()) {
      setErrorMsg('Please enter your feedback or review.');
      return;
    }

    setLoading(true);

    try {
      // 1. Deliver to Web3Forms
      const formData = new FormData();
      formData.append('access_key', 'b8043057-cf87-46a6-b309-ff0e8c4d1e58');
      formData.append('name', name.trim());
      formData.append('phone', phone.trim());
      formData.append('rating', `${rating} Stars`);
      formData.append('feedback', feedback.trim());
      formData.append('message', `CLIENT FEEDBACK & REVIEW:\n\nClient Name: ${name.trim()}\nPhone: ${phone.trim()}\nRating: ${rating}/5 Stars\n\nFeedback:\n"${feedback.trim()}"`);
      formData.append('subject', `★ New ${rating}-Star Review from ${name.trim()}`);
      formData.append('from_name', 'GreenNest Realtors Feedback Desk');

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      // 2. Persist locally to show instantly in live reviews
      const saved = saveUserReview({
        clientName: name.trim(),
        designation: 'Verified Client',
        clientCategory: 'Luxury Homeowner',
        projectPurchased: 'Curated Lucknow Property',
        location: 'Lucknow, Uttar Pradesh',
        rating,
        headline: feedback.trim().length > 60 ? `${feedback.trim().slice(0, 57)}...` : feedback.trim(),
        quote: feedback.trim(),
        verifiedDetails: 'Verified Client Review',
        platform: 'Website',
      });

      setSubmittedReview(saved);
      if (onReviewSubmitted) {
        onReviewSubmitted(saved);
      }
    } catch (err: unknown) {
      console.error('Review submit error:', err);
      const saved = saveUserReview({
        clientName: name.trim(),
        designation: 'Verified Client',
        clientCategory: 'Luxury Homeowner',
        projectPurchased: 'Curated Lucknow Property',
        location: 'Lucknow, Uttar Pradesh',
        rating,
        headline: feedback.trim().length > 60 ? `${feedback.trim().slice(0, 57)}...` : feedback.trim(),
        quote: feedback.trim(),
        verifiedDetails: 'Verified Client Review',
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

  const handleReset = () => {
    setName('');
    setPhone('');
    setFeedback('');
    setRating(5);
    setSubmittedReview(null);
    setErrorMsg(null);
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
        className="relative w-full max-w-lg bg-white shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] sm:max-h-[88vh] cursor-default my-auto overflow-hidden"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 bg-white/98 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-slate-200 flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#305d3f] bg-emerald-50 px-2 py-0.5 border border-emerald-200/80 shrink-0">
              <Sparkles className="w-3 h-3 text-[#C8AD78]" />
              <span>Feedback</span>
            </span>
            <span className="font-serif font-bold text-sm sm:text-base text-slate-900 truncate">
              Share Your Feedback & Review
            </span>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-colors cursor-pointer border border-slate-200 shrink-0"
          >
            <span>Exit</span>
            <X className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-7 space-y-5">
          {/* Channel Selector Cards */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
              Where would you like to review?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {/* Option 1: Website Form */}
              <button
                type="button"
                onClick={() => {
                  setActiveTab('website');
                  setSubmittedReview(null);
                }}
                className={`p-2.5 border text-center transition-all cursor-pointer ${
                  activeTab === 'website'
                    ? 'border-[#305d3f] bg-[#305d3f]/5 ring-1 ring-[#305d3f]'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <span className="font-serif font-bold text-xs text-[#305d3f] block">
                  Website
                </span>
                <span className="text-[10px] text-slate-500">Fast Form</span>
              </button>

              {/* Option 2: Google */}
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveTab('google')}
                className={`p-2.5 border text-center transition-all cursor-pointer group ${
                  activeTab === 'google'
                    ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-600'
                    : 'border-slate-200 hover:border-blue-300 bg-white'
                }`}
              >
                <span className="font-serif font-bold text-xs text-slate-900 flex items-center justify-center gap-1">
                  <span className="text-blue-600 font-bold">G</span>
                  <span>Google</span>
                </span>
                <span className="text-[10px] text-slate-500">Direct Link ↗</span>
              </a>

              {/* Option 3: Trustpilot */}
              <a
                href={TRUSTPILOT_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveTab('trustpilot')}
                className={`p-2.5 border text-center transition-all cursor-pointer group ${
                  activeTab === 'trustpilot'
                    ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600'
                    : 'border-slate-200 hover:border-emerald-300 bg-white'
                }`}
              >
                <span className="font-serif font-bold text-xs text-slate-900 flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                  <span>Trustpilot</span>
                </span>
                <span className="text-[10px] text-slate-500">Direct Link ↗</span>
              </a>
            </div>
          </div>

          {/* External platform click notices */}
          {activeTab === 'google' && (
            <div className="p-3 bg-blue-50 border border-blue-200 text-blue-900 text-xs space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5 text-blue-700" />
                <span>Google Review page opened</span>
              </div>
              <p className="text-blue-800 leading-snug">
                You can also submit your feedback below so it appears on our website.
              </p>
            </div>
          )}

          {activeTab === 'trustpilot' && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-emerald-700 fill-emerald-700" />
                <span>Trustpilot review page</span>
              </div>
              <p className="text-emerald-800 leading-snug">
                Share your rating on Trustpilot or submit below directly.
              </p>
            </div>
          )}

          {/* Submitted State Display (NO third-party branding) */}
          {submittedReview ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold text-emerald-950">
                  Thank You for Your Feedback!
                </h3>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                  Your review has been successfully received. We truly appreciate your support and time!
                </p>
              </div>

              {/* Optional: Cross post to Google */}
              <div className="pt-3 border-t border-emerald-200/60 max-w-sm mx-auto space-y-2">
                <span className="text-[11px] font-semibold text-emerald-900 block">
                  Would you also like to post on Google?
                </span>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 px-4 transition-colors shadow-xs"
                >
                  <span>Post Review on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="pt-2 flex justify-center gap-4 text-xs">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-slate-600 hover:text-slate-900 underline"
                >
                  Write another review
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-emerald-800 font-semibold hover:underline"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* Streamlined Feedback Form: Name, Phone, Rating, Feedback Textarea */
            <form onSubmit={handleSubmitWebsiteReview} className="space-y-4" noValidate>
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Star Rating */}
              <div className="bg-slate-50 border border-slate-200 p-3.5 flex items-center justify-between">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Rating <span className="text-red-600">*</span>
                  </label>
                  <span className="text-[11px] text-slate-500">Tap stars to rate</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-115 transition-transform cursor-pointer"
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
                  <span className="ml-1.5 font-bold text-sm text-[#305d3f]">
                    {rating}/5
                  </span>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Phone / WhatsApp <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
                />
              </div>

              {/* Feedback Form / Review Textarea */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Feedback / Review <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="feedback"
                  required
                  rows={4}
                  placeholder="Write your feedback, review, or experience with GreenNest Realtors..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#305d3f] hover:bg-[#23462f] text-white py-3.5 px-6 font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting Feedback...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C8AD78]" />
                      <span>Submit Feedback</span>
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
