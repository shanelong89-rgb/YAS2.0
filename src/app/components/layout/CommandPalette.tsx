import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Command } from 'lucide-react';
import { trackEvent } from '../../data/analytics';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

interface SearchResult {
  title: string;
  description: string;
  href: string;
  category: string;
}

const allResults: SearchResult[] = [
  { title: 'Platform Overview', description: 'Complete infrastructure overview', href: '/platform', category: 'Platform' },
  { title: 'Risk & Pricing Engine', description: 'AI-powered risk assessment', href: '/platform/risk-pricing-engine', category: 'Platform' },
  { title: 'Embedded Distribution', description: 'Drop-in protection flows', href: '/platform/embedded-distribution', category: 'Platform' },
  { title: 'Claims Automation', description: 'Event to payout in minutes', href: '/platform/claims-automation', category: 'Platform' },
  { title: 'Smart Transport', description: 'Mobility & fleet protection', href: '/products/smart-transport', category: 'Products' },
  { title: 'Sports & Lifestyle', description: 'Event-driven coverage', href: '/products/sports-lifestyle', category: 'Products' },
  { title: 'Payments & Wallets', description: 'Transaction protection', href: '/products/payments-wallets', category: 'Products' },
  { title: 'Liquidity & Lending', description: 'DeFi & lending coverage', href: '/products/liquidity-lending', category: 'Products' },
  { title: 'Case Studies', description: 'Real deployment outcomes', href: '/proof/case-studies', category: 'Proof' },
  { title: 'API Overview', description: 'Developer documentation', href: '/developers', category: 'Developers' },
  { title: 'Trust Hub', description: 'Security, privacy, compliance', href: '/trust', category: 'Trust' },
  { title: 'About YAS', description: 'Company information', href: '/company/about', category: 'Company' },
  { title: 'Contact', description: 'Get in touch', href: '/contact', category: 'Company' },
  { title: 'Zurich Taxi Insurance', description: 'Case study', href: '/proof/case-studies/zurich-taxi-insurance', category: 'Case Studies' },
  { title: 'AlipayHK Embedded Protection', description: 'Case study', href: '/proof/case-studies/alipayhk-embedded-protection', category: 'Case Studies' },
];

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setQuery('');
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (!open) trackEvent('search_open');
      }
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const filtered = query.length > 0
    ? allResults.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.description.toLowerCase().includes(query.toLowerCase()) ||
          r.category.toLowerCase().includes(query.toLowerCase())
      )
    : allResults;

  const grouped = filtered.reduce<Record<string, SearchResult[]>>((acc, r) => {
    if (!acc[r.category]) acc[r.category] = [];
    acc[r.category].push(r);
    return acc;
  }, {});

  const handleSelect = (href: string) => {
    trackEvent('search_query', { query, selected: href });
    navigate(href);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: 'fadeIn 160ms ease-out' }}
      />

      {/* Panel */}
      <div className="relative z-10 max-w-xl mx-auto mt-[15vh] px-4">
        <div
          className="rounded-xl border border-white/[0.08] bg-[#111118]/95 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden"
          style={{ animation: 'commandIn 220ms cubic-bezier(0,0,0.2,1)' }}
        >
          {/* Search input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
            <Search className="w-4 h-4 text-[#8888a0]" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search YAS..."
              className="flex-1 bg-transparent text-white placeholder-[#8888a0]/60 outline-none"
            />
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-white/[0.06] bg-white/[0.04] text-[10px] text-[#8888a0]">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-[50vh] overflow-y-auto p-2">
            {Object.entries(grouped).map(([category, results]) => (
              <div key={category} className="mb-2">
                <p className="px-3 py-1.5 text-xs text-[#8888a0]/60 uppercase tracking-wider">{category}</p>
                {results.map((result) => (
                  <button
                    key={result.href}
                    onClick={() => handleSelect(result.href)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors duration-[120ms] hover:bg-white/[0.04] group"
                  >
                    <div>
                      <p className="text-sm text-white/90">{result.title}</p>
                      <p className="text-xs text-[#8888a0]">{result.description}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8888a0]/40 opacity-0 group-hover:opacity-100 transition-all duration-[120ms] group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="px-3 py-8 text-sm text-[#8888a0] text-center">No results found for &ldquo;{query}&rdquo;</p>
            )}
          </div>

          {/* Footer hints */}
          <div className="flex items-center gap-4 px-4 py-2 border-t border-white/[0.04] text-[10px] text-[#8888a0]/40">
            <span className="flex items-center gap-1">
              <Command className="w-3 h-3" /> K to open
            </span>
            <span>Arrow keys to navigate</span>
            <span>Enter to select</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes commandIn {
          from { opacity: 0; transform: scale(0.96) translateY(-8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
