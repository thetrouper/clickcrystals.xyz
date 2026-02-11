'use client';

import { Container } from '@/components/ui/Container';
import Link from 'next/link';

type NavLinkProps = {
  label: string;
  url: string;
  target?: string;
  onLinkClick?: () => void;
};

export const NavLink = ({ label, url, target = '', onLinkClick }: NavLinkProps) => {
  return (
    <Container>
      <Link
        href={url}
        target={target}
        className="transition items-center hover:text-white duration-150 ease-in-out flex font-medium px-4 py-3 transiion-nav"
        onClick={onLinkClick}
      >
        {label}
      </Link>
    </Container>
  );
};
