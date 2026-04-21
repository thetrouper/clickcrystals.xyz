'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  (
    { className, children, as: Component = 'button', ...props },
    forwardedRef,
  ) => {
    const localRef = useRef<HTMLElement>(null);
    useEffect(() => {
      if (typeof window === 'undefined') return;
      const element = localRef.current;
      if (!element) return;
      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(element, {
            x: x * 0.3,
            y: y * 0.3,
            ease: 'power2.out',
            duration: 0.4,
          });
        };
        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            ease: 'elastic.out(1, 0.3)',
            duration: 1.2,
          });
        };
        element.addEventListener('mousemove', handleMouseMove as any);
        element.addEventListener('mouseleave', handleMouseLeave);
        return () => {
          element.removeEventListener('mousemove', handleMouseMove as any);
          element.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, element);
      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === 'function') forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn('cursor-pointer', className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
MagneticButton.displayName = 'MagneticButton';

const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6 text-slate-500">
    <span>Crystal PvP Mod</span> <span className="text-blue-500/60">✦</span>
    <span>100+ Modules</span> <span className="text-blue-400/60">✦</span>
    <span>Custom Scripting</span> <span className="text-blue-500/60">✦</span>
    <span>Precision Hotkeys</span> <span className="text-blue-400/60">✦</span>
    <span>Active Community</span> <span className="text-blue-500/60">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !wrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: '10vh', scale: 0.8, opacity: 0 },
        {
          y: '0vh',
          scale: 1,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 80%',
            end: 'bottom bottom',
            scrub: 1,
          },
        },
      );
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 40%',
            end: 'bottom bottom',
            scrub: 1,
          },
        },
      );
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-[rgb(5,5,5)] text-white">
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            CLICKCRYSTALS
          </div>

          {/* Marquee */}
          <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-white/5 bg-black/40 backdrop-blur-md py-4 z-10 -rotate-2 scale-110">
            <div className="flex w-max animate-footer-scroll-marquee text-xs font-bold tracking-[0.3em] uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-5xl md:text-8xl font-black footer-text-glow tracking-tighter mb-12 text-center"
            >
              Get ClickCrystals
            </h2>

            <div
              ref={linksRef}
              className="flex flex-col items-center gap-6 w-full"
            >
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton
                  as="a"
                  href="/get"
                  className="footer-glass-pill px-10 py-5 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3"
                >
                  Download Latest
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="/download"
                  className="footer-glass-pill px-10 py-5 rounded-full text-slate-300 font-bold text-sm md:text-base flex items-center gap-3"
                >
                  Browse Versions
                </MagneticButton>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-2">
                {[
                  {
                    label: 'CurseForge',
                    link: 'https://www.curseforge.com/minecraft/mc-mods/clickcrystals',
                    icon: '/icons/curseforge.svg',
                  },
                  {
                    label: 'Modrinth',
                    link: 'https://modrinth.com/mod/clickcrystals',
                    icon: '/icons/modrinth.svg',
                  },
                  {
                    label: 'PlanetMC',
                    link: 'https://www.planetminecraft.com/mod/clickcrystal/',
                    icon: '/icons/planetmc.svg',
                  },
                ].map(({ label, link, icon }) => (
                  <MagneticButton
                    key={label}
                    as="a"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-glass-pill px-5 py-3 rounded-full text-slate-400 font-medium text-xs md:text-sm flex items-center gap-2 hover:text-white"
                  >
                    <Image
                      src={icon}
                      alt={label}
                      width={16}
                      height={16}
                      className="w-4 h-4 opacity-60"
                    />
                    {label}
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="ClickCrystals"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="text-slate-500 text-xs tracking-widest uppercase">
                © {new Date().getFullYear()} ClickCrystals
              </span>
            </div>

            <div className="flex items-center gap-4">
              {[
                {
                  icon: faDiscord,
                  url: 'https://discord.gg/n9hfHNJVe6',
                  label: 'Discord',
                  color: 'hover:text-[#5865F2]',
                },
                {
                  icon: faGithub,
                  url: 'https://github.com/clickcrystals-development/ClickCrystals',
                  label: 'GitHub',
                  color: 'hover:text-white',
                },
                {
                  icon: faYoutube,
                  url: 'https://www.youtube.com/@itzispyder',
                  label: 'YouTube',
                  color: 'hover:text-[#FF0000]',
                },
              ].map(({ icon, url, label, color }) => (
                <Link
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-slate-600 transition-colors ${color}`}
                >
                  <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                </Link>
              ))}
            </div>

            <MagneticButton
              as="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full footer-glass-pill flex items-center justify-center text-slate-500 hover:text-white group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
