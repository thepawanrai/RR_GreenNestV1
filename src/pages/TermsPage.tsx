import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AlertCircle } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} onNavigate={onNavigate} />

      <div className="space-y-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f]">
          Terms & Conditions of Website Use
        </h1>
        <p className="text-xs text-[#242824]/60">
          Last updated: 16 October 2026 · GreenNest Realtors, Lucknow, Uttar Pradesh
        </p>
      </div>

      <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
        <span>
          <strong>Draft for Legal Review:</strong> Starter terms of website use and enquiry submission. Subject to formal legal confirmation.
        </span>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-[#242824]/85 leading-relaxed font-light">
        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#305d3f]">1. Nature of the Service</h2>
          <p>
            GreenNest Realtors provides real estate channel-partner advisory and consulting services for select properties in Lucknow. Use of this website does not constitute an offer of sale or an allotment of real estate. Any purchase or allotment is governed strictly by the separate legal Agreement for Sale executed between the homebuyer and the respective developer entity.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#305d3f]">2. Accuracy of Information & Price Fluctuations</h2>
          <p>
            While GreenNest strives to keep all information updated and checked against official UP-RERA filings and developer communications, real estate prices, unit availability, and specifications are inherently dynamic. <strong>All pricing figures stated on this website represent indicative starting benchmarks only.</strong> Confirmed pricing and allotment availability are subject to written confirmation by the promoter.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#305d3f]">3. Intellectual Property & Visual Rights</h2>
          <p>
            Project names, trademarks, and logos (including "Shalimar Corp.", "Shalimar OneWorld", and individual project marks) belong to their respective proprietors. Renderings and illustrative photographs are utilized for representative advisory purposes under channel-partner marketing conventions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-[#305d3f]">4. Governing Law & Jurisdiction</h2>
          <p>
            These terms and any disputes arising out of the use of this website shall be governed by the laws of India, with exclusive jurisdiction in the competent courts of Lucknow, Uttar Pradesh.
          </p>
        </section>
      </div>
    </div>
  );
};
