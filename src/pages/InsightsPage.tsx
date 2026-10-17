import React, { useState } from 'react';
import { ARTICLES } from '../data/articles';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArrowRight, BookOpen, Clock, User, Filter, ShieldCheck } from 'lucide-react';
import { AGENT_RERA_NUMBER } from '../data/projects';

interface InsightsPageProps {
  onNavigate: (path: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Home Buying Strategy',
    'Legal & Due Diligence',
    'Regulatory Compliance',
    'Property Economics',
    'NRI Real Estate',
    'Home Financing',
  ];

  const filteredArticles = selectedCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 bg-white">
      <Breadcrumbs items={[{ label: 'Insights & Guides' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#305d3f] font-semibold flex-wrap">
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Agent RERA: {AGENT_RERA_NUMBER}</span>
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Real Estate Intelligence & Guides</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#305d3f] leading-tight">
          Property Insights for Discerning Buyers
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
          In-depth educational articles covering statutory UP-RERA checks, Lucknow market analysis, carpet area calculations, and NRI investment coordination.
        </p>
      </div>

      {/* Category Tabs (Polar White) */}
      <div className="flex items-center gap-2 flex-wrap pb-4 border-b border-slate-200">
        <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Category:</span>
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs font-medium px-3.5 py-1.5 transition-colors focus:outline-none ${
              selectedCategory === cat
                ? 'bg-[#305d3f] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:text-[#305d3f] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <article
            key={article.slug}
            className="group bg-white border border-slate-200 hover:border-[#305d3f]/40 transition-all p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-[0_8px_24px_rgba(21,59,50,0.06)]"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-medium text-[#305d3f]">{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>

              <h2 className="font-serif text-xl font-bold text-[#305d3f] group-hover:text-[#23462f] transition-colors leading-snug">
                {article.title}
              </h2>

              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-slate-600">
                <User className="w-3.5 h-3.5 text-[#305d3f]" />
                <span>{article.author}</span>
              </div>

              <button
                onClick={() => onNavigate(`/insights/${article.slug}`)}
                className="inline-flex items-center gap-1 font-semibold text-[#305d3f] group-hover:translate-x-0.5 transition-transform"
              >
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C8AD78]" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
