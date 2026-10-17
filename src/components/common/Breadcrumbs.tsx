import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[#242824]/60">
        <li>
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-[#305d3f] transition-colors focus:outline-none"
          >
            <Home className="w-3.5 h-3.5 text-[#305d3f]" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li aria-hidden="true">
                <ChevronRight className="w-3 h-3 text-[#242824]/30" />
              </li>
              <li>
                {item.path && !isLast ? (
                  <button
                    onClick={() => onNavigate(item.path!)}
                    className="hover:text-[#305d3f] transition-colors focus:outline-none"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span className="text-[#305d3f] font-medium" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
