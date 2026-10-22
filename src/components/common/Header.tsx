import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { AGENT_RERA_NUMBER, AGENT_PHONE } from '../../data/projects';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: (projectSlug?: string, projectName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'NRI Corner', path: '/nri-corner' },
    { label: "Buyer's Guide", path: '/buyers-guide' },
    { label: 'Insights', path: '/insights' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNav = (path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      if (currentPath !== '/') {
        onNavigate('/');
        setTimeout(() => {
          const el = document.getElementById(path.replace('/#', ''));
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(path.replace('/#', ''));
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      {/* Top trust strip with prominent Agent RERA & Authorised Channel Partner */}
      <div className="bg-[#305d3f] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2 tracking-wide font-normal flex-wrap justify-center sm:justify-start">
            <span className="font-semibold text-[#C8AD78] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Agent RERA: {AGENT_RERA_NUMBER}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`tel:${AGENT_PHONE.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 text-white/95 hover:text-[#C8AD78] transition-colors"
              aria-label={`Call GreenNest Realtors at ${AGENT_PHONE}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C8AD78]" />
              <span>{AGENT_PHONE}</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={`https://wa.me/919235621921?text=${encodeURIComponent(
                'Hello GreenNest Realtors, I would like to enquire about curated luxury projects in Lucknow (such as Shalimar OneWorld, KSMB The Royal Retreat, and EMAAR Elite Oasis).'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#C8AD78] hover:text-[#DFCDA6] transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar (Polar White) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo without tagline */}
          <button
            onClick={() => handleNav('/')}
            className="flex items-center text-left focus:outline-none group text-inherit"
            aria-label="GreenNest Realtors Home"
          >
            <BrandLogo size="md" theme="light" showTagline={false} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/#testimonials'
                  ? false
                  : currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`text-sm font-medium transition-colors relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#305d3f] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#305d3f]'
                      : 'text-slate-600 hover:text-[#305d3f]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Consultation CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 bg-[#305d3f] hover:bg-[#23462f] text-white text-sm font-medium px-4 py-2.5 shadow-sm transition-all focus:outline-none cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#C8AD78]" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsultation()}
              className="sm:hidden text-xs bg-[#305d3f] text-white px-3 py-2 font-medium"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#305d3f] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/#testimonials'
                  ? false
                  : currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`text-left text-base py-2 border-b border-slate-100 ${
                    isActive ? 'text-[#305d3f] font-semibold' : 'text-slate-800 hover:text-[#305d3f]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full text-center bg-[#305d3f] text-white py-3 text-sm font-medium flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Book a Private Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#C8AD78]" />
            </button>

            <div className="p-3 bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-[#305d3f]">
                <ShieldCheck className="w-4 h-4 text-[#C8AD78]" />
                <span>Agent RERA: {AGENT_RERA_NUMBER}</span>
              </div>
              <p className="text-[11px] text-slate-600">Lead Advisor: Athar Mansoor (10 Yrs Experience)</p>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-slate-600">
              <a href={`tel:${AGENT_PHONE.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-[#305d3f]">
                <Phone className="w-3.5 h-3.5 text-[#305d3f]" />
                <span>{AGENT_PHONE}</span>
              </a>
              <a
                href={`https://wa.me/919235621921?text=${encodeURIComponent(
                  'Hello GreenNest Realtors, I would like to enquire about curated luxury projects in Lucknow (such as Shalimar OneWorld, KSMB The Royal Retreat, and EMAAR Elite Oasis).'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#305d3f] font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#305d3f]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
