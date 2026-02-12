'use client';

import { Container } from '@/components/ui/Container';
import Link from 'next/link';

type DownloadLinkProps = {
  label: string;
  icon: any;
  className?: string;
  link: string;
};

export const DownloadLink = ({
  label,
  icon,
  className = '',
  link,
}: DownloadLinkProps) => {
  return (
    <Container tapScale={0.97}>
      <Link
        href={link}
        className={`flex items-center justify-center gap-3 px-6 py-4 text-white font-semibold rounded-lg transition-all text-base ${className}`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </Container>
  );
};
