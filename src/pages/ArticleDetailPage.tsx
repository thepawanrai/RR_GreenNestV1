import React from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/articles';
import { PROJECTS, AGENT_RERA_NUMBER, AGENT_NAME } from '../data/projects';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Clock, User, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface ArticleDetailPageProps {
  article: Article;
  onNavigate: (path: string) => void;
  onOpenConsultation: (projectSlug?: string, projectName?: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  onNavigate,
  onOpenConsultation,
}) => {
  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  const relatedProjects = article.relatedProjects
    ? PROJECTS.filter((p) => article.relatedProjects?.includes(p.slug))
    : [];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-white">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Insights', path: '/insights' },
          { label: article.category, path: '/insights' },
          { label: article.title },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 text-xs text-slate-500 flex-wrap">
          <span className="font-semibold text-[#305d3f]">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>Published {article.publishedAt}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-emerald-800 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Agent RERA: {AGENT_RERA_NUMBER}</span>
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#305d3f] leading-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
          {article.subtitle}
        </p>

        {/* Author info */}
        <div className="pt-2 flex items-center justify-between text-xs text-slate-700">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#305d3f] text-[#C8AD78] flex items-center justify-center font-bold text-xs">
              AM
            </div>
            <div>
              <div className="font-semibold text-[#305d3f]">{article.author}</div>
              <div className="text-[11px] text-slate-500">{article.authorRole} · UP-RERA: {AGENT_RERA_NUMBER}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Article Body (Polar White) */}
      <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-light">
        {article.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#305d3f] pt-2">
              {section.heading}
            </h2>

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}

            {section.bulletPoints && (
              <ul className="space-y-2.5 pl-4 border-l-2 border-[#305d3f] my-4 text-xs sm:text-sm">
                {section.bulletPoints.map((bp, bIdx) => (
                  <li key={bIdx} className="text-slate-800">
                    {bp}
                  </li>
                ))}
              </ul>
            )}

            {section.callout && (
              <div className="p-4 bg-slate-50 border-l-4 border-[#305d3f] text-xs text-slate-700 my-4 border border-slate-200">
                {section.callout}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Related Curated Projects if mentioned */}
      {relatedProjects.length > 0 && (
        <div className="bg-slate-50 border border-slate-200 p-6 space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#305d3f]">
            Projects Mentioned in This Guide
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProjects.map((proj) => (
              <div
                key={proj.slug}
                className="p-4 bg-white border border-slate-200 flex items-center justify-between shadow-sm"
              >
                <div>
                  <div className="font-serif font-bold text-[#305d3f] text-sm">{proj.displayName}</div>
                  <div className="text-xs text-slate-500">{proj.location}</div>
                </div>
                <button
                  onClick={() => onNavigate(`/projects/${proj.slug}`)}
                  className="text-xs font-semibold text-[#305d3f] hover:underline"
                >
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Advisor Consultation Callout */}
      <div className="bg-[#305d3f] text-white p-8 border border-[#23462f] space-y-4 shadow-sm">
        <h3 className="font-serif text-xl font-bold text-[#C8AD78]">
          Have Questions About Shortlisting Your Property?
        </h3>
        <p className="text-xs text-slate-200 leading-relaxed">
          {AGENT_NAME} provides personalized advisory consultations for Lucknow homebuyers, reviewing specific tower floorplates, RERA documents, and bank pre-approval codes. (UP-RERA Agent: <strong>{AGENT_RERA_NUMBER}</strong>).
        </p>
        <button
          onClick={() => onOpenConsultation()}
          className="bg-[#C8AD78] hover:bg-[#DFCDA6] text-[#23462f] text-xs font-semibold uppercase tracking-wider py-3 px-6 transition-colors shadow-sm"
        >
          Book a Free 1-on-1 Consultation
        </button>
      </div>

      {/* Other Articles */}
      <div className="pt-8 border-t border-slate-200 space-y-6">
        <h3 className="font-serif text-2xl font-bold text-[#305d3f]">
          More Guides & Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherArticles.map((other) => (
            <div
              key={other.slug}
              className="p-4 bg-white border border-slate-200 space-y-2 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-1">
                <span className="text-[11px] text-slate-500">{other.category}</span>
                <h4 className="font-serif font-bold text-[#305d3f] text-sm line-clamp-2">
                  {other.title}
                </h4>
              </div>
              <button
                onClick={() => onNavigate(`/insights/${other.slug}`)}
                className="text-xs font-semibold text-[#305d3f] hover:underline text-left pt-2"
              >
                Read Article →
              </button>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
