import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/layout/CommandPalette';
import { HomePage } from './pages/HomePage';
import { PlatformOverviewPage, PlatformModulePage } from './pages/PlatformPage';
import { ProductPage, ProductsIndexPage } from './pages/ProductPage';
import { SolutionsIndexPage, SolutionDetailPage } from './pages/SolutionPage';
import {
  CaseStudiesIndexPage,
  CaseStudyDetailPage,
  OutcomesPage,
  PressPage,
  PartnersPage,
} from './pages/ProofPage';
import {
  DevelopersPage,
  SDKsPage,
  GuidesPage,
  SandboxPage,
  StatusPage,
} from './pages/DevelopersPage';
import { TrustHubPage, TrustDetailPage } from './pages/TrustPage';
import { AboutPage, LeadershipPage, CareersPage, MediaKitPage } from './pages/CompanyPage';
import { ContactPage } from './pages/ContactPage';
import { LocaleProvider, useLocale } from './hooks/useLocale';
import { trackPageView, trackScrollDepth } from './data/analytics';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageTracker() {
  const { locale } = useLocale();
  const { pathname } = useLocation();
  useEffect(() => {
    trackPageView(pathname, locale);
  }, [pathname, locale]);

  // Scroll depth tracking
  useEffect(() => {
    let maxDepth = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const depth = Math.round((scrollTop / docHeight) * 100);
      if (depth > maxDepth) {
        maxDepth = depth;
        if (maxDepth % 25 === 0 && maxDepth > 0) {
          trackScrollDepth(maxDepth);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return null;
}

function AppLayout() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ed]">
      <ScrollToTop />
      <PageTracker />

      <Header onSearchOpen={() => setSearchOpen(true)} />

      <CommandPalette open={searchOpen} onClose={() => setSearchOpen(false)} />

      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Platform */}
          <Route path="/platform" element={<PlatformOverviewPage />} />
          <Route path="/platform/:slug" element={<PlatformModulePage />} />

          {/* Products */}
          <Route path="/products" element={<ProductsIndexPage />} />
          <Route path="/products/:slug" element={<ProductPage />} />

          {/* Solutions */}
          <Route path="/solutions" element={<SolutionsIndexPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />

          {/* Proof */}
          <Route path="/proof" element={<CaseStudiesIndexPage />} />
          <Route path="/proof/case-studies" element={<CaseStudiesIndexPage />} />
          <Route path="/proof/case-studies/:slug" element={<CaseStudyDetailPage />} />
          <Route path="/proof/outcomes" element={<OutcomesPage />} />
          <Route path="/proof/press" element={<PressPage />} />
          <Route path="/proof/partners" element={<PartnersPage />} />

          {/* Developers */}
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/developers/sdks" element={<SDKsPage />} />
          <Route path="/developers/guides" element={<GuidesPage />} />
          <Route path="/developers/sandbox" element={<SandboxPage />} />
          <Route path="/developers/status" element={<StatusPage />} />

          {/* Trust */}
          <Route path="/trust" element={<TrustHubPage />} />
          <Route path="/trust/:slug" element={<TrustDetailPage />} />

          {/* Company */}
          <Route path="/company" element={<AboutPage />} />
          <Route path="/company/about" element={<AboutPage />} />
          <Route path="/company/leadership" element={<LeadershipPage />} />
          <Route path="/company/careers" element={<CareersPage />} />
          <Route path="/company/media-kit" element={<MediaKitPage />} />

          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="pt-24 min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl text-white/10 mb-4">404</p>
                  <p className="text-[#8888a0]">Page not found</p>
                </div>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <LocaleProvider>
        <AppLayout />
      </LocaleProvider>
    </HashRouter>
  );
}
