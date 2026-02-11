'use client';

import { useEffect, useState } from 'react';

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`tracking-tight text-white sticky top-0 z-[99999] transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-black/30 shadow-lg' : ''
      }`}
    >
      {children}
    </div>
  );
}
