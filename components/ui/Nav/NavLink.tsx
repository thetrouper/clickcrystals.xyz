'use client';

import { Container } from '@/components/ui/Container';
import Link from 'next/link';

type NavLinkProps = {
  label: string;
  url: string;
  target?: string;
  onLinkClick?: () => void;
};

<<<<<<< HEAD
export const NavLink = ({ label, url, target = '', onLinkClick }: NavLinkProps) => {
=======
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

>>>>>>> b81706c21f487605d3176e92abf95aa7509d27a5
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
