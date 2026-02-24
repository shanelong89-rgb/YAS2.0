import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import {
  Radio, Brain, DollarSign, FileCheck, Activity, Zap, Wallet, BookOpen,
} from 'lucide-react';

interface DiagramNode {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const nodes: DiagramNode[] = [
  { id: 'signals', label: 'Signals In', description: 'Behavioral, contextual, and environmental data ingested in real-time from partner platforms and IoT sources.', icon: <Radio className="w-5 h-5" /> },
  { id: 'risk', label: 'Risk Score', description: 'ML ensemble models generate risk scores with explainable outputs for regulatory compliance.', icon: <Brain className="w-5 h-5" /> },
  { id: 'pricing', label: 'Pricing', description: 'Dynamic pricing with configurable guardrails, A/B testing, and fairness constraints.', icon: <DollarSign className="w-5 h-5" /> },
  { id: 'issuance', label: 'Policy Issuance', description: 'Real-time policy creation by licensed insurer partners via YAS infrastructure. Sub-second issuance.', icon: <FileCheck className="w-5 h-5" /> },
  { id: 'monitoring', label: 'Monitoring', description: 'Active coverage monitoring with event detection, anomaly alerts, and parametric triggers.', icon: <Activity className="w-5 h-5" /> },
  { id: 'claim', label: 'Claim Decision', description: 'Automated claim adjudication with configurable rules, fraud scoring, and escalation workflows.', icon: <Zap className="w-5 h-5" /> },
  { id: 'payout', label: 'Instant Payout', description: 'Settlement to 50+ payment methods including wallets, bank accounts, and partner platforms.', icon: <Wallet className="w-5 h-5" /> },
  { id: 'ledger', label: 'Settlement & Ledger', description: 'Multi-party reconciliation with full audit trail, regulatory reporting, and treasury management.', icon: <BookOpen className="w-5 h-5" /> },
];

export function SystemDiagram() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {nodes.map((node, i) => (
          <ScrollReveal key={node.id} delay={i * 50}>
            <button
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              onFocus={() => setActiveNode(node.id)}
              onBlur={() => setActiveNode(null)}
              className={`
                relative w-full p-3 sm:p-4 rounded-xl text-left transition-all duration-[220ms] ease-out
                ${
                  activeNode === node.id
                    ? 'shadow-[0_0_30px_rgba(51,161,222,0.15)]'
                    : ''
                }
              `}
              style={{
                background: activeNode === node.id ? 'rgba(51,161,222,0.08)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${activeNode === node.id ? 'rgba(51,161,222,0.30)' : 'rgba(255,255,255,0.10)'}`,
                backdropFilter: 'blur(16px) saturate(1.3)',
                WebkitBackdropFilter: 'blur(16px) saturate(1.3)',
                boxShadow: activeNode === node.id
                  ? '0 8px 30px rgba(51,161,222,0.12), inset 0 1px 0 rgba(255,255,255,0.06)'
                  : '0 2px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              {/* Ring highlight on active */}
              {activeNode === node.id && !reducedMotion && (
                <div className="absolute inset-0 rounded-xl border-2 border-[#33a1de]/20 animate-pulse pointer-events-none" />
              )}

              <div className={`mb-2 sm:mb-3 transition-colors duration-[160ms] ${activeNode === node.id ? 'text-[#33a1de]' : 'text-[#8888a0]'}`}>
                {node.icon}
              </div>
              <p className="text-white text-xs sm:text-sm mb-1">{node.label}</p>
              <p className="text-[#8888a0] text-[10px] sm:text-xs leading-relaxed">{node.description}</p>

              {/* connector line to next node */}
              {i < nodes.length - 1 && i % 4 !== 3 && (
                <div className="absolute top-1/2 -right-2 md:-right-3 w-3 md:w-5 h-px bg-white/[0.08] hidden sm:block">
                  {activeNode === node.id && !reducedMotion && (
                    <div
                      className="absolute inset-y-0 left-0 w-2 h-px bg-[#33a1de]/60"
                      style={{
                        animation: 'signal-travel 1s ease-out forwards',
                      }}
                    />
                  )}
                </div>
              )}
            </button>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        @keyframes signal-travel {
          0% { width: 0; opacity: 1; }
          100% { width: 100%; opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}