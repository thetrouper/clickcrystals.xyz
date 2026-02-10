'use client';

import { Nav } from '@/components/ui/Nav/Nav';
import { Title } from '@/components/ui/Nav/Title';
import { Links } from '@/components/ui/Nav/Links';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`tracking-tight text-white sticky top-0 z-[99999] transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-black/30 shadow-lg' : ''
      }`}
    >
      <header className="w-full">
        <div className="w-full flex max-w-7xl justify-between md:items-center md:mx-auto md:px-4 md:py-4">
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
