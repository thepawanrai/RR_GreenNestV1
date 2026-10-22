import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LeadForm } from '../components/common/LeadForm';
import { Globe2, Video, FileText, CheckCircle2, ShieldAlert, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { AGENT_RERA_NUMBER, AGENT_NAME } from '../data/projects';

interface NriCornerPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const NriCornerPage: React.FC<NriCornerPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 bg-white">
      <Breadcrumbs items={[{ label: 'NRI & Remote Buyer Corner' }]} onNavigate={onNavigate} />

      {/* Hero */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold flex-wrap">
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
            <Globe2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Dedicated Overseas Buyer Desk</span>
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Overseas & Out-of-City Advisory Desk</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#305d3f] leading-tight">
          Buying Real Estate in Lucknow from Abroad
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
          A structured, remote coordination framework for Non-Resident Indians (NRIs) and out-of-city professionals looking to secure premier property in Lucknow without unnecessary travel.
        </p>
      </div>

      {/* Remote Coordination Pillars (Polar White) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-[#305d3f] text-[#C8AD78] flex items-center justify-center font-bold">
            <Video className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#305d3f]">
            1. Virtual Inspections
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We schedule private live video sessions from the construction site at Shalimar OneWorld, demonstrating exact tower views, approach roads, and actual finishes.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-[#305d3f] text-[#C8AD78] flex items-center justify-center font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#305d3f]">
            2. Documentation Coordination
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We guide you through the developer’s digital application procedures, NRE/NRO payment receipts, and draft agreement verification before any funds are moved.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-[#305d3f] text-[#C8AD78] flex items-center justify-center font-bold">
            <Globe2 className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#305d3f]">
            3. Time Zone Flexibility
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Whether you reside in Dubai (GST), Riyadh (AST), London (GMT), or New York (EST), advisor {AGENT_NAME} coordinates consultations around your local schedule.
          </p>
        </div>
      </div>

      {/* What GreenNest Coordinates vs What Requires Licensed Professionals */}
      <div className="bg-slate-50 border border-slate-200 p-8 space-y-6 shadow-sm">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="font-serif text-2xl font-bold text-[#305d3f]">
            Clear Division of Responsibilities
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Understanding what GreenNest manages on the ground versus what requires licensed legal, tax, or banking advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#305d3f]">
              What GreenNest Directly Manages:
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>Project shortlisting based on verified UP-RERA registered inventory.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>Liaison with Shalimar Corp. sales leadership for official unit allotment.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>On-site video walkthroughs of construction progress and surrounding infrastructure.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>Courier coordination of formal physical documents where wet signatures are required.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#9E8043]">
              Consult Your Licensed Specialist For:
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-[#9E8043] flex-shrink-0 mt-0.5" />
                <span><strong>Tax & DTAA Structuring:</strong> Consult a qualified Chartered Accountant (CA) for capital gains and Double Tax Avoidance Treaties.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-[#9E8043] flex-shrink-0 mt-0.5" />
                <span><strong>Power of Attorney (PoA) Adjudication:</strong> Consult an Indian advocate for consular attestation and local sub-registrar stamping.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-[#9E8043] flex-shrink-0 mt-0.5" />
                <span><strong>FEMA Bank Repatriation:</strong> Work with your Authorized Dealer (AD) Category-I bank for Form 15CA/15CB remittances.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Practical FEMA & NRI Checklist */}
      <div className="space-y-4">
        <h3 className="font-serif text-2xl font-bold text-[#305d3f]">
          Questions to Discuss with Your Qualified Advisors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
          <div className="p-4 bg-white border border-slate-200 space-y-1 shadow-sm">
            <strong className="text-[#305d3f] block">1. NRE vs. NRO Account Routing</strong>
            Do you plan to repatriate rental yields or capital proceeds in future? Funds paid via NRE are fully repatriable; NRO accounts have an annual remittance cap of USD 1 Million under RBI Liberalised Remittance Scheme.
          </div>
          <div className="p-4 bg-white border border-slate-200 space-y-1 shadow-sm">
            <strong className="text-[#305d3f] block">2. General vs. Specific Power of Attorney</strong>
            Will a trusted local family member execute the final registry, or will you travel to Lucknow for the deed execution?
          </div>
          <div className="p-4 bg-white border border-slate-200 space-y-1 shadow-sm">
            <strong className="text-[#305d3f] block">3. TDS Compliance (Section 195)</strong>
            Under Indian tax laws, TDS on NRI property transactions must be evaluated carefully by a tax professional.
          </div>
          <div className="p-4 bg-white border border-slate-200 space-y-1 shadow-sm">
            <strong className="text-[#305d3f] block">4. Home Loan for NRIs</strong>
            Leading Indian banks offer NRI home loans up to 75-80% of property cost against overseas income proof.
          </div>
        </div>
      </div>

      {/* NRI Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#305d3f]">
            Schedule an NRI Virtual Consultation
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Fill out the consultation request with your overseas city and convenient time zone. {AGENT_NAME} will coordinate an agenda and video meeting link.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919235621921?text=Hello%20Athar,%20I%20am%20an%20NRI%20buyer%20requesting%20a%20virtual%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#305d3f] hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#305d3f]" />
              <span>Direct WhatsApp: +91 92356 21921</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <LeadForm
            title="Book NRI Remote Consultation"
            subtitle="Please include your country/city of residence so we can accommodate your time zone."
          />
        </div>
      </div>
    </div>
  );
};
