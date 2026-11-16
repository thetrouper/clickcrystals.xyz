'use client';

import { Nav } from '@/components/ui/Nav/Nav';
import { Title } from '@/components/ui/Nav/Title';
import { Links } from '@/components/ui/Nav/Links';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="tracking-tight text-white sticky top-0 z-[99999] transition-all duration-300"
      style={{
        background: scrolled ? '#0C1525' : 'transparent',
        imageRendering: 'pixelated',
      }}
    >
      <header className="w-full duration-100 ease-in top-0 transition-all z-40">
        <div className="w-full flex max-w-7xl justify-between md:items-center md:mx-auto md:px-4 md:py-3.5">
          <div className="hidden md:flex justify-between">
            <Title />
          </div>
          <Nav />
          <Links />
          <div className="relative w-full md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>
    </div>
  );
}
