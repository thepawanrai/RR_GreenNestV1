import React, { useState } from 'react';
import { ShieldCheck, Phone, MessageCircle, Calendar, CheckCircle2, Award } from 'lucide-react';
import { AGENT_RERA_NUMBER, AGENT_NAME, AGENT_PHONE } from '../../data/projects';

interface AdvisorCardProps {
  onBookConsultation: () => void;
}

export const AdvisorCard: React.FC<AdvisorCardProps> = ({ onBookConsultation }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white border border-slate-200 p-6 sm:p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Portrait photo of Athar Mansoor */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-sm overflow-hidden flex-shrink-0 border-2 border-[#C8AD78] shadow-md bg-[#305d3f] relative group">
            {!imgError ? (
              <img
                src="/images/advisor/athar-mansoor.png"
                alt="Athar Mansoor - Founder & Lead Advisor, GreenNest Realtors"
                className="w-full h-full object-cover object-center"
                onError={() => setImgError(true)}
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center font-serif text-2xl font-bold text-[#C8AD78]">
                <span>AM</span>
                <span className="text-[9px] uppercase tracking-wider font-sans font-normal text-white/80">Advisor</span>
              </div>
            )}
            <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-xs text-[9px] text-[#C8AD78] text-center py-0.5 font-medium tracking-wide">
              Athar Mansoor
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#305d3f]">
                {AGENT_NAME}
              </h3>
              <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>UP-RERA Agent: {AGENT_RERA_NUMBER}</span>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-1">
              <p className="font-medium text-slate-800 flex items-center gap-1.5">
                <span>Senior Real Estate Advisor · 10 Years Dedicated Lucknow Advisory</span>
              </p>
              <p>
                Developer Standing: <span className="text-[#305d3f] font-semibold">Authorised Channel Partner (Shalimar Corp.)</span>
              </p>
              <div className="inline-flex items-center gap-1.5 text-amber-800 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-xs font-medium text-[11px]">
                <Award className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>Awarded by Khalid Masood (MD, Shalimar Corp Ltd) at Shalimar Excellence Summit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <button
            onClick={onBookConsultation}
            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-[#305d3f] hover:bg-[#23462f] text-white text-sm font-medium py-3 px-5 transition-colors shadow-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#C8AD78]" />
            <span>Book Consultation</span>
          </button>
          
          <a
            href={`https://wa.me/919235621921?text=${encodeURIComponent(
              `Hello ${AGENT_NAME}, I would like to consult with you regarding property opportunities in Lucknow.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#305d3f] text-[#305d3f] hover:bg-[#305d3f]/5 text-sm font-medium py-3 px-4 transition-colors"
            aria-label={`Direct WhatsApp message to ${AGENT_NAME}`}
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${AGENT_PHONE.replace(/\s+/g, '')}`}
            className="inline-flex items-center justify-center p-3 border border-slate-200 text-slate-700 hover:text-[#305d3f] hover:border-[#305d3f] transition-colors"
            aria-label={`Call ${AGENT_NAME} at ${AGENT_PHONE}`}
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Advisory Commitments */}
      <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#305d3f] flex-shrink-0 mt-0.5" />
          <span><strong>Objective Project Filtering:</strong> Curated options aligned with your budget and lifestyle. No high-pressure tactics.</span>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#305d3f] flex-shrink-0 mt-0.5" />
          <span><strong>Direct Developer Pricing:</strong> Complete transparency on all-inclusive costs with zero buyer brokerage fees.</span>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#305d3f] flex-shrink-0 mt-0.5" />
          <span><strong>Verified RERA Compliance:</strong> Registered under UP-RERA Agent ID <strong className="font-mono text-slate-800">{AGENT_RERA_NUMBER}</strong>.</span>
        </div>
      </div>
    </div>
  );
};
