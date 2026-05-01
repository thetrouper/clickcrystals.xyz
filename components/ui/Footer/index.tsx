'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const YEAR = new Date().getFullYear();

const socials = [
  {
    icon: faDiscord,
    href: 'https://discord.gg/n9hfHNJVe6',
    label: 'Discord',
    color: 'hover:text-[#5865F2]',
  },
  {
    icon: faGithub,
    href: 'https://github.com/clickcrystals-development/ClickCrystals',
    label: 'GitHub',
    color: 'hover:text-white',
  },
  {
    icon: faYoutube,
    href: 'https://www.youtube.com/@itzispyder',
    label: 'YouTube',
    color: 'hover:text-[#FF0000]',
  },
];

const platforms: { label: string; href: string; icon: string | null }[] = [
  {
    label: 'CurseForge',
    href: 'https://www.curseforge.com/minecraft/mc-mods/clickcrystals',
    icon: '/icons/curseforge.svg',
  },
  {
    label: 'Modrinth',
    href: 'https://modrinth.com/mod/clickcrystals',
    icon: '/icons/modrinth.svg',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/clickcrystals-development/ClickCrystals',
    icon: null,
  },
];

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, moving: false });
  const moveTimerRef = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    let visible = false;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const trail: { x: number; y: number; age: number }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.moving = true;
      trail.push({ x: mouseRef.current.x, y: mouseRef.current.y, age: 0 });
      if (trail.length > 40) trail.shift();
      clearTimeout(moveTimerRef.current);
      moveTimerRef.current = setTimeout(() => {
        mouseRef.current.moving = false;
      }, 80);
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      trail.length = 0;
    };

    canvas.parentElement?.addEventListener('mousemove', handleMouseMove, {
      passive: true,
    });
    canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave, {
      passive: true,
    });

    const isMobile = window.innerWidth < 640;
    const particles = Array.from({ length: isMobile ? 6 : 25 }, () => ({
      x: Math.random() * (canvas.width || 800),
      y: Math.random() * (canvas.height || 400),
      size: Math.random() * 1.8 + 0.4,
      baseSpeedY: -(Math.random() * 0.4 + 0.08),
      baseSpeedX: (Math.random() - 0.5) * 0.15,
      vx: 0,
      vy: 0,
      opacity: Math.random() * 0.35 + 0.15,
      pulse: Math.random() * Math.PI * 2,
      hue: 210 + Math.random() * 30,
    }));

    const draw = () => {
      if (!visible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      trail.forEach((t) => {
        t.age++;
      });

      let needsRedraw = false;
      particles.forEach((p) => {
        p.pulse += 0.005;
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (mx > 0 && dist < 180) {
          needsRedraw = true;
          if (mouseRef.current.moving) {
            const f = (180 - dist) / 180;
            p.vx += dx * f * 0.02;
            p.vy += dy * f * 0.02;
          } else {
            const angle = Math.atan2(dy, dx);
            const f = (180 - dist) / 180;
            p.vx +=
              (-Math.sin(angle) * 0.8 + (dx / (dist || 1)) * 0.2) * f * 0.035;
            p.vy +=
              (Math.cos(angle) * 0.8 + (dy / (dist || 1)) * 0.2) * f * 0.035;
          }
        } else {
          p.vx += (p.baseSpeedX - p.vx) * 0.04;
          p.vy += (p.baseSpeedY - p.vy) * 0.04;
        }

        if (Math.abs(p.vx) > 0.01 || Math.abs(p.vy) > 0.01) needsRedraw = true;

        p.vx *= 0.93;
        p.vy *= 0.93;
        p.x += p.vx + p.baseSpeedX * 0.3;
        p.y += p.vy + p.baseSpeedY * 0.3;

        if (p.y < -5) {
          p.y = canvas.height + 5;
          p.x = Math.random() * canvas.width;
          p.vx = 0;
          p.vy = 0;
        }
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;

        const a = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        const bright = dist < 180 && mx > 0 ? Math.min(1, a * 2.2) : a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${bright})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) animId = requestAnimationFrame(draw);
        else cancelAnimationFrame(animId);
      },
      { threshold: 0.1 },
    );
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: 'rgb(3,4,10)' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(99,102,241,0.5), transparent)',
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[rgb(3,4,10)] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-48 bg-blue-600/[0.02] blur-[80px] pointer-events-none" />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none whitespace-nowrap font-black"
        style={{
          fontSize: 'clamp(120px, 18vw, 320px)',
          letterSpacing: '-0.04em',
          color: 'rgba(255,255,255,0.03)',
          lineHeight: 1,
          transform: 'translateX(-50%) translateY(25%)',
          width: '100vw',
          textAlign: 'center',
        }}
      >
        CLICKCRYSTALS
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-16 flex flex-col items-center gap-10 select-none">
        <div className="text-center leading-none">
          <div
            className="font-light tracking-[0.3em] uppercase text-white/60"
            style={{ fontSize: 'clamp(12px, 3vw, 28px)' }}
          >
            GET
          </div>
          <div
            className="font-black tracking-tighter"
            style={{
              fontSize: 'clamp(36px, 7vw, 88px)',
              letterSpacing: '-0.04em',
              backgroundImage:
                'linear-gradient(135deg, #ffffff 20%, #bfdbfe 50%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(96,165,250,0.4))',
            }}
          >
            CLICKCRYSTALS
          </div>
        </div>

        <div className="flex flex-row gap-3 flex-wrap justify-center">
          <Link
            href="/get"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full text-sm transition-colors duration-150 text-center"
          >
            Download Latest
          </Link>
          <Link
            href="/download"
            className="px-8 py-3 text-white font-semibold rounded-full text-sm transition-all duration-150 text-center border border-white/10 hover:border-white/20"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(96,165,250,0.06) 50%, rgba(255,255,255,0.04) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            Browse Versions
          </Link>
        </div>

        <div className="flex flex-row items-center justify-center gap-3 flex-wrap">
          {platforms.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-slate-300 hover:text-white text-sm font-medium rounded-full border border-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(96,165,250,0.05) 50%, rgba(255,255,255,0.03) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              {icon ? (
                <Image
                  src={icon}
                  alt={label}
                  width={14}
                  height={14}
                  className="opacity-70"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-3.5 h-3.5 opacity-70"
                />
              )}
              {label}
            </Link>
          ))}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 -mt-4">
          <span className="text-slate-400 text-xs">
            © {YEAR} ClickCrystals. Not affiliated with Mojang or Microsoft.
          </span>
          <div className="flex items-center gap-5">
            {socials.map(({ icon, href, label, color }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-slate-400 transition-colors duration-150 ${color}`}
              >
                <FontAwesomeIcon icon={icon} className="w-4 h-4" />
              </Link>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-slate-400 hover:text-white text-xs transition-colors duration-150"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
