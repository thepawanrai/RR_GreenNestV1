import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { LeadModal } from './components/common/LeadModal';
import { StickyMobileCTA } from './components/common/StickyMobileCTA';
import { FloatingWhatsAppButton } from './components/common/FloatingWhatsAppButton';

import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { NriCornerPage } from './pages/NriCornerPage';
import { BuyersGuidePage } from './pages/BuyersGuidePage';
import { HomeLoanPage } from './pages/HomeLoanPage';
import { InsightsPage } from './pages/InsightsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { FaqsPage } from './pages/FaqsPage';
import { ContactPage } from './pages/ContactPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { GET_PROJECT_BY_SLUG } from './data/projects';
import { GET_ARTICLE_BY_SLUG } from './data/articles';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [consultationModal, setConsultationModal] = useState<{
    isOpen: boolean;
    projectSlug?: string;
    projectName?: string;
  }>({ isOpen: false });

  // Handle URL change
  const navigateTo = (path: string) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document title dynamically per route
  useEffect(() => {
    let title = 'GreenNest Realtors | Selective Homes. Exclusive Living';
    const normPath = currentPath.replace(/\/$/, '') || '/';

    if (normPath === '/') {
      title = 'GreenNest Realtors | Selective Homes. Exclusive Living · Lucknow';
    } else if (normPath === '/projects') {
      title = 'Curated Projects in Lucknow | GreenNest Realtors';
    } else if (normPath.startsWith('/projects/')) {
      const slug = normPath.replace('/projects/', '');
      const project = GET_PROJECT_BY_SLUG(slug);
      if (project) {
        title = `${project.displayName} – ${project.tagline} | GreenNest Realtors`;
      }
    } else if (normPath === '/about') {
      title = 'About GreenNest Realtors | Curated Lucknow Real Estate Advisory';
    } else if (normPath === '/nri-corner') {
      title = 'NRI & Remote Buyer Corner | Lucknow Property Investment Guidance';
    } else if (normPath === '/buyers-guide') {
      title = 'Homebuyer Due Diligence Guide | GreenNest Realtors';
    } else if (normPath === '/home-loan-assistance') {
      title = 'Home Loan Assistance & Bank Coordination | GreenNest Realtors';
    } else if (normPath === '/insights') {
      title = 'Real Estate Insights & Educational Guides | GreenNest Realtors';
    } else if (normPath.startsWith('/insights/')) {
      const slug = normPath.replace('/insights/', '');
      const article = GET_ARTICLE_BY_SLUG(slug);
      if (article) {
        title = `${article.title} | GreenNest Insights`;
      }
    } else if (normPath === '/faqs') {
      title = 'Frequently Asked Questions | GreenNest Realtors';
    } else if (normPath === '/testimonials' || normPath === '/reviews') {
      title = 'Client Reviews & Investment ROI | GreenNest Realtors';
    } else if (normPath === '/contact') {
      title = 'Contact GreenNest Realtors | Schedule Private Consultation';
    } else if (normPath === '/privacy-policy') {
      title = 'Privacy Policy | GreenNest Realtors';
    } else if (normPath === '/terms-and-conditions') {
      title = 'Terms & Conditions | GreenNest Realtors';
    } else if (normPath === '/disclaimer') {
      title = 'RERA & Legal Disclaimer | GreenNest Realtors';
    }

    document.title = title;
  }, [currentPath]);

  // Route Resolver
  const renderRoute = () => {
    const normPath = currentPath.replace(/\/$/, '') || '/';

    if (normPath === '/') {
      return (
        <HomePage
          onNavigate={navigateTo}
          onOpenConsultation={(slug, name) =>
            setConsultationModal({ isOpen: true, projectSlug: slug, projectName: name })
          }
        />
      );
    }

    if (normPath === '/projects') {
      return (
        <ProjectsPage
          onNavigate={navigateTo}
          onOpenConsultation={(slug, name) =>
            setConsultationModal({ isOpen: true, projectSlug: slug, projectName: name })
          }
        />
      );
    }

    if (normPath.startsWith('/projects/')) {
      const slug = normPath.replace('/projects/', '');
      const project = GET_PROJECT_BY_SLUG(slug);
      if (project) {
        return (
          <ProjectDetailPage
            project={project}
            onNavigate={navigateTo}
            onOpenConsultation={(s, n) =>
              setConsultationModal({ isOpen: true, projectSlug: s, projectName: n })
            }
          />
        );
      }
      return <NotFoundPage onNavigate={navigateTo} />;
    }

    if (normPath === '/about') {
      return (
        <AboutPage
          onNavigate={navigateTo}
          onOpenConsultation={() => setConsultationModal({ isOpen: true })}
        />
      );
    }

    if (normPath === '/nri-corner') {
      return (
        <NriCornerPage
          onNavigate={navigateTo}
          onOpenConsultation={() => setConsultationModal({ isOpen: true })}
        />
      );
    }

    if (normPath === '/buyers-guide') {
      return (
        <BuyersGuidePage
          onNavigate={navigateTo}
          onOpenConsultation={() => setConsultationModal({ isOpen: true })}
        />
      );
    }

    if (normPath === '/home-loan-assistance') {
      return (
        <HomeLoanPage
          onNavigate={navigateTo}
          onOpenConsultation={() => setConsultationModal({ isOpen: true })}
        />
      );
    }

    if (normPath === '/insights') {
      return <InsightsPage onNavigate={navigateTo} />;
    }

    if (normPath.startsWith('/insights/')) {
      const slug = normPath.replace('/insights/', '');
      const article = GET_ARTICLE_BY_SLUG(slug);
      if (article) {
        return (
          <ArticleDetailPage
            article={article}
            onNavigate={navigateTo}
            onOpenConsultation={(s, n) =>
              setConsultationModal({ isOpen: true, projectSlug: s, projectName: n })
            }
          />
        );
      }
      return <NotFoundPage onNavigate={navigateTo} />;
    }

    if (normPath === '/faqs') {
      return (
        <FaqsPage
          onNavigate={navigateTo}
          onOpenConsultation={() => setConsultationModal({ isOpen: true })}
        />
      );
    }

    if (normPath === '/testimonials' || normPath === '/reviews') {
      return (
        <TestimonialsPage
          onNavigate={navigateTo}
          onOpenConsultation={(s, n) =>
            setConsultationModal({ isOpen: true, projectSlug: s, projectName: n })
          }
        />
      );
    }

    if (normPath === '/contact') {
      return <ContactPage onNavigate={navigateTo} />;
    }

    if (normPath === '/privacy-policy') {
      return <PrivacyPolicyPage onNavigate={navigateTo} />;
    }

    if (normPath === '/terms-and-conditions') {
      return <TermsPage onNavigate={navigateTo} />;
    }

    if (normPath === '/disclaimer') {
      return <DisclaimerPage onNavigate={navigateTo} />;
    }

    return <NotFoundPage onNavigate={navigateTo} />;
  };

  // Determine current project for sticky mobile CTA if on project page
  const currentProjectSlug = currentPath.startsWith('/projects/')
    ? currentPath.replace('/projects/', '').replace(/\/$/, '')
    : undefined;
  const currentProject = currentProjectSlug ? GET_PROJECT_BY_SLUG(currentProjectSlug) : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#305d3f] selection:text-white">
      {/* Global Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenConsultation={(slug, name) =>
          setConsultationModal({ isOpen: true, projectSlug: slug, projectName: name })
        }
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 lg:pb-0">
        {renderRoute()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Sticky Mobile Quick CTA */}
      <StickyMobileCTA
        onOpenConsultation={() =>
          setConsultationModal({
            isOpen: true,
            projectSlug: currentProject?.slug,
            projectName: currentProject?.displayName,
          })
        }
        projectSlug={currentProject?.slug}
        projectName={currentProject?.displayName}
      />

      {/* Floating WhatsApp Action Button (Visible across Desktop & Mobile) */}
      <FloatingWhatsAppButton
        customMessage={
          currentProject
            ? `Hello Athar Mansoor (GreenNest Realtors), I am exploring ${currentProject.displayName} on your website and would like to request verified project details and pricing.`
            : undefined
        }
      />

      {/* Global Lead & Consultation Modal */}
      <LeadModal
        isOpen={consultationModal.isOpen}
        onClose={() => setConsultationModal({ isOpen: false })}
        defaultProjectSlug={consultationModal.projectSlug}
        defaultProjectName={consultationModal.projectName}
      />
    </div>
  );
}
