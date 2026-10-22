import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LeadForm } from '../components/common/LeadForm';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { AGENT_RERA_NUMBER, AGENT_NAME, AGENT_PHONE, AGENT_EMAIL, OFFICE_ADDRESS } from '../data/projects';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-white">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold flex-wrap">
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Agent RERA: {AGENT_RERA_NUMBER}</span>
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Lucknow Real Estate Advisory</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#305d3f] leading-tight">
          Connect with GreenNest Realtors
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
          Whether you are exploring luxury riverfront residences in Shalimar OneWorld or seeking an objective consultation on Gomti Nagar Extension properties, our advisors are here to provide verified clarity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Details Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#305d3f]">
              Direct Contact Details
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <a
                href={`tel:${AGENT_PHONE.replace(/\s+/g, '')}`}
                className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 hover:border-[#305d3f] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                    Phone / Direct Line
                  </span>
                  <span className="font-semibold text-[#305d3f] text-base">{AGENT_PHONE}</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Mon – Sun, 9:00 AM – 8:00 PM IST</p>
                </div>
              </a>

              <a
                href={`https://wa.me/919235621921?text=${encodeURIComponent(
                  'Hello GreenNest Realtors, I would like to connect regarding Lucknow property consultation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 hover:border-[#305d3f] transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                    WhatsApp Advisory Desk
                  </span>
                  <span className="font-semibold text-emerald-800 text-base">{AGENT_PHONE}</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Instant response during business hours</p>
                </div>
              </a>

              <a
                href={`mailto:${AGENT_EMAIL}`}
                className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 hover:border-[#305d3f] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                    Official Email
                  </span>
                  <span className="font-semibold text-[#305d3f] break-all">{AGENT_EMAIL}</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Written enquiries & documentation reviews</p>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200">
                <MapPin className="w-5 h-5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                    Registered Office Address
                  </span>
                  <div className="font-semibold text-slate-900 leading-snug">
                    <p>FF 27 River View Arcade</p>
                    <p>Gomtinagar Extension</p>
                    <p>Lucknow (UP) 226010</p>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Specialized Focus: Shalimar OneWorld, Gomti Nagar Extension & Amar Shaheed Path
                  </p>
                </div>
              </div>
            </div>

            {/* Advisory Note */}
            <div className="pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-600 bg-emerald-50/60 p-4 border border-emerald-100">
              <span className="font-semibold text-[#305d3f] block">Boutique Real Estate Advisory</span>
              <p className="text-slate-600">
                Lead Advisor: {AGENT_NAME} (15 Years Dedicated Lucknow Real Estate Advisory).
              </p>
            </div>
          </div>
        </div>

        {/* Lead Form Column */}
        <div className="lg:col-span-7">
          <LeadForm
            title="Request a Private Consultation"
            subtitle="Share your preferred projects, budget band, and contact mode. We respond promptly with verified information."
          />
        </div>
      </div>
    </div>
  );
};
