import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, MessageCircle, Phone, Clock, ShieldCheck } from 'lucide-react';
import { PROJECTS, AGENT_RERA_NUMBER, AGENT_PHONE, AGENT_NAME } from '../../data/projects';
import { LeadSubmissionPayload, LeadSubmissionResult } from '../../types';

interface LeadFormProps {
  defaultProjectSlug?: string;
  defaultProjectName?: string;
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
  onCancel?: () => void;
  compact?: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  defaultProjectSlug = '',
  defaultProjectName = '',
  title = 'Request Project Details & Consultation',
  subtitle = `Direct consultation with ${AGENT_NAME}. UP-RERA Registered Agent: ${AGENT_RERA_NUMBER}.`,
  onSuccess,
  onCancel,
  compact = false,
}) => {
  const [formData, setFormData] = useState<LeadSubmissionPayload>({
    name: '',
    phone: '',
    email: '',
    projectSlug: defaultProjectSlug,
    projectName: defaultProjectName,
    timeline: '1 - 3 Months',
    budgetRange: '₹1.5 - ₹2.5 Cr',
    userCityCountry: 'Lucknow',
    preferredContactMethod: 'WhatsApp',
    requestedNextStep: 'Project Details & Pricing',
    notes: '',
    consentGiven: false,
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [result, setResult] = useState<LeadSubmissionResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setErrorMsg('Please enter a valid phone number (at least 8 digits).');
      return;
    }

    if (!formData.consentGiven) {
      setErrorMsg('Please check the consent box to proceed.');
      return;
    }

    setLoading(true);

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const payload: LeadSubmissionPayload = {
        ...formData,
        sourceUrl: window.location.href,
        utmSource: urlParams.get('utm_source') || undefined,
        utmMedium: urlParams.get('utm_medium') || undefined,
        utmCampaign: urlParams.get('utm_campaign') || undefined,
      };

      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data: LeadSubmissionResult = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Server encountered an issue submitting your enquiry.');
      }

      setResult(data);
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Network error or service unavailable.';
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppDirectLink = () => {
    const proj = formData.projectName || (PROJECTS.find(p => p.slug === formData.projectSlug)?.displayName) || 'Curated Lucknow Properties';
    const text = encodeURIComponent(
      `Hello ${AGENT_NAME} (GreenNest Realtors), I am ${formData.name}. I would like to request details for ${proj}. Preferred Next Step: ${formData.requestedNextStep}.`
    );
    return `https://wa.me/919235621921?text=${text}`;
  };

  if (result) {
    return (
      <div className="bg-white p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-[#305d3f] flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-[#305d3f]">
              Enquiry Acknowledged
            </h4>
            <p className="text-sm text-slate-800 leading-relaxed">
              {result.message}
            </p>
          </div>
        </div>

        {result.status === 'QUEUED_LOCALLY_PENDING_CREDENTIALS' && (
          <div className="bg-slate-50 p-4 text-xs text-slate-700 border-l-2 border-[#305d3f] space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-[#305d3f]">
              <Clock className="w-3.5 h-3.5" />
              <span>Direct Advisor Queue Active</span>
            </div>
            <p>
              Your contact request is queued for advisor {AGENT_NAME} ({AGENT_PHONE}). Agent RERA: <strong className="font-mono text-slate-900">{AGENT_RERA_NUMBER}</strong>.
            </p>
          </div>
        )}

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href={result.whatsAppDirectUrl || getWhatsAppDirectLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#305d3f] hover:bg-[#23462f] text-white text-sm font-medium py-2.5 px-4 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#C8AD78]" />
            <span>Connect on WhatsApp Now</span>
          </a>
          <a
            href={`tel:${AGENT_PHONE.replace(/\s+/g, '')}`}
            className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-800 hover:text-[#305d3f] hover:border-[#305d3f] text-sm font-medium py-2.5 px-4 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call {AGENT_PHONE}</span>
          </a>
          {onCancel && (
            <button
              onClick={onCancel}
              className="inline-flex items-center justify-center border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-medium py-2.5 px-4 transition-colors cursor-pointer"
            >
              Exit
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white ${compact ? 'p-4 sm:p-6' : 'p-6 sm:p-8 border border-slate-200 shadow-sm'}`}>
      <div className={`${compact ? 'mb-4 space-y-1' : 'mb-6 space-y-1.5'}`}>
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 w-fit px-2.5 py-0.5 border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
          <span>Agent RERA: {AGENT_RERA_NUMBER}</span>
        </div>

        <h3 className={`${compact ? 'font-serif text-lg sm:text-xl font-bold text-[#305d3f] pt-0.5' : 'font-serif text-xl sm:text-2xl font-bold text-[#305d3f] pt-1'}`}>
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          {subtitle}
        </p>
      </div>

      {errorMsg && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website_hp">Leave this field blank</label>
          <input
            id="website_hp"
            type="text"
            name="website_hp"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
            />
          </div>
        </div>

        {/* Email & Current City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Email Address <span className="text-xs font-normal lowercase text-slate-400">(optional)</span>
            </label>
            <input
              type="email"
              placeholder="e.g. rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Your Current City / Country
            </label>
            <input
              type="text"
              placeholder="e.g. Lucknow / Dubai, UAE"
              value={formData.userCityCountry}
              onChange={(e) => setFormData({ ...formData, userCityCountry: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
            />
          </div>
        </div>

        {/* Project Selection & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Preferred Project
            </label>
            <select
              value={formData.projectSlug}
              onChange={(e) => {
                const slug = e.target.value;
                const proj = PROJECTS.find((p) => p.slug === slug);
                setFormData({
                  ...formData,
                  projectSlug: slug,
                  projectName: proj ? proj.displayName : 'General Consultation',
                });
              }}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
            >
              <option value="">General Lucknow Property Consultation</option>
              {PROJECTS.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.displayName} ({p.localityHub})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Budget Band
            </label>
            <select
              value={formData.budgetRange}
              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
            >
              <option value="Under ₹1.5 Cr">Under ₹1.50 Crore</option>
              <option value="₹1.5 - ₹2.5 Cr">₹1.50 – ₹2.50 Crore</option>
              <option value="₹2.5 - ₹4 Cr">₹2.50 – ₹4.00 Crore</option>
              <option value="₹4 Cr+">₹4.00 Crore & Above</option>
              <option value="Commercial Enquiry">Commercial / Office Space</option>
            </select>
          </div>
        </div>

        {/* Next step & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Desired Next Step
            </label>
            <select
              value={formData.requestedNextStep}
              onChange={(e) => setFormData({ ...formData, requestedNextStep: e.target.value as any })}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
            >
              <option value="Project Details & Pricing">Project Details & Pricing Sheet</option>
              <option value="Schedule Private Site Visit">Schedule a Private Site Visit</option>
              <option value="Arrange Virtual Consultation">Arrange 1-on-1 Virtual Consultation</option>
              <option value="Request Brochure">Request Sanctioned Brochure & Plans</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
              Purchase Timeline
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
            >
              <option value="Immediately (< 30 days)">Immediately (Within 30 Days)</option>
              <option value="1 - 3 Months">1 to 3 Months</option>
              <option value="3 - 6 Months">3 to 6 Months</option>
              <option value="Exploring Options">Exploring & Researching</option>
            </select>
          </div>
        </div>

        {/* Preferred contact channel */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Preferred Contact Channel
          </label>
          <div className="flex items-center gap-4 text-xs font-medium text-slate-800">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="WhatsApp"
                checked={formData.preferredContactMethod === 'WhatsApp'}
                onChange={() => setFormData({ ...formData, preferredContactMethod: 'WhatsApp' })}
                className="text-[#305d3f] focus:ring-[#305d3f]"
              />
              <span>WhatsApp</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="Phone Call"
                checked={formData.preferredContactMethod === 'Phone Call'}
                onChange={() => setFormData({ ...formData, preferredContactMethod: 'Phone Call' })}
                className="text-[#305d3f] focus:ring-[#305d3f]"
              />
              <span>Phone Call</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="Email"
                checked={formData.preferredContactMethod === 'Email'}
                onChange={() => setFormData({ ...formData, preferredContactMethod: 'Email' })}
                className="text-[#305d3f] focus:ring-[#305d3f]"
              />
              <span>Email</span>
            </label>
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.consentGiven}
              onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
              className="mt-0.5 rounded-none text-[#305d3f] focus:ring-[#305d3f] border-slate-300"
            />
            <span>
              I consent to GreenNest Realtors (Agent RERA: {AGENT_RERA_NUMBER}) contacting me with verified project details in accordance with the{' '}
              <a href="/privacy-policy" className="underline text-[#305d3f]">
                Privacy Policy
              </a>
              . No spam or third-party marketing distribution.
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col-reverse sm:flex-row items-center gap-2.5">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="w-full sm:w-auto px-5 py-3 border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 font-medium text-xs sm:text-sm transition-colors cursor-pointer text-center"
            >
              Cancel & Exit
            </button>
          )}
          <button
            type="submit"
            disabled={loading}
            className="flex-1 w-full bg-[#305d3f] hover:bg-[#23462f] text-white py-3 px-6 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <span>Recording Enquiry...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#C8AD78]" />
                <span>Submit Consultation Request</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
