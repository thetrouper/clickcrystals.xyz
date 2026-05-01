'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bg = isHome
    ? scrolled
      ? 'backdrop-blur-md bg-[rgb(7,10,20)]/80 shadow-lg'
      : 'bg-[rgb(7,10,20)]'
    : 'backdrop-blur-md bg-[rgb(7,10,20)]/80 shadow-lg border-b border-white/5';

  return (
    <div
      className={`tracking-tight text-white sticky top-0 z-[99999] transition-all duration-300 ${bg}`}
    >
      {children}
    </div>
  );
}
