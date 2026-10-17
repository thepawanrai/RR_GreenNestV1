import React from 'react';
import { Project } from '../../types';
import { ArrowUpRight, MapPin, Building2, ShieldCheck, HelpCircle } from 'lucide-react';
import { AGENT_RERA_NUMBER } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  onViewProject: (slug: string) => void;
  onEnquireProject: (slug: string, name: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onViewProject,
  onEnquireProject,
}) => {
  return (
    <article className="group bg-white border border-slate-200 hover:border-[#305d3f]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_8px_24px_rgba(48,93,63,0.12)]">
      {/* Visual Header */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={project.imageHero}
          alt={`${project.displayName} luxury residences in ${project.location}`}
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== '/images/projects/shalimar-oneworld-township.jpg') {
              target.src = '/images/projects/shalimar-oneworld-township.jpg';
            }
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Subtle category tag */}
        <div className="absolute top-3 left-3 bg-[#305d3f]/90 backdrop-blur-sm text-white text-[11px] font-medium tracking-wider uppercase px-2.5 py-1">
          {project.propertyType}
        </div>

        {project.startingPrice && (
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#305d3f] font-semibold text-xs px-3 py-1 shadow-sm border border-slate-200">
            Starting {project.startingPrice}
          </div>
        )}
      </div>

      {/* Body Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Typographic metadata kicker (Zero-pill discipline) */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="text-[#305d3f] font-semibold">{project.developer}</span>
            <span aria-hidden="true">·</span>
            <span>{project.localityHub}</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#305d3f] group-hover:text-[#23462f] transition-colors leading-snug">
            {project.displayName}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Key specifications preview */}
        <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Building2 className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0" />
            <span className="font-medium text-slate-900">Configurations:</span>
            <span>{project.configurations.join(', ') || 'Consult advisor for layouts'}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#305d3f] flex-shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>

          {/* RERA Row */}
          <div className="flex items-center justify-between pt-1 text-[11px]">
            {project.reraNumber && project.reraNumber !== 'UP-RERA Details Under Review' ? (
              <span className="inline-flex items-center gap-1 text-[#305d3f] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8AD78]" />
                <span>RERA: {project.reraNumber}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-slate-500">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>RERA: Under Verification</span>
              </span>
            )}
            <span className="text-[10px] text-slate-400 font-mono">Agent: {AGENT_RERA_NUMBER}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex items-center gap-2.5">
          <button
            onClick={() => onViewProject(project.slug)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#305d3f] hover:bg-[#23462f] text-white text-xs font-medium py-2.5 px-4 transition-colors shadow-sm cursor-pointer"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C8AD78]" />
          </button>
          <button
            onClick={() => onEnquireProject(project.slug, project.displayName)}
            className="inline-flex items-center justify-center border border-slate-300 text-slate-700 hover:text-[#305d3f] hover:border-[#305d3f] text-xs font-medium py-2.5 px-3.5 transition-colors cursor-pointer"
          >
            Request Details
          </button>
        </div>
      </div>
    </article>
  );
};
