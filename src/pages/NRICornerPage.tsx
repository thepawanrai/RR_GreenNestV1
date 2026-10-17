import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LeadForm } from '../components/common/LeadForm';
import { AdvisorCard } from '../components/common/AdvisorCard';
import { Globe2, ShieldCheck, CheckCircle2, FileText, ArrowRight, Building2 } from 'lucide-react';
import { AGENT_RERA_NUMBER, AGENT_NAME, AGENT_PHONE } from '../data/projects';

interface NRICornerPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (projectSlug?: string, projectName?: string) => void;
}

export const NRICornerPage: React.FC<NRICornerPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-white">
      <Breadcrumbs items={[{ label: 'NRI Corner' }]} onNavigate={onNavigate} />

      {/* Hero */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold flex-wrap">
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
            <Globe2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Dedicated Overseas Buyer Desk</span>
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>FEMA & UP-RERA Compliant</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#305d3f] leading-tight">
          NRI Property Advisory for Lucknow
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
          Whether you are based in Dubai, London, New York, or Singapore, GreenNest Realtors provides overseas Indians with end-to-end transparency, virtual walkthroughs, and verified developer transactions.
        </p>
      </div>

      {/* Advisory Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-50 border border-slate-200 p-6 space-y-3 shadow-xs">
          <div className="w-10 h-10 bg-[#305d3f] text-[#C8AD78] flex items-center justify-center font-bold">1</div>
          <h3 className="font-serif text-xl font-bold text-[#305d3f]">Video Walkthroughs & Progress Audits</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Unbiased high-definition video inspections of construction milestones, tower floorplates, and views across Shalimar OneWorld and Gomti Nagar Extension.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-6 space-y-3 shadow-xs">
          <div className="w-10 h-10 bg-[#305d3f] text-[#C8AD78] flex items-center justify-center font-bold">2</div>
          <h3 className="font-serif text-xl font-bold text-[#305d3f]">FEMA & Banking Coordination</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Guidance on NRE/NRO inward remittances, FIRC documentation, RBI property acquisition limits, and capital repatriation rules for frictionless transactions.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-6 space-y-3 shadow-xs">
          <div className="w-10 h-10 bg-[#305d3f] text-[#C8AD78] flex items-center justify-center font-bold">3</div>
          <h3 className="font-serif text-xl font-bold text-[#305d3f]">Direct Developer Pricing</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            As an Authorised Channel Partner for Shalimar Corp., our overseas clients receive direct developer rates, transparent payment schedules, and zero brokerage fees.
          </p>
        </div>
      </div>

      {/* Lead Form & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#305d3f]">
            Frequently Addressed NRI Inquiries
          </h2>
          <div className="space-y-4 text-xs text-slate-700">
            <div className="p-4 bg-white border border-slate-200 space-y-1">
              <strong className="text-[#305d3f] block text-sm">Can NRIs purchase residential property in Lucknow without RBI approval?</strong>
              <p className="text-slate-600">Yes. Under the Foreign Exchange Management Act (FEMA), NRIs and OCIs can acquire residential and commercial properties in India freely. Agricultural land is excluded.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 space-y-1">
              <strong className="text-[#305d3f] block text-sm">How is money remitted for property purchases?</strong>
              <p className="text-slate-600">Payments must be routed through standard banking channels via NRE or NRO accounts. We assist you in coordinating with leading Indian banks (HDFC, ICICI, SBI) for smooth transactions.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 space-y-1">
              <strong className="text-[#305d3f] block text-sm">Can I appoint a Power of Attorney (POA)?</strong>
              <p className="text-slate-600">Yes. An overseas buyer can execute a POA attested by the Indian Embassy or Consulate in their country of residence for local documentation and registry.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <LeadForm
            title="Book an Overseas NRI Consultation"
            subtitle="Connect with Athar Mansoor via WhatsApp or video call to explore curated options."
          />
        </div>
      </div>

      <AdvisorCard onBookConsultation={() => onOpenConsultation()} />
    </div>
  );
};
