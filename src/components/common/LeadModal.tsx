import React from 'react';
import { X } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectSlug?: string;
  defaultProjectName?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  defaultProjectSlug,
  defaultProjectName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] shadow-2xl border border-[#C8AD78]/40 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#242824] hover:text-[#305d3f] transition-colors bg-[#F7F5EF]/80"
          aria-label="Close Consultation Form"
        >
          <X className="w-5 h-5" />
        </button>

        <LeadForm
          defaultProjectSlug={defaultProjectSlug}
          defaultProjectName={defaultProjectName}
          compact={true}
          title={defaultProjectName ? `Enquire for ${defaultProjectName}` : 'Book a Private Consultation'}
          subtitle="Direct advisory with Athar Mansoor (10 Yrs Real Estate Experience). Transparent project facts, zero brokerage."
          onSuccess={() => {}}
        />
      </div>
    </div>
  );
};
