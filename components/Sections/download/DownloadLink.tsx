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
    <Container tapScale={0.95}>
      <Link
        href={link}
        className={`rounded-lg text-white font-semibold px-2.5 md:px-5 py-2.5 text-sm transition-colors duration-150 ${className}`}
      >
        {icon} <span className="hidden md:block ml-2">{label}</span>
      </Link>
    </Container>
  );
};
