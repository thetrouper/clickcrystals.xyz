'use client';

import { useRef, useState } from 'react';

interface ScriptCardProps {
  title: string;
  author: string;
  description: string;
  script: string;
  category: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export default function ScriptCard({
  title,
  author,
  description,
  script,
  category,
  isExpanded = false,
  onToggle,
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
    const blob = new Blob([script], { type: 'application/octet-stream' });
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
    <div
      className="relative bg-slate-900/50 hover:bg-slate-800/50 rounded-lg p-4 transition-all duration-200 group cursor-pointer shadow-[inset_0_1px_0_0_rgba(148,163,184,0.15)]"
      onClick={onToggle}
    >
      <div className="flex items-start justify-between mb-3 gap-3">
        <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors leading-tight">
          {title}
        </h3>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopyClick();
            }}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Copy"
          >
            {copied ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={handleDownloadClick}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Download"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <span className="flex items-center gap-1 text-xs text-slate-400">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
          {author}
        </span>
        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
        <span className="text-xs text-blue-400/60 capitalize">{category}</span>
      </div>
      <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
        {description}
      </p>
      <div
        className={`${isExpanded ? 'block' : 'hidden'} mt-3 bg-slate-950/80 border border-slate-700/50 rounded p-3 max-h-32 overflow-y-auto`}
      >
        <pre ref={preRef} className="text-xs leading-relaxed">
          <code className="text-slate-300 font-mono">{script}</code>
        </pre>
      </div>
    </div>
  );
}
