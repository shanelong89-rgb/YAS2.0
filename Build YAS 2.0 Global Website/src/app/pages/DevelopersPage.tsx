import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Package, BookOpen, Play, Activity, Terminal, Copy, Check, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../components/aura/ScrollReveal';
import { GlassCard } from '../components/aura/GlassCard';
import { CodeBlock } from '../components/aura/CodeBlock';
import { CTABand } from '../components/aura/CTABand';
import { trackCTAClick, trackEvent } from '../data/analytics';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLocale } from '../hooks/useLocale';

const codeHeroImage = 'https://images.unsplash.com/photo-1692106979244-a2ac98253f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBkZXZlbG9wZXIlMjBkYXJrJTIwc2NyZWVufGVufDF8fHx8MTc3MDcyNzcwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

const apiExample = `curl -X POST https://api.yas.io/v2/pricing/quote \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "product": "smart-transport",
    "segment": "consumer",
    "signals": {
      "driver_id": "drv_12345",
      "trip_distance_km": 15.4,
      "vehicle_type": "sedan",
      "region": "HK"
    }
  }'`;

const responseExample = `{
  "quote_id": "qt_8f7a3b2c",
  "premium": {
    "amount": 12.50,
    "currency": "HKD"
  },
  "risk_score": 0.34,
  "coverage": {
    "type": "per_trip",
    "limit": 500000,
    "excess": 1000
  },
  "valid_until": "2026-02-10T23:59:59Z",
  "issued_by": "Licensed Insurer Partner"
}`;

const sdkExample = `import { YAS } from '@yas/sdk';

const client = new YAS({
  apiKey: process.env.YAS_API_KEY,
  environment: 'sandbox'
});

// Get a pricing quote
const quote = await client.pricing.getQuote({
  product: 'smart-transport',
  segment: 'consumer',
  signals: {
    driver_id: 'drv_12345',
    trip_distance_km: 15.4,
    vehicle_type: 'sedan',
    region: 'HK'
  }
});

// Issue a policy
const policy = await client.policies.create({
  quote_id: quote.id,
  policyholder: { id: 'ph_67890' }
});

console.log(policy.status); // "active"`;

const devResources = [
  { icon: <Code2 className="w-5 h-5" />, title: 'API Reference', description: 'Complete REST API documentation with request/response schemas', href: '/developers', color: '#33a1de' },
  { icon: <Package className="w-5 h-5" />, title: 'SDKs', description: 'Official SDKs for Node.js, Python, Go, and Java', href: '/developers/sdks', color: '#2ecc71' },
  { icon: <BookOpen className="w-5 h-5" />, title: 'Integration Guides', description: 'Step-by-step guides for common integration patterns', href: '/developers/guides', color: '#e85d4a' },
  { icon: <Play className="w-5 h-5" />, title: 'Sandbox', description: 'Full-featured sandbox environment for testing', href: '/developers/sandbox', color: '#33a1de' },
  { icon: <Activity className="w-5 h-5" />, title: 'Status', description: 'Real-time platform status and incident history', href: '/developers/status', color: '#2ecc71' },
];

const endpoints = [
  { method: 'POST', path: '/v2/pricing/quote', description: 'Generate a pricing quote' },
  { method: 'POST', path: '/v2/policies', description: 'Create a policy' },
  { method: 'GET', path: '/v2/policies/:id', description: 'Retrieve policy details' },
  { method: 'POST', path: '/v2/claims', description: 'Submit a claim' },
  { method: 'GET', path: '/v2/claims/:id', description: 'Check claim status' },
  { method: 'POST', path: '/v2/payouts', description: 'Trigger a payout' },
  { method: 'GET', path: '/v2/webhooks', description: 'List webhook subscriptions' },
  { method: 'POST', path: '/v2/webhooks', description: 'Create webhook subscription' },
];

export function DevelopersPage() {
  const [apiKitOpen, setApiKitOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      {/* ── TERMINAL-STYLE HERO ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <ImageWithFallback src={codeHeroImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]" />
        </div>

        {/* iOS 26 frosted glass overlay */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'rgba(10, 10, 15, 0.15)',
            backdropFilter: 'blur(3px) saturate(1.5) brightness(1.04)',
            WebkitBackdropFilter: 'blur(3px) saturate(1.5) brightness(1.04)',
          }}
        />

        {/* Scanline effect */}
        {!reducedMotion && (
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-[2]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(51,161,222,0.1) 2px, rgba(51,161,222,0.1) 4px)',
            }} />
        )}

        {/* Terminal grid */}
        <div className="absolute inset-0 pointer-events-none opacity-15 z-[2]"
          style={{
            backgroundImage: 'linear-gradient(rgba(46,204,113,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(46,204,113,0.03) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-4 h-4 text-[#2ecc71]" />
                  <p className="text-sm uppercase tracking-[0.2em] text-[#2ecc71] font-mono">{t('nav.developers')}</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6 leading-[1.1]">
                  Build with
                  <br />
                  <span className="text-[#2ecc71]">YAS</span>
                </h1>
                <p className="text-lg text-[#8888a0] max-w-xl mb-8 leading-relaxed">
                  API-first protection infrastructure. Integrate risk pricing, policy issuance, claims automation, and instant payouts with a few lines of code.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => { setApiKitOpen(true); trackEvent('api_kit_request'); }}
                    className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#2ecc71] text-[#0a0a0f] transition-all duration-200 hover:shadow-[0_0_30px_rgba(46,204,113,0.3)] active:scale-[0.98]">
                    Request API Kit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <a href="#api-reference"
                    className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[#2ecc71]/20 text-[#2ecc71]/80 hover:text-[#2ecc71] hover:border-[#2ecc71]/40 transition-all duration-200">
                    API Reference <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Mini terminal preview */}
            <ScrollReveal delay={120}>
              <div className="hidden lg:block">
                <div className="rounded-2xl border border-[#2ecc71]/10 bg-[#0d1117] overflow-hidden shadow-2xl shadow-black/50">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04]">
                    <div className="w-3 h-3 rounded-full bg-[#e85d4a]/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-[#2ecc71]/60" />
                    <span className="text-[10px] text-[#8888a0] ml-2 font-mono">terminal — bash</span>
                  </div>
                  <div className="p-4 font-mono text-xs leading-relaxed">
                    <p className="text-[#8888a0]"><span className="text-[#2ecc71]">$</span> npm install @yas/sdk</p>
                    <p className="text-[#8888a0] mt-1">+ @yas/sdk@2.4.0</p>
                    <p className="text-[#8888a0] mt-2"><span className="text-[#2ecc71]">$</span> yas init --product smart-transport</p>
                    <p className="text-[#33a1de] mt-1">✓ Project initialized</p>
                    <p className="text-[#33a1de]">✓ Sandbox connected</p>
                    <p className="text-[#33a1de]">✓ API key configured</p>
                    <p className="text-[#8888a0] mt-2"><span className="text-[#2ecc71]">$</span> yas test pricing</p>
                    <p className="text-[#2ecc71] mt-1">✓ 200 OK — 142ms — quote_id: qt_8f7a3b2c</p>
                    <span className="inline-block w-2 h-4 bg-[#2ecc71] mt-2"
                      style={{ animation: !reducedMotion ? 'blink 1s step-end infinite' : 'none' }} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <style>{`
          @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        `}</style>
      </section>

      {/* ── QUICK START: Side by Side ── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-2 tracking-tight">Quick Start</h2>
            <p className="text-[#8888a0] mb-10">Get started with a pricing quote in under 5 minutes.</p>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-6">
            <ScrollReveal delay={40}>
              <CodeBlock code={apiExample} language="bash" title="Request a pricing quote" />
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <CodeBlock code={responseExample} language="json" title="API Response — 142ms" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SDK SECTION ── */}
      <section className="py-24 border-t border-white/[0.04] relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(46,204,113,0.03) 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-2 tracking-tight">SDK Integration</h2>
            <p className="text-[#8888a0] mb-8">Use our official SDKs for typed responses, automatic retries, and built-in error handling.</p>
            <CodeBlock code={sdkExample} language="typescript" title="Node.js SDK Example" />
          </ScrollReveal>
        </div>
      </section>

      {/* ── API REFERENCE ── */}
      <section id="api-reference" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-8 tracking-tight">API Endpoints</h2>
          </ScrollReveal>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            {endpoints.map((ep, i) => (
              <ScrollReveal key={i} delay={i * 30}>
                <div className={`flex items-center gap-4 p-4 hover:bg-white/[0.04] transition-colors group ${i > 0 ? 'border-t border-white/[0.04]' : ''}`}>
                  <span className={`text-xs px-2.5 py-1 rounded font-mono min-w-[52px] text-center ${
                    ep.method === 'GET' ? 'bg-[#2ecc71]/10 text-[#2ecc71]' : 'bg-[#33a1de]/10 text-[#33a1de]'
                  }`}>
                    {ep.method}
                  </span>
                  <code className="text-sm text-white/70 font-mono flex-1">{ep.path}</code>
                  <span className="text-xs text-[#8888a0] hidden sm:block">{ep.description}</span>
                  <ChevronRight className="w-4 h-4 text-[#8888a0]/30 group-hover:text-[#8888a0] transition-colors" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPER RESOURCES: Visual cards ── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl text-white mb-8 tracking-tight">Resources</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {devResources.map((resource, i) => (
              <ScrollReveal key={resource.title} delay={i * 50}>
                <Link to={resource.href} className="group block">
                  <div className="relative rounded-2xl border border-white/[0.10] bg-white/[0.05] p-6 h-full overflow-hidden transition-all duration-300 hover:border-white/[0.16] hover:-translate-y-0.5">
                    <div className="absolute top-0 left-0 w-full h-px"
                      style={{ background: `linear-gradient(to right, transparent, ${resource.color}30, transparent)` }} />
                    <div className="mb-4" style={{ color: resource.color }}>{resource.icon}</div>
                    <h3 className="text-white mb-2">{resource.title}</h3>
                    <p className="text-sm text-[#8888a0]">{resource.description}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── API KIT MODAL ── */}
      {apiKitOpen && (
        <div className="fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setApiKitOpen(false)} />
          <div className="relative z-10 max-w-md mx-auto mt-[20vh] px-4">
            <div className="rounded-2xl border border-[#2ecc71]/20 bg-[#111118]/95 backdrop-blur-xl p-6 shadow-2xl"
              style={{ animation: 'modalIn 220ms cubic-bezier(0,0,0.2,1)' }}>
              <h3 className="text-white text-lg mb-2">Request API Kit</h3>
              <p className="text-sm text-[#8888a0] mb-6">Get sandbox access, API keys, and integration support.</p>
              <form onSubmit={(e) => { e.preventDefault(); setApiKitOpen(false); trackEvent('demo_form_complete', { type: 'api_kit' }); }}>
                <div className="space-y-3 mb-6">
                  <input placeholder="Company name" className="w-full px-4 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.04] text-white placeholder-[#8888a0]/50 outline-none focus:border-[#2ecc71]/40 transition-colors" />
                  <input placeholder="Work email" type="email" className="w-full px-4 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.04] text-white placeholder-[#8888a0]/50 outline-none focus:border-[#2ecc71]/40 transition-colors" />
                  <input placeholder="Use case (optional)" className="w-full px-4 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.04] text-white placeholder-[#8888a0]/50 outline-none focus:border-[#2ecc71]/40 transition-colors" />
                </div>
                <div className="flex gap-3">
                  <button type="submit" className="flex-1 px-4 py-2.5 rounded-lg bg-[#2ecc71] text-[#0a0a0f] transition-all duration-200 hover:shadow-[0_0_16px_rgba(46,204,113,0.3)]">
                    Submit Request
                  </button>
                  <button type="button" onClick={() => setApiKitOpen(false)} className="px-4 py-2.5 rounded-lg border border-white/[0.06] text-[#8888a0] hover:text-white transition-colors">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <style>{`@keyframes modalIn { from { opacity: 0; transform: scale(0.96) translateY(-8px); } to { opacity: 1; transform: scale(1) translateY(0); } }`}</style>
        </div>
      )}

      <CTABand
        title="Start Building"
        subtitle="Get sandbox access and start integrating YAS infrastructure into your platform."
        primaryLabel="Request API Kit"
        primaryHref="/contact"
        secondaryLabel="Talk to Engineering"
        secondaryHref="/contact"
      />
    </div>
  );
}

export function SDKsPage() {
  const sdks = [
    { name: 'Node.js', version: '2.4.0', status: 'Stable', install: 'npm install @yas/sdk', color: '#2ecc71' },
    { name: 'Python', version: '2.3.1', status: 'Stable', install: 'pip install yas-sdk', color: '#33a1de' },
    { name: 'Go', version: '2.2.0', status: 'Stable', install: 'go get github.com/yas/sdk-go', color: '#33a1de' },
    { name: 'Java', version: '2.1.0', status: 'Stable', install: 'implementation "io.yas:sdk:2.1.0"', color: '#e85d4a' },
    { name: 'React SDK', version: '1.2.0', status: 'Beta', install: 'npm install @yas/react', color: '#33a1de' },
    { name: 'Flutter', version: '1.0.0', status: 'Beta', install: 'yas_sdk: ^1.0.0', color: '#2ecc71' },
  ];
  const { t } = useLocale();

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <Link to="/developers" className="inline-flex items-center gap-1 text-sm text-[#8888a0] hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-3 h-3 rotate-180" /> {t('nav.developers')}
            </Link>
            <h1 className="text-4xl text-white tracking-tight mb-6">SDKs</h1>
            <p className="text-[#8888a0] mb-12">Official client libraries for the YAS API.</p>
          </ScrollReveal>
          <div className="space-y-3">
            {sdks.map((sdk, i) => (
              <ScrollReveal key={sdk.name} delay={i * 40}>
                <div className="rounded-2xl border border-white/[0.10] bg-white/[0.05] p-5 overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: sdk.color }} />
                      <h3 className="text-white">{sdk.name}</h3>
                      <span className="text-xs text-[#8888a0]">v{sdk.version}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        sdk.status === 'Stable' ? 'bg-[#2ecc71]/10 text-[#2ecc71]' : 'bg-yellow-500/10 text-yellow-400'
                      }`}>{sdk.status}</span>
                    </div>
                  </div>
                  <CodeBlock code={sdk.install} language="bash" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}

export function GuidesPage() {
  const guides = [
    { title: 'Getting Started', description: 'Set up your development environment and make your first API call', time: '10 min', color: '#2ecc71' },
    { title: 'Embedded Protection Flow', description: 'Integrate a complete protection journey into your checkout', time: '30 min', color: '#33a1de' },
    { title: 'Webhook Integration', description: 'Set up real-time event notifications for policies and claims', time: '15 min', color: '#e85d4a' },
    { title: 'Custom Risk Models', description: 'Configure custom risk models with your proprietary data signals', time: '45 min', color: '#33a1de' },
    { title: 'Multi-Region Deployment', description: 'Deploy across multiple jurisdictions with regulatory compliance', time: '30 min', color: '#2ecc71' },
    { title: 'White-Label Integration', description: 'Customize the protection experience with your brand', time: '20 min', color: '#e85d4a' },
  ];
  const { t } = useLocale();

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <Link to="/developers" className="inline-flex items-center gap-1 text-sm text-[#8888a0] hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-3 h-3 rotate-180" /> {t('nav.developers')}
            </Link>
            <h1 className="text-4xl text-white tracking-tight mb-6">Integration Guides</h1>
            <p className="text-[#8888a0] mb-12">Step-by-step guides for common integration patterns.</p>
          </ScrollReveal>
          <div className="space-y-3">
            {guides.map((guide, i) => (
              <ScrollReveal key={guide.title} delay={i * 40}>
                <div className="relative rounded-2xl border border-white/[0.10] bg-white/[0.05] p-5 overflow-hidden transition-all duration-300 hover:border-white/[0.16] hover:-translate-y-0.5">
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r" style={{ background: guide.color, opacity: 0.4 }} />
                  <div className="flex items-center justify-between pl-3">
                    <div>
                      <h3 className="text-white mb-1">{guide.title}</h3>
                      <p className="text-sm text-[#8888a0]">{guide.description}</p>
                    </div>
                    <span className="text-xs text-[#8888a0] shrink-0 ml-4 px-2.5 py-1 rounded-full bg-white/[0.04]">{guide.time}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}

export function SandboxPage() {
  const { t } = useLocale();
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <Link to="/developers" className="inline-flex items-center gap-1 text-sm text-[#8888a0] hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-3 h-3 rotate-180" /> {t('nav.developers')}
            </Link>
            <h1 className="text-4xl text-white tracking-tight mb-6">Sandbox</h1>
            <p className="text-[#8888a0] mb-8">Full-featured sandbox environment mirroring production. Test integrations without real transactions.</p>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Sandbox URL', value: 'https://sandbox.api.yas.io/v2', color: '#2ecc71' },
                { label: 'Documentation', value: 'https://docs.yas.io/sandbox', color: '#33a1de' },
                { label: 'Test Data', value: 'Pre-loaded with sample policies', color: '#e85d4a' },
                { label: 'Rate Limits', value: '1,000 requests/minute', color: '#33a1de' },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                    <p className="text-xs text-[#8888a0]">{item.label}</p>
                  </div>
                  <p className="text-sm text-white/80 font-mono">{item.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <CodeBlock
              code={`# Set sandbox environment
export YAS_API_URL=https://sandbox.api.yas.io/v2
export YAS_API_KEY=sk_test_your_sandbox_key

# Test a pricing request
curl $YAS_API_URL/pricing/quote \\
  -H "Authorization: Bearer $YAS_API_KEY" \\
  -d '{"product":"smart-transport","signals":{"driver_id":"test_001"}}'`}
              language="bash"
              title="Sandbox Quick Start"
            />
          </ScrollReveal>
        </div>
      </section>
      <CTABand />
    </div>
  );
}

export function StatusPage() {
  const services = [
    { name: 'API Gateway', status: 'operational', uptime: '99.99%' },
    { name: 'Pricing Engine', status: 'operational', uptime: '99.97%' },
    { name: 'Policy Service', status: 'operational', uptime: '99.95%' },
    { name: 'Claims Engine', status: 'operational', uptime: '99.98%' },
    { name: 'Payout Service', status: 'operational', uptime: '99.96%' },
    { name: 'Webhook Delivery', status: 'operational', uptime: '99.94%' },
    { name: 'Partner Console', status: 'operational', uptime: '99.99%' },
    { name: 'Sandbox', status: 'operational', uptime: '99.90%' },
  ];
  const { t } = useLocale();

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <Link to="/developers" className="inline-flex items-center gap-1 text-sm text-[#8888a0] hover:text-white mb-6 transition-colors">
              <ArrowRight className="w-3 h-3 rotate-180" /> {t('nav.developers')}
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#2ecc71] animate-pulse" />
              <h1 className="text-4xl text-white tracking-tight">All Systems Operational</h1>
            </div>
            <p className="text-[#8888a0] mb-12">Current platform status and service health.</p>
          </ScrollReveal>

          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.name} delay={i * 30}>
                <div className={`flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors ${i > 0 ? 'border-t border-white/[0.03]' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#2ecc71]" />
                    <span className="text-white/80 text-sm">{svc.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-[#8888a0]">{svc.uptime} uptime</span>
                    <span className="text-xs text-[#2ecc71]">Operational</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}