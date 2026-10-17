import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS, AGENT_RERA_NUMBER, AGENT_NAME, AGENT_PHONE, AGENT_EMAIL, OFFICE_ADDRESS } from '../../data/projects';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1d3826] text-white pt-16 pb-12 border-t border-[#305d3f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Advisor Bio */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('/')}
              className="focus:outline-none text-left cursor-pointer transition-opacity hover:opacity-90 block"
              aria-label="GreenNest Realtors Home"
            >
              <BrandLogo size="md" theme="dark" />
            </button>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              GreenNest Realtors is a boutique real estate advisory and channel-partner business based in Lucknow. We deliberately focus on a small, curated portfolio of RERA-registered developments rather than an overwhelming open listings directory.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300 bg-[#305d3f]/30 p-4 border border-[#305d3f]/50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8AD78] flex-shrink-0" />
                <span className="font-semibold text-white">UP-RERA Registered Agent:</span>
                <span className="font-mono text-[#C8AD78]">{AGENT_RERA_NUMBER}</span>
              </div>
              <div className="flex items-center gap-2 pl-6 text-slate-300">
                <span>Lead Advisor: {AGENT_NAME} (10 Years Advisory Experience)</span>
              </div>
              <div className="flex items-center gap-2 pl-6 text-slate-300">
                <span>Developer Relationship: Authorised Channel Partner</span>
              </div>
              <div className="flex items-center gap-2 pl-6 pt-1">
                <a
                  href="http://shalimarcorp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C8AD78] hover:underline flex items-center gap-1"
                >
                  <span>Official Developer Source: shalimarcorp.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Curated Projects */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide">
              Selected Projects
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {PROJECTS.map((project) => (
                <li key={project.slug}>
                  <button
                    onClick={() => onNavigate(`/projects/${project.slug}`)}
                    className="hover:text-[#C8AD78] transition-colors text-left flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>{project.displayName}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Navigation & Guidance */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide">
              Advisory & Guides
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-[#C8AD78] transition-colors"
                >
                  About GreenNest & Athar
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('/');
                    setTimeout(() => {
                      document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                    }, 150);
                  }}
                  className="hover:text-[#C8AD78] transition-colors"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/nri-corner')}
                  className="hover:text-[#C8AD78] transition-colors"
                >
                  NRI Property Advisory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/buyers-guide')}
                  className="hover:text-[#C8AD78] transition-colors"
                >
                  Buyer’s Verification Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/home-loan-assistance')}
                  className="hover:text-[#C8AD78] transition-colors"
                >
                  Home Loan Guidance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/insights')}
                  className="hover:text-[#C8AD78] transition-colors"
                >
                  Market Insights & Frameworks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/faqs')}
                  className="hover:text-[#C8AD78] transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <a
                href={`tel:${AGENT_PHONE.replace(/\s+/g, '')}`}
                className="flex items-start gap-2.5 hover:text-[#C8AD78] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                <span>{AGENT_PHONE}</span>
              </a>

              <a
                href={`mailto:${AGENT_EMAIL}`}
                className="flex items-start gap-2.5 hover:text-[#C8AD78] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                <span className="break-all">{AGENT_EMAIL}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-slate-300">
                  <span className="font-semibold text-white block">Office Address:</span>
                  <span>{OFFICE_ADDRESS}</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                <span>Direct WhatsApp Consultation:</span>
                <a
                  href="https://wa.me/919235621921?text=Hello%20GreenNest%20Realtors,%20I%20am%20enquiring%20about%20Shalimar%20OneWorld%20properties."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-1.5 text-[#C8AD78] hover:text-[#DFCDA6]"
                >
                  <span>Chat directly with Athar Mansoor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/contact')}
                className="w-full text-center bg-[#C8AD78] text-[#23462f] hover:bg-[#DFCDA6] text-xs font-semibold uppercase tracking-wider py-2.5 px-4 transition-colors shadow-sm cursor-pointer"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Disclaimers Section */}
        <div className="pt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong className="text-white">Statutory UP-RERA Compliance & Consumer Notice:</strong> GreenNest Realtors operates under Uttar Pradesh Real Estate Regulatory Authority (UP-RERA) Agent Registration Certificate <strong>{AGENT_RERA_NUMBER}</strong> (Athar Mansoor). We exclusively market RERA-registered projects in Uttar Pradesh. RERA registration is a statutory consumer transparency mechanism; it does not constitute a guarantee of future capital returns, appreciation, rental yields, or risk-free transactions.
          </p>
          <p>
            <strong className="text-white">Developer Relationship & Pricing Disclaimer:</strong> GreenNest Realtors acts as an Authorised Channel Partner for Shalimar Corp. All project information, layouts, architectural renderings, and pricing benchmarks are derived from official developer sources (<a href="http://shalimarcorp.com/" target="_blank" rel="noopener noreferrer" className="underline text-slate-300">shalimarcorp.com</a>) and regulatory filings. All final prices, taxes, availability, and legal terms are subject to written confirmation in the formal allotment letter.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/10 gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <div>
                © {new Date().getFullYear()} GreenNest Realtors. Agent RERA: {AGENT_RERA_NUMBER}. All rights reserved.
              </div>
              <div className="text-[11px] text-slate-400">
                Developed by{' '}
                <a
                  href="https://www.realtyexperts.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8AD78] hover:text-[#DFCDA6] font-medium underline underline-offset-2 transition-colors"
                >
                  Realty Experts
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <button
                onClick={() => onNavigate('/privacy-policy')}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={() => onNavigate('/terms-and-conditions')}
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </button>
              <span>·</span>
              <button
                onClick={() => onNavigate('/disclaimer')}
                className="hover:text-white transition-colors"
              >
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
