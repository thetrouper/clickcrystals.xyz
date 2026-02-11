'use client';

import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

type NavLinkProps = {
  label: string;
  url: string;
  target?: string;
  onLinkClick?: () => void;
};

export const NavLink = ({
  label,
  url,
  target = '',
  onLinkClick,
}: NavLinkProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const isExternal = target === '_blank' || url.startsWith('http');

  if (isExternal) {
    return (
      <Container>
        <a
          href={url}
          target={target}
          className="transition items-center hover:text-white duration-150 ease-in-out flex font-medium px-4 py-3 transiion-nav"
          onClick={onLinkClick}
        >
          {label}
        </a>
      </Container>
    );
  }

  return (
    <Container>
      <button
        onClick={() => {
          onLinkClick?.();
          startTransition(() => {
            router.push(url);
          });
        }}
        className={`transition items-center hover:text-white duration-150 ease-in-out flex font-medium px-4 py-3 transiion-nav ${isPending ? 'opacity-50' : ''}`}
      >
        {label}
      </button>
    </Container>
  );
};
