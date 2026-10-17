import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Building, FileCheck, HelpCircle, CheckCircle2, ShieldAlert, ArrowRight, ShieldCheck } from 'lucide-react';
import { AGENT_RERA_NUMBER, AGENT_NAME } from '../data/projects';

interface HomeLoanPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const HomeLoanPage: React.FC<HomeLoanPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 bg-white">
      <Breadcrumbs items={[{ label: 'Home Loan Assistance' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold flex-wrap">
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Agent RERA: {AGENT_RERA_NUMBER}</span>
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Financing Liaison & Banking Coordination</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#305d3f] leading-tight">
          Home Loan Guidance & Bank Liaison
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
          We help coordinate pre-approved project documentation and bridge communication between homebuyers and major nationalized and private banking partners in Lucknow.
        </p>
      </div>

      {/* Strict Compliance Disclaimer Box */}
      <div className="bg-slate-50 border-l-4 border-[#305d3f] p-6 text-xs text-slate-700 space-y-1.5 border border-slate-200">
        <div className="flex items-center gap-2 font-semibold text-[#305d3f]">
          <ShieldAlert className="w-4 h-4 text-[#9E8043]" />
          <span>Statutory Compliance & Facilitation Disclaimer</span>
        </div>
        <p>
          GreenNest Realtors operates under UP-RERA Agent Registration <strong>{AGENT_RERA_NUMBER}</strong> ({AGENT_NAME}). We are a real estate advisory and channel-partner firm; we are not a financial institution, bank, or NBFC. We assist clients by sharing project APF (Approved Project Financial) records and connecting applicants with authorized banking representatives. <strong>We do not guarantee loan approvals, eligibility ceilings, or specific interest rates.</strong> Final credit underwriting decisions rest solely with the respective lending bank.
        </p>
      </div>

      {/* Bank Partner Tie-Ups (Polar White) */}
      <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="font-serif text-2xl font-bold text-[#305d3f]">
          Pre-Approved Project Documentation
        </h2>
        <p className="text-xs text-slate-600">
          Curated developments such as Shalimar 21, Marbella, and Valencia Towers hold APF approvals across premier institutional lenders, accelerating legal and technical verification:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-center text-xs font-semibold text-[#305d3f]">
          <div className="p-4 bg-slate-50 border border-slate-200">State Bank of India (SBI)</div>
          <div className="p-4 bg-slate-50 border border-slate-200">HDFC Bank</div>
          <div className="p-4 bg-slate-50 border border-slate-200">ICICI Bank</div>
          <div className="p-4 bg-slate-50 border border-slate-200">Bank of Baroda</div>
        </div>
      </div>

      {/* Documentation Checklist */}
      <div className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#305d3f]">
          Standard Documentation Checklist
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
          {/* Salaried */}
          <div className="bg-white border border-slate-200 p-6 space-y-3 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-[#305d3f]">
              Salaried Professionals
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Last 3 months' salary slips with official seal</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Form 16 & ITR returns for previous 2 financial years</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Last 6 months' salary bank statements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>PAN card & Aadhaar KYC identity verification</span>
              </li>
            </ul>
          </div>

          {/* Self-Employed */}
          <div className="bg-white border border-slate-200 p-6 space-y-3 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-[#305d3f]">
              Self-Employed / Business Owners
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Audited balance sheet & P&L statements (3 years)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>ITR filings with computation of income (3 years)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Last 12 months' primary current account bank statements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Business incorporation proof / GST registration</span>
              </li>
            </ul>
          </div>

          {/* NRI */}
          <div className="bg-white border border-slate-200 p-6 space-y-3 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-[#305d3f]">
              Non-Resident Indians (NRIs)
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Valid passport & employment visa copies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Work permit & overseas employment contract</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Last 6 months' NRE/NRO & overseas bank statements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <span>Power of Attorney (PoA) if applicant is abroad</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Construction Linked Plan (CLP) Workflow */}
      <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="font-serif text-2xl font-bold text-[#305d3f]">
          Understanding the Construction-Linked Disbursement Flow
        </h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          Most under-construction properties are purchased under a Construction-Linked Plan (CLP). In this structure, the bank does not release funds all at once. Instead, funds are disbursed in tranches following the developer’s completion of verified structural milestones.
        </p>

        <div className="pt-4">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-[#305d3f] hover:bg-[#23462f] text-white text-xs font-semibold uppercase tracking-wider py-3 px-6 transition-colors shadow-sm"
          >
            <span>Request Bank APF Code & Coordination Support</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C8AD78]" />
          </button>
        </div>
      </div>
    </div>
  );
};
