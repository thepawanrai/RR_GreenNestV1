import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, MessageCircle, Phone, Clock, ShieldCheck } from 'lucide-react';
import { PROJECTS, AGENT_PHONE, AGENT_NAME, WHATSAPP_PHONE_NUMBER } from '../../data/projects';
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
  subtitle = `Direct consultation with ${AGENT_NAME}. Independent property advisory.`,
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

    const name = formData.name.trim();
    const email = (formData.email || '').trim();
    const phone = formData.phone.trim();
    const notes = (formData.notes || '').trim();
    const projectName = formData.projectName || 'General Lucknow Property Inquiry';
    const budgetRange = formData.budgetRange || '';
    const timeline = formData.timeline || '';
    const userCityCountry = formData.userCityCountry || 'Not Specified';
    const preferredContactMethod = formData.preferredContactMethod || 'WhatsApp';
    const requestedNextStep = formData.requestedNextStep || 'Project Details & Pricing';

    if (!name) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!phone || phone.length < 8) {
      setErrorMsg('Please enter a valid phone number (at least 8 digits).');
      return;
    }

    if (!notes) {
      setErrorMsg('Please enter your message or enquiry requirements.');
      return;
    }

    if (!formData.consentGiven) {
      setErrorMsg('Please check the consent box to proceed.');
      return;
    }

    setLoading(true);

    try {
      // Direct Web3Forms Submission Integration
      const web3FormData = new FormData();
      web3FormData.append('access_key', 'b8043057-cf87-46a6-b309-ff0e8c4d1e58');
      web3FormData.append('name', name);
      web3FormData.append('email', email);
      web3FormData.append('phone', phone);
      web3FormData.append('project', projectName);
      web3FormData.append('budget', budgetRange);
      web3FormData.append('timeline', timeline);
      web3FormData.append('city_country', userCityCountry);
      web3FormData.append('preferred_contact_method', preferredContactMethod);
      web3FormData.append('requested_next_step', requestedNextStep);

      const fullMessage = `${notes}\n\n---\nProject Interested: ${projectName}\nBudget: ${budgetRange}\nTimeline: ${timeline}\nPreferred Channel: ${preferredContactMethod}\nRequested Next Step: ${requestedNextStep}\nCity/Country: ${userCityCountry}\nSource URL: ${window.location.href}`;

      web3FormData.append('message', fullMessage);
      web3FormData.append('subject', `New Lead: ${name} - ${projectName}`);
      web3FormData.append('from_name', 'GreenNest Realtors');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: web3FormData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Unable to submit enquiry. Please try again or connect via direct WhatsApp.');
      }

      setResult({
        success: true,
        message: 'Your enquiry has been successfully delivered to Athar Mansoor via Web3Forms. We will connect with verified project details shortly.',
        leadId: data.id || `W3F-${Date.now()}`,
        status: 'DELIVERED_CRM',
        timestamp: new Date().toISOString(),
        whatsAppDirectUrl: getWhatsAppDirectLink(),
      });
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Network error or service unavailable.';
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppDirectLink = () => {
    const proj =
      formData.projectName ||
      PROJECTS.find((p) => p.slug === formData.projectSlug)?.displayName ||
      'curated luxury projects in Lucknow (Shalimar OneWorld, KSMB The Royal Retreat, EMAAR Elite Oasis)';
    const text = encodeURIComponent(
      `Hello ${AGENT_NAME} (GreenNest Realtors), I am ${formData.name}. I would like to request details for ${proj}. Preferred Next Step: ${formData.requestedNextStep}.`
    );
    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${text}`;
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
              Your contact request is queued for advisor {AGENT_NAME} ({AGENT_PHONE}).
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

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Web3Forms Access Key and Hidden Parameters */}
        <input type="hidden" name="access_key" value="b8043057-cf87-46a6-b309-ff0e8c4d1e58" />
        <input type="hidden" name="from_name" value="GreenNest Realtors" />
        <input
          type="hidden"
          name="subject"
          value={`New Lead: ${formData.name || 'Website Visitor'} - ${formData.projectName || 'Curated Lucknow Luxury Properties'}`}
        />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

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
              name="name"
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
              name="phone"
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
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
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

        {/* Message / Specific Requirements Textarea */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Message / Requirements <span className="text-red-600">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={3}
            placeholder="Share any specific requirements (e.g. preferred 3/4 BHK layout, floor level, possession target, budget preference, or site visit request)..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 focus:border-[#305d3f] focus:bg-white text-sm px-3.5 py-2.5 text-slate-900 transition-colors"
          />
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
              I consent to GreenNest Realtors contacting me with verified project details in accordance with the{' '}
              <a href="/privacy-policy" className="underline text-[#305d3f]">
                Privacy Policy
              </a>
              . No spam or third-party marketing distribution.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#305d3f] hover:bg-[#23462f] text-white py-3.5 px-6 font-medium text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50 cursor-pointer"
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
