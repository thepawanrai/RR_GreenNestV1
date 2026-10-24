import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
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
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Lock background body scroll while modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn cursor-pointer"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-consultation-title"
    >
      {/* Click outside hint banner on top for mobile/desktop accessibility */}
      <div className="sr-only">Click outside or press Escape to close</div>

      {/* Modal Card Content (stops click propagation so clicking inside doesn't close) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] sm:max-h-[88vh] cursor-default my-auto overflow-hidden"
      >
        {/* Pinned Sticky Header: Always visible regardless of form scrolling */}
        <div className="sticky top-0 z-30 bg-white/98 backdrop-blur-md px-4 sm:px-6 py-3 border-b border-slate-200 flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#305d3f] bg-emerald-50 px-2 py-0.5 border border-emerald-200/80 shrink-0">
              <Sparkles className="w-3 h-3 text-[#C8AD78]" />
              <span>Priority Advisory</span>
            </span>
            <span
              id="modal-consultation-title"
              className="font-serif font-bold text-sm sm:text-base text-slate-900 truncate"
            >
              {defaultProjectName ? defaultProjectName : 'Private Consultation'}
            </span>
          </div>

          {/* High-visibility Close / Exit Button */}
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-colors cursor-pointer shrink-0 border border-slate-200"
            aria-label="Close dialog"
            title="Close dialog (Esc or click outside)"
          >
            <span>Exit</span>
            <X className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          <LeadForm
            defaultProjectSlug={defaultProjectSlug}
            defaultProjectName={defaultProjectName}
            compact={true}
            title={defaultProjectName ? `Enquire for ${defaultProjectName}` : 'Book a Private Consultation'}
            subtitle="Direct advisory with Athar Mansoor (15 Yrs Real Estate Experience). Transparent project facts, zero brokerage."
            onSuccess={() => {}}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
};
