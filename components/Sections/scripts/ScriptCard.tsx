'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Container } from '@/components/ui/Container';
import { useRef, useState } from 'react';

interface ScriptCardProps {
  title: string;
  author: string;
  description: string;
  script: string;
}

export default function ScriptCard({
  title,
  author,
  description,
  script,
}: ScriptCardProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const blob = new Blob([script], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, '-')}.ccs`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 rounded-lg p-4 transition-all group">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleCopyClick}
            className="text-xs px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded font-medium transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={handleDownloadClick}
            className="text-xs px-2 py-1 bg-emerald-800 hover:bg-emerald-700 text-emerald-300 hover:text-emerald-200 rounded font-medium transition-colors"
          >
            Download
          </button>
        </div>
      </div>
      <p className="text-xs text-slate-500 mb-2 font-medium">by {author}</p>
      <p className="text-sm text-slate-400 line-clamp-1 leading-relaxed">
        {description}
      </p>
      <div className="hidden group-hover:block mt-3 bg-slate-950/50 border border-slate-800 rounded p-2 max-h-32 overflow-y-auto">
        <pre ref={preRef} className="text-xs leading-relaxed">
          <code className="text-emerald-500/80 font-mono">{script}</code>
        </pre>
      </div>
    </div>
  );
}
