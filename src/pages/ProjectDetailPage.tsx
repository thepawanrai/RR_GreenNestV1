import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS, AGENT_RERA_NUMBER, AGENT_PHONE, AGENT_NAME } from '../data/projects';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LeadForm } from '../components/common/LeadForm';
import { ProjectCard } from '../components/common/ProjectCard';
import { 
  ShieldCheck, 
  MapPin, 
  Building2, 
  Calendar, 
  ExternalLink, 
  CheckCircle2, 
  ChevronDown, 
  Phone, 
  MessageCircle,
  HelpCircle,
  Layers,
  Sparkles,
  TreePine,
  AlertTriangle
} from 'lucide-react';

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string>(project.imageHero);

  const relatedProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="space-y-16 py-6 bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Curated Projects', path: '/projects' },
            { label: project.displayName },
          ]}
          onNavigate={onNavigate}
        />
      </div>

      {/* 1. HERO SECTION (Polar White Theme) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative bg-slate-100 aspect-[16/10] lg:aspect-auto min-h-[360px] lg:min-h-[500px]">
              <img
                src={selectedGalleryImg}
                alt={`${project.displayName} exterior view in ${project.location}`}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/images/projects/shalimar-oneworld-township.jpg') {
                    target.src = '/images/projects/shalimar-oneworld-township.jpg';
                  }
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
              
              {/* Category tag */}
              <div className="absolute top-4 left-4 bg-[#305d3f] text-white text-xs font-semibold px-3 py-1.5 uppercase tracking-wider">
                {project.propertyType}
              </div>

              {/* Mobile overlay */}
              <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white space-y-1">
                <p className="font-serif text-2xl font-bold">{project.displayName}</p>
                <p className="text-xs text-white/90">{project.tagline}</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Developer & Subtitle */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium flex-wrap">
                  <span className="text-[#305d3f] font-semibold">{project.developer}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{project.developerRelationship}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <a
                    href="http://shalimarcorp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-600 hover:text-[#305d3f] inline-flex items-center gap-0.5 underline"
                  >
                    <span>shalimarcorp.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f] leading-tight">
                  {project.displayName}
                </h1>

                <p className="text-sm text-[#9E8043] font-medium italic">
                  "{project.tagline}"
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {project.summary}
                </p>

                {/* Location with Pin */}
                <div className="flex items-start gap-2 text-xs text-slate-700 pt-1">
                  <MapPin className="w-4 h-4 text-[#305d3f] flex-shrink-0 mt-0.5" />
                  <span>{project.location}</span>
                </div>

                {/* Agent & Project RERA Strip */}
                <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 text-[11px] text-emerald-900 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      <span>UP-RERA Agent: {AGENT_RERA_NUMBER}</span>
                    </span>
                    <span className="font-medium text-slate-600">Advisor: {AGENT_NAME}</span>
                  </div>
                  {project.reraNumber && (
                    <div className="text-slate-700">
                      Project RERA: <strong className="font-mono text-slate-900">{project.reraNumber}</strong>
                    </div>
                  )}
                </div>

                {/* Pricing Box */}
                <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block">
                    Starting Price Benchmark
                  </span>
                  <div className="font-serif text-2xl font-bold text-[#305d3f]">
                    {project.startingPrice || 'Pricing on Consultation'}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {project.priceNote}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onOpenConsultation(project.slug, project.displayName)}
                  className="w-full bg-[#305d3f] hover:bg-[#23462f] text-white text-sm font-medium py-3.5 px-6 transition-colors shadow-sm text-center"
                >
                  Request Current Price & Availability
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/919235621921?text=${encodeURIComponent(
                      `Hello ${AGENT_NAME}, I would like to schedule a site visit for ${project.displayName} (Agent RERA: ${AGENT_RERA_NUMBER}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 border border-[#305d3f] text-[#305d3f] hover:bg-[#305d3f]/5 text-xs font-semibold py-2.5 px-3 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${AGENT_PHONE.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-1.5 border border-slate-300 text-slate-700 hover:text-[#305d3f] text-xs font-semibold py-2.5 px-3 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Advisor</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Mini-Gallery Bar */}
          {project.gallery.length > 0 && (
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center gap-3 overflow-x-auto">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider mr-2 flex-shrink-0">
                Visual Perspectives:
              </span>
              <button
                onClick={() => setSelectedGalleryImg(project.imageHero)}
                className={`relative w-20 h-14 flex-shrink-0 border-2 overflow-hidden transition-all ${
                  selectedGalleryImg === project.imageHero ? 'border-[#305d3f] scale-105' : 'border-slate-200 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={project.imageHero} alt="Main facade" className="w-full h-full object-cover" />
              </button>
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedGalleryImg(img.url)}
                  className={`relative w-20 h-14 flex-shrink-0 border-2 overflow-hidden transition-all ${
                    selectedGalleryImg === img.url ? 'border-[#305d3f] scale-105' : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                  title={img.caption}
                >
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 2. VERIFIED SPECIFICATIONS & RERA QUICK FACTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
                Statutory & Architectural Details
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#305d3f]">
                Quick Facts & Verification Record
              </h2>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {project.reraNumber && project.reraVerificationUrl && (
                <a
                  href={project.reraVerificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#305d3f] bg-slate-50 border border-slate-300 px-4 py-2 hover:bg-slate-100 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-[#C8AD78]" />
                  <span>Verify on UP-RERA Portal</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              )}
              <a
                href="http://shalimarcorp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 px-4 py-2 hover:text-[#305d3f] transition-colors"
              >
                <span>shalimarcorp.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Grid of Verified Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Developer</span>
              <div className="text-sm font-semibold text-[#305d3f]">{project.developer}</div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Project UP-RERA Number</span>
              <div className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                <span className="font-mono text-xs">{project.reraNumber || 'Details under review'}</span>
                {project.verificationStatus === 'VERIFIED' && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                )}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">Agent UP-RERA Number</span>
              <div className="text-sm font-semibold text-emerald-800 font-mono">
                {AGENT_RERA_NUMBER}
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
              <span className="text-xs text-slate-500 font-medium">Official Developer Source</span>
              <div className="text-xs font-medium text-[#305d3f]">
                <a href="http://shalimarcorp.com/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <span>shalimarcorp.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Sanctioned Architectural Specs */}
          {project.specifications.length > 0 && (
            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Sanctioned Structural & Density Data
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {project.specifications.map((spec, i) => (
                  <div key={i} className="p-3 bg-slate-50 text-xs space-y-0.5 border border-slate-200">
                    <div className="text-slate-500 font-medium">{spec.label}</div>
                    <div className="font-semibold text-[#305d3f]">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. EDITORIAL OVERVIEW & ARCHITECTURAL HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            {/* Overview prose */}
            <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#305d3f]">
                Why Consider {project.displayName}?
              </h2>
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-light">
                {project.editorialOverview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Layouts & Configurations Math */}
            <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#305d3f]" />
                <h3 className="font-serif text-xl font-bold text-[#305d3f]">
                  Layouts & Measurement Transparency
                </h3>
              </div>
              <p className="text-xs text-slate-600">
                {project.areaDetails.measurementNote}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {project.areaDetails.carpetArea && (
                  <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-xs font-semibold text-[#305d3f] uppercase tracking-wider block">
                      RERA Carpet Area
                    </span>
                    <p className="text-xs text-slate-700">
                      {project.areaDetails.carpetArea}
                    </p>
                  </div>
                )}
                {project.areaDetails.superBuiltUpArea && (
                  <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-xs font-semibold text-[#305d3f] uppercase tracking-wider block">
                      Built-Up / Super Area Note
                    </span>
                    <p className="text-xs text-slate-700">
                      {project.areaDetails.superBuiltUpArea}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* SEPARATED AMENITIES: Project vs Township */}
            <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
                  Distinction of Amenities
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#305d3f]">
                  Dedicated Project vs. Shalimar OneWorld Township Amenities
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  We clearly separate amenities private to this specific development from wider 212+ acre master-planned township facilities (from official shalimarcorp.com disclosures).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project-Specific Amenities */}
                <div className="p-5 bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-[#305d3f] font-serif font-bold text-base">
                    <Sparkles className="w-4 h-4 text-[#C8AD78]" />
                    <span>Project-Specific Amenities</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {project.amenitiesProject.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Township Amenities */}
                <div className="p-5 bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center gap-2 text-[#305d3f] font-serif font-bold text-base">
                    <TreePine className="w-4 h-4 text-[#305d3f]" />
                    <span>Township / Community Infrastructure</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {project.amenitiesTownship.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8AD78] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Location & Landmark Context */}
            <div className="bg-white border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#305d3f]" />
                <h3 className="font-serif text-xl font-bold text-[#305d3f]">
                  Location & Arterial Connectivity
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Located in <strong>{project.location}</strong>. The micro-market represents Lucknow's premier growth corridor with high civic infrastructure quality, 6-lane expressways, and high-density commercial zones.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                <div className="p-3 bg-slate-50 border border-slate-200">
                  <strong className="text-[#305d3f] block">Amar Shaheed Path Corridor</strong>
                  Direct transit to Chaudhary Charan Singh International Airport (~15-20 min).
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200">
                  <strong className="text-[#305d3f] block">Entertainment & Retail</strong>
                  Minutes from Ekana Stadium, Phoenix Palassio Mall, and LuLu Mall corridor.
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200">
                  <strong className="text-[#305d3f] block">Healthcare Institutions</strong>
                  Proximity to Medanta Hospital Lucknow and SGPGI.
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200">
                  <strong className="text-[#305d3f] block">Premier Education</strong>
                  City Montessori School (inside OneWorld), DPS Shaheed Path.
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Lead Form Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <LeadForm
                defaultProjectSlug={project.slug}
                defaultProjectName={project.displayName}
                title={`Enquire: ${project.displayName}`}
                subtitle={`Connect directly with Athar Mansoor (Agent RERA: ${AGENT_RERA_NUMBER}).`}
              />

              <div className="p-5 bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 text-[#305d3f] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#C8AD78]" />
                  <span>Channel Partner Disclaimer</span>
                </div>
                <p>
                  GreenNest Realtors acts as a Authorised Channel Partner (Agent RERA: {AGENT_RERA_NUMBER}). Final pricing, availability, and legal terms are determined solely by the developer in the registered allotment letter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECT-SPECIFIC FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
            Common Inquiries
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#305d3f]">
            Frequently Asked Questions for {project.displayName}
          </h2>
        </div>

        <div className="space-y-3">
          {project.faq.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="bg-white border border-slate-200 shadow-sm">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base font-semibold text-[#305d3f]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C8AD78] transition-transform ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-light">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. RELATED SELECTED PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#305d3f] font-semibold">
              Curated Comparisons
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#305d3f]">
              Explore Other Selected Projects
            </h3>
          </div>
          <button
            onClick={() => onNavigate('/projects')}
            className="text-xs font-semibold text-[#305d3f] hover:underline"
          >
            View All Projects →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((rel) => (
            <ProjectCard
              key={rel.slug}
              project={rel}
              onViewProject={(s) => onNavigate(`/projects/${s}`)}
              onEnquireProject={(s, n) => onOpenConsultation(s, n)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
