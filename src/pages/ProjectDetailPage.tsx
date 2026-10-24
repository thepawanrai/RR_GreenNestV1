import React, { useState } from 'react';
import { Project } from '../types';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  ArrowLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Layers,
  HelpCircle
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LeadForm } from '../components/common/LeadForm';
import { AdvisorCard } from '../components/common/AdvisorCard';
import { AGENT_PHONE, AGENT_NAME, WHATSAPP_PHONE_NUMBER } from '../data/projects';

interface ProjectDetailPageProps {
  project: Project;
  onNavigate: (path: string) => void;
  onOpenConsultation: (projectSlug?: string, projectName?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string>(project.imageHero);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. CINEMATIC FULL-SCALE HERO BANNER (Matches user reference Screenshot) */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-end overflow-hidden bg-slate-900 text-white">
        {/* Full-bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={selectedGalleryImg}
            alt={`${project.displayName} luxury residences in ${project.location}`}
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== '/images/projects/shalimar-21-banner.jpg') {
                target.src = '/images/projects/shalimar-21-banner.jpg';
              }
            }}
            className="w-full h-full object-cover transition-all duration-700 ease-out"
          />
          {/* Measured multi-stop luxury scrim for maximum legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/40" />
        </div>

        {/* Top Floating Navigation Breadcrumbs */}
        <div className="absolute top-6 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/40 hover:bg-black/70 backdrop-blur-md text-white/90 hover:text-white text-xs font-medium border border-white/20 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#C8AD78]" />
              <span>Back to Curated Projects</span>
            </button>

            <span className="text-xs text-white/70 hidden sm:inline-flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2.5 py-1 border border-white/10 font-mono">
              <span>{project.localityHub}</span>
            </span>
          </div>
        </div>

        {/* Hero Content Overlaid on Full-Scale Image */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 pt-28">
          <div className="space-y-4 max-w-4xl">
            {/* Badges: Category & Project RERA */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="bg-[#305d3f] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider shadow-sm">
                {project.propertyType}
              </span>
              
              {project.reraNumber && (
                <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white border border-white/25 text-xs font-medium px-3 py-1 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8AD78]" />
                  <span>RERA: {project.reraNumber}</span>
                </span>
              )}
            </div>

            {/* Monumental Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              {project.officialName || project.displayName}
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-xl text-[#EAD8B2] font-medium leading-relaxed max-w-3xl">
              {project.tagline}
            </p>

            {/* Location Line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 pt-1">
              <MapPin className="w-4 h-4 text-[#C8AD78] shrink-0" />
              <span>{project.location}</span>
            </div>

            {/* Benchmark Price and Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/20">
              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-wider text-slate-300 font-semibold block">
                  Indicative Starting Benchmark
                </span>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C8AD78]">
                  {project.startingPrice || 'Pricing on Consultation'}
                </div>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => onOpenConsultation(project.slug, project.displayName)}
                  className="inline-flex items-center justify-center gap-2 bg-[#305d3f] hover:bg-[#23462f] text-white text-sm font-semibold py-3 px-6 transition-all shadow-md cursor-pointer border border-[#C8AD78]/30"
                >
                  <Calendar className="w-4 h-4 text-[#C8AD78]" />
                  <span>Enquire Now</span>
                </button>

                <a
                  href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
                    `Hello ${AGENT_NAME}, I would like to schedule a private consultation and site visit for ${project.displayName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-sm font-medium py-3 px-5 transition-all border border-white/30"
                >
                  <MessageCircle className="w-4 h-4 text-[#C8AD78]" />
                  <span>WhatsApp Details</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GALLERY THUMBNAIL SELECTOR BAR */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="bg-slate-100 border-b border-slate-200 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider shrink-0 pr-2">
                Views:
              </span>
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedGalleryImg(img.url)}
                  className={`relative shrink-0 h-16 w-24 overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedGalleryImg === img.url
                      ? 'border-[#305d3f] scale-102 shadow-sm'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  title={img.caption}
                >
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-black/75 text-[9px] text-white truncate px-1 py-0.5 text-center">
                    {img.tag}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. VERIFIED SPECIFICATIONS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold block">
                Official Regulatory Facts
              </span>
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Key Specifications & Legal Compliance
              </h2>
            </div>
            {project.reraVerificationUrl && (
              <a
                href={project.reraVerificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#305d3f] bg-emerald-50 border border-emerald-200 px-3.5 py-2 hover:bg-emerald-100 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Verify on Official UP-RERA Portal</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Developer</span>
              <div className="text-sm font-semibold text-[#305d3f]">{project.developer}</div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Project RERA Registration</span>
              <div className="text-sm font-semibold text-slate-900 font-mono flex items-center gap-1.5">
                <span>{project.reraNumber || 'Details under review'}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Current Status</span>
              <div className="text-sm font-semibold text-slate-800">{project.status}</div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Configurations Offered</span>
              <div className="text-sm font-semibold text-slate-800">
                {project.configurations.join(', ') || 'Consult advisor for details'}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Handover / Possession</span>
              <div className="text-sm font-semibold text-slate-800">
                {project.possessionInfo || 'Phased Handover'}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Location Corridor</span>
              <div className="text-sm font-semibold text-slate-800">{project.localityHub}</div>
            </div>
          </div>

          {/* Sanctioned Specifications Grid */}
          {project.specifications && project.specifications.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Architecture & Engineering Benchmarks
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.specifications.map((spec, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200/80 space-y-0.5">
                    <span className="text-[11px] text-slate-500 font-medium">{spec.label}</span>
                    <p className="text-xs font-semibold text-slate-900">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. EDITORIAL OVERVIEW & ARCHITECTURAL HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
                Curated Architecture & Planning
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Designed for Discerning Living
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
              {project.editorialOverview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Lifestyle Highlights */}
            {project.lifestyleHighlights && project.lifestyleHighlights.length > 0 && (
              <div className="pt-4 space-y-3">
                <h3 className="font-serif text-xl font-bold text-[#305d3f]">
                  Lifestyle & Spatial Advantages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {project.lifestyleHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#305d3f] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Advisory Highlight */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#305d3f]">
                Independent Buyer Advisory
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                GreenNest Realtors evaluates projects with strict due diligence: legal title verification, sanction layout checks, sunlight orientation, and construction milestone tracking.
              </p>
              <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f]" />
                  <span>Zero brokerage fee charged to homebuyers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f]" />
                  <span>Direct promoter inventory & pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f]" />
                  <span>Sanctioned floorplans & tower selection guidance</span>
                </div>
              </div>
              <button
                onClick={() => onOpenConsultation(project.slug, project.displayName)}
                className="w-full bg-[#305d3f] hover:bg-[#23462f] text-white text-xs font-semibold py-3 px-4 transition-colors text-center cursor-pointer shadow-sm"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AMENITIES BREAKDOWN */}
      <section className="bg-slate-50 border-y border-slate-200 py-12 my-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold block">
              Curated Amenities
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Wellness, Leisure & Community Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Private Amenities */}
            <div className="bg-white p-6 border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#305d3f]" />
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Exclusive In-Project Amenities
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {project.amenitiesProject.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C8AD78] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Township / Community Infrastructure */}
            <div className="bg-white p-6 border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#305d3f]" />
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Township & Location Advantages
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {project.amenitiesTownship.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#305d3f] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEAD CONSULTATION FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LeadForm
          defaultProjectSlug={project.slug}
          defaultProjectName={project.displayName}
          title={`Enquire About ${project.displayName}`}
          subtitle={`Schedule an in-person or virtual consultation with lead advisor Athar Mansoor.`}
          onSuccess={() => {}}
        />
      </section>

      {/* 7. ADVISOR PROFILE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <AdvisorCard
          onOpenConsultation={() => onOpenConsultation(project.slug, project.displayName)}
          onViewProjects={() => onNavigate('/projects')}
        />
      </section>
    </div>
  );
};
