import React from 'react';
import { Compass, ArrowRight, Home } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 bg-[#305d3f] text-[#C8AD78] flex items-center justify-center mx-auto shadow-md">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-[#9E8043]">
          Error 404
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#305d3f]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#242824]/80 leading-relaxed font-light">
          The requested page or project URL does not exist or may have been reorganized within our curated portfolio.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={() => onNavigate('/')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#305d3f] text-[#F7F5EF] text-xs font-semibold uppercase tracking-wider py-3 px-6 hover:bg-[#23462f] transition-colors"
        >
          <Home className="w-4 h-4 text-[#C8AD78]" />
          <span>Return to Homepage</span>
        </button>

        <button
          onClick={() => onNavigate('/projects')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#305d3f] text-[#305d3f] text-xs font-semibold uppercase tracking-wider py-3 px-6 hover:bg-[#305d3f]/5 transition-colors"
        >
          <span>Explore Curated Projects</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
