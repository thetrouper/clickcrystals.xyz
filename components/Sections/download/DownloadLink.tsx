'use client';

import { Container } from '@/components/ui/Container';
import Link from 'next/link';

type DownloadLinkProps = {
  label: string;
  icon: any;
  className?: string;
  link: string;
  primary?: boolean;
};

export const DownloadLink = ({
  label,
  icon,
  className = '',
  link,
  primary = false,
}: DownloadLinkProps) => {
  return (
    <Container tapScale={0.97}>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative flex items-center justify-center gap-3 w-full sm:w-auto px-4 py-3 md:px-6 md:py-4 text-sm md:text-base whitespace-nowrap ${
          primary
            ? 'bg-blue-600 hover:bg-blue-500 border border-blue-700 shadow-[inset_0_1px_0_0_rgba(96,165,250,0.3)] active:scale-95'
            : 'bg-slate-800/30 hover:bg-slate-800/60 border border-slate-900/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.2)] active:scale-95'
        } text-white font-semibold rounded-full transition-all duration-150 ${className}`}
      >
        <div className="flex items-center gap-3">
          <span className="w-6 flex items-center justify-center">{icon}</span>
          <span>{label}</span>
        </div>
      </Link>
    </Container>
  );
};
