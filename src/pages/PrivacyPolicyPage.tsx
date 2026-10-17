import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AlertCircle } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} onNavigate={onNavigate} />

      <div className="space-y-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#242824]/60">
          Last updated: 16 October 2026 · Business: GreenNest Realtors, Lucknow, Uttar Pradesh
        </p>
      </div>

      {/* Review Banner */}
      <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
        <span>
          <strong>Draft for Legal Review:</strong> This starter Privacy Policy reflects the actual form fields and data practices currently implemented on this website. Final wording should be reviewed by legal counsel prior to formal production publication.
        </span>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-[#242824]/85 leading-relaxed font-light">
        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#305d3f]">1. Information We Collect</h2>
          <p>
            When you submit a consultation request or property enquiry on GreenNest Realtors, we collect the personal information you explicitly provide:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full Name</li>
            <li>Phone number / WhatsApp contact number</li>
            <li>Email address (where provided)</li>
            <li>City and Country of current residence</li>
            <li>Property configuration preferences, budget band, and purchase timeline</li>
            <li>Referral sources and UTM tracking parameters (e.g., campaign tags)</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#305d3f]">2. How We Use Your Information</h2>
          <p>
            We process your personal information strictly for legitimate real estate advisory purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contacting you via WhatsApp, phone call, or email to discuss your property requirements.</li>
            <li>Sharing verified brochures, floor plans, and price sheets for requested Shalimar Corp. developments.</li>
            <li>Coordinating scheduled site visits or virtual walkthroughs with advisor Athar Mansoor.</li>
            <li>Facilitating developer allotment and bank financing liaison upon your express request.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#305d3f]">3. Third-Party Sharing and Data Sale</h2>
          <p>
            <strong>We do not sell, rent, or trade your personal information to third-party telemarketers or unrelated advertisers.</strong> Your information is only shared with the project developer (Shalimar Corp.) or designated banking partners when you formally proceed with an allotment application or loan pre-approval.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#305d3f]">4. Data Retention & Your Rights</h2>
          <p>
            We retain your enquiry information only for as long as necessary to serve your property search. You have the right to request deletion or modification of your contact details at any time by emailing us at <a href="mailto:greennestlko@gmail.com" className="text-[#305d3f] font-medium underline">greennestlko@gmail.com</a> or messaging +91 92356 21921.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#305d3f]">5. Cookies & Analytics</h2>
          <p>
            Our website uses standard technical cookies for session maintenance and anonymous traffic metrics. We do not employ intrusive cross-site behavioral tracking networks.
          </p>
        </section>
      </div>
    </div>
  );
};
