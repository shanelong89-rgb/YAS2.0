import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = 'bash', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0d0d14] overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.08] bg-white/[0.04]">
          <span className="text-xs text-[#8888a0]">{title}</span>
          <span className="text-xs text-[#8888a0]/60">{language}</span>
        </div>
      )}
      <div className="relative group">
        <pre className="p-4 overflow-x-auto text-sm text-[#c4c4d4] leading-relaxed">
          <code>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className={`
            absolute top-3 right-3 p-2 rounded-md border transition-all duration-[160ms] ease-out
            ${
              copied
                ? 'border-green-500/30 bg-green-500/10 text-green-400'
                : 'border-white/[0.06] bg-white/[0.04] text-[#8888a0] opacity-0 group-hover:opacity-100 hover:text-white'
            }
          `}
          aria-label="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}