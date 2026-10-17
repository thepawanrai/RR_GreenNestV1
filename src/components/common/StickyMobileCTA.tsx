import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { AGENT_PHONE } from '../../data/projects';

interface StickyMobileCTAProps {
  onOpenConsultation: () => void;
  projectSlug?: string;
  projectName?: string;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({
  onOpenConsultation,
  projectName,
}) => {
  const getWhatsAppMessage = () => {
    const topic = projectName || 'Lucknow curated properties';
    return encodeURIComponent(
      `Hello GreenNest Realtors, I am interested in ${topic}. Please share verified details and pricing.`
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-lg safe-bottom">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-center">
        <a
          href={`tel:${AGENT_PHONE.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 text-slate-800 hover:text-[#305d3f] transition-colors bg-slate-50 border border-slate-200"
          aria-label="Call GreenNest Realtors"
        >
          <Phone className="w-4 h-4 text-[#305d3f] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Call Now</span>
        </a>

        <a
          href={`https://wa.me/919235621921?text=${getWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 text-[#305d3f] hover:text-[#23462f] transition-colors bg-slate-50 border border-slate-200"
          aria-label="WhatsApp GreenNest Realtors"
        >
          <MessageCircle className="w-4 h-4 text-[#305d3f] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#305d3f] text-white hover:bg-[#23462f] transition-colors shadow-sm"
          aria-label="Open Consultation Form"
        >
          <Calendar className="w-4 h-4 text-[#C8AD78] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Consult</span>
        </button>
      </div>
    </div>
  );
};
