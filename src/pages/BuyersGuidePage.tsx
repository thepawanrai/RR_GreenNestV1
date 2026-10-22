import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { AGENT_RERA_NUMBER, AGENT_NAME } from '../data/projects';

interface BuyersGuidePageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const BuyersGuidePage: React.FC<BuyersGuidePageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 bg-white">
      <Breadcrumbs items={[{ label: 'Buyer’s Guide' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold flex-wrap">
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>UP-RERA Buyer Due Diligence</span>
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Consumer Education & Legal Protections</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#305d3f] leading-tight">
          The Lucknow Homebuyer’s Due Diligence Guide
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
          A plain-language framework designed to protect your hard-earned capital, demystify area definitions, and prevent costly oversights during the property acquisition process.
        </p>
      </div>

      {/* Pillar 1: Understanding Area Math (Polar White) */}
      <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
            Fundamental Concept 01
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#305d3f]">
            Carpet Area vs. Built-Up Area vs. Super Area
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Why you must compare projects on RERA Carpet Area rather than marketed "super areas".
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
          <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
            <strong className="text-[#305d3f] font-sans text-sm block">1. RERA Carpet Area</strong>
            <p>
              The net usable floor space inside your apartment walls where you can literally lay down a carpet. This is the statutory legal benchmark under RERA.
            </p>
            <span className="text-[11px] text-emerald-800 font-semibold block">Always ask for this figure first.</span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
            <strong className="text-[#305d3f] font-sans text-sm block">2. Built-Up Area</strong>
            <p>
              Includes the carpet area plus the thickness of internal and external walls, plus exclusive private balcony spaces.
            </p>
            <span className="text-[11px] text-slate-500 block">Typically 10-15% larger than carpet area.</span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
            <strong className="text-[#305d3f] font-sans text-sm block">3. Super Built-Up Area</strong>
            <p>
              A developer-defined figure that adds proportionate common spaces (lift lobbies, staircases, generator rooms, security booths).
            </p>
            <span className="text-[11px] text-amber-800 font-semibold block">Subject to loading (25% to 45%).</span>
          </div>
        </div>
      </div>

      {/* Pillar 2: Cost Breakdown */}
      <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
            Fundamental Concept 02
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#305d3f]">
            Demystifying the "All-Inclusive" Cost Sheet
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            The base selling price (BSP) is only the starting point. Ensure your advisor prepares a full calculation including:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-700">
          <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-semibold text-[#305d3f]">Floor Rise Charges (FRC)</span>
            <p>Typically ₹25 - ₹75 per sq ft per floor for higher panoramic towers.</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-semibold text-[#305d3f]">Preferential Location (PLC)</span>
            <p>Park-facing, riverfront, or corner layout premiums (typically 5% - 10%).</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-semibold text-[#305d3f]">Statutory GST</span>
            <p>5% GST on standard non-affordable under-construction residential apartments.</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-semibold text-[#305d3f]">Stamp Duty & Registration</span>
            <p>7% stamp duty in Uttar Pradesh plus 1% registration fees upon handover.</p>
          </div>
        </div>
      </div>

      {/* Pillar 3: Due Diligence Checklist */}
      <div className="bg-[#305d3f] text-white p-8 sm:p-10 border border-[#23462f] space-y-6 shadow-sm">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#C8AD78] font-semibold">
            Actionable Checklist
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Seven Pre-Token Verification Steps
          </h2>
          <p className="text-xs text-slate-200 font-light">
            Essential due diligence verifications before signing booking sheets or transferring token deposits:
          </p>
        </div>

        <div className="space-y-3.5 text-xs text-slate-200">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
            <div>
              <strong>1. Verify Builder Identity & Project Details on RERA Website:</strong>{' '}
              <span>
                Validate the promoter's registered company identity, sanctioned tower configurations, quarterly progress filings, and valid registration dates directly on the official UP-RERA portal (
                <a
                  href="https://www.up-rera.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8AD78] underline hover:text-[#DFCDA6]"
                >
                  https://www.up-rera.in
                </a>
                ).
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
            <div>
              <strong>2. Verify Title of Project Land:</strong>{' '}
              <span>
                Confirm clear, marketable land title, verify the chain of ownership deeds, check the non-encumbrance certificate (EC), and ensure lawful non-agricultural / group housing land-use conversion without ongoing litigation.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
            <div>
              <strong>3. Review Sanctioned Floor Plans:</strong>{' '}
              <span>
                Ensure the exact unit layout, carpet dimensions, and tower placement conform strictly to authority-approved blueprints, not merely artistic marketing renderings.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
            <div>
              <strong>4. Demand Written Allotment Terms:</strong>{' '}
              <span>
                Reconfirm transfer charges, possession delay compensation clauses, club membership charges, and car parking allocation terms in writing prior to payment.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
            <div>
              <strong>5. Check Bank Approvals (APF Codes):</strong>{' '}
              <span>
                Confirm Approved Project Financial (APF) codes with premier lenders like SBI, HDFC, or ICICI to confirm independent banking due diligence on title and sanctions.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
            <div>
              <strong>6. Inspect Escrow Account Details:</strong>{' '}
              <span>
                Ensure all booking and milestone transfers are executed strictly in favor of the project's designated UP-RERA registered escrow bank account.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
            <div>
              <strong>7. Cross-Check Carpet Area & Loading Ratio:</strong>{' '}
              <span>
                Always compute cost on the basis of statutory RERA net usable carpet area rather than ambiguous super built-up claims to evaluate true per-square-foot valuation.
              </span>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={onOpenConsultation}
            className="bg-[#C8AD78] hover:bg-[#DFCDA6] text-[#23462f] text-xs font-semibold uppercase tracking-wider py-3 px-6 transition-colors shadow-sm cursor-pointer"
          >
            Review Curated Projects with Advisor {AGENT_NAME}
          </button>
        </div>
      </div>
    </div>
  );
};
