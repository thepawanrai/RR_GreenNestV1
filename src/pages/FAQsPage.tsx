import React, { useState } from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FAQS } from '../data/faqs';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { AGENT_PHONE, AGENT_NAME, AGENT_RERA_NUMBER } from '../data/projects';

interface FAQsPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const FAQsPage: React.FC<FAQsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-white">
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} onNavigate={onNavigate} />

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
          <HelpCircle className="w-4 h-4 text-[#305d3f]" />
          <span>Transparent Information</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#305d3f]">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-slate-600 font-light leading-relaxed">
          Clear, direct answers regarding project verification, developer channel partnerships, UP-RERA guidelines, and purchasing terms.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white border border-slate-200 transition-colors shadow-xs"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-serif text-base sm:text-lg font-semibold text-[#305d3f]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C8AD78] flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-light border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-[#305d3f]">Have a question not listed here?</h3>
          <p className="text-xs text-slate-500">
            Speak directly with Athar Mansoor (UP-RERA Agent: {AGENT_RERA_NUMBER}).
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="bg-[#305d3f] text-white text-xs font-medium py-2.5 px-4 hover:bg-[#23462f] transition-colors"
          >
            Ask a Question
          </button>
          <a
            href="https://wa.me/919235621921"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#305d3f] text-[#305d3f] text-xs font-medium py-2.5 px-4 hover:bg-[#305d3f]/5 transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
