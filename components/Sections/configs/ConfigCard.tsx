'use client';

import { JsonValue } from '@prisma/client/runtime/library';
import ConfigCardControls from './ConfigCardControls.tsx';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

export type Config = {
  id: number;
  title: string;
  description: string;
  user: any;
  categories: string[];
  config: JsonValue;
};

export default function ConfigCard({ config }: { config: Config }) {
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(config.config, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.title.toLowerCase().replace(/\s+/g, '-')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="relative rounded-2xl flex flex-col h-full transition-all duration-300 group cursor-default overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="flex-grow p-5">
        <div className="flex items-center gap-2 mb-4">
          {config.user.avatar !== '#' ? (
            <Avatar className="w-5 h-5 shrink-0">
              <AvatarImage
                src={config.user.avatar}
                alt={config.user.name}
                className="rounded-full"
              />
              <AvatarFallback className="text-[8px] bg-slate-800 text-slate-400 rounded-full">
                {config.user.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ) : (
            <div
              className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <svg
                className="w-3 h-3 text-slate-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
          )}
          <span className="text-xs text-slate-400">{config.user.name}</span>
          <div className="flex-1" />
          {config.categories.slice(0, 2).map((category, index) => (
            <span
              key={index}
              className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400 px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              {category}
            </span>
          ))}
        </div>

        <h3
          className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors duration-200 mb-2 leading-snug"
          style={{ letterSpacing: '-0.02em' }}
        >
          {config.title}
        </h3>

        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
          {config.description}
        </p>
      </div>

      <div
        className="px-5 pb-5 pt-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <ConfigCardControls downloadAction={handleDownload} config={config} />
      </div>
    </div>
  );
}
