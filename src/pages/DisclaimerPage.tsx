import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ShieldCheck, AlertTriangle, ExternalLink } from 'lucide-react';
import { AGENT_RERA_NUMBER, AGENT_NAME } from '../data/projects';

interface DisclaimerPageProps {
  onNavigate: (path: string) => void;
}

export const DisclaimerPage: React.FC<DisclaimerPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 bg-white">
      <Breadcrumbs items={[{ label: 'Disclaimer' }]} onNavigate={onNavigate} />

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold flex-wrap">
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Agent RERA: {AGENT_RERA_NUMBER}</span>
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Statutory Disclosures</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f]">
          Legal & Regulatory Disclaimer
        </h1>
        <p className="text-xs text-slate-500">
          GreenNest Realtors, Lucknow, Uttar Pradesh · Agent RERA: {AGENT_RERA_NUMBER} ({AGENT_NAME})
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
        {/* RERA Section */}
        <section className="bg-slate-50 border border-slate-200 p-6 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-[#305d3f] font-serif font-bold text-lg">
            <ShieldCheck className="w-5 h-5 text-[#C8AD78]" />
            <h2>1. UP-RERA Compliance & Agent Registration</h2>
          </div>
          <p>
            GreenNest Realtors operates strictly in alignment with the Real Estate (Regulation and Development) Act, 2016 (RERA) under Uttar Pradesh Real Estate Regulatory Authority (UP-RERA) Agent Registration Certificate <strong>{AGENT_RERA_NUMBER}</strong> (Athar Mansoor). We exclusively market projects that are registered with UP-RERA.
          </p>
          <p className="font-medium text-[#305d3f]">
            Important Regulatory Notice: RERA registration is a statutory consumer protection and transparency mechanism. It ensures that promoter filings, sanctioned layout plans, and escrow banking accounts are established under regulatory oversight. However, RERA registration does NOT constitute a financial guarantee of future property appreciation, rental yields, timely possession, or a risk-free investment.
          </p>
          <p>
            Buyers are strongly encouraged to independently verify all project registration records on the official government portal: <a href="https://www.up-rera.in" target="_blank" rel="noopener noreferrer" className="underline text-[#305d3f]">www.up-rera.in</a>.
          </p>
        </section>

        {/* Developer Relationship */}
        <section className="bg-slate-50 border border-slate-200 p-6 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-[#305d3f] font-serif font-bold text-lg">
            <ShieldCheck className="w-5 h-5 text-[#C8AD78]" />
            <h2>2. Developer Disclosures & Promoter Filings</h2>
          </div>
          <p>
            All project information, layouts, architectural renderings, and pricing benchmarks displayed on this website are derived from official promoter filings, sanction plans, brochures, and regulatory disclosures. We do not claim exclusive or sole marketing rights unless supported by a formal written agreement. The respective developer entities remain solely responsible for project construction, sanction compliances, structural warranties, and contractual possession milestones.
          </p>
        </section>

        {/* Pricing & Availability */}
        <section className="bg-slate-50 border border-slate-200 p-6 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-[#305d3f] font-serif font-bold text-lg">
            <AlertTriangle className="w-5 h-5 text-[#9E8043]" />
            <h2>3. Pricing, Area Dimensions & Availability</h2>
          </div>
          <p>
            All price quotations, configuration details, floor plans, and area measurements (carpet area, built-up area, and super area) displayed on this website are indicative benchmarks. Developer price revisions, floor rise charges, preferential location charges (PLC), applicable taxes (GST), and stamp duty charges are applicable.
          </p>
          <p>
            All final specifications, payment schedules, and inventory availability are subject to written confirmation in the formal allotment letter and Agreement for Sale issued by the developer.
          </p>
        </section>

        {/* Investment & Legal Advice */}
        <section className="bg-slate-50 border border-slate-200 p-6 space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-[#305d3f] font-serif font-bold text-lg">
            <AlertTriangle className="w-5 h-5 text-[#9E8043]" />
            <h2>4. No Financial, Legal, or Tax Advice</h2>
          </div>
          <p>
            Content provided on this website—including guides, blog posts, loan checklists, and FAQ answers—is provided for general informational and educational purposes only. It does not constitute individualized financial, investment, legal, tax, or FEMA advice. Homebuyers and investors should consult qualified chartered accountants, legal advocates, and financial planners before entering into binding real estate transactions.
          </p>
        </section>
      </div>
    </div>
  );
};
