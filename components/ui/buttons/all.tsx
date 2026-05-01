'use client';

import Link from 'next/link';
import { useTransition } from 'react';
import { Container } from '../Container';

type GetClickCrystalsProps = {
  name?: string;
  link?: string;
  variant?: 'primary' | 'secondary';
};

const secondaryClass =
  'inline-block w-full sm:w-auto px-8 py-3.5 text-white font-semibold rounded-full transition-all text-sm text-center duration-200 active:scale-95 border border-slate-900/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.2)]';

const secondaryStyle = {
  backgroundColor: 'rgb(22,30,48)',
} as React.CSSProperties;

const secondaryHoverStyle = {
  backgroundColor: 'rgb(30,41,59)',
} as React.CSSProperties;

export function GetClickCrystalsButton({
  name = 'Get ClickCrystals',
  link = '/download',
  variant = 'primary',
}: GetClickCrystalsProps) {
  return (
    <Container tapScale={0.97}>
      <Link
        href={link}
        className={`inline-block w-full sm:w-auto px-10 py-3.5 font-bold rounded-full transition-all text-sm text-center active:scale-95 duration-200 ${
          variant === 'primary'
            ? 'bg-blue-600 hover:bg-blue-500 text-white border border-blue-700 shadow-[inset_0_1px_0_0_rgba(96,165,250,0.3)]'
            : secondaryClass
        }`}
        style={variant === 'secondary' ? secondaryStyle : undefined}
        onMouseEnter={
          variant === 'secondary'
            ? (e) => (e.currentTarget.style.backgroundColor = 'rgb(30,41,59)')
            : undefined
        }
        onMouseLeave={
          variant === 'secondary'
            ? (e) => (e.currentTarget.style.backgroundColor = 'rgb(22,30,48)')
            : undefined
        }
      >
        {name}
      </Link>
    </Container>
  );
}

export function JoinDiscordButton() {
  return (
    <Container tapScale={0.97}>
      <Link
        href="https://discord.gg/n9hfHNJVe6"
        className={secondaryClass}
        style={secondaryStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = 'rgb(30,41,59)')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = 'rgb(22,30,48)')
        }
      >
        Join Discord
      </Link>
    </Container>
  );
}

export function ExploreScriptsButton() {
  return (
    <Container tapScale={0.97}>
      <Link
        href="/scripts"
        className={secondaryClass}
        style={secondaryStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = 'rgb(30,41,59)')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = 'rgb(22,30,48)')
        }
      >
        Explore Scripts
      </Link>
    </Container>
  );
}

export function MoreScreenshotsButton() {
  return (
    <Container tapScale={0.97}>
      <Link
        href="/gallery"
        className="inline-block w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all text-sm text-center active:scale-95 duration-200 border border-blue-700 shadow-[inset_0_1px_0_0_rgba(96,165,250,0.3)]"
      >
        Preview
      </Link>
    </Container>
  );
}
