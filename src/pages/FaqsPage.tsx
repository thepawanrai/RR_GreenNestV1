import React, { useState, useMemo } from 'react';
import { FAQS } from '../data/faqs';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ChevronDown, Search, HelpCircle, MessageCircle, ShieldCheck } from 'lucide-react';
import { AGENT_RERA_NUMBER, AGENT_NAME, AGENT_PHONE, WHATSAPP_PHONE_NUMBER } from '../data/projects';

interface FaqsPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    'All',
    'Advisory & GreenNest Model',
    'RERA & Compliance',
    'Pricing & Availability',
    'NRI & Remote Buyers',
    'Site Visits & Next Steps',
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchCat = selectedCategory === 'All' || faq.category === selectedCategory;
      const matchSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-white">
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold flex-wrap">
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Agent RERA: {AGENT_RERA_NUMBER}</span>
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Transparency & Advisory Knowledge</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#305d3f] leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-light">
          Clear, factual answers regarding our curated portfolio model, UP-RERA statutory checks, direct developer pricing, and NRI property coordination.
        </p>
      </div>

      {/* Filter and Search (Polar White) */}
      <div className="bg-slate-50 border border-slate-200 p-4 sm:p-6 space-y-4 shadow-sm">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. RERA, brokerage, NRI, site visit)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 text-xs pl-10 pr-4 py-2.5 text-slate-800 focus:outline-none focus:border-[#305d3f]"
          />
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-medium px-3 py-1.5 transition-colors focus:outline-none ${
                selectedCategory === cat
                  ? 'bg-[#305d3f] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white border border-slate-200 shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#9E8043] font-semibold block">
                      {faq.category}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-semibold text-[#305d3f]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C8AD78] flex-shrink-0 transition-transform ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center bg-slate-50 border border-slate-200 text-xs text-slate-500">
            No matching questions found for "{searchQuery}". Connect directly with {AGENT_NAME} for answers.
          </div>
        )}
      </div>

      {/* Still Have Questions Box */}
      <div className="bg-[#305d3f] text-white p-8 border border-[#23462f] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif text-xl font-bold text-[#C8AD78]">
            Have a Specific Project Question?
          </h3>
          <p className="text-xs text-slate-200">
            Speak directly with advisor {AGENT_NAME} ({AGENT_PHONE}) · Agent RERA: {AGENT_RERA_NUMBER}.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="bg-[#C8AD78] hover:bg-[#DFCDA6] text-[#23462f] text-xs font-semibold uppercase tracking-wider py-3 px-5 transition-colors shadow-sm"
          >
            Ask an Advisor
          </button>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
              'Hello GreenNest, I have a question regarding curated property projects in Lucknow (including Shalimar OneWorld, KSMB The Royal Retreat, and EMAAR Elite Oasis).'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C8AD78] text-[#C8AD78] text-xs font-semibold uppercase tracking-wider py-3 px-4 transition-colors flex items-center gap-1.5 hover:bg-white/5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
