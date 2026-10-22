import React, { useState, useMemo } from 'react';
import { PROJECTS, AGENT_RERA_NUMBER } from '../data/projects';
import { ProjectCard } from '../components/common/ProjectCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PropertyCategory } from '../types';
import { ShieldCheck, Filter, Search, HelpCircle, ExternalLink } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: (projectSlug?: string, projectName?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Luxury Apartments',
    'Private Enclaves & Villas',
    'Commercial & Corporate',
    'High-Rise Residences',
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.propertyType === selectedCategory;
      const matchesSearch =
        project.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.configurations.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-white">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Curated Projects' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold flex-wrap">
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Agent RERA: {AGENT_RERA_NUMBER}</span>
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Curated Lucknow Portfolio</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#305d3f] leading-tight">
          Curated Projects in Lucknow
        </h1>

        <p className="text-base text-slate-600 leading-relaxed font-light">
          GreenNest maintains a deliberately focused selection of prime residential and commercial developments from reputed developers like Shalimar Corp. (including the 212+ acre Shalimar OneWorld township). Every project listed below is subject to statutory UP-RERA verification.
        </p>
      </div>

      {/* Filter and Search Bar (Polar White) */}
      <div className="bg-slate-50 border border-slate-200 p-4 sm:p-6 space-y-4 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Functional Filter Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-slate-700 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-3 py-1.5 transition-colors focus:outline-none ${
                  selectedCategory === cat
                    ? 'bg-[#305d3f] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:text-[#305d3f] hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by project or locality..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 text-xs pl-9 pr-3 py-2 text-slate-800 focus:outline-none focus:border-[#305d3f]"
            />
          </div>
        </div>

        {/* Results count & compliance reminder */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
          <span>Showing {filteredProjects.length} of {PROJECTS.length} curated developments</span>
          <span className="hidden sm:inline">100% RERA Registered Portfolio</span>
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onViewProject={(slug) => onNavigate(`/projects/${slug}`)}
              onEnquireProject={(slug, name) => onOpenConsultation(slug, name)}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-slate-50 border border-slate-200 space-y-4">
          <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="font-serif text-xl font-bold text-[#305d3f]">
            No projects matched your criteria
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Try adjusting your category filter or search query, or speak with advisor Athar Mansoor (Agent RERA: {AGENT_RERA_NUMBER}) for custom project shortlisting.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-xs font-semibold text-[#305d3f] underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Advisory Note */}
      <div className="bg-[#305d3f] text-white p-8 border border-[#23462f] space-y-3 shadow-sm">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#C8AD78]" />
          <h3 className="font-serif text-lg font-bold">
            Statutory Agent Compliance: {AGENT_RERA_NUMBER}
          </h3>
        </div>
        <p className="text-xs text-slate-200 leading-relaxed">
          GreenNest Realtors evaluates projects based on legal title clearances, sanctioned authority layout approvals, and master-planned township integration. All price sheets, sanctioned floorplans, and brochures are derived directly from official promoter records.
        </p>
      </div>
    </div>
  );
};
