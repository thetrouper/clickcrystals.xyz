'use client';

import { Nav } from '@/components/ui/Nav/Nav';
import { Title } from '@/components/ui/Nav/Title';
import { Links } from '@/components/ui/Nav/Links';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    return () => {
      if (typeof window != null) {
        window.addEventListener('scroll', () => {
          setIsTop(window.scrollY === 0 && window.location.pathname === '/');
        });
      }
      setIsTop(window.scrollY === 0 && window.location.pathname === '/');
    };
  }, []);
  return (
    <div
      className="tracking-tight text-white sticky top-0 z-[99999] transition-transform duration-200"
      style={{
        background: isTop ? 'black' : "url('/textures/obsidian.png')",
        backgroundRepeat: 'repeat',
        imageRendering: 'pixelated',
        backgroundSize: '48px',
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
